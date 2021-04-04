---
title: Call Stack
navtitle: Call Stack
description: Deep dive into the Call Stack in Javascript
date: 2021-04-04
updated: 2021-04-04
layout: layouts/article.njk
tags:
  - content
  - articles
  - javascript
permalink: articles/call-stack.html
---

- Ever wondered what that long list is when you get an error in the console?
- This is what drives the Javascript engine
- When the Javascript engine, Chromes v8 for example, starts up it creates an Global Execution Context , basically the environment where your code will run. Think of it as a playground.
- Step 1: Run through the code and place **declarations** into the Global Memory. This can be thought of as a list keeping track of all those kids waiting to get into the playground. Some are variables and some are functions. This list will have pointers giving the engine a sort of map of who's running around in that playground. Javascript likes to confuse us so Global Memory is also known as Global Scope or Global Variable Environment.
- Step 2: It wouldn't be any fun just just having a list and not being able to play in this like playground of ours. So what happens when we actually run a function? This is where the Call Stack comes in. This is a FIFO list, not the game, this is First in First out. It does what is says on the tin. The first call goes in first called pushing, if it call's another function that then also goes on the list. Once finished this function "pops" of the list from the top and returns to the calling function. This then "pops" off itself to returning to the program.
- Think of it as a kid wanting to push into a line for one of the rides
- But needs a ticket so needs to go off and get a ticket
- Step 3: **Local Execution Context**. Say what?!?!? Little helper box to hold this internal run.



https://gist.github.com/jesstelford/9a35d20a2aa044df8bf241e00d7bc2d0
https://blog.bitsrc.io/understanding-execution-context-and-execution-stack-in-javascript-1c9ea8642dd0