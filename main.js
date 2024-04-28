const dailyBtn = document.getElementById("daily");
const weeklyBtn = document.getElementById("weekly");
const monthlyBtn = document.getElementById("monthly");
const daily = document.querySelectorAll(".daily");
const weekly = document.querySelectorAll(".weekly");
const monthly = document.querySelectorAll(".monthly");

function weeklyDefault() {
  dailyBtn.classList.remove("button-active");
  weeklyBtn.classList.add("button-active");
  monthlyBtn.classList.remove("button-active");
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
}

weeklyDefault();

dailyBtn.addEventListener("click", () => {
  dailyBtn.classList.add("button-active");
  weeklyBtn.classList.remove("button-active");
  monthlyBtn.classList.remove("button-active");
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
  dailyBtn.classList.remove("button-active");
  weeklyBtn.classList.add("button-active");
  monthlyBtn.classList.remove("button-active");
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
  dailyBtn.classList.remove("button-active");
  weeklyBtn.classList.remove("button-active");
  monthlyBtn.classList.add("button-active");
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

fetch("/data.json")
  .then((request) => {
    if (!request.ok) {
      console.log("Oops! Something went wrong.");
      return null;
    }
    return request.json();
  })
  .then((data) => {
    const workData = data[0];
    const workTitle = document.querySelectorAll(".workTitle");
    workTitle.forEach((workTitle) => {
      workTitle.textContent = workData.title;
    });
    const playData = data[1];
    const playTitle = document.querySelectorAll(".playTitle");
    playTitle.forEach((playTitle) => {
      playTitle.textContent = playData.title;
    });
    const studyData = data[2];
    const studyTitle = document.querySelectorAll(".studyTitle");
    studyTitle.forEach((studyTitle) => {
      studyTitle.textContent = studyData.title;
    });
    const exerciseData = data[3];
    const exerciseTitle = document.querySelectorAll(".exerciseTitle");
    exerciseTitle.forEach((exerciseTitle) => {
      exerciseTitle.textContent = exerciseData.title;
    });
    const socialData = data[4];
    const socialTitle = document.querySelectorAll(".socialTitle");
    socialTitle.forEach((socialTitle) => {
      socialTitle.textContent = socialData.title;
    });
    const selfCareData = data[5];
    const selfCareTitle = document.querySelectorAll(".self-care-title");
    selfCareTitle.forEach((selfCareTitle) => {
      selfCareTitle.textContent = selfCareData.title;
    });
  });
