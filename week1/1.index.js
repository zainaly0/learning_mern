// let fname = prompt("enter your first name");
// let lname = prompt("enter your last name");
// console.log('good morning ', fname+ lname);
// let gender = prompt("enter your gender");
// if(gender = 'male'){
//     console.log('male good morning ', fname+ lname);
// }else{
//     console.log('female good morning ', fname+ lname);
// }



// let count = 0;
// for(a = 0; a<1000; a++){
//     count = count+a;
// }
// console.log(count)



/*
let name = "zaid";
let age = 23;
let isMarried = true;

console.log('this person name is: ' + name+  " and their age " + age)
console.log(name + (isMarried? " is married ": " not married"));

if(isMarried){
    console.log(name + " is married")
}else{
    console.log(name + " is not married")
}
*/

/**
let ans = 0;
console.log(ans)
ans = ans +1;
console.log(ans)
ans = ans +2;
console.log(ans)
ans = ans +3;
console.log(ans)
ans = ans +4;
console.log(ans)
ans = ans +5;
console.log(ans)
*/


/**

// array
const age= [21, 22, 23, 24, 25, 26]
const numberofages = age.length
for(let a = 0; a<numberofages; a++){
    if(age[a] % 2 == 0){
        console.log(age[a] + " even age")
    }else{
        console.log(age[a] + " odd age")
    }
}
*/


/**
//objects in js

// const personArray = ["syed", "zain", "anam"]
// const genderArray = ["male", "male", "female"]

// for(let a = 0; a<personArray.length; a++){
//     if(genderArray[a] == "male"){
//         console.log(personArray[a])
//     }
// }


// const obj = {
//     firstname: "zaid",
//     age: 23
// }

// array of object

const alluser = [
    {
        firstname: "syed",
        age: 23,
        gender: "male"
    },
    {
        firstname: "zain",
        gender: "male",
        metadata: {
            age: 22,
            address: ""
        }
    }
]

for (let a = 0; a < alluser.length; a++) {
    if (alluser[a]['firstname'] == "zain") {
        let zainage = alluser[a]['metadata']['address']
        console.log(zainage)
    }
}

*/


function sum(a, b){
    return a+ b
}

const value = sum(7, 8)
console.log(value)