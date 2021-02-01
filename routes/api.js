const express = require('express');
const { vJoy, vJoyDevice } = require('vjoy');
const robotJS = require('robotjs');

if (!vJoy.isEnabled()) {
  console.error('vJoy is not enabled.');
  process.exit(1);
}

// I am using 1 for something else so I start at Joystick 2
/*
Due to DirectX limitations ED only supports up to 32 buttons for one joystick => We need 2 joysticks to map things to.
If you need more than 64 buttons simply add more devices using the "Configure vJoy application" and add them to the array bellow
*/
const devices = [vJoyDevice.create(2), vJoyDevice.create(3)];

const router = express.Router();

function pressButton(buttonNum) {
  const joystickIndex = Math.floor((buttonNum - 1) / 32);
  const buttonIndex = buttonNum - 32 * joystickIndex;
  devices[joystickIndex].buttons[buttonIndex].set(true);
  setTimeout(() => {
    devices[joystickIndex].buttons[buttonIndex].set(false);
  }, 200);
}

router.post('/buttons/:id', (req, res) => {
  if (Number.isInteger(parseInt(req.params.id))) {
    pressButton(parseInt(req.params.id));
    res.status(200).end();
  } else {
    res.status(400).end();
  }
});

// For security reasons I dont want to enable all keys since anyone on the network could abuse this.
const actions = {
  audio_play() {
    robotJS.keyTap('audio_play');
  },
  audio_pause() {
    robotJS.keyTap('audio_pause');
  },
  audio_next() {
    robotJS.keyTap('audio_next');
  },
  audio_prev() {
    robotJS.keyTap('audio_prev');
  },
  audio_mute() {
    robotJS.keyTap('audio_mute');
  },
  audio_vol_down() {
    robotJS.keyTap('audio_vol_down');
  },
  audio_vol_up() {
    robotJS.keyTap('audio_vol_up');
  },
  audio_stop() {
    robotJS.keyTap('audio_stop');
  },
};

router.post('/actions/:name', (req, res) => {
  if (req.params.name in actions) {
    actions[req.params.name]();
    res.status(200).end();
  } else {
    res.status(400).end();
  }
});

module.exports = router;
