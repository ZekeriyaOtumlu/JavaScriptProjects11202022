//Create 2 variables, firstCard and secondCard.
// Set their values to random number between 2-11
//Create a variable, sum, and set it to the sum of the two cards


let cards = []
let sum = 0
let hasBlackjack = false // initially it's false because no one has blackjack yet
let isAlive = false
let message = ""
let messageEl = document.getElementById("message-el")
let sumEl = document.getElementById("sum-el")
let cardsEl = document.querySelector("#cards-el")

let playerInfo = {
    name: "Zack",
    credit: 200
}

let playerEl = document.querySelector("#player-el")
playerEl.textContent = playerInfo.name + ": $ " + playerInfo.credit



function getRandomCard() {
    let randomNumber = Math.floor(Math.random() * 13) + 1
    if (randomNumber === 1) {
        return 11
    } else if (randomNumber > 10) {
        return 10
    } else {
        return randomNumber
    }


}

function startGame() {
    isAlive = true
    let firstCard = getRandomCard()
    let secondCard = getRandomCard()
    cards = [firstCard, secondCard]
    sum = firstCard + secondCard
    renderGame()

}

function renderGame() {
    //render out first card and second card
    cardsEl.textContent = "Cards: "
    for (let i = 0; i < cards.length; i++) {
        cardsEl.textContent += cards[i] + " "

    }
    sumEl.textContent = "Sum: " + sum
    if (sum < 21) {

        message = "Do you want to draw a new card?"
    } else if (sum === 21) {
        message = "You won"
        hasBlackjack = true // here once you got sum as 21 then you have blackjack
    } else {
        message = "You out of game"
        isAlive = false
    }
    messageEl.textContent = message

    // cardsEl.textContent = "Cards: " + cards[0] + " " + cards[1]
}

function newCard() {
    if (isAlive === true && hasBlackjack === false) {
        let card = getRandomCard()
        sum += card
        cards.push(card)
        renderGame()
    }
}