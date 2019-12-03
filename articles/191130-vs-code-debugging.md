---
title: Debugging using VS Code
description: How to start debugging in VS Code
date: 2019-12-05
updated: 2019-12-05
layout: layouts/article.njk
tags: 
 - content
 - articles
 - vs-code
 - debugging
navtitle: Debugging using VS Code
permalink: articles/vs-code-debugging.html
---
Debugging using VS Code is pretty simple for Node projects. If you run `node --inspect-brk app.js` it will start a debugging session

![Debugging](https://res.cloudinary.com/hiltonmeyer-com/image/upload/v1575104620/debugging-03_zty5zr.jpg)

Then if you use ctl+shirt+P you can toggle the auto attach which will open the session in the Debugger View

![Debugging](https://res.cloudinary.com/hiltonmeyer-com/image/upload/v1575104620/debugging-02_reknek.jpg)

This will then attach to the debugger

![Debugging](https://res.cloudinary.com/hiltonmeyer-com/image/upload/v1575104621/debugging-01_wnt3tp.jpg)

Then just a case of adding breakpoints where you want and start stepping through the code. You don't have to leave VS Code