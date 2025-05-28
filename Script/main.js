var lastscrollTop;

navbar = document.getElementById('navbar');

window.addEventListener('scroll', function(){
    var scrollTop = window.pageYOffset ||document.documentElement.scrollTop;

    if (scrollTop > lastscrollTop) {
        navbar.style.top = "-60px";
    }
    else {
        navbar.style.top='0'
    }
    lastscrollTop = scrollTop;
});