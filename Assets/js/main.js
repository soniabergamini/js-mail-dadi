// Variabile: Lista Email Permesse
const email = [ "test@test.com" , "sonia@test.com", "boolean@test.com" ];

// Variabile: messaggio Mail Autorizzata/Non Autorizzata
const autentication = document.getElementById('userAutentication');

// Click sul pulsante 'Invia':
document.getElementById('checkEmail').addEventListener("click",
    function CheckEmail() {

        // Variabile: Email Inserita dall'utente
        let userInputEmail = document.getElementById('formEmail').value;

        // console.log(`User Input Email: ${userInputEmail}`);

        // Ciclo: Controlla la mail dell'utente con la lista di email permesse
        for (let i = 0; i < email.length; i++) {
            
            let mailCheck = email[i];
            
            // Se la mail è autorizzata
            if (userInputEmail == mailCheck) {
                autentication.innerText = "Utente Autorizzato!";
                autentication.style.color = "#869F76";
            } // Else: non succede nulla.

        }

        // Visualizza Autenticazione
        autentication.style.display = 'block';
    }
);

// Click sul pulsante 'Cancella':
document.getElementById('resetEmail').addEventListener("click",
    function ResetUserInput() {

        // Rimozione messaggio Autenticazione:
        autentication.style.display = 'none';
        autentication.innerText = "Utente Non Autorizzato";

    }
);