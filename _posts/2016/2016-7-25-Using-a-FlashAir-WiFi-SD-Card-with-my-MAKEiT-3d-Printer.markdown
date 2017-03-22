---
layout: post
published: true
title: Using a FlashAir WiFi SD Card with my MAKEiT 3d Printer
categories: [linux, 3dprinting]
year: 2016
month: 7
day: 25
summary: Using a FlashAir WiFi SD Card with my MAKEiT 3d Printer
redirect_from: /linux/3dprinting/2016/07/25/Using-a-FlashAir-WiFi-SD-Card-with-my-MAKEiT-3d-Printer/
---

I have used OctoPrint to manage prints in the past with my Printrbot.  As time went on I found myself using the SD card more often because it was more reliable.  When I got my new MAKEiT Pro-M printer I continued to use the SD card because it has a fantastic tune feature that lets me adjust a number of settings on the fly if you are printing from the SD card.

Since most of the adjustments I make after a print does not start right or fails is just one or two settings being able to change settings on the fly has really saved me a lot of time.  The timelapse and status features of OctoPrint are cool but I found I did not really miss them, I did really miss being able to upload gcode to the printer from my PC.  

I knew that WiFi sd cards existed and were used by a couple of photographers I know, but when I had last looked they were pretty expensive a quick search of amazon and I found the [Toshiba FlashAir 16GB](https://www.amazon.com/gp/product/B00UOYPZNE/). The card came with some windows software, but since I was on Linux I it was all pretty uselesss. I did find a config file in SD_WLAN folder at the root of the SD card.

With a little googling I discovered that I wanted to put the card in client mode (APPMODE=5) and allow uploads with UPLOAD=1.  Then you set the APPSSID and APPNETWORKKEY for your WiFi network.

    [Vendor]
    CIPATH=/DCIM/100__TSB/FA000001.JPG
    VERSION=FA9CAW3AW3.00.00
    CID=02544d535731364731dc1d667900f901
    PRODUCT=FlashAir
    VENDOR=TOSHIBA
    UPLOAD=1
    APPMODE=5
    APPNAME=makeit_prom_01
    APPSSID=YOURSSID
    APPNETWORKKEY=YOURPSK
    LOCK=1
    APPAUTOTIME=300000
    
I put the SD card back in my printer and turned the printer on.  Using the connected clients section of the administration tool for my home router I figured out the IP address of the card and set it to have a sticky IP so I could easily find it again.

You can browse the files on the sd card by typing the ip address into the url bar of your web browser.  The upload page is located at /upload.cgi.  

I have been using the card for over a week now, it it has made the process of loading gcode to the printer much nicer.



<blockquote class="instagram-media" data-instgrm-captioned data-instgrm-version="7" style=" background:#FFF; border:0; border-radius:3px; box-shadow:0 0 1px 0 rgba(0,0,0,0.5),0 1px 10px 0 rgba(0,0,0,0.15); margin: 1px; max-width:658px; padding:0; width:99.375%; width:-webkit-calc(100% - 2px); width:calc(100% - 2px);"><div style="padding:8px;"> <div style=" background:#F8F8F8; line-height:0; margin-top:40px; padding:50.0% 0; text-align:center; width:100%;"> <div style=" background:url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACwAAAAsCAMAAAApWqozAAAABGdBTUEAALGPC/xhBQAAAAFzUkdCAK7OHOkAAAAMUExURczMzPf399fX1+bm5mzY9AMAAADiSURBVDjLvZXbEsMgCES5/P8/t9FuRVCRmU73JWlzosgSIIZURCjo/ad+EQJJB4Hv8BFt+IDpQoCx1wjOSBFhh2XssxEIYn3ulI/6MNReE07UIWJEv8UEOWDS88LY97kqyTliJKKtuYBbruAyVh5wOHiXmpi5we58Ek028czwyuQdLKPG1Bkb4NnM+VeAnfHqn1k4+GPT6uGQcvu2h2OVuIf/gWUFyy8OWEpdyZSa3aVCqpVoVvzZZ2VTnn2wU8qzVjDDetO90GSy9mVLqtgYSy231MxrY6I2gGqjrTY0L8fxCxfCBbhWrsYYAAAAAElFTkSuQmCC); display:block; height:44px; margin:0 auto -44px; position:relative; top:-22px; width:44px;"></div></div> <p style=" margin:8px 0 0 0; padding:0 4px;"> <a href="https://www.instagram.com/p/BHv5ZmRghH8/" style=" color:#000; font-family:Arial,sans-serif; font-size:14px; font-style:normal; font-weight:normal; line-height:17px; text-decoration:none; word-wrap:break-word;" target="_blank">Really liking my new WiFi SD card, not sure why I didn&#39;t think of this before. Runs a little Linux web server where you upload files @universeofdesign @makeitinc</a></p> <p style=" color:#c9c8cd; font-family:Arial,sans-serif; font-size:14px; line-height:17px; margin-bottom:0; margin-top:8px; overflow:hidden; padding:8px 0 7px; text-align:center; text-overflow:ellipsis; white-space:nowrap;">A photo posted by Garth Vander Houwen (@garth.vander.houwen) on <time style=" font-family:Arial,sans-serif; font-size:14px; line-height:17px;" datetime="2016-07-12T04:41:53+00:00">Jul 11, 2016 at 9:41pm PDT</time></p></div></blockquote> <script async defer src="//platform.instagram.com/en_US/embeds.js"></script>

