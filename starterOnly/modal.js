function editNav() {
  var x = document.getElementById("myTopnav");
  if (x.className === "topnav") {
    x.className += " responsive";
  } else {
    x.className = "topnav";
  }
}

// form fields initialisation
function resetForm(){
  firstName.value = "";
  lastName.value = "";
  email.value = "";
  birthDate.value = "";
  tournamentsNumber.value = "";
  for (let i = 0; i < cityChoice.length; i++){
    cityChoice[i].checked = false;
  }
  terms.checked = true;
  news.checked = false;
}

// verify regular expressions
function exprCheck(element, expr) {
  if (element.value === "" || !expr.test(element.value)) {
    element.parentElement.setAttribute("data-error-visible", "true");
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

// names verification function
function nameCheck(name, position) {
  let score = exprCheck(name, exprName);

  if (score === 0){
    switch (position) {
      case "first":
        firstName.parentElement.setAttribute("data-error", "Veuillez entrer 2 caractères ou plus pour le champ du nom.");
      case "last":
        lastName.parentElement.setAttribute("data-error", "Veuillez entrer 2 caractères ou plus pour le champ du nom.");
    }
  }

  return score;
}

// email verification function
function emailCheck(email) {
    let score = exprCheck(email, exprEmail);

    if (score === 0) {
      email.parentElement.setAttribute("data-error", "Veuillez renseigner une adresse email correcte pseudo@domain.tld");
    }

    return score;
}

// date verification function
function dateCheck(date){
    let score = 0;

    if (isNaN(Date.parse(date.value))) {
      score = 0;
      date.parentElement.setAttribute("data-error-visible", "true");
      date.parentElement.setAttribute("data-error", "Veuillez renseigner une date correcte jj/mm/aaaa");
    } else {
      score = 1;
      date.parentElement.setAttribute("data-error-visible", "false");
      date.parentElement.removeAttribute("data-error");
    }

    return score;
}

// quantity verification function
function quantityCheck(quantity){
    let score = exprCheck(quantity, exprQuantity);

    if (score === 0) {
      tournamentsNumber.parentElement.setAttribute("data-error", "Veuillez renseigner le nombre de vos anciennes participations (>=0).");
    }

    return score;
}

// radio buttons check function
function radioCheck(radio){
  let score = 0;

  for (let i = 0; i < radio.length; i++) {
      if (radio[i].checked){
        score = 1;
        break;
      }
    }

  if (score === 0) {
    radio[0].parentElement.setAttribute("data-error-visible", "true");
    radio[0].parentElement.setAttribute("data-error", "Vous devez choisir une option.");
  } else {
    radio[0].parentElement.setAttribute("data-error-visible", "false");
    radio[0].parentElement.removeAttribute("data-error");
  }

  return score;
}

// checkbox "checked" function
function checkboxCheck(checkbox){
  let score = 0;

  if (checkbox.checked) {
    checkbox.parentElement.setAttribute("data-error-visible", "false");
    checkbox.parentElement.removeAttribute("data-error");
    score = 1;
  } else {
    checkbox.parentElement.setAttribute("data-error-visible", "true");
    checkbox.parentElement.setAttribute("data-error", "Les conditions d'utilisation doivent être acceptées");
    score = 0;
  }

  return score;
}

// DOM Elements
const modalbg = document.querySelector(".bground");
const modalBtn = document.querySelectorAll(".modal-btn");
const modalValid = document.querySelector(".modal-validation");
const formData = document.querySelectorAll(".formData");
const closeBtn = document.querySelector("span.close");
const firstName = document.getElementById("first");
const lastName = document.getElementById("last");
const email = document.getElementById("email");
const birthDate = document.getElementById("birthdate");
const tournamentsNumber = document.getElementById("quantity");
const cityChoice = document.querySelectorAll('input[name="location"]');
const terms = document.getElementById("checkbox1");
const news = document.getElementById("checkbox2");
const submitBtn = document.querySelector(".btn-submit");
const allInputs = document.querySelectorAll(".formData > input");
const validBtn = document.querySelector(".btn-validation");

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
// form fields initialisation
resetForm();

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
firstName.addEventListener("change", () => {firstValid = nameCheck(firstName, "first");});

// last name
lastName.addEventListener("change", () => {lastValid = nameCheck(lastName, "last");});

// email
email.addEventListener("change", () => {emailValid = emailCheck(email);});

// birthdate
birthDate.addEventListener("blur", () => {dateValid = dateCheck(birthDate);});

// quantity of past participations
tournamentsNumber.addEventListener("change", () => {
  quantityValid = quantityCheck(tournamentsNumber);
});

// tournament choice
for (let i = 0; i < cityChoice.length; i++) {
  cityChoice[i].addEventListener("change", () => {locationValid = radioCheck(cityChoice);})
}

// terms and conditions accepted
terms.addEventListener("change", () => {
  termsValid = checkboxCheck(terms);
})

// enabling submit
for (let i = 0; i < allInputs.length; i++){
  allInputs[i].addEventListener("change", () => {
    
    const scoreValid = firstValid + lastValid + emailValid + dateValid + quantityValid + locationValid + termsValid;
    if (scoreValid === 7) {
      submitBtn.disabled = false;
    } else {
      submitBtn.disabled = true;
    }
  })
}

// submit button behaviour
// running each verification to help user to identify missing fields
// in terms of UX: really bad... ugly...
// submitBtn.addEventListener("mouseover", () => {
//   firstValid = nameCheck(firstName, "first");
//   lastValid = nameCheck(lastName, "last");
//   emailValid = emailCheck(email);
//   dateValid = dateCheck(birthDate);
//   quantityValid = quantityCheck(tournamentsNumber);
//   locationValid = radioCheck(cityChoice);
//   termsValid = checkboxCheck(terms);
// })

submitBtn.addEventListener("click", (e) => {
  // prevent page from reloading
  e.preventDefault();

  // final data validation check-up to prevent code injection
  // and validation or error messages
  let submitScore = 0;
  
  submitScore += nameCheck(firstName, "first");
  submitScore += nameCheck(lastName, "last");
  submitScore += emailCheck(email);
  submitScore += dateCheck(birthDate);
  submitScore += quantityCheck(tournamentsNumber);
  submitScore += radioCheck(cityChoice);
  submitScore += checkboxCheck(terms);

  if (submitScore === 7) {
    modalValid.style.display = "flex";
  } else {
    // warning messages are displayed using ...Check functions
    submitBtn.disabled = true;
  }
});

// closing and resetting modal after validation
validBtn.addEventListener("click", () => {
  modalValid.style.display = "none";
  resetForm();
  closeModal();
})