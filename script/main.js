/*
###
title : Real time project 
discription : null 
Author = Sajjad Hasan Riyad
github :https://github.com/shviper
date : 05/11/2022
###
*/
setInterval(() => {
  // time variable
  const hourse = document.getElementById("hourse");
  const minute = document.getElementById("minute");
  const secound = document.getElementById("secound");
  const month = document.getElementById("month");
  const day = document.getElementById("day");
  const year = document.getElementById("year");
  const date = new Date();
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
  //   display time
  hourse.innerText =
    date.getHours() < 10 ? `0${date.getHours()}` : date.getHours();
  minute.innerText =
    date.getMinutes() < 10 ? `0${date.getMinutes()}` : date.getMinutes();
  secound.innerText =
    date.getSeconds() < 10 ? `0${date.getSeconds()}` : date.getSeconds();
  month.innerText = months[date.getMonth()];
  day.innerText = date.getDay() < 10 ? `0${date.getDay()}` : date.getDay();
  year.innerText =
    date.getFullYear() < 10 ? `0${date.getFullYear()}` : date.getFullYear();
}, 1000);
