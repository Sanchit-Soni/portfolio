$(document).ready(function () {
  $(window).scroll(function () {
    // sticky navbar on scroll script
    if (this.scrollY > 20) {
      $(".navbar").addClass("sticky");
    }
    //scroll btn
    if (this.scrollY > 500) {
      $(".scroll-up-btn").addClass("show");
    } else {
      $(".scroll-up-btn").removeClass("show");
    }
  });
  // slide-up script
  $(".scroll-up-btn").click(function () {
    $("html").animate({ scrollTop: 0 });
    // removing smooth scroll on slide-up button click
    $("html").css("scrollBehavior", "auto");
  });
});

// typing text animation script
var typed = new Typed(".typing", {
  strings: ["Student", "Web Developer", "Gamer"],
  typeSpeed: 100,
  backSpeed: 60,
  loop: true,
});

var typed = new Typed(".typing-2", {
  strings: ["Student", "Web Developer", "Gamer"],
  typeSpeed: 100,
  backSpeed: 60,
  loop: true,
});

const navslide = () => {
  const burger = document.querySelector(".burger");
  const nav = document.querySelector(".list");
  const navLinks = document.querySelectorAll(".list li");
  //toggle
  burger.addEventListener("click", () => {
    nav.classList.toggle("nav-active");

    navLinks.forEach((link, index) => {
      if (link.style.animation) {
        link.style.animation = "";
      } else {
        link.style.animation = `navLinkFade 0.5s ease forwards ${
          index / 7 + 0.5
        }s`;
      }
    });
    //burger animation
    burger.classList.toggle("toggle");
  });
  //animate
  // navLinks.forEach((link, index) => {
  //   link.style.animation = `navLinkFade 0.5s ease forwards ${
  //     index / 10 + 1.5
  //   }s`;
  // });
};

navslide();
