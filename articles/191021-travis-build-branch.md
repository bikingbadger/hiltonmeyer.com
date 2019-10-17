---
title: Travis build branch for github pages
description: How to specify the branch for Travis CI to build to
date: 2019-10-17
updated: 2019-10-21
layout: layouts/article.njk
tags: 
 - content
 - articles
 - travis
 - git
navtitle: Travis build branch for github pages
permalink: articles/travis-build-branch.html
---
In my article of automating my [build process for a hosted server](/articles/travis-automatic-build.html) I was using the default of gh-pages branch. This is the vanilla out of the box branch used by Travis-CI. The issue is that this should be a clean branch because I was getting emails about issues with the build of the github.io page:

```
[bikingbadger/hiltonmeyer.com] Page build failure

The page build failed for the `gh-pages` branch with the following error

The tag `set` on line 14 in `feed.njk` is not a recognized Liquid tag
```

The error was that is was still looking at the nunjucks files so this was causing me some issues. Again I was using this branch as a hack to get around Travis being able to build the site for me and then I could clone it onto the hosted server. I don't like getting junk emails so looked into it a bit and found that I could simply give another target branch if I didn't want to use the default. I added the `target_branch` to parameter and it worked like a charm. This is the currently setup:

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
  target_branch: prod
  on:
    branch: master
```