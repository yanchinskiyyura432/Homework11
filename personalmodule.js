const os = require("os");

function dateData(name) {
  let date = new Date();
  let currentHour = date.getHours();
  switch (true) {
    case currentHour >= 23 && currentHour <= 24:
      return `<p>Date of request: ${date.toDateString()} ${currentHour} : ${date.getMinutes()} : ${date.getSeconds()}</p>
        <p>Good day, ${name}</p>`;

    case currentHour >= 0 && currentHour <= 5:
      return `<p>Date of request: ${date.toDateString()} ${currentHour} : ${date.getMinutes()} : ${date.getSeconds()}</p>
        <p>Good day, ${name}</p>`;

    case currentHour >= 5 && currentHour <= 11:
      return `<p>Date of request: ${date.toDateString()} ${currentHour} : ${date.getMinutes()} : ${date.getSeconds()}</p>
        <p>Good morning, ${name}</p>`;

    case currentHour >= 11 && currentHour <= 17:
      return `<p>Date of request: ${date.toDateString()} ${currentHour} : ${date.getMinutes()} : ${date.getSeconds()}</p>
        <p>Good afternoon, ${name}</p>`;

    case currentHour >= 17 && currentHour <= 23:
      return `<p>Date of request: ${date.toDateString()} ${currentHour} : ${date.getMinutes()} : ${date.getSeconds()}</p>
        <p>Good evening, ${name}</p>`;
  }
}
module.exports.dateData = dateData;
