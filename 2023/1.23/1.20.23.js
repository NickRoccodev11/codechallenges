//this pattern is called an accumulator. 
// the answer given it's inputs is "abracadabra!"

function joinElements(array, joinString){
    function recurse(idx, result){
        result += array[idx];
        if(idx===array.length-1){
            return result
        }else{
            return recurse(idx+1, result+joinString)
        }
    }
        return recurse(0,'')
}

log(joinElements(["abr","c", "d", "br", "!" ], "a"))
