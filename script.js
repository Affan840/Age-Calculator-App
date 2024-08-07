let dayInput = document.querySelector("#day");
let monthInput = document.querySelector("#month");
let yearInput = document.querySelector("#year");
let btn = document.querySelector("button");
let msg = document.querySelectorAll(".msg");
let span = document.querySelectorAll("span");

let date = new Date();

let valid = 0;

function handleSubmit() {
           span[0].innerText = `--`;
           span[1].innerText = `--`;
           span[2].innerText = `--`;
           valid = 0;
  dateValidator(dayInput.value);
  monthValidator(monthInput.value);
  yearValidator(yearInput.value);


  if (
    valid == 3
  ) {
    displayAge(dayInput.value, monthInput.value, yearInput.value);
  }
}

function dateValidator(dateValue) {
  if (!dateValue) {
        msg[0].textContent = "This field is required";
  } else if (dateValue < 1 || dateValue > 31) {
    msg[0].textContent = "Must be a valid date";
  } else if (
    dateValue < 1 ||
    dateValue > getDaysInMonth(yearInput.value, monthInput.value)
  ) {
    msg[0].textContent = "Must be a valid day";
  } else if (
    yearInput.value == date.getFullYear() &&
    monthInput.value == date.getMonth() + 1 &&
    dateValue > date.getDate()
  ) {
      msg[0].textContent = "Must be in past";

  } else {
    msg[0].textContent = "";
    valid++;
  }
}

function monthValidator(monthValue) {
    if (!monthValue) {
        msg[1].textContent = "This field is required";
    } else if (monthValue < 1 || monthValue > 12) {
        msg[1].textContent = "Must be a valid month";
    } else if (
      yearInput.value == date.getFullYear() &&
      monthValue > date.getMonth() + 1
    ) {
      msg[1].textContent = "Must be in past";
    } else {
      msg[1].textContent = "";
      valid++;
    }
}

function yearValidator(yearValue) {
    
  if (!yearValue) {
        msg[2].textContent = "This field is required";
  } else if (yearValue < 1900) {
    msg[2].textContent = "Must be a valid year";
} else if (yearValue < 1900 || yearValue > date.getFullYear()) {
    msg[2].textContent = "Must be in past";
  } else {
    msg[2].textContent = "";
    valid++;
  }
}
function getDaysInMonth(year, month) {
  return new Date(year, month, 0).getDate();
}

function displayAge(dayInput, monthInput , yearInput){
     let birthDate = new Date(yearInput, monthInput - 1, dayInput);
     let currentDate = new Date();

     let years = currentDate.getFullYear() - birthDate.getFullYear();
     let months = currentDate.getMonth() - birthDate.getMonth();
     let days = currentDate.getDate() - birthDate.getDate();

     if (days < 0) {
       months--;
       days += getDaysInMonth(
         currentDate.getFullYear(),
         currentDate.getMonth() - 1
       );
     }

     if (months < 0) {
       years--;
       months += 12;
     }

       span[0].innerText = `${years}`;
       span[1].innerText = `${months}`;
       span[2].innerText = `${days}`;
}

btn.addEventListener("click", () => {
  handleSubmit();
});
