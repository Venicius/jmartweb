(function($) {
  "use strict"; // Start of use strict

  // Smooth scrolling using jQuery easing
  $('a.js-scroll-trigger[href*="#"]:not([href="#"])').click(function() {
    if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
      if (target.length) {
        $('html, body').animate({
          scrollTop: (target.offset().top - 72)
        }, 1000, "easeInOutExpo");
        return false;
      }
    }
  });

  // Closes responsive menu when a scroll trigger link is clicked
  $('.js-scroll-trigger').click(function() {
    $('.navbar-collapse').collapse('hide');
  });

  // Activate scrollspy to add active class to navbar items on scroll
  $('body').scrollspy({
    target: '#mainNav',
    offset: 75
  });

  // Collapse Navbar
  var navbarCollapse = function() {
    if ($("#mainNav").offset().top > 100) {
      $("#mainNav").addClass("navbar-scrolled");
    } else {
      $("#mainNav").removeClass("navbar-scrolled");
    }
  };
  // Collapse now if page is not at top
  navbarCollapse();
  // Collapse the navbar when page is scrolled
  $(window).scroll(navbarCollapse);

  // Magnific popup calls
  $('#portfolio').magnificPopup({
    delegate: 'a',
    type: 'image',
    tLoading: 'Loading image #%curr%...',
    mainClass: 'mfp-img-mobile',
    gallery: {
      enabled: true,
      navigateByImgClick: true,
      preload: [0, 1]
    },
    image: {
      tError: '<a href="%url%">The image #%curr%</a> could not be loaded.'
    }
  });

})(jQuery); // End of use strict


var token = '8050756577.63902cb.94c3037c42d246e98e8f89e6604ae0d1',
//var token = '1362124742.7b33a8d.6613a3567f0a425f9852055b8ef743b7',
  num_photos = 8,
  container = document.getElementById( 'rudr_instafeed' ),
  scrElement = document.createElement( 'script' );

window.mishaProcessResult = function( data ) {
for( x in data.data ){
  container.innerHTML += '<div class="col col-md-4 col-sm-6 col-xs-6"> <a target="_blank" href="'+data.data[x].link+'"> <img class="img-responsive portifolio" width="250" height="250" src="'+data.data[x].images.standard_resolution.url+'"/></a></div>';
  console.log(data.data[x]);
  /*'<li><div class="col-lg-4" style="width: 18rem;"><img class="card-img-top" src="' + data.data[x].images.low_resolution.url + '"></li></div>';*/
}
}

scrElement.setAttribute( 'src', 'https://api.instagram.com/v1/users/self/media/recent?access_token=' + token + '&count=' + num_photos + '&callback=mishaProcessResult' );
document.body.appendChild( scrElement );
