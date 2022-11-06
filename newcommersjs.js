var currentYpos = window.pageYOffset || document.documentElement.scrollTop;
var formopen =false;
// importance vid
let importancevid = document.createElement("video");
importancevid.src="videos/tt3.mp4";
importancevid.autoplay = false;
importancevid.controls = true;
importancevid.muted = false;
importancevid.height = 700; 
importancevid.width = 900;

function resize(){
  if(formopen ===true){
    console.log("form_opened")
  
  }else if(formopen ===false){
    let left_form = document.getElementById("newUser");
    left_form.style.visibility = "hidden";
    left_form.style.height = "0px";
    left_form.style.display = "none";
  }
}

function openforma(){
  let formato = document.getElementById("newUser");

    formato.style.opacity="1";
    formato.style.height="1500px";
    formato.scrollIntoView();
    var fn=true;
    formopen = fn;
    resize();
return formopen;

} 

submitbtn = document.getElementById("button");
submitbtn.addEventListener("click", function(){
  $("#PI").css("background", "green");
  console.log("working")
});


  

function alergias(){
    let alergias = document.getElementById("alergias");
    let alergiasinput = document.createElement("input");
    alergiasinput.type = "text";
    alergiasinput.id = "alergiasinput";
    alergiasinput.placeholder = "Alergic@ a:";
    alergias.append(alergiasinput);
   let alergia_description = alergiasinput.value;
   return alergia_description;
    
    }
    function ejercicio(){
      let training_answer = document.querySelector('input[name="training?"]:checked').value;
if(training_answer === "Si"){
        let training = document.getElementById("ejercicio");
        training.style.opacity = "1";
        training.style.height = "400px";

    }else{
      let training = document.getElementById("ejercicio");
      training.style.opacity = "0";
      training.style.height = "0px";
    }
  }
