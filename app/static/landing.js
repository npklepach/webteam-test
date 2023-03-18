let elements = document.getElementsByClassName("n-product-link");
for (let element of elements) {
  element.addEventListener("mouseenter", mouseEnter);
  element.addEventListener("mouseleave", mouseLeave);
}

function mouseEnter(event) {
  let elements = document.getElementsByClassName("n-logo-item");
  for (let element of elements) {
    if (element.dataset.product !== event.srcElement.dataset.product) {
      element.classList.add("n-logo-item_shade");
    }
  }
}

function mouseLeave(event) {
  let elements = document.getElementsByClassName("n-logo-item");
  for (let element of elements) {
    element.classList.remove("n-logo-item_shade");
  }}