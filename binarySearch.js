// JS-program approach to Binary search algorithms.

function binartSearch(array, element){
    array = array.sort((a,b)=>a-b);
    // console.log(array);
    let start = 0;
    let end = array.length-1;
    while(start < end){
        let mid = Math.floor((start+end)/2);
        if(array[mid] === element){
            return `Element ${element}, Found at index of ${mid}.`
        }       
        if(element<=array[mid]){
            end = mid-1;
        }else{
            start = mid+1;
        }
    }
    return `Element ${element}, not found`
}

console.log(binartSearch([2,4,3,6,7,9,8,5,12,1,9,11], 6));