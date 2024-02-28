document.addEventListener("DOMContentLoaded", () => {
  "use strict";

  const selectHeader = document.querySelector("#header");
  if (selectHeader) {
    let headerOffset = selectHeader.offsetTop;
    let nextElement = selectHeader.nextElementSibling;

    const headerFixed = () => {
      if (headerOffset - window.scrollY <= 0) {
        selectHeader.classList.add("sticked");
        if (nextElement) nextElement.classList.add("sticked-header-offset");
      } else {
        selectHeader.classList.remove("sticked");
        if (nextElement) nextElement.classList.remove("sticked-header-offset");
      }
    };
    window.addEventListener("load", headerFixed);
    document.addEventListener("scroll", headerFixed);
  }

  // Owl Carousel
  $(".del").owlCarousel({
    loop: true,
    margin: 15,
    nav: true,
    navText: [
      '<i class="fa fa-chevron-left sliderArwClr" aria-hidden="true"></i>',
      '<i class="fa fa-chevron-right sliderArwClr" aria-hidden="true"></i>',
    ],
    autoplay: true,
    autoplayTimeout: 3000,
    autoplayHoverPause: true,
    animateOut: "fadeOut",
    animateIn: "fadeIn",
    smartSpeed: 700,
    fluidSpeed: 700,
    mouseDrag: true,
    touchDrag: true,

    responsive: {
      0: {
        items: 2,
        smartSpeed: 900,
        fluidSpeed: 900,
      },
      426: {
        items: 2,
      },
      768: {
        items: 3,
      },
      992: {
        items: 3,
      },
      1024: {
        items: 3,
      },
      1400: {
        items: 3,
      },
    }
  });

  // Owl end

  
  $(".parent-say").owlCarousel({
    loop: true,
    margin: 20,
    nav: false,
    navText: [
      '<i class="fab fa-chevron-left sliderArwClr" aria-hidden="true"></i>',
      '<i class="fab fa-chevron-right sliderArwClr" aria-hidden="true"></i>',
    ],
    autoplay: true,
    autoplayTimeout: 3000,
    autoplayHoverPause: true,
    animateOut: "fadeOut",
    animateIn: "fadeIn",
    smartSpeed: 700,
    fluidSpeed: 700,
    mouseDrag: true,
    touchDrag: true,
    responsive: {
      0: {
        items: 1,
        smartSpeed: 900,
        fluidSpeed: 900,
      },
      426: {
        items: 1,
      },
      768: {
        items: 2,
      },
      992: {
        items: 2,
      },
      1024: {
        items: 2,
      },
      1400: {
        items: 2,
      },
    },
  });

  

  /* POPUP VIDEO */
  if ($(".video-btn").length) {
    $(".video-btn").on("click", function () {
      $.fancybox({
        href: this.href,
        type: $(this).data("type"),
        title: this.title,
        helpers: {
          title: { type: "inside" },
          media: {},
        },
        beforeShow: function () {
          $(".fancybox-wrap").addClass("gallery-fancybox");
        },
      });
      return false;
    });
  }

  $(window).on("load", function () {
    $(".fancybox").fancybox();
  });
});
  