function scrollPage(pageNumber) {
    var elmnt = document.getElementById("main");
    var target = elmnt.clientHeight * (pageNumber - 1);
    elmnt.scrollTop = target;
}

let buttons = [];
buttons.push(document.getElementById("btn1"));
buttons.push(document.getElementById("btn2"));
buttons.push(document.getElementById("btn3"));
buttons.push(document.getElementById("btn4"));
buttons.push(document.getElementById("btn5"));
buttons.push(document.getElementById("btn6"));
buttons.push(document.getElementById("btn7"));
let backgrounds = [];
backgrounds.push(document.getElementById("one"));
backgrounds.push(document.getElementById("two"));
backgrounds.push(document.getElementById("three"));
backgrounds.push(document.getElementById("four"));
backgrounds.push(document.getElementById("five"));
backgrounds.push(document.getElementById("six"));
backgrounds.push(document.getElementById("seven"));

var dark = false;
function toggleDarkMode() {
    for (var i = 0; i < buttons.length; i ++) {
        buttons[i].classList.toggle("btn-Light");
    }
    backgrounds[0].classList.toggle("onedark");
    backgrounds[0].classList.toggle("dark");
    backgrounds[1].classList.toggle("twodark");
    backgrounds[1].classList.toggle("dark");
    backgrounds[2].classList.toggle("threedark");
    backgrounds[2].classList.toggle("dark");
    backgrounds[3].classList.toggle("fourdark");
    backgrounds[3].classList.toggle("dark");
    backgrounds[4].classList.toggle("fivedark");
    backgrounds[4].classList.toggle("dark");
    backgrounds[5].classList.toggle("sixdark");
    backgrounds[5].classList.toggle("dark");
    backgrounds[6].classList.toggle("sevendark");
    backgrounds[6].classList.toggle("dark");

    if (dark == true) {
      document.getElementById("logo").name = "moon"
      document.getElementById("floor").style.backgroundImage = "url('images/game/brick.png')";
      dark = false;
    } else if (dark == false) {
      document.getElementById("logo").name = "sunny"
      document.getElementById("floor").style.backgroundImage = "url('images/game/brick-dark.png')";
      dark = true;
    }
}
var myAudio = document.getElementById("myAudio");
var isPlaying = false;

function togglePlay() {
  isPlaying ? myAudio.pause() : myAudio.play();
  document.getElementById("music").classList.toggle("Playbtn");
  document.getElementById("music").classList.toggle("Stopbtn");
};

myAudio.onplaying = function() {
  isPlaying = true;
};
myAudio.onpause = function() {
  isPlaying = false;
};