const searchInput = document.querySelector(".search-input");
const allProductsName = document.querySelectorAll(".name");

searchInput.addEventListener("keyup", (event) => {
  const searchQuery = event.target.value.toLowerCase();
  for (let i = 0; i < allProductsName.length; i++) {
    const currentProducts = allProductsName[i].textContent.toLowerCase();
    if (currentProducts.includes(searchQuery)) {
      allProductsName[i].style.display = "block";
    } else {
      allProductsName[i].style.display = "none";
    }
  }
});
