---
layout: post
published: false
title: Raspberry Pi Cluster with Ansible
categories: [linux, raspberrypi, clusterhat, ansible]
year: 2017
month: 2
day: 11
summary: Raspberry Pi Zero Cluster with Ansible
---
<img alt="Cluster Hat" src="https://garthvh.com/assets/img/clusterhat/clusterhat_1.jpg" class="img-responsive img-rounded" />


Out of habit I add a Pi Zero to every Adafruit order I make (or anywhere else that sells the Pi Zero for $5) and have built up quite a collection, I had been looking at some Pi cluster projects but the wiring for network and power always seemed anoying and fragile. 

You may wonder why someone would want a slow pi cluster, I have been looking at using [Ansible](https://www.ansible.com/) as a way to manage software for all my pi based projects and for some cloud automation and thought a cluster might be a fun way to build an Ansible test bed and learn how to manage multiple Pi's.  Then I discovered the [ClusterHAT](https://clusterhat.com/) which attachs to a Raspberry Pi 2/3 "Controller" and uses USB Gadget mode to connect and power 4 Pi Zero "Nodes" into a small cluster.

Since putting together a hub and all the cabling to make my own cluster still seemed anoying I immediately ordered a ClusterHAT and another Pi Zero from [Pimoroni](https://shop.pimoroni.com/products/cluster-hat). Using the pre-built images provided in the simple section of the ClusterHat [software setup page](https://clusterhat.com/setup-software) I had prepared SD cards for each Pi before the HAT arrived, I used a 10X 32GB card for the controller and 4 10X 16GB for each of the nodes.  Using my trusty label printer I labeled each Pi Zero and SD Card. After about a week they arrived from the UK and I installed the SD cards I had prepared for each Pi and set about attaching the hat to a Pi 2 and an acrylic plate I had laying around.

<img alt="Cluster Hat" src="https://garthvh.com/assets/img/clusterhat/clusterhat_2.jpg" class="img-responsive img-rounded" />

I connected the Pi 2 to ethernet and powered it up, using [Angry IP Scanner](http://angryip.org/download) I angrily scanned my network and found the IP address for my new cluster controller and used SSH to connect to it:

    sudo ssh pi@192.168.X.XX


