console.log("Hello World");
const readline = require('readline');
const r1 = readline.createInterface({
    input : process.stdin,
    output : process.stdout 
});
r1.question('what is your name ' , (answer) =>{
    console.log(`Hello , ${answer} !`);
    r1.close();
});
// let age = 18;
// const course_name = "CSE";
// var marks= 98;

// console.log("Name : ",student_name);
// console.log("Age : ",age);
// console.log("Course Name :  ",course_name);
// console.log("Marks : ",marks);

// console.log(typeof(student_name))
// console.log(typeof(age));
// console.log(typeof(course_name));
// console.log(typeof(marks));

// let base_lpa = 100000;
// console.log("HRA : ",base_lpa*0.20);
// console.log("DA : ",base_lpa*0.10);
// console.log("Gross salary : ",base_lpa+base_lpa*0.20+base_lpa*0.10);

// let units_consumed = 1000;
// console.log("Number of units consumed : ",units_consumed);
// console.log("Cost per unit : ",5);
// console.log("Electricity consumed is : ",units_consumed * 5);

// let temp_c = 245;
// console.log("Temp in farenheit : ",((temp_c)*9/5) + 32);

// let iq1= 10;
// let iq2=20;
// let iq3=30;

// let pq1=100;
// let pq2=200;
// let pq3=300;

// console.log("Price of item 1 : ",pq1," And is of " , iq1);
// console.log("Price of item 1 : ",pq2," And is of " , iq2);
// console.log("Price of item 1 : ",pq3," And is of " , iq3);

// let weight = 67;
// let height = 181;

// console.log("BMI Value is : ",(weight/(height*height)) * 10000)

// let distance = 10000;
// let vehicle_m = 24;
// let fuel_price=110;

// console.log("The fuel required for ",distance/vehicle_m);
// console.log("Fuel cost is : ",distance/vehicle_m * fuel_price);

