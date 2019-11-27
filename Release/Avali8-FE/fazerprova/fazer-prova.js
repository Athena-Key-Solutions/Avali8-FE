entregar = function(){
  var time_init = document.getElementById("enviar").getAttribute("timeInicio");
  var time = new Date();
  var time_fim = time.getTime()/1000;
  var time_finished = ((time_fim-time_init)/60).toFixed(2);

  console.log("Você terminou em "+time_finished+" minutos.");
  
  var label = document.getElementsByTagName("label");
  
  var exam_readed = JSON.parse(sessionStorage.getItem('exam_readed'));
  var user = JSON.parse(sessionStorage.getItem('user'));

  var total_score = 0;

  //Pontuação prova

  var checked = [], mistakes = [];

  for(var i=0;i<label.length;i++){
    var labelChildren = label[i].children;
    var inputSon = labelChildren[0];
    if(inputSon.checked==true){
     checked.push(inputSon.value);
    }
  }

  for(x in checked){
    switch(checked [x]){
      case 'a':{
        var correct = exam_readed.alternatives[x][0].right_alternative;
        console.log(correct);
        if('a'==correct){
          var score = exam_readed.questions[x].score;
          total_score += score;
        }else{
          var content =  exam_readed.questions[x].conteudo;
          mistakes.push(content);
        }
        break;
      }
      case 'b':{
        var correct = exam_readed.alternatives[x][0].right_alternative;
        if('b'==correct){
          var score = exam_readed.questions[x].score;
          total_score += score;
        }else{
          var content =  exam_readed.questions[x].conteudo;
          mistakes.push(content);
        }
        break;
      }
      case 'c':{
        var correct = exam_readed.alternatives[x][0].right_alternative;
        if('c'==correct){
          var score = exam_readed.questions[x].score;
          total_score += score;
        }else{
          var content =  exam_readed.questions[x].conteudo;
          mistakes.push(content);
        }
        break;
      }
      case 'd':{
        var correct = exam_readed.alternatives[x][0].right_alternative;
        if('d'==correct){
          var score = exam_readed.questions[x].score;
          total_score += score;
        }else{
          var content =  exam_readed.questions[x].conteudo;
          mistakes.push(content);
        }
        break;
      }
    }
  }

  // Conteudos errados
  var result = "";
  var map = new Map();
  for (var item of mistakes) {
    if(!map.has(item)){
      map.set(item, true);    // set any value to Map
      result += item+" ";
    }
  }
  
  $.ajax({
    "url": "http://127.0.0.1:3333/avali8/api/v1/submit-exam/exam/"+exam_readed.exam.id,
    "type": "POST",
    "contentType": "application/json",
    "data": JSON.stringify({"token":user.token, "score":total_score, "exam":exam_readed.exam.id}),
    "success": function(response){
      console.log(response);
    }
  });

  alert("FeedBack\nScore: "+total_score+"\nFinished in: "+time_finished+" minutes\nContent of wrong questions: "+result);
  window.location.replace("../tela-inicial-logado/tela-inicial-logado-fazer-simulado.html");
}

