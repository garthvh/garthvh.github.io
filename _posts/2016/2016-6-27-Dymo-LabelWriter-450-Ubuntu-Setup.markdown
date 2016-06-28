---
layout: post
published: false
title: Dymo LabelWriter 450 Ubuntu Setup
categories: [linux,ubuntu]
year: 2016
month: 5
day: 25
summary: Switching Entirely to Linux and Ubuntu
---

When I started using Linux, printers eluded me a bit, my Canon multifunction printer did not have good linux drivers for quite some time and initially I could not find any software to run my small Brother label printer for a while. Eventually Canon improved their driver and Ubuntu fixed the UI a bit and I got it working.  I have been shipping enough 3D printed objects on [3DHubs](https://www.3dhubs.com/seattle/hubs/garth) that I became annoyed with printing out labels with my inkjet and then tapeing them to padded envelopes. A long time ago I worked with some thermal printers and figured that was the way I wanted to go since they don't smudge

Download [linux cup drivers](http://www.dymo.com/en-US/dymo-label-sdk-and-cups-drivers-for-linux-dymo-label-sdk-cups-linux-p--1)

cd dymo-cups-drivers-1.4.0.5/

sudo ./configure

sudo make

sudo make install