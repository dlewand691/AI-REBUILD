// @codekit-prepend "js/cognizant-framework-2020.js"

// ======================================================================
// PAGE LOADING ANIMATION
// ======================================================================
$(window).on("load", function() {
  $(".loader-wrapper").fadeOut(500, function() {
    $('body').removeClass('no-scroll');
  });
});


// ===================================================================================
// HAMBURGER ICON ACTIVE/INACTIVE
// ===================================================================================
$("#ai-nav").on("show.zf.dropdown", function() {
  $(".hamburger").addClass("is-active");
});
$("#ai-nav").on("hide.zf.dropdown", function() {
  $(".hamburger").removeClass("is-active");
});


// ===================================================================================
// AOS SETTINGS
// ===================================================================================
AOS.init({
  duration: 750,
  mirror: false,
  startEvent: "load",
  offset: "150"
});


// ===================================================================================
// SWIPER
// ===================================================================================
var thoughtLeadershipBottom = new Swiper(".thoughtLeadershipBottom", {
  spaceBetween: 0,
  slidesPerView: 1,
  effect: "fade",
  loop: true,
  loopedSlides: 4,
  autoHeight: true,
  centeredSlides: true,
  grabCursor: true,
  keyboard: {
    enabled: true
  },
  pagination: {
    el: ".thoughtLeadershipBottom-pagination",
    type: "bullets",
    clickable: true
  },
});

var thoughtLeadership = new Swiper(".thoughtLeadership", {
  autoheight: true,
  loop: true,
  loopedSlides: 4,
  grabCursor: true,
  centeredSlides: true,
  breakpoints: {
    320: {
      slidesPerView: 1,
    },
    1024: {
      slidesPerView: 3
    }
  },
  effect: "coverflow",
  coverflowEffect: {
    rotate: 0,
    stretch: 180,
    slideShadows: false
  },
  keyboard: {
    enabled: true
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev"
  }
});
thoughtLeadership.controller.control=thoughtLeadershipBottom
thoughtLeadershipBottom.controller.control=thoughtLeadership

// -----  End of SWIPER  -----------------------------------


// ===================================================================================
// LAZY LOAD SVG OBJECT TAG
// ===================================================================================
document.addEventListener("lazybeforeunveil", function(e) {
  var svgObject = e.target.getAttribute("data-object");
  if (svgObject) {
    e.target.setAttribute("data", svgObject);
  }
}, {
  passive: true
});


// ===================================================================================
// LAZY SIZES, BACKGROUND IMAGES
// ===================================================================================
document.addEventListener("lazybeforeunveil", function(e) {
  var bg = e.target.getAttribute("data-bg");
  if (bg) {
    e.target.style.backgroundImage = "url(" + bg + ")";
  }
}, {
  passive: true
});


// ===================================================================================
// BASIC OFFCANVAS AJAX LOAD when opened
// ===================================================================================
// $("#offCanvas").on("openedEnd.zf.offCanvas", function() {
//   $.ajax("includes/landing/thought-leadership01.html")
//     .done(function(resp) {
//       $("#offCanvas").html(resp);
//     });
// });


// ===================================================================================
// BASIC OFFCANVAS AJAX LOAD after opened
// ===================================================================================
$(".thoughtLeadership-button").on("click", function() {
  $.ajax($(this).data("url"))
    .done(function(content) {
      $("#offCanvas").html(content).foundation("openedEnd");
    });
});


// ======================================================================
// UNLOAD OFFCANVAS AJAX CONTENT WHEN CLOSED
// ======================================================================
$("#offCanvas").on("closed.zf.offCanvas", function() {
  $("#offCanvas").empty();
  // foundation.reInit("offCanvas");
});

// ======================================================================
// VIDEO SETUP & PAUSE WHEN CLOSING MODAL
// ======================================================================
// $(".reveal").on("closed.zf.reveal", function() {
//   // player.reset();
//   videojs(".video-js").pause();
// });

// ======================================================================
// CONSULTING CAROUSEL
// ======================================================================
var galleryThumbs = new Swiper('.swiper-tiles', {
  spaceBetween: 20,
  // slidesPerView: 3,
  loop: true,
  // centeredSlides: true,
  freeMode: true,
  loopedSlides: 4, //looped slides should be the same
  watchSlidesVisibility: true,
  watchSlidesProgress: true,
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
  breakpoints: {
    320: {
      slidesPerView: 1,
    },
    768: {
      slidesPerView: 4
    }
  }
});
var galleryTop = new Swiper('.swiper-content', {
  spaceBetween: 20,
  loop: true,
  loopedSlides: 4, //looped slides should be the same
  // navigation: {
  //   nextEl: '.swiper-button-next',
  //   prevEl: '.swiper-button-prev',
  // },
  thumbs: {
    swiper: galleryThumbs,
  }
});


// var swiperTiles = new Swiper('.swiper-tiles', {
//   spaceBetween: 20,
//   loop: false,
//   // loopedSlides: 4, //looped slides should be the same
//   // freeMode: true,
//   watchSlidesVisibility: true,
//   watchSlidesProgress: true,
//   breakpoints: {
//     320: {
//       slidesPerView: 1,
//       navigation: {
//         nextEl: '.swiper-button-next',
//         prevEl: '.swiper-button-prev',
//       }
//     },
//     768: {
//       slidesPerView: 4
//     }
//   },
// });
// 
// var swiperContent = new Swiper('.swiper-content', {
//   spaceBetween: 20,
//   loop: false,
//   // loopedSlides: 4, //looped slides should be the same
//   slidesPerView: 1,
//   thumbs: {
//     swiper: swiperTiles
//   }
// });


// ======================================================================
// PAUSE VIDEOS UNTIL IN VIEWPORT
// ======================================================================

// var videos = document.getElementsByTagName("video"),
var videos = document.getElementsByClassName("video-pause"),
  fraction = 0.5;

function checkScroll() {
  for (var i = 0; i < videos.length; i++) {
    var video = videos[i];
    var x = video.offsetLeft,
      y = video.offsetTop,
      w = video.offsetWidth,
      h = video.offsetHeight,
      r = x + w, //right
      b = y + h, //bottom
      visibleX, visibleY, visible;
    visibleX = Math.max(0, Math.min(w, window.pageXOffset + window.innerWidth - x, r - window.pageXOffset));
    visibleY = Math.max(0, Math.min(h, window.pageYOffset + window.innerHeight - y, b - window.pageYOffset));
    visible = visibleX * visibleY / (w * h);

    if (visible > fraction) {
      video.play();
    } else {
      video.pause();
    }
  }
}

window.addEventListener('scroll', checkScroll, false, {
  passive: true
});
window.addEventListener('resize', checkScroll, false, {
  passive: true
});

// -----  End of PAUSE VIDEOS UNTIL IN VIEWPORT  ----------
