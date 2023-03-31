// const n = 5

// for(let i = 0;i<n;i++){
//     console.log(`The number is ${i}`)
// }

// program to display the sum of first 10 natural numbers

//i = 1 to 10



// sum = 0+1 //1
// sum = sum + 2 //3
// sum = sum + 3 //6


// sum = sum + 10 //55

// program to display the sum of first 10 natural numbers
const n = 10;
let sum = 0;
for(let i = 1;i<=10;i++){
    sum+=i
}

// console.log('Sum is ', sum)

// print numbers from 10 to 1 using decrement operator

// for(let i = 10;i >=1 ;i --){
//     console.log('The number is ',i);
// }

//for ..of loop
let students = ['Hari','Rama','Sudha']

for(let student of students){
    console.log(student)
} 

// let i=0;
// while (i < 10) {
//     console.log('The number is ', i);
//       i++;
//     }

// let i = 2;
// do{
// console.log('Print me once atleast');
// console.log(i);
// }while(i<1)

for(num = 1;num <=15;num++){

    if (num % 2 == 0){
        console.log(`${num} is even`)
    }
    else{
        console.log(`${num} is odd`)  
    }
}
