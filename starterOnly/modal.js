function editNav() {
  var x = document.getElementById("myTopnav");
  if (x.className === "topnav") {
    x.className += " responsive";
  } else {
    x.className = "topnav";
  }
}

// verify regular expressions
function exprCheck(element, expr) {
  if (element.value === "") {
    element.parentElement.setAttribute("data-error-visible", "false");
    element.parentElement.removeAttribute("data-error");
    return 0;
  } else if (expr.test(element.value)) {
    element.parentElement.setAttribute("data-error-visible", "false");
    element.parentElement.removeAttribute("data-error");
    return 1;
  } else {
    element.parentElement.setAttribute("data-error-visible", "true");
    return 0;
  }
}

// DOM Elements
const modalbg = document.querySelector(".bground");
const modalBtn = document.querySelectorAll(".modal-btn");
const formData = document.querySelectorAll(".formData");
const closeBtn = document.querySelector("span.close");
const firstName = document.getElementById("first");
const lastName = document.getElementById("last");
const email = document.getElementById("email");
const birthDate = document.getElementById("birthdate");
const tournamentsNumber = document.getElementById("quantity");
const terms = document.getElementById("checkbox1");
const cityChoice = document.querySelectorAll('input[name="location"]');
const submitBtn = document.querySelector(".btn-submit");
const allInputs = document.querySelectorAll(".formData > input");

// launch modal event
modalBtn.forEach((btn) => btn.addEventListener("click", launchModal));

// launch closing modal event
closeBtn.addEventListener("click", closeModal);

// launch modal form
function launchModal() {
  modalbg.style.display = "block";
}

// close modal form
function closeModal(){
  modalbg.style.display = "none";
}

// form validations
// validation counters
let firstValid = 0;
let lastValid = 0;
let emailValid = 0;
let dateValid = 0;
let quantityValid = 0;
let locationValid = 0;
let termsValid = 0;

if (terms.checked) {
  termsValid = 1;
}

// regular expressions
const exprName = new RegExp("^[A-Za-zÀ-ÿ -]{2,}$");
const exprEmail = new RegExp("^[a-z0-9-_.]+@[a-z0-9-_.]+\\.[a-z]{2,}$");
const exprQuantity = new RegExp("^\\d{1,2}$");

// by default, disable submit button
submitBtn.disabled = true;

// first name
firstName.addEventListener("change", () => {
  firstValid = exprCheck(firstName, exprName);
  if (firstValid === 0) {
    firstName.parentElement.setAttribute("data-error", "Veuillez entrer 2 caractères ou plus pour le champ du nom.");
  }
});

// last name
lastName.addEventListener("change", () => {
  lastValid = exprCheck(lastName, exprName);
  if (lastValid === 0) {
    lastName.parentElement.setAttribute("data-error", "Veuillez entrer 2 caractères ou plus pour le champ du nom.");
  }
});

// email
email.addEventListener("change", () => {
  emailValid = exprCheck(email, exprEmail);
  if (emailValid === 0) {
    email.parentElement.setAttribute("data-error", "Veuillez renseigner une adresse email correcte pseudo@domain.tld");
  }
});

// birthdate
birthDate.addEventListener("blur", () => {
  if (isNaN(Date.parse(birthDate.value))) {
    dateValid = 0;
    birthDate.parentElement.setAttribute("data-error-visible", "true");
    birthDate.parentElement.setAttribute("data-error", "Veuillez renseigner une date correcte jj/mm/aaaa");
  } else {
    dateValid = 1;
    birthDate.parentElement.setAttribute("data-error-visible", "false");
    birthDate.parentElement.removeAttribute("data-error");
  }
});

// quantity of past participations
tournamentsNumber.addEventListener("change", () => {
  quantityValid = exprCheck(tournamentsNumber, exprQuantity);
  if (quantityValid === 0) {
    tournamentsNumber.parentElement.setAttribute("data-error", "Veuillez renseigner le nombre de vos anciennes participations (>=0).");
  }
});


// tournament choice
// radio buttons: initialising error message in the first place
cityChoice[0].parentElement.setAttribute("data-error-visible", "true");
cityChoice[0].parentElement.setAttribute("data-error", "Vous devez choisir une option.");

// validation
for (let i = 0; i < cityChoice.length; i++) {
  cityChoice[i].addEventListener("change", () => {
    if (cityChoice[i].checked){
      locationValid = 1;
    }
    if (locationValid === 0) {
      cityChoice[0].parentElement.setAttribute("data-error-visible", "true");
      cityChoice[0].parentElement.setAttribute("data-error", "Vous devez choisir une option.");
    } else {
      cityChoice[0].parentElement.setAttribute("data-error-visible", "false");
      cityChoice[0].parentElement.removeAttribute("data-error");
    }
  })
}

// terms and conditions accepted
terms.addEventListener("change", () => {
  if (terms.checked) {
    terms.parentElement.setAttribute("data-error-visible", "false");
    terms.parentElement.removeAttribute("data-error");
    termsValid = 1;
  } else {
    terms.parentElement.setAttribute("data-error-visible", "true");
    terms.parentElement.setAttribute("data-error", "Les conditions d'utilisation doivent être acceptées");
    termsValid = 0;
  }
})

// enabling submit
for (let i = 0; i < allInputs.length; i++){
  allInputs[i].addEventListener("change", () => {
    console.log("coucou");
    const scoreValid = firstValid + lastValid + emailValid + dateValid + quantityValid + locationValid + termsValid;
    if (scoreValid === 7) {
      submitBtn.disabled = false;
    } else {
      submitBtn.disabled = true;
    }
  })
}

// submit button behaviour
submitBtn.addEventListener("click", (e) => {e.preventDefault();});