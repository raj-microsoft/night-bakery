"""Original synthetic oven still life. No external imagery. Seeded reproducibly."""
from PIL import Image, ImageDraw, ImageFilter
import math, random
from pathlib import Path
random.seed(21)
W,H=1800,1080
im=Image.new('RGB',(W,H)); px=im.load()
for y in range(H):
 for x in range(W):
  glow=math.exp(-(((x-1120)/690)**2+((y-500)/500)**2))
  hot=math.exp(-(((x-1330)/330)**2+((y-480)/230)**2))
  n=random.uniform(-2,2)
  px[x,y]=(int(39+95*glow+67*hot+n),int(23+39*glow+34*hot+n),int(25+17*glow+n))
d=ImageDraw.Draw(im)
# Stone oven joints recede into the lit opening.
for row in range(5):
 y=80+row*115
 d.line((0,y,W,y), fill=(53+row*4,32+row*2,28),width=3)
 for x in range(-130 if row%2 else 0,W,260): d.line((x,y,x,y+115),fill=(59,35,29),width=3)
# Dark baking deck and textured flour.
d.polygon([(0,810),(1800,710),(1800,1080),(0,1080)],fill=(64,39,33))
for i in range(12000):
 x=random.randrange(W); y=random.randrange(780,H)
 v=random.randrange(50,96); d.point((x,y),fill=(v,int(v*.67),int(v*.51)))
# Artisan loaves: organic silhouette, baked irregular crust and open scores.
def loaf(cx,cy,rx,ry,angle):
 layer=Image.new('RGBA',(rx*2+80,ry*2+100)); p=layer.load(); center=(rx+40,ry+40)
 for y in range(layer.height):
  for x in range(layer.width):
   dx=(x-center[0])/rx; dy=(y-center[1])/ry; theta=math.atan2(dy,dx)
   radius=dx*dx+dy*dy
   edge=1+.025*math.sin(theta*9)+.016*math.cos(theta*17)
   if radius<edge:
    z=math.sqrt(max(0,1-radius/edge)); light=.32+.68*z
    noise=random.uniform(-17,17); blister=14*math.sin(x*.17)*math.cos(y*.11)
    p[x,y]=(int(max(0,min(255,199*light+noise+blister))),int(max(0,min(255,111*light+noise*.6))),int(max(0,min(255,46*light+noise*.3))),255)
 ld=ImageDraw.Draw(layer)
 for j in range(4):
  x=55+j*(rx*2-70)/4
  pts=[]
  for k in range(41):
   yy=center[1]-ry*.53+k*ry*.026
   xx=x+32*math.sin(k/40*math.pi)+k*.65
   pts.append((xx,yy))
  ld.line(pts, fill=(73,36,19),width=20)
  ld.line([(x-5,y-5) for x,y in pts],fill=(231,182,117),width=10)
 for i in range(1600):
  x=random.randrange(25,layer.width-25); y=random.randrange(20,layer.height-25)
  if layer.getpixel((x,y))[3] and random.random()<.38:
   ld.ellipse((x,y,x+random.choice([1,1,2]),y+1),fill=(243,209,155,160))
 layer=layer.rotate(angle,resample=Image.Resampling.BICUBIC,expand=True)
 shadow=Image.new('RGBA',im.size); sd=ImageDraw.Draw(shadow); sd.ellipse((cx-rx-15,cy+ry*.3,cx+rx+20,cy+ry+35),fill=(15,9,13,170)); shadow=shadow.filter(ImageFilter.GaussianBlur(23)); im.paste(shadow,(0,0),shadow)
 im.paste(layer,(int(cx-layer.width/2),int(cy-layer.height/2)),layer)
loaf(1260,704,330,141,-12)
loaf(910,854,350,165,11)
# Fine warm photographic-style finish, explicitly labeled synthetic.
Path('public').mkdir(exist_ok=True)
im.save('public/oven-still-life.webp',quality=92)
