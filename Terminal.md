<div style="text-align: center;">   <h1> Terminal  </h1>  </div>


> _Note: Official Docs contains all the guide you need._


## Powershell Theme:

- `Settings(Ctrl + ,)` --> `Default profile` --> `Color Schemes` --> Choose `Drakula`.
- Add Drakula theme terminal:
- add theme code in profile.json file in 'scheme [ here multiple themes with {code}] (ask theme code from multiple ai assistant).

### Settings

_Go to settings > Startup tab > Default profile > Ubuntu_

**Default profile**


- Color Scheme: Dark+
- Default profile: Ubuntu
- Font face: FiraCode Nerd Font
- Font-size/Font-weight: 10 / Medium

- Transparency- Background Opacity: 70%, Enable acrylic material
- Padding: 10
- Set terminal default directory: D drive

- Settings --> Profile at left side --> Scroll down --> Delete profile.

**Fira Code font download** : Search fira code download > Google font > Get font > Download all > Extract > Static folder files > select all and right click > Install.

<br>

**Startup section > Launch parameters**

- Launch mode: Focus/Default
- Launch size: Coulumn: 90, Row: 22
- Launch positions: X:840, Y: 400.
- `Ctrl + ,` - Settings

- In Interaction section, disable `Warn when closing more than one tab`.

- **`F11`**: Full screen
<br>

-Reset Terminal:_

- `Settings` > `Apps` > `Installed apps` > Search `terminal` in seach bar > `Advance options` > Scroll down and click on `Reset`.

<hr> <br> <br>

<!-- ===================================================================================================================================== -->


<div style="text-align: center;">   <h1>  Ubuntu  </h1>  </div>

### Basic Settings to do:
- `touch ~/.hushlogin`: Hide home screen message.

### ls command icon theme
1. sudo apt install eza

2. Add these lines in (~/.config/fish/config.fish)
# Modern ls commands using eza
```bash
   alias ls='eza --icons'
   alias ll='eza -l --icons'
   alias la='eza -la --icons'
   alias lt='eza --tree --icons'
   alias l.='eza -d .* --icons'
```
3. source ~/.config/fish/config.fish

<br>

### Terminal Multiplexer(side by side windows):
- `sudo apt isntall tmux -y` > type tmux to open it > `ctrl + b` then `%` for vertical side by side windows.
- `ctrl + b` then left/right arrow to navigate in opened windows.
- `RESIZE PANE: ` `ctrl + b` followed by : then `resize-pane -L 15` (always relative to current self windows size)




### Basic Linux Commands:
- `pwd` = to show present working directly
- `ls -a` = list hidden and normal files/folders inside the present directory
- `cd ../..` = two directory back

- `cd foldername` = Open the directory/folder
- `cat filename.txt` = Show the content of any file like txt on the terminal

- `mkdir foldername` = Make a folder the current directory
- `touch filename.extension` = Create a file
- `'cp file.txt ~/storage/emulated/0/download/' / 'cp -r folder /mnt/d/downloads/'` = Copy.
- `mv folder/file.txt ~/storage/downloads/` = Move
- `mv old_foldername/old_filename.txt new_foldername/new_filename.txt` = Rename
- `rm filename.txt / rm -r foldername` = Delete.
- `copy filename > rm 'paste filename' (rm 'com.termux.styling_0.32.1-1000_minAPI21.apk')` - 'filename' in quote - delete
- `du -h file.txt / du -sh folder` = Check size.
- `ls -l file.txt / ls -ld folder` = Check property.
- `touch/rm ClassA.java ClassB.java ClassC.java` = create/delete files at once.

- `# sometexts` - Comments ignored by terminal
- `echo message` - print any message on the terminal
- `sudo !!` - repeat last command with sudo right 
- `Ctrl + z/c` - stops/halts executing command

<br>

### Ubuntu packages:
```bash
sudo apt install git python openjdk-17 nodejs openssh sshpass neovim wget curl build-essential make net-tools unzip adb fastboot platform-tools
```

<br>


# Install NeoVim and Setup NvChad in Ubuntu

- `pkg update && pkg upgrade -y`
- `curl -LO https://github.com/neovim/neovim/releases/latest/download/nvim.appimage`: run this command.
- `chmod u+x nvim.appimage`: verify with 'ls -la filename.ext'.
- `./nvim.appimage`: to run nvim for one time.

