const puppeteer = require('puppeteer');
const fs = require('fs');

const lerArquivo = (path)=>{
    return fs.readFileSync(`${__dirname}/${path}`, 'utf-8')
       .split('\n')
       .map((elt) => {
           const url = elt
           return url
       });
};

const urls = lerArquivo('./urls.csv');


    (async () => {
        const browser = await puppeteer.launch({ headless: false });
        const page = await browser.newPage();
        
        for (let i = 0; i < urls.length; i++) {
            const url = urls[i];
            await page.goto(`${url}`);
            console.log(`Pagina ${i} - Navegando em: ${url}`);
            await page.waitForTimeout(2000);
        }
        await browser.close();
    })();