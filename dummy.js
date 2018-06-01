function rBinSearch(arr, num, i=0){
    if(i == arr.length){
        return false;
    }
    else{
        if(arr[i] === num){
            return true;
        }
            return rBinSearch(arr, num, i+1);
    }
}

console.log("~~~~~~~~~~~~")
console.log(rBinSearch([1,5,-7,-9,1],5));