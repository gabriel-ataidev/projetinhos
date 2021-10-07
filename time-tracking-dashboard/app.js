const data = [
  {
    title: "Work",
    timeframes: {
      daily: {
        current: 5,
        previous: 7,
      },
      weekly: {
        current: 32,
        previous: 36,
      },
      monthly: {
        current: 103,
        previous: 128,
      },
    },
  },
  {
    title: "Play",
    timeframes: {
      daily: {
        current: 1,
        previous: 2,
      },
      weekly: {
        current: 10,
        previous: 8,
      },
      monthly: {
        current: 23,
        previous: 29,
      },
    },
  },
  {
    title: "Study",
    timeframes: {
      daily: {
        current: 0,
        previous: 1,
      },
      weekly: {
        current: 4,
        previous: 7,
      },
      monthly: {
        current: 13,
        previous: 19,
      },
    },
  },
  {
    title: "Exercise",
    timeframes: {
      daily: {
        current: 1,
        previous: 1,
      },
      weekly: {
        current: 4,
        previous: 5,
      },
      monthly: {
        current: 11,
        previous: 18,
      },
    },
  },
  {
    title: "Social",
    timeframes: {
      daily: {
        current: 1,
        previous: 3,
      },
      weekly: {
        current: 5,
        previous: 10,
      },
      monthly: {
        current: 21,
        previous: 23,
      },
    },
  },
  {
    title: "Self Care",
    timeframes: {
      daily: {
        current: 0,
        previous: 1,
      },
      weekly: {
        current: 2,
        previous: 2,
      },
      monthly: {
        current: 7,
        previous: 11,
      },
    },
  },
];
const contentContainer = document.querySelector(".content-container");
for (let i = 0; i < data.length; i++) {
  const dailyBtn = document.querySelector(".daily");
  dailyBtn.addEventListener("click", showDailyValues);
  const weeklyBtn = document.querySelector(".weekly");
  weeklyBtn.addEventListener("click", showWeeklyValues);
  const monthlyBtn = document.querySelector(".monthly");
  monthlyBtn.addEventListener("click", showMonthlyValues);
  function showDailyValues() {
    if (data[i].timeframes.daily.current <= 1) {
      currentH1.innerText = `${data[i].timeframes.daily.current}hr`;
    } else {
      currentH1.innerText = `${data[i].timeframes.daily.current}hrs`;
    }
    if (data[i].timeframes.daily.previous <= 1) {
      text.innerText = `Last Day - ${data[i].timeframes.daily.previous}hr`;
    } else {
      text.innerText = `Last Day - ${data[i].timeframes.daily.previous}hrs`;
    }
  }
  function showWeeklyValues() {
    currentH1.innerText = `${data[i].timeframes.weekly.current}hrs`;
    text.innerText = `Last Week - ${data[i].timeframes.weekly.previous}hrs`;
  }
  function showMonthlyValues() {
    currentH1.innerText = `${data[i].timeframes.monthly.current}hrs`;
    text.innerText = `Last Month - ${data[i].timeframes.monthly.previous}hrs`;
  }
  const timeCardDiv = document.createElement("div");
  timeCardDiv.classList.add("time-card");
  contentContainer.appendChild(timeCardDiv);
  const timeContentDiv = document.createElement("div");
  timeContentDiv.classList.add("time-content");
  timeCardDiv.appendChild(timeContentDiv);
  const workDiv = document.createElement("div");
  workDiv.classList.add("work");
  timeContentDiv.appendChild(workDiv);
  const titleSpan = document.createElement("span");
  titleSpan.classList.add("title");
  workDiv.appendChild(titleSpan);
  titleSpan.innerText = data[i].title;
  const dotsSpan = document.createElement("span");
  dotsSpan.classList.add("dots");
  workDiv.appendChild(dotsSpan);
  dotsSpan.innerText = "•••";
  const timeDiv = document.createElement("div");
  timeDiv.classList.add("time");
  timeContentDiv.appendChild(timeDiv);
  const currentH1 = document.createElement("h1");
  currentH1.classList.add("current");
  timeDiv.appendChild(currentH1);
  currentH1.innerText = `${data[i].timeframes.weekly.current}hrs`;
  const text = document.createElement("p");
  text.classList.add("text");
  timeDiv.appendChild(text);
  text.innerText = `Last Week - ${data[i].timeframes.weekly.previous}hrs`;
}
