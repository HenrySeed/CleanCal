const $ = document.querySelector.bind(document);
const h = (tag) => document.createElement(tag);

const text_labels = ["MON", "TUE", "WED", "THU", "FRI", "SAT", "SUN"];
const dayLabels = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];
const monthLabels = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];

// -- setup

const labels = $("#calendar .labels");
const dates = $("#calendar .dates");
const monthLabel = $("#calendar .monthLabel");
const dayLabel = $("#calendar .dayLabel");
const dateLabel = $("#calendar .dateLabel");

const dateObj = new Date();

// Label Generator
monthLabel.textContent = monthLabels[dateObj.getMonth()];
dayLabel.textContent = dayLabels[dateObj.getDay()];
dateLabel.textContent = dateObj.getDate();

// Calender Generator
const lspan = Array.from({ length: 7 }, () => {
  return labels.appendChild(h("span"));
});

const dspan = Array.from({ length: 42 }, () => {
  return dates.appendChild(h("span"));
});

// apply day labels
lspan.forEach((el, idx) => {
  el.textContent = text_labels[idx % 7];
});

// apply date labels (very naiive way, pt 1)
const cal = calendarize(dateObj);

cal.forEach((week, weekIndex) => {
  week.forEach((day, dayIndex) => {
    const dayElem = dspan[weekIndex * 7 + dayIndex];
    dayElem.textContent = week[dayIndex] > 0 ? week[dayIndex] : "";
    if (week[dayIndex] === dateObj.getDate()) {
      dayElem.style.color = "#de5331";
    }
  });
});
