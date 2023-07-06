let emailAutorizzate = ["bayeg203@gmail.com", "bayeg2003@gmail.com"];


let emailInserita = prompt("Inserisci la tua email:");


if (emailAutorizzate.includes(emailInserita)) {
  console.log("Accesso consentito. Benvenuto!");
} else {
  console.log("Spiacenti, non hai accesso autorizzato.");
}



function generaNumeroCasuale() {

  let numeroCasuale = Math.floor(Math.random() * 100) + 1;

  
  let pc = document.getElementById("numeroCasualePc");
  let utente = document.getElementById("numeroCasualeUTente"); 


  pc.textContent = numeroCasuale;
  utente.textContent = numeroCasuale
}