# Ubuntu

> Use your palm and fish shell as a stick note to memorize and remember things and change after memorizing.

## Basic To-Dos

- `touch ~/.hushlogin` - Hide home screen message

## Basic Linux Commands

```bash
# File/Directory Information
du -h file.txt      # Check file size
du -sh folder       # Check folder size
ls -l file.txt      # Check file properties
ls -ld folder       # Check folder properties

# File Operations
rm *.ext            # Remove all files with specific extension
mv .* * ~/ui        # Move all files to ui directory
echo "text" > file  # Overwrite file with text (creates if not exists)
echo "text" >> file # Append text to file
touch file1 file2   # Create multiple files simultaneously
rm file1 file2      # Delete multiple files simultaneously

# Navigation & Information
pwd                 # Print working directory
ls -a               # List all files including hidden ones
cd ../..            # Go up two directories
cat filename        # Display file contents

# Directory Operations
cd foldername       # Change directory
mkdir foldername    # Create directory
cp file.txt dest/   # Copy file
cp -r folder dest/  # Copy folder recursively
mv source dest      # Move/rename files or folders

# Useful Commands
sudo !!            # Repeat last command with sudo
Ctrl + z          # Suspend current process
Ctrl + c          # Stop current process
```
<!-- --------------------------------------------------------------------------------- -->

## Essential Packages

```bash
# Core Development Tools
sudo apt install -y \
    git python openjdk-17 nodejs \
    openssh sshpass neovim wget curl

# Enhanced Shell Tools
sudo apt install -y \
    fish tmux eza bat fzf tree tldr neofetch colordiff

# Development & System Tools
sudo apt install -y \
    pip pipx snapd build-essential \
    make net-tools unzip adb fastboot platform-tools
```

### Package Installation Notes

- Use `pipx` for Python applications (e.g., yt-dlp)

  ```bash
  pipx ensurepath
  pipx install yt-dlp
  ```

- For .deb packages:

  ```bash
  wget app_url.deb
  sudo apt install ./app.deb
  # OR
  sudo dpkg -i app.deb
  ```

## Fish Shell Setup

### Installation

```bash
# Add repository
sudo apt-add-repository ppa:fish-shell/release-3
sudo apt update

# Install fish
sudo apt install fish -y

# Set as default shell
chsh -s $(which fish)

# Optional: Install Fisher package manager
curl -sL https://raw.githubusercontent.com/jorgebucaran/fisher/main/functions/fisher.fish | source && fisher install jorgebucaran/fisher
```

### Oh My Posh Setup

```bash
# Install Oh My Posh
curl -s https://ohmyposh.dev/install.sh | bash

# Setup Agnoster theme

wget https://raw.githubusercontent.com/JanDeDobbeleer/oh-my-posh/main/themes/agnoster.omp.json -O ~/agnoster.omp.json

# Add to Fish config
fish_add_path ~/.local/bin
eval "$(~/.local/bin/oh-my-posh init fish --config ~/agnoster.omp.json)"
```

## Useful Aliases

Create `~/.config/fish/aliases.fish`:

```bash
# Add 'source ~/.config/fish/aliases.fish' to the main config.fish file for external aliases file.
source ~/.config/fish/aliases.fish

# File and Directory Navigation
alias c='clear'                   # Clear the terminal screen.
alias cl='clear'                  # Another clear alias.
alias cls='clear'                 # Clear alias for Windows.

alias fish="cd ~/.config/fish/"   # Navigate to the Fish shell configuration folder.
alias downloads="cd /mnt/d/Downloads"  # Navigate to Windows Downloads folder.
alias desktop="cd /mnt/c/Users/Vishal\ Vishwakarma/Desktop"  # Navigate to Windows Desktop folder.

# Git Aliases
alias gs="git status"             # Check the status of the Git repository.
alias gp="git add . && git commit -m 'updated' && git push"  # Stage, commit, and push changes in one command.
alias gl="git log --oneline --graph --decorate"  # Show a concise and visual Git history.

# Tmux
alias tmux="~/.tmux-start.sh"     # Start tmux using a custom script.

# SSH to Windows
alias sshwindows="~/.ssh_login_windows.fish"   # SSH login to Windows.
alias sqlplus="~/.sqlplus_remote_login.fish"   # SQLPlus remote login alias.

# bat (cat) and eza/exa (ls - Enhanced File Listings with icons)
alias cat='batcat'                 # Use bat as a replacement for cat.

# Use eza as the ls replacement with icons and custom exclusions
function ls --wraps eza
    eza --icons --ignore-glob="snap|*.class" $argv
end

alias ll="eza -l --icons"          # Long format with icons.
alias la="eza -la --icons"         # List all files (including hidden) with icons.
alias lt="eza --tree --icons"      # Display files in a tree structure with icons.
alias l.="eza -d .* --icons"       # List hidden directories with icons.

# Programming Languages
alias python="python3"  # Use Python 3 by default.

# Network
alias ip='ipconfig.exe | grep "IPv4 Address" | grep "192.168."'  # FilteredIPv4 address.

# Other Custom Aliases
alias update='sudo apt update && sudo apt upgrade -y'  # Update and upgrade system packages.


```

