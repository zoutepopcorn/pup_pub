const puppeteer = require('puppeteer');
const ARGS = {
  headless: false,
  args: ['--no-sandbox']
};
let page = null;

function Webpage() {
  console.log(8);
  let browser;
  let page;
  this.init = async () => {
    console.log("browsewr");
    browser = await puppeteer.launch(ARGS);
    page = await browser.newPage();
  }

  this.open = async () => {
    await page.goto(url);
    await page.screenshot({
      path: 'example.png'
    });
    // await browser.close();
  }

  // init().then(() => console.log("haaai")).catch(() => console.log("catch page open"));

}


module.exports = Webpage;

/*async function Webpage() {
  console.log("Webpage()");
  let browser = null;
  let page = null;

  async function start () {
      browser = await puppeteer.launch({
          headless: false,
          args: ['--no-sandbox']
      });
      page = await browser.newPage();
      await page.goto(URL, {
        waitUntil: 'networkidle'
      });
  }

  async function waitSel(sel) {
      await page.waitFor(sel);
  }

  async function getSel(sel) {
      return document.querySelector(sel);
  }

  function test() {
      return " hoi";
  }
}*/
