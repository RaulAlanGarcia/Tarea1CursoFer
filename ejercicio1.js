/* FUNCION  1 */

function Funcion1(p1){
var numero = p1
var string = "*"
for (var i = 0; i < numero; i++) {
  console.log(string.repeat(i+1) )

}
                     }


/* FUNCION  2  */
function Funcion2(p1){
var numero = p1
var string = "*"
for (var i = numero; i > 0; i--)
{
 console.log(string.repeat(i) )
}

                    }

/* FUNCION  3  */
function Funcion3(p1){
var numero = p1


for (var i = 0; i < numero; i++)
{
var s = "*"
s =  s.repeat(numero);

s = s.substr(0, i) + 'x' + s.substr(i + 1);
console.log(s)
}
                   }


/* FUNCION  4  */
function Funcion4(p1){
var numero = p1
 if (numero >= 3 )
                 {

    for (var i = 0; i < numero; i++)
    {

    var s = "*"
    s =  s.repeat(numero);

    if ( i != 0  &&  i != numero - 1  )
    {

    var relleno = "x"
    var relleno2 =  relleno.repeat(s.length - 2 )

    var s = "*".concat(relleno2).concat("*")

    }


console.log(s)
//console.log(numero - 1 )
}
                 }
                 else {
  console.log("Macho pero necesitais al menos un 3 pa mostrar borde")
                 }


                     }




//Funcion1(10)
//Funcion2(10)
//Funcion3(4)
//Funcion4(2)
