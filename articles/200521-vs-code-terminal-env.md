---
title: VS Code Terminal Environment Variables
description: Setting environment variables and alias for the Integrated terminal in VS Code
date: 2020-05-17
updated: 2020-05-18
layout: layouts/article.njk
tags:
  - content
  - articles
  - vs code
navtitle: VS Code Terminal Environment Variables
permalink: articles/vs-code-terminal-env.html
---
I enjoy using the VS Code integrated terminal. With the shortcut key ``Ctrl+` `` I can pull it up and hide it. I really like the way you can hide the panels and focus on the code easily. I've been running up against getting alias' working though. I had been putting them in the `~/.bash_profile` file but it wasn't working. I finally decided to dig a bit deeper and found the answer, `~/.bashrc`. This is great because I can now set my environment up and get shortcuts working, this is the example of my current setup: 

```bash
alias develop="cd /c/applications"
alias glog="git log --pretty=oneline --graph --decorate --all"
alias glog_nomerge="git log --no-merges --oneline"
alias gpod="git pull --rebase origin develop"
alias gpush="git push origin develop"
```