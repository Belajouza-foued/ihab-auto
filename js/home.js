/*hambrger*/
document.addEventListener("DOMContentLoaded", () => {

  /* HERO SLIDER */
  const slides = document.querySelectorAll(".hero-slide");
  let index = 0;

  function showSlides() {
    slides.forEach(s => s.classList.remove("active"));

    index++;
    if (index >= slides.length) index = 0;

    slides[index].classList.add("active");
  }

  setInterval(showSlides, 4000);


  /* COUNTER */
  const counters = document.querySelectorAll(".counter");

  counters.forEach(counter => {
    counter.innerText = "0";

    const update = () => {
      const target = +counter.dataset.target;
      const current = +counter.innerText;

      const inc = target / 100;

      if (current < target) {
        counter.innerText = Math.ceil(current + inc);
        setTimeout(update, 30);
      } else {
        counter.innerText = target;
      }
    };

    update();
  });


  /* PAINT SLIDER */
  const paintSlides = document.querySelectorAll(".paint-slide");
  let paintIndex = 0;

  function paintLoop() {
    paintSlides.forEach(s => s.classList.remove("active"));

    paintIndex++;
    if (paintIndex >= paintSlides.length) paintIndex = 0;

    paintSlides[paintIndex].classList.add("active");
  }

  setInterval(paintLoop, 3000);

});
/*stats*/
(function () {
  var numbers = document.querySelectorAll('.stat-item__number');
  if (!numbers.length) return;
 
  var prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
 
  function animateCount(el) {
    var target = parseInt(el.getAttribute('data-count-to'), 10) || 0;
 
    if (prefersReducedMotion) {
      el.textContent = target;
      return;
    }
 
    var duration = 1400;
    var startTime = null;
 
    function step(timestamp) {
      if (startTime === null) startTime = timestamp;
      var progress = Math.min((timestamp - startTime) / duration, 1);
      var eased = 1 - Math.pow(1 - progress, 3);
      el.textContent = Math.floor(eased * target);
      if (progress < 1) {
        window.requestAnimationFrame(step);
      } else {
        el.textContent = target;
      }
    }
 
    window.requestAnimationFrame(step);
  }
 
  if ('IntersectionObserver' in window) {
    var observer = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          animateCount(entry.target);
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.4 });
 
    numbers.forEach(function (el) { observer.observe(el); });
  } else {
    numbers.forEach(animateCount);
  }
})();
