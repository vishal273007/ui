## Powertoys Run:

**Enable plugins**:
- URI handler - search "github.com"
- Search - search "chrome"
- Folder - search "ui"
- Set the "Number of results shown before scrolling" to 1 from default 4.
- Plugin hint: none - to disable auto suggestion below search box.
    





# Termux

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

