// Creare un array di oggetti di squadre di calcio.
// Ogni squadra avrà diverse proprietà: nome, punti fatti, falli subiti.
// Nome sarà l’unica proprietà da compilare, le altre saranno tutte settate a 0.
// Generare numeri random al posto degli 0 nelle proprietà “punti” fatti e “falli subiti”.
// Infine, creiamo un nuovo array i cui elementi contengono solo nomi e falli subiti e stampiamo tutto in console.

const arrayObject = [
    {
        name : 'Inter',
        point : 0,
        foulsSuffer : 0,
    },
    {
        name : 'Milan',
        point : 0,
        foulsSuffer : 0,
    },
    {
        name : 'Juve',
        point : 0,
        foulsSuffer : 0,
    },
    {
        name : 'Roma',
        point : 0,
        foulsSuffer : 0,
    }
];

for (let i = 0; i < arrayObject.length; i++) {
    arrayObject[i].point = parseInt((Math.random() * 70) + 1);
    arrayObject[i].foulsSuffer = parseInt((Math.random() * 70) + 1);
};

console.log(arrayObject);

const newArrayTeam = [];
for (let i = 0; i < arrayObject.length; i++) {
    const teamI = {};
    teamI.name = arrayObject[i].name;
    teamI.foulsSuffer = arrayObject[i].foulsSuffer;
    newArrayTeam.push(teamI);
};
console.log(newArrayTeam)

for (let i = 0; i < newArrayTeam.length; i++) {
    for (let key in newArrayTeam[i]) {
        console.log(newArrayTeam[i][key]);
    };
};
