function toggleFooter1(e) {
  if (e.target.classList.contains("footer-accordion-1")) {
    const button = document.getElementById("footer-1-button");
    const container = document.getElementById("footer-1-container");
    if (button.src.includes("plus")) {
      button.src = "./images/icons/ico-minus.svg";
      container.classList.add("block");
      container.classList.remove("hidden");
    } else {
      button.src = "./images/icons/ico-plus.svg";
      container.classList.add("hidden");
      container.classList.remove("block");
    }
  }
}
function toggleFooter2(e) {
  if (e.target.classList.contains("footer-accordion-2")) {
    const button = document.getElementById("footer-2-button");
    const container = document.getElementById("footer-2-container");
    if (button.src.includes("plus")) {
      button.src = "./images/icons/ico-minus.svg";
      container.classList.add("flex");
      container.classList.remove("hidden");
    } else {
      button.src = "./images/icons/ico-plus.svg";
      container.classList.add("hidden");
      container.classList.remove("flex");
    }
  }
}
function toggleFooter3(e) {
  if (e.target.classList.contains("footer-accordion-3")) {
    const button = document.getElementById("footer-3-button");
    const container = document.getElementById("footer-3-container");
    if (button.src.includes("plus")) {
      button.src = "./images/icons/ico-minus.svg";
      container.classList.add("flex");
      container.classList.remove("hidden");
    } else {
      button.src = "./images/icons/ico-plus.svg";
      container.classList.add("hidden");
      container.classList.remove("flex");
    }
  }
}
function toggleFooter4(e) {
  if (e.target.classList.contains("footer-accordion-4")) {
    const button = document.getElementById("footer-4-button");
    const container = document.getElementById("footer-4-container");
    if (button.src.includes("plus")) {
      button.src = "./images/icons/ico-minus.svg";
      container.classList.add("flex");
      container.classList.remove("hidden");
    } else {
      button.src = "./images/icons/ico-plus.svg";
      container.classList.add("hidden");
      container.classList.remove("flex");
    }
  }
}
function toggleFooter5(e) {
  if (e.target.classList.contains("footer-accordion-5")) {
    const button = document.getElementById("footer-5-button");
    const container = document.getElementById("footer-5-container");
    if (button.src.includes("plus")) {
      button.src = "./images/icons/ico-minus.svg";
      container.classList.add("flex");
      container.classList.remove("hidden");
    } else {
      button.src = "./images/icons/ico-plus.svg";
      container.classList.add("hidden");
      container.classList.remove("flex");
    }
  }
}
