package main

import (
    "fmt"
    "github.com/tungyao/twngo/tndb"
    "github.com/tungyao/twngo/tnjson"
    "github.com/tungyao/twngo/tnwb"
    "io/ioutil"
    "log"
    "net/http"
    "os"
    "strings"
)
var json *tnjson.JSON = new(tnjson.JSON)
var db tndb.FUNC = new(tndb.DB).Use("rapidbook","Dong123.")
func notfound(w http.ResponseWriter, r *http.Request) {
    w.Header().Add("Content-Type","text/html")
    w.WriteHeader(200)
    if f,err:= os.Open("./static/template/404.html");err==nil{
        data, _ := ioutil.ReadAll(f)
        _, _ = w.Write(data)
    }
}
func handler(w http.ResponseWriter, r *http.Request)  {
    w.Header().Add("Content-Type","text/html")
    w.WriteHeader(200)
    if f,err:= os.Open("./static/template/index.html");err==nil{
        data, _ := ioutil.ReadAll(f)
        _, _ = w.Write(data)
    }
}
func redirect(w http.ResponseWriter, req *http.Request) {
    _host := strings.Split(req.Host, ":")
    fmt.Println(_host)
    fmt.Println("connect :80")
    target := "https://" + strings.Join(_host, ":") + req.URL.Path
    if len(req.URL.RawQuery) > 0 {
        target += "?" + req.URL.RawQuery
    }
    log.Printf("redirect to: %s", target)
    http.Redirect(w, req, target, http.StatusTemporaryRedirect)
}
func wxapp(w http.ResponseWriter,r *http.Request)  {
    data:=json.Encode(map[string]interface{}{"status":"success"})
    w.Header().Set("Content-Type","application/json")
    w.WriteHeader(200)
    _, _ = w.Write([]byte(data))
}

func to(json string,w http.ResponseWriter)  {
    w.Header().Set("Content-Type","application/json")
    w.WriteHeader(200)
    _, _ = w.Write([]byte(json))

}
func save(w http.ResponseWriter, r *http.Request)  {
    result, _ := ioutil.ReadAll(r.Body)
    sign:=json.Decode(string(result))["signature"].(string)
    id:=db.Insert("save").Key([]string{"NULL",sign,"NULL"}).Done()

    to("{status:\""+string(id)+"\"}",w)
}
func adduser(w http.ResponseWriter,r *http.Request)  {
    result, _ := ioutil.ReadAll(r.Body)
    sign:=json.Decode(string(result))["signature"].(string)
    if len(db.Select("user").Where(map[string]string{"openid":sign}).FindOne()) == 0 {
        id :=db.Insert("user").Key([]string{"NULL",json.Decode(string(result))["signature"].(string),"NULL"}).Done()
        to("{status}:\""+string(id)+"\"",w)
    }else {
        to("已经存在",w)
    }

}
func main() {
    router := tnwb.NewTrie()
    router.Get("/",handler)
    router.Get("/404",notfound)
    router.Get("/wxapp/",wxapp)
    router.Get("/wxapp/save",save)
    router.Get("/wxapp/adduser",adduser)
    _ = router.Listening(":443", "1835751_www.yaop.ink.pem", "1835751_www.yaop.ink.key", router)

}