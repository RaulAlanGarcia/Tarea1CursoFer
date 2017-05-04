

//
//var arrayElementDelete =

function deleteFromArray(array1,ElementDelete)
                                             {
for (var i = array1.length - 1 ; i >= 0; i--)
    {

        if            ( array1[i]  ==  ElementDelete)
        {
        array1.splice(i,1)

        }

     }
        console.log(array1)
                                              }

var array1 =["manzana","perejil","naranja","perejil"]
var element= "naranja"
deleteFromArray(array1,element)
