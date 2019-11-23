function validar(input)
{
   if(input == "")
   {
      return undefined;
   }
   else{
     return input;
   }
}
//module.exports = validar;

function submitLogin(){

  var emailInput = $('#emailinput').val();
  var senhaInput = $('#passwordinput').val();
  var userLogin = {email: emailInput, password: senhaInput};
  
  if( (validar(emailInput)!=undefined) && (validar(senhaInput)!=undefined) )
  {
    
    $.ajax({
        "url": "http://127.0.0.1:3333/avali8/api/v1/login",
        "type": "POST",
        "contentType": "application/json",
        "data": JSON.stringify(userLogin),
        "success": function(response){
          var user = {token :response.token, email: emailInput, password: senhaInput};
          sessionStorage.setItem("user", JSON.stringify(user) );
          alert("Login bem sucedido");
          window.location.replace("../tela-inicial-logado/tela-inicial-logado.html");
        },
        "error": function(){
          alert("Usuário ou senha inválidos");
        }
    });

  }else{
    alert("Preencha os campos!!");
  }
  //var teste = JSON.parse(sessionStorage.getItem('user'));
  //console.log(teste.token);
}