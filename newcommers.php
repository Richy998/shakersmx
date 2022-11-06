<?php 
      
   include "Practiceprog/trying.php";
   $conn = connect_db();
      if(isset($_POST['submit'])){
        $submit = $_POST['submit'];
        $name = $_POST['fname'];
        $lname = $_POST['lname'];
        $email = $_POST['email'];
        $phone = $_POST['phone'];
        $word = $_POST['word'];
        $verify_password = $_POST['word2'];
        $sqlquery = "insert into users (FNAME, LNAME, EMAIL, PSR) values ( '$name', '$lname', '$email', '$word')";
        if(mysqli_query($conn, $sqlquery)){
       
     
         echo nl2br("\n$name\n $lname\n "
             . "$email\n $phone\n");
     } else{
         echo "ERROR: Hush! Sorry $sqlquery. "
             . mysqli_error($conn);
     }
   
     // Close connection
     CloseConnection($conn);
    };
    


 

?>
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
    <link rel="stylesheet" href="newcommers(css).css">
</head>
<body>
<div id="registration"style="border-style: dashed; border-color: aqua; border: 2px 2ox; position: absolute; right: 0px; top: 0px; ">
            <form id="PI" action="<?php echo $_SERVER['PHP_SELF']; ?>" method="POST" class="forma">
                <h3> Informacion personal y de contacto:</h3>
                <label for="fname" >Nombre:</label><br>
                <input id="fname" name="fname"   type="text"><br><br>
                <label for="lname" >Apellido:</label><br>
                <input id="lname" name="lname"  type="text"><br><br>
            <label for="phone">Numero de contacto:</label><br>
            <input type="number" name="phone" id="phone"  placeholder="555-321-0000" pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}" required><br><br>
           <label for="email">correo electronico:</label><br>
           <input id="email" name="email" type="email"  placeholder="correo@correo.com"  ><br><br>
           <label for="password" ></label>constraseña<br>
           <input type="password" name="word"   placeholder="contraseña" id="password">
           <br><br>
           <label for="password2"></label>confirma constraseña<br>
           <input type="password" name="word2" placeholder="confirmar contraseña" id="password2">
           <br><br>
     
           
            <label for="dob">Fecha de nacimiento:</label><br>
            <input id="dob"value="1998-12-10"type="date"><br> <br>
            <button type="submit" value="Create account"id="createA"  name="submit" > Create account</button><br> 
            </form>
            <p>Para agendar tu cita, registrate</p>
</div>
<div id="initialscreen">
    
        <h1 id="left">    Nos alegrea mucho saber que quieres  lograr un cambio en tu alimentación,  </h1>
 
        <h1 id="right">Para agendar una cita con nuestra nutriologa, llena el siguiente formulario; <?php 
 if(isset($_POST['submit'])){
    echo "Genial, has completado el registo "; 
    $name = $_POST ['fname']." ";

    echo $name;
    $name = $_POST ['fname']." ";
    $lname = $_POST ['lname'];
    $phone = $_POST ['phone'];
    $email = $_POST ['email'];
    $password = $_POST ['word'];

 }
