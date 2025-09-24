// why what when 
// 

// funcion declaration

function dance(){
//  function statements
}

// variable ak name hi function ka name h
let fnc = function (){
// function expression
  
}


// arrw function
let funct = ()=> {
    console.log("hi, ujawal here")
};

fnc();

// parameters
function dance(v1){
    console.log(`${v1} nacch rha h`)
}
dance("ghoda");
dance("ghadda");
dance("raja");

// default , rest and spread 

// default
function add(v1 = 0 ,v2 = 0){

console.log(v1+v2);

}

add();


function rest(a,b,c,...valu){
    console.log(a,b,c,valu);
}
rest(1,23,4,542,26,23,5,2,52)


// return values and early return 
// jaha se aya h vahi daal dunga

function abcd(){
    return 69;
}


let a = abcd();
console.log(a);

// first classs functions 
function fcf(valop){
  valop();
//   console.log(s);
}

fcf(function (){
  console.log("hello"); 
});


// set time out
setTimeout(() => {
    console.log("Its Hammer Time")
},3000 );

// higher order functions 
function fnc1(val){
// fnc1 is a higher order function
    // val();
}

fnc1(function(){

})
function fnc2(){
// fnc1 is a higher order function
    return function(){

    }
} 

fnc1()

// 
// Clouser 
function fnc4(){
    let a = 34;
    return function(){
        console.log(a);
    }
}

fnc4();

// lexigal scoping 


// IIFI (instant call kar do ess fucntion ko)
(function(){

})();

// js em fucntion ko phele call karke use kar sakte hai
// works in statement and the arrow but not in expression 

// 
// Practice
// 
// let func69 = (a1,b2)=> {
//   return a1*b2;
// };

// let hello = func69(4,5);
// console.log(hello)


//  equivalent to the above block of the code
let func69 = (a, b) => a * b;


function a23(a,b,c,...val){
    console.log(a,b,c,val);
}

a23(3.42323,234,324,5664,234,23,4,363,46667,78)

// ek tarika 

// function scores(...score){
   
//     return score;
// }
// let mark = scores(23,324,5,7,2346,7);
// console.log(mark);

// dusra tarika 
function scores(...score){
    let total = 0;
    score.forEach(function (val2){
       total = total+val2;

    });
    return total;
//    console.log(total);
    
}


console.log(scores(23,324,5,7,2346,7));



let a28 = function(val){
  return "ITS LOVELY WEATHERR..";
}
console.log(a28());




u1(function () {

  return "2" + 69;
});

function u1(val24){
    
 console.log(val24())
}

//  which is the higher order function 
[1,23,4].map(function(x){
    return x*2;
    //  map is HOF
});

// /////////////////////////
function outer(){
    let count = 0;
    return function(){
        count++;
        console.log(count);

    };
}

const counter = outer();
// counter();
// counter();
// counter();
// counter();
// counter();
// counter();
// counter();
// counter();

/////////////////////////////////
(function init(){
    console.log("Initialized");
})();



// do the ss thing ki kaise krte


greet();
function greet(){
    console.log("HI!");
}






