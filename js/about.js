document.addEventListener("DOMContentLoaded", () => {

  /* ───────── COUNTER STATS ───────── */
  const counters = document.querySelectorAll(".counter");

  if (counters.length) {
    counters.forEach(counter => {
      counter.innerText = "0";

      const update = () => {
        const target = +counter.dataset.target;
        const current = +counter.innerText;

        const step = target / 80;

        if (current < target) {
          counter.innerText = Math.ceil(current + step);
          setTimeout(update, 20);
        } else {
          counter.innerText = target;
        }
      };

      update();
    });
  }


  /* ───────── ANIMATIONS SCROLL ───────── */
  const anims = document.querySelectorAll(".fade, .slide-left, .slide-right");

  if ("IntersectionObserver" in window) {
    const obs = new IntersectionObserver(entries => {
      entries.forEach(e => {
        if (e.isIntersecting) {
          e.target.classList.add("visible");
          obs.unobserve(e.target);
        }
      });
    }, { threshold: 0.2 });

    anims.forEach(el => obs.observe(el));
  } else {
    anims.forEach(el => el.classList.add("visible"));
  }

});