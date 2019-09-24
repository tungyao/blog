package main

import (
	"log"
	"net/http"
)

func main() {
	//route := tnwb.NewRouter()
	//route.Get("/index", func(writer http.ResponseWriter, request *http.Request) {
	//	log.Println(request.Body)
	//	_, _ = writer.Write([]byte("hello"))
	//})
	//_ = route.Listening(":81", route)
	http.HandleFunc("/index", func(writer http.ResponseWriter, request *http.Request) {
		log.Println(request.Body)
		_, _ = writer.Write([]byte("hello"))
	})
	_ = http.ListenAndServe(":81", nil)
}