function preencherProva(exam){
  exam = {
    "exam": {
      "id": 1,
      "user_id": 2,
      "name": "Python",
      "area": "blabla",
      "difficulty": "hard",
      "created_at": "2019-11-03 21:47:27",
      "updated_at": "2019-11-03 21:47:27"
    },
    "questions": [
      {
        "id": 5,
        "user_id": 2,
        "exam_id": 5,
        "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque vitae magna eu erat porttitor pharetra in in diam. Sed iaculis, velit et molestie sodales, orci est pretium nunc, id ornare.",
        "area": "blabla",
        "difficulty": "hard",
        "is_right": null,
        "score": 1,
        "created_at": "2019-11-03T23:47:27.000Z",
        "updated_at": "2019-11-03T23:47:27.000Z",
        "conteudo": "DDL"
      },
      {
        "id": 5,
        "user_id": 2,
        "exam_id": 5,
        "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque vitae magna eu erat porttitor pharetra in in diam. Sed iaculis, velit et molestie sodales, orci est pretium nunc, id ornare.",
        "area": "blabla",
        "difficulty": "hard",
        "is_right": null,
        "score": 1,
        "created_at": "2019-11-03T23:47:27.000Z",
        "updated_at": "2019-11-03T23:47:27.000Z",
        "conteudo": "DDL"
      },
      {
        "id": 5,
        "user_id": 2,
        "exam_id": 5,
        "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque vitae magna eu erat porttitor pharetra in in diam. Sed iaculis, velit et molestie sodales, orci est pretium nunc, id ornare.",
        "area": "blabla",
        "difficulty": "hard",
        "is_right": null,
        "score": 1,
        "created_at": "2019-11-03T23:47:27.000Z",
        "updated_at": "2019-11-03T23:47:27.000Z",
        "conteudo": "DDL"
      },
      {
        "id": 5,
        "user_id": 2,
        "exam_id": 5,
        "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque vitae magna eu erat porttitor pharetra in in diam. Sed iaculis, velit et molestie sodales, orci est pretium nunc, id ornare.",
        "area": "blabla",
        "difficulty": "hard",
        "is_right": null,
        "score": 1,
        "created_at": "2019-11-03T23:47:27.000Z",
        "updated_at": "2019-11-03T23:47:27.000Z",
        "conteudo": "DDL"
      },
      {
        "id": 5,
        "user_id": 2,
        "exam_id": 5,
        "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque vitae magna eu erat porttitor pharetra in in diam. Sed iaculis, velit et molestie sodales, orci est pretium nunc, id ornare.",
        "area": "blabla",
        "difficulty": "hard",
        "is_right": null,
        "score": 1,
        "created_at": "2019-11-03T23:47:27.000Z",
        "updated_at": "2019-11-03T23:47:27.000Z",
        "conteudo": "DDL"
      },
      {
        "id": 5,
        "user_id": 2,
        "exam_id": 5,
        "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque vitae magna eu erat porttitor pharetra in in diam. Sed iaculis, velit et molestie sodales, orci est pretium nunc, id ornare.",
        "area": "blabla",
        "difficulty": "hard",
        "is_right": null,
        "score": 1,
        "created_at": "2019-11-03T23:47:27.000Z",
        "updated_at": "2019-11-03T23:47:27.000Z",
        "conteudo": "DDL"
      },
      {
        "id": 5,
        "user_id": 2,
        "exam_id": 5,
        "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque vitae magna eu erat porttitor pharetra in in diam. Sed iaculis, velit et molestie sodales, orci est pretium nunc, id ornare.",
        "area": "blabla",
        "difficulty": "hard",
        "is_right": null,
        "score": 1,
        "created_at": "2019-11-03T23:47:27.000Z",
        "updated_at": "2019-11-03T23:47:27.000Z",
        "conteudo": "DDL"
      },
      {
        "id": 5,
        "user_id": 2,
        "exam_id": 5,
        "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque vitae magna eu erat porttitor pharetra in in diam. Sed iaculis, velit et molestie sodales, orci est pretium nunc, id ornare.",
        "area": "blabla",
        "difficulty": "hard",
        "is_right": null,
        "score": 1,
        "created_at": "2019-11-03T23:47:27.000Z",
        "updated_at": "2019-11-03T23:47:27.000Z",
        "conteudo": "DDL"
      },
      {
        "id": 5,
        "user_id": 2,
        "exam_id": 5,
        "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque vitae magna eu erat porttitor pharetra in in diam. Sed iaculis, velit et molestie sodales, orci est pretium nunc, id ornare.",
        "area": "blabla",
        "difficulty": "hard",
        "is_right": null,
        "score": 1,
        "created_at": "2019-11-03T23:47:27.000Z",
        "updated_at": "2019-11-03T23:47:27.000Z",
        "conteudo": "DDL"
      },
      {
        "id": 5,
        "user_id": 2,
        "exam_id": 5,
        "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque vitae magna eu erat porttitor pharetra in in diam. Sed iaculis, velit et molestie sodales, orci est pretium nunc, id ornare.",
        "area": "blabla",
        "difficulty": "hard",
        "is_right": null,
        "score": 1,
        "created_at": "2019-11-03T23:47:27.000Z",
        "updated_at": "2019-11-03T23:47:27.000Z",
        "conteudo": "DDL"
      }
    ],
    "alternatives": [
      [
        {
          "id": 5,
          "question_id": 5,
          "a": "1.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur vitae.",
          "b": "2.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur vitae.",
          "c": "3.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur vitae.",
          "d": "4.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur vitae.",
          "right_alternative": "a",
          "selected_alternative": null,
          "created_at": "2019-11-03T23:47:27.000Z",
          "updated_at": "2019-11-03T23:47:27.000Z"
        }
      ],
      [
        {
          "id": 6,
          "question_id": 6,
          "a": "5.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur vitae.",
          "b": "6.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur vitae.",
          "c": "7.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur vitae.",
          "d": "8.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur vitae.",
          "right_alternative": "a",
          "selected_alternative": null,
          "created_at": "2019-11-03T23:47:27.000Z",
          "updated_at": "2019-11-03T23:47:27.000Z"
        }
      ],
      [
        {
          "id": 7,
          "question_id": 7,
          "a": "9.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur vitae.",
          "b": "10.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur vitae.",
          "c": "11.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur vitae.",
          "d": "12.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur vitae.",
          "right_alternative": "a",
          "selected_alternative": null,
          "created_at": "2019-11-03T23:47:27.000Z",
          "updated_at": "2019-11-03T23:47:27.000Z"
        }
      ],
      [
        {
          "id": 8,
          "question_id": 8,
          "a": "13.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur vitae.",
          "b": "14.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur vitae.",
          "c": "15.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur vitae.",
          "d": "16.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur vitae.",
          "right_alternative": "a",
          "selected_alternative": null,
          "created_at": "2019-11-03T23:47:27.000Z",
          "updated_at": "2019-11-03T23:47:27.000Z"
        }
      ],
      [
        {
          "id": 7,
          "question_id": 7,
          "a": "17.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur vitae.",
          "b": "18.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur vitae.",
          "c": "19.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur vitae.",
          "d": "20.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur vitae.",
          "right_alternative": "a",
          "selected_alternative": null,
          "created_at": "2019-11-03T23:47:27.000Z",
          "updated_at": "2019-11-03T23:47:27.000Z"
        }
      ],
      [
        {
          "id": 7,
          "question_id": 7,
          "a": "21.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur vitae.",
          "b": "22.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur vitae.",
          "c": "23.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur vitae.",
          "d": "24.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur vitae.",
          "right_alternative": "a",
          "selected_alternative": null,
          "created_at": "2019-11-03T23:47:27.000Z",
          "updated_at": "2019-11-03T23:47:27.000Z"
        }
      ],
      [
        {
          "id": 7,
          "question_id": 7,
          "a": "25.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur vitae.",
          "b": "26.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur vitae.",
          "c": "27.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur vitae.",
          "d": "28.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur vitae.",
          "right_alternative": "a",
          "selected_alternative": null,
          "created_at": "2019-11-03T23:47:27.000Z",
          "updated_at": "2019-11-03T23:47:27.000Z"
        }
      ],
      [
        {
          "id": 7,
          "question_id": 7,
          "a": "29.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur vitae.",
          "b": "30.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur vitae.",
          "c": "31.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur vitae.",
          "d": "32.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur vitae.",
          "right_alternative": "a",
          "selected_alternative": null,
          "created_at": "2019-11-03T23:47:27.000Z",
          "updated_at": "2019-11-03T23:47:27.000Z"
        }
      ],
      [
        {
          "id": 7,
          "question_id": 7,
          "a": "33.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur vitae.",
          "b": "34.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur vitae.",
          "c": "35.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur vitae.",
          "d": "36.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur vitae.",
          "right_alternative": "a",
          "selected_alternative": null,
          "created_at": "2019-11-03T23:47:27.000Z",
          "updated_at": "2019-11-03T23:47:27.000Z"
        }
      ],
      [
        {
          "id": 7,
          "question_id": 7,
          "a": "37.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur vitae.",
          "b": "38.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur vitae.",
          "c": "39.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur vitae.",
          "d": "40.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur vitae.",
          "right_alternative": "a",
          "selected_alternative": null,
          "created_at": "2019-11-03T23:47:27.000Z",
          "updated_at": "2019-11-03T23:47:27.000Z"
        }
      ]
    ]
  };
  
  sessionStorage.setItem("exam_readed", JSON.stringify(exam));

  document.getElementById("prova").innerText = exam.exam.name;
  var questions = exam.questions, alternatives = exam.alternatives;
  var labels_id = 0;
  for(var i=0;i<questions.length;i++)
  {
    document.getElementById("enunciado"+(i+1)).innerText = "Question "+(i+1)+". "+questions[i].description;
    var labels = document.getElementsByTagName("label");
    var text = document.createTextNode(alternatives[i][0].a);
    labels[labels_id++].appendChild(text);
    text = document.createTextNode(alternatives[i][0].b);
    labels[labels_id++].appendChild(text);
    text = document.createTextNode(alternatives[i][0].c);
    labels[labels_id++].appendChild(text);
    text = document.createTextNode(alternatives[i][0].d);
    labels[labels_id++].appendChild(text);
  }
  
  
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