## Fish Config

Add to `~/.config/fish/config.fish`:

```bash
# Check if the shell session is interactive
if status is-interactive
    # Commands specific to interactive sessions can go here.
end

# Bind tab key to accept-autosuggestion
bind \t accept-autosuggestion

# =========================================================================
# Fish Greeting
set -g fish_greeting "            There will be too much resistance at the room. You'll not be distracted, instead you'll distract yourself.
"

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
# Environment variable in fish "set -x PATH $PATH:/mnt..." (set -x VAR value) (export VAR=value - in bash/zsh).
# -x flag for child processes, and -gx flag for increase scope to global.

set -gx PATH $PATH /snap/bin # environment variable for neovim
set -x PATH $PATH:/mnt/c/Windows/System32 # env for ipconfig.exe | grep IPv4

# for using Windows path adb from Linux:
set -x PATH $PATH /mnt/c/tools/platform-tools

# =========================================================================
# sqlplus function with custom commands in c:\tools\commands.sql and 'cl scr and set linesize 100'
function sqlplus
    set HOST_IP (ipconfig.exe | grep "IPv4 Address" | grep "192.168." | awk '{print $NF}' | tr -d '\r')
    sshpass -p '12513365@Ms' ssh -t "vishal vishwakarma@$HOST_IP" "sqlplus system/tiger @C:\\tools\\commands.sql"
end

```

## TMUX Configuration

### Startup Script

Create `~/.tmux-start.sh`:

```bash
#!/bin/bash
tmux new-session \; split-window -h \; select-pane -L
```

### Auto-start TMUX

Add to `config.fish`:

```bash
if status is-interactive
and not set -q TMUX
    exec ~/.tmux-start.sh
end
```

### Common TMUX Commands

- `Ctrl + b %` - Vertical split
- `Ctrl + b →/←` - Navigate panes
- `Ctrl + b :resize-pane -L 15` - Resize pane
- Mouse support: `setw -g mouse on` in `.tmux.conf`

## NeoVim Setup

### Install

```bash
sudo snap install nvim
set -gx PATH $PATH /snap/bin
```

### NvChad Installation

```bash
git clone https://github.com/NvChad/starter ~/.config/nvim && nvim
```

### Common Commands

- `:MasonInstallAll` - Install language servers
- `:TSInstall java html css javascript` - Install language support
- `Space th` - Theme selection
- `Space v/h` - Terminal split
- `Space ch` - Cheatsheet
- `Space /` - Toggle comment
- `Space fa/ff` - Find files
- `Tab` - Switch buffer

### NvChad Terminal Settings

```bash
M.nvdash = { load_on_startup = true }
M.ui = {
      tabufline = {
         lazyload = false
     }
}

-- Add this autocommand to set terminal size
vim.cmd([[
    augroup TerminalSize
        autocmd!
        autocmd TermOpen * setlocal winwidth=40
    augroup END
]])
```

### Change ubuntu hostname

```bash
sudo nano /etc/wsl.conf
# Ensure network section script is added
[boot]
systemd=true

[wsl2]
guiApplications = true

[network]
hostname = ubuntu
generateHosts = false


# Also replace name in
sudo nano /etc/hostname
sudo nano /etc/hosts
```
