$(document).ready(function(){

    var user = JSON.parse(sessionStorage.getItem('user'));
    document.getElementById("nameinput").value = user.name;
    document.getElementById("emailinput").value = user.email;
    document.getElementById("usernameinput").value = user.username;
    document.getElementById("passwordinput").value = user.password;
    document.getElementById("confpasswordinput").value = user.password;
    document.getElementById("username").innerText = user.name;
});


function enviar(){
    var name = document.getElementById("nameinput").value;
    var email = document.getElementById("emailinput").value;
    var username = document.getElementById("usernameinput").value;
    var password = document.getElementById("passwordinput").value;
    var passwordconf = document.getElementById("confpasswordinput").value;
    alert("clicou");
    console.log(password);
    if(password==passwordconf){
        var changes = {"name":name, "email":email, "username": username, "password": password};
        alert("requisição");
    }else{
        alert("Confirme your password!!");
    }
}