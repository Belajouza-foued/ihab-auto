document.addEventListener("DOMContentLoaded", () => {

  /* ───────── FILTRES PRODUITS ───────── */
  const filters = document.querySelectorAll(".filter-btn");
  const items = document.querySelectorAll(".product-card");

  if (filters.length) {
    filters.forEach(btn => {
      btn.addEventListener("click", () => {

        filters.forEach(b => b.classList.remove("active"));
        btn.classList.add("active");

        const type = btn.dataset.filter;

        items.forEach(item => {
          const match = type === "all" || item.dataset.type === type;
          item.style.display = match ? "block" : "none";
        });

      });
    });
  }


  /* ───────── AJOUT PANIER ───────── */
  const buttons = document.querySelectorAll(".btn-add");

  buttons.forEach(btn => {
    btn.addEventListener("click", () => {
      const old = btn.innerHTML;

      btn.innerHTML = "✓ Ajouté";
      btn.classList.add("added");

      setTimeout(() => {
        btn.innerHTML = old;
        btn.classList.remove("added");
      }, 1500);
    });
  });

});