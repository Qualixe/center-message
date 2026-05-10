$(document).ready(function () {
  "use strict";
  // navbar js start ---
  $(window).on("load scroll", function () {
    var scrolling = $(this).scrollTop();
    if (scrolling > 10) {
      $(".navbar").addClass("nav-fixed");
    } else {
      $(".navbar").removeClass("nav-fixed");
    }
  });

  $(".ham-menu").click(function (event) {
    event.stopPropagation();
    $(".navbar-links-wrapper").toggleClass("active");
    $(".ham-menu").toggleClass("active");
    $(".navbar-links-inner").toggleClass("active");
    $("body").toggleClass("active");
  });

  $(".mobile-menu-close-window-btn").click(function (event) {
    event.stopPropagation();
    $(".navbar-links-wrapper").removeClass("active");
    $(".ham-menu").removeClass("active");
    $(".navbar-links-inner").removeClass("active");
    $("body").removeClass("active");
  });

  // mobile-dropdown responsive accordion js start--
  $(function () {
    let isMobile = window.matchMedia(
      "only screen and (max-width: 992px)"
    ).matches;

    if (isMobile) {
      // **..mobile-dropdown-accordion js start..**
      $(".navbar-megamenu-content").slideUp();
      $(".navbar-link-title").on("click", function () {
        $(this).next(".navbar-megamenu-content").slideToggle();
        $(this).parent().toggleClass("active");
        $(this)
          .parent()
          .siblings()
          .removeClass("active")
          .find(".navbar-megamenu-content")
          .slideUp();
      });
      // **..mobile-dropdown-accordion js end..**
    }

    // mobile-dropdown responsive accordion js start--
    $(function () {
      let isMobile = window.matchMedia(
        "only screen and (max-width: 992px)"
      ).matches;

      if (isMobile) {
        $(".dropdown-sub-menu").slideUp();
        // **..mobile-dropdown-accordion js start..**
        $(".dropdown-btn1").on("click", function () {
          $(this).next(".dropdown-sub-menu1").slideToggle();
          $(this).toggleClass("active");
        });
        // **..mobile-dropdown-accordion js end..**

        // **..mobile-dropdown-accordion js start..**
        $(".dropdown-btn2").on("click", function () {
          $(this).next(".dropdown-sub-menu2").slideToggle();
          $(this).toggleClass("active");
        });
        // **..mobile-dropdown-accordion js end..**
      }
    });
    // mobile-dropdown responsive accordion js end--
  });
  // mobile-dropdown responsive accordion js end--

  $(".search-bar-open-btn").click(function (event) {
    event.stopPropagation();
    $(".search-bar-overlay").addClass("active");
    $(".search-bar-close-window-btn").addClass("active");
    $("body").addClass("active");
  });

  $(".search-bar-close-window-btn").click(function (event) {
    event.stopPropagation();
    $(".search-bar-overlay").removeClass("active");
    $(this).removeClass("active");
    $("body").removeClass("active");
  });

  $(".search-close-btn").click(function (event) {
    event.stopPropagation();
    $(".search-bar-overlay").removeClass("active");
    $(".search-bar-close-window-btn").removeClass("active");
    $("body").removeClass("active");
  });

  // navbar js end ---

  // --slide-tab js start--
  // $(".slide-tab-btn").click(function () {
  //   $(this).parent().siblings(".tab-nav-item").removeClass("active");
  //   $(this).parent().addClass("active");
  //   $(".slide-tab-content-item").hide();
  //   var activeTab = $(this).attr("href");
  //   $(activeTab).fadeIn();
  //   return false;
  // });
  // --slide-tab js end--

  // --grid-tab js start--
  $(".grid-tab-btn").click(function () {
    $(this).parent().siblings(".tab-nav-item").removeClass("active");
    $(this).parent().addClass("active");
    $(".grid-tab-content-item").hide();
    var activeTab = $(this).attr("href");
    $(activeTab).fadeIn();
    return false;
  });
  // --grid-tab js end--

  // video review popup js start---
  $(".video-review-content").click(function (event) {
    event.stopPropagation();
    $(".video-review-popup").addClass("active");
  });

  $(".video-review-popup-close").click(function (event) {
    event.stopPropagation();
    $(".video-review-popup").removeClass("active");
  });
  // video review popup js end---

  // size-chart-sidebar js start---
  $(".size-sidebar-btn").click(function (event) {
    event.stopPropagation();
    $(".size-chart-sidebar").addClass("active");
    $(".size-chart-sidebar-inner").addClass("active");
    $("body").addClass("active");
  });

  $(".size-chart-sidebar-close-window-btn").click(function (event) {
    event.stopPropagation();
    $(".size-chart-sidebar").removeClass("active");
    $(".size-chart-sidebar-inner").removeClass("active");
    $("body").removeClass("active");
  });

  $(".size-chart-close-btn").click(function (event) {
    event.stopPropagation();
    $(".size-chart-sidebar").removeClass("active");
    $(".size-chart-sidebar-inner").removeClass("active");
    $("body").removeClass("active");
  });
  // size-chart-sidebar js end---

  // cart-sidebar js start---
  $(".side-cart-btn").click(function (event) {
    event.stopPropagation();
    $(".cart-sidebar").addClass("active");
    $("body").addClass("active");
  });

  $(".cart-sidebar-close-window-btn").click(function (event) {
    event.stopPropagation();
    $(".cart-sidebar").removeClass("active");
    $("body").removeClass("active");
  });

  $(".side-cart-close-btn").click(function (event) {
    event.stopPropagation();
    $(".cart-sidebar").removeClass("active");
    $("body").removeClass("active");
  });
  // cart-sidebar js end---

  // collection filter sidebar js start--
  $(".filter-open-btn").click(function (event) {
    event.stopPropagation();
    $(".collection-filter").addClass("active");
    $("body").addClass("active");
  });

  $(".filter-window-close-btn").click(function (event) {
    event.stopPropagation();
    $(".collection-filter").removeClass("active");
    $("body").removeClass("active");
  });

  $(".filter-close-btn").click(function (event) {
    event.stopPropagation();
    $(".collection-filter").removeClass("active");
    $("body").removeClass("active");
  });
  // collection filter sidebar js end--

  // **..collection filter-accordion js start..**
  $(".accordion-toggle-btn").on("click", function () {
    $(this).next().slideToggle();
    $(this).parent().toggleClass("active");
  });
  // **..collection filter-accordion js end..**

  // **..product-accordion js start..**
  $(".product-accordion-toggle-btn").on("click", function () {
    $(this).next().slideToggle();
    $(this).parent().toggleClass("active");
    $(this)
      .parent()
      .siblings()
      .removeClass("active")
      .find(".product-accordion-item-content")
      .slideUp();
  });
  // **..product-accordion js end..**

  // sticky-add-to-cart-section js start--
  $(window).on("load scroll", function () {
    var scrolling = $(this).scrollTop();
    if (scrolling > 1100) {
      $(".sticky-add-to-cart-section").addClass("fixed");
    } else {
      $(".sticky-add-to-cart-section").removeClass("fixed");
    }
  });
  // sticky-add-to-cart-section js end--

  // **..faq-accordion js start..**
  // $(".faq-accordion-toggle-btn").on("mouseenter", function () {
  //   $(this).children(".faq-link-wrap-item-content").slideDown();
  //   $(this).addClass("active");
  //   $(this).siblings().removeClass("active").find(".faq-link-wrap-item-content").slideUp();
  // });

  // $(".faq-accordion-toggle-btn").on("mouseleave", function () {
  //   $(this).children(".faq-link-wrap-item-content").slideUp();
  //   $(this).removeClass("active");
  //   $(this).siblings().removeClass("active").find(".faq-link-wrap-item-content").slideUp();
  // });

  // $(document).ready(function () {
  //   $(".faq-accordion-toggle-btn").hover(function () {
  //     $(this).children(".faq-link-wrap-item-content").slideDown();
  //     $(this).addClass("active");
  //     $(this).siblings().removeClass("active").find(".faq-link-wrap-item-content").slideUp();
  //   });
  //   $(".faq-accordion-toggle-btn").mouseleave(function () {
  //     $(this).children(".faq-link-wrap-item-content").slideUp();
  //     $(this).removeClass("active");
  //   });
  // });
  // **..faq-accordion js end..**
});

