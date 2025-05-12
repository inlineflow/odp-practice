const form = document.querySelector("form");

form.addEventListener("input", (event) => {
  const validations = getValidations();
  const id = event.target.getAttribute("id");

  const validation = validations[id];
  const error = validation(event.target.value);
  const errorField = document.querySelector(`#${id} + span.error`);
  processError(errorField, error);
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
