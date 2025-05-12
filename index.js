const form = document.querySelector("form");

form.addEventListener("input", (event) => {
  const validations = getValidations();
  const elementId = event.target.getAttribute("id");
  const validationIndex = parseId(elementId);
  console.log(elementId);

  const validation = validations[validationIndex];
  if (validation) {
    const error = validation(event.target.value);
    const errorField = document.querySelector(`#${elementId} + span.error`);
    processError(errorField, error);
  } else {
    alert(`no validation for element with id: ${elementId}`);
  }
});

// inputs.forEach((i) => console.log(i.getAttribute("id")));
// map of validations => map id to validation => run validation => store results in a map id => error => pipe error to span if exists, return if not

function getValidations() {
  const validations = {
    email: (value) => {
      //   const regex = /^.*@.*\..*$/;
      const regex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
      return regex.test(value)
        ? ""
        : "Please provide a valid email address, example : example@gmail.com";
      //   return value;
    },
    country: (value) => {
      const countryCodes = ["US", "RU", "KG", "GB", "DE"];

      return countryCodes.includes(value)
        ? ``
        : `Not a recognized country code. Must be one of the following ${countryCodes.join(
            " "
          )}`;
    },
    postalCode: (value) => {
      return isNumeric(value) ? "" : "Only digits allowed in Postal Code";
    },
    password: (value) => validatePassword(value),
    passwordConfirmation: (value) => validatePassword(value),
  };
  return validations;
}

function processError(field, error) {
  if (error === "") {
    field.textContent = "";
    field.classList.add("invisible");
    return;
  }

  field.textContent = error;
  field.classList.remove("invisible");
}

function parseId(id) {
  const pieces = id.split("-");
  if (pieces.length === 1) {
    return pieces[0];
  }
  if (pieces.length > 2) {
    alert("Id of an input form may contain only 2 pieces");
  }
  const result =
    pieces[0] + pieces[1].charAt(0).toUpperCase() + pieces[1].slice(1);

  return result;
  //   return id.charAt(0).toUpperCase() + id.slice(1);
}

function isNumeric(s) {
  return !isNaN(s - parseFloat(s));
}

function validatePassword() {
  const passwordField = document.getElementById("password");
  const passwordConfirmationField = document.getElementById(
    "password-confirmation"
  );

  const password = passwordField.value;
  const passwordConfirmation = passwordConfirmationField.value;

  if (password !== passwordConfirmation) {
    const error = "Both passwords must match";
    const passwordErrorField = document.querySelector(`#password + span.error`);
    const passwordConfErrorField = document.querySelector(
      `#password-confirmation + span.error`
    );

    processError(passwordErrorField, error);
    processError(passwordConfErrorField, error);
    return error;
  }
}
