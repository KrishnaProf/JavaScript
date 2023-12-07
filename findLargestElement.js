/*
  Write a function `findLargestElement` that takes an array of numbers and returns the largest element.
  Example:
  - Input: [3, 7, 2, 9, 1]
  - Output: 9
*/

function findLargestElement(numbers) {

    if(numbers.length === 0){
        return undefined;
    }

    let largest = numbers[0];

    for(let num=1 ; num<numbers.length; num++){
        if(numbers[num] > largest){
            largest = numbers[num]
            
        }
        
    }

    return largest;
    
};

const Input = [3, 7, 2, 9, 1]

const result = findLargestElement(Input)

console.log(result)

module.exports = findLargestElement;