function refresh(btn){

let id = btn.id;
let valueof =  document.getElementById(id);

if(valueof.value < 2 && valueof.value > 0){
   
valueof.nextSibling.innerText = valueof.value;
}
else if (valueof.value > 1 ){
    valueof.nextSibling.innerText = valueof.value 

}
else if(valueof.value < 1){
    valueof.nextSibling.innerText = valueof.value 

}
return valueof.value;
}
function fumada(){
   let fumadera = document.getElementById("fumar");
   fumadera.style.opacity = "1";
   fumadera.style.height = "100px";
   
}


  window.onscroll = function(){
    var currentpos = window.pageYOffset || document.documentElement.scrollTop;
   
    if(currentpos >1900 &&  formopen===false ){
        let impvid = document.getElementById("impvid");
        impvid.append(importancevid);
        importancevid.play();

    }
    else if(currentpos > 3100 && formopen==true ){
        let impvid = document.getElementById("impvid");
        impvid.append(importancevid);
        importancevid.play();
    }

    else{
        importancevid.pause();
    }
  }
  function tomada(){
    let tipodetrago = document.getElementById("tomada");
    tipodetrago.style.opacity ="1";
  }

   function getinfo( user =Array.from(document.querySelectorAll("#PI input")).reduce((acc, input)=>({...acc,[input.id]: input.value}),{})){
  
    if(user.fname ==="" || user.lname ==="" || user.phone ==="" || user.email ==="" || user.password ==="" || user.password2 ===""  ){
        user={};
        console.log(user)
        console.log("try again")
      }
    
  else if(user.fname !=="" && user.lname !=="" && user.phone !=="" && user.email !=="" && user.password !=="" && user.password2 !=="" ){
    if(user.password !== user.password2){
        user={}; console.log(user);
        console.log("passwords dont match");
    }
   else{
    console.log("Objeto creado")
    user =Array.from(document.querySelectorAll("#PI input")).reduce((acc, input)=>({...acc,[input.id]: input.value}),{});
    console.log(user);}
  }
  let alergiasresponse = document.querySelector('input[name="alergies"]:checked').value;
  if(alergiasresponse === "Si"){
  alergia_description = document.getElementById("alergiasinput").value;
 console.log( alergia_description)
 user.alergiasresponse = "Si";
 user.alergias= alergia_description;
 console.log(user);
  }
  let training_answer = document.querySelector('input[name="training?"]:checked').value;

  if(training_answer === "Si"){

    let training_type = document.querySelector('input[name="training_type"]:checked').value;
    let training_days = document.getElementById("daysaweek").value;
    let training_hours = document.getElementById("training_hours").value;
    let training_intensity = document.querySelector('input[name="training_intensity"]:checked').value;
    user.training_answer = "Si entrena";
    user.training_type = training_type;
    user.training_intensity = training_intensity;
    user.training_days = training_days;
    user.training_hours = training_hours;
    if(training_type = "Deporte"){
      let deporte = document.getElementById("sport").value;
      user.sport = deporte;
    }
  }
  let stress_level = document.getElementById("stress").value;
  user.stress_level = stress_level;
  if(document.querySelector('input[name="bloodType"]:checked').value ){
    let blood_type = document.querySelector('input[name="bloodType"]:checked').value;
    user.blood_type = blood_type;
  }
  if(document.getElementById("disease").value !== ""){
    user.disease_1 = document.getElementById("disease").value;
    if(document.getElementById("disease1").value !== ""){
      user.disease_2 = document.getElementById("disease1").value;
      if(document.getElementById("disease2").value !== ""){
        user.disease_3 = document.getElementById("disease2").value;
      
  }
  

  }

}
if(document.querySelector('input[name="diabetes"]:checked').value === "Si"){
 user.diabetes_heredofamiliar = document.querySelector('input[name="diabetes"]:checked').value;

}else{
  user.diabetes_heredofamiliar = document.querySelector('input[name="diabetes"]:checked').value;

}
if(document.querySelector('input[name="diabetes"]:checked').value === "Si"){
  user.diabetes_heredofamiliar = document.querySelector('input[name="diabetes"]:checked').value;
 
 }else{
   user.diabetes_heredofamiliar = document.querySelector('input[name="diabetes"]:checked').value;
 
 }
 if(document.querySelector('input[name="hipertension"]:checked').value === "Si"){
  user.hipertension_heredofamiliar = document.querySelector('input[name="hipertension"]:checked').value;
 
 }else{
   user.hipertension_heredofamiliar = document.querySelector('input[name="hipertension"]:checked').value;
 
 }
 if(document.getElementById("reason").value !== ""){
  user.reason_is = document.getElementById("reason").value;
 }else{
  user.reason_is = document.getElementById("reason").value;
 }
 if(document.getElementById("Goals").value !== ""){
  user.goals = document.getElementById("Goals").value;
 }else{
  user.goals = document.getElementById("Goals").value;
 }
 if(document.getElementById("eta").value !== ""){
  user.eta = document.getElementById("eta").value;
 }else{
  user.eta = document.getElementById("eta").value;
 }
 if(document.getElementById("obstacles").value !== ""){
  user.reason_is = document.getElementById("obstacles").value;
 }else{
  user.reason_is = document.getElementById("obstacles").value;
 }
user.water_per_day = document.getElementById("actual_water").value;

user.current_meals_x_day = document.querySelector('input[name="actual_meals"]:checked').value;

user.smokes = document.querySelector('input[name="smoke"]:checked').value;
if(user.smokes === "Si"){
user.smokeType = document.querySelector('input[name="smokeType"]:checked').value;
user.smoke_rate = document.getElementById("smoke_x_week").value + " days a week";}

user.drinks = document.querySelector('input[name="drinks"]:checked').value;

  let snacksarr = document.getElementsByClassName("actual_snacks");
  snacks=[]
 for(let i = snacksarr.length; i--;){
     

   if(snacksarr[i].checked === true){
  
   snacks.push(snacksarr[i].value)
  }



 }

 user.snacks = snacks.toString();  

}
