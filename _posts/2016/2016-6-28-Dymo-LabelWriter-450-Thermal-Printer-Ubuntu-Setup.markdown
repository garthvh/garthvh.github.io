---
layout: post
published: true
title: Dymo LabelWriter 450 Thermal Printer Ubuntu Setup
categories: [linux,ubuntu]
year: 2016
month: 6
day: 28
summary: Dymo LabelWriter 450 Thermal Printer Ubuntu Setup
---

When I started using Linux printers eluded me a bit, my Canon multifunction printer did not have good linux drivers for quite some time and initially I could not find any software to run my small Brother label printer. Eventually Canon improved their driver and I found a program called [blabel](http://apz.fi/blabel/) for my brother label printer.  

I have been shipping enough 3D printed objects on [3DHubs](https://www.3dhubs.com/seattle/hubs/garth) that I became annoyed with printing out labels with my inkjet and then tapeing them to padded envelopes. A long time ago I worked with some commercial thermal printers and figured that was the way I wanted to go since they don't smudge or use any ink.  I looked a couple of different times but the printers were still pretty expensive. Eventually there was a sale and I purchased a [Dymo LabelWriter 450 Bundle](https://www.amazon.com/gp/product/B0146SDE0Y) for $49.  Before purchasing I checked and there were [linux cup drivers](http://www.dymo.com/en-US/dymo-label-sdk-and-cups-drivers-for-linux-dymo-label-sdk-cups-linux-p--1) available since I only have windows running in a VM.

Once you have downloaded the drivers, unpack them and then install.

        cd dymo-cups-drivers-1.4.0.5/
        sudo ./configure
        sudo make
        sudo make install

Once the drivers were installed I added the printer using the built in Ubuntu add printer wizard and installed [glabels](http://glabels.org/).  The bundle I bought came with 4 different types of labels that I was able to create custom templates for in glabels and print some stickers for my friend's company.

<img alt="HG Logo" src="https://garthvh.com/assets/img/dymo/hg_logo.jpg" class="img-responsive img-rounded" />

And some warning labels for their trailer:

<img alt="HG Logo" src="https://garthvh.com/assets/img/dymo/warning.jpg" class="img-responsive img-rounded" />

The bundle did not include the right labels for printing USPS Shipping labels so I purchased [these labels](https://www.amazon.com/gp/product/B00OVBWV6A).  I set up the shipping labels in the preferences for the printer and then went into my paypal multi order shipping options and adjusted the following settings.

<img alt="Paypal Setup" src="https://garthvh.com/assets/img/dymo/paypal_setup.png" class="img-responsive img-rounded" />

Now I can easily print shipping labels for 5 cents each and don't have to mess with cutting and taping anymore.


