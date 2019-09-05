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
                <h3 class="timeline-header">3018 CNC Purchased and Built</h3>
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
                <time datetime="2019-07-20T00:00:00-07:00" itemprop="datePublished">July  20, 2019</time>
            </span>
        </li>
        <li>
            <i class="fa fa-gamepad bg-blue"></i>
            <div class="timeline-item">
                <span class="time"></span>
                <h3 class="timeline-header">Offline Controller</h3>
                <div class="timeline-body">
                    <p>I bought the offline controller, but once I fully realized the limitations of only being able to control the machine from either the offline controller or serial connected software.  Since I eventually plan on having my router in an enclosure I want to have both physical and software based control available at the same time, I sent the offline controller back to amazon and am searching for a solution that works with the machine controller.</p>
                </div>
                <div class="timeline-footer">
                Related Links:
                <ul>
                    <li><a href="https://www.amazon.com/gp/product/B07JLJ4HC8/">SainSmart Genmitsu CNC Router Offline Controller</a></li>
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
                <time datetime="2019-08-25T00:00:00-07:00" itemprop="datePublished">August  25, 2019</time>
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
                    <p>Below are the commands necessary to get cncjs running on the pi. You will want to follow the instructions <a href="http://orikad.com/sixpair_instructions.html">here</a> to connect your PS3 controller.  You will need to install <a href="https://github.com/nvm-sh/nvm">NVM</a> and use Node version 8.  Because the node-dualshock-controller project seems to have been abandonded I had to fork the repo in order to fix some errors with node-hid on the pi, as a result the installation is a little fragile.  The controller works wired or wirelessly, but seems to throw an error if you start wired and then disconnect the controller.</p>
                    <img src="//garthvh.com/assets/img/cnc/buttonmap.jpg" class="img-responsive img-rounded" />

<pre>
// Install required build and git tools
sudo apt install build-essential git

// Install NVM and then use node v 8
wget -qO- https://raw.githubusercontent.com/nvm-sh/nvm/v0.34.0/install.sh | bash
nvm install 8
nvm use 8
nvm alias default 8.16.1

// Install cncjs
sudo npm install --unsafe-perm -g cncjs

// Install the PS3 DualShock Pendant
sudo npm install cncjs-pendant-ps3 -g --unsafe-perm

// Run cncjs and the pendant
cncjs && cncjs-pendant-ps3 -p "/dev/ttyUSB0"

# Use pm2 to startup cncjs and cncjs-pendant-ps3
# pm2 will keep the pendant running when the bluetooth disconnects
npm install pm2 -g

# Setup PM2 Startup Script
pm2 startup

#[PM2] You have to run this command one time as root. Execute the following command:
sudo su -c "env PATH=$PATH:/home/pi/.nvm/versions/node/v8.16.1/bin pm2 startup -u pi --hp /home/pi"

# Start CNCjs (on port 8000, /w Tinyweb mount point) with PM2
pm2 start $(which cncjs) -- --port 8000 -m /tinyweb:/home/pi/tinyweb
# Start cncjs-pendant.ps3
pm2 start $(which cncjs-pendant-ps3) -- -p "/dev/ttyUSB0"

# Set current running apps to startup
pm2 save

# Show running apps
pm2 list

sudo npm install GridSpace/grid-apps
cd grid-apps
npm install

# Start kiri.moto with pm2
pm2 start "npm start"


</pre>

<p>After everything is installed, visit http://{youripaddress}:8000/ to access the cncjs web interface, http://{youripaddress}:8080/kiri to access the web interface for kiri:moto and http://{youripaddress}:8080/meta to access the web interface for meta:moto.</p>
<p>If you want to run kiri:moto or meta:moto as well run the following commands to install and run the grid-apps npm package.</p>
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
        <li>
            <i class="fa fa-clock-o bg-gray"></i>
        </li>
    </ul>
</div>