
## SSH Setup
- type `ubuntu(or shell name)`: To open ubuntu from any local or remote terminal client.

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
 6. _[In client's `.bashrc` config file, add  line `alias ssh_pad6="~/.pad6_ssh_login.sh`. > `touch ~/.pad6_ssh_login.sh` > `chmod +x ~/.pad6_ssh_login.sh` > add script `#!/bin/bash (enter) sshpass -p 'ssh@pad6' ssh "u0_a327@192.168.0.149"` > `ls -a` to check_

<br>

- `whoami`: _Show termux username_
- `ifconfig`: _Find Termux IP address_

_Test From client device:_
- **Enter** - `ssh -p 8022 u0_a303@192.168.215.212`
- **Password** - `ssh@pad6`

<br>
<br>

### Setup Termux to auto login for SSH:
- Type `pkg install sshpass -y`: to install sshpass for autologin setup. type `sshpass -V` on terminal to verify installation.
- `nano ~/ssh_auto_login.sh`: to create and open to edit.
- `#!/bin/bash` <br>
`sshpass -p '12513365@Ms' ssh "Vishal Vishwakarma"@192.168.0.125`: add these lines inside the script.
- `chmod +x ~/ssh_auto_login.sh`: make the script executable.
- `~/ssh_auto_login.sh`: run this script to check if automatic login is working.

- **`nano ~/.bashrc`**: to open ~/.bashrc file and editing accordingly.
- `alias sshlogin="~/ssh_auto_login.sh"` : add this line below to the text editor, change alias name accordingly.
- `source ~/.bashrc`: save and apply the changes.
- `sshlogin`: now type this you'll be automatically signed in with SSH. 


- windows terminal can also be accessed even before signing in after boot.

---

SSH(Secure Shell) is a protocol. Do not enable the ssh keygen method for server access.


