---
title: Protect git branch and prevent master push
description: How to keep someone from pushing directly to the master branch and preserving develop branch in PR
date: 2020-02-23
updated: 2020-02-23
layout: layouts/article.njk
tags:
  - content
  - articles
  - git
navtitle: Protect git branch and prevent master push
permalink: articles/protect-git-branch-and-prevent-master-push.html
---

## Background

I've only really ever developed application by myself but I work in a way that I hope to be able to work in a team. I still have plenty to learn but the basic idea is that I have 2 main branches `master` and `develop`. I setup `develop` as my default branch and the `master` branch is what is deployed as Production by merging changes from develop. So this is just a note to myself how to create this setup and it might be of some use to anyone else trying to organise their process a bit without making things to complicated.

## Branch protection
