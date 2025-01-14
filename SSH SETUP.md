
## SSH Setup
- type `ubuntu(or shell name)`: To access ubuntu from any local or remote terminal client.

### SSH Server Setup on Windws
- Settings > System > Optional Features > Add an optional feature > Search for SSH and install the SSH Server.
- Terminal > "services.msc" > SSH Server > Properties > Change from manual to Automatic.

- Test with SSH Client
- Type `ssh "Vishal Vishwakarma@192.168.0.125"` and enter.
- Now, since you used Microsoft User_Name, so enter Microsoft account password, not local password.

<br>



 ## SSH Server setup in Termux:
 1. `pkg update && pkg upgrade -y`: _Update packages_
 2. `pkg install openssh -y`: _Install OpenSSH_
 3. `passwd`: _Set password `ssh@pad6/ssh@nord4`_
 4. `sshd`: _Start SSH server_
 5. `ps aux | grep sshd`: _Verify if server is running_ 
 5. `nano .bashrc` ==> add `sshd` in the end of the config file to auto start ssh server after opening termux.
 6. _[In client's `.bashrc` config file, add  line `alias ssh_pad6="~/.pad6_ssh_login.sh`. > `touch ~/.pad6_ssh_login.sh` > `chmod +x ~/.pad6_ssh_login.sh` > add script `#!/bin/bash (enter) sshpass -p 'ssh@pad6' ssh "u0_a327@192.168.0.149" -p 8022` > `ls -a` to check_

<br>

- `whoami`: _Show termux username_
- `ifconfig`: _Find Termux IP address_

_Test From client device:_
- **Enter** - `ssh "u0_a327@192.168.0.149" -p 8022`
- **Password** - `ssh@pad6`

<br>
<br>

### Termux as SSH Client Setup:
- Type `pkg install sshpass -y`: for storing password. verify with `sshpass -V`.
- First, connect manually with "ssh username@ip" > password.
- `nano ~/ssh_login_windows.sh`: to create and open to edit.
- `#!/bin/bash` (enter) `sshpass -p '12513365@Ms' ssh "Vishal Vishwakarma"@192.168.0.125`: add this lines to config file.
- `chmod +x ~/ssh_login_windows.sh`: make the script executable.
- `~/ssh_login_windows.sh`: run to verify the script.

- **`nano ~/.bashrc`**: open config file
- `alias sshwindows="~/ssh_login_windows.sh"` : add this line belowy.
- `source ~/.bashrc`: save and apply the changes.
- `sshwindows`: type on cliet to SSH on windows. 