// let play_btn = document.getElementById("play_btn");
// let x = document.getElementById("myVideo");

// play_btn.addEventListener("click", toggleVideo);
// function toggleVideo() {
//   if (x.paused) {
//     x.play();
//     play_btn.innerHTML = "pause";
//   } else {
//     x.pause();
//     play_btn.innerHTML = "Play";
//   }
// }

// testimonial-slider js start--
const testimonialSlider = new Swiper(".testimonial-slider", {
  spaceBetween: 48,
  centeredSlides: true,
  speed: 9000,
  freeMode: true,
  freeModeMomentum: false,
  autoplay: {
    delay: 0,
    disableOnInteraction: false,
  },
  loop: true,
  slidesPerView: "auto",
  allowTouchMove: true,
  breakpoints: {
    // when window width is >= 1px
    1: {
      spaceBetween: 10,
    },
    // when window width is >= 430px
    576: {
      spaceBetween: 20,
    },
    // when window width is >= 767px
    768: {
      spaceBetween: 24,
    },
    // when window width is >= 767px
    993: {
      spaceBetween: 48,
    },
  },
});

// Pause on hover
const marqueeTestimonial = document.querySelector(".testimonial-slider");

marqueeTestimonial.addEventListener("mouseenter", () => {
  testimonialSlider.autoplay.stop();
});

marqueeTestimonial.addEventListener("mouseleave", () => {
  testimonialSlider.autoplay.start();
});
// testimonial-slider js end--

