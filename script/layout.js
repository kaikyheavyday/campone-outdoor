const drawer = document.getElementById("drawer");
const burger = document.getElementById("burger");
const close = document.getElementById("close");

const categoryPlusButton = document.getElementById("drawer-plus-category");
const categoryMinusButton = document.getElementById("drawer-minus-category");
const sectionCategory = document.getElementById("category-section");

const servicePlusButton = document.getElementById("drawer-plus-service");
const serviceMinusButton = document.getElementById("drawer-minus-service");
const serviceCategory = document.getElementById("service-section");

const aboutPlusButton = document.getElementById("drawer-plus-about");
const aboutMinusButton = document.getElementById("drawer-minus-about");
const aboutCategory = document.getElementById("about-section");

const searchIcon = document.getElementById("icon-search");
const avatarIcon = document.getElementById("icon-avatar");
const cartIcon = document.getElementById("icon-cart");
const logo = document.getElementById("logo");
const logoText = document.getElementById("logo-text");
const formSearch = document.getElementById("form-search");

function clickDropdown() {
  document.getElementById("dropdown-content").classList.toggle("hidden");
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
  logo.classList.add("hidden");
  logoText.classList.add("hidden");
  searchIcon.classList.add("hidden");
  avatarIcon.classList.add("hidden");
  cartIcon.classList.add("hidden");
  formSearch.classList.remove("hidden");
  formSearch.classList.add("flex");
});

categoryPlusButton.addEventListener("click", () => {
  sectionCategory.classList.remove("hidden");
  sectionCategory.classList.add("block");
  categoryPlusButton.classList.add("hidden");
  categoryPlusButton.classList.remove("block");
  categoryMinusButton.classList.remove("hidden");
  categoryMinusButton.classList.add("block");
});
categoryMinusButton.addEventListener("click", () => {
  sectionCategory.classList.add("hidden");
  sectionCategory.classList.remove("block");
  categoryPlusButton.classList.add("block");
  categoryPlusButton.classList.remove("hidden");
  categoryMinusButton.classList.remove("block");
  categoryMinusButton.classList.add("hidden");
});

servicePlusButton.addEventListener("click", () => {
  serviceCategory.classList.remove("hidden");
  serviceCategory.classList.add("block");
  servicePlusButton.classList.add("hidden");
  servicePlusButton.classList.remove("block");
  serviceMinusButton.classList.remove("hidden");
  serviceMinusButton.classList.add("block");
});
serviceMinusButton.addEventListener("click", () => {
  serviceCategory.classList.add("hidden");
  serviceCategory.classList.remove("block");
  servicePlusButton.classList.add("block");
  servicePlusButton.classList.remove("hidden");
  serviceMinusButton.classList.remove("block");
  serviceMinusButton.classList.add("hidden");
});

aboutPlusButton.addEventListener("click", () => {
  aboutCategory.classList.remove("hidden");
  aboutCategory.classList.add("block");
  aboutPlusButton.classList.add("hidden");
  aboutPlusButton.classList.remove("block");
  aboutMinusButton.classList.remove("hidden");
  aboutMinusButton.classList.add("block");
});
aboutMinusButton.addEventListener("click", () => {
  aboutCategory.classList.add("hidden");
  aboutCategory.classList.remove("block");
  aboutPlusButton.classList.add("block");
  aboutPlusButton.classList.remove("hidden");
  aboutMinusButton.classList.remove("block");
  aboutMinusButton.classList.add("hidden");
});
burger.addEventListener("click", () => {
  drawer.classList.toggle("active");
});
close.addEventListener("click", () => {
  drawer.classList.remove("active");
});
