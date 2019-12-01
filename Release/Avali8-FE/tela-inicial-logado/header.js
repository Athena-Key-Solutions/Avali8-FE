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

function logout(){  
   var user = JSON.parse(sessionStorage.getItem('user'));
   $.ajax({
      "url": "http://localhost:3333/avali8/api/v1/logout",
      "type": "POST",
      "contentType": "application/json",
      "data": JSON.stringify({"token":user.token}),
      "success": function(response){
         console.log(response);
         sessionStorage.clear();
         alert("Successful logout");
         window.location.assign("../login/login.html");
      }
  }); 
}

function perfil(){
   window.location.assign("../perfil/perfil.html");
}

function inicial(){
   window.location.assign("../tela-inicial-logado/tela-inicial-logado.html");
}

function editarPerfil(){
   window.location.assign("../EditPerfil/EditarPerfil.html");
}