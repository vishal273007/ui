# VS Code Settings

### Regular used keys tips:

- Hold “Alt” key to enable multi-line cursor to write or delete similar text at once.
-

<hr>

### VS Code Frequently Used Shortcuts:

- **`Ctrl + Backtick`** --> Open terminal.
- **`Ctrl + ,`** --> Open settings
  <br>

- **`Ctrl + D`** --> Copy same line below
- **`Alt + Z`** --> Enable/Disable Word Wrap "OR" Search "word wrap" in settings and enable.
- **`Ctrl + Shift + V`** --> Preview Markdown Docs

  <!------------------------------------------------------------------------------------------------------------------------------------>

## Tips:

- **`Format on save`**: Ctrl + , --> search format on save and enable.
- **`Word wrap`** enabled by default - Search for word wrap and select on.
- For troubleshooting any any issue due to extensions, just disable one by one and find the problatic extention to uninstall.
- Snippet:
    <pre>
  
        main + enter = java main() block
        out + enter = println statement
    
    </pre>

- In `json` file settings, add following:
  - `"editor.suggest.overline": false` (,): for suggestions show below cursor line.
  - From the suggestions popup edge, hold the edge and drag inward to resize the suggestions box to make it small.

### Files and Folders Organization:

- For oraganizing files and folders in the file explorer, follow this approace:
- 01_HTML/
  01_Basics/
  |--- 01_first.html  
  |--- 02_anchor.html

      02_Images/
      |--- 01_img.html

- 02_CSS/
  01_Basics/
  |--- 01_index.html
  |--- 02_style.css

- 03_JavaScript/
  01_Basics/
  |--- 01_index.html
  |--- 02_grid.js

<br>

<hr>

### Hide any folder from file explorer

- Settings("CTRL + ,) > Search for "files.exclude" > Click "Add Pattern" > enter folder name like "**/.vscode or **/gitignore".
- Similarly, add pattern [**/*.class] to hide generated java .class files from vscode file exporer area.

### Folder expand only after clicking the arrow left to the folder:

- CTRL + , > search "compact folders" > disable.

### Prevent unwanted folders from getting pushed while pushing changes:

- **Steps**: Create or open ".gitignore" file in the root directory of the project.
  Add the unwanted folder name to hide it from being pushed (e.g., '.vscode/').

## Live Server Setup:

- live server can be configured to view output on the another device browser also.

- Install **nodejs** --> run `node -v` and `npm -v` commands on terminal to verify installation.
- **`npm install -g live-server`**: run this command on terminal to insatll liver server.
- **`live-server`**: open desired folder --> open terminal there. run `live-server` command to enable live server.
- `http://192.168.0.125:8080`: open this url in tab to see live changes.
- **Firewall Issue**: Initially, the url will not open in another device. <br>
  > Firewall --> Advanced settings --> Inbound Rules --> Port --> 8080 --> Allow connection --> Name "Allow live-server".

<br>

- Open the folder where you want to open the VS Code. Hold shift key and right click on an empty space in the folder and choose open with VS Code.
- Or open the terminal in the same folder/directory where you wanna open VS Code then type "code ." in the terminal and the VS Code will open with folder.

<br> <br> <br> <br> <br> <br>

---

<!----------------------------------------------------------------------------------------------------------------------------------------->

<br>

# MARKDOWN GUIDE

`Use MARKDOWN LANGUAGE to edit notes. Use plain txt only for writing code and then copy paste into the IDE for running.`

### Heading/Title

- `#` MAIN TOPIC
- `##` SUBTOPIC
- `###` SMALLER SECTION

### Text Styling

- `**Bold Text**`
- `_Italic Text_`
- `**_Bold and Italic_**`
- (`xyz`) for Highlight or main quote, tick will not be visible on the markdown viewer.

### Lists

- `-`: for Unordered Lists
- `1.xyz` for Ordered Lists

### Horizontal Line

- `---`: for horizontal line

### Note

- `>` for important notes

### Empty/New Line

- Use `<br>` tag as html for new line as markdown also supports html codes.

<!----------------------------------------------------------------------------------------------------------------------------------------->

# Eclipse

---

## Basic Settings:

- **Change theme**: Go to Windows --> Preferences --> General --> Appearance --> Theme: `DevStyle` Theme.
- **`Change font`**: ...Appearance --> Colors and Fonts --> Basic --> Text Font --> JetBrains Mono. Then Font style "Regular" and leave size default.

- **`Auto format source code`**: Go to Windows --> Preferences --> Java --> Editor --> Save Actions. Check "Perform the selected actions on save", Check "Format source code", Check "Format all lines", and Check "Organize imports".
- **`Enable autosave before run`**: Search for "build" in setting and enalbe "Save automatically before manual build".

--

<br> <br>

- Change Output layout to right side of code editor: Hold the top edge of output windows and drag it to the position you want.

---

**Eclipse Marketplace**:

- Use the eclipse market place to download useful plugins and theme and many more. `Help --> Eclipse Marketplace` the use the search bar for your specific queries.

- Dele the .metadata folder in the username/eclipse-workspace to reset layout and font. it will fix the .project not found while opening the project.

<br>

## Eclipse Shortcuts:

- **`Ctrl + Shift + F`**: To format code automatically.
- **`Ctrl + F11`**: Shortcut to run the code immediately.

<!----------------------------------------------------------------------------------------------------------------------------------------->

# ACODE

- **Autosave**: Settings > Search "autosava" > Enter 0 to diable autosave.
- **Format on Autosave**: Disable format on autosave to fix the prevent constant text notification to select a formatter.
- **Ctrl+Shift+D**: Copy line down.

<br>

- **Alt + Backspace**: Remove whole at once.
- **Ctrl + u / Ctrl + Shift + u**: uppercase/lowercase.
- **Alt + Right Arrow**: Go to end of the line.

<br>

- **Alt + Up/Down Arrow**: Instead of moving a line up or down, use it to move the line.
- **Ctrl + Q**: To close the current open file.

**Acode plugins**: AcodeX Terminal, GitHub, Acode Ayu, Snippet, Prettier, Lint, Vscode Dark, AI Assistant Beta, Extra Syntax Highlight, Code Runner, Auto Rename Tag, Lorem Ipsum, Java Cliet, Material Icons, Acode ES7+ snippets, Eruda Acode, Acode LSP.

<mark> <u> **Formatting** </u> - <span style="color: red; font-weigh: bold;"> Formatting > Java > Select 'None'.</span> "Default" option will make the code forced Un-formatted which is worse than even text editors. </mark>

### Steps To Set Up "browser-sync" For Live Preview:

1. pkg install nodejs
2. pkg install -g browser-sync

3. cd folder_name_with_index.html_file
4. browser-sync start --server --files "\*" --no-notify. Enter "http://localhost:3000" manually in browser search bar.

### Common Settings to do in Acode:

- Go to Settings >Editor Settings > Disable Live autcompletion
- Go to Settings > Themes > Enable VS Code for editor in Themes
- Go to Formatter > Select popular language and and there format.

### Emmets:

- **main** + enter = java main() snippet
