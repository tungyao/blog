package serve

import (
	"encoding/json"
	"log"
	"net/http"
)

type Cmd struct {
	User string
}

func Index(w http.ResponseWriter, r *http.Request) {
	log.Println(r.Body)
	err := r.ParseForm()
	if err != nil {
		log.Fatal("parse form error ", err)
	}
	// 初始化请求变量结构
	formData := make(map[string]string)
	// 调用json包的解析，解析请求body
	_ = json.NewDecoder(r.Body).Decode(&formData)
	log.Println(formData)
	_d, _ := json.Marshal(formData)
	w.Header().Set("Content-Type", "application/json")
	_, _ = w.Write(_d)
}
