var users = JSON.parse(sessionStorage.getItem("user_list"));
var user = JSON.parse(sessionStorage.getItem('user'));

$(document).ready(function(){
    checarLogado();
    document.getElementById("nameinput").value = user.name;
    document.getElementById("emailinput").value = user.email;
    document.getElementById("usernameinput").value = user.username;
    document.getElementById("passwordinput").value = user.password;
    document.getElementById("confpasswordinput").value = user.password;
    document.getElementById("username").innerText = user.name;
    
    for(var i=0;i<users.length;i++){
        if( (users[i].username==user.username) && (users[i].email == user.email) ){
           users.splice(i, 1);
        }
    }
    console.log(user);
});

function checarLogado(){
    var user = JSON.parse(sessionStorage.getItem('user'));
    if(user==null){
      alert("Please log in");
      window.location.assign("../login/login.html");
    }
  }

function enviar(){

    var name = document.getElementById("nameinput").value;
    var email = document.getElementById("emailinput").value;
    var username = document.getElementById("usernameinput").value;
    var password = document.getElementById("passwordinput").value;
    var passwordconf = document.getElementById("confpasswordinput").value;
    
    if(password==passwordconf){
        user.name = name;
        user.email = email
        user.username = username;
        user.password = password;

        sessionStorage.setItem("user", JSON.stringify(user));
        
        if(verifica(username, email)==false){
            alert("Invalid username or email");
        }else{
            var changes = {token: user.token, name: user.name, bio: user.bio, password: user.password, username: user.username, email: user.email}

            $.ajax({
                "url": "http://localhost:3333/avali8/api/v1/user/edit/"+user.id,
                "type": "POST",
                "contentType": "application/json",
                "data": JSON.stringify(changes),
                "success": function(){
                  alert("Data edited!!");
                  window.location.reload(true);
                },
                "error": function(response){
                    console.log(response);
                }
            });
        }
    }else{
        alert("Confirme your password!!");
    }
    
}

function verifica(username, email){
    for(var i=0;i<users.length;i++){
        if( (users[i].username==username) || (users[i].email == email) ){
           return false;
        }
    }
    return true;
}