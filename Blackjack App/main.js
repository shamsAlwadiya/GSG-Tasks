let cards = [];
let sum = 0;
let hasBlackJack = false;
let isAlive = false;
let message = " ";
let messageEl = document.getElementById("message-el");
let sumEl = document.getElementById("sum-el");
let cardEl = document.getElementById("card-el");
let playerEl = document.getElementById('player-el');
let player = {
  name :'Per',
  chips :155
}
playerEl.textContent= player.name +': '+player.chips
let newCardnum = getRandomCard();
console.log(cards);
function startGame() {
  isAlive = true;
  let firstName = getRandomCard();
  let secondName = getRandomCard();
  cards = [firstName , secondName];
  sum = firstName + secondName;
  renderGame();
}
console.log(cards);
function renderGame() {
  if (sum <= 20) {
    cardEl.textContent = "Cards:";
    for (let i = 0; i < cards.length; i++) {
      cardEl.textContent += cards[i] +' ';
    }

    message = "Do You want to draw a new card ?";
    sumEl.textContent = "Sum : " + sum;
  } else if (sum === 21) {
    cardEl.textContent = "Cards:" + cards[0] + "  " + cards[1];

    sumEl.textContent = "Sum : " + sum;
    message = "Wohooo ! You have got Blackjack !";
    hasBlackJack = true;
  } else {
    cardEl.textContent = "Cards:" + cards[0] + " " + cards[1];

    message = "You are out of the game !";
    sumEl.textContent = "Sum : " + sum;

    isAlive = false;
  }
  messageEl.textContent = message;
}

function newCard() {
  if (isAlive && hasBlackJack===false){

    let card = getRandomCard()
    sum += card;
    cards.push(card);
    renderGame();
  }
}
function getRandomCard() {
  let number = Math.floor(Math.random() * 13) + 1;
  if (number === 1) {
    return 11;
  } else if (number > 10) {
    return 10;
  } else {
    return number;
  }
}

