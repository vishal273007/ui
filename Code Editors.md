# VS Code Settings
<!---------------------------------------------------------------------------------------------------------------->

`vscode.dev/(link)` - VS Code web editor. [`Source Control` > Enter message > Click on `Commit & Push`]

## Open VS Code in Linux and Windows folder

- `code .` - VS Code/Cursor in current directory by default. `cursor .` may ask to open current directory again in WSL file system.
- `code filename.txt` - Open file with VS Code

### Tips

- Hold "Alt" key to enable multi-line cursor to write or delete similar text at once.
- Use the right preview to scroll easily in vs code instead of difficult mouse scroll.

___

### VS Code Frequently Used Shortcuts

- `Ctrl + Backtick` --> Terminal.
- `Ctrl + ,` --> Settings
- `Alt + up/down arrow` --> Move a line without cut and paste quickly.

- `Ctrl + Shift + D` --> Copy same line below
- `Alt + Z` --> Enable/Disable Word Wrap "OR" Search "word wrap" in settings and enable.
- `Ctrl + Shift + V` --> Preview Markdown Docs

- `Format on save`: Search in settings

- For troubleshooting any any issue due to extensions, just disable one by one and find the problematic extension to uninstall.
- Snippet:

    ```java
        main = main() block
        sys = print line statement
    ```

- Search `workspace trust` -> `Security>Workspace>Trust:Enabled (Applies to all profiles)` - Uncheck to trust all folders.

## Settings

- `Minimap`: View > Appearance > Minimap > uncheck.
- Settings > search `sticky` > `Editor > Hover: Sticky` (Hide popup on hover when moving mouse).
- Settings > search `sticky` > `Editor > Sticky Scroll: Enabled` > Uncheck to make the top heading disable sticky scroll.

- `code runner - run in terminal` > uncheck to show output in Output tab.
- Enable `format on save` by searching and enabling it in settings.
- Search

> Move to "secondary sidebar" to enable `Codeium` to open with button beside minimize button, just like where copilot opens.

## JSON Settings

```json
"editor.suggest.overline": false, // suggestions below cursor.

// Editor and Terminal Font for font ligature(enable from settings) support
"terminal.integrated.fontFamily": "FiraCode Nerd Font Medium", // must use medium for terminal
"terminal.integrated.fontWeight": "normal",
"terminal.integrated.fontWeightBold": "normal" // consistent font weight for all text
"editor.matchBrackets": "never" // hide the boxes that are shown when selecting one parenthesis.
    
```
<!---------------------------------------------------------------------------------------------------------------->

- Resize suggestions popup by holding popup edge to 3 lines small.

- Search `code-runner` and check `clear previous output` for clean output.

### Files and Folders Organization

- Organizing files and folders:

- 01_HTML/
    01_Basics/
    |--- 01_first.html  
    |--- 02_anchor.html

___

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

<!--------------------------------------------------------------------------------------------------------------------------->

## Cursor

- Install `cursor` (not `code .`) after installation.

### Cursor Settings

- Change left Activity Bar orientation panel: `Ctrl + ,` > search "activity bar orientation" > Vertical.

- Change terminal shell to powershell: `Ctrl + ,` > search "terminal.integrated.defaultProfile" > change to "PowerShell".

- Use `temp mail` to reset credits.
- Cursor settings > import settings to copy VS Code settings.

## AdvJava in ubuntu solution

- `1. Added jar file` - [issue - ClassNotFoundException: oracle.jdbc.OracleDriver].

- `2. Set ClassPath` -> `.vscode/settings.json` in current advanced java project:

```json
   {
     "java.project.sourcePaths": ["."],
     "java.project.referencedLibraries": ["/home/vishal/.config/dbjar/ojdbc8.jar"],
     "code-runner.executorMap": {
       "java": "cd $dir && javac -cp .:/home/vishal/.config/dbjar/ojdbc8.jar $fileName && java -cp .:/home/vishal/.config/dbjar/ojdbc8.jar $fileNameWithoutExt"
     }
   }
```

- `3. Firewall` - port 1521 was blocked [issue - stuck for infinity] - verified.

- `4. URL IP in program` - Changed from localhost - 172.25.16.1(even when no wifi)/192.168.0.125 - [issue - Network Adapter could not establish the connection]  - verified.

<!--------------------------------------------------------------------------------------------------------------------------->

## MARKDOWN GUIDE

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

`-`, `1.xyz` : Unordered Lists and Ordered Lists

### Horizontal Line

 `---`: for horizontal line

### Note

`>` for important notes

## Eclipse
<!-- ==== -->

### Basic Settings

- **Change theme**: Go to Windows --> Preferences --> General --> Appearance --> Theme: `DevStyle` Theme.
- **`Change font`**: ...Appearance --> Colors and Fonts --> Basic --> Text Font --> JetBrains Mono. Then Font style "Regular" and leave size default.

- **`Auto format source code`**: Go to Windows --> Preferences --> Java --> Editor --> Save Actions. Check "Perform the selected actions on save", Check "Format source code", Check "Format all lines", and Check "Organize imports".
- **`Enable autosave before run`**: Search for "build" in setting and enable "Save automatically before manual build".
- **`Nested Project Explorer`**: Project Explorer > three vertical dots > Package Presentation > Select Hierarchical.

___

**Disable forced comment formatting**:

- search formatter in settings.
- click edit(beside active profile).
- go to comment tab
- uncheck enable line comment formatting and block comment formatting.
- change the name from built-in to your any name.

- Change Output layout to right side of code editor: Hold the top edge of output windows and drag it to the position you want.

___

**Eclipse Marketplace**:

- Use the eclipse market place to download useful plugins and theme and many more. `Help --> Eclipse Marketplace` the use the search bar for your specific queries.

- Delete the .metadata folder in the username/eclipse-workspace to reset layout and font. it will fix the .project not found while opening the project.

## Eclipse Shortcuts

- **`Ctrl + Shift + F`**: To format code automatically.
- **`Ctrl + F11`**: Shortcut to run the code immediately.

```quote
Do not pray for an easy life. Pray for the strength to use the keyboard - Bruce Lee.
Not all shortcut are needed but only mostly used 10 to 15 shortcuts
```

<!--------------------------------------------------------------------------------------------------------------------------->