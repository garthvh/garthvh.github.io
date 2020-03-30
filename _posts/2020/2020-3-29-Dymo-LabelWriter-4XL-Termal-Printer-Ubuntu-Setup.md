---
layout: post
published: true
title: Dymo LabelWriter 4XL Thermal Printer Ubuntu Setup
categories: [linux,ubuntu]
year: 2020
month: 3
day: 29
summary: Dymo LabelWriter 4XL Thermal Printer Ubuntu Setup
---

My LabelWriter 450 served me pretty well, but the smaller shipping label size was never adopted by anyone but paypal and I just wanted a printer that worked with the standard 4" X 6" shipping label.

I  had to build and install the Dymo SDK with my last printer, but apparently since then Dymo has abandoned Linux and their driver installation is broken. I found a git repo with a [repaired fork of the Dymo drivers](https://github.com/Kyle-Falconer/DYMO-SDK-for-Linux) and some updated instructions for the install:

        sudo apt-get install git libcups2-dev libcupsimage2-dev gcc g++ automake
        cd ~/
        git clone https://github.com/Kyle-Falconer/DYMO-SDK-for-Linux.git
        cd DYMO-SDK-for-Linux
        aclocal
        automake --add-missing
        autoconf
        ./configure
        make
        sudo make install

Once the drivers were installed all the templates showed up in [glabels](http://glabels.org/) again and I was able to print labels again.  