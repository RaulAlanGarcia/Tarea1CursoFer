sizeFig = (canvas.height/canvas.width)*21.5
 y1 = canvas.height
 for (var j = 0 ; j < canvas.height; j++)
 {

   y2 = y1  - (6 * j )
for (var i = 0 ; i < canvas.width; i++)
{
if (i == 0)
{
  x1 = sizeFig * (i + j)
}
if (i >= j)
{
x1 = sizeFig * i

var rect1 = { x: x1, y: y2  , size: 3 , color: 'red'}
square(rect1)
//alert(sizeFig)
}
}
}
