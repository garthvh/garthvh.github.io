---
layout: post
published: true
title: Switching-Entirely-to-Linux-and-Ubuntu
categories: [linux,ubuntu]
year: 2016
month: 5
day: 25
summary: Switching Entirely to Linux and Ubuntu
redirect_from: /linux/ubuntu/2016/05/25/Switching-Entirely-to-Linux-and-Ubuntu/
---

<img alt="Print one at a time settings" src="https://garthvh.com/assets/img/ubuntu/ubuntu_desktop.png" class="img-fluid" />

I have been dual booting with Windows 8.1 & 10 and Ubuntu for a couple of years now.  For much of that time I mostly used windows for day to day tasks and used Ubuntu to play with git, node and ruby applications which generally work much more easily on linux. I have a MSI Nightblade gaming pc with an I5 a NVIDIA 980 Graphics card and 16GB of ram. I am currently running Ubuntu 15.10 desktop.

When I started with Ubuntu most but not all of my hardware worked.  Since I was still dual booting with windows I didn't spend a ton of time trying to find solutions but over time updates to Ubuntu fixed some printer annoyances with my Canon WiFi printer and NVIDIA improved the drivers for my graphics card. Dual monitor support is now great and I am pretty happy with the [ambiance](http://www.ravefinity.com/p/download-ambiance-radiance-colors.html) theme I have been using.

I use Libre Office when I need to open an office file, and Remmina Remote Desktop Client to connect to my office computer running windows via RDP. Both of these are built into ubuntu.  There are also nice built in utilities for tasks like CD/DVD burning, making bootable USB keys, unzipping files and viewing PDF's as well as a host of other things. Often searching the dash surfaces a program already installed for doing what I need. I installed the gimp for image editing and it works pretty nicely despite requiring you to "export" everything to save it in a useful format.

I have a 3D printer and have found the USB Serial connection that 3D slicing software to print parts when connected to a computer seems to generally be more stable on linux.  Once power management settings that could affect a print are off it just works. The two slicing programs I use Cura and Simplify3D are both cross platform and have linux versions available that work equally well as their windows counterparts. 

For software development I have been using git in the command line and either [Github Atom](https://atom.io/) or [Visual Studio Code](https://code.visualstudio.com/) as my editor.  I enjoy [Terminator](http://gnometerminator.blogspot.com/p/introduction.html) for my terminal.  Node jekyll ruby and python all work really well on ubuntu without all the tedious setup required on windows.

For a web browser I use google chrome as it can be set up to work with sites like netflix and amazon prime video. Once WebGL is working I was also able to use [Onshape]() and [Tinkercad]() in Chrome as well.

In November of 2015 a Windows update destroyed the network drivers for my desktop in Windows, I tried a number of things to get it fixed but could never get it connected to the internet again.  

I kept the windows partition on and used it occasionally for the few remaining things that I could not do on linux.  Over time I found linux based solutions for all of these issues.  I have a small brother label maker that has a windows exe file embedded in the printer that you use to print the labels, I found a small linux program [Blabel](http://apz.fi/blabel/) that does the same thing, and is easier to use than the brother software.  The last piece of hardware I had not found a solution for was my USB microscope.  My 6 year old daughter uses it to look a things, and I found a nice program called [Guvcview](http://guvcview.sourceforge.net/) that supports my microscope. I use Angry IP Scanner to find newly configured devices on the network.

Recently I found a good deal on two mSATA hard drives that I can configure as a primary and recovery disc on my Nightblade desktop.  I backed up both my windows and ubuntu files and then did a fresh single boot install of ubuntu on the new hard drives. I thought about dual booting with windows again, but the install is so long I decided I just didn't need it anymore.

I even wound up being able to keep both Windows 7 and Windows 10 available to me via VM's in VirtualBox.  I have 3 Windows 7 Ultimate keys that allow for virtualization so I made two Windows 7 VM's and then upgraded one of them to 10.  I used the windows 7 vm to upgrade the firmware on my router since only windows software was available.

Windows is gone from my home and my PC has never ran faster, Ubuntu may be a pretty heavyweight linux distro, but it is much slimmer than windows and I am very pleased with my new setup.
