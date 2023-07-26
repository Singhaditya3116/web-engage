const mainContainer = document.querySelector(".main-container");
const dialogueContainer = document.querySelector(".dialogue-container");
const errorDialogueBox = document.querySelector(".error-dialogue-box");
const overlayBox = document.querySelector("#overlay");
const errorText = document.getElementById("error-text");
const errorBtn = document.getElementById("error-btn");
const email = document.getElementById("email");
const mobileNumber = document.getElementById("mobile-number");
const emailSpan = document.getElementById("email-span");
const mobileSpan = document.getElementById("mobile-span");
const submitBtn = document.querySelector("#submit");

console.log(mainContainer, dialogueContainer);

const requiredField = document.querySelectorAll(".required-field");

function validateEmail() {
  let emailId = email.value;
  if (emailId.includes("@") && emailId.includes(".")) {
    requiredField[0].style.display = "none";
    return true;
  } else {
    requiredField[0].style.display = "block";
    return false;
  }
}

function validateMobile() {
  let mobileNo = mobileNumber.value;
  if (mobileNo.length === 10) {
    requiredField[1].style.display = "none";
    return true;
  } else {
    requiredField[1].style.display = "block";
    return false;
  }
}

function showDialogBox() {
  mobileSpan.innerText = mobileNumber.value;
  emailSpan.innerText = email.value;
  mainContainer.style.display = "none";
  dialogueContainer.style.display = "flex";

  setTimeout(() => location.reload(), 3000);
}

function showErrorDialogueBox(text) {
  errorDialogueBox.style.display = "block";
  overlayBox.style.display = "block";
  errorText.innerText = text;
}

function validateForm(e) {
  e.preventDefault();
  if (!validateEmail()) {
    showErrorDialogueBox("You have entered an invalid email address");
    return;
  }

  if (!validateMobile()) {
    showErrorDialogueBox("You have entered an invalid Mobile number");
    return;
  }
  showDialogBox();
}

function hideErrorBox() {
  errorDialogueBox.style.display = "none";
  overlayBox.style.display = "none";
}

email.addEventListener("blur", validateEmail);
mobileNumber.addEventListener("blur", validateMobile);
submitBtn.addEventListener("click", validateForm);
errorBtn.addEventListener("click", hideErrorBox);
