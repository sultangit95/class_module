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
  // ===== class =====
  $("#countdown-active").countdown("2023/03/11 20:00", function(event) {
    $(this).html(event.strftime('<div class="countdown-box"><h2 class="single-countdown">%D</h2><span>Days</span></div> <div class="countdown-box"><h2 class="single-countdown">%H</h2><span>Hours</span></div> <div  class="countdown-box"><h2 class="single-countdown">%M</h2><span>Mins</span></div> <div  class="countdown-box"><h2 class="single-countdown">%S</h2><span>Secs</span></div>'));
  });
  // =================
  // ===== class =====
  $("#countdown-active2").countdown("2023/03/15 20:00", function(event) {
    $(this).html(event.strftime('<div class="countdown-box"><h2 class="single-countdown">%D</h2><span>Days</span></div> <div class="countdown-box"><h2 class="single-countdown">%H</h2><span>Hours</span></div> <div  class="countdown-box"><h2 class="single-countdown">%M</h2><span>Mins</span></div> <div  class="countdown-box"><h2 class="single-countdown">%S</h2><span>Secs</span></div>'));
  });
  // =================
  // ===== class =====
  $("#countdown-active3").countdown("2023/03/18 20:00", function(event) {
    $(this).html(event.strftime('<div class="countdown-box"><h2 class="single-countdown">%D</h2><span>Days</span></div> <div class="countdown-box"><h2 class="single-countdown">%H</h2><span>Hours</span></div> <div  class="countdown-box"><h2 class="single-countdown">%M</h2><span>Mins</span></div> <div  class="countdown-box"><h2 class="single-countdown">%S</h2><span>Secs</span></div>'));
  });
  // =================
  // ===== class =====
  $("#countdown-active4").countdown("2023/03/20 20:00", function(event) {
    $(this).html(event.strftime('<div class="countdown-box"><h2 class="single-countdown">%D</h2><span>Days</span></div> <div class="countdown-box"><h2 class="single-countdown">%H</h2><span>Hours</span></div> <div  class="countdown-box"><h2 class="single-countdown">%M</h2><span>Mins</span></div> <div  class="countdown-box"><h2 class="single-countdown">%S</h2><span>Secs</span></div>'));
  });
  // =================
  // ===== class =====
  $("#countdown-active5").countdown("2023/03/22 20:00", function(event) {
    $(this).html(event.strftime('<div class="countdown-box"><h2 class="single-countdown">%D</h2><span>Days</span></div> <div class="countdown-box"><h2 class="single-countdown">%H</h2><span>Hours</span></div> <div  class="countdown-box"><h2 class="single-countdown">%M</h2><span>Mins</span></div> <div  class="countdown-box"><h2 class="single-countdown">%S</h2><span>Secs</span></div>'));
  });
  // =================
  // ===== class =====
  $("#countdown-active6").countdown("2023/03/25 20:00", function(event) {
    $(this).html(event.strftime('<div class="countdown-box"><h2 class="single-countdown">%D</h2><span>Days</span></div> <div class="countdown-box"><h2 class="single-countdown">%H</h2><span>Hours</span></div> <div  class="countdown-box"><h2 class="single-countdown">%M</h2><span>Mins</span></div> <div  class="countdown-box"><h2 class="single-countdown">%S</h2><span>Secs</span></div>'));
  });
  // =================
  // ===== class =====
  $("#countdown-active7").countdown("2023/03/27 20:00", function(event) {
    $(this).html(event.strftime('<div class="countdown-box"><h2 class="single-countdown">%D</h2><span>Days</span></div> <div class="countdown-box"><h2 class="single-countdown">%H</h2><span>Hours</span></div> <div  class="countdown-box"><h2 class="single-countdown">%M</h2><span>Mins</span></div> <div  class="countdown-box"><h2 class="single-countdown">%S</h2><span>Secs</span></div>'));
  });
  // =================
  // ===== class =====
  $("#countdown-active8").countdown("2023/03/29 20:00", function(event) {
    $(this).html(event.strftime('<div class="countdown-box"><h2 class="single-countdown">%D</h2><span>Days</span></div> <div class="countdown-box"><h2 class="single-countdown">%H</h2><span>Hours</span></div> <div  class="countdown-box"><h2 class="single-countdown">%M</h2><span>Mins</span></div> <div  class="countdown-box"><h2 class="single-countdown">%S</h2><span>Secs</span></div>'));
  });
  // =================
  // ===== class =====
  $("#countdown-active9").countdown("2023/04/01 20:00", function(event) {
    $(this).html(event.strftime('<div class="countdown-box"><h2 class="single-countdown">%D</h2><span>Days</span></div> <div class="countdown-box"><h2 class="single-countdown">%H</h2><span>Hours</span></div> <div  class="countdown-box"><h2 class="single-countdown">%M</h2><span>Mins</span></div> <div  class="countdown-box"><h2 class="single-countdown">%S</h2><span>Secs</span></div>'));
  });
  // =================
  // ===== class =====
  $("#countdown-active10").countdown("2023/04/03 20:00", function(event) {
    $(this).html(event.strftime('<div class="countdown-box"><h2 class="single-countdown">%D</h2><span>Days</span></div> <div class="countdown-box"><h2 class="single-countdown">%H</h2><span>Hours</span></div> <div  class="countdown-box"><h2 class="single-countdown">%M</h2><span>Mins</span></div> <div  class="countdown-box"><h2 class="single-countdown">%S</h2><span>Secs</span></div>'));
  });
  // =================
  // ===== class =====
  $("#countdown-active11").countdown("2023/04/05 20:00", function(event) {
    $(this).html(event.strftime('<div class="countdown-box"><h2 class="single-countdown">%D</h2><span>Days</span></div> <div class="countdown-box"><h2 class="single-countdown">%H</h2><span>Hours</span></div> <div  class="countdown-box"><h2 class="single-countdown">%M</h2><span>Mins</span></div> <div  class="countdown-box"><h2 class="single-countdown">%S</h2><span>Secs</span></div>'));
  });
  // =================
  // ===== class =====
  $("#countdown-active12").countdown("2023/04/08 20:00", function(event) {
    $(this).html(event.strftime('<div class="countdown-box"><h2 class="single-countdown">%D</h2><span>Days</span></div> <div class="countdown-box"><h2 class="single-countdown">%H</h2><span>Hours</span></div> <div  class="countdown-box"><h2 class="single-countdown">%M</h2><span>Mins</span></div> <div  class="countdown-box"><h2 class="single-countdown">%S</h2><span>Secs</span></div>'));
  });
  // =================
  // ===== class =====
  $("#countdown-active13").countdown("2023/04/10 20:00", function(event) {
    $(this).html(event.strftime('<div class="countdown-box"><h2 class="single-countdown">%D</h2><span>Days</span></div> <div class="countdown-box"><h2 class="single-countdown">%H</h2><span>Hours</span></div> <div  class="countdown-box"><h2 class="single-countdown">%M</h2><span>Mins</span></div> <div  class="countdown-box"><h2 class="single-countdown">%S</h2><span>Secs</span></div>'));
  });
  // =================
  // ===== class =====
  $("#countdown-active14").countdown("2023/04/12 20:00", function(event) {
    $(this).html(event.strftime('<div class="countdown-box"><h2 class="single-countdown">%D</h2><span>Days</span></div> <div class="countdown-box"><h2 class="single-countdown">%H</h2><span>Hours</span></div> <div  class="countdown-box"><h2 class="single-countdown">%M</h2><span>Mins</span></div> <div  class="countdown-box"><h2 class="single-countdown">%S</h2><span>Secs</span></div>'));
  });
  // =================
  // ===== class =====
  $("#countdown-active15").countdown("2023/04/15 20:00", function(event) {
    $(this).html(event.strftime('<div class="countdown-box"><h2 class="single-countdown">%D</h2><span>Days</span></div> <div class="countdown-box"><h2 class="single-countdown">%H</h2><span>Hours</span></div> <div  class="countdown-box"><h2 class="single-countdown">%M</h2><span>Mins</span></div> <div  class="countdown-box"><h2 class="single-countdown">%S</h2><span>Secs</span></div>'));
  });
  // =================
  // ===== class =====
  $("#countdown-active16").countdown("2023/04/17 20:00", function(event) {
    $(this).html(event.strftime('<div class="countdown-box"><h2 class="single-countdown">%D</h2><span>Days</span></div> <div class="countdown-box"><h2 class="single-countdown">%H</h2><span>Hours</span></div> <div  class="countdown-box"><h2 class="single-countdown">%M</h2><span>Mins</span></div> <div  class="countdown-box"><h2 class="single-countdown">%S</h2><span>Secs</span></div>'));
  });
  // =================
  // ===== class =====
  $("#countdown-active17").countdown("2023/04/19 20:00", function(event) {
    $(this).html(event.strftime('<div class="countdown-box"><h2 class="single-countdown">%D</h2><span>Days</span></div> <div class="countdown-box"><h2 class="single-countdown">%H</h2><span>Hours</span></div> <div  class="countdown-box"><h2 class="single-countdown">%M</h2><span>Mins</span></div> <div  class="countdown-box"><h2 class="single-countdown">%S</h2><span>Secs</span></div>'));
  });
  // =================
  // ===== class =====
  $("#countdown-active18").countdown("2023/04/22 20:00", function(event) {
    $(this).html(event.strftime('<div class="countdown-box"><h2 class="single-countdown">%D</h2><span>Days</span></div> <div class="countdown-box"><h2 class="single-countdown">%H</h2><span>Hours</span></div> <div  class="countdown-box"><h2 class="single-countdown">%M</h2><span>Mins</span></div> <div  class="countdown-box"><h2 class="single-countdown">%S</h2><span>Secs</span></div>'));
  });
  // =================
  // ===== class =====
  $("#countdown-active19").countdown("2023/04/24 20:00", function(event) {
    $(this).html(event.strftime('<div class="countdown-box"><h2 class="single-countdown">%D</h2><span>Days</span></div> <div class="countdown-box"><h2 class="single-countdown">%H</h2><span>Hours</span></div> <div  class="countdown-box"><h2 class="single-countdown">%M</h2><span>Mins</span></div> <div  class="countdown-box"><h2 class="single-countdown">%S</h2><span>Secs</span></div>'));
  });
  // =================
  // ===== class =====
  $("#countdown-active20").countdown("2023/04/26 20:00", function(event) {
    $(this).html(event.strftime('<div class="countdown-box"><h2 class="single-countdown">%D</h2><span>Days</span></div> <div class="countdown-box"><h2 class="single-countdown">%H</h2><span>Hours</span></div> <div  class="countdown-box"><h2 class="single-countdown">%M</h2><span>Mins</span></div> <div  class="countdown-box"><h2 class="single-countdown">%S</h2><span>Secs</span></div>'));
  });
  // =================
  // ===== class =====
  $("#countdown-active21").countdown("2023/04/29 20:00", function(event) {
    $(this).html(event.strftime('<div class="countdown-box"><h2 class="single-countdown">%D</h2><span>Days</span></div> <div class="countdown-box"><h2 class="single-countdown">%H</h2><span>Hours</span></div> <div  class="countdown-box"><h2 class="single-countdown">%M</h2><span>Mins</span></div> <div  class="countdown-box"><h2 class="single-countdown">%S</h2><span>Secs</span></div>'));
  });
  // =================
  // ===== class =====
  $("#countdown-active22").countdown("2023/05/01 20:00", function(event) {
    $(this).html(event.strftime('<div class="countdown-box"><h2 class="single-countdown">%D</h2><span>Days</span></div> <div class="countdown-box"><h2 class="single-countdown">%H</h2><span>Hours</span></div> <div  class="countdown-box"><h2 class="single-countdown">%M</h2><span>Mins</span></div> <div  class="countdown-box"><h2 class="single-countdown">%S</h2><span>Secs</span></div>'));
  });
  // =================
  // ===== class =====
  $("#countdown-active23").countdown("2023/05/03 20:00", function(event) {
    $(this).html(event.strftime('<div class="countdown-box"><h2 class="single-countdown">%D</h2><span>Days</span></div> <div class="countdown-box"><h2 class="single-countdown">%H</h2><span>Hours</span></div> <div  class="countdown-box"><h2 class="single-countdown">%M</h2><span>Mins</span></div> <div  class="countdown-box"><h2 class="single-countdown">%S</h2><span>Secs</span></div>'));
  });
  // =================
  // ===== class =====
  $("#countdown-active24").countdown("2023/05/06 20:00", function(event) {
    $(this).html(event.strftime('<div class="countdown-box"><h2 class="single-countdown">%D</h2><span>Days</span></div> <div class="countdown-box"><h2 class="single-countdown">%H</h2><span>Hours</span></div> <div  class="countdown-box"><h2 class="single-countdown">%M</h2><span>Mins</span></div> <div  class="countdown-box"><h2 class="single-countdown">%S</h2><span>Secs</span></div>'));
  });
  // =================
  // ===== class =====
  $("#countdown-active25").countdown("2023/05/08 20:00", function(event) {
    $(this).html(event.strftime('<div class="countdown-box"><h2 class="single-countdown">%D</h2><span>Days</span></div> <div class="countdown-box"><h2 class="single-countdown">%H</h2><span>Hours</span></div> <div  class="countdown-box"><h2 class="single-countdown">%M</h2><span>Mins</span></div> <div  class="countdown-box"><h2 class="single-countdown">%S</h2><span>Secs</span></div>'));
  });
  // =================





});