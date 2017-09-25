var eyebrowHeight = 0;
var mouthHeight = 0;
var mouthY = 0;
var irisColor = "#83cbfc";
var irisWidth = 0;
var irisX = 0;
        
var c = document.getElementById("myCanvas");
var ctx = c.getContext("2d");
        
function draw(){

  //--Head--
	ctx.beginPath();
    ctx.fillStyle = "#b7b7b7";
    ctx.fillRect(250, 150, 500, 500);

  //--Hair--
    ctx.beginPath();
    ctx.fillStyle = "#70767a";
    ctx.moveTo(250, 270);
    ctx.lineTo(200, 150);
    ctx.lineTo(300, 100);
    ctx.fill();

    ctx.beginPath();
    ctx.fillStyle = "#70767a";
    ctx.moveTo(750, 270);
    ctx.lineTo(800, 150);
    ctx.lineTo(700, 100);
    ctx.fill();

    ctx.beginPath();
    ctx.fillStyle = "#70767a";
    ctx.moveTo(250, 200);
    ctx.lineTo(500, 210);
    ctx.lineTo(300, 100);
    ctx.fill();

    ctx.beginPath();
    ctx.fillStyle = "#70767a";
    ctx.moveTo(300, 100);
    ctx.lineTo(700, 100);
    ctx.lineTo(450, 200);
    ctx.fill();

    ctx.beginPath();
    ctx.fillStyle = "#70767a";
    ctx.moveTo(400, 195);
    ctx.lineTo(750, 200);
    ctx.lineTo(700, 100);
    ctx.fill();


  //--Eyes--
    //Outline
    ctx.beginPath();
    ctx.fillStyle = "#969696";
    ctx.fillRect(300, 260, 150, 100);

    ctx.beginPath();
    ctx.fillStyle = "#969696";
    ctx.fillRect(550, 260, 150, 100);

    //Iris
    ctx.beginPath();
    ctx.fillStyle = irisColor;
    ctx.fillRect(325 + irisX, 285, 100 - irisWidth, 50)

    ctx.beginPath();
    ctx.fillStyle = irisColor;
    ctx.fillRect(575 + irisX, 285, 100 - irisWidth, 50)        

    //Pupil
    ctx.beginPath();
    ctx.fillStyle = "#3d3d3d"
    ctx.fillRect(355, 290, 40, 40);

    ctx.beginPath();
    ctx.fillStyle = "#3d3d3d"
    ctx.fillRect(605, 290, 40, 40);

  //--Nose--
    ctx.beginPath();
    ctx.fillStyle = "#70767a";
    ctx.moveTo(500, 340);
    ctx.lineTo(470, 460);
    ctx.lineTo(530, 460);
    ctx.fill(); 


  //--Eyebrows--
    ctx.beginPath();
    ctx.fillStyle = "#70767a";
    ctx.moveTo(280, 250 - eyebrowHeight);
    ctx.lineTo(470, 275 - eyebrowHeight);
    ctx.lineTo(460, 255 - eyebrowHeight);
    ctx.lineTo(290, 240 - eyebrowHeight);
    ctx.fill(); 

    ctx.beginPath();
    ctx.fillStyle = "#70767a";
    ctx.moveTo(720, 250 - eyebrowHeight);
    ctx.lineTo(530, 275 - eyebrowHeight);
    ctx.lineTo(540, 255 - eyebrowHeight);
    ctx.lineTo(710, 240 - eyebrowHeight);
    ctx.fill(); 

  //--Ears--
    ctx.beginPath();
    ctx.fillStyle = "#969696";
    ctx.moveTo(250, 310);
    ctx.lineTo(215, 335);
    ctx.lineTo(220, 400);
    ctx.lineTo(250, 425);
    ctx.fill();

    ctx.beginPath();
    ctx.fillStyle = "#969696";
    ctx.moveTo(750, 310);
    ctx.lineTo(785, 335);
    ctx.lineTo(780, 400);
    ctx.lineTo(750, 425);
    ctx.fill();

  //--Mouth-- 
	//Outline
    ctx.beginPath();
    ctx.fillStyle = "#969696";
    ctx.fillRect(310, 500, 380, 125);

    //Mouth
    ctx.beginPath();
    ctx.fillStyle = "#ffbfbf"
    ctx.fillRect(330, 515 + mouthY, 340, 95 - mouthHeight);

	//Grill
    ctx.beginPath();
    ctx.fillStyle = "#969696";
    ctx.fillRect(350, 515, 20, 95); 

    ctx.beginPath();
    ctx.fillStyle = "#969696";
    ctx.fillRect(390, 515, 20, 95); 

    ctx.beginPath();
    ctx.fillStyle = "#969696";
    ctx.fillRect(430, 515, 20, 95); 

    ctx.beginPath();
    ctx.fillStyle = "#969696";
    ctx.fillRect(470, 515, 20, 95); 

    ctx.beginPath();
    ctx.fillStyle = "#969696";
    ctx.fillRect(510, 515, 20, 95); 

    ctx.beginPath();
    ctx.fillStyle = "#969696";
    ctx.fillRect(550, 515, 20, 95);

    ctx.beginPath();
    ctx.fillStyle = "#969696";
    ctx.fillRect(590, 515, 20, 95);

    ctx.beginPath();
    ctx.fillStyle = "#969696";
    ctx.fillRect(630, 515, 20, 95);  
}
        
draw();
        
var i = 1;
        
function robot(i){
    window.setTimeout(function(){
		//If i is odd, raise the eyebrows and make the mouth slightly smaller than normal
        if(i % 2 != 0){
            eyebrowHeight = 20;
            mouthHeight = 20;
            mouthY = 10;
        }
        //Otherwise lower the eyebrows and close the mouth more
        else{
            eyebrowHeight = 10;
            mouthHeight = 70;
            mouthY = 35;
        }
		//Change the iris color and size - 1 time only
        irisColor = "#bf1818";
        irisWidth = 20;
        irisX = 10;
        //Redraw the canvas
        draw();
                
        i--;
                
        if(i > 0){
            robot(i);
        }
                
		//Reset the image to default state
        if(i == 0){
            eyebrowHeight = 0;
            mouthHeight = 0;
            mouthY = 0;
            irisColor = "#83cbfc";
            irisWidth = 0;
            irisX = 0;
            draw();
        }
    }, 1000);
}