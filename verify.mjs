import { chromium } from '@playwright/test';
import { mkdirSync, writeFileSync } from 'node:fs';
mkdirSync('verification',{recursive:true});
const url=process.argv[2]||'http://127.0.0.1:5173/night-bakery/';
const browser=await chromium.launch({executablePath:'C:\\Program Files (x86)\\Microsoft\\Edge\\Application\\msedge.exe',headless:true});
const results=[];
for(const width of [1440,390]){
 const page=await browser.newPage({viewport:{width,height:1000},reducedMotion:'reduce'}); const errors=[];page.on('pageerror',e=>errors.push(e.message));
 const response=await page.goto(url,{waitUntil:'networkidle'});await page.evaluate(()=>document.fonts.ready);
 await page.screenshot({path:`verification/${width}-full.png`,fullPage:true});
 await page.screenshot({path:`verification/${width}-hero.png`});
 const overflow=await page.evaluate(()=>({viewport:innerWidth,scroll:document.documentElement.scrollWidth}));
 await page.getByRole('tab',{name:'Pastries'}).click();await page.getByRole('heading',{name:'Night bun',exact:true}).waitFor();
 await page.getByRole('tab',{name:'Drinks'}).focus();await page.keyboard.press('Enter');await page.getByRole('heading',{name:'Night filter',exact:true}).waitFor();
 await page.getByRole('button',{name:'04:00 Good things take the quiet hours.'}).click();await page.getByText('Our fictional baker, Noor, shapes',{exact:false}).waitFor();
 await page.getByText('How this was made',{exact:true}).click();await page.getByText('OpenClaw’s coding agent substitutes',{exact:false}).waitFor();
 const images=await page.locator('img').evaluateAll(imgs=>imgs.every(i=>i.complete&&i.naturalWidth>0));
 const nextCount=await page.locator('.next-batch').count();
 const reduced=await page.evaluate(()=>getComputedStyle(document.documentElement).scrollBehavior);
 const content=await page.content();writeFileSync(`verification/rendered-${width}.html`,content);
 results.push({width,status:response.status(),overflow,errors,images,nextCount,reduced,interactions:'menu categories, keyboard tab, story accordion, attribution disclosure passed'});
 await page.close();
}
await browser.close();writeFileSync('verification/results.json',JSON.stringify(results,null,2));console.log(JSON.stringify(results,null,2));if(results.some(r=>r.status!==200||r.errors.length||r.overflow.scroll>r.width||!r.images||r.nextCount!==1))process.exit(1);
