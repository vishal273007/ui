<div style="text-align: center;">   <h1> Terminal Guide  </h1>  </div>


> Note: Official Docs contains all the guide you need. AI chatbots, YouTube, and Internet should be referred after official documentation. if both are confusing, just copy the official documentation guide and paste in the chatbots to search for your need in an even more refined way.

**Terminal**: A uninfied multi-tab command line interface/app/toolbox/container. Helps to run command line shells(tools) like powershell, cmd, etc. We use termial to access and switch between cmd, powershell, etc. Type "shell name" on terminal to access the shell, ex, for sqlplus - type "sqlplus".

**Real-Life Analogy**: Imagine a toolbox: - 1. Windows Terminal is the toolbox where you can organize and use your tools. 2. CMD is like a basic screwdriver—it does simple jobs. 3. PowerShell is like a power drill, powerfull than cmd.

## Powershell Command:

- `Get-WmiObject -Class Win32_Battery | Select-Object -Property EstimatedChargeRemaining` = Check charging level with terminal


Keyboard Shortcuts:

- `Tab, Right arrow` - Autocomplete the command to mitigate the mistakes.

<br>

<!-- --------------------------------------------------------- -->


## Windows Powershell UI:

- `Settings(Ctrl + ,)` --> `Color Schemes` --> Choose `Dark` and click `Set as Default` and then click `Save`.

### Settings

_Go to settings > Startup tab > Default profile > Ubuntu_

**Default profile**


- Color Scheme: Dark+
- Font-size: Medium
- Font face: Fira Code
- Transparency- Background Opacity: 80%, Enable acrylic material
- Padding: 12
- Set terminal default directory: D drive

- Settings --> Profile at left side --> Scroll down --> Delete profile.

**Fira Code font download** : Search fira code download > Google font > Get font > Download all > Extract > Static folder files > select all and right click > Install.

<br>

**Startup section > Launch parameters**

- Launch mode: Focus/Default
- Launch size: Coulumn: 95, Row: 23
- Launch positions: X:640, Y: 300.
- `Alt + F4` - to close terminal, `Ctrl + ,` - Settings

- In Interaction section, disable `Warn when closing more than one tab`.

<br>

- **`F11`**: To open the terminal in focus mode/any app in full screen.
- You can still resize windows in focus mode.

<br>





### To reset Windows Terminal:

- `Settings` > `Apps` > `Installed apps` > Search `terminal` in seach bar > `Advance options` > Scroll down and click on `Reset`.

<hr>

<br> <br>


<!-- --------------------------------------------------------- -->



<div style="text-align: center;">   <h1>  Ubuntu  </h1>  </div>  <br>

### Basic Settings to do:
- Settings > set `default profile` to `ubuntu` (bird icon) to open current folder with ubuntu. 

- `touch ~/.hushlogin`: Hide home screen message.



### Basic Linux Commands:


- `pwd` = to show present working directly
- `ls -a` = list hidden and normal files/folders inside the present directory

- `cd folder_name` = Open the directory//folder
- `cat filename.txt` = Show the content of any file like txt on the terminal

- `mkdir folder_name` = Make a folder the current directory
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
- `sudo !!` - repeat last command with super user right 
- `Ctrl + z/c` - stops/halts current command

<br>

### Ubuntu packages:
- `sudo apt install git python openjdk-21 nodejs openssh sshpass adb fastboot platform-tools neovim build-essential wget curl gcc libfuse2 make net-tools ripgrep unzip`: Install packages at once.

<br>


## Install NeoVim and Setup NvChad in Ubuntu

- `pkg update && pkg upgrade -y`: always recommended.
- `sudo apt install libfuse2` - without it, nvim will not work.
- `curl -LO https://github.com/neovim/neovim/releases/latest/download/nvim.appimage`: run this command.
- `chmod u+x nvim.appimage`: verify with 'ls -la filename.ext'.
- `./nvim.appimage`: to run nvim for one time.

_To expose nvim globally:_
- `mkdir -p /opt/nvim`; permission denied, so run `sudo !!` if doing normally or just use `sudo` before mkdir.
- `(use sudo) mv nvim.appimage /opt/nvim/nvim`; if denied without using 'sudo', use `sudo !!`.

-  run `nano .bashrc` and add `export PATH="$PATH:/opt/nvim/"` below the last line and save to set the env variable to be able to use nvim from anywhere.
-  `source ~/.bashrc`: load changes. Now Install Nerd Fonts to proceed for NvChad.
-  NerdFont > Downloads > FiraCode Nerd Font > Download > Unzip > Select .ttf files and right click > Install.


_Now NvChad:_
-  `sudo apt install ripgrep gcc make -y`: Dependencies.

-  `git clone https://github.com/NvChad/starter ~/.config/nvim && nvim` copy this from NvChad website and run.
-  type `:q` and then `:MasonInstallAll`
-  `Space th` to choose the theme.
-  `~/.config/nvin` open config directory > `nvim` to open neovim in the same directory > `Ctrl + N` to open _file tree_ in neovim.
-  On any folder like .git, while in normal mode, press `d` key and `y` to delete.


<br> <br>

<!-- --------------------------------------------------------- -->



<div style="text-align: center;">   <h1>  Termux  </h1>  </div>  <br>

### Basic to-dos after installing temux:

- `pkg update -y` and `pkg upgrade -y`

- `termux-setup-storage`
- `termux-change-repo` > `choose asia server`.

- `touch ~/.hushlogin`: Hide home screen message.
- `cd ~(tilde)` - home folder
- `cd /` - root folder
- `cd /sdcard/` - storage folder


- `pkg help` - help
- `pkg show <PKG name>` - details about a package
- `pkg search <music>` - searching packages related to <music>

  
<br>

<hr>

### Termux margin settings:

1. `nvim ~/.termux/termux.properties` - open termux settings files
2. `terminal-margin-horizontal=20` - set horizontal margin
3. `terminal-margin-vertical=10` - set vertical margin

4. `termux-reload-settings` - load the changes

<br>

<hr>

### Packages:

_pkg list-installed_ - list installed pakckages.  <br>
_pkg search <package_ - search available pakckages.

- `pkg install python git nodejs openssh sshpass neovim curl wget openjdk-21 -y`
- `termux api` - [termux-sms-send -n "number" "message", termux-battery-status, termux-camera-photo picture.jpg, termux-tts-speak "hello", termux-brightness 100, termux-location]


<br>

<hr>

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
- `cp <fontname.ttf> ~/.termux/font.ttf` (cp FiraCodeNerdFont-Regular.ttf ~/.termux/font.ttf) - copy font in termux directory.
- Exit and reopen to apply changes. 


<br>


_Now NvChad:_


- pkg install neovim python nodejs git wget lua-language-server -y
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

- `Set indentation to 4 spaces`: `cd ~/.config/nvin/` ==> add in `options.lua` these lines:
- `vim.opt.tabstop = 4        -- Number of spaces for a tab
	vim.opt.shiftwidth = 4     -- Number of spaces for auto-indentation
	vim.opt.expandtab = true   -- Convert tabs to spaces
	vim.opt.smartindent = true -- Enable smart indentation`
- save and restart.
