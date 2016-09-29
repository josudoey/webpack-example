console.log("test");
window.test = function () {
  require(["./echo"], function (echo) {
    echo().then(function (ws) {
      ws.send("hello");
      ws.close();
    });
  });
};

