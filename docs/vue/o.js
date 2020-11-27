/*
// 简易版发布订阅
const obj = {};

const listen = function(eventKey, fn) {
  if (!obj[eventKey]) {
    obj[eventKey] = [];
  }
  obj[eventKey].push(fn);
};

const trigger = function(eventKey, data) {
  obj[eventKey] && obj[eventKey].map((event) => event(data));
};

listen("event1", () => {
  console.log("this is listen 1");
});
listen("event2", () => {
  console.log("this is listen 2");
});

trigger("event1"); // this is listen 1
trigger("event2"); // this is listen 2
*/
const Event = (function() {
  const obj = {};

  // 缓存队列
  const listen = (key, fn) => {
    if (!obj[key]) {
      obj[key] = [];
    }
    obj[key].push(fn);
  };

  // 发布消息
  const trigger = (key, ...rest) => {
    const fns = obj[key];

    if (!Array.isArray(fns) || fns.length === 0) {
      return false;
    }

    fns.forEach((item) => item(...rest));
  };

  // 取消订阅事件

  const remove = (key, fn) => {
    const fns = obj[key];

    if (!fns) return false;
    if (!fn) fns && (fns.length = 0);

    fns.forEach((item, index) => {
      if (fn === item) fns.splice(index, 1);
    });
    obj[key] = fns;
  };

  return {
    listen,
    trigger,
    remove,
  };
})();

// 测试用例
Event.listen("event1", (...args) => {
  console.log("this is listen 1: ", args);
});

const event1Cb = () => {
  console.log("this is listen 1.1");
};
Event.listen("event1", event1Cb);

Event.listen("event2", () => {
  console.log("this is listen 2");
});

Event.trigger("event1", "这是登录的用户信息", "这是用户的权限");
Event.trigger("event2");

Event.remove("event1", event1Cb);
Event.trigger("event1");
