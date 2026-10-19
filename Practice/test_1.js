// let n = 20;
// for( let i = 1 ; i<=n ; i++){
//     if(i%3==0 && i%5==0){
//         console.log("FizzBuzz");
        
//     }
//     else if (i%3==0){
//         console.log("Fizz");
//     }
//     else if(i%5==0){
//         console.log("Buzz");
//     }
//     if(i===13){
//         continue;
//     }
//     if(i===18){
//         break;
//     }
//     else{
//         console.log(i);
//     }
    
// }

// let stud ={
//     name:"Sreekar",
//     age:18,
//     passed:true,
//     marks:[86,99,89,78]
// };
// console.log(stud['name']);
// console.log(stud['age']);
// for(let i of stud.marks){
//     console.log(i);
// }
// let sum =0;
// for(let i of stud.marks){
//     sum+=i;
// }
// console.log(sum/(stud.marks).length);
// let maxi=stud.marks[0];
// for (let i of stud.marks){
//     if(maxi<i){
//         maxi=i;
//     }
// }
// console.log(maxi);
// stud.branch="CSE";
// stud.age=19;
// if((sum/(stud.marks).length) >= 50){
//     stud.passed=true;
// }
// console.log(stud)

// function add(a, b) {
//     return a + b;
// }

// let result = add(10, 20);

// console.log(result);

// const add = (a,b) => {
//     return a+b;
// };


// let students = [
//     { name: "A", marks: [80, 90, 70] },
//     { name: "B", marks: [60, 75, 85] },
//     { name: "C", marks: [95, 88, 92] }
// ];

// function getAverage(marks) {
//     let sum = 0;

//     for (let mark of marks) {
//         sum += mark;
//     }

//     return sum / marks.length;
// }

// function getHighest(marks) {
//     let highest = marks[0];

//     for (let mark of marks) {
//         if (mark > highest) {
//             highest = mark;
//         }
//     }

//     return highest;
// }

// function printStudent(student) {
//     console.log(student.name);
//     console.log("Average:", getAverage(student.marks));
//     console.log("Highest:", getHighest(student.marks));
// }

// for (let student of students) {
//     printStudent(student);
// }

// let marks = [80,90,100];
// marks.forEach(mark => {
//     console.log(mark);
    
// });

// let userInput = prompt("Enter your message:");
// alert(`Hi ${userInput}`);

// let username = prompt("Enter your username : ");
// let password = prompt("Enter your password : ");

// if(username === "SreekarDev" && password==="12345678"){
//     alert(`Username is : ${username}`);
//     alert(`Password is : ${password}`);
// }
// else{
//     alert("Enter username and password ");
// }

// let arr=[10,20,30,40,50];
// console.log(arr.length)// prints the length of teh array 
// console.log(arr.unshift(33))//adds the element into the array at the beginning
// console.log(arr.at(2))// checks the position enetered and displays the element 
// console.log(arr.pop())//remove the last element 
// console.log(arr.push(10))//add element at the last 
// console.log(arr.indexOf(33))//returns the index of the element
// console.log(arr.shift())//
// console.log(arr.join(" , "))//converts the array into string with the specified spacer
// console.log(arr.reverse())//reverse the array 
// console.log(arr.sort())//sorts the array 
// console.log(arr.lastIndexOf(33))// returns - 1 if the index is not found 
// console.log(arr.includes(40))//checks if the element is in the array and returns true or false

// parseInt()
// parseFloat()
// Number()
// isNaN()
// isFinate()
// String()
// eval(exp)

// let marks=[]
// let nam=[]
// for(let i=1;i<=10;i++){
//     let ind = Number(prompt("Enter Student " + i + " marks"));
//     marks.push(ind);
// }
// for(let i=1;i<=10;i++){
//     let name=(prompt("Enter Student  " + i + " Name"));
//     nam.push(name);
// }
// for (i in marks){
//     console.log(marks[i])
// }
// for (i in nam){
//     console.log(nam[i]);
// }
// let max=marks[0];
// let min=0;
// for(i in marks){
//     if(marks[i]<max){
//         max=marks[i];
//     }
// }
// for(i in marks){
//     if(marks[i]>min){
//         min=marks[i];
//     }
// }
// console.log(max);
// console.log(min);

// for(let i=0;i<3;i++){
//     let password = prompt("Enter your password : ");
//     if(password == "12345678"){
//         alert("Password Matched");
//         break;
//     }
//     else{
//         alert("Wrong password entered try again ");
//     }
// }

// let username = prompt("Enter your username : ");
// alert("Hello "+username);


let btn = document.getElementById("btn1")
document.addEventListener("click" , ()=>{
    let val1 = Number(document.getElementById("t1").value);
    let val2 = Number(document.getElementById("t2").value);
    document.getElementById("t3").value = val1+val2;

})














