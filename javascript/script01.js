// variable 
// var let const
// a = 12;
// var a = 12;  // declaration and initilisation 
// var a=34;
// // var a ;
// // a=13;
// // const a;

// // const b = 15;// declaration and initilisation 

// // b= 45;

// let b = 34;
// // b = 56;

// const dulha = "lap"
// const dulhan = "labii"


// scope

// Temporal Dead Zone 
//  console.log(a)

// let a  = 24;
// var a  = 24//var doesnot had a tdz 

// Hoisting impact per type 
//  var a =112; == var a = undefined;  ,a=112;

// var -> hoist -> undefined
// let -> hoist -> erroe
// const -> hoist -> erroe


let a = 23;
{
    let a = 45;
    console.log("INSIDE : ",a);
}
console.log("OUTSIDE : ",a);

if(false){
    let b = 23;
    var c= 45;

}
console.log(c)
console.log(b)