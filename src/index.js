// const http = require("http");

// const server = http.createServer(async (req, res) => {
//   if (req.method === "GET" && req.url === "/") {
//     res.end();
//   }
// });
// server.listen(3000, () => {
//   console.log("this is the server listening at port 3000");
// });
const app = require("./server");

app.listen(3000, () => {
  console.log("hello World");
});
