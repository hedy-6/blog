Function.prototype.myCall = function(context) {
  context = context || global;
  context.fn = this;
  const result = context.fn(arguments);
  delete context.fn;
  return result;
};

var obj = {
  name: "Alice",
};

function fun(age) {
  return `${this.name}${age}`;
}


const url = "aaa?name=aaa&age=11";

function getParams(url) {
  const arr = url.split("?");
  const str = arr[1];
  const params = str.split("&");
  const obj = params.reduce((o, s) => {
    const [key, value] = s.split("=");
    o[key] = value;
    return o;
  }, {});
  return obj;
}

console.log(getParams(url));



跨域
jsonp 
webapck devSever proxy

node 


nginx 反向代理

listen 8080

 /api/
proxy_pass "/api"

/web/
proxy_pass ""


hook 
class 
compontdid 、update、unmout
useEffect (()=>{
    aaaa
    return ()=>{
        
    }
},[aaaa])

UseCallback
useMemo


key
domDiff key
vuex
 根状态 rootState 主题、用户
功能模块：moduleA,moduleB

mixins: 

组件通信
父子props，callback
主题，用户， redux

useState

