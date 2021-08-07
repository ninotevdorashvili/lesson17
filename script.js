
// 1-ამოცანა:

// let numbers = [5, 25, 89, 120, 36];
// numbers.push('javascript', 'python');
// numbers.unshift('html','css');
// console.log(numbers.length);
// numbers.shift();
// numbers.pop();
// console.log(numbers[0],numbers[1],numbers[7],numbers[8]); 
// console.log(numbers);




// 2-ამოცანა:
// let fruits = ['ფორთოხალი', 'ბანანი', 'მსხალი'];
// console.log(fruits.length);
// fruits.push('ვაშლი','ანანასი');
// fruits.unshift('საზამთრო');
// console.log(fruits.length);
// fruits.splice(2,0, 'მანგო');
// fruits.shift();
// fruits.pop();
// console.log(fruits.length);

// console.log(fruits);




// 3-ამოცანა:
// let user = {
//     name: 'severus',
//     lastname: 'snape',
//     age: 25,
//     nationality: 'British'
// }
// for (let x of Object.keys(user)) {
//     console.log(x);
// }
// Object.keys(user).forEach(function(x) {
//     console.log(x);
// })
// Object.keys(user).forEach( (x) => {
//     console.log(x);
// })




// 4-ამოცანა:
// let user = {
//     name: 'severus',
//     lastname: 'snape',
//     age: 25,
//     nationality: 'British',
//     faculty: 'Slytherin',
//     gender: 'male'
// }
// for (let x of Object.values(user)) {
//     console.log(x);
// }
// Object.values(user).forEach(function(x){
//     console.log(x);
// })
// Object.values(user).forEach((x)=>{
//     console.log(x);
// })



// 5-ამოცანა:
// let array = [12, 25, 3, 6, 8, 14, 7, 23];
// let newArray = array.map(function(x){
//     return x / 3;
// })
// console.log(newArray);
// let newArray = array.map( x => x/3);
// console.log(newArray);




// 6-ამოცანა:
// let array = ["hello", 125, "javascript", "html", 43, "css", "scss", "bootstrap", 88, 59, "python"];
// let numbers = x => {
//     if (typeof(x)=== 'number') {
//         return x;
//     }
// }
// let numbersonly = array.filter(numbers);
// console.log(numbersonly);