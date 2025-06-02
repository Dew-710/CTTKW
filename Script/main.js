  let lastscrollTop = 0;
  let navbar;

function setUpScrollHideNavbar(){
  navbar = document.getElementById("navbar");
  if (!navbar) return;
  window.addEventListener('scroll', function(){

      const scrollTop = window.pageYOffset ||document.documentElement.scrollTop;

      if (scrollTop > lastscrollTop) {
          navbar.style.top = "-60px";
      }
      else {
          navbar.style.top='0';
      }
      lastscrollTop = scrollTop <= 0 ? 0 : scrollTop;
  });
}
function includeHTML(callback) {
  const elements = document.querySelectorAll('[include-html]');
  let remaining = elements.length;

  if (remaining === 0) {
    if (typeof callback === 'function') callback();
    return;
  }

  elements.forEach(elmt => {
    const file = elmt.getAttribute("include-html");
    if (file) {
      fetch(file)
        .then(response => response.ok ? response.text() : "Page not found.")
        .then(data => {
          elmt.innerHTML = data;
          elmt.removeAttribute("include-html");
          remaining--;
          if (remaining === 0 && typeof callback === 'function') {
            callback();
          }
        });
    } else {
      remaining--;
      if (remaining === 0 && typeof callback === 'function') {
        callback();
      }
    }
  });
}
includeHTML(setUpScrollHideNavbar);
