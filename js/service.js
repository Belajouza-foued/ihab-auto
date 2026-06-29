document.addEventListener("DOMContentLoaded", () => {

  const huiles = [
    { name: "Castrol Edge 5W-30", price: 89 },
    { name: "Mobil 1 ESP 5W-30", price: 95 },
  ];

  /* FILTRE */
  document.querySelectorAll(".filter-btn").forEach(btn => {
    btn.addEventListener("click", () => {
      document.querySelectorAll(".filter-btn")
        .forEach(b => b.classList.remove("active"));

      btn.classList.add("active");
    });
  });


  /* PANIER */
  document.querySelectorAll(".btn-add").forEach(btn => {
    btn.addEventListener("click", () => {
      const old = btn.innerHTML;

      btn.innerHTML = "✓ Ajouté";
      btn.style.background = "green";

      setTimeout(() => {
        btn.innerHTML = old;
        btn.style.background = "";
      }, 1500);
    });
  });

});
/*faq*/
document.addEventListener("DOMContentLoaded", () => {
    const faqItems = document.querySelectorAll(".faq-box-new");

    faqItems.forEach(item => {
        const btn = item.querySelector(".faq-btn-new");

        btn.addEventListener("click", () => {

            // fermer les autres
            faqItems.forEach(el => {
                if (el !== item) el.classList.remove("active");
            });

            // toggle actuel
            item.classList.toggle("active");
        });
    });
});