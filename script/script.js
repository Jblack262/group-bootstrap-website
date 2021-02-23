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

function toggleDarkMode() {
    for (var i = 0; i < buttons.length; i ++) {
        buttons[i].classList.toggle("btn-Light");
    }
}