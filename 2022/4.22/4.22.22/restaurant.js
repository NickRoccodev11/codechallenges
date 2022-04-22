/**
 * @param {string[]} list1
Given two arrays of strings list1 and list2, find the common strings with the least index sum.

A common string is a string that appeared in both list1 and list2.

A common string with the least index sum is a common string such that if it appeared at list1[i] and list2[j] then i + j should be the minimum value among all the other common strings.

Return all the common strings with the least index sum. Return the answer in any order.

 





* @param {string[]} list2
 * @return {string[]}
 */
 var findRestaurant = function(list1, list2) {
    let longer = list1.length > list2.length ? list1 : list2,
        commons = {};
        for(item of longer){
            if(list1.includes(item) && list2.includes(item) ){
                commons[item] = list1.indexOf(item) + list2.indexOf(item)
            }
        }
    
    let answer = []
    let min = Math.min(...Object.values(commons))
    for(key in commons){
        if (commons[key] === min){
            answer.push(key)
        }
    }

    return answer
};