// Code your solutions in this file
function writeCards(array, event) {
    let newArray = []

    for (let i = 0; i < array.length; i++) {
        newArray.push(`Thank you, ${array[i]}, for the wonderful ${event} gift!`)   
    }
    return newArray;
}

function countDown() {
    let down = 10; // We will start from 11 (which is 10)
    while (down > 0)
        console.log(down--);
        console.log(down);
}