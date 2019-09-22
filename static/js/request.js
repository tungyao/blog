class Request {
    static _root = "/_api";
    static get(url,data){
        let t = this;
        return new Promise(function(resolve, reject) {
            let XHR = new XMLHttpRequest();
            XHR.open('GET', t._root+url, true);
            XHR.setRequestHeader("Content-Type","application/json");
            XHR.onreadystatechange = function() {
                if (XHR.readyState === 4) {
                    if (XHR.status === 200) {
                        try {
                            let response = JSON.parse(XHR.responseText);
                            resolve(response);
                        } catch (e) {
                            reject(e);
                        }
                    } else {
                        reject(new Error(XHR.statusText));
                    }
                }
            };
            XHR.send(data);
        })
    }
}