const drawer = document.getElementById("drawer");
const burger = document.getElementById("burger");
const close = document.getElementById("close");

const searchIcon = document.getElementById("icon-search");
const avatarIcon = document.getElementById("icon-avatar");
const cartIcon = document.getElementById("icon-cart");
const logo = document.getElementById("logo");
const logoText = document.getElementById("logo-text");
const formSearch = document.getElementById("form-search");

function clickDropdown() {
  document.getElementById("dropdown-content").classList.toggle("hidden");
}
function clickDropdownNewProduct() {
  document.getElementById("dropdown-new-product").classList.toggle("hidden");
}

window.onclick = function (event) {
  if (
    !event.target.matches(".dropdown") &&
    !event.target.matches(".dropdown-item")
  ) {
    document.getElementById("dropdown-content").classList.add("hidden");
    document.getElementById("dropdown-content").classList.remove("block");
  }
};

searchIcon.addEventListener("click", () => {
  document.getElementById("search-container").classList.remove("gap-3");
  document.getElementById("search-container").classList.remove("w-full");
  document.getElementById("search-container").classList.add("w-[277px]");
  logo.classList.add("hidden");
  logoText.classList.add("hidden");
  searchIcon.classList.add("hidden");
  avatarIcon.classList.add("hidden");
  cartIcon.classList.add("hidden");
  formSearch.classList.remove("hidden");
  formSearch.classList.add("flex");
});

function categoryAccordionClick(e) {
  const sectionCategory = document.getElementById("category-section");
  if (e.target.classList.contains("category-accordion")) {
    const button = document.getElementById("category-accordion-button");
    if (button.src.includes("plus")) {
      button.src = "./images/icons/ico-minus-white.svg";
      sectionCategory.classList.add("block");
      sectionCategory.classList.remove("hidden");
    } else {
      button.src = "./images/icons/ico-plus-white.svg";
      sectionCategory.classList.add("hidden");
      sectionCategory.classList.remove("block");
    }
  }
}

function serviceAccordionClick(e) {
  const serviceCategory = document.getElementById("service-section");
  if (e.target.classList.contains("service-accordion")) {
    const button = document.getElementById("service-accordion-button");
    if (button.src.includes("plus")) {
      button.src = "./images/icons/ico-minus-white.svg";
      serviceCategory.classList.add("block");
      serviceCategory.classList.remove("hidden");
    } else {
      button.src = "./images/icons/ico-plus-white.svg";
      serviceCategory.classList.add("hidden");
      serviceCategory.classList.remove("block");
    }
  }
}

function aboutAccordionClick(e) {
  const aboutCategory = document.getElementById("about-section");
  if (e.target.classList.contains("about-accordion")) {
    const button = document.getElementById("about-accordion-button");
    if (button.src.includes("plus")) {
      button.src = "./images/icons/ico-minus-white.svg";
      aboutCategory.classList.add("block");
      aboutCategory.classList.remove("hidden");
    } else {
      button.src = "./images/icons/ico-plus-white.svg";
      aboutCategory.classList.add("hidden");
      aboutCategory.classList.remove("block");
    }
  }
}

const overlay = document.getElementById("overlay");
burger.addEventListener("click", () => {
  drawer.classList.toggle("active");
  overlay.classList.toggle("overlay");
});
close.addEventListener("click", () => {
  drawer.classList.remove("active");
  overlay.classList.remove("overlay");
});
