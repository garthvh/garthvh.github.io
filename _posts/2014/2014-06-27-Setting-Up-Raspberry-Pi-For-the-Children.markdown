---
layout: post
title: Setting Up Raspberry Pi For the Children
categories: [raspberrypi, linux]
year: 2014
month: 6
day: 27
published: true
summary: Learning a little Linux again.
redirect_from: /raspberrypi/linux/2014/06/27/Setting-Up-Raspberry-Pi-For-the-Children/
---

I have not played with linux in probably 10 years, when i did then everything was a hassle. I made a firewall media server device out of a loud and huge dell power edge server. After buying a raspberry pi for my daughter and I to play with I was amazed at how easy it is to install and update linux now, especially on something with common hardware like the pi.

First thing is to download the newest version of  [Raspbian](https://www.raspberrypi.org/downloads/)  from the Raspberry PI foundation and put it on your sd card.

Start up your pi and log in with user pi password raspberry, once logged in type the following command to open raspi-config.

    sudo raspi-config

Once you are in the configuration wizard expand the file system, overclock your pi if you want, and if you are in the US update region, timezone and keyboard settings if you are in the US. Make sure and change the default password.

Tab over to finished in the raspi-config and reboot your pi. Log in again with your new password and run the following commands in order to get the latest updates on your pi. Each of these may take a while to run depending on how fast your SD card is and how much you overclocked your pi.

    sudo apt-get update
    sudo apt-get dist-upgrade
    sudo rpi-update

If you want to use scratch with the GPIO ports on your raspberry pi install [Scratch GPIO](http://simplesi.net/scratchgpio/scratch-raspberrypi-gpio/)

    sudo wget http://goo.gl/Pthh62 -O isgh5.sh
    sudo bash isgh5.sh

The PiGlow board works with Scratch, fits nicely in the pibow case and has many lights. Run the following commands to get your piglow all ready to use.

    sudo apt-get install i2c-tools
    sudo apt-get install python-smbus
    wget https://github.com/heeed/pi2c/raw/master/pi2c.sh
    sudo bash pi2c.sh
    mkdir piglow
    cd piglow

Now that we have everything all set up lets run some example code from the internet. A quick warning, the PiGlow is really bright especially the three center white LEDS don’t look directly at it when you first run the scripts or you may see black spots for a bit.

    wget https://github.com/pimoroni/piglow/raw/master/examples/piglow-example.py
    sudo python piglow-example.py

    #more piglow python examples
    wget https://github.com/Boeeerb/PiGlow/raw/master/piglow.py

    #python psutil for cpu example
    sudo apt-get install python-psutil
    wget https://github.com/Boeeerb/PiGlow/raw/master/Examples/all.py
    wget https://github.com/Boeeerb/PiGlow/raw/master/Examples/arm.py
    wget https://github.com/Boeeerb/PiGlow/raw/master/Examples/clock.py
    wget https://github.com/Boeeerb/PiGlow/raw/master/Examples/cpu.py
    wget https://github.com/Boeeerb/PiGlow/raw/master/Examples/cycle.py
    wget https://github.com/Boeeerb/PiGlow/raw/master/Examples/cycle2.py
    wget https://github.com/Boeeerb/PiGlow/raw/master/Examples/halloween.py
    wget https://github.com/Boeeerb/PiGlow/raw/master/Examples/indiv.py
    wget https://github.com/Boeeerb/PiGlow/raw/master/Examples/indiv2.py
    wget https://github.com/Boeeerb/PiGlow/raw/master/Examples/test.py
