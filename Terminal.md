<div style="text-align: center;">   <h1> Terminal  </h1>  </div>

> Sometimes ChatGPT fails to solve a problem and Claude solves, sometimes claude fails and ChatGPT solves. Sometimes both fails and google search solves the problem. So, remember not to try out different tools and resources for solution.

> _Note: Official Docs is must recommended to read._
> _Linux is purely keyboard based, So use only keyboard to control the system, else, just use windows. Don't try to use mouse in Linux enviroment._


## Powershell Theme:

- `Settings(Ctrl + ,)` -> `Default profile` -> `Color Schemes` -> Choose `Drakula`.
- Add Drakula theme terminal:
- add theme code in profile.json file in `"schemes": [ code here ],` (ask theme code from multiple ai assistant).
- code:
```bash
{
    "name": "Dracula",
    "background": "#282A36",
    "black": "#21222C",
    "blue": "#BD93F9",
    "brightBlack": "#6272A4",
    "brightBlue": "#D6ACFF",
    "brightCyan": "#A4FFFF",
    "brightGreen": "#69FF94",
    "brightPurple": "#FF92DF",
    "brightRed": "#FF6E6E",
    "brightWhite": "#FFFFFF",
    "brightYellow": "#FFFFA5",
    "cursorColor": "#F8F8F2",
    "cyan": "#8BE9FD",
    "foreground": "#F8F8F2",
    "green": "#50FA7B",
    "purple": "#FF79C6",
    "red": "#FF5555",
    "selectionBackground": "#44475A",
    "white": "#F8F8F2",
    "yellow": "#F1FA8C"
}
```
### Hide Windows Terminal right status/scroll bar -  
```json
"profiles": {
    "defaults": {
        // other settings
        },
        // other lines
        "useAcrylic": true,
        "scrollbarState": "hidden"  // Add this line here
    },
  "list": []
```

### Settings

_Settings > Startup tab > Default profile > Ubuntu_

**Default profile**


- Color Scheme: Dracula
- Default profile: Ubuntu(bird icon change with coping red icon path)
- Font face: FiraCode Nerd Font
- Font-size/Font-weight: 11 / Medium

- Transparency- Background Opacity: 90%, Enable acrylic material
- Padding: 12

- Delete a profile: Settings --> Profile --> Scroll --> Delete profile.

**Fira Code font download** : Search fira code download > Google font > Get font > Download all > Extract > Static folder files > select all and right click > Install.

<br>

**Startup section > Launch parameters**

- Launch mode: Focus/Default
- Launch size: Coulumn: 110, Row: 30
- Launch positions: `Center on launch` (OR) `X:570, Y: 250`.

- In Interaction section, disable `Warn when closing more than one tab`.

- **`F11`**: Full screen

<br>

_Reset Terminal:_

- `Installed apps` > Search `terminal` > `Advance options` > `Reset`.

<hr> <br> <br>

<!-- ===================================================================================================================================== -->
