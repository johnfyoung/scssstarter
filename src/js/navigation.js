(function(){
  var mobileBreakpoint = 768;
  var mobileMenuOpenClass = "mobile-menu-open";

  function mobileMenuSetup() {
    document.querySelector(".nav-top-menu-button").addEventListener("click", function(e){
      toggleMobileMenu();
    })

    window.addEventListener("resize", function(){
      if(window.innerWidth >= mobileBreakpoint && document.querySelector(".nav-top-menu-button").classList.contains(mobileMenuOpenClass)) {
        toggleMobileMenu();
      }
    })
  }

  function toggleMobileMenu() {
    document.body.classList.toggle(mobileMenuOpenClass);
    document.querySelector(".nav-top-menu-button").classList.toggle(mobileMenuOpenClass);
    document.querySelector(".nav-top-menu").classList.toggle(mobileMenuOpenClass);
  }

  mobileMenuSetup();
})()