const prompt = require("prompt-sync")({sigint:true});
//1/35;
// let nam = "pramod";// string data type
// console.log(typeof nam);
// let isMember=true; //boolean type
// console.log(typeof isMember);
// let count=32;
// console.log(typeof count)
// let flowers;
// console.log(typeof flowers)
//2/35
// let firstName="pramod reddy";
// let lastName="pandiri";
// const mStatus="un married";
// const country="India";
// let age="22";
// console.log(`Hello, my name is ${firstName} ${lastName} and I am ${mStatus} lives in ${country}, I was born ${age} years ago`);
//3/35
// let city="Hyderabad";
// console.log(city.toUpperCase());
//4/35
// let sentence="JavaScript is a Scripting langauage, Script is used for web development";
// let target="Script";
// console.log(sentence.includes(target));
///5/35
// let sentence="JavaScript is a Scripting langauage, Script is used for web development";
// const sentenceArray=sentence.split(" ");
// console.log(sentenceArray);
//6/35
// let companies='Facebook, Google, Microsoft, Apple, IBM, Oracle, Amazon';
// const compArr=companies.split(",");
// console.log(compArr);
//7/35
// let alpha=[1,2,3,4,5,1,4,6,2];
// console.log(alpha.lastIndexOf(2));
//8/35
// let sen='You cannot end a sentence with because because because is a conjunction';
// console.log(sen.search("because"));
//9/35
// let greeting="  Good Morning  ";
// console.log(greeting);
// console.log(greeting.trim());
//10/35
// console.log("x" === "X");
// console.log("y" === "y");

// console.log(2 === 2);
// console.log(2 === "2");
// console.log(true == 1);
// console.log(false == "false");

//11/35
// console.log(4 > 3);
// console.log(4 >= 3);
// console.log(4 < 3);
// console.log(4 <= 3);
// console.log(4 == 4);
// console.log(4 === 4);
// console.log(4 != 4);
// console.log(4 !== 4);
// console.log(4 != '4');
// console.log(4 == '4');
// console.log(4 === '4');
// console.log("python".length === "jargon".length);
// console.log();
//12/35
// let present = new Date();
// console.log(present.getFullYear());
// console.log(present.getMonth());
// console.log(present.getDate());
// console.log(present.getDay());
// console.log(present.getHours());
// console.log(present.getMinutes());


// let past = new Date(1970,1,1);
// let elapsed = present -past;
// console.log(elapsed);
13/35
// let area = (b,h)=>{
//     return 0.5 * b * h; 
// }
// const prompt = require("prompt-sync")({sigint:true});
// let b=parseInt(prompt("enter base of the triangle: "));
// let h=parseInt(prompt("enter height of the triangle: "));
// console.log(area(b,h));
14/35
// let slope =(x1,x2,y1,y2)=>{
//     return (y2-y1)/(x2-x1);
// }
// const prompt = require("prompt-sync")({sigint:true});
// let x1 = parseInt(prompt("enter x1 value "));
// let x2 = parseInt(prompt("enter x2 value "));
// let y1 = parseInt(prompt("enter y1 value "));
// let y2 = parseInt(prompt("enter y2 value "));
// console.log(slope(x1,x2,y1,y2));
15/35
// const y= 2*x-2
// let x_intercept= 1;
// let y_intercept=-2;
// const slope = y_intercept/x_intercept;
// console.log(slope); 
16/35
// let circleArea = (r)=>{
//     return Math.PI * r * r;
// }
// let r=parseInt(prompt("enter radius : "));
// console.log(circleArea(r));
17/35
// let present = new Date();
// const yyyy = present.getFullYear();
// const mm = present.getMonth();
// const dd = present.getDate();
// const hh = present.getHours();
// const m = present.getMinutes();
// console.log(`${yyyy}-${mm}-${dd} ${hh}:${m}`);
// console.log(`${dd}-${mm}-${yyyy} ${hh}:${m}`);
// console.log(`${dd}/${mm}/${yyyy} ${hh}:${m}`);
18/35
// let age = parseInt(prompt("enter your age : "));
// if (age>=18){
//     console.log("you are old enough to drive a vehicle");

// }
// else{
//     console.log(`you have to wait for ${18-age} more years to drive a vehicle`);

// };
19/35
// let number = parseInt(prompt("enter a number : "));
// if (number%2 === 0){
//     console.log(`given number is even`);
// }
// else{
//     console.log(`given number is odd`);
// };
20/35
