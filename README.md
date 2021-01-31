# ButtonBox for Windows
This project enables all devices with a modern web browser (Mobile, Tablett/Laptop/PC) connected to your local network to send joystick-inputs to your PC. The interface is fully and easily customizable allowing up to 512 custom actions to be available at a time.

Join me on a ride while I show you around the ButtonBox. **Click on the image bellow** to open the YouTube video

[![Example video](https://i.imgur.com/5kiCRyA.png)](https://www.youtube.com/watch?v=w4HYyp1zWLA)

![Example Setup](https://i.imgur.com/xwbIx9h.jpeg)
Example Setup with a ButtonBox for Elite Dangerous. The tablet in the bottom left is the ButtonBox while playing on the main monitor in the middle.

## Installation and Usage
### Prerequisites
#### NodeJS
You can download NodeJS [here](https://nodejs.org/). NodeJS is a JavaScript runtime which allows for a JavaScript server on your local machine.
#### vJoy
vJoy can be downloaded [here](https://sourceforge.net/projects/vjoystick/). vJoy adds a joystick driver and a programming interface to Windows meaning any application accessing this API can send inputs to the virtual joystick. These inputs can be used in all kinds of applications from games to chat clients and editing software.

### Installation
#### Prepare the device where you wish to use receive the inputs (Most likely your PC)
1. Make sure both NodeJS and vJoy are installed. If not follow the step _Prerequisites_ above
2. Clone this repository using `git clone https://github.com/TheCrazyMaffin/ButtonBox.git` or by downloading and extracting the ZIP file
3. Open the "Configure vJoy" app, select 2 at the top, press `Add Device` at the bottom. Repeat for device 3 at the top.
4. Rename the file `.env.template` to `.env`. If you wish to change the port number of the server you can do this here but I recommend leaving it the default value of `80`
5. Open a command prompt in the root directory (The folder this file is in) of this project. (Shift RMB > Open PowerShell here)
6. Run `npm install` and wait for it finish. ()
7. Run `npm run start` and watch for errors.
8. Leave open the command line and continue with step 1 of _Usage_

### Usage
1. If step 6 of _Installation_ completed without errors there will be a line saying `Use https://... to access your ButtonBox`.
2. The device you want to open the ButtonBox on needs to have a internet browser (E.g. Google Chrome) and needs to be connected to the same network as your PC.
3. Open the link from step 1 in the browser of the device and select the ButtonBox you want to open.
4. Press the "Go fullscreen" button to use the ButtonBox.
5. Go into the Keybind settings of the application you want to use the ButtonBox with and assign the fitting buttons (When prompted to assign a Input press the button on the ButtonBox). **You need to do this for all the buttons**

For the best experience set your ButtonBox device to not go to sleep.

## Contribution
Please refer to the README in `/templates` if you want to make your own ButtonBox layout. **It's super easy, I promise**

## Disclaimer
This project has been tested with node v14.15.0 and with and version 536 of vJoy.

## License
This project is licensed by the GNU GPL version 3. You will find a copy of this license in the `LICENSE` file.
