import subprocess

command = subprocess.check_output(['netsh','wlan','show','profile']).decode('utf-8').splitlines()
print(command)





