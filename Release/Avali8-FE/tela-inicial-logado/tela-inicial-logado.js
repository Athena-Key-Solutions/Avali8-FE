$(document).ready(function(){
    var user = JSON.parse(sessionStorage.getItem('user'));
    //Requisição
    $.ajax({
      "url": "http://127.0.0.1:3333/avali8/api/v1/user",
      "type": "POST",
      "contentType": "application/json",
      "data": JSON.stringify({"token":user.token}),
      "success": function(response){
        response.token = user.token;
        document.getElementById('username1').innerHTML = response.name;
        sessionStorage.setItem("user", JSON.stringify(response) );
      }
  });

    //Gráfico
    google.charts.load('current', {'packages':['bar']});
      google.charts.setOnLoadCallback(drawStuff);

      function drawStuff() {
        var data = new google.visualization.arrayToDataTable([
          ['User', 'Score'],
          ["User 1", 44],
          ["User 2", 31],
          ["User 3", 12],
          ["User 4", 10],
          ["User 4", 3]
        ]);

        var options = {
          legend: { position: 'none' },
          bar: { groupWidth: "90%" }
        };

        var chart = new google.charts.Bar(document.getElementById('ranking'));
        // Convert the Classic options to Material options.
        chart.draw(data, google.charts.Bar.convertOptions(options));
      };
});
