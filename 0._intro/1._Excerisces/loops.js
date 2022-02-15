const carBatteries = [0.32423, 0.65765, 0.3242, 0.13543];


//const chargedCarBatteries = carBatteries.map(x => x+0.4);

//console.log(chargedCarBatteries)

//carBatteries.forEach(function(value, index){console.log(`${value} : ${index}`)})

const drainedBatteries = carBatteries.filter(x => x < 0.5)
console.log(drainedBatteries)