// when writing recursive functions, always define base case first, then the following function need to shrink the problem
// Write a recursive function named countEven, which when given an array, will return the count of number even numbers. (For instances [1,2,3,4] will give the result of 2, as there are two event numbers in the array).

function countEven (arr){

    if (arr.length == 1) {
            return arr[0] % 2 == 0? 1 : 0;
        }
        let isEven = arr[0] % 2 == 0? 1 : 0;
        return isEven + countEven(arr.slice(1))
}

// Write a recursive function named findIndex, 
// which takes in two argument, an array and a wanted value. 
// Return the index of the wanted value.

function findIndex(arr, val, i=0){

    if (arr[i] >= arr.length){
        return false
    }
    else if (arr[i] === val){
            return i;
    }
    else {
        findIndex(arr, val, i+1)
    }
}

// Write a recursive function to print out the reverse of a string. 
// Example: if given "abcd" as the argument, the output will be "dcba". 

function printReverse(string, i=string.length-1, newString=''){

    if (i < 0){
        return newString;
    }

    newString = newString + string[i]
    return printReverse(string, i-1, newString)
}

//Write a recursive function to check if two strings are palindromes.

function palindromes(string1, string2, i=0, j=string2.length-1){
    if (i >= string1.length){
        return true
    }
    if (string1[i] !== string2[j]){
        return false
    }
    if (string1[i] == string2[j]){
        return palindromes(string1, string2, i+1, j-1)
    }
}

