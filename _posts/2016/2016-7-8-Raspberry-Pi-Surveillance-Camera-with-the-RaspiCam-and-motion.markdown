---
layout: post
published: false
title: Raspberry Pi Surveillance Camera with the RaspiCam and motion
categories: [linux, raspberrypi]
year: 2016
month: 7
day: 9
summary: Build your own Raspberry Pi Surveillance Camera with the RaspiCam and motion
---

## 3D Printed Case

I have wanted to build a motion activated and time lapse capable raspberry pi camera for a while now but never really found a case I like. I found this [nice case](http://www.thingiverse.com/thing:1622184) for a raspberry pi and camera on thingiverse.  It was designed for a specific fisheye camera but looking at the model it appeared that one of the cheap chinese fisheye cell phone lenses I have would fit nicely in the hole.  

I fired up tinkercad and used my calipers to measure the space inside the camera case and the thickness of the RaspiCam board and [created a model](http://www.thingiverse.com/thing:1664023) to mount the official RaspiCam.  I used two small pieces of gaffers tape to attach the camera to the support piece, snapped the lens into the hole in the case and slid the camera into the case.


## Software Setup

Since I didn't need a desktop OS for this project I downloaded the [Raspbian Jessie Lite](https://www.raspberrypi.org/downloads/raspbian/) image and installed it on a SD card using Disk Image Writer in Ubuntu. Once I booted up the raspberry pi I used raspi-config to expand the file system, set internationalization options for keyboard, time and wifi, enabled the camera, overclocked the CPU and enabled SSH.

The next thing I did was to disable the camera LED since I didn't want the camera to indicate that it was on.

    // Edit the config.txt file
    sudo nano /boot/config.txt

    // Add the following line
    disable_camera_led=1

The standard version of motion from apt does not work with the RaspiCam module, but there is a community supported version that has been compiled for use with the RaspiCam.  There is more information on a wiki [here](http://wiki.raspberrytorte.com/index.php?title=Motion_MMAL).

    // Install the motion prerequisites
    sudo apt-get install -y libjpeg-dev libavformat56 libavformat-dev libavcodec56 libavcodec-dev libavutil54 libavutil-dev libc6-dev zlib1g-dev libmysqlclient18 libmysqlclient-dev libpq5 libpq-dev 
    
    // Download and unzip the raspberry pi specific motion binary
    wget https://www.dropbox.com/s/6ruqgv1h65zufr6/motion-mmal-lowflyerUK-20151114.tar.gz
    tar -zxvf motion-mmal-lowflyerUK-20151114.tar.gz

    // Test out the results
    $ ./motion -c motion-mmalcam-both.conf

If you see success messages logged in the terminal after running motion, point your web browser to the ip of the raspberry pi port 8081 and you should see your camera streaming.

