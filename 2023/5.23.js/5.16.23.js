// every turn, 
// switch from placing a card from the top of the deck into your hand to 
// placing the top card of the deck to the bottom of the deck
// return your hand when the deck is empty  



const draw = (deck) => {
    const drawnCards = [];
    let take = true
    while (deck.length > 0) {
        if (take) {
            drawnCards.push(deck.shift());
        } else {
            deck.push(deck.shift())
        }
        take = !take
    }
    return drawnCards;
};