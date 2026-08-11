const counters = document.querySelectorAll(".counter");

// this function does the counting for ONE counter — same as before
function animateCounter(counter) {
  const target = Number(counter.getAttribute("data-target"));
  const suffix = counter.getAttribute("data-suffix") || "";
  const duration = 2000;
  let startTime = null;

  const step = (timestamp) => {
    if (startTime === null) startTime = timestamp;
    const elapsed = timestamp - startTime;
    const progress = Math.min(elapsed / duration, 1);

    const current = Math.ceil(progress * target);

    counter.innerHTML =
      current.toLocaleString() +
      (suffix ? `<span class="counter-suffix">${suffix}</span>` : "");

    if (progress < 1) {
      requestAnimationFrame(step);
    }
  };

  counter.innerHTML = "0";
  requestAnimationFrame(step);
}

// the "motion sensor" — watches all counters and reports when one enters view
const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        animateCounter(entry.target); // start counting THIS one
        observer.unobserve(entry.target); // stop watching it — only count once
      }
    });
  },
  {
    threshold: 0.5, // trigger once 50% of the counter is visible on screen
  },
);

// tell the sensor to watch every counter
counters.forEach((counter) => observer.observe(counter));

const slides = document.querySelectorAll(".slide");
const dots = document.querySelectorAll("#dots button");
const INTERVAL = 6000;

// NEW: try to remember the last slide, otherwise start at 0
let current = Number(sessionStorage.getItem("currentSlide")) || 0;

let timer;

function goTo(index) {
  slides[current].classList.remove("active");
  dots[current].classList.remove("active");

  current = index;

  slides[current].classList.add("active");
  dots[current].classList.add("active");

  sessionStorage.setItem("currentSlide", current); // NEW: save it
}

// NEW: show the correct slide/dot immediately on page load,
// in case we're resuming from something other than slide 0
slides[current].classList.add("active");
dots[current].classList.add("active");
slides[0].classList.remove("active"); // avoid two "active" slides if current isn't 0
dots[0].classList.remove("active");

function next() {
  goTo((current + 1) % slides.length);
}

function start() {
  timer = setInterval(next, INTERVAL);
}
function stop() {
  clearInterval(timer);
}

function manualGoTo(index) {
  goTo(index);
  stop();
  start();
}

start();

document.addEventListener("visibilitychange", () => {
  document.hidden ? stop() : start();
});
