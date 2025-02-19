
### Powertoys Run

- URI handler - search "github.com"
- Search - search "chrome"
- Folder - search "ui"
- Set the "Number of results shown before scrolling" to 1 from default 4.
- Plugin hint: none - to disable auto suggestion below search box.

### PC Lid Closing preserve Display Scaling

> Static Display "Scale" - Display settings -> Scale -> Custom Scaling -> fix default value(200). Use it to fix auto scalling down when closing pc lid.

### Logi Software

- To use the logi shortcut for ChatGPT, keep the cursor in center as logi window opens at cursor location.

<!-- ============================================================= -->

# Termux

## Basic to-dos

```bash
pkg update -y   and   pkg upgrade -y
termux-setup-storage
termux-change-repo > Mirror group > All mirror/asia mirrors

cd /sdcard/ - main storage


which <pkg name>: show pkg path
pkg show <PKG name> - details about a package
```

___

### Termux margin settings

```bash
nano ~/.termux/termux.properties
terminal-margin-horizontal=20
terminal-margin-vertical=10
```

### Font change

```bash
mkdir NerdFont > cd NerdFont > wget font_link > ls > unzip FiraCode.zip > rename mv font.ttf ~/.termux
```

### Termux Dracula Theme

>touch colors.properties

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

### Packages

```bash
pkg install python git nodejs openssh sshpass neovim curl wget openjdk-17 which fish bat -y # alias cat = bat
```

```bash
- termux-reload-settings # load the changes
- vol-up + k # hide/unhide termux bottom toolbar.
- termux-open file.txt / file.img # open files with termux
```

# Termux Fish alias

_`fish_config` > prompt tab > find and set `usrname@localhost ~ $` type prompt._

```bash
alias ip="ifconfig 2>/dev/null | awk '/wlan0/ {interface=\"wlan0\"} /wlan1/ {interface=\"wlan1\"} /inet / && \$2 !~ /127.0.0.1/ {print interface \": \" \$2}'"

set -g fish_greeting "          Wasting Time again?

"
```

# FTP server enable on android

## ftp with Hotspot(hidden ftp server address) in android

- Open Termux in server device > check IPv4 with ifconfig > use client device to connect with address - "ftp://IPv4:9999"

## In windows

- File explorer, right click on "This PC" > "Add a network location" >
- or, Right click on desktop, click new > shortcut. enter 'explorer ftp://192.168.48.32:9999/' and give name 'Nord 4' and save.

# Enable SMB in Win 11

- Search and open `Advanced sharing settings` and enable `Network discovery` and `File sharing`.
- Right click on drives and enable sharing (Properties > Sharing tab > Advanced sharing) and set full permission.

- Solid explorer, add cloud connection as `SMB` > `Select PC` > `Username and password` > `MS username and password`. The hostname `vishal` hostname will work dynamically for SMB connection, no need to update ip on different wifi.
