const dailyBtn = document.getElementById("daily");
const weeklyBtn = document.getElementById("weekly");
const monthlyBtn = document.getElementById("monthly");
const daily = document.querySelectorAll(".daily");
const weekly = document.querySelectorAll(".weekly");
const monthly = document.querySelectorAll(".monthly");

dailyBtn.addEventListener("click", () => {
  daily.forEach((daily) => {
    daily.classList.add("display");
    daily.classList.remove("hide");
  });
  weekly.forEach((weekly) => {
    weekly.classList.add("hide");
    weekly.classList.remove("display");
  });
  monthly.forEach((monthly) => {
    monthly.classList.add("hide");
    monthly.classList.remove("display");
  });
});

weeklyBtn.addEventListener("click", () => {
  daily.forEach((daily) => {
    daily.classList.add("hide");
    daily.classList.remove("display");
  });
  weekly.forEach((weekly) => {
    weekly.classList.add("display");
    weekly.classList.remove("hide");
  });
  monthly.forEach((monthly) => {
    monthly.classList.add("hide");
    monthly.classList.remove("display");
  });
});

monthlyBtn.addEventListener("click", () => {
  daily.forEach((daily) => {
    daily.classList.add("hide");
    daily.classList.remove("display");
  });
  weekly.forEach((weekly) => {
    weekly.classList.add("hide");
    weekly.classList.remove("display");
  });
  monthly.forEach((monthly) => {
    monthly.classList.add("display");
    monthly.classList.remove("hide");
  });
});
