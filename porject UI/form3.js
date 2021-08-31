Gender ="";
Hobbies="";
function validate()

{
var a=document.getElementById("name").value;
 var b=document.getElementById("age").value;
var male=document.getElementById("male");
var female=document.getElementById("female");
var cr=document.getElementById("cricket");
var fo=document.getElementById("football");
var co=document.getElementById("computerGame");
var dob=document.getElementById("dob").value;
var g=document.getElementById("email").value;
var h=document.getElementById("address").value;
var i=document.getElementById("Qul").value;
var j=document.getElementById("st").value;

 if(male.checked==true)
 {
    Gender += "male";
 }
 if(female.checked==true)
 {
    Gender += "female";
 }
 if(cr.checked==true)
{
    Hobbies += "cricket";
} 
if(fo.checked==true)
{
    Hobbies += "football";
} 
if(co.checked==true)
{
    Hobbies += "computerGame";
} 




//alert(a + "" + b +"" + male +""+ female +"" + cr +"" + fo +"" + co +"" + f +""+ g +""+ h +""+ i +""+ j);
alert(` ${a}\n ${b}\n ${Gender}\n ${Hobbies}\n ${dob}\n ${g}\n ${h}\n ${i}\n ${j}`);
Gender ="";
Hobbies="";
 }
