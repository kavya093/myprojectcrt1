//Primitive data types
let number=42;//Number
let string="Hello Worlddd!!!!";//String
let boolean=true;//Boolean
let undefinedvar;//undefined//(not assigned a value)
let nullvar=null;//Null
let symbolVar=Symbol("unique");//Symbol//(unique identifier)//(often used as object property keys)
let bigIntVar=BigInt(1234314535515215125421415125125);//used for large integers
//non-primitive data types
let objVar={key:"value"};//Object//(collection of key value pairs)
let arrayVar=[1,2,3,4,5];//Array //(ordered collection of values)
let functionVar=function(){
       return "I am a function";
       //Function //callable object that performs a specific 
}
let object2={
       //adding multiple key-value pairs
       name:"John Doe",
       age:30,
       isEmployed:true,
       hobbies:["reading","gaming","coding"],
}
//Output the data types 
console.log("Data Types in JavaScript:");
console.log("Number:",number);
console.log("String:",string);
console.log("Boolean:",boolean);
console.log("Undefined:",undefinedvar);
console.log("Null:",null);
console.log("Symbol:",symbolVar);
console.log("BigInt:",bigIntVar);
console.log("Object:",objVar);
console.log("Array:",arrayVar);
console.log("Function:",functionVar);
console.log("Object:",object2)