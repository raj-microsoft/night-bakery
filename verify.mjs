import { chromium } from '@playwright/test';
import { mkdirSync, writeFileSync } from 'node:fs';
mkdirSync('verification',{recursive:true});
const url=process.argv[2]||'http://127.0.0.1:4173/night-bakery/';
const browser=await chromium.launch({executablePath:'C:\\Program Files (x86)\\Microsoft\\Edge\\Application\\msedge.exe',headless:true});
const results=[]; let links=[];
for(const width of [1440,390]){
 const page=await browser.newPage({viewport:{width,height:1000},reducedMotion:'reduce'}); const errors=[];page.on('pageerror',e=>errors.push(e.message));
 const response=await page.goto(url,{waitUntil:'networkidle'});await page.evaluate(()=>document.fonts.ready);
 await page.screenshot({path:`verification/${width}-full.png`,fullPage:true});
 await page.screenshot({path:`verification/${width}-hero.png`});
 const overflow=await page.evaluate(()=>({viewport:innerWidth,scroll:document.documentElement.scrollWidth}));
 await page.getByRole('tab',{name:'Pastries'}).click();await page.getByRole('heading',{name:'Night bun',exact:true}).waitFor();
 await page.getByRole('tab',{name:'Drinks'}).focus();await page.keyboard.press('Enter');await page.getByRole('heading',{name:'Night filter',exact:true}).waitFor();
 await page.getByRole('button',{name:'04:00 Good things take the quiet hours.'}).click();await page.getByText('Our fictional baker, Noor, shapes',{exact:false}).waitFor();
 await page.getByText('Can I visit or order?',{exact:true}).click();await page.getByText('Nachtbakkerij, Lichtdam',{exact:false}).waitFor();
 await page.getByText('How this was made',{exact:true}).click();await page.getByText('Step 4 — real 21st.dev components.',{exact:false}).waitFor();
 const images=await page.locator('img').evaluateAll(async imgs=>{imgs.forEach(i=>i.loading='eager');await Promise.all(imgs.map(i=>i.decode().catch(()=>{})));return imgs.every(i=>i.complete&&i.naturalWidth>0)});
 const nextCount=await page.locator('.next-batch').count();
 const reduced=await page.evaluate(()=>getComputedStyle(document.documentElement).scrollBehavior);
 const sticky=await page.locator('header').evaluate(el=>({position:getComputedStyle(el).position,top:el.getBoundingClientRect().top}));
 const anchors=await page.locator('a[href^="#"]').evaluateAll(as=>as.map(a=>({href:a.getAttribute('href'),exists:a.hash===''||!!document.getElementById(a.hash.slice(1))})));
 links=await page.locator('a[href^="https:"]').evaluateAll(as=>[...new Set(as.map(a=>a.href))]);
 writeFileSync(`verification/rendered-${width}.html`,await page.content());
 results.push({width,status:response.status(),overflow,errors,images,nextCount,reduced,sticky,anchors:anchors.every(a=>a.exists),featureCards:await page.locator('.feature-card').count(),interactions:'menu categories, keyboard tab, story accordion, FAQ, attribution disclosure passed'});
 await page.close();
}
const motionPage=await browser.newPage({viewport:{width:390,height:844},reducedMotion:'no-preference'});await motionPage.goto(url,{waitUntil:'networkidle'});await motionPage.locator('.feature-grid').scrollIntoViewIfNeeded();await motionPage.waitForTimeout(600);const motionCheck=await motionPage.locator('.feature-card').evaluateAll(els=>els.map(e=>({opacity:getComputedStyle(e).opacity,transform:getComputedStyle(e).transform})));await motionPage.close();
await browser.close();writeFileSync('verification/results.json',JSON.stringify({results,motionCheck,links},null,2));console.log(JSON.stringify({results,motionCheck,links},null,2));if(results.some(r=>r.status!==200||r.errors.length||r.overflow.scroll>r.width||!r.images||r.nextCount!==1||!r.anchors||r.featureCards!==3))process.exit(1);
