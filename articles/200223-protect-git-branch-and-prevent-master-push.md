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

My first step is creating the develop branch from master and pushing this up to Github. You could also do this by simply creating a branch from the GUI.

```
git checkout master
git checkout -b develop
git push origin develop
```

Once the `develop` branch is in the repo you want to navigate to `Settings > Branches` and set the develop branch you just created as default.

![Github default branch](https://res.cloudinary.com/hiltonmeyer-com/image/upload/c_scale,q_auto:best/v1582470547/github-default-branch_hr5c0g.jpg)

### Branch protection rules

This is of course optional and you could leave the `master` as default. I just prefer doing it this way to further protect the `master` branch. The next step is protecting the `develop` branch from deletion by simply creating a _Branch protection rule_ by clicking on the add button. In _Branch name pattern_ add the text `develop` without selecting anything else. This will now protect the branch from being deleted.

`master` branch will also need to be protected in the same way. You should be left with two rules that have nothing currently checked but this will protect both of these.

## Disable master push

In the `.git/hooks` folder you need to create a file _pre-push_, no file extension and add the following to the file:

```
#!/bin/bash

protected_branch='master'
current_branch=$(git symbolic-ref HEAD | sed -e 's,.*/\(.*\),\1,')

if [ $protected_branch = $current_branch ]
then
    echo "${protected_branch} is a protected branch, create PR to merge"
    exit 1 # push will not execute
else
    exit 0 # push will execute
fi
```

The script checks the current branch being pushed and compares it to the protected branch, in this case master. A simple if statement and stop pushing directly to the master branch and you will need to create a pull request to merge changes. You could do the same for the develop branch to also protect that. This is a simple solution for me to at least protect those branches I want to and forces me to create PR's everytime I want to make a change.

## Workflow

Having the `master` and `develop` branches I will pull my develop branch and then create another branch for the work I want to work on, for example:

```
git checkout develop
git pull origin develop
git checkout -b article-protect-git-branch

### MAKE CHANGES ###

git push origin article-protect-git-branch
```

The new feature is not in the repository and I can create a pull request into develop to check the changes live before finally merging them into production.
