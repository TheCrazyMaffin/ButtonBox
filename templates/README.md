# Adding and modifying templates
Templates are nothing more than JSON files which then get processed into the site you are viewing. 

## Naming the template
The new file you create should be named `<name>.json` replacing `<name>` with the name of your ButtonBox module. You can access this module in the browser by going to `/<name>` (You still need your server address infront, either `localhost` or the IP-address of your PC incase you are using it on another device within the same network.)
## Template formating
This is the template they are following
```json
{
  "rows": [//Array of rows the button box should have
    {
      "columns": [//The buttons (columns) in that row.
        {//2 rows with 5 buttons each looks neat on most devices
          "image": "",//The image to display (Works best with svg)
          //Images in the public/images dir have the url /images/
          "name": "",//The name to display bellow the image
          "colors": {//The colors of the images
            "default": "", //See below for available colors
            "onclick": "" //Leave both empty if you do not wish to recolor the SVGs
          },
          "action": {//What happens when clicked
            "type": "",//Either button or link.
            "value": ""//Template name or button number
            //The link can be used to create sub-menus
          }
        }
      ]
    }
  ]
}
```
You do not have to have 2 rows with 5 columns each. You might aswell make as many columns as you'd like. At some point you might need to scroll to navigate the button box. Try to think about sub-menus using links instead of scrolling.

### Documentation
**JSON**
| Property | Type | Note |
| --- | --- | --- |
| rows | Array[Row] | |

**Row**
| Property | Type | Note |
| --- | --- | --- |
| columns | Array[Column] | |

**Column**
| Property | Type | Note |
| --- | --- | --- |
| image | String | The URL to the Image displayed (I recommend using SVGs) |
| name | String | The name displayed bellow the image (Can be `""` to not display any name)|
| colors | ColorObject | |
| action | Action | Whatever happens when clicked |

**ColorObject**
| Property | Type | Note |
| --- | --- | --- |
| default | String | The color the image should be recolored in. (Leave empty to not change the color) |
| active | String | The color the image should be recolored in when clicked. (Leave empty to not change the color when clicked) |

**Action**
| Property | Type | Note |
| --- | --- | --- |
| type | ActionType |  |
| value | ActionValue | |

**ActionType and Value**
| ActionType | ActionValue | Note |
| --- | --- | --- |
| button | Integer | Press a button on the virtual joystick |
| link | String | Open another template (Name is the name in this folder without `.json`) |
| action | String(SpecialAction) | |

**SpecialAction**
| Value | Note |
| --- | --- |
| audio_play | Does exactly what the name says |
| audio_pause | |
| audio_next | Next track |
| audio_prev | Previous track |
| audio_mute | |
| audio_vol_down | |
| audio_vol_up | |
| audio_stop | |

### Colors
The available colors by default are
* orange
* orange-light
* red
* green
* blue
* blue-light

If you wish to add more see `_colors.sass` in /public/stylesheets. Follow this format
```scss
.colorName, .colorName-active:active
  filter: brightness(0) saturate(100%) <the actual color>
```
Replace colorName with the name you'd like to use for the color and for <the actual color\> insert your hex color [here](https://codepen.io/sosuke/pen/Pjoqqp) and paste the output replacing <the actual color\>
You might aswell already color the SVGs but using this you can recolor them afterwards.