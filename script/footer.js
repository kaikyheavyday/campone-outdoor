function toggleFooter1(e) {
  const button = document.getElementById("footer-1-button");
  const container = document.getElementById("footer-1-container");
  if (e.srcElement.src.includes("plus")) {
    button.src = "./images/icons/ico-minus.svg";
    container.classList.add("block");
    container.classList.remove("hidden");
  } else {
    button.src = "./images/icons/ico-plus.svg";
    container.classList.add("hidden");
    container.classList.remove("block");
  }
}
function toggleFooter2(e) {
  const button = document.getElementById("footer-2-button");
  const container = document.getElementById("footer-2-container");
  if (e.srcElement.src.includes("plus")) {
    button.src = "./images/icons/ico-minus.svg";
    container.classList.add("flex");
    container.classList.remove("hidden");
  } else {
    button.src = "./images/icons/ico-plus.svg";
    container.classList.add("hidden");
    container.classList.remove("flex");
  }
}
function toggleFooter3(e) {
  const button = document.getElementById("footer-3-button");
  const container = document.getElementById("footer-3-container");
  if (e.srcElement.src.includes("plus")) {
    button.src = "./images/icons/ico-minus.svg";
    container.classList.add("flex");
    container.classList.remove("hidden");
  } else {
    button.src = "./images/icons/ico-plus.svg";
    container.classList.add("hidden");
    container.classList.remove("flex");
  }
}
function toggleFooter4(e) {
  const button = document.getElementById("footer-4-button");
  const container = document.getElementById("footer-4-container");
  if (e.srcElement.src.includes("plus")) {
    button.src = "./images/icons/ico-minus.svg";
    container.classList.add("flex");
    container.classList.remove("hidden");
  } else {
    button.src = "./images/icons/ico-plus.svg";
    container.classList.add("hidden");
    container.classList.remove("flex");
  }
}
function toggleFooter5(e) {
  const button = document.getElementById("footer-5-button");
  const container = document.getElementById("footer-5-container");
  if (e.srcElement.src.includes("plus")) {
    button.src = "./images/icons/ico-minus.svg";
    container.classList.add("flex");
    container.classList.remove("hidden");
  } else {
    button.src = "./images/icons/ico-plus.svg";
    container.classList.add("hidden");
    container.classList.remove("flex");
  }
}
