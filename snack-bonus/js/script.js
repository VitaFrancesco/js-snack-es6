// Scrivere una funzione che accetti tre argomenti, un array e due numeri (a più piccolo di b).
// La funzione ritornerà un nuovo array con i valori che hanno la posizione compresa tra i due numeri

function middleNumbers (array, a, b) {
    const arrayLen = b - a - 1;
    for ( let i = 0; i < arrayLen; i++) {
        a++;
        array.push(a);
    }
    return array;
};

const emptyArray = [];
console.log(middleNumbers (emptyArray, 7,16));