_To expose nvim globally:_
- `mkdir -p /opt/nvim`; permission denied; run `sudo !!` if doing normally or just use `sudo` before mkdir.
- `(use sudo) mv nvim.appimage /opt/nvim/nvim`; if denied without using 'sudo', use `sudo !!`.

-  `export PATH="$PATH:/opt/nvim/"` add in .bashrc to set the env variable to run nvim from anywhere.
-  `source ~/.bashrc`: load changes.

-  NerdFont website > Downloads > FiraCode Nerd Font > Download > Unzip > Select .ttf files and right click > Install.


_Now NvChad:_
-  `sudo apt install ripgrep libfuse2 gcc make -y`: Dependencies.
-  `git clone https://github.com/NvChad/starter ~/.config/nvim && nvim` copy this from NvChad website and run.
-  `:MasonInstallAll`
-  `Space th` to choose the theme.
-  delete .git from `~/.config/nvin`, in nvim, while in normal mode, press `d` key on directory and `y` to delete.

_NvChad Manual tweaks:_
- add following in "init.lua" file to set 4 space for tab
```bash
   vim.opt.tabstop = 4
   vim.opt.shiftwidth = 4
   vim.opt.expandtab = true
```

**Deleting text**:
- 5d: delete line no 5
- d2d:   delete 3 lines starting from the current line
- dd: delete current line


<!-- ===================================================================================================================================== -->

<hr>

## Fish Shell:

1. Update package lists and install Fish:
    ```bash
    sudo apt update
    sudo apt install fish -y
    ```

2. Set Fish as the default shell:
    ```bash
    'chsh -s fish'   (or bash/zsh)
    ```

## Fisher + Plugins:

3. Install Fisher:
```bash
    curl -sL https://git.io/fisher | source && fisher install jorgebucaran/fisher
```

7. Install a Prompt:
```bash
fisher install IlanCosman/tide@v5
tide configure
```


# Aliases and other configs in config file:
    ```bash
    # Expose nvim (In pc only)
    export PATH="$PATH:/opt/nvim/"

    # Hide fish message
    set -g fish_greeting ""

    alias ui="cd /mnt/d/classes/01_WebDev"

    # Tablet
    alias sshtablet="~/.ssh_login_tablet.sh"

    # Windows
    alias sshwindows="~/.ssh_login_windows.sh"
    ```

Source the configuration(not with termux-reload):
    ```bash
    source ~/.config/fish/config.fish
    ```

<br> <br>

<!-- ===================================================================================================================================== -->


<div style="text-align: center;">   <h1>  Termux  </h1>  </div>  <br>

### Basic to-dos after installing temux:

- `pkg update -y` and `pkg upgrade -y`

- `termux-setup-storage`
- `termux-change-repo` > `asia server`.

- `touch ~/.hushlogin`: Hide homescreen message.
- `cd ~(tilde)` - home directory
- `cd /` - root directory
- `cd /sdcard/` - main storage


- `pkg help` - help
- `which <pkg name>`: show pkg path
- `pkg show <PKG name>` - details about a package
- `pkg search <music>` - searching packages related to <music>

  
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
background = #202020
foreground = #C0C0C0
color0 = #1C1C1C
color1 = #AF0000
color2 = #00AF00
color3 = #AF8700
color4 = #5F87AF
color5 = #8787AF
color6 = #5FAFAF
color7 = #EEEEEE
color8 = #444444
color9 = #FF0000
color10 = #00FF00
color11 = #FFFF00
color12 = #5FAFFF
color13 = #8787FF
color14 = #5FFFFF
color15 = #FFFFFF
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

- Open NvChad website > Click Nerd Font website link.
- Click download and scroll to the FiraCode font. Long press on download button and click "copy link address".
- Open termux > `mkdir NerdFonts` > `cd NerdFonts`
- `wget <paste the font link address>`
- After downloading, extract by `unzip FiraCode.zip` > 'ls' to see.
- `copy font.ttf to ~/.termux directory (~/.termux/font.ttf)`
- `termux-reload-settings` - reload for changes. 


<br>


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


- `Space + v/h` - terminal at right/down
- `Space + ff` - find files
- `Control + t` - open file in new window
- `Tab` - switch window active windows
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


