$(document).ready(function(){
  'use strict';

  // ===== for FAQ =====
  const faqs = document.querySelectorAll(".faq");

  faqs.forEach((faq) => {
    faq.addEventListener("click", () => {
      faq.classList.toggle("active");
    });
  });
  // ===================

  // ===== for coundown =====
  // ===== Orientation class =====
  $("#countdown-active").countdown("2023/03/11 20:00", function(event) {
    $(this).html(event.strftime('<div class="countdown-box"><h2 class="single-countdown">%D</h2><span>Days</span></div> <div class="countdown-box"><h2 class="single-countdown">%H</h2><span>Hours</span></div> <div  class="countdown-box"><h2 class="single-countdown">%M</h2><span>Mins</span></div> <div  class="countdown-box"><h2 class="single-countdown">%S</h2><span>Secs</span></div>'));
  });
  // =================
  // ===== class 1 =====
  $("#countdown-active2").countdown("2023/03/15 20:00", function(event) {
    $(this).html(event.strftime('<div class="countdown-box"><h2 class="single-countdown">%D</h2><span>Days</span></div> <div class="countdown-box"><h2 class="single-countdown">%H</h2><span>Hours</span></div> <div  class="countdown-box"><h2 class="single-countdown">%M</h2><span>Mins</span></div> <div  class="countdown-box"><h2 class="single-countdown">%S</h2><span>Secs</span></div>'));
  });
  // =================
  // ===== class 2 =====
  $("#countdown-active3").countdown("2023/03/18 20:00", function(event) {
    $(this).html(event.strftime('<div class="countdown-box"><h2 class="single-countdown">%D</h2><span>Days</span></div> <div class="countdown-box"><h2 class="single-countdown">%H</h2><span>Hours</span></div> <div  class="countdown-box"><h2 class="single-countdown">%M</h2><span>Mins</span></div> <div  class="countdown-box"><h2 class="single-countdown">%S</h2><span>Secs</span></div>'));
  });
  // =================
  // ===== class 3 =====
  $("#countdown-active4").countdown("2023/03/20 20:00", function(event) {
    $(this).html(event.strftime('<div class="countdown-box"><h2 class="single-countdown">%D</h2><span>Days</span></div> <div class="countdown-box"><h2 class="single-countdown">%H</h2><span>Hours</span></div> <div  class="countdown-box"><h2 class="single-countdown">%M</h2><span>Mins</span></div> <div  class="countdown-box"><h2 class="single-countdown">%S</h2><span>Secs</span></div>'));
  });
  // =================
  // ===== class 4 =====
  $("#countdown-active5").countdown("2023/03/22 20:00", function(event) {
    $(this).html(event.strftime('<div class="countdown-box"><h2 class="single-countdown">%D</h2><span>Days</span></div> <div class="countdown-box"><h2 class="single-countdown">%H</h2><span>Hours</span></div> <div  class="countdown-box"><h2 class="single-countdown">%M</h2><span>Mins</span></div> <div  class="countdown-box"><h2 class="single-countdown">%S</h2><span>Secs</span></div>'));
  });
  // =================
  // ===== class 5 =====
  $("#countdown-active6").countdown("2023/03/25 20:00", function(event) {
    $(this).html(event.strftime('<div class="countdown-box"><h2 class="single-countdown">%D</h2><span>Days</span></div> <div class="countdown-box"><h2 class="single-countdown">%H</h2><span>Hours</span></div> <div  class="countdown-box"><h2 class="single-countdown">%M</h2><span>Mins</span></div> <div  class="countdown-box"><h2 class="single-countdown">%S</h2><span>Secs</span></div>'));
  });
  // =================
  // ===== class 6 =====
  $("#countdown-active7").countdown("2023/03/27 20:00", function(event) {
    $(this).html(event.strftime('<div class="countdown-box"><h2 class="single-countdown">%D</h2><span>Days</span></div> <div class="countdown-box"><h2 class="single-countdown">%H</h2><span>Hours</span></div> <div  class="countdown-box"><h2 class="single-countdown">%M</h2><span>Mins</span></div> <div  class="countdown-box"><h2 class="single-countdown">%S</h2><span>Secs</span></div>'));
  });
  // =================
  // ===== class 7 =====
  $("#countdown-active8").countdown("2023/03/29 20:00", function(event) {
    $(this).html(event.strftime('<div class="countdown-box"><h2 class="single-countdown">%D</h2><span>Days</span></div> <div class="countdown-box"><h2 class="single-countdown">%H</h2><span>Hours</span></div> <div  class="countdown-box"><h2 class="single-countdown">%M</h2><span>Mins</span></div> <div  class="countdown-box"><h2 class="single-countdown">%S</h2><span>Secs</span></div>'));
  });
  // =================
  // ===== class 8 =====
  $("#countdown-active9").countdown("2023/04/01 20:00", function(event) {
    $(this).html(event.strftime('<div class="countdown-box"><h2 class="single-countdown">%D</h2><span>Days</span></div> <div class="countdown-box"><h2 class="single-countdown">%H</h2><span>Hours</span></div> <div  class="countdown-box"><h2 class="single-countdown">%M</h2><span>Mins</span></div> <div  class="countdown-box"><h2 class="single-countdown">%S</h2><span>Secs</span></div>'));
  });
  // =================
  // ===== class 9 =====
  $("#countdown-active10").countdown("2023/04/03 20:00", function(event) {
    $(this).html(event.strftime('<div class="countdown-box"><h2 class="single-countdown">%D</h2><span>Days</span></div> <div class="countdown-box"><h2 class="single-countdown">%H</h2><span>Hours</span></div> <div  class="countdown-box"><h2 class="single-countdown">%M</h2><span>Mins</span></div> <div  class="countdown-box"><h2 class="single-countdown">%S</h2><span>Secs</span></div>'));
  });
  // =================
  // ===== class 10 =====
  $("#countdown-active11").countdown("2023/04/05 20:00", function(event) {
    $(this).html(event.strftime('<div class="countdown-box"><h2 class="single-countdown">%D</h2><span>Days</span></div> <div class="countdown-box"><h2 class="single-countdown">%H</h2><span>Hours</span></div> <div  class="countdown-box"><h2 class="single-countdown">%M</h2><span>Mins</span></div> <div  class="countdown-box"><h2 class="single-countdown">%S</h2><span>Secs</span></div>'));
  });
  // =================
  // ===== class 11 =====
  $("#countdown-active12").countdown("2023/04/08 20:00", function(event) {
    $(this).html(event.strftime('<div class="countdown-box"><h2 class="single-countdown">%D</h2><span>Days</span></div> <div class="countdown-box"><h2 class="single-countdown">%H</h2><span>Hours</span></div> <div  class="countdown-box"><h2 class="single-countdown">%M</h2><span>Mins</span></div> <div  class="countdown-box"><h2 class="single-countdown">%S</h2><span>Secs</span></div>'));
  });
  // =================
  // ===== class 12 =====
  $("#countdown-active13").countdown("2023/04/10 20:00", function(event) {
    $(this).html(event.strftime('<div class="countdown-box"><h2 class="single-countdown">%D</h2><span>Days</span></div> <div class="countdown-box"><h2 class="single-countdown">%H</h2><span>Hours</span></div> <div  class="countdown-box"><h2 class="single-countdown">%M</h2><span>Mins</span></div> <div  class="countdown-box"><h2 class="single-countdown">%S</h2><span>Secs</span></div>'));
  });
  // =================
  // ===== class 13 =====
  $("#countdown-active14").countdown("2023/04/12 20:00", function(event) {
    $(this).html(event.strftime('<div class="countdown-box"><h2 class="single-countdown">%D</h2><span>Days</span></div> <div class="countdown-box"><h2 class="single-countdown">%H</h2><span>Hours</span></div> <div  class="countdown-box"><h2 class="single-countdown">%M</h2><span>Mins</span></div> <div  class="countdown-box"><h2 class="single-countdown">%S</h2><span>Secs</span></div>'));
  });
  // =================
  // ===== class 14 =====
  $("#countdown-active15").countdown("2023/04/15 20:00", function(event) {
    $(this).html(event.strftime('<div class="countdown-box"><h2 class="single-countdown">%D</h2><span>Days</span></div> <div class="countdown-box"><h2 class="single-countdown">%H</h2><span>Hours</span></div> <div  class="countdown-box"><h2 class="single-countdown">%M</h2><span>Mins</span></div> <div  class="countdown-box"><h2 class="single-countdown">%S</h2><span>Secs</span></div>'));
  });
  // =================
  // ===== class 15 =====
  $("#countdown-active16").countdown("2023/04/17 20:00", function(event) {
    $(this).html(event.strftime('<div class="countdown-box"><h2 class="single-countdown">%D</h2><span>Days</span></div> <div class="countdown-box"><h2 class="single-countdown">%H</h2><span>Hours</span></div> <div  class="countdown-box"><h2 class="single-countdown">%M</h2><span>Mins</span></div> <div  class="countdown-box"><h2 class="single-countdown">%S</h2><span>Secs</span></div>'));
  });
  // =================
  // ===== class 16 =====
  $("#countdown-active17").countdown("2023/04/19 20:00", function(event) {
    $(this).html(event.strftime('<div class="countdown-box"><h2 class="single-countdown">%D</h2><span>Days</span></div> <div class="countdown-box"><h2 class="single-countdown">%H</h2><span>Hours</span></div> <div  class="countdown-box"><h2 class="single-countdown">%M</h2><span>Mins</span></div> <div  class="countdown-box"><h2 class="single-countdown">%S</h2><span>Secs</span></div>'));
  });
  // =================
  // ===== class 17 =====
  $("#countdown-active18").countdown("2023/04/22 20:00", function(event) {
    $(this).html(event.strftime('<div class="countdown-box"><h2 class="single-countdown">%D</h2><span>Days</span></div> <div class="countdown-box"><h2 class="single-countdown">%H</h2><span>Hours</span></div> <div  class="countdown-box"><h2 class="single-countdown">%M</h2><span>Mins</span></div> <div  class="countdown-box"><h2 class="single-countdown">%S</h2><span>Secs</span></div>'));
  });
  // =================
  // ===== class 18 =====
  $("#countdown-active19").countdown("2023/04/24 20:00", function(event) {
    $(this).html(event.strftime('<div class="countdown-box"><h2 class="single-countdown">%D</h2><span>Days</span></div> <div class="countdown-box"><h2 class="single-countdown">%H</h2><span>Hours</span></div> <div  class="countdown-box"><h2 class="single-countdown">%M</h2><span>Mins</span></div> <div  class="countdown-box"><h2 class="single-countdown">%S</h2><span>Secs</span></div>'));
  });
  // =================
  // ===== class 19 =====
  $("#countdown-active20").countdown("2023/04/26 20:00", function(event) {
    $(this).html(event.strftime('<div class="countdown-box"><h2 class="single-countdown">%D</h2><span>Days</span></div> <div class="countdown-box"><h2 class="single-countdown">%H</h2><span>Hours</span></div> <div  class="countdown-box"><h2 class="single-countdown">%M</h2><span>Mins</span></div> <div  class="countdown-box"><h2 class="single-countdown">%S</h2><span>Secs</span></div>'));
  });
  // =================
  // ===== class 20 =====
  $("#countdown-active21").countdown("2023/04/29 20:00", function(event) {
    $(this).html(event.strftime('<div class="countdown-box"><h2 class="single-countdown">%D</h2><span>Days</span></div> <div class="countdown-box"><h2 class="single-countdown">%H</h2><span>Hours</span></div> <div  class="countdown-box"><h2 class="single-countdown">%M</h2><span>Mins</span></div> <div  class="countdown-box"><h2 class="single-countdown">%S</h2><span>Secs</span></div>'));
  });
  // =================
  // ===== class 21 =====
  $("#countdown-active22").countdown("2023/05/01 20:00", function(event) {
    $(this).html(event.strftime('<div class="countdown-box"><h2 class="single-countdown">%D</h2><span>Days</span></div> <div class="countdown-box"><h2 class="single-countdown">%H</h2><span>Hours</span></div> <div  class="countdown-box"><h2 class="single-countdown">%M</h2><span>Mins</span></div> <div  class="countdown-box"><h2 class="single-countdown">%S</h2><span>Secs</span></div>'));
  });
  // =================
  // ===== class 22 =====
  $("#countdown-active23").countdown("2023/05/03 20:00", function(event) {
    $(this).html(event.strftime('<div class="countdown-box"><h2 class="single-countdown">%D</h2><span>Days</span></div> <div class="countdown-box"><h2 class="single-countdown">%H</h2><span>Hours</span></div> <div  class="countdown-box"><h2 class="single-countdown">%M</h2><span>Mins</span></div> <div  class="countdown-box"><h2 class="single-countdown">%S</h2><span>Secs</span></div>'));
  });
  // =================
  // ===== class 23 =====
  $("#countdown-active24").countdown("2023/05/06 20:00", function(event) {
    $(this).html(event.strftime('<div class="countdown-box"><h2 class="single-countdown">%D</h2><span>Days</span></div> <div class="countdown-box"><h2 class="single-countdown">%H</h2><span>Hours</span></div> <div  class="countdown-box"><h2 class="single-countdown">%M</h2><span>Mins</span></div> <div  class="countdown-box"><h2 class="single-countdown">%S</h2><span>Secs</span></div>'));
  });
  // =================
  // ===== class 24 =====
  $("#countdown-active25").countdown("2023/05/08 20:00", function(event) {
    $(this).html(event.strftime('<div class="countdown-box"><h2 class="single-countdown">%D</h2><span>Days</span></div> <div class="countdown-box"><h2 class="single-countdown">%H</h2><span>Hours</span></div> <div  class="countdown-box"><h2 class="single-countdown">%M</h2><span>Mins</span></div> <div  class="countdown-box"><h2 class="single-countdown">%S</h2><span>Secs</span></div>'));
  });
  // =================





});