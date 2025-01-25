## Powertoys Run:

**Enable plugins**:
- URI handler - search "github.com"
- Search - search "chrome"
- Folder - search "ui"
- Set the "Number of results shown before scrolling" to 1 from default 4.
- Plugin hint: none - to disable auto suggestion below search box.

    

<div style="text-align: center;">   <h1>  Termux  </h1>  </div>  <br>

### Basic to-dos after installing temux:

```bash
pkg update -y and pkg upgrade -y

termux-setup-storage
termux-change-repo > `asia server

touch ~/.hushlogin : Hide homescreen message
cd ~(tilde) - home directory
cd / - root directory
cd /sdcard/` - main storage


pkg help - help
which <pkg name>: show pkg path
pkg show <PKG name> - details about a package
pkg search <music> - searching packages related to <music>
```
  
<br> <hr>

### Termux margin settings:

1. `nano ~/.termux/termux.properties` - termux settings files
2. `terminal-margin-horizontal=20` - set horizontal margin
3. `terminal-margin-vertical=10` - set vertical margin

4. `termux-reload-settings` - load the changes
5. `vol-up + k` - hide/unhide termux bottom toolbar.
6. `termux-open file.txt / file.img` - open any file with termux

### Termux Theme:
_`touch colors.properties` or edit by adding._

```bash
background=#282A36
foreground=#F8F8F2
cursor=#F8F8F2

color0=#21222C
color1=#FF5555
color2=#50FA7B
color3=#F1FA8C
color4=#BD93F9
color5=#FF79C6
color6=#8BE9FD
color7=#F8F8F2

color8=#6272A4
color9=#FF6E6E
color10=#69FF94
color11=#FFFFA5
color12=#D6ACFF
color13=#FF92DF
color14=#A4FFFF
color15=#FFFFFF
```

<br>  <hr>

### Packages:
_pkg list-installed_ - list installed pakckages.
_pkg search <pkg_name>_ - search available pakckages.
```bash
pkg install python git nodejs openssh sshpass neovim curl wget openjdk-17 which -y
```

- `termux api` - [termux-sms-send -n "number" "message", termux-battery-status, termux-camera-photo picture.jpg, termux-tts-speak "hello", termux-brightness 100, termux-location]

<br>  <hr>

### Install Nerd Font and setup NvChad in termux:

_Dependencies:_

- `pkg update && pkg upgrade -y`
- `apt install ripgrep make -y`

<br>


- `m` - to mark in file explorer tree
- `a` - to create new file while on a dir in file tree
- `c` - copy
- `y` - copy in text editor
- `p` - paste
- `r` - rename
- `Space(leader)` - other command
- `Vsp/sp` - vertical split/split
- `Ctrl+hjkl` - focus windows
- `Tab/shift + tab` - cycle through open file buffer/tabs or reverse cycle
- `Space+ x` - close active tab
- `Ctrl + n` - Show/hide file tree

- `Set indentation to 4 spaces(Error in Termux nvim)`: `cd ~/.config/nvin/` ==> add in `options.lua` these lines:
- `vim.opt.tabstop = 4        -- Number of spaces for a tab
	vim.opt.shiftwidth = 4     -- Number of spaces for auto-indentation
	vim.opt.expandtab = true   -- Convert tabs to spaces
	vim.opt.smartindent = true -- Enable smart indentation`
- save and restart.


<!-- ===================================================================================================================================== -->


# Fish Shell

## Install Fish Shell
```bash
pkg install fish -y
```

### Set Fish as the default shell:
```bash
'chsh -s fish'   (or bash/zsh)
```

## Configure Fish Shell
Create or edit the Fish configuration file:
```bash
mkdir -p ~/.config/fish
nano ~/.config/fish/config.fish
```

# Aliases and other configs in config file:
    ```fish
    # Hide fish homescreen message
    set -g fish_greeting ""

    # Auto start ssh server on termux startup
    sshd

    # Alias for common git command
    alias gs="git status"
    alias commit="git add . && git commit -m "updated" && git push"

    # Projects folder with alias name
    alias projects="cd /sdcard/projects"

    # Nord 4
    alias sshnord4="~/.ssh_login_nord4.sh"

    # Windows
    alias sshwindows="~/.ssh_login_windows.sh"
    ```

Source the configuration(not with termux-reload):
    ```bash
    source ~/.config/fish/config.fish
    ```


## Install Prompt Designer


_Install Fisher_
```bash
curl -sL https://git.io/fisher | source
fisher install jorgebucaran/fisher
```
_Install Tide_
```bash
fisher install IlanCosman/tide@v5
```

_Configure Tide_
```bash
tide configure
```

