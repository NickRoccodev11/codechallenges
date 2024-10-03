var romanToInt = function (s) {
  const map = {
    I: 1,
    V: 5,
    X: 10,
    L: 50,
    C: 100,
    D: 500,
    M: 1000,
  };

  let total = 0;
  for (let i = 0; i < s.length; i++) {
    if (s[i] == "I") {
      if (s[i + 1] == "V" || s[i + 1] == "X") {
        total += map[s[i + 1]] - map[s[i]];
        i++;
        continue;
      }
    } else if (s[i] == "X") {
      if (s[i + 1] == "L" || s[i + 1] == "C") {
        total += map[s[i + 1]] - map[s[i]];
        i++;
        continue;
      }
    } else if (s[i] == "C") {
      if (s[i + 1] == "D" || s[i + 1] == "M") {
        total += map[s[i + 1]] - map[s[i]];
        i++;
        continue;
      }
    }
    total += map[s[i]];
  }
  return total;
};
 // DRY VERSION:

 var romanToInt2 = function(s) {
  const map = {
    I: 1,
    V: 5,
    X: 10,
    L: 50,
    C: 100,
    D: 500,
    M: 1000
  };

  let total = 0;

  for (let i = 0; i < s.length; i++) {
    const current = map[s[i]];
    const next = map[s[i + 1]];

    // If current value is smaller than the next, subtract current from total
    if (next && current < next) {
      total += next - current;
      i++; // Skip next character since it has been processed
    } else {
      total += current;
    }
  }

  return total;
};