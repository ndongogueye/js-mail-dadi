let emailAutorizzate = ["bayeg203@gmail.com", "bayeg2003@gmail.com"];


let emailInserita = prompt("Inserisci la tua email:");


if (emailAutorizzate.includes(emailInserita)) {
  console.log("Accesso consentito. Benvenuto!");
} else {
  console.log("Spiacenti, non hai accesso autorizzato.");
}



function generaNumeroCasuale() {

  let numeroCasualeUtente = Math.floor(Math.random() * 6) + 1;
  let numeroCasualePc = Math.floor(Math.random() * 6) + 1;

  
  let pc = document.getElementById("numeroCasualePc");
  let utente = document.getElementById("numeroCasualeUTente");
  
  if (pc>utente) {
    console.log('pc hai vinto')
  } else ( pc<utente) {
    console.log('utente hai vinto')
  }


  pc.textContent = numeroCasualePc;
  utente.textContent = numeroCasualeUtente
}