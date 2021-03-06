---
title: Custom Bash Command Prompt
description: Customize bash prompt with various colors
date: 2020-05-21
updated: 2020-05-21
layout: layouts/article.njk
tags:
  - content
  - articles
  - bash
navtitle: Custom Bash Command Prompt
permalink: articles/custom-bash-prompt.html
---

This is the setup I use for my bash prompts in various environments. I simply add the following to my `.bashrc` file. This is more a reference for me but if you find it useful give it a go and play around with the various colors.

```bash
###############Custom Prompt###############
set_prompt () {
        Reset='\[\e[0m\]'

    Black='\[\e[0;30m\]'
    Blue='\[\e[0;34m\]'
    Green='\[\e[0;32m\]'
    Cyan='\[\e[0;36m\]'
    Red='\[\e[0;31m\]'
    Purple='\[\e[0;35m\]'
    Brown='\[\e[0;33m\]'
    Yellow='\[\e[0;33m\]'

    if [ $(whoami) == 'root' ] || [[ $(whoami) == *"prod"* ]] || [[ $(whoami) == *"PROD"* ]]; then
        PrimaryColor="${Red}"
        SecondaryColor="${Brown}"
        promptSymbol="${Red}!! "
    else
        PrimaryColor="${Green}"
        SecondaryColor="${Yellow}"
        promptSymbol="${Green}$ "
    fi

        userhost="${PrimaryColor}$(whoami)@$(hostname -s) "
        currentdir="${SecondaryColor}[$(pwd | sed "s!^$HOME!~!")] "
    currentTime="${PrimaryColor}$(date +%H:%M:%S) "

    PS1="$Reset$White"
    PS1+="$userhost"
    PS1+="$currentdir"
    PS1+="$currentTime"
    PS1+="$promptSymbol"
    PS1+="$Reset"
}

PROMPT_COMMAND='set_prompt'
################Custom Prompt End###############
```