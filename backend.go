package main

import (
	"./serve"
	"src/github.com/tungyao/twngo/tnwb"
)

func main() {
	route := tnwb.NewRouter()
	route.Get("/", serve.Index)
	_ = route.Listening(":81", route)
}
