//Create-Append-Remove Elements Example in JavaScript
let aish=document.createElement("p");//setting the text content
//aish.innerHTML="Memory 1 Tera Byte";
//Create a new paragraph element
//aish.textContent="I'm Chitti";//Set the text content
aish.textContent="Memory 1 Tera Byte";//Set the inner HTML
// aish.style.color="maroon";
// aish.style.fontSize="20px";
aish.style="itallic";
document.getElementById("vasi").appendChild(aish); //Append it to the container div
setTimeout(()=>{
       let praja=document.getElementsByClassName("list")[4];
       if(praja){
              praja.remove();//Remove the first .info paragraph
       }
},3000);//after 2 seconds it gets removed.
//Create a new heading
let newHeading=document.createElement("h2");
newHeading.innerHTML="This is a new heading added by JavaScript!";
newHeading.style.color='purple';
newHeading.style.fontSize='24px';//set the font size
document.body.appendChild(newHeading);//Append the new heading to the
//Append the text after 3 seconds
setTimeout(()=>{
let newText=document.createElement("p");
newText.textContent="This is being added after 3 seconds!!!!";
newText.style.color="green";
document.body.appendChild(newText);
},3000);
//Append text to tag
let tagText=document.createElement("p");
tagText.textContent="This text is appended to the tag!!";
tagText.style.color="orange";
document.getElementById("vasi").appendChild(tagText);//Append the element
//Create a list,add items,and remove one
let myList=document.createElement("ul");
for(let i=1;i<=3;i++){
       let listitems=document.createElement("li");
       listitems.textContent="Item"+i;
       listitems.style.color="blue";//set the color of the list
       listitems.style.fontSize="18px";//Set the fontsize of the list
       myList.appendChild(li);//Append each list item to the list
       document.body.appendChild(myList);//append list
}