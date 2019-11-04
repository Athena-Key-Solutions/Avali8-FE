function submitSignUp()
{
    var name = $('#nameinput').val();
    var email = $('#emailinput').val();
    var username = $('#usernameinput').val();
    var password = $('#passwordinput').val();
    var confirmpassword = $('#confirmpasswordinput').val();
    alert(email);
    alert(senha);
    $('#nameinput').val('');
    $('#emailinput').val('');
    $('#usernameinput').val('');
    $('#passwordinput').val('');
    $('#confirmpasswordinput').val('');

    if(status==200)
    {
    localStorage.setItem("user", JSON.stringify(data));
    }
    else {
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