// Recursive Sigma
function rSigma(num, sum = 0) {
    if (num === 0) {
        return sum;
    }
    return rSigma(num - 1, sum + num);
}

// Recursive Factorial
function rFactorial(num, product = 1) {
    if (num === 0) {
        return product;
    }
    return rFactorial(num - 1, product * num);
}

// Recursive Fibonacci
function rFib(num) {
    if (num <= 2) {
        return 1;
    }
    return rFib(num - 2) + rFib(num - 1);
}


function rTrib(num) {
    var intNum = Math.trunc(num);
    if (intNum <= 3) {
        return 1;
    }
    return rTrib(intNum - 3) + rTrib(intNum - 2) + rTrib(intNum - 1);
}
console.log("~~~~~~~~~~~~")
console.log(rTrib(5.643));

// Recursive Remove Negatives
function rRemNegatives(arr, i = 0){
    if(i == arr.length){
        return arr;
    }
    else{
        if(arr[i] < 0){
            for(var j = i; j < arr.length - 1; j++){
                arr[j] = arr[j+1];
            }
            arr.pop();
            return rRemNegatives(arr, i);
        }
        else{
            return rRemNegatives(arr, i+1);
        }
    }
}


// Recursive Binary Search
function rSearch(arr, num, i = 0) {
    if (i === arr.length) {
        return false;
    } else {
        if (arr[i] === num) {
            return true;
        }
        return rSearch(arr, num, i + 1);
    }
}
// Greatest Common Factor
// String: In-Order Subsets
// Recursive List Length
function rLength(node) {
    if (node == null) {
        return 0;
    }
    return 1 + rLength(node.next);
}

// Recursive Array Sum
function sumArray(arr, i = 0, sum = 0) {
    if (i === arr.length) {
        return sum;
    } else {
        return sumArray(arr, i + 1, sum + arr[i]);
    }
}

// Rising Squares
// Binary String Expansion
// String Anagrams
// Sum of Squares
// Uneven Digits
// Generate Coin Change