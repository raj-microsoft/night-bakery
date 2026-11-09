import { chromium } from '@playwright/test';
// Edge's --window-size has a minimum headless window width on Windows.
// A real 390px viewport override avoids a clipped 500px screenshot.
const browser=await chromium.launch({executablePath:'C:\\Program Files (x86)\\Microsoft\\Edge\\Application\\msedge.exe',headless:true});
try{for(const width of [1440,390]){
 const page=await browser.newPage({viewport:{width,height:1000},deviceScaleFactor:1});
 await page.goto('https://raj-microsoft.github.io/night-bakery/',{waitUntil:'networkidle'});await page.evaluate(()=>document.fonts.ready);await page.locator('video').waitFor();await page.waitForFunction(()=>document.querySelector('video')?.currentTime>.2);
 await page.screenshot({path:`verification/live-edge-${width}.png`});console.log(width,await page.evaluate(()=>({viewport:innerWidth,scroll:document.documentElement.scrollWidth})));await page.close();
}}finally{await browser.close()}
