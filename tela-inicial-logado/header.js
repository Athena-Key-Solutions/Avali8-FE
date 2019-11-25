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
         alert("Log out bem sucedido");
         window.location.replace("../login/login.html");
      }
  }); 
}

function perfil(){
   window.location.replace("../perfil/perfil.html");
}

function inicial(){
   window.location.replace("../tela-inicial-logado/tela-inicial-logado.html");
}

function editarPerfil(){
   
}