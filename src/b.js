function display()
{
var x=document.details.fname.value;
var y=document.details.lname.value;
var z=document.details.phnum.value;
alert("FIRST NAME:"+x+"     "+"LAST NAME:"+y+"     "+"PHONE NUMBER:"+z);

document.getElementById("a").append(x);
document.getElementById("b").append(y);
document.getElementById("c").append(z);
}



 function pictureChange()
{
document.getElementById('theImage').src="http://31.media.tumblr.com/fca646cd8fe87906e605ad7e8d039903/tumblr_mmoz4fWT6U1soh1p8o1_500.png";
}
