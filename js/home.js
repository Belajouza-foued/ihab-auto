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