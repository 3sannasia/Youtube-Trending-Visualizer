window.post = function(url,data) {
    return fetch(url, {method: "POST", headers: {'Content-Type': 'application/json'}, body: JSON.stringify(data)});
}

url = "127.0.0.1:8080"

function sendQuery(number){
    post(url+"/advQ",{num:number})
}