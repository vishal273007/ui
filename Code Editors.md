# VS Code Settings
<!---------------------------------------------------------------------------------------------------------------->

`vdcode.dev/(repolink)` before github link opens vscode web editor. [`Source Control` > Enter message > Click on `Commit & Push` or `Checkmark` above message box.]

### Open VS Code in Linux and Windows folder

- _Linux_: Navigate to project directory -> `code .`
- _Windows_: Navigate to project directory -> right click and `Open with code`.

- `code` - VS Code
- `code .` - VS Code in current directory

### Tips

- Hold "Alt" key to enable multi-line cursor to write or delete similar text at once.
- `code .` - open current directory in vs code from terminal.
- Use the right preview to scroll easily in vs code instead of difficult mouse scroll.

<hr>

### VS Code Frequently Used Shortcuts

- `Ctrl + Backtick` --> Terminal.
- `Ctrl + ,` --> Settings<br>

- `Ctrl + Shift + D` --> Copy same line below
- `Alt + Z` --> Enable/Disable Word Wrap "OR" Search "word wrap" in settings and enable.
- `Ctrl + Shift + V` --> Preview Markdown Docs

## Tips

- `Format on save`: Search in settings

- For troubleshooting any any issue due to extensions, just disable one by one and find the problatic extention to uninstall.
- Snippet:

    ```java
        main = main() block
        syso/out = println statement
    ```

- Search `workspace trust` -> `Security>Workspace>Trust:Enabled (Applies to all profiles)` - Uncheck to trust all folders.

# JSON Settings

```json
"editor.suggest.overline": false, // suggestions below cursor.

// Editor and Terminal Font for font ligature(enable from settings) support
"terminal.integrated.fontFamily": "FiraCode Nerd Font Medium", // must use medium for terminal
"terminal.integrated.fontWeight": "normal",
"terminal.integrated.fontWeightBold": "normal" // consistent font weight for all text
    
```
<!---------------------------------------------------------------------------------------------------------------->

- Resize suggestions popup by holding popup edge to 3 lines small.

- Search `code-runner` and check `clear previous output` for clean output.

### Files and Folders Organization

- Oraganizing files and folders:

- 01_HTML/
    01_Basics/
    |--- 01_first.html  
    |--- 02_anchor.html

---

### Hide file/folder from file explorer

- `"files.exclude` > Add Pattern > `**/.vscode, **/gitignore, **/*.class`

### Folder expand only after clicking the arrow left to the folder

- CTRL + , > search "compact folders" > disable.

### Prevent unwanted folders from getting pushed

- Create a `.gitignore` file in the root directory
- Add `.vscode` to hide the .vscode folder from being pushed

## Live Server Setup

### Installation & Usage

1. Install **Node.js**
   - Verify installation by running:

     ```bash
     node -v
     npm -v
     ```

2. Install live-server globally:

   ```bash
   npm install -g live-server
   ```

3. Start the server:
   - Navigate to desired folder
   - Run `live-server` in terminal

### Remote Device Access

- Access via: `http://192.168.0.125:8080`
- **Firewall Configuration:**
  1. Open Firewall → Advanced settings
  2. Navigate to Inbound Rules → Port
  3. Allow connection on port 8080
  4. Name the rule "Allow live-server"

# Cursor

## Create a symlink for cursor(cursor .) in linux

`sudo ln -s "/mnt/c/Users/Vishal Vishwakarma/AppData/Local/Programs/cursor/cursor.exe" /usr/local/bin/cursor`

## Cursor Settings

- Change Activity Bar(left side bar) Position to Vertical like vs code: `Ctrl + ,` > search "activity bar position" > change to "Vertical".

- Change terminal shell to powershell: `Ctrl + ,` > search "terminal.integrated.defaultProfile" > change to "PowerShell".

<!--------------------------------------------------------------------------------------------------------------------------->

# MARKDOWN GUIDE

## Heading/Title

- `#` MAIN TOPIC
- `##` SUBTOPIC
- `###` SMALLER SECTION

## Text Styling

- `**Bold Text**`
- `_Italic Text_`
- `**_Bold and Italic_**`
- (`xyz`) for Highlight or main quote, tick will not be visible on the markdown viewer.

## Lists

`-`, `1.xyz` : Unordered Lists and Ordered Lists

## Horizontal Line

 `---`: for horizontal line

## Note

`>` for important notes

## New Line

Use two blank lines between sections for spacing, instead of using HTML <br> tags.

# Eclipse

## Basic Settings

- **Change theme**: Go to Windows --> Preferences --> General --> Appearance --> Theme: `DevStyle` Theme.
- **`Change font`**: ...Appearance --> Colors and Fonts --> Basic --> Text Font --> JetBrains Mono. Then Font style "Regular" and leave size default.

- **`Auto format source code`**: Go to Windows --> Preferences --> Java --> Editor --> Save Actions. Check "Perform the selected actions on save", Check "Format source code", Check "Format all lines", and Check "Organize imports".
- **`Enable autosave before run`**: Search for "build" in setting and enalbe "Save automatically before manual build".
- **`Nested Project Explorer`**: Project Explorer > three vertical dots > Package Presentation > Select Hierarchical.

---

**Disable forced comment formatting**:

- search formatter in settings.
- click edit(beside active profile).
- go to comment tab
- uncheck enable line comment formatting and block comment formatting.
- change the name from built-in to your any name.

<br> <br>

- Change Output layout to right side of code editor: Hold the top edge of output windows and drag it to the position you want.

---

**Eclipse Marketplace**:

- Use the eclipse market place to download useful plugins and theme and many more. `Help --> Eclipse Marketplace` the use the search bar for your specific queries.

- Delete the .metadata folder in the username/eclipse-workspace to reset layout and font. it will fix the .project not found while opening the project.

<br>

## Eclipse Shortcuts

- **`Ctrl + Shift + F`**: To format code automatically.
- **`Ctrl + F11`**: Shortcut to run the code immediately.
