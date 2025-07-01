// console.log("Hello World!!!!");//This is a simple JavaScript
// function sayHello(){
//        console.log("Hello from sayHello function");
// }
// sayHello();
// console.log("This is a simple JavaScript program");

// console.log("one");
// console.log("two");
// setTimeout(()=>{
//        console.log("Hello World");
// },5000);//1000 ms -> 1 sec
// console.log("Three");
// console.log("Four");

// console.log("one");
// console.log("two");
// const hello=()=>{
//        console.log("Hello World!!!!");
// }
// setTimeout(hello,5000);
// console.log("Three");
// console.log("Four");

//a callback is a function that is passed as an argument to another function and is executed after the completion of that function.
//callback example
// function sum(a,b){
//        console.log(a+b);
// }
//sum(5,10);//15
// function calculator(a,b,ds){
//        ds(a,b);
// }
// // calculator(5,10,sum);

// calculator(5,10,(a,b)=>{
//        console.log(a+b);
// })

//nested for loops example
// for(let i=0;i<5;i++){
//        let str="";
//        for (let j=0;j<5;j++){
//               str+=j;
//        }
//        console.log(i,str);
// }

// function getData(dataid){
//        setTimeout(() => {
//               console.log("Fetching data for id:",dataid);
//        },4000);
// }
// getData(1);
// getData(2);
// getData(3);

// function getData(dataid,getnextdata){
//        setTimeout(() =>{
//               console.log("Fetching data for id:",dataid);
//               if(getnextdata){
//                      getnextdata();
//               }
//        },2000);
// }
//callbackhell nested call back stacked 
//to over come this we will use promises
//promise for eventually completion of an operation
//promise is an object that represents the eventual completion or failure of an asynchronous operation and its resulting value.It allows you to write asynchronous code in a more manageable way,avoiding callback hell.

// getData(1,()=>{
//        console.log("getting data 2.......")
//        getData(2,()=>{
//               console.log("getting data 3.......")
//               getData(3);
//        });
// });

//promise syntax 
//const myPromise=new Promise 
//((resolve,reject)=>{..})
//resolve is called when the asynchronous operation is successful 
//reject is called when the asynchronous operation fails

// const myPromise=new Promise((resolve,reject)=>{
//        //Asynchronous operation
//        setTimeout(()=>{
//               const success=false;//Simulate success or failure
//               if(success){
//                      resolve("Data fetched successfully");
//               }else{
//                      reject("Error fetching data");
//               }
//        },2000);
// });
// myPromise
// .then((data)=>{
//        console.log("Promise resolved with data:",data);
// })
// .catch((error)=>{
//        console.error("Promise rejected with error:",error);
// });

//Using the Promise 
// The then() method is called when the promise is resolved successfully
// The catch() method is called when the promise is rejected with and error
// The finally() method is called when the promise is settled,regardless of whether it was resolved or rejected

// let promise=new Promise((resolve,reject)=>{
//        console.log("i am a promise");
//        if(1<0){
//               resolve(123);
//        }
//        reject("Something went wrong");
// });

//promise statuses:1.pending,2.fulfilled,3.rejected


// function getData(dataid){
//        return new Promise((resolve,reject)=>{
//               setTimeout(()=>{
//                      console.log("Fetching data for id:",dataid);
//                      resolve("success");
//               },2000);//Use 2 sec for quicker testing
//        });
// };
// let result=getData(123);
// result;

