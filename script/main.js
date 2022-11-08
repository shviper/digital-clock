/*
###
title : Real time project 
discription : null 
Author = Sajjad Hasan Riyad
github :https://github.com/shviper
date : 05/11/2022
###
*/
const timeDiv = document.querySelector(".time");
const dateDiv = document.querySelector(".date");
// days array
const days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
// month array
const months = [
  "Jan",
  "Feb",
  "Mar",
  "Apr",
  "May",
  "Jun",
  "Jul",
  "Aug",
  "Sep",
  "Oct",
  "Nov",
  "Dec",
];
function setTime() {
  const time = new Date();
  const month = time.getMonth();
  const day = time.getDay();
  const date = time.getDate();
  const hours = time.getHours();
  const hoursForClock = hours >= 13 ? hours % 12 : hours;
  const minutes = time.getMinutes();
  // const seconds = time.getSeconds();
  const ampm = hours >= 12 ? "PM" : "AM";

  //   display time
  timeDiv.innerHTML = `${hoursForClock}:${
    minutes < 10 ? `0${minutes}` : minutes
  } ${ampm}`;
  dateDiv.innerHTML = `${days[day]} ${months[month]} ${
    date < 10 ? `0${date}` : date
  }`;
}
setTime();
setInterval(setTime, 1000);
