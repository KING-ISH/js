// we can have any type of data in an array 
//  kind of the dynamic arary 


let arr = [1,2,4,5,7,8,"nudfih",987];
// let arr01 = new Array;
// Methodss
console.log(arr);
arr.pop()// remove 5

arr.push(56);// 56 add at last
arr.shift();// shift pop from start
arr.unshift("Ujawal");//add at the start
arr.splice(2,3);//for ehich index to start remioving and kitne
let arr01 = arr.slice(0,4);//end se ek kam hota h
//  slice doesnot change the main element
console.log(arr01);

arr.reverse();
console.log(arr)

let sort = [1,34,5562,312,76,342,45,14,56,33]
sort.sort(function(a,b){
    return a-b; // ascending order m sort
});
console.log(sort);
sort.sort(function(a,b){
    return b-a; // descending order m sort
});
console.log(sort);


// Map, Filter , Reduce
sort.forEach(function(val){
    console.log(val);
    // yani humme har ek member p same operation
    //  krne ho to hum kar sakte h
})

// M.A.P
// map dekhte hi sath man m ek blank aray bna liya karo

let arr02 = sort.map(function(val){
    // return val*2;
    if(val%3 === 0) return val;
})

console.log("-------------------------------------")
console.log(arr02)

// Filter 
//  Filter also makes a new array out of old 
// just we return true or false

let arr03 = sort.filter(function(val){
    if (val%3 === 0) return val;
    // return true ya false
})
console.log(arr03)


// REDUCEEE
// ek array se ek single value banana
let arr04= [1,2,3,4,5,6,7,8,9,10];
let reduce = arr04.reduce(function(accumulator,val){
   return accumulator+val;
//    run krte time bas accumlator apni value yaad rakh rha

},0);//initial value of accumulator
console.log(reduce);


// FIND
let arr05 = arr04.find(function(val){
    return val === 1;
})


//SOME
let arr06 = arr04.some(function(val){
    return val>5;
    //ek adha bhi hoga to y true return kar dega
})
console.log(arr06);

//Every
let arr07 = arr04.every(function(val){
    return val>5;
    //sarre pass krne chaiye
})
console.log(arr07);

// 
let arr08 = [1,2,3,4,5]
let arr09 = [...arr08];//copyies the elmeent
let arr10 = arr08;
let [a,b,,d] = arr08;
arr08[0]= 69;
// ... ko array m spread op khete hhhhh


// Practice

// 
let fruit= ["Apple","Banana","Grapes"];
fruit.push("Mango");
fruit.unshift("Pineapple");


fruit.forEach(function(val){
    console.log(val);
})

fruit.splice(1,0,"RED","Blue")
console.log(fruit);


let names = ["Zara","Arjun","Mira","Bhavya"];

console.log(names);
names.sort().reverse();
console.log(names);
// names.sort(function(a,b){
//     return a-b;
// });

