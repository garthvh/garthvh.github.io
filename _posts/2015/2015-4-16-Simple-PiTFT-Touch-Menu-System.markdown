---
layout: post
published: true
title: Simple PiTFT Touch Menu System
categories: [raspberrypi, linux]
year: 2015
month: 4
day: 16
summary: Simple PiTFT Touch Menu System
redirect_from: /raspberrypi/linux/2015/04/16/Simple-PiTFT-Touch-Menu-System/
---

Just completed a simple touch menu for Raspberry Pi projects using the [3.5" Adafruit PiTFT](http://www.adafruit.com/products/2097) 480x320 touch screen.

Runs as a python script in the framebuffer without needing a desktop environment.

I have made a model b+ [Touch Pi](https://learn.adafruit.com/touch-pi-portable-raspberry-pi) 3D printed case for my screen and raspberry pi, and with a battery and [PowerBoost 500c](https://www.adafruit.com/product/1944) charger it makes a great base for raspberry pi projects.

I wanted a way to do common tasks like going to the desktop, rebooting and shutting down without needing to use a keyboard.  I also wanted the screen to display the current IP address to make it easier to ssh into the device.

<img src="/assets/img/touchpi/menu_touchpi_2.jpg" alt="Touch Pi Menu" class="img-responsive img-rounded" />

You can get the source code from [github](https://github.com/garthvh/pitftmenu).

Featured on the adafruit blog for pi day:
<div class="row">
	<div class="col-sm-8 col-sm-offset-2">
		<blockquote class="twitter-tweet" lang="en">
			<p lang="ht" dir="ltr">Simple PiTFT TouchPi Menu System <a href="https://twitter.com/hashtag/piday?src=hash">#piday</a> <a href="https://twitter.com/hashtag/raspberrypi?src=hash">#raspberrypi</a> <a href="https://twitter.com/Raspberry_Pi">@Raspberry_Pi</a> <a href="http://t.co/JT9CbFiwvz">http://t.co/JT9CbFiwvz</a></p>&mdash; adafruit industries (@adafruit) <a href="https://twitter.com/adafruit/status/596675973615071232">May 8, 2015</a></blockquote>
		<script async src="//platform.twitter.com/widgets.js" charset="utf-8"></script>
	</div>
</div>
