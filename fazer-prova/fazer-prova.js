$(document).ready(function(){
    var user = {"id": 1,"name": "Henrique","username": "test343","progress": 0,"level": 1,"profile_image": null,"email": "test53@gmail.com","created_at": "2019-11-02 00:55:45","updated_at": "2019-11-02 00:55:45","bio": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque consequat velit lorem, quis tristique mi mollis vitae. Cras consequat id ante vitae vehicula. Cras at elit tincidunt, auctor dolor eu, facilisis eros. Curabitur non consectetur tellus. Sed leo arcu, rhoncus nec lobortis vel, convallis et elit.","medalhas": [{certificado: "Python", score:3}, {certificado: "C", score:3}, {certificado: "C#", score:3},{certificado: "C++", score:3},{certificado: "Java", score:3},{certificado: "Ruby", score:2},{certificado: "JavaScript", score:3},{certificado: "Haskell", score:1},{certificado: "Closure", score:1},{certificado: "Ada", score:2},{certificado: "Go", score:3}, {certificado: "Pascal", score:1},{certificado: "Fortran", score:2},{certificado: "Lisp", score:3},{certificado: "Prolog", score:2},{certificado: "Gödel", score:1}]}
      //var user = JSON.parse(localStorage.getItem('user'));
      document.getElementById('username1').innerHTML = user.name;
      document.getElementById('username2').innerHTML = user.name;
      document.getElementById('bio').innerHTML = user.bio;
      preencherMedalhas(user.medalhas);
  });