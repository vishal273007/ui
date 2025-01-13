<div style="text-align: center;">   <h1> Terminal  </h1>  </div>


> _Note: Official Docs contains all the guide you need._
**Terminal**: A uninfied multi-tab command line app. Helps to run command line shells like powershell, cmd, etc.


## Windows Powershell UI:

- `Settings(Ctrl + ,)` --> `Color Schemes` --> Choose `Dark` and click `Set as Default` and then click `Save`.

### Settings

_Go to settings > Startup tab > Default profile > Ubuntu_

**Default profile**


- Color Scheme: Dark+
- Default profile: Ubuntu
- Font face: FiraCode Nerd Font
- Font-size/Font-weight: 10 / Medium

- Transparency- Background Opacity: 70%, Enable acrylic material
- Padding: 20
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


<!-- ===================================================================================================================================== -->



<div style="text-align: center;">   <h1>  Ubuntu  </h1>  </div>  <br>

### Basic Settings to do:
- Settings > set `default profile` to `ubuntu` (bird icon) to open current folder with ubuntu. 

- `touch ~/.hushlogin`: Hide home screen message.



### Basic Linux Commands:


- `pwd` = to show present working directly
- `ls -a` = list hidden and normal files/folders inside the present directory
- `cd ../..` = two directory back

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


# Install NeoVim and Setup NvChad in Ubuntu

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


<!-- ===================================================================================================================================== -->

<hr>

# Setting up Fish Shell and Starship in Ubuntu

## Fish Shell:

1. Update package lists and install Fish:
    ```bash
    sudo apt update
    sudo apt install fish
    ```

2. Set Fish as the default shell:
    ```bash
    chsh -s /usr/bin/fish
    ```

## Starship:

3. Install Starship:
    ```bash
    curl -sS https://starship.rs/install.sh | sh
    ```

4. Add Starship initialization to the Fish configuration file:
    ```bash
    echo 'starship init fish | source' >> ~/.config/fish/config.fish
    ```

    Reload the configuration:
    ```bash
    source ~/.config/fish/config.fish
    ```

5. Create the Starship configuration file if it doesn’t exist:
    ```bash
    mkdir -p ~/.config
    touch ~/.config/starship.toml
    ```

6. Open the Starship configuration file:
    ```bash
    nano ~/.config/starship.toml
    ```

    Add the following configurations:
    ```toml

    set -g fish_greeting ""
    [character]
    success_symbol = "[➜](bold green) "
    error_symbol = "[➜](bold red) "

    [line_break]
    disabled = true

    [directory]
    home_symbol = ""
    ```

7. Copy and paste the following lines from your `.bashrc` config file into `~/.config/fish/config.fish`:
    ```bash
    export PATH="$PATH:/opt/nvim/"

    alias ui="cd /mnt/d/classes/01_WebDev"

    # Tablet
    alias sshtablet="~/.ssh_login_tablet.sh"

    # Windows
    alias sshwindows="~/.ssh_login_windows.sh"
    ```

    Reload the Fish configuration:
    ```bash
    source ~/.config/fish/config.fish
    ```



<br> <br>


<!-- ===================================================================================================================================== -->


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

  
<br> <hr>

### Termux margin settings:

1. `nvim ~/.termux/termux.properties` - open termux settings files
2. `terminal-margin-horizontal=20` - set horizontal margin
3. `terminal-margin-vertical=10` - set vertical margin

4. `termux-reload-settings` - load the changes
5. `vol-up + k` - hide/unhide termux toolbar.
6. `termux-open file.txt / file.img` - open any file with termux
7. `pkg install starship` > `eval "$(starship init bash)"` add in .bashrc > preset (pastel powerline) starship preset pastel-powerline -o > ~/.config/starship.toml.

<br>  <hr>

### Packages:

_pkg list-installed_ - list installed pakckages.  <br>
_pkg search <package_ - search available pakckages.

- `pkg install python git nodejs openssh sshpass neovim curl wget openjdk-21 -y`
- `termux api` - [termux-sms-send -n "number" "message", termux-battery-status, termux-camera-photo picture.jpg, termux-tts-speak "hello", termux-brightness 100, termux-location]
- `pkg install fish -y` > fish : interactive shell with auto-completion


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


<!-- ===================================================================================================================================== -->


# Setting Up Fish Shell and Starship Prompt

## Install Fish Shell
```bash
pkg install fish -y > fish
```

Set Fish as the default shell:
```bash
chsh -s fish
```

## Configure Fish Shell
Create or edit the Fish configuration file:
```bash
mkdir -p ~/.config/fish
nano ~/.config/fish/config.fish
```

Add the following lines to the file:
```fish
# Hide homescreen message
set -g fish_greeting ""

# Initialize Starship prompt
starship init fish | source
```

## Install Starship Prompt
```bash
pkg install starship
starship init fish | source
```

## Starship Configuration
Create or edit the Starship configuration file:
```bash
nano ~/.config/starship.toml
```

### Example Configuration
```toml
format = """
[](#9A348E)\
$username\
[](bg:#DA627D fg:#9A348E)\
$directory\
[](fg:#DA627D bg:#33658A)\
$time\
[ ](fg:#33658A)\
"""

# Disable the blank line at the start of the prompt
add_newline = false

# Username module
[username]
show_always = true
style_user = "bg:#9A348E"
style_root = "bg:#9A348E"
format = '[$user ]($style)'
disabled = false

# OS module (optional)
[os]
style = "bg:#9A348E"
disabled = true

# Directory module
[directory]
style = "bg:#DA627D"
format = "[ $path ]($style)"
truncation_length = 3
truncation_symbol = "…/"

[directory.substitutions]
"Documents" = "󰈙 "
"Downloads" = " "
"Music" = " "
"Pictures" = " "

# Time module
[time]
disabled = false
time_format = "%I:%M %p"  # 12-hour format with AM/PM
style = "bg:#33658A"
format = '[$time ]($style)'
```



