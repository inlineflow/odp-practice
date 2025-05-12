const form = document.querySelector("form");
// const inputs = form.querySelectorAll("input");

form.addEventListener("input", (event) => {
  const validations = getValidations();
  const id = event.target.getAttribute("id");

  const validation = validations[id];
  const error = validation(event.target.value);
  const errorField = document.querySelector(`#${id} + span.error`);
  errorField.textContent = error;
  errorField.classList.remove("invisible");
  console.log(error);
});

// inputs.forEach((i) => console.log(i.getAttribute("id")));
// map of validations => map id to validation => run validation => store results in a map id => error => pipe error to span if exists, return if not

function getValidations() {
  const validations = {
    email: (value) => {
      return value;
    },
  };
  return validations;
}
