const clock = document.getElementById("clock");
//const clock = document.querySelector('clock') // u can use queryselector tooo for this case.

setInterval(function () {
  let date = new Date();
  clock.innerHTML = date.toLocaleTimeString();
}, 1000);
