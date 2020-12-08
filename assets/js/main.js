const tl = gsap.timeline({
  defaults: { ease: "power2.inOut", duration: 1.5 },
});

tl.from(".seq", { y: -30, opacity: 0, stagger: 0.2, duration: 0.5 }, "-=0.5");
