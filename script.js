let menuopen = document.querySelector(".effect");
let closemenu = document.querySelector(".closebtn");
let contain = document.querySelector(".container");
let re = document.querySelector(".rejouice");
console.log(re);
contain.addEventListener("mousemove", (val) => {
  gsap.to(".move", {
    x: val.clientX,
    y: val.clientY,
    duration: 1,
    ease: "power2.out",
    // backgroundColor: "white",
  });
});

re.addEventListener("mouseenter", (val) => {
  gsap.to(".move", {
    scale: 1.2,
    duration: 1,
    backgroundColor: "black",
    ease: "power2.out",
    // Cursor: "pointer",
  });
});
re.addEventListener("mouseleave", (val) => {
  gsap.to(".move", {
    scale: 1,
    duration: 1,
    backgroundColor: "white",
    ease: "power2.out",
  });
});
let yl = gsap.timeline({ paused: true });
yl.from(
  "ul li,.menu-btn",
  {
    duration: 0.6,
    // delay: 0.1,
    y: 100,
    opacity: 0,
    stagger: 0.2,
  },
  "<"
);
yl.from(
  ".menu-video",
  {
    scale: 0,
    duration: 0.9,
    delay: 0.4,
    opacity: 0,
  },
  "<"
);
yl.from(
  ".brands-right i,a",
  {
    x: 30,
    duration: 0.6,
    opacity: 0,
    stagger: 0.1,
  },
  "<"
);
menuopen.addEventListener("click", () => {
  gsap.to(".overlaymenu", {
    duration: 1.1,
    transform: "translateY(0.1%)",
  });
  yl.play();
});
closemenu.addEventListener("click", () => {
  gsap.to(".overlaymenu", {
    transform: "translateY(-100%)",
    duration: 1.4,
    delay: 0.2,
    ease: "power2.out",
  });
  yl.reverse();
});
