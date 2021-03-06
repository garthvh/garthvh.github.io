---
layout: post
published: true
title: Building the Ciclop 3d Scanner Part 2 Printing Huge Parts on my Little Printrbot
tags: [3D Scanning,3D Printing,Ciclop,OSHW]
year: 2015
month: 6
day: 22
summary: Building the Ciclop 3d Scanner Part 2 Printing Huge Parts on my Little Printrbot
redirect_from: /ciclop/printrbot/2015/06/22/Building-the-Ciclop-3d-Scanner-Part-2-Printing-Huge-Parts-on-my-Little-Printrbot/
---

I have been working on printing a Ciclop 3D Scanner entirely using my Printrbot Simple Metal despite several of the pieces being to large for my bed. Reading forums and searching thingiverse I found most of the files I needed to print the Ciclop on my Simple. I also modified a couple of files so that I could print all the parts on my Printrbot.

I only printed four parts from the original BQ Ciclop model, for the rest of the parts I had to use a file modified either to fit on my bed or to remove the support that was added to the stl files.

For the motor holder I exported a new stl file without the custom support added and then printed the file with grid support added by Cura the motor holder would fit on my simple metal, but I did not like the support that was added to the STL file.  

I printed a reduced size disc holder that fits on the 152MM X 152MM Printrbot bed and a two piece version of the camera mount. I cut the motor wireway in the middle so that it fit on my print bed and printed two.

The only part that failed to print was the back cover.  I tried printing it both standing up and with support and it was just too thin. I found a file in a forum that I used to print a very nice and sturdy back cover.

All of the PLA parts were printed at 0.1MM layer height, 60-80MM Speed with 30% infill @ 210 degrees Celsius.

You can find all the models I used below:

<div class="table-responsive">
  <table class="table table-hover table-bordered table-striped">
    <thead>
      <tr>
        <th>Part</th>
        <th>Time</th>
        <th>Model Used</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td>Pattern Holder</td>
        <td>5 Hours</td>
        <td><a href="http://www.thingiverse.com/thing:740357">Ciclop 3D Scanner</a></td>
      </tr>
      <tr>
        <td>Shaft Coupler</td>
        <td>1 Hour</td>
        <td><a href="http://www.thingiverse.com/thing:740357">Ciclop 3D Scanner</a></td>
      </tr>
      <tr>
        <td>Laser Holders</td>
        <td>1.5 Hour</td>
        <td><a href="http://www.thingiverse.com/thing:740357">Ciclop 3D Scanner</a></td>
      </tr>
      <tr>
        <td>Laser Wireways</td>
        <td>1.5 Hour</td>
        <td><a href="http://www.thingiverse.com/thing:740357">Ciclop 3D Scanner</a></td>
      </tr>
      <tr>
        <td>Bearing Holder</td>
        <td>7 Hours</td>
        <td><a href="http://www.thingiverse.com/thing:736815" >Reduced size disc holder and bearing clip</a></td>
      </tr>
      <tr>
        <td>Bearing Clips</td>
        <td>2 Hours</td>
        <td><a href="http://www.thingiverse.com/thing:736815" >Reduced size disc holder and bearing clip</a></td>
      </tr>
      <tr>
        <td>Motor Holder</td>
        <td>17 Hours</td>
        <td><a href="http://www.thingiverse.com/thing:890550">Motor Holder without Support</a></td>
      </tr>
      <tr>
        <td>Camera Holder Bottom</td>
        <td>8 Hours</td>
        <td><a href="http://www.thingiverse.com/thing:818433">Two Piece Camera Mount</a></td>
      </tr>
      <tr>
        <td>Camera Holder Top</td>
        <td>14.5 Hours</td>
        <td><a href="http://www.thingiverse.com/thing:818433">Two Piece Camera Mount</a></td>
      </tr>
      <tr>
        <td>Camera Holder Cover</td>
        <td>2 Hours</td>
        <td><a href="http://www.thingiverse.com/thing:891835">Thicker Back Cover</a></td>
      </tr>
      <tr>
        <td>Motor Wireway</td>
        <td>1 Hour</td>
        <td><a href="http://www.thingiverse.com/thing:892354">Half Motor Wireway</a></td>
      </tr>
      <tr>
        <td><strong>Total Print Time</strong></td>
        <td colspan="2"><strong>61.5 Hours</strong></td>
      </tr>
    </tbody>
  </table>
