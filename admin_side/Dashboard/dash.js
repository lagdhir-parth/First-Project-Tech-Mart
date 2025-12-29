top_cards = document.querySelectorAll(".top-card");

top_cards[0].addEventListener("click", () => {
  window.location.href = "../Admin-user/admin-user.html";
});
top_cards[1].addEventListener("click", () => {
  window.location.href = "../Product/admin-products.html";
});
top_cards[2].addEventListener("click", () => {
  window.location.href = "../Order/admin-orders.html";
});
top_cards[3].addEventListener("click", () => {
  window.location.href = "../Order/admin-orders.html";
});

bottom_content = document.querySelectorAll(".bottom-content div");
console.log(bottom_content[1]);

bottom_content[0].addEventListener("click", () => {
  window.location.href = "../Order/admin-orders.html";
});
bottom_content[1].addEventListener("click", () => {
  window.location.href = "../Product/admin-products.html";
});
