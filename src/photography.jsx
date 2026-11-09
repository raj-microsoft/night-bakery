import React, { useEffect, useRef, useState } from 'react';
import { useReducedMotion } from 'framer-motion';
const base=import.meta.env.BASE_URL+'images/';
export const menuPhotos={
 'Canal sourdough':['sourdough','Flour-dusted sourdough with a deeply golden crust'],
 'Midnight rye':['rye','Sliced dark rye loaf with caraway seeds'],
 'Rosemary focaccia':['focaccia','Olive-oil focaccia with rosemary and sea salt'],
 'Night bun':['bun','Twisted cardamom bun scattered with pearl sugar'],
 'Daybreak croissant':['croissant','Golden butter croissant with crisp flaky layers'],
 'Pear pocket':['pear','Roasted pear slices nestled in golden puff pastry'],
 'Night filter':['filter','Black filter coffee in a speckled ceramic cup'],
 'Oat flat white':['flat-white','Oat flat white with leaf-shaped latte art'],
 'Dark hot chocolate':['chocolate','Dark hot chocolate dusted with cocoa']
};
export const sceneAlts=['Resting dough and flour on a wooden bench in the evening light','Sliced rye beside the warm canal window at midnight','Anonymous flour-dusted hands shaping a sourdough loaf before dawn','Golden croissants and coffee beside the canal at daybreak'];
export function MenuPhoto({name}){const [file,alt]=menuPhotos[name];return <img className="menu-photo" src={`${base}${file}-240.webp`} srcSet={`${base}${file}-240.webp 240w, ${base}${file}-418.webp 418w`} sizes="(max-width:600px) 80px, 112px" width="418" height="418" alt={alt+' (AI-generated)'} loading="lazy" decoding="async"/>}
export function ScenePhoto({index}){return <img className="scene-photo" src={`${base}scene-${index}-480.webp`} srcSet={`${base}scene-${index}-480.webp 480w, ${base}scene-${index}-768.webp 768w`} sizes="(max-width:767px) calc(100vw - 96px), 540px" width="768" height="512" alt={sceneAlts[index]+' (AI-generated)'} loading="lazy" decoding="async"/>}
export function VisitPhoto(){return <img className="visit-photo" src={`${base}exterior-960.webp`} srcSet={`${base}exterior-960.webp 960w, ${base}exterior-1672.webp 1672w`} sizes="100vw" width="1672" height="941" alt="An imaginary bakery glows beside a quiet canal at night; no real-world location (AI-generated)" loading="lazy" decoding="async"/>}
export function OvenMedia(){
 const reduce=useReducedMotion(),video=useRef(null);const [ready,setReady]=useState(false),[paused,setPaused]=useState(false);
 useEffect(()=>{if(reduce||navigator.connection?.saveData)return;const start=()=>setReady(true);let timer;const schedule=()=>{timer=setTimeout(start,2500)};if(document.readyState==='complete')schedule();else window.addEventListener('load',schedule,{once:true});return()=>{clearTimeout(timer);window.removeEventListener('load',schedule)}},[reduce]);
 useEffect(()=>{const v=video.current;if(!v)return;const io=new IntersectionObserver(([e])=>{if(e.isIntersecting&&!paused&&!document.hidden)v.play().catch(()=>{});else v.pause()});io.observe(v);const visibility=()=>{if(document.hidden)v.pause();else if(!paused)v.play().catch(()=>{})};document.addEventListener('visibilitychange',visibility);return()=>{io.disconnect();document.removeEventListener('visibilitychange',visibility)}},[ready,paused]);
 return <><img src={`${base}hero-1672.webp`} srcSet={`${base}hero-960.webp 960w, ${base}hero-1672.webp 1672w`} sizes="(max-width:767px) calc(100vw - 48px), calc(100vw - 112px)" className="oven-image" alt="Warm sourdough loaves on a peel at a glowing deck oven, a blue canal window behind (AI-generated)" width="1672" height="941" fetchPriority="high" decoding="async"/>{ready&&!reduce&&<><video ref={video} className="oven-video" autoPlay muted loop playsInline preload="none" poster={`${base}hero-960.webp`} aria-hidden="true"><source src={`${base}oven-mobile.mp4`} media="(max-width:767px)" type="video/mp4"/><source src={`${base}oven-desktop.mp4`} type="video/mp4"/></video><button className="motion-toggle" onClick={()=>setPaused(v=>!v)} aria-label={paused?'Play oven animation':'Pause oven animation'}>{paused?'Play motion':'Pause motion'}</button></>}</>
}