?></h1>
     <button id="button">click</button>

        <button id="openforma" onclick="openforma()">Abrir formulario >>   </button>
  


        <h1 style="position: relative; top: 730px;">Testimonios:</h1>
        <div style="position: relative; top: 780px;" id="toptestimonios">
          
            <div class="testimonio">
              
            <div class="fbox">
                  <div class="timage">
              
                  </div>
                  <div class="textimonio">
                      <div class="textimonioTitle"></div>
                      <div class="actualtextimonio"></div>
                  </div>
            </div>
                <div class="recording"></div>
            </div>
      
            <div class="testimonio">
              
              <div class="fbox">
                    <div class="timage">
                
                    </div>
                    <div class="textimonio">
                        <div class="textimonioTitle"></div>
                        <div class="actualtextimonio"></div>
                    </div>
              </div>
                  <div class="recording"></div>
              </div>
           
          
        </div>
        <div style="position: relative; top: 780px;" id="centertestimonio">
      
          <div class="testimonio">
              
              <div class="fbox">
                    <div class="timage">
                
                    </div>
                    <div class="textimonio">
                        <div class="textimonioTitle"></div>
                        <div class="actualtextimonio"></div>
                    </div>
              </div>
                  <div class="recording"></div>
              </div>
        
      
        </div>
      <div style="position: relative; top: 780px;"id="bottomtestimonios">
          
          <div class="testimonio">
              
              <div class="fbox">
                    <div class="timage">
                
                    </div>
                    <div class="textimonio">
                        <div class="textimonioTitle"></div>
                        <div class="actualtextimonio"></div>
                    </div>
              </div>
                  <div class="recording"></div>
              </div>
              
              <div class="testimonio">
              
                  <div class="fbox">
                        <div class="timage">
                    
                        </div>
                        <div class="textimonio">
                            <div class="textimonioTitle"></div>
                            <div class="actualtextimonio"></div>
                        </div>
                  </div>
                      <div class="recording"></div>
                  </div>
       
          
      </div>
     
    </div>
    <div id="newUser" >
        <div id="leftform">
          
