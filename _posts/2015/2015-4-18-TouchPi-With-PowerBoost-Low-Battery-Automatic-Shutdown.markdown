---
layout: post
published: true
comments: true
title: TouchPi with PowerBoost Low Battery Automatic Shutdown
categories: [raspberrypi,linux,powerboost]
year: 2015
month: 4
day: 18
summary: Shut down your TouchPi automatically when the battery runs low.
---

Part of the reason I bought a 3D Printer was to add some polish and portability to Raspberry Pi and Arduino projects, my favorite of those projects has been the 3D Printed [Touch Pi](https://learn.adafruit.com/touch-pi-portable-raspberry-pi) battery powered Raspberry Pi case with [Adafruit 3.5" PiTFT Touchscreen](http://www.adafruit.com/products/2097).

After building a Raspberry Pi laptop with a Motorola LapDock I have been looking for a reasonable way to make the Pi more portable.  Even when it worked the LapDock based laptop was a loosely connected horror of strange cables and adaptors and Konami code like startup sequences.

I also saw the [Pi-Top](http://www.pi-top.com/product) laptop, but it costs more than my ChromeBook 2 did and is huge.  I have the small keyboard and mouse in the original Pi-Top kit and really just wanted a way to do simple tasks like opening the desktop, restarting, shutting down or setting up wifi without having to use the keyboard at all.

For about a hundred bucks the Touch Pi is a really nice way to have a neatly contained battery powered portable raspbery pi with touchscreen.  Wanting to learn a little bit of python I took a few different projects and cobbled together a menu for my Touch Pi to handle many common tasks, as well as displaying the hostname and IP address to make it easier to connect to the Touch Pi remotely.

<img alt="Touch Pi Menu" src="http://garthvh.com/assets/img/touchpi/menu_touchpi.jpg" class="img-responsive img-rounded" />

You can find the code for the menu here [Simple PiTFT TouchPi Menu System](https://github.com/garthvh/pitftmenu).

After using my new menu for a few days I found the awesome [PiFi](https://github.com/vicwomg/pifi.py) project and added a WiFi Settings button that runs the PiFi python script. My only issue with the Touch Pi at this point was that it would shut down without warning when running on the battery.

I read a bit a about setting up some sort of battery indicator using the PowerBoost and it looked annoying, so I soldered half a female jumper wire to the [LBO - Low Battery Output pin](https://learn.adafruit.com/adafruit-powerboost-500-plus-charger/pinouts) on my PowerBoost and plugged it into pin 21 (Bottom Right Pin) of the GPIO on my B+. The documentation of the LBO pin appears to be cut off in adafruit's docs, but it does say the pin defaults to high. One of my favorite things about the pi and adafruit products, is that the little bit of documentation available is really all I needed to know to get started.

<img alt="Touch Pi LBO GPIO Wiring" src="http://garthvh.com/assets/img/touchpi/menu_touchpi_3.jpg" class="img-responsive img-rounded" />

To see how the LBO pin behaved I wrote a small python script and saved it on my pi.  I then ran it from a SSH session on my desktop so that I could see the output from just before the battery died. When running the following script I would see 6-9 Pin Low prints before the pi powered off (60-80 seconds before powerdown)

    import RPi.GPIO
    import time
    RPi.GPIO.setmode (RPi.GPIO.BCM)

    RPi.GPIO.setup(21, RPi.GPIO.IN, pull_up_down=RPi.GPIO.PUD_UP)

    while True:
      if RPi.GPIO.input(21) == RPi.GPIO.LOW:
          print ("Pin Low")
          time.sleep(10)

      if RPi.GPIO.input(21) == RPi.GPIO.HIGH:
          now = time.strftime("%c")
          print ("Pin High " + now )
          time.sleep(60)

The LBO pin returned High when my touch pi battery switch was turned off and the unit was being powered from the regular micro usb power port, and while the switch was turned on an the battery had enough power for the pi.  The LBO input switched to low when the battery was only able to power the Pi for about another 60 seconds. This would be perfect for setting up automated shutdown in the menu. I put together a bit of python code that runs in the menu's while loop

    # LBO Pin from Powerboost setup before while loop
    RPi.GPIO.setmode (RPi.GPIO.BCM)
    RPi.GPIO.setup(21, RPi.GPIO.IN, pull_up_down=RPi.GPIO.PUD_UP)


    # Inside loop
    if RPi.GPIO.input(21) == RPi.GPIO.LOW:
        screen.fill(black)
        font=pygame.font.Font(None,48)
        label=font.render("Battery Low, Shutting down", 1, (white))
        screen.blit(label,(20,120))
        pygame.display.flip()
        time.sleep(10)
        pygame.quit()
        shutdown()
        sys.exit()

I ran the battery out on my Touch Pi, and then charged it for about 20 minutes and started it up. A few minutes starting up I saw the following:

<img alt="Touch Pi Low Battery shutdown screen" src="http://garthvh.com/assets/img/touchpi/menu_touchpi_4.jpg" class="img-responsive img-rounded" />

I ran the battery out a few times with the actual shutdown function line commented out, and it showed the low battery screen moments before the pi abruptly powered off every time.

I am sure my approach here is not great for battery life, but I don't know anything about writing battery efficient python code at this point.

<div class="callout callout-info">
   <h4>Don't have a 3D Printer?</h4>
   <p>Get a printed touch pi case for your project in the <a href="http://www.garthvh.com/store">project store</a></p>
 </div>
