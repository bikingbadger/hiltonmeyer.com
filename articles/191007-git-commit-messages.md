---
title: Git commit messages
description: Best practice for creating commit history in Git
date: 2019-10-07
updated: 2019-10-07
layout: layouts/article.njk
tags: 
 - content
 - articles
 - git
navtitle: Git commit messages
permalink: articles/git-commit-message.html
---
On the Vanilla Js slack channel, highly recommended if you want to learn with an awesome group of people, Stefan Frede shared a [post](https://chris.beams.io/posts/git-commit/) about git commit messages. What I got out of it was that I actually have a hodge-podge of git commit messages and looking at my `git log` is not pretty. So here are the seven rules of a great Git commit message

1. Separate subject from body with a blank line
2. Limit the subject line to 50 characters
3. Capitalize the subject line
4. Do not end the subject line with a period
5. Use the imperative mood in the subject line
6. Wrap the body at 72 characters
7. Use the body to explain what and why vs. how

Other than the formatting which would seem pretty obvious I really appreciate the fact that I should be aiming at writing the commit message in the imperative. I had no idea what this was. If you fall into that camp to the original [post](https://chris.beams.io/posts/git-commit/) for the explanation because english was not high on my topics of achievement back in the school days but basically you should ask yourself the question

> If applied, this commit will [your subject line here]{.quote}

I really like simple rules, they just seem easier to follow and as I am mostly into KISS (Keep It Stupid and Simple). Another site that was shared was [Conventional Commits](https://www.conventionalcommits.org/) which has a set structure to the commit message. I think for larger projects this could be usedful but for me being the only developer on most of my sites or side projects I prefer to kee p it simple. Basically the structure is as follows:

```
<type>[optional scope]: <description>

[optional body]

[optional footer]
```

Where type can be any of the following:
- fix:
- feat:
- chore:
- docs:
- style:
- refactor:
- perf:
- test:
- improvement:

I like this but the list could be rounded down for my use to 
- fix: Fixing an article or bug that I find in the content or background JS
- feat: Adding something new to the site, as its mainly a blog I can't see how much this will happen
- article: Probably the most used an its custom to the content I'm creating, could be exchanged with docs for brevity
- style: CSS related changes to the site

The downside to using this is that you have 50 characters to work with to you are using valuable real estate for the type. I am considering using this structure but again wondering whether a concise message might just be good enough. I do like though that you could pull out all the types from the history just based on this tagging method.

Another thing I would like to add although this is again overkill for the smaller sites is to use `Resolves: #[Issue num` and `See also: #[Issue num]`. This will enable me to also start referencing and opening issues for my little projects and getting into the habit of using issues to track changes and make updates to the site. I am changing css and different parts of the site in an on going fashion just because I am learning and not creating separate issues for the smaller fixes. This is OK although would i want to revert or pull out something it would be much easier with smaller changes that are more specific.

The example for this article's commit would be 

```
article: Post article about git commit message structure

An article about best practice for creating commit history in Git
```

So starting today I will try out this approach and refer back to this article when I need.