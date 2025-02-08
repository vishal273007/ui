

<div style="text-align: center;">   <h1>  Ubuntu  </h1>  </div>

> Use your palm and fish shell as a stick note to memorize and remember things and change after memorizing.

### Basic to dos:
- `touch ~/.hushlogin`: Hide home screen message.


<br>

### Basic Linux Commands:
```bash

du -h file.txt (OR) du -sh folder # Check size.
ls -l file.txt (OR) ls -ld folder # Check property.

rm *.ext  # remove all files with specific extension(.class)
mv .* * ~/ui  # move all files in previous folder

echo "text" >/>> file.ext # '>' erase and overwrite with new data, creates a file if not available. '>>' appends text safely
echo message # print message on the terminal

touch/rm ClassA.java ClassB.java ClassC.java # create/delete simultaneously

pwd # working directly
ls -a # list hidden and normal files/folders
cd ../.. # two directory back
cat filename.ext # Show file content quickly

cd foldername # Open folder
mkdir foldername # Make a folder the current directory
touch filename.ext # Create a file
cp file.txt /sdcard/download/ OR cp -r folder /mnt/d/downloads # Copy

mv folder/file.txt ~/folder # Move
mv old_foldername/filename.txt new_foldername/filename.txt # Rename
rm -f 'long_filename.txt' / rm -rf foldername # Delete(-f flag for forced)

# text - Terminal Comments(Ex: ls # this will not ignored by terminal)
sudo !! # repeat last command with sudo
Ctrl + z/c # stops/halts executing command

```

<br>

<!-- ===================================================================================================================================== -->


### Ubuntu packages:
```bash
sudo apt install git python openjdk-17 nodejs openssh sshpass neovim wget curl # set 1 packages

sudo apt install fish tmux eza bat fzf, tree, tldr, neofetch, colordiff -y #batcat(bat) for enanced quick file preview 

sudo apt install pip pipx snapd build-essential make net-tools unzip adb fastboot platform-tools -y # set 2 packages


# pip(for libraries & framework)
# pipx(for apps like yt-dlp) > pipx ensurepath > [set -gx PATH $PATH ~/.local/bin(do manually if not recognized)] > pipx install yt-dlp

# Install via downloading debian based(for ubuntu) packages
`wget app.deb_link` > `sudo apt install ~/chrome.deb` / `sudo dpkg -i vscode.deb` > `code`

```


<!-- ===================================================================================================================================== -->

<br> <br>


# Fish Shell:

### Install Fish:
```bash

# Add fish repository
sudo apt-add-repository ppa:fish-shell/release-3
sudo apt update

# Install fish
sudo apt install fish -y
```

### Set Fish as the default shell:
```bash
chsh -s shell_name / chsh -s $(which shell_name)

# Optional: Install Fisher (package manager)
curl -sL https://raw.githubusercontent.com/jorgebucaran/fisher/main/functions/fisher.fish | source && fisher install jorgebucaran/fisher
```

<!-- ====================================================================================================================================== -->

<br> <br>

### Oh My Posh for Fish:
```bash
# This may not work in one time. You may need to try few times.
# Install
curl -s https://ohmyposh.dev/install.sh | bash
# Verify
which oh-my-posh

# Add to fish Config - Oh My Posh initialization
oh-my-posh init fish --config ~/agnoster.omp.json | source

# Download Agnoster theme
wget https://raw.githubusercontent.com/JanDeDobbeleer/oh-my-posh/mai
n/themes/agnoster.omp.json -O ~/agnoster.omp.json

# Add to PATH if needed
fish_add_path ~/.local/bin

# Add initialization in config.fish 
eval "$(~/.local/bin/oh-my-posh init fish --config ~/.cache/oh-my-posh/themes/agnoster.omp.json)"

# Source config
source ~/.config/fish/config.fish
```

<!-- ====================================================================================================================================== -->



<br>

# Aliases:

>`nvim aliases.fish` in fish folder and add these aliases.  Ensure alias names do not conflict with system keywords, i.e. 'java'.

>[Use alias ONLY for longer path or most frequently used directories only.]

