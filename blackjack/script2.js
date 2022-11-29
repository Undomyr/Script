let deck = []

for (let i = 0; i < 4; i++) { for (let j = 1; j < 14; j++) {
  deck.push({s : i, n : j})
}}

// S = Suit (1 = Hearts, 2 = Diamonds, 3 = Clubs, 4 = Spades)
// N = Number (Ace = 1[11], 2-10, Jack = 11, Queen = 12, King = 13)
// for (let i = deck.length - 1; i > 0; i--) {
//   let j = Math.floor(Math.random() * i)
//   let temp = deck[i]
//   deck[i] = deck[j]
//   deck[j] = temp;
//   console.log(temp)
// }

deck.sort( () => .5 - Math.random() )
console.log(deck)
