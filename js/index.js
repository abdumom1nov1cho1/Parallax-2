import { preload } from "./preloader.js";
// ! WE CAN ADD DARK MODE TOO, FUNCIONAL IS READY
// import { darkMode } from "./darkMode.js";
import { toggleSidebar } from "./navbar.js";
import { aboutUsCard } from "./aboutUs.js";
import { professionsSection } from "./professions.js";

window.addEventListener("load", preload);

// darkMode();
toggleSidebar();
aboutUsCard();
professionsSection();
const footer = document.querySelector("footer");
footer.innerHTML = `<p>&copy; Все права защищены Axror Kurban ${new Date().getFullYear()}</p>`;

// !SWIPER CAROUSEL
var swiper = new Swiper(".mySwiper", {
  effect: "cards",
  grabCursor: true,
});
// !SWIPER CAROUSEL END

// !SCROLL MAGIC CODES
let controller = new ScrollMagic.Controller();
let timeLine = new TimelineMax();
let porfessionsSec = new TimelineMax();
let websitesSec = new TimelineMax();

timeLine
  .to(".rock1", 3, { y: -200 })
  .to(".girl", 3, { y: -200 }, "-=3")
  .fromTo(".bg1", { y: -100 }, { y: 0, duration: 3 }, "-=3")
  .to(".main", 3, { top: "120%" }, "-=3")
  .fromTo(".about", { opacity: 0 }, { opacity: 1, duration: 3 });

let scene = new ScrollMagic.Scene({
  triggerElement: ".intro",
  duration: "100%",
  triggerHook: 0,
})
  .setTween(timeLine)
  .setPin(".intro")
  .addTo(controller);

porfessionsSec
  .to(".travel__title", 3, { y: 400 })
  .to(".leaf", 3, { y: -300, x: 300 }, "-=3")
  .to(".hill5", 3, { x: 300 }, "-=3")
  .to(".hill4", 3, { x: -300 }, "-=3")
  .to(".hill1", 3, { y: 400 }, "-=3")
  .fromTo(
    ".professions__articles",
    { opacity: 0 },
    { opacity: 1, duration: 3 }
  );

let scene2 = new ScrollMagic.Scene({
  triggerElement: ".travel",
  duration: "100%",
  triggerHook: 0,
})
  .setTween(porfessionsSec)
  .addTo(controller);

websitesSec
  .fromTo(".swiper", { x: -300 }, { x: 0, duration: 3 })
  .fromTo(".websites-left", { x: 300 }, { x: 0, duration: 3 }, "-=3");

let scene3 = new ScrollMagic.Scene({
  triggerElement: ".websites",
  duration: "100%",
  triggerHook: 1,
})
  .setTween(websitesSec)
  .addTo(controller);
// !SCROLL MAGIC CODES END
