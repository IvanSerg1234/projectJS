const Miha = {
    age: 27,
    job: 'Patrol Police',
    unlikedHobby: 'Шлюший балл',
    favouriteGames: ['counterStrike2',' euroTruckSimulator'],
    zanyat: false
    }
    
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