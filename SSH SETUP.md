
# SSH Setup

- type `ubuntu(or shell name)`: To access ubuntu from any local or remote terminal client.

## SSH Server Setup on Windows

- Settings > System > Optional Features > Add an optional feature > Search for SSH and install the SSH Server.
- Terminal > "services.msc" > SSH Server > Properties > Change from manual to Automatic.

- Test with SSH Client
- Type `ssh "Vishal Vishwakarma@vishal(hostname)/192.168.0.125"` and enter. hostname will work only when router support hostname resolution. use ip if it doesn't work.
- Now, since you used Microsoft User_Name, so enter Microsoft account password, not local password.

## SSH Server setup in Termux

 1. `pkg update && pkg upgrade -y`: _Update packages_
 2. `pkg install openssh -y`: _Install OpenSSH_
 3. `passwd`: _Set password `ssh@pad6/ssh@nord4`_
 4. `sshd`: _Start SSH server_
 5. `ps aux | grep sshd`: _Verify if server is running_
 6. `nano .bashrc` ==> add `sshd` in the end of the config file to auto start ssh server after opening termux.
 7. _[In client's `.bashrc` config file, add  line `alias ssh_pad6="~/.pad6_ssh_login.sh`. > `touch ~/.pad6_ssh_login.sh` > `chmod +x ~/.pad6_ssh_login.sh` > add script `#!/bin/bash (enter) sshpass -p 'ssh@pad6' ssh "u0_a327@192.168.0.149" -p 8022` > `ls -a` to check_

- `whoami`: _Show termux username_
- `ifconfig`: _Find Termux IP address_

_Test From client device:_

- **Enter** - `ssh "u0_a327@192.168.0.149" -p 8022`
- **Password** - `ssh@pad6`

### SSH Client for Auto Login

```bash
sudo apt install sshpass -y # for storing password
sshpass -V # verify

ssh "Vishal Vishwakarma@192.168.0.125" # > enter password password

nano ~/.ssh_login_windows.fish # add below script in this file

#!/usr/bin/env fish
sshpass -p '12513365@Ms' ssh "Vishal Vishwakarma@192.168.0.125"


chmod +x ~/.ssh_login_windows.fish # make the script executable.
~/.ssh_login_windows.sh # run to verify the script.

nano ~/.config/fish/config.fish # open config file
alias sshwindows="~/.ssh_login_windows.fish" # add alias

source ~/.config/fish/config.fish # apply the changes
sshwindows # run on client to connect
```
