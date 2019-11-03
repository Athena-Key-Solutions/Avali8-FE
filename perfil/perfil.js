function displayEditarPerfil(id){
  var x = document.getElementById(id).style.display;
  if(x=="")
  {
     document.getElementById(id).style.display = "block";
  }
  else{
     document.getElementById(id).style.display = "";
  }
}

function attBio()
{
  text = document.getElementById('myText').value;
  if(text !='')
  {
      document.getElementById('bio').innerHTML = text;
  }
  document.getElementById('myText').value = '';
}

$(document).ready(function(){
    var user = JSON.parse(localStorage.getItem('user'));
    document.getElementById('username1').innerHTML = user.name;
    document.getElementById('username2').innerHTML = user.name;
    document.getElementById('bio').innerHTML = user.bio;
});
