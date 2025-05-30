const dayEl = document.getElementById("day");
const monthEl = document.getElementById("month");
const yearEl = document.getElementById("year");
const ageButton = document.getElementById("sub");

const daysEl = document.getElementById("days");
const monthsEl = document.getElementById("months");
const yearsEl = document.getElementById("years");

const dayContainer = document.getElementById("day-container");
const monthContainer = document.getElementById("month-container");
const yearContainer = document.getElementById("year-container");

function dateIsvalid() {
  if (
    dayEl.value > 31 ||
    dayEl.value < 1 ||
    monthEl.value > 12 ||
    yearEl.value > new Date().getFullYear()
  ) {
    return false;
  }
  return true;
}

ageButton.addEventListener("click", function () {
  const birthDate = new Date(yearEl.value, monthEl.value - 1, dayEl.value); // Correct Date format
  const currentDate = new Date();

  if (!dateIsvalid()) {
    if (dayEl.value > 31 || dayEl.value < 1) {
      document.querySelector(".day-warning").classList.remove("invisible");
      document.querySelector(".day-label").classList.add("warning");
      dayEl.classList.add("warning");
    }
    if (monthEl.value > 12 || monthEl.value < 1) {
      document.querySelector(".month-warning").classList.remove("invisible");
      document.querySelector(".month-label").classList.add("warning");
      monthEl.classList.add("warning");
    }
    if (yearEl.value > new Date().getFullYear || yearEl.value < 1) {
      document.querySelector(".year-warning").classList.remove("invisible");
      document.querySelector(".year-label").classList.add("warning");
      yearEl.classList.add("warning");
    }
    return;
  } else {
    document.querySelector(".day-warning").classList.add("invisible");
    document.querySelector(".day-label").classList.remove("warning");
    dayEl.classList.remove("warning");

    document.querySelector(".month-warning").classList.add("invisible");
    document.querySelector(".month-label").classList.remove("warning");
    monthEl.classList.remove("warning");

    document.querySelector(".year-warning").classList.add("invisible");
    document.querySelector(".year-label").classList.remove("warning");
    yearEl.classList.remove("warning");

    let years = currentDate.getFullYear() - birthDate.getFullYear();
    let months = currentDate.getMonth() - birthDate.getMonth();
    let days = currentDate.getDate() - birthDate.getDate();

    if (days < 0) {
      months -= 1;
      days += new Date(
        currentDate.getFullYear(),
        currentDate.getMonth(),
        0
      ).getDate();
    }

    if (months < 0) {
      years -= 1;
      months += 12;
    }

    daysEl.textContent = days;
    monthsEl.textContent = months;
    yearsEl.textContent = years;
  }
});
