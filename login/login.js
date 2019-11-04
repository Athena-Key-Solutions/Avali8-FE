function submitLogin(){

  var emailInput = $('#emailinput').val();
  var senhaInput = $('#passwordinput').val();
  //alert(email);
  // alert(senha);
  // $('#emailinput').val('');
  // $('#passwordinput').val('');

//  $.post("http://127.0.0.1:3333/avali8/api/v1/login", {email: email, password: senha}, function(data, status){ alert("Data:" + data + "\nStatus:" + status); });

  var userLogin = {email: emailInput, password: senhaInput}
  console.log(userLogin)

$.ajax({
    "url": "http://127.0.0.1:3333/avali8/api/v1/login",
    "type": "POST",
    "contentType": "application/json",
    "data": JSON.stringify(userLogin)
});

}
