var canvas = document.createElement('canvas');

canvas.id = "canvas";

//canvas.width = window.screen.availWidth;

//canvas.height = window.screen.availHeight;

canvas.width = window.innerWidth;

canvas.height = window.innerHeight;



canvas.style.backgroundColor = '#00021b';



document.body.style.margin = 0



window.onload = function() {

  document.body.appendChild(canvas);

}



var context = canvas.getContext('2d')

canvas.font = "40px American Captain"
canvas.fillStyle ="silver"
canvas.filltext("youtube",30,30)










function square(obj) {

  context.fillStyle = obj.color;

  context.fillRect(obj.x, obj.y, obj.size, obj.size);

}



function triangle(obj) {

  context.beginPath();

  context.fillStyle = obj.color;

  context.moveTo(obj.x - (obj.size / 2), obj.y + (obj.size / 2))

  context.lineTo(obj.x, obj.y - (obj.size / 2))

  context.lineTo(obj.x + (obj.size / 2), obj.y + (obj.size / 2))

  context.lineTo(obj.x - (obj.size / 2), obj.y + (obj.size / 2))

  context.closePath()

  context.fill()

}



function rect(obj) {

  context.fillStyle = obj.color;

  context.fillRect(obj.x, obj.y, obj.width, obj.height);

}



function Diamond(obj) {


    context.beginPath();

    context.fillStyle = obj.color;

    context.moveTo(obj.x - (obj.size / 2), obj.y + (obj.size / 2))

    context.lineTo(obj.x, obj.y - (obj.size / 2))

    context.lineTo(obj.x + (obj.size / 2), obj.y + (obj.size / 2))

    context.lineTo(obj.x - (obj.size / 2), obj.y + (obj.size / 2))


    context.moveTo(obj.x + (obj.size / 2), obj.y - (obj.size / 2))

    context.lineTo(obj.x, obj.y + (obj.size / 2))

    context.lineTo(obj.x - (obj.size / 2), obj.y - (obj.size / 2))

    context.lineTo(obj.x + (obj.size / 2), obj.y - (obj.size / 2))




    context.closePath()

    context.fill()
}



function circle(obj) {

  context.beginPath();

  context.arc(obj.x, obj.y, obj.size, 0, 2 * Math.PI, false);

  context.fillStyle = obj.color;

  context.closePath()

  context.fill();


}


function monster() {


  var gradienteAzul = context.createRadialGradient(15,2,1,90,35,100);
  gradienteAzul.addColorStop(0,"white");
  gradienteAzul.addColorStop(1,"blue");

  var gradienteAmarillo = context.createRadialGradient(3,4,4,60,60,100);
  gradienteAmarillo.addColorStop(0,"black");
  gradienteAmarillo.addColorStop(1,"yellow");


  context.beginPath();
context.arc(200,150,100,2,2*Math.PI);
context.arc(100,150,50,3,2*Math.PI);
context.arc(100,50,50,4,2*Math.PI);
context.stroke();
context.fillStyle = gradienteAzul;
context.fill();




context.beginPath();
context.arc(90,100,150,2,2 * 3);
context.arc(220,500,130,2,2* 3);
context.arc(120,400,130,2,77* 9);
context.arc(160,500,130,2,77* 9);
context.stroke();
context.fillStyle = gradienteAzul;
context.fill();


context.fillRect(160,250, 5550,20)
context.fillRect(120,350, 5550,20)


context.beginPath();
context.arc(300,150,90,2,2*Math.PI);
context.arc(100,150,140,3,2*Math.PI);
context.arc(100,50,50,4,2*Math.PI);
context.arc(150,50,20,4,2*Math.PI)
context.arc(160,250,50,5,2*Math.PI)
context.stroke();
context.fillStyle = gradienteAzul;
context.fill();

context.fillRect(250,150, 20,20)
context.fillRect(260,150, 20,50)
context.fillRect(280,150, 20, 20)

context.fillRect(290,150, 10, 10)
context.fillRect(300,150, 20,50)
context.fillRect(280,150, 10, 10)

context.fillRect(320,150, 10, 10)
context.fillRect(330,150, 20,50)
context.fillRect(350,150, 10, 10)
context.fillRect(320,160, 10, 10)







context.beginPath();
context.arc(300,100,20,2,2*Math.PI);
context.stroke();
context.fillStyle = "yellow";
context.fill();


context.beginPath();
context.scale(-1,1)
context.arc( -350,100,20,2,2*Math.PI);
context.stroke();
context.fillStyle = "yellow";
context.fill();

context.beginPath();
context.scale(-1,1)
context.arc( -350,100,20,2,2*Math.PI);
context.stroke();
context.fillStyle = "yellow";
context.fill();


context.beginPath();
context.arc( 320,130,10,3,1*3.22);
context.arc( 320,130,10,3,2*3.24);
context.arc( 320,140,10,3,2*3.42);
context.stroke();
context.fillStyle = "#0000ef";
context.fill();


context.beginPath();
context.arc( 300,100,20,3,1*3.22);
context.arc( 300,100,20,3,2*3.24);
context.fill();

context.beginPath();
context.scale(-1,1)
context.arc( -350,100,20,3,1*3.22);
context.arc( -350,100,20,3,2*3.24);
context.fill();


context.stroke();
context.fillStyle = "#0000ef";
context.fill();




}
