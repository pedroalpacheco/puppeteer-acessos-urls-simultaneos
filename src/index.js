const fs = require('fs');
const puppeteer = require('puppeteer');

const lerArquivo = (path)=>{
    return fs.readFileSync(`${__dirname}/${path}`, 'utf-8')
       .split('\n')
       .map((elt) => {
           const url = elt
           return url
       });
};

const urls = lerArquivo('./urls.csv');

const navega = async (url)=>{
    const browser = await puppeteer.launch({ headless: false });
    const page = await browser.newPage();
    await page.goto(`${url}`);
    await console.log(`Navegando em: ${url}`);
    await page.waitForTimeout(2000);
    await browser.close();
};

urls.map((nv)=>{
    navega(nv);
})





