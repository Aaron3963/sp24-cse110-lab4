let statistics = {
    redCars: 21,
    blueCars: 45,
    greenCars: 12,
    raceCars: 5,
    blackCars: 40,
    rareCars: 2
}

for (const type in statistics) {
    if (type[0] == 'r' || statistics[type] % 2 == 1){
        console.log(statistics[type]);
    }
}