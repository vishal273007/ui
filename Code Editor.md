<div align="center"><h1>VS Code</h1></div>

## Hide any unnecessary folder from vs code file explorer:

Settings("CTRL + ,) > Search for "files.exclude" > Click "Add Pattern" > enter folder name like "\*\*/.vscode".

## Folder expand only after clicking the arrow left to the folder:

CTRL + , > search "compact folders" > disable.

## Prevent unwanted folders from getting pushed while pushing changes:

Create or open ".gitignore" file in the root directory of the project.
Add the unwanted folder name to hide it from being pushed. Ex: ".vscode/".

## VS Code Frequently Used Shortcuts:

-   Ctrl + ` --> to open terminal.
-   Ctrl + , --> Open settings
-   Alt + Z --> Enable/Disable Word Wrap

Task for VS Code:

2. Learn what is SSH, SSH client and server and how to use it.

---

<div align="center"><h1>ACODE</h1></div>

[ Enable Autosave: Settings > Click on "Search" > Type "autosava" > enter 1000]

Steps To Set Up "browser-sync" For Live Preview:

1. pkg install nodejs
2. pkg install -g browser-sync

3. cd folder_name_with_index.html_file
4. browser-sync start --server --files "\*" --no-notify. Enter "http://localhost:3000" manually in browser search bar.

### Common Settings to do in Acode:

-   Go to settings >Editor Settings > Disable Live autcompletion
-   Go to Themes > Enable VS Code in edotor settings
-   Go to Formatter > Select popular language and and there format.

---

# MARKDOWN TEXT EDITOR

> Use only MARKDOWN LANGUAGE to edit notes. Uae plain txt only for writing code and then copy paste into the IDE for running.

### Heading/Title

-   "# MAIN TOPIC"
-   "## SUBTOPIC"
-   "### SMALLER SECTION"

### Text Styling

-   "**Bold Text**"
-   "_Italic Text_"
-   "**_Bold and Italic_**"
-   (`xyz`) for Commands or Shortcuts

### Lists

-   (-): for Unordered Lists
-   (1.xyz) for Ordered Lists

(---): for horizontal line
(>) for important notes
