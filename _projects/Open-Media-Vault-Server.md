---
layout: project
title: Open Media Vault Server
summary: Open Media Vault server with 9 terrabytes of storage, 6 drives and 32 gigs of ram for use as redundant file backup and host for Docker containers running assorted services.
featured_image: '../../assets/img/omv/01-node_304.jpg'
photos_path: /assets/img/omv
tags: [Open Media Vault]
tag: "Open Media Vault"
project_status: Complete
order: 3
redirect_from: /project/Open-Media-Vault-Server/
---

My Open Media Vault server started out as a way to replace my dying HP 470 Windows Home Server after it was abandoned by Microsoft.  Initially I thought the killer feature I wanted to maintain was the drive extender function of WHS that allows you to add various sized disks to a single storage folder and then use the UI to specify how many copies you wanted of each folder and the server would manage backups for you. 

There is an open source project called [greyhole](https://www.greyhole.net/) that replicated much of the same functionality, I implemented this on OMV when I initially set it up, but over time found it problematic to maintain, and decided that I really didn't need the features provided by A JBOD like solution anymore as everthing I need to do is possible with RSYNC tasks.

While the WHS was mostly a file server and computer backup system by the time it died storage was much much cheaper and many of my files are now also backed up in various online storage solutions.

I now use a pretty simple solution on my OMV NAS for file backup.  I have music and movie folders as well as a single storage folder with other data. Each of these has a RSYNC job to back up to a second drive on the server. I also use the USB backup plugin, which automatically backs up specified folders to a usb drive when connected.  I have about 3 TB of data that backs up this way and is not growing very fast.

If Open Media Vault had not transitioned from their plugin system to docker for various network services I might have just done away with the server and used some large USB backup drives.  The docker feature in OMV has really increased it's utility for me and motivated me to upgrade my motherboard and ram for better container performance.

Here are a few of the containers I have run over time:

* JellyFin
* Pi-Hole Ad Blocker
* Motion Eye Security Cameras
* MariaDB Databases
* Ansible Semaphore

My ancient motherboard started dying and I broke one of the SATA connectors when moving everthing into the Node 304 case I got on craigslist for $40, so I upgraded the motherbord and ram to a quad core Intel Gimini Lake fanless motherboard and 32 gigs of ram. I also upgraded to two $20 PNY SSD's for the OS drive and OS backup drive. I added a 1 tb Samsung Evo SSD which I used to host all the containiners and their data volumes. There are 2 2 terrabyte SSD drives storing the primary copy of all my media and data, that data is backed up on the sole hard drive remaining a 3.5" 4 terrabyte drive. The full machine upgrade is detailed in the parts list linked above.

I 3d printed several of a SSD stacker part to allow me to put 3 SSD disks in one of the Node 304 case's drive cages. I have 7 total disks in the Open Media Vault NAS, 5 SSD drives and 1 3.5" hard drives, leaving me with two open slot remaining.