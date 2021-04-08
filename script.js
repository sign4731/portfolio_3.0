"use strict";

gsap.registerPlugin(ScrollTrigger);

gsap.to(".white", {
  scrollTrigger: {
    trigger: ".white",
    start: "top top",
    pin: true,
    pinSpacing: false,
  },
});

gsap.to("#section_one", {
  scrollTrigger: {
    trigger: "#section_one",
    start: "bottom bottom",
    pin: true,
    pinSpacing: false,
  },
});

gsap.to("#section_two", {
  scrollTrigger: {
    trigger: "#section_two",
    start: "bottom bottom",
    pin: true,
    pinSpacing: false,
  },
});
