import puppeteer from 'puppeteer-core';
import lighthouse, { desktopConfig } from 'lighthouse';
import {writeFileSync} from 'node:fs';
const url=process.argv[2]||'https://raj-microsoft.github.io/night-bakery/';
const label=process.argv[3]||'live';
const browser=await puppeteer.launch({executablePath:'C:\\Program Files (x86)\\Microsoft\\Edge\\Application\\msedge.exe',headless:true,pipe:true});
const page=await browser.newPage();
try {
 for(const desktop of [false,true]){
  const result=await lighthouse(url,{output:['json','html'],logLevel:'error',onlyCategories:['performance','accessibility','best-practices','seo'],...(desktop?{formFactor:'desktop'}:{})},desktop?desktopConfig:undefined,page);
  const mode=desktop?'desktop':'mobile';
  writeFileSync(`verification/lighthouse-${label}-${mode}.json`,result.report[0]);
  writeFileSync(`verification/lighthouse-${label}-${mode}.html`,result.report[1]);
  console.log(mode,JSON.stringify(Object.fromEntries(Object.entries(result.lhr.categories).map(([k,v])=>[k,v.score*100]))));
  console.log('metrics',JSON.stringify(Object.fromEntries(['first-contentful-paint','largest-contentful-paint','total-blocking-time','cumulative-layout-shift','speed-index'].map(k=>[k,result.lhr.audits[k].displayValue]))));
  console.log('failures',JSON.stringify(Object.values(result.lhr.audits).filter(a=>a.score!==null&&a.score<.9).map(a=>({id:a.id,score:a.score,display:a.displayValue,details:a.details?.items?.slice(0,3)}))));
 }
}finally{await browser.close()}
