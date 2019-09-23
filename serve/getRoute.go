package serve

import (
	"net/http"
)

type Cmd struct {
	User string
}

func Index(w http.ResponseWriter, r *http.Request) {
	gd := r.URL.Query().Get("name")
	w.Header().Set("Content-Type", "application/json")
	_, _ = w.Write([]byte(gd))
	r.Body.Close()
}
