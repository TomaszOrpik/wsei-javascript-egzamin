function bigestSUmOfTwoElements(array) {
    if(array.length === 1)
        return array[0];
    else if (array.length === 0)
        return false;
    else {
        let arr1 = array.sort().reverse();
        return arr1[0] + arr1[1];
    }
}

console.log(bigestSUmOfTwoElements([2]));
console.log(bigestSUmOfTwoElements([]));
console.log(bigestSUmOfTwoElements([5, 9, 2, 6, 1]));