
const check = document.getElementById("controlla");

check.addEventListener("click", function getEmail()
{

  let emailInput = document.getElementById("email");
  let email = emailInput.value;

 
  
  let emailAutorizzate = ["bayeg203@gmail.com", "bayeg2003@gmail.com"];
  
  let accessoConsentito = false;
  
  for ( i = 0; i < emailAutorizzate.length; i++) {
    if (email === emailAutorizzate[i]) {
      accessoConsentito = true;
  
    }
  }
  
  if (accessoConsentito) {
    document.getElementById("esito").innerHTML = "Mail valida";
  } else {
    document.getElementById("esito").innerHTML = "Mail non valida";
  }


}
)



let utente = Math.floor(Math.random() * 6);
let pc = Math.floor(Math.random() * 6);


if (utente > pc) {
 console.log ("user ha vinto");
} else if (utente < pc) {
    console.log ("Il computer ha vinto ");
} 

