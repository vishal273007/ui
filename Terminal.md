<div style="text-align: center;">   <h1> Terminal Guide  </h1>  </div>

A uninfied multi-tab command line interface/app/toolbox/container. Helps to run command line shells(tools) like powershell, cmd, and other shells. We use termial to access and switch between cmd, powershell, or wsl. It also let us costomize look of tools we use. just "shell name" on command line to access that shell, like for sqlplus, type "sqlplus".

**Real-Life Analogy**: Imagine a toolbox: - 1. Windows Terminal is the toolbox where you can organize and use your tools. 2. CMD is like a basic screwdriver—it does simple jobs. 3. PowerShell is like a power drill, powerfull than cmd.

## Powershell Command:

- `Get-WmiObject -Class Win32_Battery | Select-Object -Property EstimatedChargeRemaining` = Check charging level with terminal

## Linux Commands:

- `pwd` = to show present working directly
- `ls` = list the files/folders inside the present directory

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
-

- `# sometexts` - Comments ignored by terminal
- `echo message` - print any message on the terminal

<br>

Keyboard Shortcuts:

- `Tab, Right arrow` - Autocomplete the command to mitigate the mistakes.

  ## Windows Powershell UI:

- `Settings(Ctrl + ,)` --> `Color Schemes` --> Choose `Dark` and click `Set as Default` and then click `Save`.

### Settings

**Default profile**

- Color Scheme: Dark+
- Font-size: Medium
- Font face: Fira Code
- Transparency- Background Opacity: 85%, Enable acrylic material
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



<div style="text-align: center;">   <h1>  Termux  </h1>  </div>  <br>

### Basic to-dos:
- `pkg update -y`, `pkg upgrade -y`

- `termux-setup-storage`
- `termux-change-repo` > `choose asia server`.

- `cd ~(tilde)` - home folder
- `cd /` - root folder
- `cd /sdcard/` - storage folder
  
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

- `python, git, nodejs, openssh and sshpass, neovim, curl and wget, openjdk-21, yt-dlp`
- `termux api` - [termux-sms-send -n "number" "message", termux-battery-status, termux-camera-photo picture.jpg, termux-tts-speak "hello", termux-brightness 100, termux-location]


<br>

<hr>

### Setup NV Chad in termux
- pkg update && pkg upgrade -y
- pkg install neovim python nodejs git wget lua-language-server -y
- Go to 'nvchad' website and copy `git clone https://github.com/NvChad/starter ~/.config/nvim && nvim` this command > termux > paste and execute.
- if asked for install exp custom config - type 'n'
- After installation, click `esc` key.
- Now, install Nerd Font if you haven't already

<br>

<hr>

### Install Nerd Font in termux
- Go to Nerd Font from NvChad website
- Select download and scroll to the FiraCode font. Long press on download button and click "copy link address".
- open termux > `mkdir NerdFonts` > `cd NerdFonts`
- ` wget <paste the font link address>`
- after download completes, extract by `unzip FiraCode.zip` > 'ls' to see.
- `cp FiraCodeNerFont-Regular.ttf ~/.termux/font.ttf` - to copy font in font directory.
- Exit and reopen to apply changes. 

<br>

<hr>