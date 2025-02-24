
# SSH Setup

- `ubuntu`: Access ubuntu from terminal client.

## SSH Server Setup on Windows

- Settings > System > Optional Features > Add an optional feature > Search for SSH and install the SSH Server.
- Terminal > "services.msc" > SSH Server > Properties > Change from manual to Automatic.

- Test with SSH Client
- Type `ssh "Vishal Vishwakarma@vishal(hostname)/192.168.0.125"` and enter. hostname will work only when router support hostname resolution. use ip if it doesn't work.
- Now, since you used Microsoft User_Name, so enter Microsoft account password, not local password.

## SSH Server setup in Termux

 1. `passwd`: _Set password `ssh@pad6/ssh@nord4`_
 2. `sshd`: _Start SSH server_
 3. `ps aux | grep sshd`: _Verify_
 4. `shell config` ==> add `sshd` to autostart.
 5. _In client's config file, add  line `alias sshpad6="~/.pad6_ssh_login.sh`. > `touch ~/.pad6_ssh_login.sh` > `chmod +x ~/.pad6_ssh_login.sh` >

 >`#!/bin/bash (enter) sshpass -p 'ssh@pad6' ssh "u0_a327@192.168.0.149" -p 8022` > `ls -a` to check_

- `whoami`: _username_ `ifconfig`: _IP address_

_Test From client device:_

- `ssh "u0_a327@192.168.0.149" -p 8022` and pwd `ssh@pad6`

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

### SSH Client for Auto Login on dynamic auto IP

```bash
#!/usr/bin/env fish

# Get the host IP address
set HOST_IP (ipconfig.exe | grep -m 1 "IPv4 Address" | awk '{print $NF}' | tr -d '\r')
echo "Host IP: $HOST_IP"

# Use sshpass to SSH into the remote host
sshpass -p "12513365@Ms" ssh "vishal vishwakarma@$HOST_IP"
```

### sqlplus auto login

```bash
#!/usr/bin/env fish

# Set the IP address dynamically (example for Windows)
set HOST_IP (ipconfig.exe | grep "IPv4 Address" | grep "192.168." | awk '{print $NF}' | tr -d '\r') # Get the host IP address containing 192.168.x.x
echo "Connecting to host at IP: $HOST_IP"
--------------------------------------------------------------
set HOST_IP (ipconfig.exe | grep -m 1 "IPv4 Address" | awk '{print $NF}' | tr -d '\r') # Get the host IP address containing 172.25.16.1
echo "Connecting to host at IP: $HOST_IP"

# Use sshpass to SSH into the remote host and run sqlplus
sshpass -p '12513365@Ms' ssh -t "vishal vishwakarma@$HOST_IP" "sqlplus system/tiger"
```
