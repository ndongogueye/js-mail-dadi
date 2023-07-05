let emailAutorizzate = ["bayeg203@gmail.com", "bayeg2003@gmail.com"];


let emailInserita = prompt("Inserisci la tua email:");


if (emailAutorizzate.includes(emailInserita)) {
  console.log("Accesso consentito. Benvenuto!");
} else {
  console.log("Spiacenti, non hai accesso autorizzato.");
}