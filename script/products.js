const filter = document.getElementById("filter");

function toggleFilter() {
  filter.classList.toggle("block");
  filter.classList.toggle("hidden");
}
function closeFilter() {
  filter.classList.remove("block");
  filter.classList.add("hidden");
}
function toggleCategory(e) {
  if (e.target.classList.contains("products-accordion-1")) {
    const categoryButton = document.getElementById("img-category");
    const categoryContainer = document.getElementById("filter-category");
    if (categoryButton.src.includes("plus")) {
      categoryButton.src = "./images/icons/ico-minus.svg";
      categoryContainer.classList.add("flex");
      categoryContainer.classList.remove("hidden");
    } else {
      categoryButton.src = "./images/icons/ico-plus.svg";
      categoryContainer.classList.add("hidden");
      categoryContainer.classList.remove("flex");
    }
  }
}
function toggleBrand(e) {
  if (e.target.classList.contains("products-accordion-2")) {
    const brandButton = document.getElementById("img-brand");
    const brandContainer = document.getElementById("filter-brand");
    if (brandButton.src.includes("plus")) {
      brandButton.src = "./images/icons/ico-minus.svg";
      brandContainer.classList.add("flex");
      brandContainer.classList.remove("hidden");
    } else {
      brandButton.src = "./images/icons/ico-plus.svg";
      brandContainer.classList.add("hidden");
      brandContainer.classList.remove("flex");
    }
  }
}
function toggleCountry(e) {
  if (e.target.classList.contains("products-accordion-3")) {
    const countryButton = document.getElementById("img-country");
    const countryContainer = document.getElementById("filter-country");
    if (countryButton.src.includes("plus")) {
      countryButton.src = "./images/icons/ico-minus.svg";
      countryContainer.classList.add("flex");
      countryContainer.classList.remove("hidden");
    } else {
      countryButton.src = "./images/icons/ico-plus.svg";
      countryContainer.classList.add("hidden");
      countryContainer.classList.remove("flex");
    }
  }
}
function toggleLifestyle(e) {
  if (e.target.classList.contains("products-accordion-4")) {
    const lifestyleButton = document.getElementById("img-lifestyle");
    const lifestyleContainer = document.getElementById("filter-lifestyle");
    if (lifestyleButton.src.includes("plus")) {
      lifestyleButton.src = "./images/icons/ico-minus.svg";
      lifestyleContainer.classList.add("flex");
      lifestyleContainer.classList.remove("hidden");
    } else {
      lifestyleButton.src = "./images/icons/ico-plus.svg";
      lifestyleContainer.classList.add("hidden");
      lifestyleContainer.classList.remove("flex");
    }
  }
}
function togglePromotion(e) {
  if (e.target.classList.contains("products-accordion-5")) {
    const promotionButton = document.getElementById("img-promotion");
    const promotionContainer = document.getElementById("filter-promotion");
    if (promotionButton.src.includes("plus")) {
      promotionButton.src = "./images/icons/ico-minus.svg";
      promotionContainer.classList.add("flex");
      promotionContainer.classList.remove("hidden");
    } else {
      promotionButton.src = "./images/icons/ico-plus.svg";
      promotionContainer.classList.add("hidden");
      promotionContainer.classList.remove("flex");
    }
  }
}
