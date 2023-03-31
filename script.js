// hour = prompt("Enter the hour of the day")
// user = prompt("Enter your name")
// if (hour < 12){
//     alert(`Good morning ${user}`)
// }
// else if(hour <18){
//     alert("Good afternoon")
// }
// else{
//     alert("Good evening")
// }

// for(let i = 0;i<5;i++){
//     alert(`The number is ${i}`)

// }

// array
const students = ['John', 'Sara', 'Jack'];

// using for...of
for ( let element of students ) {

    // display the values
    console.log(element);
}

// string
const string = 'code';

// using for...of loop
for (let i of string) {
    console.log(i);
}


// program to display the sum of natural numbers
let sum = 0;
const n = 100

// looping from i = 1 to n
// in each iteration, i is increased by 1
for (let i = 1; i <= n; i++) {
    sum += i;  // sum = sum + i
}

console.log('sum:', sum);


const student = {
    name: 'Monica',
    class: 7,
    age: 12
}

// using for...in
for ( let key in student ) {

    // display the properties
    console.log(`${key} => ${student[key]}`);
}

