---
layout: post
title: Cloning Raspberry PI SD Cards
categories: [raspberrypi,linux]
year: 2014
month: 11
day: 25
published: true
summary: Backing up Raspberry Pi images.
---

After playing with the raspberry pi a bit longer it became clear that I needed some way to make backups of the SD card used for the OS. I quickly remembered that I could easily use Win32DiskImager to write an ISO image and was able to backup my PI easily.

Then I bought bigger SD cards and moving the OS around became more of an issue as once you expand the file system to use the whole SD card any copies you make of that card are now the same size as full SD card on disk.

While I had enough disk space to back up my two distinct PI images, it seemed kind of silly. Then I ran across this [blog post](http://sysmatt.blogspot.sg/2014/08/backup-restore-customize-and-clone-your.html) with some automated raspberry PI backup scripts.

Since Matt is a unix systems adminstrator for his job, it seemed like a good place to start. I have not yet implemented any of the more complex scripting of new PI creation, but I do have a process that allows me to back up the os to a smaller SD card for image backup. I can store the backups at their actual size on my ubuntu system, or you can copy the whole card to a smaller card allowing you to more easily use different size cards
