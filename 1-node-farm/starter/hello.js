// const fs = require("fs");
// const http = require("http");
// const url = require("url");
// // FIles
// //Sync way
// // const text = fs.readFileSync("./txt/input.txt", "utf-8");
// // console.log(text);
// // const textOut = `this is what we added to avocado: ${text} .\nCreated on ${new Date()}`;
// // fs.writeFileSync("./txt/output.txt", textOut);

// //async way

// // fs.readFile("./txt/starwet.txt", "utf-8", (err, data) => {
// //   // if (err) return console.log("Error ");
// //   fs.readFile(`./txt/${data}.txt`, "utf-8", (err1, data1) => {
// //     console.log(data1);
// //     fs.readFile("./txt/append.txt", "utf-8", (err2, data2) => {
// //       console.log(data2);
// //       fs.writeFile(
// //         "./txt/newOutput.txt",
// //         `${data1}\n${data2}`,
// //         "utf-8",
// //         (err) => {
// //           console.log("your file has been written :)");
// //         }
// //       );
// //     });
// //   });
// // });

// //```````````````````````````````````````````````````````````````//

// //server

// // const server = http.createServer((request, response) => {
// //   response.end("Server has loaded");
// // });

// // server.listen(8000, "127.0.0.1", () => {
// //   console.log("Listening to port 8000");
// // sum = (arr) => {
// //   var sum1 = 0;
// //   for (let i = 0; i < arr.length; i++) {
// //     var a = arr[i] + arr[i++];
// //     sum1 = Math.max(sum1, a);
// //     console.log("i   " + i + "    sum1 " + sum1 + "--------  " + a);
// //   }
// //   return sum1;
// // };
// // console.log(sum([16, 4, 15]));

// // max = function (array, n) {
// //   var maxNum = 0;

// //   var numArray = array;
// //   numArray.sort(function (a, b) {
// //     return a - b;
// //   });

// //   var a = numArray[array.length - 1] + numArray[array.length - 2];
// //   return a;
// // };

// // console.log(max([2, 1, 4], 2));

// //

// // function MyFunction(array, num) {
// //   var MaxSum = 0;

// //   for (let i = 0; i <= num; i++) {
// //     MaxSum = array[i] + array[i + 1];
// //   }
// //   return MaxSum;
// // }

// // console.log(MyFunction([1, 8, 7, 4], 3));

// // Server

// const server = http.createServer((req, res) => {
//   const path = req.url;

//   if (path == "/overview" || path == "/") {
//     res.end("This is a overview");
//   } else if (path == "/product") {
//     res.end("This is a product");
//   } else {
//     res.writeHead(404, {
//       "Content-type": "text/html",
//       "my-header": "Ankit",
//     });
//     res.end("<h1>Not Found</h1>");
//   }
// });

// server.listen(8080, "127.0.0.1", () => {
//   console.log("Server listening to port 8080");
// });
