---
layout: post
published: false
title: Raspberry Pi Surveillance and Timelapse Camera with the RaspiCam
categories: [linux, raspberrypi, 3dprinting]
year: 2016
month: 7
day: 12
summary: Build your own Raspberry Pi Surveillance and Timelapse Camera with the RaspiCam
---


<img alt="Pi Cam Assembly" src="/assets/img/picam/picam_1.jpg" class="img-responsive img-rounded" />

I have wanted to build a motion activated and time lapse capable raspberry pi camera for a while now but never really found a case I like. I found this [nice case](http://www.thingiverse.com/thing:1622184) for a raspberry pi and camera on thingiverse.  It was designed for a specific fisheye camera but looking at the model it appeared that one of the cheap Chinese fish eye  cell phone lenses I have would fit nicely in the hole.  

I fired up tinkercad and used my calipers to measure the space inside the camera case and the thickness of the RaspiCam board and [created a model](http://www.thingiverse.com/thing:1664023) to mount the official RaspiCam.  I used two small pieces of gaffers tape to attach the camera to the support piece, snapped the lens into the hole in the case and slid the camera into the case.

This is really a nice simple project, any raspberry pi and camera case will work, you will also need:

* Raspberry Pi Model B or B+, 2 or 3
* Raspberry Pi Camera Board
* Raspberry Pi Camera Cable
* Button - I used on of [these](https://www.adafruit.com/products/1489)
* 2 Female Jumper wires
* Cell Phone Fisheye lens
* SD Card 


## Halt Button
I soldered a couple of female jumper wires to a small momentary switch to use to halt the pi for both the surveillance and timelapse setups.  For the timelapse software I am using the code from [this Adafruit project](https://learn.adafruit.com/raspberry-pi-wearable-time-lapse-camera) which includes code for a halt button.

 I have stripped this script of the time lapse features for use on the surveillance camera.  Because I wanted both of these camera projects to automatically start on boot I have chosen to have two SD cards set up with raspbian lite that automatically boot into either the surveillance or timelapse camera mode. The button is connected to gpio 21 and ground on the pi, the last two pins next to the usb ports.


## Motion Camera Software Setup
<div class="row">
    
    <div class="col-md-7">
        <p>
        Since I didn't need a desktop OS for this project I downloaded the <a href="https://www.raspberrypi.org/downloads/raspbian/">Raspbian Jessie Lite</a> image and installed it on a SD card using Disk Image Writer in Ubuntu. </p>
        <p>Once I booted up the raspberry pi I used raspi-config to expand the file system, set internationalization options for keyboard, time and wifi, enabled the camera, overclocked the CPU and enabled SSH.</p>
        <p>
        The next thing I did was to disable the camera LED since I didn't want the camera to indicate that it was on.</p>
<pre>
// Edit the config.txt file
sudo nano /boot/config.txt

// Add the following line
disable_camera_led=1
</pre>
<p>The standard version of motion from apt does not work with the RaspiCam module, but there is a community supported version that has been compiled for use with the RaspiCam.  There is more information on a wiki <a href="http://wiki.raspberrytorte.com/index.php?title=Motion_MMAL">here</a>.</p>
<p>Below are the commands I used to install the custom motion binary for the RaspiCam with the latest version of Raspbian Jessie Lite.
</p>
    </div>
    <div class="col-md-5">
        <img alt="Pi Cam Assembly" src="/assets/img/picam/picam_2.jpg" class="img-responsive img-rounded" />
    </div>
</div>
<br/>

    // Install the motion prerequisites
    sudo apt-get install -y libjpeg-dev libavformat56 libavformat-dev libavcodec56 libavcodec-dev libavutil54 libavutil-dev libc6-dev zlib1g-dev libmysqlclient18 libmysqlclient-dev libpq5 libpq-dev 
    
    // Download and unzip the raspberry pi specific motion binary
    wget https://www.dropbox.com/s/6ruqgv1h65zufr6/motion-mmal-lowflyerUK-20151114.tar.gz
    tar -zxvf motion-mmal-lowflyerUK-20151114.tar.gz

    // Test out the results
    $ ./motion -c motion-mmalcam-both.conf

If you see success messages logged in the terminal after running motion, point your web browser to the ip of the raspberry pi port 8081 and you should see your camera streaming.

## Timelapse Camera Software Setup

I downloaded the pre-build SD card image from [Adafruit](https://learn.adafruit.com/raspberry-pi-wearable-time-lapse-camera/software) I used raspi-config to expand the file system, set internationalization options for keyboard, time and wifi, overclock the CPU and enabled SSH.

The pre-built card just works, boot up the pi and it starts taking timelapse images, hold down the switch and it shuts down the pi. I want to build the pi zero wearable version of this project but don't yet have all the parts.

Once I had a bunch of images I made a video using FFMPEG

    ffmpeg -f image2 -i img%06d.jpg time-lapse.mp4
    
A couple of nice raspberry pi camera projects that don't require many parts.
