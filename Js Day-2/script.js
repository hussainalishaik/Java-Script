
// Array
var data =[10, 34.242, "hello", true]

for(let index =0; index < data.length; index++){
    console.log(data[index]);
}

data.push(40)
for(let index =0; index < data.length; index++){
    console.log(data[index]);
}
data.pop()
for(let index =0; index < data.length; index++){
    console.log(data[index]);
}
data.shift()
for(let index =0; index < data.length; index++){
    console.log(data[index]);
}
data.unshift(1)
for(let index =0; index < data.length; index++){
    console.log(data[index]);
}

// data.forEach()
// data.map()
// data.filter()
// data.reduce()
// data.some()
// data.every()

//object
var data1 = [10,20,30]
var data2 = [40,50,60]
var newData = [100, ...data1, 200, ...data2]

console.log(newData);

var myObj={
    id: 1,
    name: "riya",
    age: 21
}

console.log(myObj.name);

// json
var userData =[
    {
    id: 1,
    name: "riya",
    age: 21,
    techStack: ["deveops", "cloud", "full stack"]
    },
    {
        id: 1,
        name: "laya",
        age: 22,
        techStack: ["html"]
    }
]

console.log(userData[0].name);

// function

add(3 , 5)

function add(a, b){
     console.log(a + b);
}
add(3 , 5)     
function add(a,b){
    console.log(a-b);
}

add(3, 5)

//function declaration

function add(a,b){
    console.log(a-b);
}


//function expression && anonymous

const myFun = function (a,b) {
    console.log(a + b);
}   

//arrow function

const myFun1 = (a,b) => {
    return a + b
}

//bullet functions  
const myFun2 = (a,b) => a + b
add(3,5)