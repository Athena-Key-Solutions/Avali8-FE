$(document).ready(function(){
    var user = JSON.parse(sessionStorage.getItem('user'));
    checarLogado();
    //Requisição
    $.ajax({
      "url": "http://127.0.0.1:3333/avali8/api/v1/user",
      "type": "POST",
      "contentType": "application/json",
      "data": JSON.stringify({"token":user.token}),
      "success": function(response){
        response.token = user.token;
        document.getElementById('username1').innerHTML = response.name;
        response.password = user.password;
        sessionStorage.setItem("user", JSON.stringify(response) );
      }
  }); 
  //List users  
      $.ajax({
        "url": "http://127.0.0.1:3333/avali8/api/v1/userlist",
        "type": "POST",
        "contentType": "application/json",
        "data": JSON.stringify({"token":user.token}),
        "success": function(response){
          sessionStorage.setItem("user_list", JSON.stringify(response));
          preencherGrafico(response);
        }
    });
    
});

function checarLogado(){
  var user = JSON.parse(sessionStorage.getItem('user'));
  if(user==null){
    alert("Please log in");
    window.location.assign("../login/login.html");
  }
}

function preencherGrafico(users){
  
  var usersScores = [["User\n","Score"]];

  for(x in users){
    usersScores.push([users[x].name,users[x].progress]);
  }

  google.charts.load('current', {'packages':['bar']});
      google.charts.setOnLoadCallback(drawStuff);
      function drawStuff() {
        var data = new google.visualization.arrayToDataTable(usersScores);

        var options = {
          legend: { position: 'none' },
          bar: { groupWidth: "90%"}
        };

        var chart = new google.charts.Bar(document.getElementById('ranking'));
        // Convert the Classic options to Material options.
        chart.draw(data, google.charts.Bar.convertOptions(options));
      };
}
