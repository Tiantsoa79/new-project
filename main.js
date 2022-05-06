/* let dino = document.querySelector("#dino");
let obstacle = document.querySelector("#obstacle");


 document.addEventListener("keydown", function(evt){
 if (evt.key == " "){
    dino.classList.add("jumping");
  }

}) 


document.addEventListener ("click",function(){
 dino.classList.add("jumping");
 
 setTimeout(function(){
   dino.classList.remove("jumping")
 }, 500);
 
 setInterval(function(){
   
 }, timeInMs);

}) */


let dino = document.querySelector("#dino");

let obstacle = document.querySelector("#obstacle");

/*
document.addEventListener("keydown", function(evt){

    if(evt.key== " "){
 dino.classList.add("jumping");
    } */

document.addEventListener ("click",function(){ 
 dino.classList.add("jumping");
 
    setTimeout(function () {
        dino.classList.remove("jumping")
    },500)
 
 
})

setInterval(function(){
    let dinoTop = parseInt(window.getComputedStyle(dino).getPropertyValue("bottom"));
    let obstacleLeft = parseInt(window.getComputedStyle(obstacle).getPropertyValue("left"));

    if( (dinoTop<=10) && (obstacleLeft>0) && (obstacleLeft<=50) ){
        obstacle.style.animation = "none";
        obstacle.style.display = "none";
        alert("YOU LOSE");
        location.reload();
      
    }
   },10); 