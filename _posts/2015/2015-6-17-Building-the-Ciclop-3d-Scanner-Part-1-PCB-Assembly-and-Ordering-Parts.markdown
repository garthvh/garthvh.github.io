---
layout: post
published: true
comments: true
title: Building the Ciclop 3d-Scanner Part 1 PCB Assembly and Ordering Parts
categories: [ciclop,arduino,printrbot,oshpark]
year: 2015
month: 6
day: 17
summary: Building the Ciclop 3d-Scanner Part 1 PCB Assembly and Ordering Parts
---

On June 4th I [ordered PCB's from OSHPark](http://garthvh.com/oshpark/ciclop/2015/06/05/Order-a-PCB-and-build-your-own-Zum-Scan-Shield-using-OSHPark/) for a Ciclop 3D Scanner, the OSHPark turnaround was amazing and my PCB's were manufactured and shipped on the 12th.  On June 16th I had three beautiful purple circuit boards in a nice purple envelope.

<img alt="Zum Scan PCB Package" src="http://garthvh.com/assets/img/ciclop/zum_scan_1.jpg" class="img-responsive img-rounded" />

I had already ordered all of the parts using a [Mouser project list](https://www.mouser.com/ProjectManager/ProjectDetail.aspx?AccessID=6952239cf8) that I found online, and the parts had arrived last week.  Really easy shield assembly as BQ had marked the board well and provided [a nice BOM and image.](http://diwo.bq.com/en/zum-scan-released-2/) The pads on the OSHPark boards were easy to solder to and the shield went together really quickly.

<div class="row">
  <div class="col-md-6">
    <img alt="Zum Scan PCB Front Assembled" src="http://garthvh.com/assets/img/ciclop/zum_scan_2.jpg" class="img-responsive img-rounded" />
  </div>
  <div class="col-md-6">
    <img alt="Zum Scan PCB Back Assembled" src="http://garthvh.com/assets/img/ciclop/zum_scan_3.jpg" class="img-responsive img-rounded" />
  </div>
</div>

<br/>

I am waiting on some more parts to arrive, and am still printing out all of the parts using .1mm layer height with Hatchbox Orange PLA.  I did use Taulman alloy 910 for the shaft coupler.

I used a hacksaw to cut all the threaded rod pieces to size and have received the [16014 bearing](http://www.amazon.com/gp/product/B007HRXJ7A) which is huge and it fits perfectly in the bearing holder.

<div class="row">
  <div class="col-md-6">
    <img alt="Ciclop Bearing Holder" src="http://garthvh.com/assets/img/ciclop/ciclop_bearing_holder.jpg" class="img-responsive img-rounded" />
  </div>
  <div class="col-md-6">
    <img alt="Ciclop Bearing Holder with bearing" src="http://garthvh.com/assets/img/ciclop/Ciclop_Bearing.jpg" class="img-responsive img-rounded" />
  </div>
</div>

Some of the parts provided by bq for the Ciclop scanner are too big for my Printrbot Simple Metal, but I found some nice models for the pieces that are too large.

+ [Reduced size disc holder and bearing clip](http://www.thingiverse.com/thing:736815)
+ [Two Piece Camera Mount](http://www.thingiverse.com/thing:818433)

The holes on the smaller bearing holder exactly match the larger file, so the same acrylic disc dfx file can be used.

<div class="row">
  <div class="col-md-6">
    <img alt="Ciclop Pattern Holder" src="http://garthvh.com/assets/img/ciclop/ciclop_pattern_holder.jpg" class="img-responsive img-rounded" />
  </div>
  <div class="col-md-6">
    <img alt="Ciclop Parts" src="http://garthvh.com/assets/img/ciclop/ciclop_parts_1.jpg" class="img-responsive img-rounded" />
  </div>
</div>
<br/>

I still have to print the largest part (the motor housing) and am waiting on lasers, the motor and stepper drivers to arrive.  I also am working on getting the acrylic laser cutting done.

I am also considering using an [Adafruit Metro](https://www.adafruit.com/products/2488) for the Arduino as it seems to be the closest in form factor to the [BQ Zum 328](http://www.bq.com/gb/placa-zum-bt) Uno clone which is not available in the US. The main issue being the USB B connector on most arduinos vs the micro USB connector on the Metro and Zum 328 boards fitting better with the zum scan shield.
