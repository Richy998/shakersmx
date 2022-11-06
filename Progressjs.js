let gamepanel = document.getElementById("game");
let rock = document.getElementById("Rock");
let scissors = document.getElementById("scissors");
let paper =document.getElementById("paper");
let rselect= false;
let sselect =false;
let pselect=false;
let r2select, s2select, p2select;
let rock1 = document.getElementById("Rock1");
let scissors1 = document.getElementById("scissors1");
let paper1 =document.getElementById("paper1");




rock.addEventListener("click", function(){

   rselect=true;
   sselect=false;
   pselect=false;
   console.log("rock slected p1")

})




scissors.addEventListener("click", function(){
    rselect=false;
    sselect=true;
    pselect=false;
    console.log("scissors slected p1")
})

paper.addEventListener("click", function(){
    rselect=false;
    sselect=false;
    pselect=true;
    console.log("paper slected p1")

})
rock1.addEventListener("click", function(){

    r2select=true;
    s2select=false;
    p2select=false;
    console.log("rock slected p2")
    evaluate();
 
 })
 
 
 
 
 scissors1.addEventListener("click", function(){
     r2select=false;
     s2select=true;
     p2select=false;
     console.log("scissors slected p2")
     evaluate();

 })
 
 paper1.addEventListener("click", function(){
     r2select=false;
     s2select=false;
     p2select=true;
     console.log("paper slected p2")
     evaluate();

 })
 
function evaluate(){
    
   if (rselect == true && r2select==true){
    alert("tied");
       }
        else if (rselect==true && s2select==true){
        alert("rock wins");
       }
       else if (rselect==true && p2select==true){
        alert("paper wins");
       }
       else if (sselect == true && r2select==true){
        alert("rock p2 wins");
           }
            else if (sselect==true && s2select==true){
            alert(" tied");
           }
           else if (sselect==true && p2select==true){
            alert("scissors p1 wins");
           }
           else if (pselect == true && r2select==true){
            alert("paper p1 wins");
               }
                else if (pselect==true && s2select==true){
                alert(" scissors p2 wins");
               }
               else if (pselect==true && p2select==true){
                alert("tied");
               }
          
      
     
}