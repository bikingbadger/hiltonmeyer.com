---
title: Nodemon delay
description: Delay the restart of nodemon when doing changes
date: 2019-12-03
updated: 2019-12-03
layout: layouts/article.njk
tags: 
 - content
 - articles
 - node
navtitle: Nodemon delay
permalink: articles/nodemon-delay.html
---

[Nodemon](https://github.com/remy/nodemon) is awesome for development but one thing that comes up from time to time is that as I'm typing the serer will restart over and over. 
I was wondering if there wasn't some kind of debouncing available. A quick check of the docs and I was sorted.

As a command:
```
nodemon --delay 2.5 app.js
```

In a config file called nodemon.json:
```
{
    "delay": "2500"
}
```

Both the above will delay the restart for 2.5 seconds before restarting. Be aware that the value set in the file is in milliseconds.