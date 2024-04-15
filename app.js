let cards = document.querySelectorAll(".card");
let bolts = document.querySelectorAll(".progress ul li");
let prev = document.querySelector(".prev");
let next = document.querySelector(".send");
let currentCardIndex = 0;
cards[0].classList.add("active");
prev.addEventListener("click", () => previousCard());
next.addEventListener("click", () => nextCard());
//? for get next card
function nextCard() {
  if (currentCardIndex < cards.length - 1) {
    currentCardIndex++;
    cards.forEach((e) => e.classList.remove("active"));
    cards[currentCardIndex].classList.add("active");
    bolts[currentCardIndex].classList.add("active");
    prev.classList.remove("disabled");
  }
  next.value = currentCardIndex < cards.length - 1 ? "next" : "Send";
}
//? for get previous card
function previousCard() {
  if (currentCardIndex > 0) {
    currentCardIndex--;
    cards.forEach((e) => e.classList.remove("active"));
    cards[currentCardIndex].classList.add("active");
    bolts[currentCardIndex + 1].classList.remove("active");
  }
  !currentCardIndex && prev.classList.add("disabled");
  next.value = currentCardIndex < cards.length - 1 ? "next" : "Send";
}
