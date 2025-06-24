//1.Arithmetic Operators
//Arithmetic operators are used to perform mathematical operators
let a=10;
let b=5;
console.log("Arithmetic Operators:");
console.log("a=",a,",b=",b);//Output the values of 
let sum=a+b;
let difference=a-b;
let product=a*b;
let quotient=a/b;
let remainder=a%b;
let exponent=a**b;
console.log("sum:",sum);
console.log("diff:",difference);
console.log("product:",product);
console.log("quotient:",quotient);
console.log("remainder:",remainder);
console.log("exponent:",exponent);

//2.Assignment operators
let x=10;
x+=1;
x-=1;
x*=1;
x/=1;
x%=1;
x**=1;
console.log("Assignment operators:");
console.log(" x After operators",x);
console.log("\n")//new line

//Comparison operators                    
//Comparison operators are used to compare two values and 
let isEqual=(a==b);//Equal to(value only)
let isStrictEqual=(a==b);//Strict equal to (value and to)
let isNotEqual=(a!=b);//Not equal to(value only)
let isStrictNotEqual=(a!==b);//Strict not equal to
let isGreaterThan=(a>b);
let isLessThan=(a<b);
let isLessThanorEqual=(a<=b);
let isGreaterThanorEqual=(a>=b);
console.log("Comparison Operators");
console.log("Is Equal:",isEqual)
console.log("IsStrictEqual:",isStrictEqual);
console.log("IsNotEqual:",isNotEqual);
console.log("IsStrictNotEqual:",isStrictNotEqual);
console.log("IsGreaterThan:",isGreaterThan);
console.log("IsLessThan:",isLessThan);
console.log("IsLessThanorEqual:",isLessThanorEqual)
console.log("IsGreaterThanorEqual:",isGreaterThanorEqual)

//Logical Operators                  
let andOperator=(a>0 && b>0);//Logical AND
let orOperator=(a>0 || b>0);//Logical OR
let notOperator=!(a<b);//Logical Not
console.log("Logical Operators:");
console.log("AND Operator:",andOperator);
console.log("OR Operator:",orOperator);
console.log("NOT Operator:",notOperator);
console.log("\n");

//Bitwise Operators
//Bitwise operators perform operations on binary representation
let bitwiseAnd=a&b;
let bitwiseOr=a|b;
let bitwiseXor=a^b;
let bitwiseNot=~a;
let leftshift=a<<1;
let rightshift=a>>1;
console.log("Bitwise Operations:");
console.log("Bitwise AND:",bitwiseAnd);
console.log("Bitwise OR:",bitwiseOr);
console.log("Bitwise NOT:",bitwiseNot);
console.log("Left Shift:",leftshift);
console.log("Right Shift:",rightshift);
console.log("\n");

//Ternary Operators
//The ternary operator is a shorthand for the 'if....else' statement.It takes three operands: a condition,a value if true,and a value if false.
let age=18;
let eligibility=(age>=18)?"Eligible to vote":"Not eligible to vote";
console.log("Ternary Operator:");
console.log("Eligibility:",eligibility);
console.log("\n");//adds new line
//7.Typeof Operator
//The 'typeof' operator is used to determine the type of a variable or value.
let variableType=typeof a;//Get the type of variable 'a'
console.log("Typeof Operator:");
console.log("Type of  variable 'a':",variableType);
console.log("\n");