```bash

# Add 'source ~/.config/fish/aliases.fish' to the main config.fish file for external alias files.

# Use VS Code editor To edit config files.

# =========================================================================
# File and Directory Navigation
alias c='clear'; alias cl='clear'; alias cls='clear'  # Clear the terminal screen.

alias fish="cd ~/.config/fish/"  # Navigate to the Fish shell configuration folder.

alias downloads="cd /mnt/d/Downloads" # Windows Downloads folder.
alias desktop="cd /mnt/c/Users/Vishal\ Vishwakarma/Desktop" # Windows Desktop folder.


# =========================================================================
# Git Aliases
alias gs="git status"  # Check the status of the Git repository.
alias gp="git pull && git add . && git commit -m 'updated' && git push"  # Pull first, then stage, commit, and push changes
alias gl="git log --oneline --graph --decorate"  # Show a concise and visual Git history.

# =========================================================================
# Tmux
alias tmux="~/.tmux-start.sh"  # Start tmux using a custom script.

# =========================================================================
# SSH to Windows
alias sshwindows="~/.ssh_login_windows.fish" # modified alias for fish
alias sqlplus="~/.sqlplus_remote_login.fish" # add alias for quick login to sqlplus

# =========================================================================
# bat(cat) and eza/exa (ls - Enhanced File Listings with icons)

alias cat='batcat' # Use bat as a replacement for cat.
alias ls='eza --icons --ignore-glob="snap|*.class"' # hide snap dir and .class files.
# OR function for hiding the snap folder and .class files
#function ls --wraps eza
#    eza --icons --ignore-glob="snap|*.class" $argv
#end

alias ll="eza -l --icons"           # Long format with icons.
alias la="eza -la --icons"          # List all files (including hidden) with icons.
alias lt="eza --tree --icons"       # Display files in a tree structure with icons.
alias l.="eza -d .* --icons"        # List hidden directories with icons.

# =========================================================================
# Programming Languages
alias python="python3"  # Use Python 3 by default.

# =========================================================================
# Network and System
alias ip="ip addr show"         # Show IP addresses.
alias ip="ipconfig.exe | grep IPv4"     # Combined IP addresses.
alias psg="ps aux | grep"       # Search for running processes.
alias df="df -h"                # Display disk usage in human-readable format.
alias free="free -h"            # Show memory usage in human-readable format.

# =========================================================================
# Other Custom Aliases

alias update="sudo apt update && sudo apt upgrade -y"  # Update and upgrade all packages.

```



<br> <br>

# Fish Config
```bash
# Check if the shell session is interactive
if status is-interactive
    # Commands specific to interactive sessions can go here.
end

# Bind tab key to accept-autosuggestion
bind \t accept-autosuggestion

# =========================================================================
# Fish Greeting
set -g fish_greeting "   Note: Don't be at the room. Go out, explore, socialize and learn."


# Source additional aliases from an external file.
source ~/.config/fish/aliases.fish

# Reload the Fish shell configuration.
alias sf 'source ~/.config/fish/config.fish'

# =========================================================================
# Oh My Posh Initialization
# Initialize Oh My Posh with the specified theme configuration.
oh-my-posh init fish --config ~/agnoster.omp.json | source

# Alternative initialization for Oh My Posh with a cached theme configuration.
eval "$(~/.local/bin/oh-my-posh init fish --config ~/.cache/oh-my-posh/themes/agnoster.omp.json)"


# =========================================================================
# Environment variables
# Invironment variable in fish "set -x PATH $PATH:/mnt..." (set -x VAR value) (export VAR=value - in bash/zsh).
# -x flag for child processes, and -gx flag for increase scope to global.


set -gx PATH $PATH /snap/bin # environment variable for neovim

set -x PATH $PATH:/mnt/c/Windows/System32 # env for ipconfig.exe | grep IPv4
# /mnt/c/Windows/System32/ipconfig.exe | grep IPv4 - if no env is set for ipconfig.exe
```



<br>

## Set 'sqlplus' for direct login

