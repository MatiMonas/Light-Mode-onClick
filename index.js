const $dot = document.querySelector(".dot");
const $sec = document.querySelector(".sec");
$dot.onclick = () => {
  $dot.classList.toggle("active");
  $sec.classList.toggle("active");
};

document.addEventListener("mousemove", function (e) {
  $dot.style.left = e.pageX + "px";
  $dot.style.top = e.pageY + "px";
});
