let dom = document.getElementById("app");

let colorArr = ["red", "green", "blue"];

let timer = setInterval(function () {
  dom.style.color = colorArr[~~(Math.random() * colorArr.length)];
}, 500)

// if (module.hot) {
//   module.hot.accept();
// }