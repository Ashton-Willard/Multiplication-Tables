function Multiply(){
let num = document.getElementById('numimput').value;
num = Number(num);

let startRange = 1;

let range= document.getElementById('range').value;
range= Number(range);

document.getElementById('tableout').innerHTML = '';

if(isNaN(num) || num <=0) {
    document.getElementById('tableout').innerHTML = "Enter a valid number greater than 0.";
    return
}

if(isNaN(range) || range <=0 || range < startRange) {
    document.getElementById('tableout').innerHTML = "Enter a valid range greater than or equal to 1.";
    return
}

let tableHTML = `<h2>Multiplication Table for ${num} (Range: ${startRange} to ${range})</h2>`;
            tableHTML += `<table><thead><tr><th>Multiplier</th><th>Result</th></tr></thead><tbody>`;

for (let i = startRange; i <= range; i++) {
tableHTML += `<tr><td>${i}</td><td>${num * i}</td></tr>`;
}
            
tableHTML += `</tbody></table>`;

document.getElementById('tableout').innerHTML = tableHTML;
}






// //Multiplication table starts with 3 digits (Enter num, first multiplier, then the number to multiply too)
// const prompt = require('prompt-sync')();

// function printtable(a, b, c) {
//     if (isNaN(a) || isNaN(b) || isNaN(c)) {
//         console.log('Invalid Input');
//         return;
//     }
//     for (let i = b; i <= c; i++) {
//         console.log(a + '*' + i + '=' + a * i);
//     }
// }

// let a = Number(prompt('Enter Number: '));
// let b = Number(prompt('Enter First Multiplier: '));
// let c = Number(prompt('Enter Range: '));

// printtable(a, b, c);