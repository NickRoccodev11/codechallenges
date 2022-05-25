
// You are a composer who just wrote an awesome piece of music. Now it's time to present it to a band that will perform your piece, 
// but there's a problem! The singers vocal range doesn't stretch as your piece requires, and you have to transpose the whole piece.

// Your task
// Given a list of notes (represented as strings) and an interval, output a list of transposed notes in sharp notation.

// Input notes may be represented both in flat and sharp notations (more on that below).

// For this kata, assume that input is always valid and the song is at least 1 note long.

// Assume that interval is an integer between -12 and 12.




function transpose(song, interval) {
    let notes = ["A", "A#", "B", "C", "C#", "D", "D#", "E", "F", "F#", "G", "G#"];
    let notesRev = ["G#", "G", "F#", "F", "E", "D#", "D", "C#", "C", "B", "A#", "A"];
    let sharped = [];
    for (i = 0; i < song.length; i++) {
        if (song[i] === "Bb") {
            sharped.push("A#")
        } else if (song[i] === "Db") {
            sharped.push("C#")
        } else if (song[i] == "Eb") {
            sharped.push("D#")
        } else if (song[i] == "Gb") {
            sharped.push("F#")
        } else if (song[i] == "Ab") {
            sharped.push("G#")
        } else {
            sharped.push(song[i])
        }
    };

    let answer = [];
    if (interval >= 0) {
        for (i = 0; i < sharped.length; i++) {
            for (j = 0; j < notes.length; j++) {
                if (sharped[i] === notes[j]) {
                    answer.push(notes[(j + interval) % 12])
                }
            }
        };
    } else if (interval < 0) {
        for (i = 0; i < sharped.length; i++) {
            for (j = 0; j < notesRev.length; j++) {
                if (sharped[i] === notesRev[j]) {
                    answer.push(notesRev[(j - interval) % 12])
                }
            }
        };
    }
    return answer;
}