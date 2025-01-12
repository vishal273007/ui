
## SSH Setup
- type `ubuntu(or shell name)`: To open ubuntu from any local or remote terminal client.

### Setup SSH Server on Windws
- Go to Settings > System > Optional Features > Add an optional feature > Search for SSH and install the SSH Server.
- Open Terminal > type "services.msc" > Look for SSH Server > Properties > Change from manual to Automatic.

- To access the SSH, open Termus or any SSH Client app
- type `ssh "Vishal Vishwakarma"@192.168.0.125` and press enter.
- Now, since you used Microsoft Name/User_Name, so type Microsoft password, not local password.

<br>



 ## SSH Server setup in Termux:
 1. `pkg update && pkg upgrade -y`: _Update packages_
 2. `pkg install openssh -y`: _Install OpenSSH_
 3. `passwd`: _Set password `ssh@pad6/ssh@nord4`_
 4. `sshd`: _Start SSH server_
 5. `ps aux | grep sshd`: _Verify if server is running_ 
 5. `nano .bashrc` ==> add `sshd` in the end of the config file to auto start ssh server after opening termux.

<br>

_[In client's .bashrc config file, First login with `ssh username@ip -p 8022` and password. Then add alias as `alias sshpad6="sshpass -p 'ssh@pad6' ssh u0_a327@192.168.0.149 -p 8022"` to .bashrc file for quick login. Directly using alias will not work as first credentials needs to be stored first]_

<br>

- `whoami`: _Show termux username_
- `ifconfig`: _Find Termux IP address_

_Test From client device:_
- **Enter** - `ssh -p 8022 u0_a303@192.168.215.212`
- **Password** - `SSH@log1n`

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


