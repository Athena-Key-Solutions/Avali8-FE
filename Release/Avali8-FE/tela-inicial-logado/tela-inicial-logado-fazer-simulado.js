$(document).ready(function(){

    var user = JSON.parse(sessionStorage.getItem('user'));
    document.getElementById('username1').innerHTML = user.name;

    $.ajax({
        "url": "http://127.0.0.1:3333/avali8/api/v1/examlist",
        "type": "POST",
        "contentType": "application/json",
        "data": JSON.stringify({"token":user.token}),
        "success": function(response){
          sessionStorage.setItem("exams", JSON.stringify(response) );
          //Preencher simulados
          preencherSimulados(response);
        }
    });
});

    function prova(id){
        var exams = JSON.parse(sessionStorage.getItem('exams'));
        for(x in exams){
            if(exams[x].id == id){
                sessionStorage.setItem("exam_selected", JSON.stringify(exams[x]));
            }
        }
        window.location.replace("../fazerprova/fazer-prova.html");
    }

    function preencherSimulados(exams){
  
        //exemplos de simulados
        
        for(var i=0;i<20;i++){
            var exam = {"id": 0,"user_id": 4,"name": "Exemplo "+(i+1),"area": "Banco de Dados","difficulty": "easy","created_at": "2019-11-03 20:21:30","updated_at": "2019-11-04 20:21:30"};
            exams.push(exam);
        }
        
        
        for(x in exams){
        var simulado = document.createElement("button");
        simulado.setAttribute("onclick","prova(id)");
        simulado.setAttribute("id", exams[x].id);
        var text = document.createTextNode(exams[x].name);
        simulado.appendChild(text);

        var parent = document.getElementById("simulados");
        parent.appendChild(simulado);
    }
}