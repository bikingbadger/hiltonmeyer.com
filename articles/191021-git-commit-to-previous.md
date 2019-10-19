---
title: Git commit file to previous commit
description: How to add, AKA amend, a fix to a previous commit
date: 2019-10-21
updated: 2019-10-21
layout: layouts/article.njk
tags: 
 - content
 - articles
 - git
navtitle: Git commit file to previous commit
permalink: articles/git-commit-to-previous.html
---
I ran into an issue of wanting to simply add a small change to a previous commit that I had just done. I am trying to use git in a way that will hopefully enable me to work on larger projects in the future and being able to navigate the logs has been something that pops up more and more. So creating these mini commits for fixes that were typo's or something like that would definitely not create a clean history. A bit of searching and I found the solution:

```
git commit --amend --no-edit
```

This allows me to add the small fix to the previous commit and I don't even have to have another message. Of course I could omit the `--no-edit` and then add another message with `-m [new message]`.