</div>

<div class="row">
  <div class="col-md-6">
    <img alt="Ciclop Bearing Holder" src="//garthvh.com/assets/img/ciclop/ciclop_bearing_holder.jpg" class="img-fluid" />
  </div>
  <div class="col-md-6">
    <img alt="Ciclop Motor Holder Printing" src="//garthvh.com/assets/img/ciclop/ciclop_motor_holder_printing.jpg" class="img-fluid" />
  </div>
</div>
<br/>
The motor holder is the single longest print I have ever done, it took a total of 17 hours, but I think it turned out great. The [Adafruit stepper motor](https://www.adafruit.com/products/324) fits perfectly and matches the motor specs on the DIWO site so that makes sourcing a motor much easier and faster than having to order it from Aliexpress.

<div class="row">
  <div class="col-md-6">
    <img alt="Ciclop Motor Holder" src="//garthvh.com/assets/img/ciclop/ciclop_motor_holder_1.jpg" class="img-fluid" />
  </div>
  <div class="col-md-6">
    <img alt="Ciclop Motor Holder" src="//garthvh.com/assets/img/ciclop/ciclop_motor_holder_2.jpg" class="img-fluid" />
  </div>
</div>
<br/>
<div class="row">
  <div class="col-md-6">
    <img alt="Ciclop Motor Holder" src="//garthvh.com/assets/img/ciclop/ciclop_motor_holder_3.jpg" class="img-fluid" />
  </div>
  <div class="col-md-6">
    <img alt="Ciclop Motor Holder" src="//garthvh.com/assets/img/ciclop/ciclop_motor_holder_with_motor_2.jpg" class="img-fluid" />
  </div>
</div>

The Alloy 910 shaft coupler fits perfectly into the bearing holder connection, and the huge 1014 bearing fits snugly on the motor holder.

<div class="row">
  <div class="col-md-6">
    <img alt="Ciclop Motor Holder" src="//garthvh.com/assets/img/ciclop/ciclop_motor_holder_with_motor_1.jpg" class="img-fluid" />
  </div>
  <div class="col-md-6">
    <img alt="Ciclop Motor Holder" src="//garthvh.com/assets/img/ciclop/ciclop_motor_holder_with_motor_3.jpg" class="img-fluid" />
  </div>
</div>
<br/>
<div class="row">
  <div class="col-md-6">
    <img alt="Ciclop Assembled" src="//garthvh.com/assets/img/ciclop/ciclop_camera_holder_with_cover.jpg" class="img-fluid" />
  </div>
  <div class="col-md-6">
    <img alt="Ciclop Assembled" src="//garthvh.com/assets/img/ciclop/ciclop_back_cover_printing.jpg" class="img-fluid" />
  </div>
</div>
<br/>
<div class="row">
  <div class="col-md-12">
    <img alt="Ciclop Assembled" src="//garthvh.com/assets/img/ciclop/ciclop_assembled_1.jpg" class="img-fluid" />
    <br/>
  </div>
  <div class="col-md-12">
    <img alt="Ciclop Assembled" src="//garthvh.com/assets/img/ciclop/ciclop_assembled_2.jpg" class="img-fluid" />
  </div>
</div>

I would definitely recommend getting a spool of filament just for this project.  I wound up using ~800 grams of filament printing the parts. I am really pleased with the results and am eagerly awaiting the arrival of my lasers!
