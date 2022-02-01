"use strict";

if (4 == 9) {
    console.log('ok');
} else {
    console.log('error');
}


const num = 50;

if (num < 49) {
    console.log('erros');
} else if (num > 100) {
    console.log('много');
} else {
    console.log('ok');
}

(num === 50) ? console.log('ok') : console.log('erros');


const num = 50;


switch (num) {
    case 49:
        console.log('неверно');
        break;
    case 100:
        console.log('нвреное');
        break;
    case 50:
        console.log('в точку');
        break;
    default:
        console.log('несегодня');
        break;
    
}