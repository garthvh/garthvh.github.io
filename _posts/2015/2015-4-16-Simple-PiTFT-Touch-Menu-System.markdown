---
layout: post
published: true
comments: true
title: Simple PiTFT Touch Menu System
categories: [raspberrypi,linux]
year: 2015
month: 4
day: 16
summary: Simple PiTFT Touch Menu System
image: post_three.jpg
---

Just completed a simple touch menu for Raspberry Pi projects using the [3.5" Adafruit PiTFT](http://www.adafruit.com/products/2097) 480x320 touch screen.

Runs as a python script in the framebuffer without needing a desktop environment.

I have made a model b+ [Touch Pi](https://learn.adafruit.com/touch-pi-portable-raspberry-pi) 3D printed case for my screen and raspberry pi, and with a battery and [PowerBoost 500c](https://www.adafruit.com/product/1944) charger it makes a great base for raspberry pi projects.

I wanted a way to do common tasks like going to the desktop, rebooting and shutting down without needing to use a keyboard.  I also wanted the screen to display the current IP address to make it easier to ssh into the device.

![Touch Pi Menu](/assets/img/menu_touchpi.jpg "Touch Pi Menu")

You can get the source code from [github](https://github.com/garthvh/pitftmenu).
