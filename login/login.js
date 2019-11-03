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
