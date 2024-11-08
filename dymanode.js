const http = require("http");

const responses = {
  "/home": "<h1>Page d'accueil</h1>",
  "/contact": "<h1>Contactez-nous</h1>",
};

http
  .createServer((req, res) => {
    const content = responses[req.url] || "<p>Not found</p>";
    const statusCode = content === "<p>Not found</p>" ? 404 : 200;
    res.writeHead(statusCode, { "Content-Type": "text/html" });
    res.end(content);
  })
  .listen(3000);
