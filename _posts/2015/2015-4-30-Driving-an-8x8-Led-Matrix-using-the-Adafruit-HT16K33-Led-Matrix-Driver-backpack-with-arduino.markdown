---
layout: post
published: true
title: Driving an 8x8 Led Matrix using the Adafruit HT16K33 Led Matrix Driver backpack with Arduino
categories: [arduino]
year: 2015
month: 4
day: 30
---

When Nwazet closed down I bought a number of 8x8 Led Matrices for $1 each. I had these for a while and then bought some [Adafruit 16x8 Led Matrix Driver Backpacks - HT16K33](http://www.adafruit.com/products/1427) to power the Matrices.

This seemed like an awesome plan, but this backpack was my first lesson in making sure that the products I was using are popular and well supported.  While there are tons of examples of how to wire the adafruit backpacks with the same chip that are integrated, I could not find anything using my backpacks.

Eventually I found a [datasheet for my matrix](https://labviewhacker.com/doku.php?id=learn:hardware:components:led_matrix:nfm-12883as-11) and used a piece of paper to map out the pins from the matrix and where they needed to connect to on the backpack

<img alt="Paper Pinouts" src="//garthvh.com/assets/img/arduino/HT16K33_pinouts.jpg" class="img-responsive img-rounded" />

Then I laid out the breakout and a matrix on some breadboards and started wiring it all together.

<img alt="Circuit Image" src="//garthvh.com/assets/img/arduino/HT16K33_1.jpg" class="img-responsive img-rounded" />

I cobbled together some code from a few different examples and finally got the matrix working. The code is on [github](https://github.com/garthvh/Arduino/blob/master/LED%20Matrix/8x8Examples.ino) and there is a video of the matrix in action below.

<div class="embed-responsive embed-responsive-16by9 text-center">
  <iframe width="480" height="270" src="https://www.youtube.com/embed/Soj2ZwMjHMg" frameborder="0" allowfullscreen></iframe>
</div>
