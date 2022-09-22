// The main idea is to count all the occurring characters in a string. If you have a string like aba, then the result should be {'a': 2, 'b': 1}.

// What if the string is empty? Then the result should be empty object literal, {}.




function count(string) {

    let answer = {};
    for (i = 0; i < string.length; i++) {
        if (!answer[string[i]]) {
            answer[string[i]] = 0
        }
    }
    for (i = 0; i < string.length; i++) {
        for (j = 0; j < Object.keys(answer).length; j++) {
            if (string[i] === Object.keys(answer)[j]) {
                answer[string[i]] === answer[string[i]]++
            }
        }

    }
    return answer
}