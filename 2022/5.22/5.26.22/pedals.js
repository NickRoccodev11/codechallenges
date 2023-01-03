
// Who remembers back to their time in the schoolyard, when girls would take a flower and tear its petals, saying each of the following phrases each time a petal was torn:

// I love you
// a little
// a lot
// passionately
// madly
// not at all
// When the last petal was torn there were cries of excitement, dreams, surging thoughts and emotions.

// Your goal in this kata is to determine which phrase the girls would say for a flower of a given number of petals, where nb_petals > 0.







function howMuchILoveYou(nbPetals) {
    if (nbPetals % 6 === 0) {
        nbPetals = 6
    } else {
        nbPetals = nbPetals % 6
    }

    let response;
    switch (nbPetals) {
        case 1:
            response = "I love you";
            break;
        case 2:
            response = "a little";
            break;
        case 3:
            response = "a lot";
            break;
        case 4:
            response = "passionately";
            break;
        case 5:
            response = "madly";
            break;
        case 6:
            response = "not at all";
            break;
    }
    return response
}