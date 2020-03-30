---
layout: post
published: true
title: Installing the Printrbot Simple X axis upgrade
categories: [3dprinting]
year: 2015
month: 12
day: 5
summary: Installing the Printrbot Simple X axis upgrade
redirect_from: /printrbot/2015/12/05/Installing-the-Printrbot-Simple-X-upgrade/
---
In my ongoing effort to buy every upgrade for the Simple Printrbot offers I bought the new [X axis upgrade](http://printrbot.com/shop/simple-x-axis-upgrade/) on Black Friday.

<img alt="X Upgrade" src="https://garthvh.com/assets/img/printrbot/x_upgrade_1.jpg" class="img-fluid" />

<img alt="X Upgrade 2" src="https://garthvh.com/assets/img/printrbot/x_upgrade_2.jpg" class="img-fluid" />

The upgrade was pretty simple, I bought the X upgrade without the heat plate since I already have one with my current heated bed. I did have to extend the wires on the heat plate as they were shorter than the thermistor wires.  I am not sure if the heat plate came this way or if I had trimmed them when doing the installation.  

I used some kapton tape to hold the wires to the bed and zip tied them through the oval shaped belt hole on the back left corner of the bed.  I have previously printed a cable chain for the extruder wires so I use the extruder loom for the heated bed wires. The screws that connect the arms to the bed and that connect the heat plate to the bed are auto threading screws, so make sure and put them in straight.

You need to have the [latest Printrboard firmware](http://help.printrbot.com/c/Firmware) in order to take advantage of your new bed space.  I already had this version installed from my recent [Simple Super Z Upgrade](http://printrbot.com/shop/simple-super-z-upgrade/).

The upgraded bed is a flat piece of aluminum with cutouts on either end of the bed in the non printable area.  Without offsetting the Z probe sensor position it will dive through the cutout and gouge the bed when doing the auto bed leveling procedure. I used the following G code command in the OctoPrint terminal to update my sensor offset.

	// Set Bed Level Sensor Offset
	M212 X25
	// Save Settings
	M500
	// Verify saved settings
	M501

Then I used OctoPrint to test out the X area and to set the build area dimensions.  I already have an upgraded Z axis so the settings for my printer are as follows:

	// Set Build Dimensions
	M211 X250 Y152.4 Z240
	// Save Settings
	M500
	// Verify saved settings
	M501

My small printer table, the Z and X upgrades and my [printed spool holder](https://www.youmagine.com/designs/printrbot-simple-filament-spool-holder) all combined to make the printer a bit more unstable than before, specifically in the home position so I printed some [screw down feet](http://www.thingiverse.com/thing:724909).

<img alt="X Upgrade" src="https://garthvh.com/assets/img/printrbot/x_upgrade_4.jpg" class="img-fluid" />

The bed takes about 15 minutes to get up to 55-60C a bit longer to heat up then my old one, but I also followed Brook's advice from the installation video on youtube and this time I put the thermistor to the side of the heat plate for a more accurate reading.

<img alt="X Upgrade" src="https://garthvh.com/assets/img/printrbot/x_upgrade_3.jpg" class="img-fluid" />

I bought a bunch of 6"x6" kapton sheets so I installed two of those with one cut down to 4".  I have not seen any kapton sheets for sale in 6"x10" size yet, so I will probably just wait until I run out of what I have before doing anything.
