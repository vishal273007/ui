
## SSH Setup
- `shell name(ubuntu /powershell/ WSL)`: To access ubuntu linux terminal shell from ssh cliet device.



### To see username of the windows:
- Type  `echo%USERNAME%` in the Command Prompt, not in terminal.
- Type `whoami` in terminal to view the username.

<br>
<br>

### To Set Up SSH Server on Windws
- Go to Settings > System > Optional Features > Add an optional feature > Search for SSH and install the SSH Server.
- Open Terminal > type "services.msc" > Look for SSH Server > Properties > Change from manual to Automatic.

- To access the SSH, open Termus or any SSH Client app
- type `ssh "Vishal Vishwakarma"@192.168.0.125` and press enter.
- Now, since you used Microsoft Name/User_Name, so type Microsoft password, not local password.

<br>

---
### If termux is showing error while connecting to the remote server:
- Run `pkg update && pkg upgrade -y` to update packages.
- Try going to root directory with `cd ~` command and try again.
- Clear app cache and force stop and reopen and try again.


 ## How to Set Up SSH in Termux and Access from Windows Terminal
 1. `pkg update && pkg upgrade -y`: _Update packages_
 2. `pkg install openssh`: _Install OpenSSH_
 3. `passwd`: _Set password for SSH login_
 4. `sshd`: _Start SSH server_
 5. `ifconfig`: _Find Termux IP address_
<br>

- `whoami`: will show the username in termux.

## Now from Windows Terminal
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


