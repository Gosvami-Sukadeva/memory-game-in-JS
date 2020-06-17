const cardsColor = [
  "red",
  "red",
  "green",
  "green",
  "blue",
  "blue",
  "brown",
  "brown",
  "yellow",
  "yellow",
  "gray",
  "gray",
  "cadetblue",
  "cadetblue",
  "violet",
  "violeet",
  "lightgreen",
  "lightgreen",
];

let cards = document.querySelectorAll("div");

cards = [...cards];

const startTime = new Date().getTime();

let activeCard = "";
const activeCards = [];
const gamePairs = cards.length / 2; //9
let gameResult = 0;

const clickCard = function () {
  // mini gra dwa kliknięcia
  activeCard = this;
  activeCard.classList.remove("hidden");
  // czy to 1 kliknięcie
  if (activeCards.length === 0) {
    activeCards[0] = activeCard;
    console.log("1");
    return;
  }

  //czy to 2 kliknięcie
  else {
    console.log("2");
    cards.forEach((card) => {
      card.removeEventListener("click", clickCard);
    });
    activeCards[1] = activeCard;
    setTimeout(function () {
      if (activeCards[0].className === activeCards[1].className) {
        console.log("wygrana");
        activeCards.forEach((card) => {
          card.classList.add("off");
        });
      } else {
        console.log("przegrana");
        activeCards.forEach((card) => {
          card.classList.add("hidden");
        });
      }
      activeCard = "";
      activeCards.length = 0;
      cards.forEach((card) => {
        card.addEventListener("click", clickCard);
      });
    }, 1000);
  }
  //jeśli drugie to zablokować na czas kliknięcia
  //jeśli drugie to czy wygrana czy przegrana, jeśli wygrana to sprawdzenie czy koniec gry
  //zabezpieczenia: dwukrotne kliknięcie w ten sam element i w element z klasą hidden
};

const init = function () {
  cards.forEach((card) => {
    const position = Math.floor(Math.random() * cardsColor.length);
    card.classList.add(cardsColor[position]);
    cardsColor.splice(position, 1);
  });

  setTimeout(function () {
    cards.forEach((card) => {
      card.classList.add("hidden");
      card.addEventListener("click", clickCard);
    });
  }, 2000);
};

init();
