<div style="text-align: center;">   <h1> Terminal  </h1>  </div>


> _Note: Official Docs is must recommended to read._
> _Linux is purely keyboard based, So use only keyboard to control the system, else, just use windows. Don't try to use mouse in Linux enviroment._


## Powershell Theme:

- `Settings(Ctrl + ,)` -> `Default profile` -> `Color Schemes` -> Choose `Drakula`.
- Add Drakula theme terminal:
- add theme code in profile.json file in `"schemes": [ code here ],` (ask theme code from multiple ai assistant).
- code:
```bash
{
    "name": "Dracula",
    "background": "#282A36",
    "black": "#21222C",
    "blue": "#BD93F9",
    "brightBlack": "#6272A4",
    "brightBlue": "#D6ACFF",
    "brightCyan": "#A4FFFF",
    "brightGreen": "#69FF94",
    "brightPurple": "#FF92DF",
    "brightRed": "#FF6E6E",
    "brightWhite": "#FFFFFF",
    "brightYellow": "#FFFFA5",
    "cursorColor": "#F8F8F2",
    "cyan": "#8BE9FD",
    "foreground": "#F8F8F2",
    "green": "#50FA7B",
    "purple": "#FF79C6",
    "red": "#FF5555",
    "selectionBackground": "#44475A",
    "white": "#F8F8F2",
    "yellow": "#F1FA8C"
}
```


### Settings

_Settings > Startup tab > Default profile > Ubuntu_

**Default profile**


- Color Scheme: Dracula
- Default profile: Ubuntu(bird icon change with coping red icon path)
- Font face: FiraCode Nerd Font
- Font-size/Font-weight: 11 / Medium

- Transparency- Background Opacity: 90%, Enable acrylic material
- Padding: 12

- Delete a profile: Settings --> Profile --> Scroll --> Delete profile.

**Fira Code font download** : Search fira code download > Google font > Get font > Download all > Extract > Static folder files > select all and right click > Install.

<br>

**Startup section > Launch parameters**

- Launch mode: Focus/Default
- Launch size: Coulumn: 110, Row: 30
- Launch positions: `Center on launch` (OR) `X:570, Y: 250`.

- In Interaction section, disable `Warn when closing more than one tab`.

- **`F11`**: Full screen

<br>

_Reset Terminal:_

- `Installed apps` > Search `terminal` > `Advance options` > `Reset`.

<hr> <br> <br>

<!-- ===================================================================================================================================== -->


<div style="text-align: center;">   <h1>  Ubuntu  </h1>  </div>

### Basic Settings to do:
- `touch ~/.hushlogin`: Hide home screen message.

### ls command icon theme with eza
1. sudo apt install eza -y

2. Add these lines in (~/.config/fish/aliases.fish)
```bash
   See the aliases section below for eza aliases
```
3. source ~/.config/fish/config.fish

<br>

### Terminal Multiplexer:
- `sudo apt isntall tmux -y` > `tmux` > `ctrl + b` then `%`.
- `ctrl + b` then left/right arrow to navigate in opened windows.
- `RESIZE PANE: ` `ctrl + b` followed by : then `resize-pane -L 15` (always relative to current self windows size)


### Basic Linux Commands:
```bash
pwd = to show present working directly
ls -a = list hidden and normal files/folders inside the present directory
cd ../.. = two directory back

cd foldername = Open the directory/folder
cat filename.txt = Show the content of any file like txt on the terminal

mkdir foldername = Make a folder the current directory
touch filename.extension = Create a file
'cp file.txt ~/storage/emulated/0/download/' / 'cp -r folder /mnt/d/downloads/' = Copy.

mv folder/file.txt ~/storage/downloads/ = Move
mv old_foldername/old_filename.txt new_foldername/new_filename.txt = Rename
rm filename.txt / rm -r foldername = Delete.
copy filename > rm 'paste filename' (rm 'com.termux.styling_0.32.1-1000_minAPI21.apk') - 'filename' in quote - delete
du -h file.txt / du -sh folder = Check size.
ls -l file.txt / ls -ld folder = Check property.
touch/rm ClassA.java ClassB.java ClassC.java = create/delete files at once.

# sometexts - Comments ignored by terminal
echo message - print any message on the terminal
sudo !! - repeat last command with sudo right 
Ctrl + z/c - stops/halts executing command

rm *.class  # remove all .class files
rm *.png *.jpg  # remove all file with these extensions.
mv .* * ~/ui  # move all files in previous folder
```

<br>

### Ubuntu packages:
```bash
sudo apt install git python openjdk-17 nodejs openssh sshpass neovim wget curl build-essential make net-tools unzip adb fastboot platform-tools
```

<br>


# NeoVim and NvChad in Ubuntu
```bash
sudo apt update && apt upgrade -y
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

NerdFont website > Downloads > FiraCode Nerd Font > Download > Unzip > Select .ttf files and right click > Install.
```

_Now NvChad:_
```bash
sudo apt install ripgrep libfuse2 gcc make -y #Dependencies.
git clone https://github.com/NvChad/starter ~/.config/nvim && nvim # from NvChad website
:MasonInstallAll
Space th - theme.
delete .git from ~/.config/nvin, in nvim, while in normal mode, press d key on directory and y to delete.
```

_NvChad Manual tweaks:_
- add following in "init.lua" file to set 4 space for tab
```bash
vim.opt.tabstop = 4
vim.opt.shiftwidth = 4
vim.opt.expandtab = true
```

<!-- ===================================================================================================================================== -->

<hr> <br>


# Fish Shell:

1. Install Fish:
```bash

# Add fish repository
sudo apt-add-repository ppa:fish-shell/release-3
sudo apt update

# Install fish
sudo apt install fish -y
```

