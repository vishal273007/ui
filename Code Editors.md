# VS Code

### Regular use tips:

- Hold “Alt” key and click on any text to write same word many places

### Hide any folder from file explorer

- Settings("CTRL + ,) > Search for "files.exclude" > Click "Add Pattern" > enter folder name like "**/.vscode or **/gitignore".
- Similarly, add pattern [**/*.class] to hide generated java .class files from vscode file exporer area.

### Folder expand only after clicking the arrow left to the folder:

- CTRL + , > search "compact folders" > disable.

### Prevent unwanted folders from getting pushed while pushing changes:

- **Steps**: Create or open ".gitignore" file in the root directory of the project.
  Add the unwanted folder name to hide it from being pushed (e.g., '.vscode/').

### VS Code Frequently Used Shortcuts:

- **Ctrl + `** --> Open terminal.
- **Ctrl + ,** --> Open settings
  <br>

- **Ctrl + D** --> Copy same line below
- **Alt + Z** --> Enable/Disable Word Wrap "OR" Search "word wrap" in settings and enable.
- **Ctrl + Shift + V** --> Preview Markdown Docs

## Tips:

- Enable "Format on save": Ctrl + , --> search format on save and enable.
- Enable word wrap by default - Search for word wrap and select on.
- For troubleshooting any any issue due to extensions, just disable one by one and find the problatic extention to uninstall.
- While writing java code, for main method, just type `"main"` and hit enter without writing whole line.

<br>

## Live Server Setup:

- This live server can be configured to view output on the another device browser.

- Install **nodejs** --> run `node -v` and `npm -v` commands on terminal to verify installation.
- **`npm install -g live-server`**: run this command on terminal to insatll liver server.
- **`live-server`**: open desired folder --> open terminal there. run `live-server` command to enable live server.
- `http://192.168.0.125:8080`: open this url in tab to see live changes.
- **Firewall Issue**: Initially, the url will not open in another device. <br>
  Firewall --> Advanced settings --> Inbound Rules --> Port --> 8080 --> Allow connection --> Name "Allow live-server".

- Shift + Alt + F - Auto Format as shortcut and enable "Editor: Format On Save" in setting by searching "format on save" in settings.

<br>

- Open the folder where you want to open the VS Code. Hold shift key and right click on an empty space in the folder and choose open with VS Code.
- Or open the terminal in the same folder/directory where you wanna open VS Code then type "code ." in the terminal and the VS Code will open with folder.

<br> <br> <br>

---

<br> <br>

# ACODE

[ **Enable Autosave**: Settings > Click on "Search" > Type "autosava" > enter 2000 ]
[ **Format on Autosave**: Disable format on autosave to fix the prevent constant text notification to select a formatter. ]
[ **Ctrl+Shift+D**: copy line down ]
[ **Alt + Backspace:]

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

<br>
<br>
<br>
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

# Eclipse

---

## Basic Settings:

- **Change theme**: Go to Windows --> Preferences --> General --> Appearance --> Theme: `DevStyle` Theme.
- **`Change font`**: ...Appearance --> Colors and Fonts --> Basic --> Text Font --> JetBrains Mono. Then Font style "Regular" and leave size default.

- **`Auto format source code`**: Go to Windows --> Preferences --> Java --> Editor --> Save Actions. Check "Perform the selected actions on save", Check "Format source code", Check "Format all lines", and Check "Organize imports".
- **`Enable autosave before run`**: Search for "build" in setting and enalbe "Save automatically before manual build".

--

<br>
<br>

- Change Output layout to right side of code editor: Hold the top edge of output windows and drag it to the position you want.

---

**Eclipse Marketplace**:

- Use the eclipse market place to download useful plugins and theme and many more. `Help --> Eclipse Marketplace` the use the search bar for your specific queries.

- Dele the .metadata folder in the username/eclipse-workspace to reset layout and font. it will fix the .project not found while opening the project.

<br>

## Eclipse Shortcuts:

- **`Ctrl + Shift + F`**: To format code automatically.
- **`Ctrl + F11`**: Shortcut to run the code immediately.
