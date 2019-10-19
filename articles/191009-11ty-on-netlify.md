---
title: 11ty Hosted on Netlify
description: My hacked way of setting up automatic deployments on my hosted server
date: 2019-10-09
updated: 2019-10-09
layout: layouts/article.njk
tags: 
 - content
 - articles
 - travis
 - git
navtitle: 11ty Hosted on Netlify
permalink: articles/11ty-on-netlify.html
---
Yesterday I wrote a long [article](/articles/travis-automatic-build.html) on how to get my site built and deployed using [Travis-CI](https://travis-ci.org). I learnt quite a bit in the process but it all actuality I could have had this up and running in no time using Netlify and skipped the whole cutomization steps to get everything playing nice. With the simple setup of the toml file as seen below I would have achieved the same result:

*netlify.toml*
```
[build]
  publish = "_site"
  command = "DEBUG=* eleventy"
```  

So the modern tools don't actually need to be more complicated and time consuming to get up and running. The old saying of when you have a hammer everything is a nail still stands true. The trick is to try and fill your toolbox with tools that can help without causing you too much of a sore thumb in the process, excuse my abuse of the pun.