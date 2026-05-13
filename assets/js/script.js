$(document).ready(function () {
  "use strict";
  let lastScroll = 0;

  window.addEventListener("load", handleScroll);
  window.addEventListener("scroll", handleScroll);

  function handleScroll() {
    const scrolling = window.scrollY;
    const navbar = document.querySelector(".navbar");

    if (scrolling > 1) {
      navbar.classList.add("nav-fixed");
    } else {
      navbar.classList.remove("nav-fixed", "nav-hidden");
    }

    if (scrolling > lastScroll && scrolling > 80) {
      // scrolling down — hide header
      navbar.classList.add("nav-hidden");
    } else if (scrolling < lastScroll) {
      // scrolling up — show header
      navbar.classList.remove("nav-hidden");
    }

    lastScroll = scrolling;
  }

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

  if (localStorage.getItem("has-animation-seen")) {
    // returning visitor — no animation
  } else {
    // first visit — show animation state
    $(".hero-animation-btn").addClass("active");
    $(".navbar").addClass("green hover-green");
    $(".hero-slider-section").addClass("green");

    // remove animation on first real user scroll
    window.addEventListener(
      "scroll",
      function dismissHero() {
        $(".hero-animation-btn").removeClass("active");
        $(".navbar").removeClass("green hover-green");
        $(".hero-slider-section").removeClass("green");
        localStorage.setItem("has-animation-seen", "true");
        window.removeEventListener("scroll", dismissHero);
      },
      { passive: true }
    );
  }

  $(".navbar.hover-green .navbar-link").on("mouseenter", function () {
    $(".navbar").removeClass("green");
  });

  $(".navbar .navbar-link").on("mouseleave", function () {
    if ($(".navbar").hasClass("hover-green")) {
      $(".navbar").addClass("green");
    }
  });

  $(".navbar.hover-green .navbar-link").mouseenter(function (event) {
    event.stopPropagation();
    $(".navbar").removeClass("green");
  });

  $(".navbar .navbar-link").mouseleave(function (event) {
    if ($(".navbar").hasClass("hover-green")) {
      event.stopPropagation();
      $(".navbar").addClass("green");
    }
  });

  $(".navbar-link-title").hover(function () {
    $(this).parent().siblings().toggleClass("active");
  });

  // hero-animation js end---

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

  // footer-select-filed popup js start
  $(".footer-select-field-heading").click(function (event) {
    event.stopPropagation();
    $(this).parent().toggleClass("active");
  });

  $(window).on("click", function (event) {
    $(".footer-select-field-heading").parent().removeClass("active");
  });
  // footer-select-filed popup js end

  // filter-select-filed popup js start
  $(".filter-select-field-heading").click(function (event) {
    event.stopPropagation();
    $(this).parent().toggleClass("active");
  });

  $(window).on("click", function (event) {
    $(".filter-select-field-heading").parent().removeClass("active");
  });
  // filter-select-filed popup js end
});
// testimonial-video-play-function
const sections = document.querySelectorAll(".testimonial-item");

sections.forEach((section) => {
  let x = section.querySelector(".testimonial-video");
  let btn = section.querySelector(".video-play-btn");
  if (btn && x) {
    btn.addEventListener("click", toggleVideo);
    function toggleVideo() {
      let playIcon = btn.querySelector(".play-icon");
      let pauseIcon = btn.querySelector(".pause-icon");
      if (x.paused) {
        x.play();
        playIcon.style.display = "none";
        pauseIcon.style.display = "block";
      } else {
        x.pause();
        playIcon.style.display = "block";
        pauseIcon.style.display = "none";
      }
    }
  }
});

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

// Pause on hover testimonial slider js
const marqueeTestimonial = document.querySelector(".testimonial-slider");

marqueeTestimonial.addEventListener("mouseenter", () => {
  testimonialSlider.autoplay.stop();
});

marqueeTestimonial.addEventListener("mouseleave", () => {
  testimonialSlider.autoplay.start();
});
// testimonial-slider js end--

// newsletter type js start---
let newsletterField = document.querySelectorAll(".newsletter-field");
newsletterField.forEach((section) => {
  let newsletter_input = section.querySelector(".newsletter_input");
  const news_submit_btn = section.querySelector(".news_submit_btn");

  newsletter_input?.addEventListener("keyup", () => {
    if (newsletter_input.value.length > 0) {
      news_submit_btn.disabled = false;
    } else {
      news_submit_btn.disabled = true;
    }
  });
});
// newsletter type js end---
