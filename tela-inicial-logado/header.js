function displayDropDownCont(id)
{
  var x = document.getElementById(id).style.display;
  if(x=="")
  {
     document.getElementById(id).style.display = "block";
  }
  else{
     document.getElementById(id).style.display = "";
  }
}
