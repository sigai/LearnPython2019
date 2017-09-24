from PIL import Image, ImageDraw, ImageFont

img = Image.open('baby.jpg')
draw = ImageDraw.Draw(img)
myfont = ImageFont.truetype("/System/Library/Fonts/Courier.dfont", size=80)
fillcolor = "#ff0000"
width, height = img.size
draw.text((40,40),'hello', font=myfont, fill=fillcolor)
img.save('result.jpg','jpeg')