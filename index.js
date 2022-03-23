const users = [
  { name: "juuan", email: "juan@mail.com", hobby: "games" },
  { name: "pedro", email: "pedro@mail.com", hobby: "react" },
  { name: "julio", email: "julio@mail.com", hobby: "music" },
  { name: "tulio", email: "tulio@mail.com", hobby: "chamullar" },
];
let cont = 1;
document.getElementById("users").innerHTML = users.map((val) => ` Usuario ${cont++} : ` + val.name + " Correo: " + val.email + "  Hobby: " + val.hobby);
