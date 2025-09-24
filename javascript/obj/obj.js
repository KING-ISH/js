

 let self = {
      name: "UJAWAL",
      age:20,
      email:"aggarwalujawal6242@gmail.com",
 };

let aa= "name";
// self.aa not equal to self.name but
// self[aa] is 


// nesting and deep accesssss
const user = {
    name: "UJAWAL AGGARWAL",
    address: {
        city: "BHIWANI",
        pin: 127021,
        locations:{
             lat: 28.7975,
             long: 76.1322,
        },
    },
};

// console.log(user.address.location.lat)
console.log(user.address.locations.lat)
// deconstructing annnn object
// imp to keep the name same
let {lat,long} = user.address.locations;
let {lat : latitudde} = user.address.locations;

// loop in the objects
for(let key in self){
    // console.log(key);
    console.log(key,self[key]);
}
// gives an array of the keys of the object 
// Object.keys(self)

// Object.entries(self);  arrays ka array

let obj = {...user}
let obj2 = Object.assign({price: Infinity},obj);
user.name = "Tanisha RAWAT"
obj.address.city = "DELHI"

//  deep cloning

// bascially if we had passed a 
// nested object then the key value pair
// of the the nested things would give refefrncce instead
// of copying

JSON.stringify(obj)  // converts to string
JSON.parse // converts back to the obj


// isme copy hoke ayega
let obj3 = JSON.parse(JSON.stringify(user))
obj3.address.city = "UTTRAKHAND";

// optioonal chaning and computer properties
user?.address?.city;
user?.addresss?.city;
// hua to mil jayega warna nhi 
// to basicallly if esmee agar change kiya obj to error throw nhi
//hoga atleast


let role = "admin";
 let self2 = {
      name: "UJAWAL",
      age:20,
      email:"aggarwalujawal6242@gmail.com",
    [role]: "ISHU",
 };


