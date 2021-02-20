const timer = ms => new Promise(res => setTimeout(res, ms)) //creates a function to delay each iteration of the movements
async function scroll(pageNumber) {
    var target = screen.width * pageNumber - screen.width - (screen.width/3);
    var elmnt = document.getElementById("main");
    var y = elmnt.scrollTop;
    var scale = (y - target) / 100;
    for (var i = 0; i < 100; i ++) {
        elmnt.scrollTop = elmnt.scrollTop - scale;
    }
}