<br>
<div class="forma">
            <label for="height">Estatura(cm):</label><br>
            <input id="height" value="180" type="number">cm<br><br>
            <label  for="weight" >Peso(kg):</label><br>
            <input id="weight"value="80" type="number">kg<br><br>
            </form>
            <form id="more" class="forma" action="">
            <label  for="alergies">Alergias:</label>
            <input id="alergiesY"name="alergies" type="radio" value="Si"onclick="alergias()">Si
            <input id="alergiesN"name="alergies" value="No"  type="radio">No <div id="alergias"></div> <br><br>
            <input value="no_selection-" checked name="alergies" type="checkbox" style="visibility:hidden"></input> 

          
        <div id="expediente_medico"> <h3>Expediente Médico</h3><br>
            <label for="stress">Niveles de estres:</label><br><input id="stress"type="range" onchange="refresh(this)"min="1" max="10" ><p style="display:inline-block"></p><p style="display:inline-block">/10</p><br>
            <label  for="bloodType">Tipo de sangre</label><br>    <br> 
                <input value="bloodTypeA+" name="bloodType" type="checkbox">A+
                <input value="bloodTypeA-" name="bloodType" type="checkbox">A-</input>
                <input value="bloodTypeB+" name="bloodType" type="checkbox">B+</input>
                <input value="bloodTypeB-" name="bloodType" type="checkbox">B-</input>
                <input value="bloodTypeO+" name="bloodType"   type="checkbox">O+</input>
                <input value="bloodTypeO-" name="bloodType" type="checkbox">O-</input>
                <input value="bloodTypeAB+" name="bloodType" type="checkbox">AB+</input>
                <input value="bloodTypeAB-" name="bloodType" type="checkbox">AB-</input> 
                <input value="no_selection-" checked name="bloodType" type="checkbox" style="visibility:hidden"></input> 

                <br>


                <div id="diseases">
                <label for="disease">Enfermedades:</label><br><input id="disease" type="text" placeholder="Enfermedad 1" ><br>
                <input type="text" id="disease1" placeholder="Enfermedad 2" ><br>
                <input type="text"id="disease2" placeholder="Enfermedad 3" ><br>
                </div>
            <br>
            <div id="heredofamiliar"><h4>Enfermedades heredofamiliares:</h4>  <br>
                <label for="heredofamiliar">Diabetes en la familia?</label><br>
                <input type="radio" name="diabetes" value="Si"  id="heredofamiliar">Si
                <input type="radio" value = "no" name="diabetes" id="heredofamiliarN">No
                <input value="no_selection-" checked name="diabetes" type="checkbox" style="visibility:hidden"></input> 
                <br><br>
                <label for="heredofamiliarHipertension">Hipertensión</label><br>
                <input type="radio" value="Si" name="hipertension"  id="heredofamiliarHipertension">Si
                <input type="radio" value="No" name="hipertension" id="heredofamiliarHipertensionN">No 
                <input value="no_selection-" checked name="hipertension" type="checkbox" style="visibility:hidden"></input> 

                <br><br>
            </div>
        </div>
        <label for="training">Haces ejercicio?:</label><br><br>
           <input id="training" type="radio" name="training?"  value = "Si" onclick="ejercicio()" >Si
           <input type="radio"   value="No" name="training?" onclick="ejercicio()" >No
           <input value="no_selection-" checked name="training?" type="checkbox" style="visibility:hidden"></input> 


        <div style="opacity: 0; height: 0px;" id="ejercicio">
            <label for="trainingdays">Ejercicio dias/semana:</label><br>
            <input type="range" min="0" max="7" onclick="refresh(this)" id="daysaweek"><p></p><p>dia(s)</p><br><br>
            <label for="traininghours" >Ejercicio (hrs/dia)</label>
            <input type="range"onclick="refresh(this)" id="training_hours" min="0" max="5"><p></p><p >hora(s)</p><br>
            <label for="trainingIntensity">Intensidad del ejercicio:</label> <br><br>

            <input value="trainingIntensityMed" type="radio" name="training_intensity" >Intensidad media-alta <br><br>
            <input value="trainingIntensityLow" type="radio" name="training_intensity" >Baja intensidad
            <input value="trainingIntensityHigh" type="radio" name="training_intensity" >Alto rendimiento
            <input value="trainingIntensityExtreme" type="radio" name="training_intensity" >Fisicoculturismo
            <input value="no_selection-" checked name="training_intensity" type="checkbox" style="visibility:hidden"></input> 
            <br><br>
            <label for="trainingtType" >Tipo de ejercicio:</label><br><br>
            <input id="trainingTypeCardio" type="radio" value="cardio" name="training_type" > Cardio(Correr/Bicicleta/Zumba/otro) <br>
            <input id="trainingTypeWeights" type="radio" value="pesas" name="training_type" >Pesas <br>
            <input value="no_selection-" checked name="training_type" type="checkbox" style="visibility:hidden"></input> 
            <input id="trainingTypeSport" type="radio" value="Deporte" name="training_type" > Deporte (Basquet/Tenis/Atle/Natación/Soccer/Americano) <br><br>
            <label for="sport" id="deporte">Deporte:</label><br>
            <input  id="sport"type="text">
            <br><br>
        </div>
        </div>
        </form>

        </div>
            <div id="rightform">

   
       
            <form action="" id="form2" class="forma">
                <h3>Objetivos: </h3>

                <label for="reason">Razón de consulta | (¿Qué te trae por acá?):</label><br><textarea  id="reason" cols="40" rows="5">
                </textarea><br><br>

                <label for="Goals">Metas:</label><br>
                <textarea  id="Goals" cols="30" rows="5"></textarea><br><br>
                <label for="eta">Tiempo estimado:</label><br>
                <input id="eta"type="number">Meses <br><br>
                <label for="obstacles">Obstaculos por superar:</label><br>
                <textarea  id="obstacles" cols="30" rows="5" placeholder="Personalmente cuáles crees que sean tus principales desafios (opcional)"></textarea><br><br>
                <h3>Sobre tu alimentación actual:</h3><br>
                <label for="actual_water">Consumo de agua diario:</label>
                <input type="range" min = "0" max = "7" onclick="refresh(this)" name="" id="actual_water"><p style="display:inline-block"></p><p style="display:inline-block">_litros</p> <br><br>
                <label for="actual_meals">Comidas al dia actualmente: </label><br>
                1<input type="radio"name="actual_meals">
                2<input type="radio" name="actual_meals" value="2">
                3<input type="radio" name="actual_meals" value="3"><br>
                4<input type="radio" name="actual_meals" value="4">
                5<input type="radio" name="actual_meals"  value="5">
                6<input type="radio" name="actual_meals" value="6">
                <input value="no_selection-" checked name="actual_meals" type="radio" style="visibility:hidden"></input> 
                <br><br>
                
                <label for="actual_snacks">Consumo de botanas:</label><br>
                <input type="radio" name="" value="Refresco"class="actual_snacks">Refresco 
                <input type="radio" name="" value="Jugos" class="actual_snacks">Jugos <br>
                <input type="radio" name="" value="Galletas"  class="actual_snacks"> Galletas 
                <input type="radio" name="" value="Pan dulce"  class="actual_snacks"> Pan dulce <br>
                <input type="radio" name="" value="Frituras"  class="actual_snacks"> Frituras 
                <input type="radio" name="" value="Gomitas" class="actual_snacks"> Gomitas <br>
                <input type="radio" name="" value="otro" class="actual_snacks"> Otro <br>
                <input type="radio" name="" value="Fruta" class="actual_snacks"> Fruta
                <input type="radio" name="" value="Botanas saludables" class="actual_snacks">Botanas saludables <br>
                <input type="radio" name="" value="ninguna"   class="actual_snacks">Ninguna de las anteriores <br><br>

            
                <input type="range" name="" id="snacks" min="0" max="7" onclick="refresh(this)"><p style="display:inline-block"></p><p style="display:inline-block">veces a la semana</p><br> <br>
                <h4>Hábitos toxicos</h4>
                <label for="smoke">Fumas?:</label> <br>
                <input type="radio" name="smoke" Value = "Si" onclick="fumada()">Si
                <input type="radio"  value="No" name="smoke">No 
                <input value="no_selection-" checked name="smoke" type="checkbox" style="visibility:hidden"></input> 
                <br><br>
                <div id="fumar" style="opacity: 0; height: 0;">
                <label for="smokeType">Qué fumas?</label> <br>
                <input type="radio" name="smokeType" value="cigarro" id="ciegarro">Cigarro 
                <input type="radio" name="smokeType" value="Puro" id="tabaco">Tabaco puro <br>
                <input type="radio" name="smokeType"value="Otro" id="otro">otro <br>
                <input type="range" name="" id="smoke_x_week" min="0" max="7" onclick="refresh(this)"><p style="display:inline-block"></p><p style="display:inline-block">veces a la semana</p><br> <br>
                <br><br>
                </div>
                <label for="drinks">Bebidas alcoholicas?:</label> <br><br>
                <input type="radio" name="drinks" value="Si"id="drinksY" onclick="tomada()">Si
                <input type="radio"  name="drinks" value="No" id="drinksN">No
                <input value="no_selection-" checked name="drinks" type="checkbox" style="visibility:hidden"></input> 
                <br><br>
                <div id="tomada"style="opacity: 0;"> 
                    <label for="alcoholType">Tipo de alcohol:</label><br><br>
                    <input type="radio" class="alcoholType" id="beer"> Cerveza
                    <input type="radio" class="alcoholType" id="wine"> Vino <br>
                    <input type="radio" class="alcoholType" id="otheralcohol"> Algún otro tipo de alcohol <br>

                </div>
        </form>
        <button type = "submit" value="submit" name = "submit" onclick="getinfo()">Submit</button>
    </div>
    </div>

    <div id="importance">
        <div>
          <h3>Importancia de la nutrición</h3>

          <div id="impvid"></div>
        </div>
     </div>   
 
    <nav id="sections">
        <div class="pag" style="border-right: 2px dashed blueviolet; " id="Home"><a href="TurningHealthy.html">Home</a></div>
        <div class="pag"style="border-right: 2px dashed blueviolet; "id="Productos"><a href="products.html">Productos</a></div>
        <div class="pag" style="border-right: 2px dashed blueviolet; " id="Recomendaciones"><a href="recomendations.html">Recomendaciones</a></div>
        <div class="pag" id="Miplan"> <a href="Progress.html">Mi Plan</a></div>
       </nav>
       <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.6.0/jquery.min.js"></script>
       <script src="newcommersjs.js"></script>
   
</body>
</html>