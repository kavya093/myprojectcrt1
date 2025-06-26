//DOM  in javascript
// document.title="DOM in JavaScript";
// document.getElementById("mrcet").innerHTML="Hello, World!!!!!!!!!!";
// document.getElementById("mr").style.color="pink";
// document.getElementById("mr").style.fontSize="50px";
// document.getElementById("con").innerHTML="Hello, World!!!!!!!!!!";
// document.getElementById("container").style.color[="pink";
// document.getElementById("container").style.fontSize="50px";
Document.title="DOM in JavaScript";
document.body.style.backgroundColor="lightgreen";
document.getElementsByClassName("con")[0].style.color="red";
// document.getElementById("mrcet").innerHTML="Hello,World!";
// document.getElementById("mr").innerHTML="Welcome to DOM manipulation";
// document.getElementByTagName("h1")[0].style.color="blue";
a=document.getElementsByClassName("con");
a[0].style.color="Blue";
a[1].style.color="Green";
a[2].style.color="Yellow";
       
// the query Selector applies all the attributes to the class name where it encountered first
document.querySelector(".ds").style.color="Red";
//  Style elements using querySelectorAll 
let depts=document.querySelectorAll(".dsa");
//selects all elements with class dsa.
depts[0].style.color="Red";
depts[1].style.color="Violet";
depts[2].style.color="Blue";
depts[3].style.color="Green";
//Function to toggle background color
// function changeBackground(){
//        document.body.style.backgroundColor="yellow";
//        alert("Background color changed to yellow");
// }{
// function changeBackground(){
//        if(document.body.style.backgroundColor==="teal"){//=== means strictly equal
//               document.body.style.backgroundColor="yellow";
//        }else{
//               document.body.style.backgroundColor="teal";
//        }
// }

// Array of colors to cycle through
// const colors = ["yellow", "red", "blue", "green", "purple", "orange"];
// let currentIndex = 0;

// function changeBackground() {
//     // Set the background to the current color
//     document.body.style.backgroundColor = colors[currentIndex];
    
//     // Move to the next color, looping back to 0 if at end of array
//     currentIndex = (currentIndex + 1) % colors.length;
// }

//change of background color from red to blue using ternary operator
function changeBackground(){
       document.body.style.backgroundColor=
              document.body.style.backgroundColor==="fuchsia"?"aqua":"fuchsia";
              //alert("Background color changed!!!!");
}
function changetext(){
       document.getElementById("clg").innerHTML="MRCET,MRUH";
       document.getElementById("clg").style.backgroundColor="coral";
       document.getElementById("clg").style.color="white";
       document.getElementById("clg").style.fontSize="30px";
       document.getElementById("clg").style.textAlign="center";
}


// document.getElementsByClassName("container")[0].style.color="red";
// document.title = "DOM in JavaScript";
// document.body.style.backgroundColor = "lightgreen";
// document.getElementsByClassName("con")[0].style.color = "red";
// document.getElementById("mrcet").innerHTML = "Hello, World!";
// document.getElementById("mr").innerHTML = "Welcome to DOM manipulation";
// document.getElementsByTagName("h1")[1].style.color = "blue";


