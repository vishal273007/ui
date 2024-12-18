# Terminal Guide

Win+I = Settings

## Terminal Command:

- `Get-WmiObject -Class Win32_Battery | Select-Object -Property EstimatedChargeRemaining` = Check charging level with terminal

## Basic Linux Commands:

- `pwd` = to show present working directly
- `ls` = list the files/folders inside the present directory

- `cd folder_name` = Open the directory//folder
- `cat filename.txt` = Show the content of any file like txt on the terminal

- `mkdir folder_name` = Make a folder the current directory
- `touch filename.extension` = Create a file
- `'cp file.txt ~/storage/emulated/0/download/' / 'cp -r folder /mnt/d/downloads/'` = Copy.
- `mv folder/file.txt ~/storage/downloads/` = Move
- `mv oldfolder/oldname.txt newfolder/newname.txt` = Rename
- `rm file.txt / rm -r folder` = Delete.
- `copy filename > rm 'paste filename' (rm 'com.termux.styling_0.32.1-1000_minAPI21.apk')` - 'filename' in quote - delete
- `du -h file.txt / du -sh folder` = Check size.
- `ls -l file.txt / ls -ld folder` = Check property.
-

- `# sometexts` - Comments ignored by terminal
- `echo message` - print any message on the terminal

<br>

Keyboard Shortcuts:

- `Tab, Right arrow` - Autocomplete the command to mitigate the mistakes.

## Terminal Command:

- **`pwd`**: print working directory to see the path
- **`ls`**: list items in the current folder
- **`cd`**: change directory. use cd folder_name to open that folder. use cd .. to go back to previous folder. cd . is current is present directory.

<br>

- **`pwd`**: print/show current working directory.

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

- **F11**: To open the terminal in focus mode/any app in full screen.
- You can still resize windows in focus mode.

<br>

### To reset Windows Terminal:

- `Settings` > `Apps` > `Installed apps` > Search `terminal` in seach bar > `Advance options` > Scroll down and click on `Reset`.

## TURMUX COMMONLYLY USED COMMANDS:

<br>

- `whoami` - Show the username
- `ifconfig`: Show inet ipv4 address

<br>

- `pkg update && pkg upgrade -y`: update termux package frequently
- `pkg install python/nodejs/openjdk21/yt-dlp/net-tools/`: Install useful packages in termux.
