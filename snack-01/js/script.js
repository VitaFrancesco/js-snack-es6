// Creare un array di oggetti:
// Ogni oggetto descriverà una bici da corsa con le seguenti proprietà: nome e peso.
// Stampare a schermo la bici con peso minore.

// array di oggetti con nome e peso bici
const arrayObject = [
    {
        name : 'Bianchi',
        weight: 8,
    },
    {
        name : 'Colnago',
        weight: 10,
    },
    {
        name : 'Giant',
        weight: 9,
    },
    {
        name : 'Specialized',
        weight: 7,
    }
];

let higherWeight = arrayObject[0].weight;
let winnerBicycle = arrayObject[0];

for (let i = 1; i < arrayObject.length; i++) {
    if (arrayObject[i].weight < higherWeight) {
        higherWeight = arrayObject[i].weight;
        winnerBicycle = arrayObject[i];
    };
};

for (let key in winnerBicycle) {
    console.log(winnerBicycle[key]);
};