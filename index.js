// const email = document.getElementById("mail");
// const form = document.querySelector("form");
// const emailError = document.querySelector("#mail + span.error");

// email.addEventListener("input", () => {
//   if (email.validity.valid) {
//     emailError.textContent = "";
//     emailError.className = "error";
//   } else {
//     showError();
//   }
// });

// form.addEventListener("input", (event) => {
//   if (!email.validity.valid) {
//     showError();
//     event.preventDefault();
//   }
// });

// function showError() {
//   const addText = function () {
//     if (email.validity.valueMissing) {
//       emailError.textContent = "You need to enter an email address.";
//       return;
//     }
//     if (email.validity.typeMismatch) {
//       emailError.textContent = "Entered value needs to be an email address.";
//       return;
//     }
//     if (email.validity.tooShort) {
//       emailError.textContent = `Email should be at least ${email.minLength} characters; you entered ${email.value.length}.`;
//       return;
//     }
//   };

//   addText();
//   emailError.className = "error active";
// }
