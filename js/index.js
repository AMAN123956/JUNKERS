$(function () {
    'use strict'
  
    $('[data-toggle="offcanvas"]').on('click', function () {
      $('.offcanvas-collapse').toggleClass('open')
    })
  })

  $('.carousel').carousel({
    interval: 2000
  });