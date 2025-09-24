//   browser m page p koi bhi harkat karo page p event raise ho jayega
//  event listener ka matlab h ki apne ki action ka reaction diya

// let h1 = document.querySelector("h1");
// h1.addEventListener("click",function(){
//     h1.style.color = "red"
// })

// let para = document.querySelector("p");
// para.addEventListener("click",function(){
//      para.style.color = "green"
// })

// function  dblclick(){
//      para.style.color = "yellow"
//      para.style.fontSize = "23px"
// }
// para.addEventListener("dblclick",dblclick)

let inp = document.getElementById("inp")
// let input = document.querySelector("input")
// input.addEventListener("input",function(evt){
//     console.log("typed");
//     console.log(evt.data);
// })

inp.addEventListener("input",function(det){
    console.log(det.data);
})

// para.removeEventListener("dblclick",dblclick );