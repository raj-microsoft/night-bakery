import {spawnSync} from 'node:child_process';
import {resolve} from 'node:path';
for(const width of [1440,390]){
 const args=['--headless=new','--disable-gpu','--hide-scrollbars','--force-device-scale-factor=1',`--user-data-dir=${resolve(`verification/edge-rework-${width}`)}`,`--window-size=${width},1000`,'--virtual-time-budget=5000',`--screenshot=${resolve(`verification/live-edge-${width}.png`)}`,'https://raj-microsoft.github.io/night-bakery/'];
 const result=spawnSync('C:\\Program Files (x86)\\Microsoft\\Edge\\Application\\msedge.exe',args,{timeout:45000,encoding:'utf8'});
 console.log(width,'exit',result.status,(result.stderr||'').split('\n').filter(l=>/bytes written|ERROR/.test(l)).slice(-4).join('\n'));
 if(result.status!==0)process.exitCode=1;
}
