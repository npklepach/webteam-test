let elements = document.getElementsByClassName("n-product-link");
for (let element of elements) {
  element.addEventListener("mouseenter", highlightProductLogo);
  element.addEventListener("mouseleave", removeHighlightProductLogo);
}

function highlightProductLogo(event) {
  let elements = document.getElementsByClassName("n-logo-item");
  for (let element of elements) {
    if (element.dataset.product !== event.srcElement.dataset.product) {
      element.classList.add("n-logo-item_shade");
    }
  }
}

function removeHighlightProductLogo(event) {
  let elements = document.getElementsByClassName("n-logo-item");
  for (let element of elements) {
    element.classList.remove("n-logo-item_shade");
  }
}

function toggleMobileMenu() {
  document.getElementById("dropdown-list").classList.toggle("dropdown-list-active");
  document.getElementById("dropdown-overlay").classList.toggle("dropdown-overlay-active");
  document.getElementById("dropdown-icon-down").classList.toggle("dropdown-icon-hide");
  document.getElementById("dropdown-icon-up").classList.toggle("dropdown-icon-hide");
}
