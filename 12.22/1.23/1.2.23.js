// There are two lists, possibly of different lengths. The first one consists of keys, 
// the second one consists of values. Write a function createDict(keys, values) 
// that returns a dictionary created from keys and values. If there are not enough values, 
// the rest of keys should have a None (JS null)value.
//  If there not enough keys, just ignore the rest of values.


function createDict(keys, values){
    let dict = {}
    for (i=0; i < keys.length; i++){
      dict[keys[i]] = values[i] === undefined ? null : values[i] 
    }
    return dict
    }