<div style="text-align: center;">   <h1> Terminal  </h1>  </div>


> _Note: Official Docs is must recommended to read._


## Powershell Theme:

- `Settings(Ctrl + ,)` --> `Default profile` --> `Color Schemes` --> Choose `Drakula`.
- Add Drakula theme terminal:
- add theme code in profile.json file in 'scheme [ here multiple themes with {code}] (ask theme code from multiple ai assistant).
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

_Reset Terminal:_

- `Installed apps` > Search `terminal` > `Advance options` > `Reset`.

<hr> <br> <br>

<!-- ===================================================================================================================================== -->


<div style="text-align: center;">   <h1>  Ubuntu  </h1>  </div>

### Basic Settings to do:
- `touch ~/.hushlogin`: Hide home screen message.

### ls command icon theme with eza
1. sudo apt install eza -y

2. Add these lines in (~/.config/fish/config.fish)
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


`rm *.class` - remove all .class files

```

<br>

### Ubuntu packages:
```bash
sudo apt install git python openjdk-17 nodejs openssh sshpass neovim wget curl build-essential make net-tools unzip adb fastboot platform-tools
```

<br>


# Install NeoVim and Setup NvChad in Ubuntu
```bash
pkg update && pkg upgrade -y
curl -LO https://github.com/neovim/neovim/releases/latest/download/nvim.appimage
chmod u+x nvim.appimage
./nvim.appimage
```

_To expose nvim globally:_
```bash
`mkdir -p /opt/nvim`; permission denied; run `sudo !!` if doing normally or just use `sudo` before mkdir.
`(use sudo) mv nvim.appimage /opt/nvim/nvim`; if denied without using 'sudo', use `sudo !!`.

`export PATH="$PATH:/opt/nvim/"` add in .bashrc to set the env variable to run nvim from anywhere.
`source ~/.bashrc`: load changes.

NerdFont website > Downloads > FiraCode Nerd Font > Download > Unzip > Select .ttf files and right click > Install.


_Now NvChad:_
```bash
`sudo apt install ripgrep libfuse2 gcc make -y`: Dependencies.
`git clone https://github.com/NvChad/starter ~/.config/nvim && nvim` copy this from NvChad website and run.
`:MasonInstallAll`
`Space th` to choose the theme.
delete .git from `~/.config/nvin`, in nvim, while in normal mode, press `d` key on directory and `y` to delete.

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

<hr> <br>


## Fish Shell:

1. Update package lists and install Fish:
    ```bash
    sudo apt update
    sudo apt install fish -y
    ```

2. Set Fish as the default shell:
    ```bash
    chsh -s shell_name
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

<br>

<!-- ======================================================================================================================== -->

# Tmux

## Create alias to open tmux with two window:
1. Touch `.tmux-start.sh` and add these lines
```bash
#!/bin/bash
tmux new-session \; split-window -h \; select-pane -L
```

2. `chmod +x .tmux-start.sh` and then > restart

## Start Tmux by default in fish:
(solution link - https://github.com/fish-shell/fish-shell/issues/4434)
Add these lines to `config.fish`:
```bash
if status is-interactive
and not set -q TMUX
    exec ~/.tmux-start.sh("tmux" if not using alias)
end
```

### Set mouse on/off in tmux:
`ctrl+b :` > type `setw -g mouse on/off` in the input field

> Ai assistant couln't help and wasted time to start tmux by default, but a simple google search fixed the problem. So, use the combination of resources and techniques to fix any problem istead of relying on a signle technology.

<br> <br>

<!-- ===================================================================================================================================== -->



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

### Shortcuts
```bash
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

- Set indentation to 4 spaces(Error in nvim): 
    cd ~/.config/nvin/ ==> options.lua
    vim.opt.tabstop = 4        -- spaces for a tab
	vim.opt.shiftwidth = 4     -- spaces for auto-indentation
	vim.opt.expandtab = true   -- convert tabs to spaces
	vim.opt.smartindent = true -- smart indentation
