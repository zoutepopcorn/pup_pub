const puppeteer = require('puppeteer');
const ARGS = {
  headless: false,
  args: ['--no-sandbox']
};
let browser;


init = async () => {
  console.log("browsewr");
  browser = await puppeteer.launch(ARGS);
}

function Page() {
  let page;
  this.open = async (url) => {
    console.log(`lalal`);
    page = await browser.newPage();
    await page.goto(url);
  }
  this.log = (cb) => {
    page.on('console', msg => {
      console.log(msg);
      let txt = msg.text;
      cb(txt);
    });
  }


}


module.exports.Page = Page;
module.exports.init = init;
