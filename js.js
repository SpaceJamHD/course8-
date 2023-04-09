let a = 1
let b = 0

// if (a > 0) {
//     b = a;
// } else {
//     b += 1;
// }


// b = a > 0 ? a : b + 1;

// a > 0 ? 2 : a < 0 ? 3 : 0;

// let color = 'yellow';

// switch (color) {
//     case 'yellow':
//         console.log('Color is  yellow');
//         break
//     case 'red':
//         console.log('Color is  red');
//         break;
//         default: 
//         console.log('Default');
// }



// console.log(`b: ${b}`);



// ЦИКЛ

// let i = 10
// while (i--) {
//     console.log(i)
//     // i++;
// }

// do {
//     console.log('action')
// } while (i > 0);


// for(let i = 0; i < 10; i++) {
//     console.log(i)
// }

// let str = 'Hello'
// let res = ''

// for (let i = 0; i < str.length; i++) {
//     console.log(str[i] + '*');
// }

// console.log(res);



// let colors = ['white', 'balck', 'blue', 'green', 'yellow'];

// for (let i = 0; i < colors.length; i++) {
//     colors[i] = colors[i].toUpperCase();
// }

// console.log(colors);


// const users = [
//     {
//         name: 'Denis',
//         age: 30
//     },

//     {
//         name: 'Olga',
//         age: 25
//     },

//     {
//         name: 'MAks',
//         age: 20
//     },

//     {
//         name: 'Ilya',
//         age: 2
//     },
// ];

// const usersObj = {};

// for (let i = 0; i < users.length; i++) {
//     console.log(users[i].age) 
//     usersObj[users[i].name] = users[i];
// }

// console.log(usersObj['Denis'])


// const users = 
//     {
//         name: 'Denis',
//         age: 30
//     };

//     for (let key in user) {
//         console.log(key);
//         console.log(user[key]);
//     }


for (let value of users) {
    console.log(value);
}