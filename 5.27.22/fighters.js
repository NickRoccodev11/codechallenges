// Create a function that returns the name of the winner in a fight between two fighters.

// Each fighter takes turns attacking the other and whoever kills the other first is victorious. Death is defined as having health <= 0.

// Each fighter will be a Fighter object/instance. See the Fighter class below in your chosen language.

// Both health and damagePerAttack (damage_per_attack for python) will be integers larger than 0. You can mutate the Fighter objects.




//the Fighter constructor
function Fighter(name, health, damagePerAttack) {
    this.name = name;
    this.health = health;
    this.damagePerAttack = damagePerAttack;
    this.toString = function() { return this.name; }
}


function declareWinner(fighter1, fighter2, firstAttacker) {
    let turn;
    firstAttacker === fighter1.name ? turn = 1 : turn = 2;
    let winner = "";
    do {
        if (turn === 1) {
            fighter2.health -= fighter1.damagePerAttack;
            fighter2.health <= 0 ? winner = fighter1.name : turn = 2
        }
        if (turn === 2) {
            fighter1.health -= fighter2.damagePerAttack;
            fighter1.health <= 0 ? winner = fighter2.name : turn = 1
        }
    } while (winner === "")
    log(winner)
}