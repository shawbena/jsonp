/**
 * jsonp 请求方法。
 * @param {String} globalCallback 用作 jsonp 回调的全局函数
 * @param {String} url script url
 */
function jsonp(url, globalCallback){
    var name, callback;
    if(typeof globalCallback && typeof globalCallback != 'string'){
        name = globalCallback.name || 'callback';
        callback = globalCallback.callback
    }
    var script = document.createElement('script');
    script.src = url + '?' + name + '=' + callback;
    document.head.appendChild(script);
}

module.exports = jsonp;