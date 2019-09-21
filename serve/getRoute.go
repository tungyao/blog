package serve

import (
	"encoding/json"
	"net/http"
)

func Index(w http.ResponseWriter, r *http.Request) {
	_d, _ := json.Marshal(map[string]string{"name": "前后端分离"})
	w.Header().Set("Content-Type", "application/json")
	_, _ = w.Write(_d)
}