// collection-tab-slide js start--
var swiper = new Swiper(".collection-tab-slide", {
  slidesPerView: 4,
  spaceBetween: 20,
  grabCursor: true,
  loop: false,
  navigation: {
    nextEl: ".collection-tab-slide-button-next",
    prevEl: ".collection-tab-slide-button-prev",
  },
  breakpoints: {
    // when window width is >= 1px
    1: {
      spaceBetween: 10,
      slidesPerView: 1.7,
    },
    // when window width is >= 430px
    576: {
      spaceBetween: 20,
      slidesPerView: 2.3,
    },
    // when window width is >= 767px
    768: {
      spaceBetween: 20,
      slidesPerView: 3.2,
    },
    // when window width is >= 767px
    993: {
      spaceBetween: 20,
      slidesPerView: 4,
    },
  },
});
// collection-tab-slide js end--

// card-slider js start--
var swiper = new Swiper(".card-slider", {
  slidesPerView: 4,
  spaceBetween: 20,
  grabCursor: true,
  loop: false,
  navigation: {
    nextEl: ".card-slider-button-next",
    prevEl: ".card-slider-button-prev",
  },
  breakpoints: {
    // when window width is >= 1px
    1: {
      spaceBetween: 10,
      slidesPerView: 1.7,
    },
    // when window width is >= 430px
    576: {
      spaceBetween: 20,
      slidesPerView: 2.3,
    },
    // when window width is >= 767px
    768: {
      spaceBetween: 20,
      slidesPerView: 3.2,
    },
    // when window width is >= 767px
    993: {
      spaceBetween: 20,
      slidesPerView: 4,
    },
  },
});
// card-slider js end--

// video-review-slider js start--
var video_review_slider = new Swiper(".video-review-slider", {
  loop: true,
  speed: 500,
  autoplay: {
    delay: 2000,
  },
  effect: "coverflow",
  grabCursor: true,
  centeredSlides: true,
  slidesPerView: "auto",
  coverflowEffect: {
    rotate: 0,
    stretch: 80,
    depth: 200,
    modifier: 1,
    slideShadows: false,
  },
});
// video-review-slider js end--

// related-product-slider js start--
var swiper = new Swiper(".related-product-slider", {
  slidesPerView: 4,
  spaceBetween: 20,
  grabCursor: true,
  loop: false,
  navigation: {
    nextEl: ".related-product-slider-btn-next",
    prevEl: ".related-product-slider-btn-prev",
  },
  breakpoints: {
    // when window width is >= 1px
    1: {
      spaceBetween: 10,
      slidesPerView: 1.7,
    },
    // when window width is >= 430px
    576: {
      spaceBetween: 20,
      slidesPerView: 2.3,
    },
    // when window width is >= 767px
    768: {
      spaceBetween: 20,
      slidesPerView: 3.2,
    },
    // when window width is >= 767px
    993: {
      spaceBetween: 20,
      slidesPerView: 4,
    },
  },
});
// related-product-slider js end--

// side-cart-slider js start--
var swiper = new Swiper(".side-cart-slider", {
  slidesPerView: 2.2,
  spaceBetween: 10,
  grabCursor: true,
  loop: false,
  speed: 1000,
});
// side-cart-slider js end--

// product-slider js start---
var swiper = new Swiper(".product-slider", {
  loop: true,
  autoHeight: true,
  spaceBetween: 0,
  speed: 800,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  navigation: {
    nextEl: ".product-slider-btn-next",
    prevEl: ".product-slider-btn-prev",
  },
});
// product-slider js end---

// product-slider js start---
// var swiper = new Swiper(".product-slider-thumb", {
//   direction: "vertical",
//   loop: true,
//   spaceBetween: 20,
//   slidesPerView: 5,
//   freeMode: true,
//   mousewheel: true,
//   breakpoints: {
//     // when window width is >= 320px
//     1: {
//       direction: "horizontal",
//       spaceBetween: 10,
//       slidesPerView: 4,
//     },
//     // when window width is >= 576px
//     576: {
//       direction: "horizontal",
//       spaceBetween: 20,
//       slidesPerView: 5,
//     },
//     // when window width is >= 767px
//     768: {
//       direction: "vertical",
//       spaceBetween: 20,
//       slidesPerView: 5,
//     },
//     // when window width is >= 767px
//     993: {
//       direction: "vertical",
//     },
//   },
// });
// var swiper2 = new Swiper(".product-slider", {
//   loop: true,
//   autoHeight: true,
//   spaceBetween: 10,
//   navigation: {
//     nextEl: ".swiper-button-next",
//     prevEl: ".swiper-button-prev",
//   },
//   thumbs: {
//     swiper: swiper,
//   },
// });
// product-slider js end---

// progesss-bar js start--
// const progress = document.querySelector(".progress");
// progress.addEventListener("input", function () {
//   const value = this.value;
//   this.style.background = `linear-gradient(to right,rgb(133 168 104) 0%,rgb(133 168 104) ${value}%,rgb(216, 216, 216) ${value}%)`;
// });
// progesss-bar js end--
