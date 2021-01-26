---
title: Project Setup
description: The idea behind the kitchen manager project
date: 2021-02-01
updated: 2021-02-01
layout: layouts/article.njk
tags: 
 - content
 - series
 - pantry
 - writing
 - learning
navtitle: Project Setup
permalink: articles/series/pantry/1-setup.html
---

### Purpose and reason

Just over a year ago I decided I would like to change track and start [learning web development](articles/learn-in-public.html). I had an idea of learning in public and generally doing it self taught by going through tutorials through the internet and picking up what I can. Then 2021 happened and things went off the tracks a bit. I did manage to keep learning but it was very much something on the back burner as I was juggling everything else going on around me. I am now getting back into the swing of things and decided that I would share my app development out in the wild world. So many tutorials I find are non real world and generally quite polished as they're gone through the process and simplified everything down to how it should look in the final state, missing out all the messing about and decision making, and that is what I want to do with this series. 

The purpose of this app will be to manage my kitchen a bit better:

* Save an ingredient list with the stocks on hand
* Allow me to save recipes
* Create a shopping list based on the recipes and stocks I already have

This is a real world app that I would like to use daily and having not really found exactly what I'm looking for I reckon that would be a cool app to build and then show the updates along the way as I use it in the real world and also make mistakes and flesh out the features that I would like to add. The reasons are that I would like to loose a bit of weight, not loose so much weight in the wallet when shopping and lowering the waste factor around the house.

### Clone repo

The repo for the app will be in [Github](https://github.com/bikingbadger/pantry) and completely open source. I'm thinking that for each post I'll create a branch so that way it will give a time line and if you want to follow along then you can. This is an open source project so if somehow you find this series and feel like contributing then feel free, it would just add more to the learning and sharing. So let's start with cloning the repo, the main branch will always be the most current. 

Clone the repo to your local machine and open it with VS Code, thats the `code .` part but you can obviously use anything that you currently find comfortable coding in. 

```bash
git clone https://github.com/bikingbadger/pantry.git
cd pantry
code .
```

`git clone` is the git command that is used to copy the repo from Github to the local machine. You could also download the source in a zip file from Github and then setup the remote. As you can see when I type `git remote -v` it shows that my remote called origin(the default) is now pointing towards my repository on Github:

```bash
origin  https://github.com/bikingbadger/pantry.git (fetch)
origin  https://github.com/bikingbadger/pantry.git (push) 
```

### Create Vue App

I've decided on Vue as I am really trying to apply what I've learnt in a Udemy course I am currently working through and this could be a perfect opportunity to build the app and improve it as I go along.

Firstly though let's create the first branch for setting up the project. This will create a branch from the `main` branch as this is currently the brach I'm on and the only one presently.

```
git checkout -b 1-setup
```

Install the Vue CLI globally and recently Vue 3 was released so I'll be going with that

```
npm install vue-cli -g
vue --version
@vue/cli 4.5.9
```

Time to create the bare application, I use the `--bare` option in order to skip having to delete all the Hello World examples that normally get created.

```
vue create . --bare
? Generate project in current directory? (Y/n) Y
```

As I mentioned, Vue 3 was just released so going to give it a try and use that to build the application. This step takes a while as the packages are downloaded and the basic structure of the project is created. Grab a coffee and see you here.

```
? Please pick a preset:
  Vue-TS ([Vue 2] router, babel, typescript)      
  Default ([Vue 2] babel, eslint)
> Default (Vue 3 Preview) ([Vue 3] babel, eslint) 
  Manually select features
```

After it's done the new app can be started up with `npm run serve`. You should see something like this:

![Pantry App First Look](https://res.cloudinary.com/hiltonmeyer-com/image/upload/f_auto,q_auto,c_scale,w_auto,dpr_auto/v1611487703/hiltonmeyer.com/pantry-001_qz4qja.jpg)

I'll just make two quick changes. One is adding a logo for the application and the other is some simple CSS. I'll just put the CSS thing out there, I've not yet cut my chops on design yet and something that I am still working on. With this in mind I have bounced between CSS frameworks but I have finally fallen onto [Water.css](https://watercss.kognise.dev/). This just gives me a clean base off which to work and get a application up and running without having to dive into fancy CSS which hopefully I'll get into at a later stage.

The logo I've recently found [Streamline](https://app.streamlinehq.com/) which has quite a few cool illustrations so I've chosen a cool like robot cooking and replaced the logo of Vue with this one. A cool tip that I picked up through some JAMStack sites is using [Cloudinary](https://cloudinary.com/console) that does all the image manipulation for me without having to dive down some more rabbit holes. So my `App.vue` file now looks like this

```
<template>
  <img
    alt="App logo"
    src="https://res.cloudinary.com/hiltonmeyer-com/image/upload/v1611488325/pantry/cooking-robot_xdaw7k.png"
  />
  <h1>Pantry</h1>
  <h2>Kitchen Manager</h2>
</template>
```

![Pantry Layout](https://res.cloudinary.com/hiltonmeyer-com/image/upload/f_auto,q_auto,c_scale,w_auto,dpr_auto/v1611490439/hiltonmeyer.com/pantry-002_bmfqhv.jpg)

### Bonus

I'm using VSCode and one of the cool add-ons is [Vetur](https://vuejs.github.io/vetur/). This is easy enough to setup by creating a `jsconfig.json` file in the root and add the following

```
{
    "include": [
        "./src/**/*"
    ]
}
```