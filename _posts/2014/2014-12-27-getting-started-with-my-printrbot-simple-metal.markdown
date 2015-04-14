---
layout: post
fullwidth: true
title: Getting Started with My Printrbot Simple Metal
category: 3D Printing
tags: [RaspberryPi, PiGlow, Linux, Raspbian]
year: 2014
month: 12
day: 27
published: true
comments: true
summary: Adventures in 3D Printing.
image: post_three.jpg
---

I got a [printrbot simple metal kit](http://printrbot.com/shop/simple-metal-kit/) on black friday so I have had it a little longer than those who got one for Christmas. It has printed at least 4 hours a day since and I think I have it up and running pretty nicely now, here are my tips for getting great prints quickly.

I really didn’t have any assembly issues other than accidentally using the 22mm M3 screws to connect the fan.

The printrbot documentation currently recommends Repetier Host which just went closed source and is hard to use and was buggy for me on both Ubuntu and Windows 8.1 While using Repetier Host I had to re-flash the firmware on my printrboard twice which was not a lot of fun.

I have been using Cura from Ultimaker and the free Windows 8 3D Builder app. I found that Cura is the best for both printing via USB and generating gcode for upload to OctoPi, I use 3D builder mostly to fix models.

I have been getting great results with cura after adding the bed auto leveling command to the default Cura Start gcode.

    G28 Z0; move z to min endstops
    G29; Auto level bed add this line
    G1 z15.0 F{travel_speed}; move the platform down 15mm

Then make sure you have a spool holder of some kind, I made this one to go with my aluminum handle and have been happy with it. The spool holder made a huge difference in print quality for me.

The first thing I printed was the suggested fan shroud, and after I printed and installed it I started having more warping on my prints, when I put my hand behind the fan when the printer was running there was more back blow than air being pushed through the shroud opening.

After trying a couple of different models I found on thingiverse that didn’t work any better I tried [this strange looking one](http://www.thingiverse.com/thing:356001) that works great.

Once you are able to print some things you are happy with using Cura over USB, if you have some Linux / Raspberry PI experience I would highly recommend setting up OctoPi with the rasbperry pi camera to take timelapse videos of your prints easily, this really helps figure out what went wrong when unattended prints fail.

I even figured out how to upload all of my timelapses to youtube when they are complete using octoprint’s event hooks. You can find infomation on setting up youtube-upload here. I made a couple of adjustments to my config.yaml file

    events:
      enabled: true
      subscriptions:
      - command: 'youtube-upload --email="my email" --password="my password"
          --title="3D Printing Timelapse: {movie_basename}" --description="Timelapse of
          {gcode}, printed and recorded via OctoPrint on a Printrbot Simple Metal" --category="Tech"
          --keywords="OctoPrint, Printrbot, 3D Printing" --unlisted --private {movie}'
        event: MovieDone
        type: system

I did have one issue once I received a macro lens for my [camera mount](http://www.thingiverse.com/make:107006) and the status led on the camera was creating a red moon shaped reflection in the video. Good News is there is a raspberry pi setting in order to disable the camera status led, you will need to edit the boot config file:

    sudo nano /boot/config.txt

And add the following line

    disable_camera_led=1
