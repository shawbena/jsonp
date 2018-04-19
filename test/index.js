var script = document.createElement('script');
// /**/ typeof jsonpCallback === 'function' && jsonpCallback({"user":"tobi","msg":"hh"});
script.src = 'http://localhost:3000/jsonptest?callback=jsonpCallback';
document.body.appendChild(script);


// var xhr = new XMLHttpRequest();
// xhr.open('get', 'http://localhost:3000/jsonptest');
// xhr.onreadystatechange = function(){
//     if(xhr.readyState == 4){
//         // Failed to load http://localhost:3000/jsonptest: No 'Access-Control-Allow-Origin' header is present on the requested resource. Origin 'http://localhost:8080' is therefore not allowed access.
//         console.log(xhr.response);
//     }
// }
xhr.send();
function jsonpCallback(data){
    // {user: "tobi", msg: "hh"}
    console.log(data);
}

