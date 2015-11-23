---
layout: post
published: true
comments: true
title: Building a couple Pocket Pigrrl RetroPi 3D Printed Gaming Handhelds
categories: [raspberrypi,retropi,pigrrl,printrbot,adafruit]
year: 2015
month: 11
day: 18
summary: Building a couple Pocket Pigrrl RetroPi 3D Printed Gaming Handhelds
---

I am building two customized Pocket Pigrrl's for my daughter and niece.  As a kid the NES system was mine, but my younger sister owned the original gameboy which I constantly stole from her on car trips so it seemed right that both our kids have little portable gameboy like devices. I am also hoping that this device will help keep mommy's phone away from the children.

I started out by cutting down the half sized perma proto board and laying out the buttons for a 4 button pigrrl.  I used my dremel to cut down the perma proto boards and then attached the 6mm tactile buttons onto the cut down proto board. Then I layed out the Raspberry Pi A+, PowerBoost 1000C and Audio Amp boards inside the case and started cutting some wire.

<img alt="Pigrrl Assembly" src="https://garthvh.com/assets/img/pigrrl/pigrrl_assembly_1.jpg" class="img-responsive img-rounded" />

Next I wired up the switch and applied the heatshrink tubing, then I attached the wires to the audio jack of the raspberry pi and connected them to the PowerBoost.

<img alt="Pigrrl Assembly" src="https://garthvh.com/assets/img/pigrrl/pigrrl_assembly_2.jpg" class="img-responsive img-rounded" />

I made a table of all the GPIO inputs on the Pi, and where they map to in the Pocket Pigrrl project:

<div class="table-responsive">
  <table class="table table-condensed table-bordered table-hover">
    <thead>
      <tr>
        <th>Wire #</th>
        <th>Pin</th>
        <th>Key</th>
        <th>Connect to</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td>1</td>
        <td>GPIO 3V</td>
        <td>N/A</td>
        <td>Unused</td>
      </tr>
      <tr>
        <td>2</td>
        <td>GPIO 5V</td>
        <td>N/A</td>
        <td>PowerBoost</td>
      </tr>
      <tr>
        <td>3</td>
        <td>GPIO 2</td>
        <td>Key X</td>
        <td>Perma Proto Controller</td>
      </tr>
      <tr>
        <td>4</td>
        <td>GPIO GND</td>
        <td>N/A</td>
        <td>Unused</td>
      </tr>
      <tr>
        <td>5</td>
        <td>GPIO 3</td>
        <td>Key Y</td>
        <td>Perma Proto Controller</td>
      </tr>
      <tr>
        <td>6</td>
        <td>GND</td>
        <td>N/A</td>
        <td>PowerBoost</td>
      </tr>
      <tr>
        <td>7</td>
        <td>GPIO 4</td>
        <td>Key Left</td>
        <td>Perma Proto Controller</td>
      </tr>
      <tr>
        <td>8</td>
        <td>GPIO 14</td>
        <td>N/A</td>
        <td>Unused</td>
      </tr>
      <tr>
        <td>9</td>
        <td>GND</td>
        <td>N/A</td>
        <td>Perma Proto Controller</td>
      </tr>
      <tr>
        <td>10</td>
        <td>GPIO 15</td>
        <td>N/A</td>
        <td>Unused</td>
      </tr>
      <tr>
        <td>11</td>
        <td>GPIO 17</td>
        <td>Key Right</td>
        <td>Perma Proto Controller</td>
      </tr>
      <tr>
        <td>12</td>
        <td>GPIO 18</td>
        <td>Key Up</td>
        <td>Perma Proto Controller</td>
      </tr>
      <tr>
        <td>13</td>
        <td>GPIO 27</td>
        <td>Key Down</td>
        <td>Perma Proto Controller</td>
      </tr>
      <tr>
        <td>14</td>
        <td>GPIO GND</td>
        <td>N/A</td>
        <td>Unused</td>
      </tr>
      <tr>
        <td>15</td>
        <td>GPIO 22</td>
        <td>Key A</td>
        <td>Perma Proto Controller</td>
      </tr>
      <tr>
        <td>16</td>
        <td>GPIO 23</td>
        <td>Key B</td>
        <td>Perma Proto Controller</td>
      </tr>
      <tr>
        <td>17</td>
        <td>GPIO 3V</td>
        <td>N/A</td>
        <td>Unused</td>
      </tr>
      <tr>
        <td>18</td>
        <td>GPIO 24</td>
        <td>N/A</td>
        <td>Unused</td>
      </tr>
      <tr>
        <td>19</td>
        <td>GPIO 10</td>
        <td>N/A</td>
        <td>Unused</td>
      </tr>
      <tr>
        <td>20</td>
        <td>GPIO GND</td>
        <td>N/A</td>
        <td>Unused</td>
      </tr>
      <tr>
        <td>21</td>
        <td>GPIO 9</td>
        <td>N/A</td>
        <td>Unused</td>
      </tr>
      <tr>
        <td>22</td>
        <td>GPIO 25</td>
        <td>N/A</td>
        <td>Unused</td>
      </tr>
      <tr>
        <td>23</td>
        <td>GPIO 10</td>
        <td>N/A</td>
        <td>Unused</td>
      </tr>
      <tr>
        <td>24</td>
        <td>GPIO 8</td>
        <td>N/A</td>
        <td>Unused</td>
      </tr>
      <tr>
        <td>25</td>
        <td>GPIO GND</td>
        <td>N/A</td>
        <td>Unused</td>
      </tr>
      <tr>
        <td>26</td>
        <td>GPIO 7</td>
        <td>N/A</td>
        <td>Unused</td>
      </tr>
    </tbody>
  </table>
</div>
I soldered all of the ground wires for the controller and clipped the unnecessary wires from the Pi GPIO cable.

<img alt="Pigrrl Assembly" src="https://garthvh.com/assets/img/pigrrl/pigrrl_assembly_3.jpg" class="img-responsive img-rounded" />

<img alt="Pigrrl Assembly" src="https://garthvh.com/assets/img/pigrrl/pigrrl_assembly_4.jpg" class="img-responsive img-rounded" />

The last step was to solder all of the controller buttons to the perma proto board and test that everything was working properly.  

<img alt="Pigrrl Finished" src="https://garthvh.com/assets/img/pigrrl/pigrrl_finished_1.JPG" class="img-responsive img-rounded" />

I downloaded the [Adafruit RetroPi image](https://learn.adafruit.com/pocket-pigrrl/software-1) and everything fired right up.  I found that the up button was turning off the screen, so I cut the GPIO18 backlight trace on the back of both screens and the system is working properly, now it is time to load some ROMS!

<img alt="Pigrrl Finished" src="https://garthvh.com/assets/img/pigrrl/pigrrl_finished_2.JPG" class="img-responsive img-rounded" />
