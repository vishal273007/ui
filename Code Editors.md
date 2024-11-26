# VS Code

### Hide any folder from file explorer

- Settings("CTRL + ,) > Search for "files.exclude" > Click "Add Pattern" > enter folder name like "**/.vscode or **/gitignore".

### Folder expand only after clicking the arrow left to the folder:

- CTRL + , > search "compact folders" > disable.

### Prevent unwanted folders from getting pushed while pushing changes:

- **Steps**: Create or open ".gitignore" file in the root directory of the project.
Add the unwanted folder name to hide it from being pushed (e.g., '.vscode/').

### VS Code Frequently Used Shortcuts:

- **Ctrl + `** --> Open terminal.
- **Ctrl + ,** -->  Open settings
- **Alt + Z** --> Enable/Disable Word Wrap
- **Ctrl + Shift + V** --> Preview Markdown Docs

<br>
<br>
<br>
<br>


# ACODE

[ **Enable Autosave**: Settings > Click on "Search" > Type "autosava" > enter 1000]

### Steps To Set Up "browser-sync" For Live Preview:

1. pkg install nodejs
2. pkg install -g browser-sync

3. cd folder_name_with_index.html_file
4. browser-sync start --server --files "*" --no-notify. Enter "http://localhost:3000" manually in browser search bar.

### Common Settings to do in Acode:

-   Go to Settings >Editor Settings > Disable Live autcompletion
-   Go to Settings > Themes > Enable VS Code for editor in Themes
-   Go to Formatter > Select popular language and and there format.

<br>
<br>
<br>
<br>

# MARKDOWN GUIDE

`Use MARKDOWN LANGUAGE to edit notes. Use plain txt only for writing code and then copy paste into the IDE for running.`

### Heading/Title

-   `#` MAIN TOPIC
-   `##` SUBTOPIC
-   `###` SMALLER SECTION

### Text Styling

-   `**Bold Text**`
-   `_Italic Text_`
-   `**_Bold and Italic_**`
-   (`xyz`) for Highlight or main quote, tick will not be visible on the markdown viewer.

### Lists

-   `-`: for Unordered Lists
-   `1.xyz` for Ordered Lists


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

--

<br>
<br>

- Change Output layout to right side of code editor: Hold the top edge of output windows and drag it to the position you want.

---

 **Eclipse Marketplace**:

- Use the eclipse market place to download useful plugins and theme and many more. `Help --> Eclipse Marketplace` the use the search bar for your specific queries.

<br>

## Eclipse Shortcuts:

- **`Ctrl + Shift + F`**: To format code automatically.
- **`Ctrl + F11`**: Shortcut to run the code immediately.