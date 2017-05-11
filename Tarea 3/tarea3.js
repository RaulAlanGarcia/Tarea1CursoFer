



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









triangle({x: 200, y: 40, color: 'blue', size: 60})

var rect1 = { x: 200, y: 100, width: 30, height: 50, color: 'blue'}

rect(rect1)






Diamond({x: 50, y: 150, color: 'yellow', size: 20})
triangle({x: 50, y: 150, color: 'yellow', size: 20})


for (var j = 0; j < 50; j++) {

  for (var i = 0; i < 200; i++) {

    var color2 = '#'+ 1 * i  + '0000'
  Diamond({x: 50 + (i * 10) , y: 170 + j , color: color2, size: 30})

                                 }

                               }



 for (var j = 0; j < 550; j++) {

   for (var i = 0; i < 200; i++) {

     var color3 = '#0000'+ 1 * i
   Diamond({x: -230 + (i * 10) , y: 480 + j , color: color3, size: 30})

                                  }

                                }



                      monster()

                      var gradienteAzul = context.createRadialGradient(45,4,1,90,65,410);
                      gradienteAzul.addColorStop(0,"white");
                      gradienteAzul.addColorStop(1,"blue");




    circle({x: 2, y: 650, color: gradienteAzul , size: 420})

    circle({x: 1, y: 750, color: gradienteAzul , size: 320})

   triangle({x: 10, y: 950,width:2, color:"#000022", size: 1200})


  Diamond({x: -2000, y: 550,width:2, color:"#000022", size: 3200})
