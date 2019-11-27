entregar = function(){
  var time_init = document.getElementById("enviar").getAttribute("timeInicio");
  var time = new Date();
  var time_fim = time.getTime()/1000;
  var time_finished = ((time_fim-time_init)/60).toFixed(2);
  console.log(time_init);
  console.log(time_fim);
  console.log("Você terminou em "+time_finished+" minutos.");
}

function preencherProva(exam){
  console.log(exam);
}

$(document).ready(function(){

      var user = JSON.parse(sessionStorage.getItem('user'));
      var exam_selected = JSON.parse(sessionStorage.getItem('exam_selected'));

      document.getElementById('username1').innerHTML = user.name;
      var time_init = new Date();
      document.getElementById("enviar").setAttribute("timeInicio", time_init.getTime()/1000);



      //Preencher Prova
      $.ajax({
        "url": "http://127.0.0.1:3333/avali8/api/v1/make-exam/exam/"+exam_selected.id,
        "type": "POST",
        "contentType": "application/json",
        "data": JSON.stringify({"token":user.token}),
        "success": function(response){
          preencherProva(response);
        }
    });
  });