let emailAutorizzate = ["bayeg203@gmail.com", "bayeg2003@gmail.com"];


let emailInserita = prompt("Inserisci la tua email:");


if (emailAutorizzate.includes(emailInserita)) {
  console.log("Accesso consentito. Benvenuto!");
} else {
  console.log("Spiacenti, non hai accesso autorizzato.");
}



function gioca() {
  var giocatore = Math.floor(Math.random() * 6) + 1;
  var computer = Math.floor(Math.random() * 6) + 1;

  console.log("Il giocatore ha lanciato il dado e ha ottenuto: " + giocatore);
  console.log("Il computer ha lanciato il dado e ha ottenuto: " + computer);

  if (giocatore > computer) {
    console.log("Il giocatore vince!");
  } else if (computer > giocatore) {
    console.log("Il computer vince!");
  } else {
    console.log("È un pareggio!");
  }
}