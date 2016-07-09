---
layout: post
published: true
title: Installing the Printrbot Simple Z Axis Upgrade and v2 Extruder
categories: [printrbot]
year: 2015
month: 9
day: 22
summary: Installing the Printrbot Simple Z Axis Upgrade and v2 Extruder
---

After almost a year with my Printrbot I was excited to see the new Printrbot Simple Z and X axis upgrades they recently made available.

<blockquote class="twitter-tweet" lang="en"><p lang="en" dir="ltr">New Upgrades for Printrbot Simple! Wider X axis -6x10″, taller 10″ Z axis, new heat plates. <a href="http://t.co/L7Aciq6i9c">http://t.co/L7Aciq6i9c</a> <a href="http://t.co/nuR4WJJHRu">pic.twitter.com/nuR4WJJHRu</a></p>&mdash; Printrbot (@printrbot) <a href="https://twitter.com/printrbot/status/642722402573520897">September 12, 2015</a></blockquote>
<script async src="//platform.twitter.com/widgets.js" charset="utf-8"></script>

 There have been a couple of parts that I have had to print in multiple pieces because my printer was too small. I got my new heated bed recently, and I don't have a very large space for my printer so I decided to get the Z axis upgrade since it would not increase the footprint of my printer at all.

<img alt="Z Upgrade in Progress" src="https://garthvh.com/assets/img/printrbot/z_upgrade_1.jpg" class="img-responsive img-rounded" />

The upgrade kit is pretty simple, it comes with a set of 12MM smooth rods 15" long pressed into a aluminum rod plate, a 1/4" Acme rod 290MM long, and an aluminum Simple handle. I already had the handle so if anyone wants one it is yours for $20 vis paypal. I removed the existing 12MM rods and followed the original [kit assembly instructions](http://help.printrbot.com/Guide/Printrbot+Simple+Metal+%28Model+1403%29/142) to make sure I was putting things together properly.  I used some new thread locker and replaced the original rods with the new longer ones. After I completed the upgrade I found an [assembly video](https://youtu.be/a9bMh-npM-E) as well.

<img alt="Z Upgrade Complete" src="https://garthvh.com/assets/img/printrbot/z_upgrade_2.jpg" class="img-responsive img-rounded" />

The upgrade took about an hour and after it was complete I had to update the size of my printer in the firmware and in Cura and OctoPrint. Using the control panel in OctoPrint I homed the Z axis and moved the Z axis up as far as I was comfortable going, which was 240MM.  Using the M211 command I set the maximum Z height to 240MM and saved the values.

    M211 Z240
    M500

I have also been waiting to try out the new v2 extruder, the v1 extruder has worked great for me and has been acceptable with flexible filaments with some extra printed parts, but I have to watch the printer too closely when using Ninjaflex and have had difficulty printing large or complex parts in Ninjaflex and the new extruder has much tighter tolerances which should prevent the Ninjaflex from pushing out from the hobbed gear.

<img alt="v2 Extruder" src="https://garthvh.com/assets/img/printrbot/extruder_v2.jpg" class="img-responsive img-rounded" />

I am excited to try and print some larger parts, and am looking forward to Ninjaflex being a bit easier to work with as well.
