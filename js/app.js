const sec = document.querySelector(".sec");
const min = document.querySelector(".min");
const hr = document.querySelector(".hr");
setInterval(function(){

  let time = new Date();
  let secs = time.getSeconds() * 6;
  let mins = time.getMinutes() * 6;
  let hrs = time.getHours()* 30;
  sec.style.transform = `rotateZ(${secs}deg)`;
  min.style.transform = `rotateZ(${mins}deg)`;
  hr.style.transform = `rotateZ(${hrs+(mins/12)}deg)`;
});


// testionial silder
var btn = document.getElementsByClassName("btn");
var slide = document.getElementById("slide");

btn[0].onclick = function() {
  slide.style.transform = "translateX(0px)";
}
btn[1].onclick = function() {
  slide.style.transform = "translateX(-800px)";
}
btn[2].onclick = function() {
  slide.style.transform = "translateX(-1600px)";
}
btn[3].onclick = function() {
  slide.style.transform = "translateX(-2400px)";
}