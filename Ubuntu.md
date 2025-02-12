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

## Package Management

### Essential Packages

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
# Navigation
alias c='clear'
alias fish='cd ~/.config/fish/'
alias downloads='cd /mnt/d/Downloads'
alias desktop='cd /mnt/c/Users/Vishal\ Vishwakarma/Desktop'

# Git
alias gs='git status'
alias gp='git add . && git commit -m "updated" && git push'
alias gl='git log --oneline --graph --decorate'

# Enhanced Commands
alias cat='batcat'
alias ls='eza --icons --ignore-glob="snap|*.class"'
alias ll='eza -l --icons'
alias la='eza -la --icons'
alias lt='eza --tree --icons'

# System
alias update='sudo apt update && sudo apt upgrade -y'
alias ip='ipconfig.exe | grep IPv4'
alias python='python3'
```

## Fish Configuration

Add to `~/.config/fish/config.fish`:

```bash
# Interactive session check
if status is-interactive
    # Commands for interactive sessions
end

# Key bindings
bind \t accept-autosuggestion

# Greeting
set -g fish_greeting "   Note: Don't be at the room. Go out, explore, socialize and learn."

# Source aliases
source ~/.config/fish/aliases.fish

# Environment variables
set -gx PATH $PATH /snap/bin
set -x PATH $PATH:/mnt/c/Windows/System32

# Oh My Posh
oh-my-posh init fish --config ~/agnoster.omp.json | source
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
