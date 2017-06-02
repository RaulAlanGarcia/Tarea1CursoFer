x1= 10
y1 = canvas.height

for (var j = -0 ; j <= 1000 ;j++ )  {
  var rect1 = { x: x1 * j , y: y1  , size:6 , color: 'red'}
  square(rect1)

  if  (rect1.x  >= canvas.width)
  {

    j=0
    y1 = y1 - 10
  }
  if  (rect1.y  <= 0)
  {
    j=1000
  }


                                     }
