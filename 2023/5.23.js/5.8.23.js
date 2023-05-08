
// The national go-kart racing competition is taking place at your local town and you've been called for building the winners podium with the available wooden blocks. Thankfully you are in a wood-rich area, number of blocks are always at least 6.

// Remember a classic racing podium has three platforms for first, second and third place. First place is the highest and second place is higher than third. Also notice that platforms are arranged as 2nd - 1st - 3rd.

// The organizers want a podium that satisfies:

// The first place platform has the minimum height possible
// The second place platform has the closest height to first place
// All platforms have heights greater than zero.
// Task
// Given the numbers of blocks available, return an array / tuple or another data structure depending on the language (refer sample tests) with the heights of 2nd, 1st, 3rd places platforms.




function racePodium(blocks) {
    let podium = [2, 3, 1];  //  2/4/1  // 3/4/1
    blocks -= 6;
    while (blocks > 0) {
        if (podium[1] - podium[0] > 1) {
            podium[0]++;
            blocks--
        } else if (podium[0] - podium[2] > 1) {
            podium[2]++;
            blocks--;
        } else {
            podium[1]++;
            blocks--;
        }
    }
    let diff = podium[1] - podium[0]

    if (diff > 1 && podium[2] > 1) {
        if (podium[2] > diff) {
            podium[0] += diff;
            podium[2] -= diff;
        } else {
            podium[0] += diff - 1
            podium[2] = 1
        }
    }
    if (podium[1] === podium[0]) {
        podium[0]--;
        podium[2]++;
    }
    return podium
}