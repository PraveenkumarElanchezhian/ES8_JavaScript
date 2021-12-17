// padStart -->

let product_cost = '1234'.padStart(8,0)
console.log(product_cost);
console.log(product_cost.length);

let product_rate = '1234'.padStart(8)
console.log(product_rate);
console.log(product_rate.length);

// padEnd -->

let product_name = 'car'.padEnd(6,'s')
console.log(product_name)
console.log(product_name.length)

let products_name = 'car'.padEnd(6)
console.log(products_name)
console.log(products_name.length)

// Trailing Commas -->
//Array =>
let array = [100,90,80,,]
console.log(array);
console.log(array.length);
array.forEach(function(e){
    console.log(e)
})
//function =>
function sumofMarks(marks,){
    let sum = 0;
    marks.forEach(function(e){
        sum +=e;
    })
    return sum;
}
console.log(sumofMarks([90,80,70]));
console.log(sumofMarks([1,2,3],));

// Object -->  
// .entries(), .values() =>
const student = {
    first_Name: 'Praveen',
    last_Name: 'Kumar'
}
console.log(Object.entries(student));
console.log(Object.values(student));

//.getOwnPropertyDescriptors() =>

const students = {
    firstName : 'praveen', lastName : 'kumar',
    get result(){
        return this.firstName + ' : ' + this.lastName
    }
}
console.log(Object.getOwnPropertyDescriptors(students));

//Async and Await
console.log("program start")
function name(){
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            console.log('Display message after 2 secs')
        },2000)
    })
}

// syntax - promise.then() //

// name().then((message)=>{
//     console.log(message)
// })
// console.log("program end");

// syntax - async/await //
async function names(){
    console.log('Inside async function');
    const response = await name();
    console.log(response);
}
names();
console.log("program end");

// promise chaining with async/await
function addition(a,b){
let result = new Promise(function(resolve,reject){
    if (a > 0 && b > 0){
        resolve(a+b)
    }else {
        reject('Give proper input');
    }
})
return result;
}

async function passing_data(){
    let r1 = await addition(10,20)
    console.log("r1 : ",r1);
    let r2 = await addition(10,20)
    console.log("r2 : ",r2);
    return 'process completed'
}

passing_data().then((r)=>console.log(r));
console.log('end');