const currentTimeOutput = document.getElementById("current-time")
const isItFridayOutput = document.getElementById("is-it-friday")


let currentDate = new Date();


currentTimeOutput.innerText = `${currentDate.getHours()}:${currentDate.getMinutes()}:${currentDate.getSeconds()}`

if(currentDate.getDay() === 5){
    isItFridayOutput.innerText = `Yes`
}else{
    isItFridayOutput.innerText = `No`
}