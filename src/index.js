// import "./styles.scss";
import { particlesJS } from "./particles.js";

particlesJS("particles-js", {
  fps_limit: 30,
  particles: {
    number: { value: 80, density: { enable: true, value_area: 800 } },
    color: { value: "#ca373e" },
    shape: {
      type: "circle",
      stroke: { width: 0, color: "#8B0000" },
      polygon: { nb_sides: 5 },
      image: { src: "img/github.svg", width: 100, height: 100 }
    },
    opacity: {
      value: 1,
      random: false,
      anim: { enable: true, speed: 1, opacity_min: 0.1, sync: false }
    },
    size: {
      value: 3,
      random: true,
      anim: { enable: false, speed: 40, size_min: 0.1, sync: false }
    },
    line_linked: {
      enable: false,
      distance: 150,
      color: "#ffffff",
      opacity: 0.4,
      width: 1
    },
    move: {
      enable: true,
      speed: 6,
      direction: "top-left",
      random: false,
      straight: false,
      out_mode: "out",
      bounce: false,
      attract: { enable: false, rotateX: 600, rotateY: 1200 }
    }
  },
  interactivity: {
    detect_on: "parent",
    events: {
      onhover: { enable: true, mode: "bubble" },
      onclick: { enable: false, mode: "repulse" },
      resize: true
    },
    modes: {
      grab: { distance: 400, line_linked: { opacity: 1 } },
      bubble: {
        distance: 350,
        size: 15,
        duration: 2,
        opacity: 0.1,
        speed: 1,
        color: "#ffffff"
      },
      repulse: { distance: 150, duration: 0.4 },
      remove: { particles_nb: 2 }
    }
  },
  retina_detect: false
});

//document.getElementById("app").innerHTML = ``;

function scrollDown() {
  var windowCoords = document.documentElement.clientHeight;
  var deltaPixels = window.innerHeight * 0.005 * window.devicePixelRatio;
  (function scroll() {
    if (window.pageYOffset < windowCoords) {
      window.scrollBy(0, deltaPixels);
      setTimeout(scroll, 0);
    }
    if (window.pageYOffset > windowCoords) {
      window.scrollTo(0, windowCoords);
    }
  })();
}

function scrollByAnimated(scrollY, duration) {
  //gist here https://gist.github.com/loadedsith/857540fd76fe9c0609c7
  var startTime = new Date().getTime();

  var startY = window.scrollY;
  var endY = startY + scrollY;
  var currentY = startY;
  var directionY = scrollY > 0 ? "down" : "up";

  var animationComplete;
  var count = 0;

  var animationId;

  if (duration === undefined) {
    duration = 250; //ms
  }

  //grab scroll events from the browser
  var mousewheelevt = /Firefox/i.test(navigator.userAgent)
    ? "DOMMouseScroll"
    : "mousewheel"; //FF doesn't recognize mousewheel as of FF3.x

  //stop the current animation if its still going on an input from the user
  var cancelAnimation = function() {
    if (animationId !== undefined) {
      window.cancelAnimationFrame(animationId);
      animationId = undefined;
    }
  };

  if (document.attachEvent) {
    //if IE (and Opera depending on user setting)
    document.attachEvent("on" + mousewheelevt, cancelAnimation);
  } else if (document.addEventListener) {
    //WC3 browsers
    document.addEventListener(mousewheelevt, cancelAnimation, false);
  }

  var step = function(a, b, c) {
    var now = new Date().getTime();
    var completeness = (now - startTime) / duration;
    window.scrollTo(0, Math.round(startY + completeness * scrollY));
    currentY = window.scrollY;
    if (directionY === "up") {
      if (currentY === 0) {
        animationComplete = true;
      } else {
        animationComplete = currentY <= endY;
      }
    }
    if (directionY === "down") {
      /*limitY is cross browser, we want the largest of these values*/

      var limitY = Math.max(
        document.body.scrollHeight,
        document.body.offsetHeight,
        document.documentElement.clientHeight,
        document.documentElement.scrollHeight,
        document.documentElement.offsetHeight
      );
      if (currentY + window.innerHeight === limitY) {
        animationComplete = true;
      } else {
        animationComplete = currentY >= endY;
      }
    }

    if (animationComplete === true) {
      if (currentY > endY) {
        window.scrollTo(0, endY);
      }

      /*Stop animation*/
      return;
    } else {
      /*repeat animation*/
      if (count > 500) {
        return;
      } else {
        count++;
        animationId = window.requestAnimationFrame(step);
      }
    }
  };
  /*start animation*/

  step();
}

function scrollDown2() {
  var windowCoords = document.documentElement.clientHeight - window.pageYOffset;
  scrollByAnimated(windowCoords);
}

// document.getElementById("main_scroll").onclick = scrollDown
document.getElementById("main_scroll").addEventListener("click", scrollDown2);
