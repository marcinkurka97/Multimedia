$("#scroll-slide1").click(function() {
  $('html, body').animate({
      scrollTop: $("#container").offset().top
  }, 100);
  // $(".scroll-item").siblings().removeClass('active');
  // $("#scroll-slide1").addClass('active');
});

$("#scroll-slide2").click(function() {
  $('html, body').animate({
      scrollTop: $("#slide1").offset().top
  }, 100);
  // $(".scroll-item").siblings().removeClass('active');
  // $("#scroll-slide2").addClass('active');
});

$("#scroll-slide3").click(function() {
  $('html, body').animate({
      scrollTop: $("#slide2").offset().top
  }, 100);
  // $(".scroll-item").siblings().removeClass('active');
  // $("#scroll-slide3").addClass('active');
});

$("#scroll-slide4").click(function() {
  $('html, body').animate({
      scrollTop: $("#slide3").offset().top
  }, 100);
  // $(".scroll-item").siblings().removeClass('active');
  // $("#scroll-slide4").addClass('active');
});

$("#scroll-slide5").click(function() {
  $('html, body').animate({
      scrollTop: $("#slide4").offset().top
  }, 100);
  // $(".scroll-item").siblings().removeClass('active');
  // $("#scroll-slide5").addClass('active');
});

$("#scroll-slide6").click(function() {
  $('html, body').animate({
      scrollTop: $("#slide5").offset().top
  }, 100);
  // $(".scroll-item").siblings().removeClass('active');
  // $("#scroll-slide6").addClass('active');
});

$("#scroll-slide7").click(function() {
  $('html, body').animate({
      scrollTop: $("#slide6").offset().top
  }, 100);
  // $(".scroll-item").siblings().removeClass('active');
  // $("#scroll-slide7").addClass('active');
});

$("#scroll-slide8").click(function() {
  $('html, body').animate({
      scrollTop: $("#slide7").offset().top
  }, 100);
  // $(".scroll-item").siblings().removeClass('active');
  // $("#scroll-slide8").addClass('active');
});

$("#scroll-slide9").click(function() {
  $('html, body').animate({
      scrollTop: $("#slide8").offset().top
  }, 100);
  // $(".scroll-item").siblings().removeClass('active');
  // $("#scroll-slide9").addClass('active');
});

$("#scroll-slide10").click(function() {
  $('html, body').animate({
      scrollTop: $("#slide9").offset().top
  }, 100);
  // $(".scroll-item").siblings().removeClass('active');
  // $("#scroll-slide10").addClass('active');
});

window.onscroll = function() {smoothScroll()};

function smoothScroll() {
  if(document.documentElement.scrollTop == 0) {
    $(".scroll-item").siblings().removeClass('active');
    $("#scroll-slide1").addClass('active');
  } else if (document.documentElement.scrollTop <= document.documentElement.clientHeight && document.documentElement.scrollTop < document.documentElement.clientHeight * 2) {
    $(".scroll-item").siblings().removeClass('active');
    $("#scroll-slide2").addClass('active');
  } else if (document.documentElement.scrollTop <= document.documentElement.clientHeight * 2 && document.documentElement.scrollTop < document.documentElement.clientHeight * 3) {
    $(".scroll-item").siblings().removeClass('active');
    $("#scroll-slide3").addClass('active');
  } else if (document.documentElement.scrollTop <= document.documentElement.clientHeight * 3 && document.documentElement.scrollTop < document.documentElement.clientHeight * 4) {
    $(".scroll-item").siblings().removeClass('active');
    $("#scroll-slide4").addClass('active');
  } else if (document.documentElement.scrollTop <= document.documentElement.clientHeight * 4 && document.documentElement.scrollTop < document.documentElement.clientHeight * 5) {
    $(".scroll-item").siblings().removeClass('active');
    $("#scroll-slide5").addClass('active');
  } else if (document.documentElement.scrollTop <= document.documentElement.clientHeight * 5 && document.documentElement.scrollTop < document.documentElement.clientHeight * 6) {
    $(".scroll-item").siblings().removeClass('active');
    $("#scroll-slide6").addClass('active');
  } else if (document.documentElement.scrollTop <= document.documentElement.clientHeight * 6 && document.documentElement.scrollTop < document.documentElement.clientHeight * 7) {
    $(".scroll-item").siblings().removeClass('active');
    $("#scroll-slide7").addClass('active');
  } else if (document.documentElement.scrollTop <= document.documentElement.clientHeight * 7 && document.documentElement.scrollTop < document.documentElement.clientHeight * 8) {
    $(".scroll-item").siblings().removeClass('active');
    $("#scroll-slide8").addClass('active');
  } else if (document.documentElement.scrollTop <= document.documentElement.clientHeight * 8 && document.documentElement.scrollTop < document.documentElement.clientHeight * 9) {
    $(".scroll-item").siblings().removeClass('active');
    $("#scroll-slide9").addClass('active');
  } else if (document.documentElement.scrollTop <= document.documentElement.clientHeight * 9 && document.documentElement.scrollTop < document.documentElement.clientHeight * 10) {
    $(".scroll-item").siblings().removeClass('active');
    $("#scroll-slide10").addClass('active');
  }

  var winScroll = document.body.scrollTop || document.documentElement.scrollTop;
  var height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
  var scrolled = (winScroll / (height + document.documentElement.clientHeight)) * 100;
  document.querySelector(".progress-bar").style.height = scrolled + 10 + "%";
}