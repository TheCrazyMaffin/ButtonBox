## Template formating

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
            "onclick": ""
          },
          "action": {//What happens when clicked
            "type": "",//Either button or link.
            "value": ""//Template name or button number (1-32)
            //The link can be used to create sub-menus
          }
        }
      ]
    }
  ]
}
```

### Colors
The available colors are
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