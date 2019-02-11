# This file is part of home-assistant-config
# https://github.com/mgafner/home-assistant-config
#
# This is free software: you can redistribute it and/or modify
# it under the terms of the GNU General Public License as published by
# the Free Software Foundation, either version 3 of the License, or
# (at your option) any later version.
#
# This is distributed in the hope that it will be useful,
# but WITHOUT ANY WARRANTY; without even the implied warranty of
# MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
# GNU General Public License for more details.
#
# You should have received a copy of the GNU General Public License
# along with this file.  If not, see <http://www.gnu.org/licenses/>.

import requests; 
import sys;
import json;

RESPONSE = requests.get(sys.argv[1])
#RESPONSE = requests.get("http://homewizard-ip/homewizard-user-password/get-sensors/")
# RESPONSE will be a python dictionary (example: {'id': 1})
# to convert it back to json data (example: {"id": 1}), we need json.dumps(RESPONSE)

#debug:
#print(RESPONSE)
#print(json.dumps(RESPONSE))

orig_stdout = sys.stdout

f = open("/config/www/sensor-0.json", "w")
sys.stdout = f
print(json.dumps(RESPONSE.json()["response"]["thermometers"][0]))
f.close()

f = open("/config/www/sensor-1.json", "w")
sys.stdout = f
print(json.dumps(RESPONSE.json()["response"]["thermometers"][1]))
f.close()

f = open("/config/www/sensor-2.json", "w")
sys.stdout = f
print(json.dumps(RESPONSE.json()["response"]["thermometers"][2]))
f.close()

f = open("/config/www/sensor-3.json", "w")
sys.stdout = f
print(json.dumps(RESPONSE.json()["response"]["thermometers"][3]))
f.close()

f = open("/config/www/sensor-4.json", "w")
sys.stdout = f
print(json.dumps(RESPONSE.json()["response"]["thermometers"][4]))
f.close()

f = open("/config/www/energymeter-0.json", "w")
sys.stdout = f
print(json.dumps(RESPONSE.json()["response"]["energymeters"][0]))
f.close()

sys.stdout = orig_stdout

print("OK")
