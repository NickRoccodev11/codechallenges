
// Given two strings s1 and s2, we want to visualize how different the two strings are. We will only take into account the lowercase letters (a to z). First let us count the frequency of each lowercase letters in s1 and s2.

// s1 = "A aaaa bb c"

// s2 = "& aaa bbb c d"

// s1 has 4 'a', 2 'b', 1 'c'

// s2 has 3 'a', 3 'b', 1 'c', 1 'd'

// So the maximum for 'a' in s1 and s2 is 4 from s1; the maximum for 'b' is 3 from s2. In the following we will not consider letters when the maximum of their occurrences is less than or equal to 1.

// We can resume the differences between s1 and s2 in the following string: "1:aaaa/2:bbb" where 1 in 1:aaaa stands for string s1 and aaaa because the maximum for a is 4. In the same manner 2:bbb stands for string s2 and bbb because the maximum for b is 3.

// The task is to produce a string in which each lowercase letters of s1 or s2 appears as many times as its maximum if this maximum is strictly greater than 1; these letters will be prefixed by the number of the string where they appear with their maximum value and :. If the maximum is in s1 as well as in s2 the prefix is =:.

// In the result, substrings (a substring is for example 2:nnnnn or 1:hhh; it contains the prefix) will be in decreasing order of their length and when they have the same length sorted in ascending lexicographic order (letters and digits - more precisely sorted by codepoint); the different groups will be separated by '/'. See examples and "Example Tests".

// Hopefully other examples can make this clearer.

// s1 = "my&friend&Paul has heavy hats! &"
// s2 = "my friend John has many many friends &"
// mix(s1, s2) --> "2:nnnnn/1:aaaa/1:hhh/2:mmm/2:yyy/2:dd/2:ff/2:ii/2:rr/=:ee/=:ss"

// s1 = "mmmmm m nnnnn y&friend&Paul has heavy hats! &"
// s2 = "my frie n d Joh n has ma n y ma n y frie n ds n&"
// mix(s1, s2) --> "1:mmmmmm/=:nnnnnn/1:aaaa/1:hhh/2:yyy/2:dd/2:ff/2:ii/2:rr/=:ee/=:ss"

// s1="Are the kids at home? aaaaa fffff"
// s2="Yes they are here! aaaaa fffff"
// mix(s1, s2) --> "=:aaaaaa/2:eeeee/=:fffff/1:tt/2:rr/=:hh"



function mix(s1, s2) {
    let alphabet = "abcdefghijklmnopqrstuvwxyz",
        s1Arr = [],
        s2Arr = [],
        count = 0,
        result = [],
        response = "";

    //create arrays of letter instances in each string
    for (i = 0; i < alphabet.length; i++) {
        for (j = 0; j < s1.length; j++) {
            if (alphabet[i] === s1[j]) {
                count++;
            }
            if (j === s1.length - 1 && count > 1) {
                s1Arr.push([alphabet[i], count]);
                count = 0;
            }
            if (j === s1.length - 1 && count <= 1) {
                count = 0;
            }
        }
    }
    for (i = 0; i < alphabet.length; i++) {
        for (j = 0; j < s2.length; j++) {
            if (alphabet[i] === s2[j]) {
                count++;
            }
            if (j === s2.length - 1 && count > 1) {
                s2Arr.push([alphabet[i], count]);
                count = 0;
            }
            if (j === s2.length - 1 && count <= 1) {
                count = 0;
            }
        }
    }

    // sort the letter arrays
    s1Arr.sort((function (index) {
        return function (a, b) {
            return (a[index] === b[index] ? 0 : (a[index] > b[index] ? -1 : 1));
        };
    })(1));
    s2Arr.sort((function (index) {
        return function (a, b) {
            return (a[index] === b[index] ? 0 : (a[index] > b[index] ? -1 : 1));
        };
    })(1));

    //place all letters present in both strings in the result array
    for (i = 0; i < s1Arr.length; i++) {
        for (j = 0; j < s2Arr.length; j++) {
            if (s1Arr[i][0] === s2Arr[j][0]) {
                if (s1Arr[i][1] > s2Arr[j][1] && s1Arr[i] !== "!" && s2Arr[j] !== "!") {
                    result.push([`1:${s1Arr[i][0].repeat(s1Arr[i][1])}`, `a${s1Arr[i][0]}`])
                    s1Arr[i] = "!"
                    s2Arr[j] = "!"
                } else if (s1Arr[i][1] < s2Arr[j][1] && s1Arr[i] !== "!" && s2Arr[j] !== "!") {
                    result.push([`2:${s2Arr[j][0].repeat(s2Arr[j][1])}`, `b${s2Arr[j][0]}`])
                    s2Arr[j] = "!"
                    s1Arr[i] = "!"
                } else if (s1Arr[i][1] = s2Arr[j][1] && s1Arr[i] !== "!" && s2Arr[j] !== "!") {
                    result.push([`=:${s2Arr[j][0].repeat(s2Arr[j][1])}`, `z${s2Arr[j][0]}`])
                    s1Arr[i] = "!"
                    s2Arr[j] = "!"

                }
            }
        }
    }
    //place unique letters in the result array
    for (i = 0; i < s1Arr.length; i++) {
        if (s1Arr[i] !== "!") {
            result.push([`1:${s1Arr[i][0].repeat(s1Arr[i][1])}`, `a${s1Arr[i][0]}`])

        }
    }
    for (i = 0; i < s2Arr.length; i++) {
        if (s2Arr[i] !== "!") {
            result.push([`2:${s2Arr[i][0].repeat(s2Arr[i][1])}`, `b${s2Arr[i][0]}`])

        }
    }

    
//sort the list
    result.sort(function(a, b) {
        return a[1].localeCompare(b[1]);
      });
      log(result)
  
    result.sort((a, b) => {
        return b[0].length - a[0].length
    })

//form the response
     for (i = 0; i < result.length; i++) {

        response += `/${result[i][0]}`

    }
    response = response.slice(1)

    return response
}