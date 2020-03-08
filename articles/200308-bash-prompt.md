```
Custom Prompt###############
set_prompt () {
        Reset='\[\e[0m\]'

    Black='\[\e[0;30m\]'
    Blue='\[\e[0;34m\]'
    Green='\[\e[0;32m\]'
    Cyan='\[\e[0;36m\]'
    Red='\[\e[0;31m\]'
    Purple='\[\e[0;35m\]'
    Brown='\[\e[0;33m\]'

    if [ $(whoami) == 'root' ] || [[ $(whoami) == *"prod"* ]] || [[ $(whoami) == *"PROD"* ]]; then
        PrimaryColor="${Red}"
        SecondaryColor="${Brown}"
        promptSymbol="${Red}!! "
    else
        PrimaryColor="${Green}"
        SecondaryColor="${Blue}"
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