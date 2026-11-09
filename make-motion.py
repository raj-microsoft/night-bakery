"""Local fallback after Gemini rejected both JPEG and PNG attachments.
Locked camera; periodic steam wisps and small, spatially masked oven-light change.
No generative-video claim. Frames are piped directly to ffmpeg; no frame payloads.
"""
from PIL import Image, ImageDraw, ImageFilter
import math, subprocess
from pathlib import Path
im=Image.open('verification/originals/hero.jpg').convert('RGB').resize((1280,720),Image.Resampling.LANCZOS)
w,h=im.size
mask=Image.new('L',(w,h));d=ImageDraw.Draw(mask);d.ellipse((870,65,1360,460),fill=190);mask=mask.filter(ImageFilter.GaussianBlur(75))
light=Image.new('RGB',(w,h),(255,167,70))
out=Path('public/images');out.mkdir(exist_ok=True)
p=subprocess.Popen(['ffmpeg','-y','-loglevel','error','-f','rawvideo','-vcodec','rawvideo','-pix_fmt','rgb24','-s','1280x720','-r','24','-i','-','-an','-c:v','libx264','-preset','slow','-crf','25','-pix_fmt','yuv420p','-movflags','+faststart',str(out/'oven-desktop.mp4')],stdin=subprocess.PIPE)
for n in range(192):
 phase=n/192;frame=Image.blend(im,Image.composite(light,im,mask),.018+.016*math.sin(phase*math.tau*3)+.008*math.sin(phase*math.tau*7))
 steam=Image.new('RGBA',(w,h));draw=ImageDraw.Draw(steam)
 for j in range(9):
  progress=(phase+j/9)%1;alpha=int(19*math.sin(progress*math.pi)**2);x0=805+(j%3)*49;y0=345-progress*194
  points=[(x0+math.sin(k/8+progress*math.tau+j)*12+k*.17,y0-k*2.2) for k in range(46)]
  draw.line(points,fill=(245,235,219,alpha),width=7)
 steam=steam.filter(ImageFilter.GaussianBlur(7));frame=Image.alpha_composite(frame.convert('RGBA'),steam).convert('RGB');p.stdin.write(frame.tobytes())
p.stdin.close();assert p.wait()==0
subprocess.run(['ffmpeg','-y','-loglevel','error','-i',str(out/'oven-desktop.mp4'),'-vf','scale=768:432','-an','-c:v','libx264','-preset','slow','-crf','27','-pix_fmt','yuv420p','-movflags','+faststart',str(out/'oven-mobile.mp4')],check=True)
print([(f.name,f.stat().st_size) for f in out.glob('*.mp4')])
