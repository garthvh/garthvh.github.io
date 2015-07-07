---
layout: post
published: true
comments: true
title: Building the Ciclop 3d Scanner Part 3 Laser Cutting and Electronics
categories: [ciclop,printrbot,ponoko,arduino]
year: 2015
month: 6
day: 25
summary: Building the Ciclop 3d Scanner Part 3 Laser Cutting and Electronics
---

One of the final pieces that I had not figured out for my [Ciclop Scanner](http://www.thingiverse.com/thing:740357) was the 200MM diameter laser cut acrylic turntable disc. There were laser cutting services available from some people I had met at a 3D printing workshop and at local makerspaces but I wanted to try and find a more universal option.  

I found [Ponoko](https://www.ponoko.com/) which is an online 3D printing and laser cutting service and marketplace and tried submitting the file from the BQ Ciclop Github.  I Received and error with some helpful links I ignored and promptly sent an email with my file asking what was wrong. I received a quick response to my email containing the helpful links again and the hint that the main issue with my file was the line colors. This time I read the helpful links and realized that I needed to change the color of the lines in the disc file to blue.

I used freecad to change the line to the correct color and resubmitted the file successfully. I have uploaded my awesome disc with blue lines ready for ponoko here: [Disc File](http://www.thingiverse.com/thing:896443).  If you sign up for Ponoko your first $20 is free so with the discount the disc cost me $28.39 shipped.

The other remaining piece was how to replace the BQ Zum 328 arduino board since it is not available in the US.  Lucky for me while I have been working on this project Adafruit released a new arduino uno clone called the [Metro](https://www.adafruit.com/product/2488).  The main issue with my current uno clone for the Ciclop is the USB B connection which hits the bottom of the zum scan shield and requires the use of a cable with a large connector.  The metro board has a micro usb connection, and because it is entirely made of surface mount components the bottom is totally flat.  

<img alt="Metro Mount" src="//garthvh.com/assets/img/ciclop/ciclop_metro_mount_2.jpg" class="img-responsive img-rounded" />

The camera mount stl files contain board pins that match the pattern for holes on the bq zum 328 arduino clone.  While you could modify the cad files to include the pin pattern for the regular arduino instead I don't really like PLA pins as they are really brittle.  I found an amazing [mount on thingiverse](http://www.thingiverse.com/thing:770664) that allowed me to clip off the pins on my camera mount and attach my Metro. I printed the mount using [Taulman Alloy 910](http://taulman3d.com/alloy-910-spec.html) which is flexible and makes super strong pins.  The mount fits tight on the rectangular piece that had the pins on the camera mount.

<img alt="Metro Mount" src="//garthvh.com/assets/img/ciclop/ciclop_metro_mount_1.jpg" class="img-responsive img-rounded" />

I was able to easily install the firmware for the scanner on my metro using the Horus scanning software, now I have just to wait for the disc, lasers and some power connectors to arrive and I should be ready to scan. I could not find any English discussion of the jumpers on the zum scan board, but I was able to read enough Spanish in the Ciclop google group to determine that i wanted to have all three jumpers in place on the X motor driver to get a smooth rotation of the platform.
