const link=document.querySelector(".nav-link");
p_order_op=document.querySelector(".p-order-op")
const content=document.querySelector(".content");
console.log(link)

link.addEventListener('click', (e) => {
  e.preventDefault(); // Prevent full page reload
  
  const page = e.target.dataset.page;

  fetch(page)
    .then(response => {
      if (!response.ok) throw new Error(`Could not load ${page}`);
      return response.text();
    })
    .then(data => {
        content.innerHTML = data;
        console.log(data)
    })
    .catch(error => {
      content.innerHTML = `<h2>Error loading page</h2><p>${error.message}</p>`;
  });
  p_order_op.style.backgroundColor="gray";
});