$("#scroll-slide1").click(function() {
  $('html, body').animate({
      scrollTop: $("#container").offset().top
  }, 1500);
});

$("#scroll-slide2").click(function() {
  $('html, body').animate({
      scrollTop: $("#slide1").offset().top
  }, 1500);
});

$("#scroll-slide3").click(function() {
  $('html, body').animate({
      scrollTop: $("#slide2").offset().top
  }, 1500);
});

$("#scroll-slide4").click(function() {
  $('html, body').animate({
      scrollTop: $("#slide3").offset().top
  }, 1500);
});

$("#scroll-slide5").click(function() {
  $('html, body').animate({
      scrollTop: $("#slide4").offset().top
  }, 1500);
});

$("#scroll-slide6").click(function() {
  $('html, body').animate({
      scrollTop: $("#slide5").offset().top
  }, 1500);
});

$("#scroll-slide7").click(function() {
  $('html, body').animate({
      scrollTop: $("#slide6").offset().top
  }, 1500);
});

$("#scroll-slide8").click(function() {
  $('html, body').animate({
      scrollTop: $("#slide7").offset().top
  }, 1500);
});

$("#scroll-slide9").click(function() {
  $('html, body').animate({
      scrollTop: $("#slide8").offset().top
  }, 1500);
});

$("#scroll-slide10").click(function() {
  $('html, body').animate({
      scrollTop: $("#slide9").offset().top
  }, 1500);
});

window.onscroll = function() {smoothScroll()};

function smoothScroll() {
  var winScroll = document.body.scrollTop || document.documentElement.scrollTop;
  var height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
  var scrolled = (winScroll / (height + 937)) * 100;
  document.querySelector(".progress-bar").style.height = scrolled + 10 + "%";
}