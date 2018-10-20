// JS-Program approach to Linear search algorithm.
function linearSearch(array, element){
    for(let i=0;i<array.length;i++){
        if(array[i] === element){
            return `${element} found at index of ${i} in an array.`;
        }
    }
    return `${element} not found in an array.`
}

// Alternative

function linearSearch(array, element){
    if(array.includes(element)){
        return `${element} found at index of ${array.indexOf(element)}`;
    }
    return `${element} not found in an array.`
}

console.log(linearSearch([2,4,3,6,7,8,5,9], 6));

 