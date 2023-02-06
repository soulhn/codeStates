const http = require("http");
const PORT = 4999;
const ip = "localhost";

const server = http.createServer((request, response) => {
  console.log(`http request method is ${request.method}, url is ${request.url}`);
  //작성 코드(메서드, URL, HEADER)
  const { method, url, headers } = request;
  if (method === "OPTIONS") {
    response.writeHead(200, defaultCorsHeader);
    response.end("hello mini-server sprints");
  }
  if (method === "POST") {
    let body = [];
    request.on("data", (chunk) => {
      body.push(chunk);
    });
    request.on("end", () => {
      body = Buffer.concat(body).toString();
      response.writeHead(200, defaultCorsHeader);
      console.log(body);
      if (url === "/lower") {
        response.end(body.toLowerCase());
      } else if (url === "/upper") {
        console.log(body.toUpperCase());
        response.end(body.toUpperCase());
      } else {
        response.statusCode = 400;
        response.end();
      }
    });
  } else {
    response.statusCode = 400;
    response.end();
  }

  // if (request.method === "POST" && request.url === "/lower") {
  //   console.log("lower요청");
  //   console.log(request.body);
  // } else if (request.method === "POST" && request.url === "/upper") {
  //   console.log("upper요청");
  // } else {
  //   console.log("error");
  // }
});

server.listen(PORT, ip, () => {
  console.log(`http server listen on ${ip}:${PORT}`);
});

const defaultCorsHeader = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Methods": "GET, POST, PUT, DELETE, OPTIONS",
  "Access-Control-Allow-Headers": "Content-Type, Accept",
  "Access-Control-Max-Age": 10,
};
