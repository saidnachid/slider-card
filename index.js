let prev = document.getElementById("prev");
let next = document.getElementById("next");
let cardElement = document.querySelector(".cards");
let cardCount = document.querySelectorAll(".card");
let index = 0;

next.addEventListener("click", () => {
  if (index < cardCount.length - 1) {
    index++;
  }
  cardElement.style.transform = `translate(-${
    index * cardElement.clientWidth
  }px)`;
  hideButton();
});

prev.addEventListener("click", () => {
  if (index > 0) {
    index--;
  }
  cardElement.style.transform = `translate(-${
    index * cardElement.clientWidth
  }px)`;
  hideButton();
});

function hideButton() {
  if (index == cardCount.length - 1) {
    next.classList.add("hide");
  } else {
    next.classList.remove("hide");
  }
  if (index == 0) {
    prev.classList.add("hide");
  } else {
    prev.classList.remove("hide");
  }
}

hideButton();

window.onresize = function () {
  cardElement.style.transform = `translate(-${
    index * cardElement.clientWidth
  }px)`;
};
