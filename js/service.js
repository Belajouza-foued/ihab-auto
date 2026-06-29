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