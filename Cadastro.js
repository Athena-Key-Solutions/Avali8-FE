function submitSignUp()
{
    //Confirmando o cadastro
    alert("Cadastrado, redirecionando...");
    var nameInput = document.getElementById("nameinput").value;
    var emailInput = document.getElementById("emailinput").value;
    var usernameInput = document.getElementById("usernameinput").value;
    var passwordInput = document.getElementById("passwordinput").value;

    //Printando as informações

    alert(nameInput);
    alert(emailInput);
    alert(usernameInput);
    alert(passwordInput);

    //Resetando campos do formulário
    
    /*
    Com jQuery:

    $(':input')
    .not(':button, :submit, :reset, :hidden')
    .val('')
    .removeAttr('checked')
    .removeAttr('selected');*/

    //Sem jQuery:
    document.getElementById("nameinput").value = "";
    document.getElementById("emailinput").value = "";
    document.getElementById("usernameinput").value = "";
    document.getElementById("passwordinput").value = "";
    document.getElementById("confirmpasswordinput").value = "";

  //$.post("/signup", {name: email, password: senha}, function(data, status){ alert("Data:" + data + "\nStatus:" + status); } );

    
  var userSignUp = {name: nameInput, email: emailInput, username: usernameInput, password: passwordInput};
  console.log(userSignUp);

  $.ajax({
    "type": "POST",
    "url": "http://127.0.0.1:3333/avali8/api/v1/signup",
    "data": JSON.stringify(userSignUp),
    "contentType": "application/json"
  });
}

function getPass()
{ 
  var nameInput = document.getElementById("nameinput").value;
  var emailInput = document.getElementById("emailinput").value;
  var usernameInput = document.getElementById("usernameinput").value;
  var passwordInput = document.getElementById("passwordinput").value;
  var confirmInput = document.getElementById("confirmpasswordinput").value;
  var isfull = verifyInput(nameInput, emailInput, usernameInput, passwordInput, confirmInput); //se for true, ta tudo certo, senao tem algo vazio
  if(isfull == true)
  {
    alert(passwordInput + " - " + confirmInput);
    var ok = confirmPassword(passwordInput, confirmInput);
    if(ok == "Welcome to Avali8") 
    {
      submitSignUp();
    }
  }
}

function verifyInput(nameInput, emailInput, usernameInput, passwordInput, confirmInput)
{
  var aux = 0;
  if(nameInput == "")
  {
    //alert("Nome vazio!");
    aux = aux + 1;
    if(emailInput == "")  
    {
      //alert("Email vazio!");
      aux = aux + 1;
      if(usernameInput == "")
      {
        //alert("Nome de usuário vazio!");
        aux = aux + 1;
        if(passwordInput == "")
        {
          //alert("Senha vazia!");
          aux = aux + 1;
          if(confirmInput == "")
          {
            //alert("Senha de confirmação vazia!");
            aux = aux + 1;
          }
        }
      }
    }
  }
  if(aux == 0)
  {
    return true;
  }
  else
  {
    return false;
  }
  
}
module.exports = verifyInput;

function confirmPassword(password, confirmInput)
{
    if(password == confirmInput)
    {
        return "Welcome to Avali8";
        //submitSignUp();
    }
    else
    {
        return "Error";
    }
}
//module.exports = confirmPassword;