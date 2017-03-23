---
layout: post
published: true
title: Raspberry Pi Zero Cluster with Ansible
categories: [linux, raspberrypi, ansible]
year: 2017
month: 2
day: 11
summary: Raspberry Pi Zero Cluster with Ansible
author: Garth Vander Houwen
redirect_from:
  - /linux/raspberrypi/clusterhat/ansible/2017/02/11/Raspberry-Pi-Zero-Cluster-with-Ansible/
---
<img alt="Cluster Hat" src="https://garthvh.com/assets/img/clusterhat/clusterhat_1.jpg" class="img-responsive img-rounded" />

Out of habit I add a Pi Zero to every Adafruit order I make (or anywhere else that sells the Pi Zero for $5) and have built up quite a collection, I had been looking at some Pi cluster projects but the wiring for network and power always seemed [anoying and fragile](http://makezine.com/projects/build-a-compact-4-node-raspberry-pi-cluster/). 

You may wonder why someone would want a slow pi cluster, I have been looking at using [Ansible](https://www.ansible.com/) as a way to manage software for all my pi based projects and for some cloud automation and thought a cluster might be a fun way to build an Ansible test bed and learn how to manage multiple Pi's.  Then I discovered the [ClusterHAT](https://clusterhat.com/) which attachs to a Raspberry Pi 2/3 "Controller" and uses USB Gadget mode to connect and power 4 Pi Zero "Nodes" into a small cluster with a hat that connects via USB and the GPIO with no other networking or wiring required.

Since putting together a hub and all the cabling to make my own cluster still seemed anoying and was also more expensive I immediately ordered a ClusterHAT and another Pi Zero from [Pimoroni](https://shop.pimoroni.com/products/cluster-hat). Using the pre-built images provided in the simple section of the ClusterHAT [software setup page](https://clusterhat.com/setup-software) I prepared SD cards for each Pi before the hat arrived, I used a 10X 32GB card for the controller and 4 10X 16GB cards for each of the nodes.  Using my trusty label printer I labeled each Pi Zero and SD Card. After about a week they arrived from the UK and I installed the SD cards I had prepared for each Pi and set about attaching the hat to a Pi 2 and an acrylic plate I had laying around.

<img alt="Cluster Hat" src="https://garthvh.com/assets/img/clusterhat/clusterhat_2.jpg" class="img-responsive img-rounded" />

I connected the Pi 2 to ethernet and powered it up, using [Angry IP Scanner](http://angryip.org/download) I angrily scanned my network and found the IP address for my new cluster controller and used SSH to connect to it:

    sudo ssh pi@192.168.X.XX

After logging in I just typed clusterhat to see what would happen:

<img alt="Cluster Hat Terminal" src="https://garthvh.com/assets/img/clusterhat/clusterhat_info.png" class="img-responsive img-rounded" />

Seems legit, let's turn them all on and then back off again:

<img alt="Cluster Hat Terminal" src="https://garthvh.com/assets/img/clusterhat/clusterhat_on_off.png" class="img-responsive img-rounded" />

A nice indicator light on the ClusterHAT lights up when each Pi Zero is turned on. After turning them back on again I angrily scanned my network again and saw 4 new IP addresses for P1, P2, P3 and P4. It really was that easy to get the ClusterHAT up and running I used SSH to connect to each pi and expand the file system, I didn't make any other raspi-config changes as I want to try and use Ansible for that later.

## Ansible Time

First I set up a public/private keypair on the controller so I don't have to do any login stuff:

    // Generate the key
    ssh-keygen -t rsa -b 4096 -f ~/.ssh/id_rsa
    // Spit it Out
    cat ~/.ssh/id_rsa.pub

I copied the key output and used SSH to connect to each Pi Zero from the controller:

    sudo ssh pi@P1, P2, P2, P4
    sudo mkdir ~/.ssh
    sudo nano ~/.ssh/authorized_keys

Paste the key value into nano and use CTRL X to save and exit nano and then SSH on each Pi Zero. From the controller SSH to each Pi Zero and accept the certificate and verify you don't have to enter a password to connect.

Then on the controller install ansible:

    sudo apt-get install python-pip git python-dev sshpass
    sudo pip install markupsafe
    sudo pip install ansible

Next I created an ansible directory and setup a hosts file:

    sudo mkdir ~/ansible
    sudo nano ~/ansible/hosts

And pasted the following text into nano and used CTRL X to save the hosts file and and exit: 

    [clusternodes]
    p[1:4]
    [clusternodes:vars]
    ansible_ssh_user=pi

If everything has gone perfectly you should be able to issue some ansible commands, first lets check that our ansible hosts file is set up correctly:

    ansible -i ~/ansible/hosts clusternodes --list-hosts

<img alt="Ansible Hosts Terminal" src="https://garthvh.com/assets/img/clusterhat/ansible_hosts.png" class="img-responsive img-rounded" />

That worked, now lets see if we can ping all the nodes:

    ansible -i ~/ansible/hosts clusternodes -m ping

<img alt="Cluster Hat Terminal" src="https://garthvh.com/assets/img/clusterhat/ansible_ping.png" class="img-responsive img-rounded" />

That's it, ansible on a pi zero Clustercluster using SSH keys for login, now I have to dig into making playbooks and additional ansible configuration options.  The The ClusterHAT really is a nice way to build a little cluster without fighting with a ton of wiring and USB and ethernet hubs.








