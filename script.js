//task 1
// const http = require("http");
// const os = require("os");

// http
//   .createServer(function (request, response) {

//     response.writeHead(200, { "Content-Type": "text/html" });
//     response.write(
//       `<h1>System information</h1>
//     <p>Current user name: ${os.hostname()}</p>
//     <p>Os type: ${os.type()}</p>
//         <p>System work time: ${os.uptime() / 60} minutes</p>
//         <p>Current work directory: ${__dirname}</p>
//         <p>Server file name: ${__filename}</p>
//         `
//     );

//     response.end();
//   })
//   .listen(5000);
// console.log("server is working at http://127.0.0.1:5000/");

//task 2
// const http = require("http");
// const os = require("os");
// const personalmod = require("./personalmodule");
// http
//   .createServer(function (request, response) {
//     response.writeHead(200, { "Content-Type": "text/html" });
//     const username = os.hostname();
//     response.write(personalmod.dateData(username));
//     response.end();
//   })
//   .listen(8000);
// console.log("server is working at http://127.0.0.1:8000/");
