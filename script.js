// let a =12;
// let a=13;
// let dulha = "rishi";
// let dulhan = "shabnam";
// var a =1

// grade -calculator-logic
// function getgrade(score){
//     if(score >=90 && score <=100){
//         return "A";
//     }
//    else if(score >=80 && score <= 89){
//         return"B";
//     }
//     else if(score >=70 && score <= 79){
//         return"C";
//     }
//     else if(score >=60 && score <= 69){
//         return"D";
//     }
//    else if(score >=33 && score <= 59){
//         return"E";
//     }
//     else if(score >=0 && score <=32){
//         return "FAIL"
//     }
//     else{
//         return "invalid input";
//     }
// }
// console.log(getgrade(1007));

// rock-paper-scissor-logic

// function rps(user , computer){
//     if(user === computer) return "draw";

//     if(user==="rock" && computer === "scissor") return "user";
//     if(user==="scissor" && computer === "paper") return "user";
//     if(user==="paper" && computer === "rock") return "user";

//     return "computer";
// }
// console.log(rps("rock" , "rock"));


// let i = 10;
// while(i>=1){
//     console.log(i);
//     i--;
// }
// for(let i =1;i<=20;i++){
//     if(i%2==0){
//     console.log(i);
// }
// }

// let i =1;
// while(i<=15){
//     if(i%2 === 1){
//         console.log(i);
//     }
//         i++; 
// }
// for(let i = 1;i<=50;i++){
//     console.log(`5*${i} = ${5*i}`);
// }
// let sum = 0;
// for(let i =1;i<=100;i++){
// sum += i;
// }
// console.log(sum);
// for(let i=1;i<=50;i++){
//     if(i%3===0){
//         console.log(i);
//     }
// }

// let val = prompt("give a number");
// for(let i=1;i<=val;i++){
//     if(i%2 === 0){
//         console.log(`${i} is even`);
//     }
//     else{
//         console.log(`${i} is odd`);
//     }
// }

// let cnt = 0;
// for(let i=1;i<=100;i++){
//     if(i%3 === 0 && i%5 === 0){
//         cnt += 1;
//     }
// }
//  console.log(cnt);

// for(let i=1;i<=100;i++){
//     console.log(i);
//     if(i%7===0){
//         break;
//     }  
// }

// for(let i =1;i<=20;i++){
//     if(i%3===0){
//         continue;
//     }
//     console.log(i);
// }

// let cnt = 0;
// for(let i=1;i<=100;i++){
// if(i%2===1){
//     cnt += 1;
//     console.log(i);
// }
// if (cnt === 5) break;
// }

// function abcd(val){
//     val();
// }
// abcd(function(){
//     console.log("rishi baweja");
// });

// let fruit = ["apple" , "muhmelelokela" , "dragonfruit"];
// fruit.push("angur");
// fruit.unshift("strawberry"); 

// let h1 = document.querySelector("h1");
// h1.textContent="oo god";

// let img = document.querySelector("img");
// img.setAttribute("src" , "https://images.unsplash.com/photo-1752662742861-fb76c71576d7?q=80&w=1332&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D");

// let p = document.querySelector("p");
// function dblclick() {
//     p.style.color="red";
// }
// p.addEventListener("dblclick" , dblclick);
// p.removeEventListener("dblclick" , dblclick);

// let inp = document.querySelector("input");
// inp.addEventListener("input" , function (dets){
//     if(dets.data !== null){
//     console.log(dets.data);
//     }
// });

// let sel = document.querySelector("select");
// let device = document.querySelector("#Device");

// sel.addEventListener("change" , function(dets){
//    // console.log(dets.target.value);
//    device.textContent = `${dets.target.value} Device Selected`;
// })

// let h1 = document.querySelector("h1");
// window.addEventListener("keydown" , function (dets) {
//    if(dets.key === " "){
//       h1.textContent = "SPC";
//    }
// else {
//    h1.textContent = dets.key;
// }
// });

let btn = document.querySelector("#btn");
let fileinp = document.querySelector("#fileinp");
 btn.addEventListener("click" , function(){
    fileinp.click();
 });

 fileinp.addEventListener("change" , function(dets){
   // console.log(dets.target.files[0].name);
  // btn.textContent= dets.target?.files[0].name;
  const file = dets.target.files[0];
  if(file){
    btn.textContent = file.name;
  }
});