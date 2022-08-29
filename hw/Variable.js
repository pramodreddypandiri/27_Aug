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
// let Grade = (score)=>{
//     if (score>=80 && score<100){
//         return "A";
//     }
//     else if (70<=score && score<79){
//         return "B";

//     }
//     else if(60<=score && score<69){
//         return "C";
//     }
//     else if (50<=score && score<59){
//         return "D";

//     }
//     else{
//         return "F";
//     }
// };
// let score = parseInt(prompt("enter your score"));
// console.log(Grade(score));
21/35
// let month = prompt("enter month ");
// if (month.toLowerCase() === "september" ||  month.toLowerCase() === "october" || month.toLowerCase() === "november"){
//     console.log("this is Autumn");

// }
// else if (month.toLowerCase() === "december" ||  month.toLowerCase() === "january" || month.toLowerCase() === "february"){
//     console.log("this is Winter");

// }
//  else if (month.toLowerCase() === "march" ||  month.toLowerCase() === "april" || month.toLowerCase() === "may"){
//     console.log("this is spring");

// }
// else if (month.toLowerCase() === "june" ||  month.toLowerCase() === "july" || month.toLowerCase() === "august"){
//     console.log("this is summer");

// }
// else{
//     console.log("enter month correctly");
// }
22,23/35
// let noOfDays = (year,m)=>{
//     return new Date(year,m,0).getDate();

// }
// let year = parseInt(prompt("enter year : "));
// let month = parseInt(prompt("enter month : "));
// console.log(noOfDays(year,month));

//24/35-- TO DO
25/35
// const shoppingCart = ['Milk', 'Coffee', 'Tea', 'Honey'];
// let isMeatThere = false;
// let isSugarThere = false;
// for(i=0;i<shoppingCart.length;i++){
//     if (shoppingCart[i].toLowerCase()=== "meat"){
//         isMeatThere = true;
//     }
//     if (shoppingCart[i].toLowerCase() === "sugar"){
//         isSugarThere = true
//     }
//     if (shoppingCart[i]=="Tea"){
//         shoppingCart[i]="Green Tea"
//     }
// }
// if (!isMeatThere){
//     shoppingCart.unshift("Meat")
// }
// if (!isSugarThere){
//     shoppingCart.push("Suagr")
// }
// let isAllergic = prompt("are you allergic to honey : type 'yes' or 'no' ");
// if (isAllergic === 'yes'){
//     let pos = shoppingCart.indexOf("Honey");
//     shoppingCart.splice(pos,1);

// }

// console.log(shoppingCart);
//26/35 -TO DO
27/35
// const ages = [19, 22, 14, 24, 20, 25, 26, 24, 25, 24];
// let sortedAges=ages.sort();
//  console.log(sortedAges);
// console.log(Math.min(...ages));
// console.log(Math.min.apply(null,ages));
// console.log(Math.max(...ages));
// console.log(Math.max.apply(null,ages));
// let median;
// let len=sortedAges.length;
// console.log(len);
// if (len%2==0){
//     median=(sortedAges[parseInt((len-1)/2)] + sortedAges[parseInt((len)/2)])/2;
// }
// else{
//     median=sortedAges[parseInt((len-1)/2)]/2;
// }

// console.log(median);
// let totalSum =0;
// for(i=0;i<ages.length;i++){
//     totalSum=totalSum+ages[i];
// }
// let avg=totalSum/ages.length;
// console.log(avg);
// let range = Math.max.apply(null,ages)-Math.min.apply(null,ages);
// console.log(range);
// console.log(Math.abs((Math.max.apply(null,ages)-avg)) === Math.abs((Math.min.apply(null,ages)-avg)));
28/35
// let isPrime = (n)=>{
//     if (n==0 || n==1){
//         return false
//     }
//     for(j=2;j<n;j++){
//         if(n%j==0){
//             return false
//         }

//     }
//     return true 
// }
// for(i=0;i<=200;i++){
//     if(isPrime(i)){
//         console.log(i)
//     }



// }
29/35
// let evenSum=0;
// let oddSum=0;
// for(i=0;i<=100;i++){
//     if(i%2==0){
//         evenSum+=i;
//     }
//     else{
//         oddSum+=i;
//     }
// }
// console.log(evenSum)
// console.log(oddSum);
30/35
// let randomHexInt=()=>{
//     let hexChars=['0', '1', '2', '3', '4', '5',
//     '6', '7', '8', '9', 'A', 'B',
//     'C', 'D', 'E', 'F'];
//     let currLen=parseInt(Math.random()*10);
//     let hexInt=""
//     for(i=0;i<currLen;i++){
//         hexInt+=hexChars[Math.floor(Math.random()*16)];

//     }
//     console.log(hexInt);
// }
// randomHexInt();
35/35
// we can use two nested loops to acheive this question,but it can be costly
//usign hash set
// let s=new Set();
// arr=[1,2,34,5,6,7,89,10,2];
// for (const x of arr) {
//     s.add(x)
    
// }
// console.log(arr.length === s.size);