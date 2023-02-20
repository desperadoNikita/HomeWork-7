function spliceArray (array) {
    const arr = array.splice(2, 3)
    return arr;
}
const message = spliceArray( ["I", "study", "JavaScript", "right", "now"]);
console.log(message);


function sliceArray(array) {
    const arr = array.slice(0, 2);
    return arr;
}
const message1 = sliceArray(["I", "study", "JavaScript", "right", "now"]);
console.log(message1);


function concatArr(array1, array2) {
    const arr = array1.concat(array2);
    return arr;
}
const message2 = concatArr(["I", "study"], ["JavaScript", "right", "now"] );
console.log(message2);