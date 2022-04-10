// It should remove all values from list a, 
// which are present in list b keeping their order.

// arrayDiff([1,2],[1]) == [2]
// If a value is present in b,
//  all of its occurrences must be removed from the other:

// arrayDiff([1,2,2,2,3],[2]) == [1,3]

function remover(a, b) {
    let result = a.filter(element => {
      for (i = 0; i < b.length; i++) {
        if (element === arrB[i]) {
          return false;
        }
      } 
      return true;
    });
    return result;
  }
  