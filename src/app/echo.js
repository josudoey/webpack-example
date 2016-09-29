module.exports = function () {
  return new Promise(function (resolve, reject) {
    var ws = new WebSocket("ws://echo.websocket.org/")
    ws.addEventListener("open", function () {
      console.log("ws open");
      resolve(ws);
    });
    ws.addEventListener("message", function (e) {
      console.log(e.data);
    });
    ws.addEventListener("error", function (err) {
      console.error(err);
      reject(err);
    })
    ws.addEventListener("close", function () {
      console.log("ws close");
    });
  });
}

