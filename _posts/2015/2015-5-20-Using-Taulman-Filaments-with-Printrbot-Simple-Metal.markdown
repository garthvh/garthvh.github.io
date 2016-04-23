---
layout: post
published: true
title: Using Taulman Filaments with Printrbot Simple Metal
categories: [3d%20printing, filament]
year: 2015
month: 5
day: 20
---
After printing a lot of PLA on my Printrbot Simple Metal I started looking around at some of the exotic filaments available.  I have a roll of ninjaflex and was interested in some of the filaments from [taulman](http://taulman3d.com/).

A 3D Hubs customer had been ordering parts for a prototype that was going to be in contact with food so we decided to try out a bunch of the higher temperature taulman nylon and FDA materials.

<div class="row">
  <div class="col-sm-8 col-sm-offset-2">
  <table class="table table-bordered table-striped table-hover">
    <thead>
      <tr>
        <th>Filament</th>
        <th>Material Type</th>
        <th>Color</th>
      </tr>
    <thead>
    <tbody>
      <tr>
        <td><a href="http://taulman3d.com/910-features.html">Alloy 910</a></td>
        <td>Polymer Alloy</td>
        <td>Natural</td>
      </tr>
      <tr>
        <td><a href="http://taulman3d.com/bridge-features.html">Bridge</a></td>
        <td>Nylon </td>
        <td>Natural</td>
      </tr>
      <tr>
        <td><a href="http://taulman3d.com/680-features.html">Nylon 680 FDA</a></td>
        <td>Nylon</td>
        <td>Natural</td>
      </tr>
      <tr>
        <td><a href="http://taulman3d.com/t-glase-features.html">t-glase</a></td>
        <td>PET Plastic</td>
        <td>Clear, Black, Green, Red, Blue</td>
      </tr>
    </tbody>
  </table>
  </div>
</div>

If some specific settings are used the t-glase filament can be printed with some very nice optical properties, but I have not played with any of those options yet, I was mostly interested in getting successful prints to start.

I don't have a heated bed for my printrbot and don't really want to get one if I can avoid it.  For PLA I often print on a raft because it gives me a nice stable surface for parts and prevents warping, but I could not get a raft to lay down successfully with any of the taulman filaments.

Then I tried a brim and it became much easier to print with these materials.  The problem I had with the raft was that if part of the outer structure of the raft did not lay down well the entire structure of the raft is compromised, where with a brim it just affects an inconsequential outer layer.

Here are the basic settings that I eventually used for all 4 materials; I did slow down the t-glase a bit more than the others to 40mm/s. I read all sorts of tips in forums and such that all resulted in failed prints, here are the settings I used successfully.

    Bed Prep: Blue Tape with Elmers Glue Stick
    Nozzle Size: 0.4mm
    Layer Height: 0.1mm
    Shell Thickness: 0.8mm
    Fill Density: 30-50%
    Temperature: 240 degrees Celsius
    Platform Adhesion: Brim
    Print Speed: 40-60 mm/s

I printed a 3D Hubs marvin in Alloy 910, the keychain loop on the top is much stronger than the PLA versions of this.

<img alt="Alloy 910 Marvin" src="//garthvh.com/assets/img/taulman/alloy_910_marvin.jpg" class="img-responsive img-rounded" />

The bridge filament is very similar to ninjaflex while printing much more easily, it is not as "rubbery" as the ninjaflex but is still very flexible. Below are some parts printed in bridge.

<img alt="Bridge Parts" src="//garthvh.com/assets/img/taulman/bridge_parts.jpg" class="img-responsive img-rounded" />

I had the hardest time printing th t-glase filament, it was difficult to get it to start sticking to the bed and it seemed to want to warp the most.  I was not able to print multiple parts on the bed at once with the t-glase without warping problems.

<div class="row">
  <div class="col-sm-4">
    <img alt="t-glase Parts" src="//garthvh.com/assets/img/taulman/tglase_parts.jpg" class="img-responsive img-rounded" />
  </div>
  <div class="col-sm-8">
    <img alt="t-glase Crushed espresso cup" src="//garthvh.com/assets/img/taulman/crushed_coffee_cup.jpg" class="img-responsive img-rounded" />
  </div>
</div>
<div class="row">
  <div class="col-sm-8 col-sm-offset-2">
  <br/>
      <img alt="t-glase Parts" src="//garthvh.com/assets/img/taulman/tglase_auger.jpg" class="img-responsive img-rounded" />
  </div>
</div>

The nylon 680 printed very similar to the alloy 910, my first print did have some discoloration but subsequent prints have been nice, not as white as the bridge but evenly colored.