2. Set Fish as the default shell:
```bash
chsh -s shell_name / chsh -s $(which shell_name)

# Optional: Install Fisher (package manager)
curl -sL https://raw.githubusercontent.com/jorgebucaran/fisher/main/functions/fisher.fish | source && fisher install jorgebucaran/fisher
```

<!-- ====================================================================================================================================== -->


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

```bash

# Add 'source ~/.config/fish/aliases.fish' to the main config.fish file to use these aliases smoothly.

# To edit the config file, use the VS Code editor, the most liked editor for less errors in the code.

# =========================================================================
# File and Directory Navigation
alias ..="cd .."       # Navigate to the parent directory.
alias ...="cd ../.."   # Move up two levels in the directory structure.
alias c='clear'; alias cl='clear'; alias cls='clear'  # Clear the terminal screen.

alias fish="cd ~/.config/fish/"  # Navigate to the Fish shell configuration folder.

alias downloads="cd /mnt/d/Downloads" # Windows Downloads folder.
alias desktop="cd /mnt/c/Users/Vishal\ Vishwakarma/Desktop" # Windows Desktop folder.

alias nvim_config="nvim ~/.config/fish/config.fish"  # Open the Fish config file in Neovim.
alias jv="cd ~/java"                              # Navigate to the Java folder.
alias ui="cd ~/ui"                                  # Navigate to the UI folder.
alias jsc="cd ~/js_class"                      # Navigate to the JavaScript class folder.
alias js="cd ~/js"                                  # Navigate to the JavaScript projects folder.


alias sf='source ~/.config/fish/config.fish' # source config and alias files with only config file


# =========================================================================
# Git Aliases
alias gs="git status"  # Check the status of the Git repository.
alias gp="git add . && git commit -m 'updated' && git push"  # Stage, commit, and push changes in one command.
alias gl="git log --oneline --graph --decorate"  # Show a concise and visual Git history.

# =========================================================================
# Tmux
alias tmux="~/.tmux-start.sh"  # Start tmux using a custom script.

# =========================================================================
# SSH to Windows
alias sshwindows="~/.ssh_login_windows.fish" # modified alias for fish
alias sqlplus="~/.sqlplus_remote_login.fish" # add alias for quick login to sqlplus

# =========================================================================
# eza/exa (Enhanced File Listings)
alias ls="eza --icons"              # List files with icons.
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

# =========================================================================
# Oh My Posh Initialization
# Initialize Oh My Posh with the specified theme configuration.
oh-my-posh init fish --config ~/agnoster.omp.json | source

# Alternative initialization for Oh My Posh with a cached theme configuration.
eval "$(~/.local/bin/oh-my-posh init fish --config ~/.cache/oh-my-posh/themes/agnoster.omp.json)"

# =========================================================================
# Fish Greeting
# Hide the default Fish shell greeting message on startup.
set -g fish_greeting ""

# =========================================================================
# Custom Path Addition
# Add Neovim binary to the system PATH for easy access.
export PATH="$PATH:/opt/nvim/"

# =========================================================================
# Aliases
# Ignore all files with the `.class` extension when using the `ls` command.
alias ls 'ls --ignore="*.class"'


# Reload the Fish shell configuration and aliases simultaneously.
alias sf 'source ~/.config/fish/config.fish'


# Source additional aliases from an external file.
source ~/.config/fish/aliases.fish
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

# Tmux

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

### Set mouse on/off in tmux:
`ctrl+b :` > type `setw -g mouse on/off` in the input field

_Ai assistant couln't help for starting tmux by default, but a google search fixed the problem. So, use the combination of techniques for troubleshooting._

<br> <br>

<!-- ===================================================================================================================================== -->


_Now NvChad:_


- pkg install neovim python nodejs git wget -y
- Go to 'nvchad' website and copy `git clone https://github.com/NvChad/starter ~/.config/nvim && nvim` this command and run.
- `:MasonInstallAll` > Delete the `.git` from nvim config directory.
- `:Lazy sync` - run to update

- `:h nvui` - Learn customization

<br>

<hr>

# Neovim NvChad configuration: 
- Mapping (keymp) -  `:Telescope keymaps`, `:NvCheatsheet`(Space + ch)
- `TSModuleInfo` > `TSInstall java html css javascript` - Check installed `Syntax highlight` and install if needed.
- Set `Fira Code Nerd Font` instead of just `Fira Code` to view files with icons.

**Deleting text**:
- 5d: delete line no 5
- d2d:   delete 3 lines starting from the current line
- dd: delete current line


- `Space + v/h` - terminal at right/down
- `Space + ff` - find files
- `Control + t` - open file in new window
- `Tab` - switch window active windows

### NvChad Shortcuts

- m - to mark in file explorer tree
- a - to create new file while on a dir in file tree
- c - copy
- y - copy in text editor
- p - paste
- r - rename

- Vsp/sp - vertical split/split
- Ctrl+hjkl - focus windows
- Shift + tab - cycle through open file buffer/tabs or reverse cycle
- Space+ x - close active tab
- Ctrl + n - Show/hide file tree


### Set indentation to 4 spaces(Error in nvim): 

```bash
#cd ~/.config/nvin/ ==> options.lua
vim.opt.tabstop = 4        -- spaces for a tab
vim.opt.shiftwidth = 4     -- spaces for auto-indentation
vim.opt.expandtab = true   -- convert tabs to spaces
vim.opt.smartindent = true -- smart indentation
```

### Troubleshooting:
**Fix shell deleted without changing shell**:
- powershell(admin) > `wsl -d Ubuntu --exec bash` > `sudo nano /etc/passwd` > edit `.../usr/bin/fish` - change to `.../bash`. 