```bash
nvim ~/.sqlplus_remote_login.fish # create and add script in this file

#!/usr/bin/env fish
sshpass -p '12513365@Ms' ssh -t "Vishal Vishwakarma@192.168.0.125" "sqlplus system/tiger" # add this script in the created file

chmod +x ~/.sqlplus_remote_login.fish # set executable permission

alias sqlplus="~/.sqlplus_remote_login.fish" # add alias for quick login
```

<br>

<!-- ======================================================================================================================== -->


### TMUX - Terminal Multiplexer:


## Create alias to open tmux with two window:
1. Touch `.tmux-start.sh` and add these lines
```bash
#!/bin/bash
tmux new-session \; split-window -h \; select-pane -L
```

2. `chmod +x .tmux-start.sh` and restart
3. `~/.tmux-start.sh` - verify

## Start Tmux by default:
Add these lines to `config.fish` (solution link - https://github.com/fish-shell/fish-shell/issues/4434)
```bash
if status is-interactive
and not set -q TMUX
    exec ~/.tmux-start.sh("tmux" if not using alias)
end
```

- `tmux` > `ctrl + b` then `%` - vsp
- `ctrl + b` then left/right arrow to navigate in opened windows.
- `RESIZE PANE: ` `ctrl + b` followed by : then `resize-pane -L 15` (always relative to current self windows size)
- `nano .tmux.conf` -> add `setw -g mouse on` to enable mouse



### Set mouse on/off in tmux:
`ctrl+b :` > type `setw -g mouse on/off` in the input field

_Ai assistant couln't help for starting tmux by default, but a google search fixed the problem. So, use the combination of techniques for troubleshooting._

<br> <br>

<!-- ===================================================================================================================================== -->


<br>


# NeoVim and NvChad in Ubuntu
```bash
# snap package manager for latest neovim
sudo snap install nvim
set -gx PATH $PATH /snap/bin # set environment variable, add in config file, Complete.

NerdFont website > Downloads > FiraCode Nerd Font > Download > Unzip > Select .ttf files and right click > Install.
```

_For Installing NvChad:_

- `git clone https://github.com/NvChad/starter ~/.config/nvim && nvim` run to clone files
- `:MasonInstallAll` > `TSInstall java html css javascript`
- `:Lazy > I/U/S` - to install/update/sync etc

- `:h nvui` - Learn customization
- `Space th` - theme
- Delete `.git` from nvim config directory.


- Edit "init.lua" for Indentation
```bash
vim.opt.tabstop = 4
vim.opt.shiftwidth = 4
vim.opt.expandtab = true
```


<br>  <hr>

# NvChad configuration: 
- Mapping (keymap) -  `:Telescope keymaps`


**Deleting text**:
- 5d: delete line no 5
- d2d:   delete 3 lines starting from the current line
- dd: delete current line


- `Space + v/h`  terminal at right/down
- `Space + ch` (cheatsheet)
- `Space + /` - Toggle comment
- `Space + fa/ff` - find (all files / files)
- `Tab` - switch window next buffer (windows)
- `c - KJKL` (window up/down/left/right)
- `Space + b` (new buffer)
- `C-C` - copy whole file
- `;` - command mode
  

### NvChad Shortcuts

```
m - to mark in file explorer tree
a - to create new file while on a dir in file tree
c - copy
y - copy in text editor
p - paste
r - rename

Vsp/sp - vertical split/split
Ctrl+hjkl - focus windows
Shift + tab - cycle through open file buffer/tabs or reverse cycle
Space+ x - close active tab
Ctrl + n - Show/hide file tree
```

<br> <br>

# Manually installing NVIM app image
```bash
curl -LO https://github.com/neovim/neovim/releases/latest/download/nvim.appimage
chmod u+x nvim.appimage
./nvim.appimage
```

_To expose nvim globally:_
```bash
sudo mkdir -p /opt/nvim #if permission denied; run `sudo !!`.
sudo mv nvim.appimage /opt/nvim/nvim

export PATH="$PATH:/opt/nvim/" #add in shell config file to set the env variable to run nvim from anywhere.
source config_file # load changes.
```
