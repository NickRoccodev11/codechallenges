
//FIND THE H-INDEX!
/**
 * @param {number[]} citations
 * @return {number}
 */
var hIndex = function(citations) {
  let maxH = citations.length;
  let counter = 0;
  citations.sort((a,b) => b - a);
  while(maxH > 0) {

    while((counter + 1) <= maxH){
        if((counter + 1) === maxH && citations[counter] >= maxH){
            return maxH;
        }else if(citations[counter] >= maxH){
            counter++;
        }else{
            maxH--;
            counter = 0;
            break;
        }
    }
  }
  return maxH;
};
