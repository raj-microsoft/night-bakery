from PIL import Image
from pathlib import Path
import hashlib, json
source=Path('verification/originals'); dest=Path('public/images');dest.mkdir(exist_ok=True)
manifest=[]
def save(im,name,widths):
 for w in widths:
  w=min(w,im.width); out=im.resize((w,round(im.height*w/im.width)),Image.Resampling.LANCZOS)
  path=dest/f'{name}-{w}.webp';out.save(path,'WEBP',quality=78,method=6)
  manifest.append({'file':str(path),'bytes':path.stat().st_size,'width':out.width,'height':out.height,'sha256':hashlib.sha256(path.read_bytes()).hexdigest()})
if (source/'hero.jpg').exists(): save(Image.open(source/'hero.jpg'),'hero',[960,1672])
if (source/'menu.jpg').exists():
 im=Image.open(source/'menu.jpg'); names=['sourdough','rye','focaccia','bun','croissant','pear','filter','flat-white','chocolate']
 for i,name in enumerate(names):
  x=i%3;y=i//3; tile=im.crop((round(x*im.width/3),round(y*im.height/3),round((x+1)*im.width/3),round((y+1)*im.height/3)))
  save(tile,name,[240,480])
if (source/'scenes.jpg').exists():
 im=Image.open(source/'scenes.jpg')
 for i in range(4):
  x=i%2;y=i//2;tile=im.crop((round(x*im.width/2),round(y*im.height/2),round((x+1)*im.width/2),round((y+1)*im.height/2)))
  save(tile,f'scene-{i}',[480,768])
if (source/'exterior.jpg').exists():save(Image.open(source/'exterior.jpg'),'exterior',[960,1672])
Path('verification/image-manifest.json').write_text(json.dumps(manifest,indent=2))
print(json.dumps(manifest,indent=2))
