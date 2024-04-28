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
    document.getElementById("work-daily").textContent =
      workData.timeframes.daily.current;
    document.getElementById("work-daily-last").textContent =
      workData.timeframes.daily.previous;
    document.getElementById("work-weekly").textContent =
      workData.timeframes.weekly.current;
    document.getElementById("work-weekly-last").textContent =
      workData.timeframes.weekly.previous;
    document.getElementById("work-monthly").textContent =
      workData.timeframes.monthly.current;
    document.getElementById("work-monthly-last").textContent =
      workData.timeframes.monthly.previous;
    const workTitle = document.querySelectorAll(".work-title");
    workTitle.forEach((workTitle) => {
      workTitle.textContent = workData.title;
    });
    const playData = data[1];
    document.getElementById("play-daily").textContent =
      playData.timeframes.daily.current;
    document.getElementById("play-daily-last").textContent =
      playData.timeframes.daily.previous;
    document.getElementById("play-weekly").textContent =
      playData.timeframes.weekly.current;
    document.getElementById("play-weekly-last").textContent =
      playData.timeframes.weekly.previous;
    document.getElementById("play-monthly").textContent =
      playData.timeframes.monthly.current;
    document.getElementById("play-monthly-last").textContent =
      playData.timeframes.monthly.previous;
    const playTitle = document.querySelectorAll(".play-title");
    playTitle.forEach((playTitle) => {
      playTitle.textContent = playData.title;
    });
    const studyData = data[2];
    document.getElementById("study-daily").textContent =
      studyData.timeframes.daily.current;
    document.getElementById("study-daily-last").textContent =
      studyData.timeframes.daily.previous;
    document.getElementById("study-weekly").textContent =
      studyData.timeframes.weekly.current;
    document.getElementById("study-weekly-last").textContent =
      studyData.timeframes.weekly.previous;
    document.getElementById("study-monthly").textContent =
      studyData.timeframes.monthly.current;
    document.getElementById("study-monthly-last").textContent =
      studyData.timeframes.monthly.previous;
    const studyTitle = document.querySelectorAll(".study-title");
    studyTitle.forEach((studyTitle) => {
      studyTitle.textContent = studyData.title;
    });
    const exerciseData = data[3];
    document.getElementById("exercise-daily").textContent =
      exerciseData.timeframes.daily.current;
    document.getElementById("exercise-daily-last").textContent =
      exerciseData.timeframes.daily.previous;
    document.getElementById("exercise-weekly").textContent =
      exerciseData.timeframes.weekly.current;
    document.getElementById("exercise-weekly-last").textContent =
      exerciseData.timeframes.weekly.current;
    document.getElementById("exercise-monthly").textContent =
      exerciseData.timeframes.monthly.current;
    document.getElementById("exercise-monthly-last").textContent =
      exerciseData.timeframes.monthly.previous;
    const exerciseTitle = document.querySelectorAll(".exercise-title");
    exerciseTitle.forEach((exerciseTitle) => {
      exerciseTitle.textContent = exerciseData.title;
    });
    const socialData = data[4];
    document.getElementById("social-daily").textContent =
      socialData.timeframes.daily.current;
    document.getElementById("social-daily-last").textContent =
      socialData.timeframes.daily.previous;
    document.getElementById("social-weekly").textContent =
      socialData.timeframes.weekly.current;
    document.getElementById("social-weekly-last").textContent =
      socialData.timeframes.weekly.current;
    document.getElementById("social-monthly").textContent =
      socialData.timeframes.monthly.current;
    document.getElementById("social-monthly-last").textContent =
      socialData.timeframes.monthly.previous;
    const socialTitle = document.querySelectorAll(".social-title");
    socialTitle.forEach((socialTitle) => {
      socialTitle.textContent = socialData.title;
    });
    const selfCareData = data[5];
    document.getElementById("self-care-daily").textContent =
      selfCareData.timeframes.daily.current;
    document.getElementById("self-care-daily-last").textContent =
      selfCareData.timeframes.daily.previous;
    document.getElementById("self-care-weekly").textContent =
      selfCareData.timeframes.weekly.current;
    document.getElementById("self-care-weekly-last").textContent =
      selfCareData.timeframes.weekly.current;
    document.getElementById("self-care-monthly").textContent =
      selfCareData.timeframes.monthly.current;
    document.getElementById("self-care-monthly-last").textContent =
      selfCareData.timeframes.monthly.previous;
    const selfCareTitle = document.querySelectorAll(".self-care-title");
    selfCareTitle.forEach((selfCareTitle) => {
      selfCareTitle.textContent = selfCareData.title;
    });
  });
