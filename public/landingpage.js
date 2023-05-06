AOS.init();
function openNavbar() {
    document.getElementById("sideNavigationBar")
        .style.width = "50%";
}

function closeNavbar() {
    document.getElementById("sideNavigationBar")
        .style.width = "0%";
}
function reveal() {
    var reveals = document.querySelectorAll(".reveal");
  }  
window.addEventListener('scroll', function() {
    // Check if the user has scrolled down far enough
    if (window.scrollY > 500) {
      // Load the content
      loadContent();
    }
  });
  


