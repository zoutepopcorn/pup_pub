const express = require('express');
const http = require('http');
const app = express();
const server = http.createServer(app);
const browser = require("./browser");

app.use(express.static('public'));
server.listen(3000);

log = (msg) => {
  console.log(msg);
}


(async () => {
  await browser.init();
  page = new browser.Page();
  await page.open("http://localhost:3000/test.html");

})();
