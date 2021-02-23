// esercizio mail

// 1. prepara una lista di mail
var mailsOk = ["steve.jobs","mark.zuckerberg","bill.gates","jeff.bezos","tim.cook"];
console.log(mailsOk);

// 2. chiedi all'utente la mail memorizzandola con un button che dà l'istruzione di memorizzazione
// 3. controlla che la mail sia nella lista, operazione che può essere fatta immediatamente dopo la memorizzazione, sempre come conseguenza del click
var btnSubmitMail = document.getElementById('submit-mail');

btnSubmitMail.addEventListener('click',
function () {
  
  var userMail = document.getElementById("input-mail").value;
  var outcome;

  for (var i = 0; i < mailsOk.length; i++) {

    if (userMail == mailsOk[i]) {
      outcome = "yes";
      i = mailsOk.length; /* mi serve a bloccare il for una volta trovata la corrispondenza */
    }
    else {
      outcome = "no";
    }
    
  }

  var alertMail = document.getElementById("alert-mail");

  if (outcome == "yes") {
    alertMail.innerHTML = "Sei iscritto!";
    alertMail.className = alertMail.classList + " ms-alert-ok";
  }
  else if (outcome == "no") {
    alertMail.innerHTML = "Non sei iscritto!";
    alertMail.className = alertMail.classList + " ms-alert-not-ok";
  }

}
);



// 4. stampa un messaggio relativo all'esito del controllo

// /esercizio mail