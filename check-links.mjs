import {readFileSync,writeFileSync} from 'node:fs';
const {links}=JSON.parse(readFileSync('verification/results.json','utf8'));
const results=[];
for(const url of links){
 const response=await fetch(url,{redirect:'follow'});
 results.push({url,status:response.status,finalUrl:response.url});
 console.log(response.status,url);
 await response.arrayBuffer();
 if(response.status===429)throw Error('Rate limited; Retry-After: '+response.headers.get('retry-after'));
 await new Promise(resolve=>setTimeout(resolve,300));
}
writeFileSync('verification/links.json',JSON.stringify(results,null,2));
if(results.some(r=>r.status!==200))process.exit(1);
