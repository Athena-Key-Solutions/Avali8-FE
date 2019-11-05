function submitSignUp()
{
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

function confirmPassword()
{
    var password = document.getElementById("passwordinput");
    var confirmPassword = document.getElementById("confirmpasswordinput");
    alert(password.value + " - " + confirmPassword.value);
    if(password.value == confirmPassword.value)
    {
        alert("Welcome to Avali8!");
        submitSignUp();
    }
    else
    {
        alert("Your passwords aren't equal.");
    }
}