const form = document.querySelector("#form");
const errorDiv = document.querySelector("#show-error");
const username = document.querySelector("#username");
const mail = document.querySelector("#mail");
const age = document.querySelector("#age");
const firstPassword = document.querySelector("#first-password");
const secondPassword = document.querySelector("#second-password");

// toutes les validations sont verifiées dans cette function.
// ainsi que les messages d'erreurs
form.addEventListener("submit", (error) => {
  let incorrectInput = "";

  // regex verification au moins 3 lettres et pas plus de 50 sur la valeur de username
  const usernameSize = /([a-z]){3,50}/.test(username.value);
  // si username n'est pas valide
  if (!usernameSize) {
    incorrectInput += "Au moin trois lettres.\n";
    
  }

  // regex pour les emails
  const includemails = /^(("[\w-\s]+")|([\w-]+(?:\.[\w-]+)*)|("[\w-\s]+")([\w-]+(?:\.[\w-]+)*))(@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$)|(@\[?((25[0-5]\.|2[0-4][0-9]\.|1[0-9]{2}\.|[0-9]{1,2}\.))((25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\.){2}(25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\]?$)/.test(
    mail.value
  );

  if (!includemails) {
    incorrectInput += `ceci n'est pas un mail valide.\n`;
  }
  // validation de l'age age
  if (age.value < 18) {
    incorrectInput += `Tu n'as pas encore 18 ans\n`;
  }

  // password doit être entre 6 et 20
  const badPasswordLength =
    firstPassword.value.length < 6 || firstPassword.value.length > 20;

  if (badPasswordLength) {
    incorrectInput += " Le mot de passe doit être  entre 6 et 20 charactere.\n";
  }
  // Password doit contenir au moins une majuscule
  // le regex renvoie true si il y a que des minuscules
  const passwordIncludesUppercase = /[a-z]/.test(firstPassword.value);

  if (!passwordIncludesUppercase) {
    incorrectInput +=
      " Le mot de passe dooit contenir au moins une majuscule.\n";
  }

  // Verification du confirm password

  if (firstPassword.value !== secondPassword.value) {
    incorrectInput += "Les mots de passe ne sont pas pareils.\n";
  }

  // les messages d'erreurs si incorrectInput n'est pas vide
  if (incorrectInput !== "") {
    errorDiv.innerText = incorrectInput;
    // change couleur du texte
    errorDiv.style.color = "red";
    // empeche la validation tant qu'il y a des erreurs
    error.preventDefault();
  }
});
