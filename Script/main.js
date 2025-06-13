let lastscrollTop = 0;
let navbar;
let scrollHandlerAttached = false;
let sidebar;
let sidebarbtn;
let closesidebarbtn;
let overlay;
let gobackbutton;
let toggleColorgobackbtnSignUp;
let toggleColorgobackbtnSignIn;

function handleScroll() {
  const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
  if (scrollTop > lastscrollTop) {
    navbar.style.top = "-60px";
  } else {
    navbar.style.top = "0";
  }
  lastscrollTop = scrollTop <= 0 ? 0 : scrollTop;
}

function updateScrollBehavior() {
  if (!navbar) return;

  if (window.innerWidth > 768 && !scrollHandlerAttached) {
    window.addEventListener("scroll", handleScroll);
    scrollHandlerAttached = true;
  } else if (window.innerWidth <= 768 && scrollHandlerAttached) {
    window.removeEventListener("scroll", handleScroll);
    navbar.style.top = "0";
    navbar.style.position = "fixed";
    scrollHandlerAttached = false;
  }
}
function setUpScrollHideNavbar() {
  navbar = document.getElementById("navbar");
  if (!navbar) {
    return;
  }

  updateScrollBehavior();
  window.addEventListener("resize", updateScrollBehavior); // React to changes
}
document.addEventListener("DOMContentLoaded", setUpScrollHideNavbar);

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
function setupShowHideSidebar() {
  sidebar = document.querySelector(".sidebar");
  sidebarbtn = document.getElementById("sidebar-btn");
  closesidebarbtn = document.getElementById("close-sidebar-btn");
  overlay = document.getElementById("overlay");
  if (!sidebar || !sidebarbtn || !closesidebarbtn || !overlay){
    return;
  }
  sidebarbtn.addEventListener("click", () => {
    openSidebar();
  });

  closesidebarbtn.addEventListener("click", () => {
    closeSidebar();
  });

  overlay.addEventListener("click", () => {
    closeSidebar();
  })
  handleResize();
}
function openSidebar() {
  sidebar.classList.remove("inactive");
  sidebar.classList.add("active");
  overlay.classList.add("active");
  document.body.classList.add("no-scroll");
}
function closeSidebar() {
  sidebar.classList.remove("active");
  sidebar.classList.add("inactive");
  overlay.classList.remove("active");
  document.body.classList.remove("no-scroll");
}
function handleResize() {
  if (window.innerWidth >= 768) {
    sidebar.classList.add("inactive");
    sidebar.classList.remove("active");
    overlay.classList.remove("active");
  } else {
    sidebar.classList.remove("inactive");
  }
}
function toggleColorGoBackBtn() {
  gobackbutton = document.querySelector('.goback-main');
  toggleColorgobackbtnSignUp = document.getElementById('signUp');
  toggleColorgobackbtnSignIn = document.getElementById('signIn');
  if (gobackbutton && toggleColorgobackbtnSignUp) {
    toggleColorgobackbtnSignUp.addEventListener("click", () => {
      gobackbutton.classList.add('switch_to_signup');
    toggleColorgobackbtnSignIn.addEventListener("click", () => {
      gobackbutton.classList.remove('switch_to_signup');
    })
    });
  }
  else {
    return;
  }
}
window.addEventListener("resize", () => {
  handleResize();
})
document.addEventListener("DOMContentLoaded", () => {
  toggleColorGoBackBtn();
})
document.addEventListener("DOMContentLoaded", () => {
  includeHTML(() => {
    setUpScrollHideNavbar();
    setupShowHideSidebar();
    handleResize();
  }); 
});
