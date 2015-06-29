---
layout: post
published: false
comments: true
title: Building the Ciclop 3d Scanner Part 4 Final Assembly and Horus
categories: [ciclop,printrbot,oshpark,ponoko,arduino]
year: 2015
month: 6
day: 29
summary: Building the Ciclop 3d Scanner Part 4 Final Assembly and Horus
---

I have been working on my Ciclop 3D scanner for about a month now and the build is almost complete.  I had been looking for a complex and complete open source hardware project and the Ciclop has been perfect. Because the BQ kit and components are not available yet in the United States.  

I started the project by downloading the eagle files from github and ordering the Zum Scan PCB from [OSHPark](http://garthvh.com/oshpark/ciclop/2015/06/05/Order-a-PCB-and-build-your-own-Zum-Scan-Shield-using-OSHPark).  There is a [Mouser Project](https://www.mouser.com/ProjectManager/ProjectDetail.aspx?AccessID=6952239cf8) I found with all of the components making the process of putting together 3 Zum Scan boards pretty easy. While I waited for the boards to arrive I set out ordering the other necessary parts. I spent more than is probably necessary at Tacoma Screw but I didn't mind having some extra M3 and M8 metric hardware. I was able to find US sources for everything but the line lasers and StepStick drivers.

I am planning to build a 3D body scanner when I am done with the Ciclop so I built out two of the Zum Scan shields, the third PCB and parts as well as some metric hardware is available in my [project store](http://garthvh.com/store/).  The other parts of the Ciclop that I purchased with their sources and prices are listed below:

<div class="table-responsive">
  <table class="table">
    <thead>
      <tr>
        <th>Part</th>
        <th>Vendor</th>
        <th>Cost</th>
        <th>Order Date</th>
        <th>Delivery Date</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td>Hatchbox Orange PLA</td>
        <td>[Amazon](http://www.amazon.com/gp/product/B00J0EE1D4)</td>
        <td class="text-right">$21.90</td>
        <td>6/12/2015</td>
        <td>6/14/2015</td>
      </tr>
      <tr>
        <td>Threaded Rods and Hardware</td>
        <td>[Tacoma Screw](http://www.tacomascrew.com/)</td>
        <td class="text-right">$53.27</td>
        <td>6/6/2015</td>
        <td>6/7/2015</td>
      </tr>
      <tr>
        <td>2x Red Line Lasers</td>
        <td>[DX](http://www.dx.com/p/5mw-adjustable-focus-red-laser-line-module-4-5-5v-152279)</td>
        <td class="text-right">$10.50</td>
        <td>6/11/2015</td>
        <td>6/29/2015</td>
      </tr>
      <tr>
        <td>Stepper Motor</td>
        <td>[Adafruit](https://www.adafruit.com/products/324)</td>
        <td class="text-right">$14.00</td>
        <td>6/15/2015</td>
        <td>6/19/2015</td>
      </tr>
      <tr>
        <td>16014 Bearing</td>
        <td>[Amazon](http://www.amazon.com/WJB-Bearing-6006lbf-Dynamic-Capacity/dp/B007HRXJ7A)</td>
        <td class="text-right">$19.70</td>
        <td>6/11/2015</td>
        <td>6/15/2015</td>
      </tr>
      <tr>
        <td>StepStick Stepper Drivers (5)</td>
        <td>[Amazon](http://www.amazon.com/gp/product/B00MQR93QC)</td>
        <td class="text-right">$9.25</td>
        <td>6/5/2015</td>
        <td>6/17/2015</td>
      </tr>
      <tr>
        <td>Logitech Webcam C270</td>
        <td>[Amazon (used)](http://www.amazon.com/Logitech-Webcam-Widescreen-Calling-Recording/dp/B004FHO5Y6/)</td>
        <td class="text-right">$15.90</td>
        <td>6/12/2015</td>
        <td>6/18/2015</td>
      </tr>
      <tr>
        <td>Zum Scan Shield</td>
        <td>OSHPark, Mouser</td>
        <td class="text-right">$30.00</td>
        <td>6/4/2015</td>
        <td>6/15/2015</td>
      </tr>
      <tr>
        <td>Adafruit Metro Arduino Uno Clone</td>
        <td>[Adafruit](https://www.adafruit.com/products/2488)</td>
        <td class="text-right">$21.89</td>
        <td>6/19/2015</td>
        <td>6/24/2015</td>
      </tr>
      <tr>
        <td>200MM Acrylic Disc</td>
        <td>Ponoko</td>
        <td class="text-right">$28.39</td>
        <td>6/23/2015</td>
        <td>7/3/2015?</td>
      </tr>
      <tr>
        <td>DC 12V /2.0A Switching Power Supply</td>
        <td>[Amazon](http://www.amazon.com/gp/product/B00VDU9DYU)</td>
        <td class="text-right">$5.99</td>
        <td>6/25/2015</td>
        <td>6/27/2015</td>
      </tr>
      <tr>
        <td>Duck Brand Solid Grip Easy Liner</td>
        <td>[Amazon](http://www.amazon.com/gp/product/B00C2LMJPY)</td>
        <td class="text-right">$10.28</td>
        <td>6/23/2015</td>
        <td>?</td>
      </tr>
      <tr>
        <td colspan="2"><strong>Total</strong></td>
        <td colspan="3"><strong>$241.07</strong></td>
      </tr>
    </tbody>
  </table>
</div>

Since the kit from BQ is unavailable here and costs €249 which is about $280 US, I am pretty pleased with the cost of the project with filament even though I ordered some extra parts and hardware.  If you have a big enough printer it might also save some money to [print the platform disc](http://www.thingiverse.com/thing:652032) instead of having it laser cut, though I enjoyed going through the process of ordering the disc from Ponoko and I think it will add some polish to the project.

I extended the motor wires and added connectors from some jumper wires to the ends of the wires for both the motor and lasers so it will be easy to remove the electronics if necessary.

I connected the motor and lasers to the pins on the Metro and then connected the micro USB from the Metro and the Logitech web cam to my computer and started up [Horus](http://diwo.bq.com/en/horus-released/). The webcam worked right away and after using the Horus software and after loading the firmware on the metro using the Horus software the motor and lasers started working.

This has been an amazing open source hardware project that has allowed me to work with several awesome new vendors and learn a ton about low volume manufacturing. I was able to do many things I have not done before from ordering my own PCB's, working with threaded rods, learning about stepper motors and lasers, and preparing a file for laser cutting.
