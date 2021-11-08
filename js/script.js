

$(document).mouseup(function(e) {
  var div = $('nav ul li.submenu-active');
  if (!div.is(e.target) && div.has(e.target).length === 0) {
    div.removeClass('submenu-active');
  }
});

$(document).scroll(function() {
  var y = $(this).scrollTop();
  if (y > 300) {
    $('.arrow-up').slideDown(100);
  } else {
    $('.arrow-up').slideUp(100);
  }

}); 



var link = document.querySelector(".callback");
var popup = document.querySelector(".modal-content");
var close = popup.querySelector(".modal-close");
var overlay = document.querySelector(".modal-overlay");
var form = popup.querySelector("form");

 
link.addEventListener("click", function(event) {
  event.preventDefault();
  popup.classList.add("modal-content-show");
  overlay.classList.add("modal-overlay-show");

});

close.addEventListener("click", function(event) {
  event.preventDefault();
  popup.classList.remove("modal-content-show");
  overlay.classList.remove("modal-overlay-show");
  popup.classList.remove("modal-error");
});



overlay.addEventListener("click", function() {
  overlay.classList.remove("modal-overlay-show");
  popup.classList.remove("modal-content-show");

});

      
// When the user scrolls the page, execute myFunction
window.onscroll = function() {myFunction()};

// Get the header
var header = document.getElementById("myHeader");

// Get the offset position of the navbar
var sticky = header.offsetTop;

// Add the sticky class to the header when you reach its scroll position. Remove "sticky" when you leave the scroll position
function myFunction() {
  if (window.pageYOffset > sticky) {
    header.classList.add("sticky");
  } else {
    header.classList.remove("sticky");
  }
}      




