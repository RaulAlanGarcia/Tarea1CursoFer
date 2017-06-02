
//alert("Intenta Aterrizar en el colchon pulsando click sobre el cuadro azul")

context.globalAlpha = 0.2


var audio = document.createElement('audio');
canvas.id = "audio";
audio.src = "Fall.mp3";
 audio.load();





  var shotImage = new Image();
  shotImage.src = 'disparo1.png';
  var shotImage2 = new Image();
  shotImage2.src = 'disparo2.png';

/*
  var disparo = document.createElement('disparo');
  canvas.id = "disparo";
  disparo.src = "disparo.jpg"
*/
//context.drawImage(disparo, 10, 20)

//canvas.style.cursor = "none"
 canvas.addEventListener('mousedown', mouseDown)




function  mouseDown(ev){
var x = Math.floor((Math.random() * 2) + 1);
if (x == 1)
{
  audio.pause();
  audio.currentTime = 0
  audio.play();


  context.drawImage(shotImage, ev.clientX, ev.clientY)

  }
  else {

     audio.pause();
       audio.currentTime = 0
    audio.play();


      context.drawImage(shotImage2, ev.clientX, ev.clientY)

  }
  }
