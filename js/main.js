// esercizio mail

// 1. prepara una lista di mail
var mailsOk = ["steve.jobs","mark.zuckerberg","bill.gates","jeff.bezos","tim.cook"];

// 2. chiedi all'utente la mail memorizzandola con un button che dà l'istruzione di memorizzazione
// 3. controlla che la mail sia nella lista, operazione che può essere fatta immediatamente dopo la memorizzazione, sempre come conseguenza del click
// 4. stampa un messaggio relativo all'esito del controllo
var btnSubmitMail = document.getElementById('submit-mail');

btnSubmitMail.addEventListener('click',
function () {

  var userMail = document.getElementById("input-mail").value; /* memorizza la mail */

  if (userMail != "") { /* mi assicuro che ci sia qualcosa nella casella di testo */

    var outcome; /* in base a questo si deciderà quale messaggio stampare */
  
    for (var i = 0; i < mailsOk.length; i++) { /* controllo se è nella lista */
  
      if (userMail == mailsOk[i]) {
        outcome = "yes";
        i = mailsOk.length; /* mi serve a bloccare il for una volta trovata la corrispondenza */
      }
      else {
        outcome = "no";
      }
      
    }
  
    var alertMail = document.getElementById("alert-mail");
  
    // stampo il messaggio: lo faccio qui e non nel ciclo for perchè altrimenti mi si continuano ad aggiungere classi
    if (outcome == "yes") {
      alertMail.innerHTML = "Sei iscritto!";
      alertMail.className = alertMail.classList + " ms-alert-ok";
    }
    else if (outcome == "no") {
      alertMail.innerHTML = "Non sei iscritto!";
      alertMail.className = alertMail.classList + " ms-alert-not-ok";
    }
    
  }
}
);

// quando ri-clicco nella casella di testo voglio che la classe di alertName attribuita venga eliminata (altrimenti ogni volta che clicco invio senza refreshare la pagina mi va ad aggiungere una classe), oltre a ripulire tutto

var inputSpace = document.getElementById("input-mail");

inputSpace.addEventListener('click', 
function () {

  var alertMail = document.getElementById("alert-mail");
  var list = alertMail.classList;

  list.remove("ms-alert-not-ok");
  list.remove("ms-alert-ok");

  alertMail.innerHTML = "";
  document.getElementById("input-mail").value = "";

}
);

// VEDERE SE POSSO EVITARE CHE AD OGNI CLICK CONSECUTIVO SI CONTINUINO AD AGGIUNGERE CLASSI AD alert-mail

// /esercizio mail

// esercizio dadi

// non è necessario utilizzare array ma sarebbe stato carino generare un array di numeri da 1 a 6 in questo modo:
// var array = [];
// for (var i = 1; i <= 6; i++) {
//   array.push(i);
// }

var btnNumber = document.getElementById("generate-numbers");

btnNumber.addEventListener ('click',
function () {
  // numero utente
  var numberRandomUser = Math.floor(Math.random() * 5) + 1;
  var alertNumberUser = document.getElementById("alert-number-user");
  alertNumberUser.innerHTML = "Il tuo dado ha dato come risultato: " + numberRandomUser + "!";

  // numero computer
  var numberRandomComputer = Math.floor(Math.random() * 5) + 1;
  var alertNumberComputer = document.getElementById("alert-number-computer");
  alertNumberComputer.innerHTML = "Il computer ha dato come risultato: " + numberRandomComputer + "!";

  // avvisi
  var alertWinner = document.getElementById("alert-winner");
  if (numberRandomComputer > numberRandomUser) {
    alertWinner.innerHTML = "Hai perso!";
  }
  else if (numberRandomComputer < numberRandomUser) {
    alertWinner.innerHTML = "Hai vinto!";
  }
  else {
    alertWinner.innerHTML = "Pareggio!";
  }

}
);

// /esercizio dadi