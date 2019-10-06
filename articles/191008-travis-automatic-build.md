---
title: Travis automated build and hosted deployment
description: My hacked way of setting up automatic deployments on my hosted server
date: 2019-10-08
updated: 2019-10-08
layout: layouts/article.njk
tags: 
 - content
 - articles
 - travis
 - git
navtitle: Travis automated build and hosted deployment
permalink: articles/travis-automatic-build.html
---
I have website hosting that I'm currently trying to bend to my will and not sure how much longer I can continue to mess around with Shared Hosting and getting everything working. Luckily there are services available around the interwebs that can help with build things. [Travis-CI](https://travis-ci.org) is one of those that has come to my aid to help with the build process. [Netlify](https://www.netlify.com/) is also wonderful and definitely something I would rather use for static sites as it does the whole build and deploy for you.

# Repository

The first thing I have to do is to push the changes to my [Github repository](https://github.com/bikingbadger/hiltonmeyer.com). This holds the changes and because of my setup of 11ty building only my current content on the site I don't have to worry about publishing future content that I am still working on or is in drafts. The thing is that once I have finished writing an article I can make sure the date is current to the day I am done and then it will be published or I can 'schedule' the post by having a future date and when the build happens on that day the post will go live.
```
git push origin master
```

# Automation

My missing piece of this automation puzzle was somehow scheduling the builds to happen daily. I have heard a lot about Continuous Integration and Travis-CI has popped onto the radar from time to time without me fully understanding exactly what it is. There is also the whole CI integration on Gitlab. I'm currently using Github so I wanted a way to build the site daily with Travis. I thought I could also push to the server but this seemed to be a bit of a security risk I didn't want to take. I broke it down into a few steps:

- Build the master on a schedule using Travis
- Deploy to Github Pages
- On the hosted server create cronjob to clone the gh-pages branch 
- Sync the repo locally on the server with my site

## Build using Travis

This was actually not that difficult after reading the [getting started documentation](https://docs.travis-ci.com/user/tutorial/) and then copying the .travis.yml file from the 11ty repo for their build process which I noticed had a travis build file in it. I actually got lucky because it may have been something completely different. I was not looking to create a build for mulitply operating systems or node versions. I chose the latest version of node and linux. These were set with `language`, `node_js` and `os` respectively and can be seen below in complete. Before the build I need to `npm install` my dependancies as they are required for the the creation of my site by 11ty. I only want to build the master branch so added that and kept it to ignore building to gh-pages as this is what the deploy step will do. You can see these settings on the `branches` settings. And that was all I needed for the build.

In order to schedule the daily build I went to the settings and added a line to run a daily build on master. This will now have this build process run at least daily and publish all the current content that might be waiting.

![Travis Settings](https://res.cloudinary.com/hiltonmeyer-com/image/upload/c_scale,w_800/v1570366009/travis-automation_gtnppp.jpg)

## Deploy to gh-pages

The next step was to deploy this build back to github so that I could then clone that branch to the server. This took a bit of tinkering and playing around but the [docs](https://docs.travis-ci.com/user/deployment/pages/) made that so much easier. My first step was to create a github token which I followed the [step by step guide](https://help.github.com/en/articles/creating-a-personal-access-token-for-the-command-line) provided by Github. I copied this token and added it as an [environment variable in Travis](https://docs.travis-ci.com/user/environment-variables/#default-environment-variables), again follow the link for the documentation on how to do this. I made sure to call it `GITHUB_TOKEN`, the same uppercase as I used in the Yaml file. This was the last of my Travis setup and the Github requirements. I still could not get it to work and the _site directory was not showing up. It then dawned on my that Travis was trying to push the build to Github and the .gitignore had the directory in there. This means that in development I will need to delete this directory each time or find another way of getting around this. Once I had removed the line I could see the folder created in the gh-pages branch which Travis had also created. Woop Woop!!!!!

## Final travis.yml

This is how the final Yaml file for Travis looks. I place this in my root directory and away you go. It will also build on each push I do to the master branch.

```
language: node_js
node_js:
  - 12
before_script:
  - npm install
script: npm run build
branches:
  except:
    - gh-pages
branches:
  only:
    - master    
sudo: false
os:
  - linux
deploy:
  provider: pages
  skip_cleanup: true
  github_token: $GITHUB_TOKEN  # Set in the settings page of your repository, as a secure variable
  keep_history: true
  on:
    branch: master
```    

## Clone gh-pages

I now had the automation setup to build the site daily and deploy it as a gh-pages branch. I could have from here just used Github as my host and setup a custom URL. I though already had the hosted site so needed a way to get that locally there. Now you might be asking why not just run a cronjob on the server to pull the master daily, build it and then sync the changes. Well the hosting server doesn't have npm installed so I was out of luck. Luckily git was available so I knew all I needed was to somehow get the site built automatically there and then i could just pull that branch on a scheduled basis. The track here was to clone the specific branch using `git clone -b gh-pages`. I now had the latest build on my server. I then used `rsync` to synchronize the changes on the latest build to my site.

```
rm -rf $HOME/hiltonmeyer.com
git clone -b gh-pages https://github.com/bikingbadger/hiltonmeyer.com.git
/usr/bin/rsync -avzh $HOME/hiltonmeyer.com/_site/ $HOME/www/hiltonmeyer.com/
```

# Final Notes

This is probably a very niche way of getting my site deployment automated but it seems to work and I don't have to worry about copying from my local machine any longer.