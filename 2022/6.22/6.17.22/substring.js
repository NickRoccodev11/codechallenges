



// Find the longest substring with no repeating characters


// /**
//  * @param {string} s
//  * @return {number}
//  */
var lengthOfLongestSubstring = function (s) {
    let result = 0;
    let n = s.length;
    for (i = 0; i < n; i++) {
        let visited = new Array(256);
        for (j = i; j < n; j++) {
            if (visited[s.charCodeAt(j)] == true) {
                break;
            } else {
                result = Math.max(result, j - i + 1);
                visited[s.charCodeAt(j)] = true;
            }
        }
    }
    return result

};