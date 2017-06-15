



document.addEventListener('focusout',  copy_data)


window.onload = copy_data()

function copy_data(val){

  var Nombre = document.getElementById('Nombre').value
 var ApellidoP = document.getElementById('ApellidoP').value
  var ApellidoM = document.getElementById('ApellidoM').value
  var Fecha = document.getElementById('DateBirth').value
  var Estado = document.getElementById('ddlViewState').value
  var FechaNac = Fecha.substr(2, 2);
   var FechaNac2 = Fecha.substr(5, 2);
   var FechaNac3 = Fecha.substr(8, 2);
  var SexoM =  document.getElementById("Hombre")
//  var SexoF =  document.getElementById("Mujer").checked


FirstLetterAP = ApellidoP.substr(0,1).toUpperCase()
FirstVowelAP =  getFirstVowel(ApellidoP).toUpperCase()
FirstLetterAM = ApellidoM.substr(0,1).toUpperCase()
FirstLetterN = Nombre.substr(0,1).toUpperCase()
SexoLetter =  getSex(SexoM)
FirstConsonantAP =  getFirstConsonant(ApellidoP).toUpperCase()
FirstConsonantAM =  getFirstConsonant(ApellidoM).toUpperCase()
FirstConsonantN  =  getFirstConsonant(Nombre).toUpperCase()
DigitoNacidoEntre = getDigitoNAcido (Fecha.substr(0, 4))
VarCurp  = FirstLetterAP + FirstVowelAP + FirstLetterAM + FirstLetterN +
  FechaNac + FechaNac2 + FechaNac3 + SexoLetter + Estado + FirstConsonantAP +  FirstConsonantAM +
  FirstConsonantN + DigitoNacidoEntre


VarCurp2 = getBlacklisted(VarCurp)

if (SexoLetter == 'M')
{
  document.getElementById('Pregnant').disabled = false
}
else {
  document.getElementById('Pregnant').disabled = true
  document.getElementById('Pregnant').checked = false
     }

document.getElementById('CURP').value = VarCurp2
//element.disabled = false;
 ///document.getElementById('Pregnant').checked = true

/* JSON CONFORMATION */


var obj = new Object();
obj.name = Nombre
obj.ApellidoP = ApellidoP
obj.ApellidoM = ApellidoM
var stringJSon = JSON.stringify(obj);




DesplegarJson(stringJSon)

}// fin conformacion





function DesplegarJson(obj) {
   document.getElementById('CurpJson').value = obj
  document.getElementById('CurpJson').maxLength = "5000";
  document.getElementById('CurpJson').cols = "80";
  document.getElementById('CurpJson').rows = "40";

    //list.removeChild(list.childNodes[0])
   }

/*

var div = document.getElementById("yourDivElement");
var input = document.createElement("textarea");
var button = document.createElement("button");
input.name = "post";
input.maxLength = "5000";
input.cols = "80";
input.rows = "40";
div.appendChild(input); //appendChild
div.appendChild(button);




function DesplegarJson(obj) {

    var x = document.createElement("TEXTAREA");
    x.maxLength = "5000";
    x.cols = "80";
     x.rows = "40";
    var t = document.createTextNode(obj);
    x.appendChild(t);
    document.body.appendChild(x);
    //list.removeChild(list.childNodes[0])
   }

*/








function getBlacklisted(Word){

 CompareWord=Word.substr(0,4)

 var myarr = ["COLA", "CACA", "POPO","VACA"];

 var arraycontainsWord = myarr.indexOf(CompareWord) ;
 if (arraycontainsWord !== -1 )
 {
   palabra = myarr[arraycontainsWord]
   palabraRemp = Word.slice(0, 3) + 'X' +  Word.slice(4, Word.length)
       return  palabraRemp

 }
 else {
       return  Word
   }
                           }










function getDigitoNAcido(digito){
    if( digito <= 1999 )
    {
      return  '0'
    }
    else
    {
     return 'A'
    }

}





function getFirstVowel(word){
  for(var x = 1; x< word.length; x++){
    if(['a', 'e', 'i', 'o', 'u'].indexOf(word[x].toLowerCase()) !== -1) { return word[x]}
  }
  return 'x';
}







function getFirstConsonant(word){
  for(var x = 1; x< word.length; x++){
    if(['b', 'c', 'd', 'f', 'g','h','j','k','l','m','n','p','q','r','s','t',
    'v','w','x','y','z'].indexOf(word[x].toLowerCase()) !== -1) { return word[x]}
  }
  return 'x';
}



function getSex(SexoM){
  if  (SexoM.checked == true)
  {
    return 'H'
  }
  else
    {
     return  'M'
   }

}







/*
 990917

function copy_data(val){
 var a = document.getElementById(val.id).value
 document.getElementById("copy_to").value=a
}

function copy_data(val){
 var a = document.getElementById(val.id).value
 document.getElementById("copy_to").value=a
}

*/
