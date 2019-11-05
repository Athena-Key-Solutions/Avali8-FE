function submitSignUp()
{
    var name = document.getElementById("nameinput").value;
    var email = document.getElementById("emailinput").value;
    var username = document.getElementById("usernameinput").value;
    var password = document.getElementById("passwordinput").value;
    var confirmpassword = document.getElementById("confirmpasswordinput").value;

    //Printando as informações

    alert(email);
    alert(senha);
    alert(username);
    alert(password);
    alert(confirmpassword);

    //Resetando campos do formulário
    document.getElementById("nameinput").value = "";
    document.getElementById("emailinput").value = "";
    document.getElementById("usernameinput").value = "";
    document.getElementById("passwordinput").value = "";
    document.getElementById("confirmpasswordinput").value = "";

    $.post("/signup", {name: email, password: senha}, function(data, status){ alert("Data:" + data + "\nStatus:" + status); } );

    
    if(status==200) //se ta tudo certo, salva
    {
        localStorage.setItem("user", JSON.stringify(data)); //mandando o form com a informação
    }
    else 
    {
        alert("Log in fail.");
    }
}

function confirmPassword()
{
    var password = document.getElementById("passwordinput");
    var confirmPassword = document.getElementById("confirmpasswordinput");
    alert(password.value + " - " + confirmPassword.value);
    if(password.value == confirmPassword.value)
    {
        alert("Eu vou chamar a função, mas ela não ta funcionando ainda, viu?");
        submitSignUp();
    }
    else
    {
        alert("Your passwords aren't equal.");
    }
}
/*
function submitLogin()
{
  var email = $('#emailinput').val();
  var senha = $('#passwordinput').val();
  alert(email);
  alert(senha);
  $('#emailinput').val('');
  $('#passwordinput').val('');

 $.post("/login", {name: email, password: senha}, function(data, status){ alert("Data:" + data + "\nStatus:" + status); } );

  if(status==200)
  {
    localStorage.setItem("user", JSON.stringify(data));
  }
  else {
    alert("Log in fail.");
  }
  
}
*/