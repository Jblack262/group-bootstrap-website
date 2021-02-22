
var pageNum = {one: '1', two: 2, three: 3, four: 4, five: 5, six: 6, seven: 7};
function scroll(pageNumber) {
    var elmnt = document.getElementById("main");
    var target = elmnt.clientHeight * (pageNumber - 1);
    elmnt.scrollTop = target;
}