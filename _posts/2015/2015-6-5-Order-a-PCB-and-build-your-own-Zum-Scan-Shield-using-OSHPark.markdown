---
layout: post
published: true
comments: true
title: Order a PCB to build your own Zum Scan Shield using OSHPark
categories: [oshpark,ciclop]
year: 2015
month: 6
day: 5
summary: Ordering a PCB for open hardware on OSHPark
---

One of the more interesting components of open hardware to me has been the theoretical ability to produce low quantity custom hardware based on well tested open source designs at pretty low prices.

I currently don't have any of my own circuit board designs complete enough to need to print any boards, but I am interested in making a [Ciclop 3D Laser Scanner](http://www.thingiverse.com/thing:740357) and the Arduino Shield for the scanner is not currently available in the US.  It seems to cost about 30 euros in Europe and the hardware files are all available in the [zum github repo](https://github.com/bq/zum) I decided to see if I could use OSHPark to build my own Zum shield.

I took the files from the github repository and uploaded them to OSHPark in a zip folder and was able to view a preview of the board before ordering.

<div class="row">
  <div class="col-md-6">
  <img alt="Average order" src="http://garthvh.com/assets/img/ciclop/zum_scan_pcb_front.png" class="img-responsive img-rounded" />
  </div>
  <div class="col-md-6">
  <img alt="Average order" src="http://garthvh.com/assets/img/ciclop/zum_scan_pcb_back.png" class="img-responsive img-rounded" />
  </div>
</div>

Somehow I did not properly submit the drills file, but OSHPark suppport was able to get my order fixed up before it was submitted to the panel. I placed my order on June 4th, and my order was panelized a few hours after it was ordered. The confirmation mail says OSHPark expects to have the boards back from the fab about June 15th.

After submitting my order I did find that someone has created a [shared project](https://oshpark.com/shared_projects/DvU87rGe) for the Zum Scan which does have the drills file submitted to OSHPark successfully.

After ordering the boards I found a project list on the [reprap forums](http://forums.reprap.org/read.php?138,461968) for the other components needed for the board on [Mouser](https://www.mouser.com/ProjectManager/ProjectDetail.aspx?AccessID=6952239cf8).  I ordered enough parts for all three boards I ordered from OSHPark, I did remove items like male headers and the button that I already have on hand. I also ordered some of the StepStick [stepper motor drivers on amazon](http://www.amazon.com/gp/product/B00MQR93QC).  Below is a summary of all the items I purchased to make the boards.  I bought enough parts and boards to make three Zum Scan Shields, and will have two extra stepper motor drivers when I am done.

<div class="table-responsive">
  <table class="table table-striped table-bordered table-hover">
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
        <td>Stepper motor drivers for the shields.</td>
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
</div>

It was a pretty easy process to get everything ordered, and I am pleased that the DIY cost remained less than the retail price of the shield, now I wait for all the pieces to arrive.
