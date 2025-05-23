const scroll = new LocomotiveScroll({
  el: document.querySelector("main"),
  smooth: true,
  smoothMobile: true,
  tablet: { smooth: true, multiplier: 1.8 },
  smartphone: { smooth: true, multiplier: 3 }
});
// Using Locomotive Scroll from Locomotive https://github.com/locomotivemtl/locomotive-scroll

const locoScroll = new LocomotiveScroll({
  el: document.querySelector("main"),
  smooth: true
});

locoScroll.on("scroll", ScrollTrigger.update);

ScrollTrigger.scrollerProxy("main", {
  scrollTop(value) {
    return arguments.length ? locoScroll.scrollTo(value, 0, 0) : locoScroll.scroll.instance.scroll.y;
  }, // we don't have to define a scrollLeft because we're only scrolling vertically.
  getBoundingClientRect() {
    return { top: 0, left: 0, width: window.innerWidth, height: window.innerHeight };
  },
  // LocomotiveScroll handles things completely differently on mobile devices - it doesn't even transform the container at all! So to get the correct behavior and avoid jitters, we should pin things with position: fixed on mobile. We sense it by checking to see if there's a transform applied to the container (the LocomotiveScroll-controlled element).
  pinType: document.querySelector("main").style.transform ? "transform" : "fixed"
});

ScrollTrigger.addEventListener("refresh", () => locoScroll.update());

ScrollTrigger.refresh();

if (window.innerWidth > 768) {
  Shery.mouseFollower({
    skew: false,
    ease: "cubic-bezier(0.23, 1, 0.320, 1)",
    duration: 1
  });
}

const nav = document.querySelector("#right-nav i");
const close = document.querySelector("#overlay-icon i");

const tl2 = gsap.timeline({ paused: true });

tl2.to("#overlay", {
  y: 0,
  duration: 2,
  ease: "power4.inOut",
  onStart: () => {
    const overlay = document.querySelector("#overlay");
    overlay.style.visibility = "visible";
    overlay.style.pointerEvents = "all";
  }
});

nav.addEventListener("click", () => {
  tl2.play();
});

close.addEventListener("click", () => {
  tl2.reverse().then(() => {
    const overlay = document.querySelector("#overlay");
    overlay.style.visibility = "hidden";
    overlay.style.pointerEvents = "none";
  });
});

//Responsive Code 

let mm = gsap.matchMedia();

mm.add("(min-width: 800px)", () => {         //Desktop Responsive GSAP Code    
  const tl = gsap.timeline();
  tl.from("#page1, #page2", {
    rotate: "360deg",
    transformOrigin: "70% 10%",
    scale: 0.1,
    duration: 3,
    ease: "sine.inOut",
  });
  tl.from("#page1, #page2", {
    filter: "blur(5px)",
    duration: 1,
    ease: "power3.out"
  });
});
const img1 = document.querySelector("#container-1 img");
const img2 = document.querySelector("#container-2 img");
const img3 = document.querySelector("#bottom-div-2 img");

img1.addEventListener("mouseenter", function () {
  gsap.to(img1, {
    scale: 1.03,
    duration: 1,
    ease: "power3.out"
  })
});
img1.addEventListener("mouseleave", function () {
  gsap.to(img1, {
    scale: 1,
    duration: 1,
    ease: "power3.out"
  })
});
img2.addEventListener("mouseenter", function () {
  gsap.to(img2, {
    scale: 1.03,
    duration: 1,
    ease: "power3.out"
  })
});
img2.addEventListener("mouseleave", function () {
  gsap.to(img2, {
    scale: 1,
    duration: 1,
    ease: "power3.out"
  })
});
img3.addEventListener("mouseenter", function () {
  gsap.to(img3, {
    scale: 2,
    duration: 1,
    ease: "power3.out",
    overflowX: "hidden"
  })
});
img3.addEventListener("mouseleave", function () {
  gsap.to(img3, {
    scale: 1,
    duration: 1,
    ease: "power3.out"
  })
});

mm.add("(max-width: 768px)", () => {             //Mobile Responsive GSAP Code

  const tl = gsap.timeline();

  tl.to("#page1, #page2", {
    rotate: "",
    transformOrigin: "",
    scale: "",
    duration: "",
    ease: "cubic-bezier(0.6, 0.04, 0.98, 0.335)",
  });
  tl.from("#page1, #page2", {
    filter: "",
    duration: "",
    ease: "power3.out"
  });
  const img1 = document.querySelector("#container-1 img");
  const img2 = document.querySelector("#container-2 img");
  const img3 = document.querySelector("#bottom-div-2 img");

  img1.addEventListener("mouseenter", function () {
    gsap.to(img1, {
      scale: 1,
      duration: "",
      ease: ""
    })
  });
  img1.addEventListener("mouseleave", function () {
    gsap.to(img1, {
      scale: 1,
      duration: "",
      ease: ""
    })
  });
  img2.addEventListener("mouseenter", function () {
    gsap.to(img2, {
      scale: 1,
      duration: "",
      ease: ""
    })
  });
  img2.addEventListener("mouseleave", function () {
    gsap.to(img2, {
      scale: 1,
      duration: "",
      ease: ""
    })
  });
  img3.addEventListener("mouseenter", function () {
    gsap.to(img3, {
      scale: "",
      duration: "",
      ease: "",
      overflowX: ""
    })
  });
  img3.addEventListener("mouseleave", function () {
    gsap.to(img3, {
      scale: "",
      duration: "",
      ease: ""
    })
  });
})