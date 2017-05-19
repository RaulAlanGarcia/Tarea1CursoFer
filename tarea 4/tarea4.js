// Array de figuras
// Dibujar todas con un for
function colchon(obj) {
  /*context.beginPath();
  context.fillStyle = obj.color;
  context.moveTo(obj.x - (obj.size / 2), obj.y + (obj.size / 2))
  context.lineTo(obj.x, obj.y - (obj.size / 2))
  context.lineTo(obj.x + (obj.size / 2), obj.y + (obj.size / 2))
  context.lineTo(obj.x - (obj.size / 2), obj.y + (obj.size / 2))
  context.closePath()
  context.fill()
*/


  context.beginPath();


  context.arc(obj.x, obj.y , 60, 0, 2 * Math.PI);
  context.arc(obj.x + 25 , obj.y, 60, 0, 2 * Math.PI);
  context.arc(obj.x + 50 , obj.y, 60, 0, 2 * Math.PI);
  var gradiente=context.createLinearGradient(0,0,0,170);
  gradiente.addColorStop(0,"black");
  gradiente.addColorStop(1,"red");
  context.fillStyle= gradiente;
  context.fillStyle = gradiente;
  context.fill();









}



alert("Intenta Aterrizar en el colchon pulsando click sobre el cuadro azul")




var audio = document.createElement('audio');
canvas.id = "audio";
audio.src = "Fall.mp3";
 audio.load();


 var audio2 = document.createElement('audio');
 canvas.id = "audio2";
 audio2.src = "win.mp3";
  audio2.load();


//canvas.style.cursor = "none"
canvas.addEventListener('mousedown', mouseDown)




var figure = {x: 100, y: 100, size: 50, color: 'red'}
var figArea = {x: canvas.width / 2 , y: canvas.height - 20 , size: 50, color: 'yellow'}
var fig3 = {x:100, y: 100, size: 50, color: '#000060'}

var mousePosition = {x:-1,y:-1}
circle(fig3)
var velX = 3;
var velY = 3;
var varColor = 'blue'
var varclick = false
function  mouseDown(ev){
 //cx = event.pageX;
 //cy = event.pageY;

//figure.y = canvas.height  - figure.size

figure.x = figure.x

mousePosition.x =   ev.clientX;
mousePosition.y = ev.clientY;

/*
if(ev.clientX >= (fig3.x - fig.size/2) && ev.clientX <= (fig3.x + fig3.size/2)){
  if(ev.clientY >= (fig3.y - fig.size/2) && ev.clientY <= (fig3.y + fig3.size/2)){
    isMouseDown = true;
  }
      }
*/



   //alert(mousePosition.x + ',' + mousePosition.y)
}
/*
function mouseMove(ev){
    clear()
    fig3.x = ev.clientX;
    fig3.y = ev.clientY;
    circle(fig3)

}*/



function drawSquare() {
  clear()
  collide()
  square(figure)
    colchon(figArea)

  figure.x += velX;
  figure.y += velY;
  figure.color = varColor
  if(figure.x >= (canvas.width - figure.size) || figure.x < 0) {
    velX = -velX;
        varColor = 'blue'

  }
  if(figure.y >= (canvas.height - figure.size) || figure.y < 0) {
    velY = -velY;
  //  varColor = 'red'

  }

  if(figure.y == (canvas.height - figure.size) && varColor=='gray' ) {
  /*  velY = 0;

audio.play();
audio.stop();*/
 if(figure.x > 1050 && figure.x < 1300)
  {
 velX = 1
  vely = 1
    //  alert("buen aterrizaje")
      drawSquare2()

      drawSquare3()

        drawSquare2()
    audio2.play();
    audio2.stop();
    close();

/*
    varColor ='blue'
      velY = 1;
        velX = 1;*/
  }
  else {
     audio.play();
     alert("lo siento has muerto : intenta de nuevo refrescando el navegador")
    velY = 0;


 audio.stop();

  }


  //alert(figure.x)
  }





  setTimeout(drawSquare, 1)



}//drawSquare


function drawSquare2() {
  clear()
  square(figure)
  varColor = 'blue'
  figure.x += velX;
  figure.y += velY;
  figure.color = varColor
  if(figure.x >= (canvas.width - figure.size) || figure.x < 0) {
    velX = -velX;


  }
  if(figure.y >= (canvas.height - figure.size) || figure.y < 0) {
    velY = -velY;
  //  varColor = 'red'

  }

  setTimeout(drawSquare2, 1)

}//end drawSquare2


function drawSquare3() {
  clear()
  square(figure)
  varColor = 'yellow'
  figure.x += velX;
  figure.y += velY;
  figure.color = varColor
  if(figure.x >= (canvas.width - figure.size) || figure.x < 0) {
    velX = -velX;


  }
  if(figure.y >= (canvas.height - figure.size) || figure.y < 0) {
    velY = -velY;
  //  varColor = 'red'

  }

  setTimeout(drawSquare3, 1)

}//end drawSquare2





// setInterval(drawSquare, 1)

setTimeout(drawSquare, 1)


function collide () {
   if (figure.x + 40 >=  mousePosition.x   && figure.x < mousePosition.x + 40  &&   figure.y + 40 >=  mousePosition.y   && figure.y < mousePosition.y + 40      )
   {
     varColor = 'gray'
     velX = 0
     velY = 1;
  //  alert("hay es el click")

   }
}
