let menuBtn = document.querySelector('#menu-btn');
let menu = document.querySelector('#menu');

menuBtn.addEventListener('click' , () =>{
    menu.classList.toggle('active')
})


{/* // Add active class to the current button (highlight it) */}
var header = document.getElementById("menu");
var btns = header.getElementsByClassName("btn");
for (var i = 0; i < btns.length; i++) {
  btns[i].addEventListener("click", function() {
  var current = document.getElementsByClassName("btn-active");
  current[0].className = current[0].className.replace(" btn-active", "");
  this.className += " btn-active";
  });
}
