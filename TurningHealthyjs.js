
//acceot

$(document).ready(function(){
    var accept=document.getElementById("accept");
    var welcomescreen = document.getElementById("welcomescreen-cookies");
    $(accept).click(function(){
      document.body.removeChild(welcomescreen);
        console.log("remove");
    })
    
});


//video section
var videos = [];
var i=0;

var videosarr = [];



videos[0]= "videos/tt0.mp4";
videos[1]= "videos/tt1.mp4";
videos[2]= "videos/tt2.mp4";
videos[3]= "videos/tt3.mp4";
videos[4]= "videos/tt4.mp4";
videos[5]= "videos/tt5.mp4";
videos[6]= "videos/tt6.mp4";
videos[7]= "videos/tt7.mp4";
videos[8]= "videos/tt8.mp4";
    
    video =  document.createElement("video");
    video.poster='fotos/blank.jpg';
    video.id = "vid"
    video.src=videos[0];
    video.autoplay = false;
    video.controls = true;
    video.muted = true;
    video.height = 530; 
    video.width = 300;
    
    
    video2 =  document.createElement("video");
    video2.poster='fotos/blank.jpg';
    video2.id = "vid"
    video2.src=videos[1];
    video2.autoplay = false  ;
    video2.controls = true;
    video2.muted = true;
    video2.height = 530; 
    video2.width = 300;

    video3 =  document.createElement("video");
    video3.poster='fotos/blank.jpg';
    video3.id = "vid"
    video3.src=videos[2];
    video3.autoplay = false;
    video3.controls = true;
    video3.muted = true;
    video3.height = 530; 
    video3.width = 300;

    video4 =  document.createElement("video");
    video4.poster='fotos/blank.jpg';
    video4.id = "vid"
    video4.src=videos[3];
    video4.autoplay = false;
    video4.controls = true;
    video4.muted = true;
    video4.height = 530; 
    video4.width = 300;

    video5 =  document.createElement("video");
    video5.poster='fotos/blank.jpg';
    video5.id = "vid"
    video5.src=videos[4];
    video5.autoplay = false;
    video5.controls = true;
    video5.muted = true;
    video5.height = 530; 
    video5.width = 300;

    video6 =  document.createElement("video");
    video6.poster='fotos/blank.jpg';
    video6.id = "vid"
    video6.src=videos[5];
    video6.autoplay = false;
    video6.controls = true;
    video6.muted = true;
    video6.height = 530; 
    video6.width = 300;

    video7 =  document.createElement("video");
    video7.poster='fotos/blank.jpg';
    video7.id = "vid"
    video7.src=videos[6];
    video7.autoplay = false;
    video7.controls = true;
    video7.muted = true;
    video7.height = 530; 
    video7.width = 300;

    video8 =  document.createElement("video");
    video8.poster='fotos/blank.jpg';
    video8.id = "vid"
    video8.src=videos[7];
    video8.autoplay = false;
    video8.controls = true;
    video8.muted = true;
    video8.height = 530; 
    video8.width = 300;

    video9 =  document.createElement("video");
    video9.poster='fotos/blank.jpg';
    video9.id = "vid"
    video9.src=videos[8];
    video9.autoplay = false;
    video9.controls = true;
    video9.muted = true;
    video9.height = 530; 
    video9.width = 300;
    video9.volume = .35;
    video.volume = .35;video2.volume = .35;video3.volume = .35;video4.volume = .35;video5.volume = .35;video6.volume = .35;video7.volume = .35;video8.volume = .35;


    var box = document.getElementById('apbox');
   


    box.appendChild(video);
  
    window.onscroll = function(){
        
        //get current scrol position
           
             var currentYpos = window.pageYOffset || document.documentElement.scrollTop;
    		if ( currentYpos >= 1200
    		    && currentYpos <=1730 
    		   ) { 

    			video.play();
    		}else{
    		    //else pause the video 
    			video.pause();
    		}
            if (currentYpos > 520 && currentYpos < 1250){
                tipsDiv.style.backgroundColor=" #A9EA38";
                tipsDiv.style.color="orange";
                tipsDiv.style.textDecoration="underline";
               }

            
            
           
             
              
                if(currentYpos > 1250 && currentYpos < 2600){
                tipsDiv.style.backgroundColor=" #FFEE32";
                tipsDiv.style.color="orange";
                tipsDiv.style.textDecoration="underline";


        
               }
               if(currentYpos > 2600){
                tipsDiv.style.backgroundColor="white";
                tipsDiv.style.color="orange";
                tipsDiv.style.textDecoration="underline";
        

               }
               if(currentYpos<520){
                tipsDiv.style.backgroundColor="#A9EA38";
                tipsDiv.style.color="orange";
                tipsDiv.style.textDecoration="underline";
               }
                   
                if ( currentYpos > 1230
        
                    && currentYpos <=1888  
                   ) {
                    //Play video if the current scroll position 
                    //is between the top and bottom of the video element
                    tipsDiv.style.opacity="0";
                }else{
                    //else pause the video 
                    tipsDiv.style.opacity="1";
                }
    };   /*        
window.onscroll = function (){
  
       
    let currentYpos = window.pageYOffset || document.documentElement.scrollTop;
    

    
};*/

    $(document).ready(function(){
        $("#next1").mouseover(function(){
            $(box).empty();
            $(box).append(video2);
            video2.play();
          
    })

    
        $("#next1").click(function(){
            video2.muted=false;
         })
        
    });
    
    $(document).ready(function(){
        $("#next2").mouseover(function(){
            $(box).empty();
            $(box).append(video3);
            video3.play();
        })
        $("#next2").click(function(){
            video3.muted=false;
         })
    });

    $(document).ready(function(){
        $("#next3").mouseover(function(){
            $(box).empty();
            $(box).append(video4);
            video4.play();
        })
        $("#next3").click(function(){
           video4.muted=false;
        })
        
    });
    $(document).ready(function(){
        $("#next4").mouseover(function(){
            $(box).empty();
            $(box).append(video5);
            video5.play();
        })
        $("#next4").click(function(){
            video5.muted=false;
         })

    });
    $(document).ready(function(){
        $("#next5").mouseover(function(){
            $(box).empty();
            $(box).append(video6);
            video6.play();
        })
        $("#next5").click(function(){
            video6.muted=false;
         })
    });

    $(document).ready(function(){
        $("#next6").mouseover(function(){
            $(box).empty();
            $(box).append(video7);
            video7.play();
        })
        $("#next6").click(function(){
            video7.muted=false;
         })
    });

    $(document).ready(function(){
        $("#next7").mouseover(function(){
            $(box).empty();
            $(box).append(video8);
            video8.play();
        })
        $("#next7").click(function(){
            video8.muted=false;
         })
    });

    $(document).ready(function(){
        $("#next8").mouseover(function(){
            $(box).empty();
            $(box).append(video9);
            video9.play();
        })
        $("#next8").click(function(){
            video9.muted=false;
         })
    });

   

    $(document).ready(function(){
        $("#next").mouseover(function(){
            $(box).empty();
            $(box).append(video);
            video.play();
        })
        $("#next").click(function(){
            video.muted=false;
         })
    });

// Tips
var tipsDiv = document.getElementById("tipsDiv");
var tipText= document.createElement("p");
tipText.id="tipText";
tipText.style.color ="black";
tipText.innerText="Remember to eat every couple of hours to avoid catabolizing"
var tips = document.getElementById("tipsimg");


$(document).ready(function(){
    $(tipsDiv).mouseover(function(){
        
tipsDiv.appendChild(tipText);
tipsDiv.style.position="fixed";
    })
    $(tipsDiv).mouseleave(function(){
        
    console.log("left");
        tipsDiv.removeChild(tipText);
        tipsDiv.style.position="fixed";

       
            })
});




//navigation bar links


