---
title: R12.2 Adding server to Weblogic
description: Adding a secondary server such as oa_core to weblogic in Oracle EBS R12.2
date: 2019-08-15
updated: 2019-08-15
layout: layouts/article.njk
tags: 
 - content
 - articles
 - ebs
navtitle: R12.2 Adding server to Weblogic
permalink: articles/ebs-weblogic-server.html
---

In R12.2 with Weblogic now playing a huge role as well as java also creating resource heavy processes you will eventually run into a situation where you want to add servers to Weblogic. I'd actually recommend adding at least one more oa_core server as this is the one we've noticed is causing most of the issues.

## Some checks and background

Oracle recommends up to 150-200 concurrent users per JVM of size 2 GB. You can use the <span class='script-link'>[EBS Active Users Script](/scripts/ebs_active_users/)</span> to find the current value but you should track this over time to give you an indication of how many users are in the system.

Finding the next available port

## Adding Server

Add oacore_server2 via command line:

```
perl $AD_TOP/patch/115/bin/adProvisionEBS.pl ebs-create-managedserver \
   -contextfile=$CONTEXT_FILE \
   -managedsrvname=oacore_server2 \
   -servicetype=oacore \
   -managedsrvport=7205 \
   -logfile=/tmp/addMS_oacoreserver2.log
```
Start the new managed server as follows:
```
$ADMIN_SCRIPTS_HOME/admanagedsrvctl.sh start oacore_server2
```

Added details of the newly added managed server into the OHS configuration files mod_wl_ohs.conf and apps.conf via command line as below:
```
perl $FND_TOP/patch/115/bin/txkSetAppsConf.pl \
   -contextfile=$CONTEXT_FILE \
   -configoption=addMS \
   -oacore=testserver.example.com:7205

perl $FND_TOP//patch/115/bin/txkSetAppsConf.pl \
-contextfile=<CONTEXT_FILE> \
-configoption=addMS \
-oacore=<host>.<domain>:<port> \
-oafm=<host>.<domain>:<port> \
-forms=<host>.<domain>:<port> \
-formsc4ws=<host>.<domain>:<port>   
```

Bounce the apache server:
```
sh $ADMIN_SCRIPTS_HOME/adapcctl.sh stop
sh $ADMIN_SCRIPTS_HOME/adapcctl.sh start
```

## Reference

* [Managing Configuration of Oracle HTTP Server and Web Application Services in Oracle E-Business Suite Release 12.2 (Doc ID 1905593.1)](https://support.oracle.com/epmos/faces/DocumentDisplay?id=1905593.1)
