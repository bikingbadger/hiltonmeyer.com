---
title: R12.2 Startup and Shutdown
description: Scripts for starting and stopping R12.2 EBS
date: 2019-08-01
layout: layouts/article.njk
tags: 
 - posts
 - ebs
 - scripts
navtitle: R12.2 Startup and Shutdown
---

## Start Apps Services

**Node Manager**
```	
$adnodemgrctl.sh start 
Enter Weblogic Admin Password:
```
**Weblogic Admin Server**
```	
$adadminsrvctl.sh start 
Enter Weblogic Admin Password:
```	
**Application Listener**
```	
$adalnctl.sh start
```	
**Oracle Process Manager**
```	
$adopmnctl.sh start
```	
**Apache Services**
```	
$adapcctl.sh start
```	
**Managed Server for OACORE Services**
```	
$admanagedsrvctl.sh start oacore_server1 
Enter Weblogic Admin Password:
```	
**Managed Server for Forms Services**
```	
$admanagedsrvctl.sh start forms_server1 
Enter Weblogic Admin Password:
```	
**Managed Server for Fusion MiddleWare  Services**
```	
$admanagedsrvctl.sh start oafm_server1 
Enter Weblogic Admin Password:
```	
**Managed Server for Forms web  Services**
```	
$admanagedsrvctl.sh start forms-c4ws_server1 
Enter Weblogic Admin Password:
```	
**Concurrent Manager Service**
```	
$adcmctl.sh start apps/$APPS_PASS
```	
**Fullfillment Serer Services**
```	
$jtffmctl.sh start
```	

## Stop Apps Services

When we want to stop all services adstpall.sh apps/apps again it is going to ask weblogic password

**Fullfillment Serer Services**
```	
$jtffmctl.sh stop
```	
**Concurrent Manager Service**
```	
$adcmctl.sh stop apps/apps
```	
**Managed Server for Forms web  Services**
```	
$admanagedsrvctl.sh stop forms-c4ws_server1 
Enter Weblogic Admin Password:
```	
**Managed Server for Fusion MiddleWare  Services**
```	
$admanagedsrvctl.sh stop oafm_server1 
Enter Weblogic Admin Password:
```	
**Managed Server for Forms Services**
```	
$admanagedsrvctl.sh stop forms_server1 
Enter Weblogic Admin Password:
```	
**Managed Server for OACORE Services**
```	
$admanagedsrvctl.sh stop oacore_server1 
Enter Weblogic Admin Password:
```	
**Apache Services**
```	
$adapcctl.sh stop
```	
**Oracle Process Manager**
```	
$adopmnctl.sh stop
```	
**Application Listener**
```	
$adadlctl stop
```	
**Weblogic Admin Server**
```	
$adadminsrvctl.sh stop Enter 
Weblogic Admin Password:
```	
**Node Manager**
```	
$adnodemgrctl.sh stop Enter 
Weblogic Admin Password:
```	