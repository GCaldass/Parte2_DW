/*jslint browser: true*/
/*global $, jQuery,document, window*/
/*jslint devel: true, browser: true, white: true */

jQuery(document).ready(function () {
    "use strict";
    $(".text").typed({
        strings: ["<strong> Um pouco de </strong> <strong class='primary'>Hollywood.</strong>", "<strong>Sempre</strong> <strong class='primary'>perto de si </strong>"],
        typeSpeed: 0,
        loop: true
    });
    
    $(window).scroll(function () {
        var top = $(window).scrollTop();
            if (top >= 60) {
              $(".nav").addClass('secondary');
            }
        else
            if ($(".nav").hasclass('secondary')){
                  $(".nav").removeclass('secondary');
            }
    });

});


  
  



