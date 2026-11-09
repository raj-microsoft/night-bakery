import { chromium } from '@playwright/test';
import {writeFileSync,readFileSync,readdirSync} from 'node:fs';
const browser=await chromium.launch({executablePath:'C:\\Program Files (x86)\\Microsoft\\Edge\\Application\\msedge.exe',headless:true});
const page=await browser.newPage({viewport:{width:1440,height:1000},reducedMotion:'reduce'});
await page.goto('http://127.0.0.1:4173/night-bakery/',{waitUntil:'networkidle'});
await page.getByText('How this was made',{exact:true}).click();
const measurements=await page.evaluate(()=>[...document.querySelectorAll('.menu-section,.voices-section,.subscription-section,.faq-list,.faq-list details,.visit-section')].map(e=>{const s=getComputedStyle(e);const child=e.firstElementChild;return {className:e.className,tag:e.tagName,padding:s.padding,textInset:child?Math.round(child.getBoundingClientRect().left-e.getBoundingClientRect().left):null}}));
// Flatten computed styles on a detached clone so the static detector can read
// logical CSS properties, custom tokens and inner-shell insets accurately.
const html=await page.evaluate(()=>{const clone=document.documentElement.cloneNode(true);const originals=[...document.querySelectorAll('body *')],copies=[...clone.querySelectorAll('body *')];originals.forEach((e,i)=>{const s=getComputedStyle(e);for(const p of ['padding-top','padding-right','padding-bottom','padding-left','font-size','letter-spacing','background-color','color'])copies[i].style.setProperty(p,s.getPropertyValue(p))});clone.querySelectorAll('script,link[rel="stylesheet"]').forEach(e=>e.remove());return '<!doctype html>'+clone.outerHTML});
const css=readFileSync('docs/assets/'+readdirSync('docs/assets').find(x=>x.endsWith('.css')),'utf8');
writeFileSync('verification/detector.html',html.replace('</head>','<style>'+css+'</style></head>'));
writeFileSync('verification/spacing-measurements.json',JSON.stringify(measurements,null,2));
console.log(measurements);await browser.close();
