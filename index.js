/*
1 meter = 3.281 feet
1 liter = 0.264 gallon
1 kilogram = 2.204 pound
*/

const Btn = document.querySelector("#convert");
Btn.addEventListener("click",function(){
    const num = Number(document.getElementById("rectangle").value);
    render(num)
})

function render(num){
    let output = document.querySelector("#output")

    let len = `<div class = "res-div">
    <p class="line1">Length (Meter/Feet)</p>
    <p class="line2">${num} meters = ${(num*3.28).toFixed(3)} feet | ${num} feet = ${(num*0.304).toFixed(3)} meters</p>
    </div>`

    let vol = `<div class = "res-div">
    <p class="line1">Volume (Liter/Gallons)</p>
    <p class="line2">${num} liters = ${(num*0.264172).toFixed(3)} gallons | ${num} gallons = ${(num*3.78541).toFixed(3)} liters</p>
    </div>`

    let mass = `<div class = "res-div">
    <p class="line1">Mass (Kilograms/Pounds)</p>
    <p class="line2">${num} kilos = ${(num*2.2).toFixed(3)} pounds | ${num} pounds = ${(num*0.4536).toFixed(3)} kilos</p>
    </div>`

    output.innerHTML = len+vol+mass;
}