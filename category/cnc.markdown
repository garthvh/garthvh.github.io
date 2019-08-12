---
layout: category_build_page
category: cnc
permalink: /category/cnc/
title: SainSmart Genmitsu 3018 Pro CNC
---
<div class="box-body">
    <ul class="timeline">
        <li class="time-label">
            <span class="bg-blue">
                <time datetime="2019-07-15T00:00:00-07:00" itemprop="datePublished">July  15, 2019</time>
            </span>
        </li>
        <li>
            <i class="fa fa-truck bg-red"></i>
            <div class="timeline-item">
                <span class="time"></span>
                <h3 class="timeline-header">3018 CNC Purchased and Build</h3>
                <div class="timeline-body">
                    <p>I just purchased the SainSmart Genmitsu 3018 Pro CNC machine, I had started printing parts to build my own CNC but decided to get a kit since I don't know much about CNC currently and was concerned with the rigidity of a machine made from thin plywood sheets.  I also find myself most interested in the software available and it has been hard for me to grok how everything works together without a working machine. </p>
                    <p>Assembly was really easy, there is a short assembly manual and a pretty small number of parts overall. </p>
                </div>
                <div class="timeline-footer">
                Related Links:
                <ul>
                    <li><a href="https://www.sainsmart.com/products/sainsmart-genmitsu-cnc-router-3018-pro-diy-kit">SainSmart Genmitsu CNC Router 3018 Pro DIY Kit</a></li>
                </ul>
                </div>
            </div>
        </li>
        <li class="time-label">
            <span class="bg-blue">
                <time datetime="2019-07-23T00:00:00-07:00" itemprop="datePublished">July  23, 2019</time>
            </span>
        </li>
        <li>
            <i class="fa fa-cogs bg-green"></i>
            <div class="timeline-item">
                <span class="time"></span>
                <h3 class="timeline-header">Initial Machine Setup</h3>
                <div class="timeline-body">
                    <p>
                        I 3D printed an enclosure for the electronics and decided to add x and y limit switch mounts and a raspberry pi sleve that can be mounted to the extrusions.
                    </p>
                    <p>
                        I have a bunch of 25mm fans so i modified a cover for a 40mm fan to fit my 25mm.
                    </p>
                    <p>
                        I spun up a windows VM and verified that everything worked using the included candle software.
                    </p>
                </div>
                <div class="timeline-footer">
                Related Links: 
                <ul>
                    <li><a href="https://www.thingiverse.com/thing:3654553">Electronics Enclosure</a></li>
                    <li><a href="https://www.thingiverse.com/thing:3764473">25mm Fan Electronics Box Cover</a></li>
                </ul>
                </div>
            </div>
        </li>
         <li class="time-label">
            <span class="bg-blue">
                <time datetime="2019-08-01T00:00:00-07:00" itemprop="datePublished">August  1, 2019</time>
            </span>
        </li>
        <li>
            <i class="fa fa-terminal bg-yellow"></i>
            <div class="timeline-item">
                <span class="time"></span>
                <h3 class="timeline-header">Software Discovery</h3>
                <div class="timeline-body">
                    <p>
                        The software toolchain for CNC seems to be a little different than 3D Printing, actually having a machine has really helped me to better understand how all the pieces fit together.
                    </p>
                    <p>
                        At this point my goals are still pretty simple, I want to be able to carve assorted svg and stl files easily, as well as generate my own text and simple designs.
                    </p>
                    <p>
                        I have been using easel some because it is easy, but would prefer to use open source options and figured there had to be some raspberry pi options available. I found a couple of different node applications I am going to try, CNCJS for the machine controller and Kiri:Moto for slicing.
                    </p>
                </div>
                <div class="timeline-footer">
                Related Links: 
                <ul>
                    <li><a href="https://cncjs.org">CNCJS</a></li>
                     <li><a href="https://github.com/GridSpace/grid-apps/wiki/Kiri:Moto">Kiri:Moto</a></li>
                </ul>
                </div>
            </div>
        </li>
        <li class="time-label">
            <span class="bg-blue">
                <time datetime="2019-08-11T00:00:00-07:00" itemprop="datePublished">August  11, 2019</time>
            </span>
        </li>
        <li>
            <i class="fa fa-laptop bg-red"></i>
            <div class="timeline-item">
                <span class="time"></span>
                <h3 class="timeline-header">Raspberry Pi Setup</h3>
                <div class="timeline-body">
                    <p>
                        After testing that everything worked right I used pibakery to set up a new Pi 3 running Raspbian buster 7-10.  The following is my raspberry pi setup after having connected the device to my wifi.
                    </p>
                    <p>Below are the commands necessary to get cncjs running on the pi.</p>
                    <pre>
sudo apt install build-essential git nodejs npm
sudo npm i -g npm
sudo rm -rf ~/.npm/ 
sudo npm install node-gyp -g
sudo npm install -g cncjs@latest
cncjs</pre>
                    <p>After cncjs is installed, visit http://{youripaddress}:8000/ to access the web interface.</p>
                    <p>If you want to run kiri:moto or meta:moto as well run the following commands to install and run the grid-apps npm package.</p>
                                        <pre>
sudo npm install GridSpace/grid-apps
cncjs</pre>
                    <pre>
$0=10 (Step pulse time, microseconds) 
$1=25 (Step idle delay, milliseconds)
$2=0 (Step pulse invert, mask)
$3=5 (Step direction invert, mask)
$4=0 (Invert step enable pin, boolean)
$5=0 (Invert limit pins, boolean)
$6=0 (Invert probe pin, boolean)
$10=3 (Status report options, mask)
$11=0.010 (Junction deviation, millimeters)
$12=0.002 (Arc tolerance, millimeters)
$13=0 (Report in inches, boolean)
$20=0 (Soft limits enable, boolean)
$21=1 (Hard limits enable, boolean)
$22=1 (Homing cycle enable, boolean)
$23=3 (Homing direction invert, mask)
$24=25.000 (Homing locate feed rate, mm/min)
$25=500.000 (Homing search seek rate, mm/min)
$26=250 (Homing switch debounce delay, milliseconds)
$27=2.000 (Homing switch pull-off distance, millimeters)
$30=9000 (Maximum spindle speed, RPM)
$31=0 (Minimum spindle speed, RPM)
$32=0 (Laser-mode enable, boolean)
$100=800.000 (X-axis travel resolution, step/mm)
$101=800.000 (Y-axis travel resolution, step/mm)
$102=800.000 (Z-axis travel resolution, step/mm)
$110=800.000 (X-axis maximum rate, mm/min)
$111=800.000 (Y-axis maximum rate, mm/min)
$112=800.000 (Z-axis maximum rate, mm/min)
$120=10.000 (X-axis acceleration, mm/sec^2)
$121=10.000 (Y-axis acceleration, mm/sec^2)
$122=10.000 (Z-axis acceleration, mm/sec^2)
$130=300.000 (X-axis maximum travel, millimeters)
$131=180.000 (Y-axis maximum travel, millimeters)
$132=45.000 (Z-axis maximum travel, millimeters)</pre>
                </div>
                <div class="timeline-footer">
                Related Links: 
                <ul>
                    <li><a href=""></a></li>
                </ul>
                </div>
            </div>
        </li>
        <li>
            <i class="fa fa-clock-o bg-gray"></i>
        </li>
    </ul>
</div>