const Miha = {
    age: 27,
    job: 'Patrol Police',
    unlikedHobby: 'Шлюший балл',
    favouriteGames: ['counterStrike2',' euroTruckSimulator']
};
    
let time = 19;
    
function isMihaZanyat(obj) {
    if (time >= 8 && time <= 17) {
        console.log(`Мишаня сейчас работает в ${obj.job}`);
    } else if (time >= 6 && time < 8) {
        console.log(`Мишаня сейчас играет в ${obj.favouriteGames[1]}`);
    } else if (time >= 20 && time <= 23) {
        console.log(`Мишаня сейчас играет в ${obj.favouriteGames[0]}`);
    } else {
        console.log(`Мишаня сейчас на ${obj.unlikedHobby}`);
    }
}
    
isMihaZanyat(Miha);



// const Illya = {
//     age: 20,
//     job: 'Trader',
//     Hobby: 'Sliv balanca',
//     ban: 'muzhichki',
//     term: 'permanent'
// };

// let date = '03.01.2025'
    
// function isIllyaZabanen(obj) {
//     if (date <= '01.01.2025') {
//         console.log(`Ілля (кажан) ${obj.job}`);
//     } else if (date === '02.01.2025') {
//         console.log(`Ілля (кажан) сейчас делает ${obj.Hobby}`);
//     } else {
//         console.log(`Ілля (кажан) ${obj.term} забанен в ${obj.ban} `);
//     }
// }
    
// isIllyaZabanen(Illya);