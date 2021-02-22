
function scrollPage(pageNumber) {
    var elmnt = document.getElementById("main");
    var target = elmnt.clientHeight * (pageNumber - 1);
    elmnt.scrollTop = target;
}