---
layout: post
published: false
comments: true
title: Order a PCB and build your own Zum Scan Shield using-OSHPark
categories: [OSHPark,Ciclop]
year: 2015
month: 6
day: 10
summary: Ordering a PCB for open hardware on OSHPark
---

One of the more interesting components of open hardware to me has been the theoretical ability to produce low quantity custom hardware based on well tested open source designs at pretty low prices.

I currently don't have any of my own circuit board designs complete enough to need to print any boards, but I am interested in making a [Ciclop 3D Laser Scanner](http://www.thingiverse.com/thing:740357) and the Arduino Shield for the scanner is not currently available in the US.  It seems to cost about 30 euros in Europe and the hardware files are all available in the [zum github repo](https://github.com/bq/zum) I decided to see if I could use OSHPark to build my own Zum shield.

I took the files from the github repository and uploaded them to OSHPark in a zip folder and was able to view a preview of the board before ordering.

Somehow I did not properly submit the drills file, but OSHPark suppport was able to get my order fixed up before it was submitted to the panel. I placed my order on June 4th, and my order was panelized a few hours after it was ordered.

After submitting my order I did find that someone has created a [shared project](https://oshpark.com/shared_projects/DvU87rGe) for the Zum Scan which does have the drills file submitted to OSHPark successfully.

After ordering the boards I found a project list on the reprap forums for the other components needed for the board on [Mouser](https://www.mouser.com/ProjectManager/ProjectDetail.aspx?AccessID=6952239cf8).  I ordered enough parts for all three boards I ordered from OSHPark, I did remove items like male headers and the button that I already have on hand. I also ordered some of the StepStick [stepper motor drivers on amazon](http://www.amazon.com/gp/product/B00MQR93QC).  Below is a summary of all the items I purchased to make the boards.  I bought enough parts and boards to make three Zum Scan Shields, and will have two extra stepper motor drivers when I am done.

<table class="table table-striped table-hover">
  <thead>
    <tr>
      <td>Part</td>
      <td>Description</td>
      <td>Vendor</td>
      <td>Quantity</td>
      <td>Total Cost Shipped</td>
    </tr>
  <thead>
  <tbody>
    <tr>
      <td>Zum Scan PCB</td>
      <td>2 Layer printed circuit board for the Zum Scan shield.</td>
      <td>OSHPark</td>
      <td>3</td>
      <td>$32.80</td>
    </tr>
    <tr>
      <td>Zum Scan Components</td>
      <td>All the necessary components for the Zum Scan shield.</td>
      <td>Mouser</td>
      <td>3</td>
      <td>$32.63</td>
    </tr>
    <tr>
      <td>StepStick Stepper Motor Drivers</td>
      <td>Steper motor drivers for the shields.</td>
      <td>Amazon</td>
      <td>5</td>
      <td>$9.26</td>
    </tr>
    <tr>
      <td colspan="4">Total Component Cost</td>
      <td><strong>$74.69</strong></td>
    </tr>
  </tbody>
</table>
