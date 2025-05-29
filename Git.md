# Git & GitHub

## Git Commands

### Conflict changes

1. `git pull --no-rebase` -> merge changes from local and cloud

### Push Changes

1. `git status` --> show modified files.
2. `git add .` --> stages the changes.
3. `git commit -m "updated notes"` --> provide meaningful message describing what you changed.
4. `git push` --> upload changes to the GitHub.

### Git Pull

1. Download changes and updates from remote branch to keep local branch up-to-date.
2. `git pull` --> download and merge updates. Make sure local branch is already tracking a remote branch.
3. Ex: You cloned prasad sir project. when he changes in his code, then you can simply run the "git pull" command to update your copy of their project automatically.

---

## Git Clone

- `git clone https://github.com/vishal273007/ui.git`: Download a copy of ui repository in to current folder.

## Git Fork

- Create a copy of someone else's repository on self GitHub account without any connection to the original repository.
- We need to **fork first**, then **clone** in our system to work locally.

---

<!-- =================================== -->

## For Beginners

### 1. Set Up Git

Before starting, configure Git with details:

- `git config --global user.name "Vishal Vishwakarma"`: Sets Git username.
- `git config --global user.email "myemailgmail.com"`: Sets email for commits.
- `git config --list`: verify details.

For the first time push, enter following:

- `git config --global credential.helper store` - firt time only to store git credentials
- Clone and then edit and push > Enter credentials once when pushing/pulling (after this, Git will remember them)

_Now, when asked, enter the details like following:_

- `username`: Enter github username `vishal273007`
- `enter password`: enter the `PAT(access token)` from Proton pass note.

---

### 2. Create a New Repository

When starting a new project:

- `git init`: Initializes a new Git repository in the project folder.
- `git add .`: Adds all the files to the staging area (ready for commit).
- `git commit -m "initial commit"`: Saves changes with a message.

- `git remote add origin https://github.com/vishal273007/Notes.git`: Links local project to a GitHub repository.
- `git push -u origin main`: Pushes code to GitHub (need "-u" flag only for the first push).

---

### 3. Working on the Project

For regular updates in our code:

- `git status`: Check what files has been changed.
- `git add .`: Stage all files.
- `git commit -m "updated some files"`: Save the staged changes with short message.
- `git push`: Upload changes to GitHub.

---

### 4. Update the Code

To get the latest updates fromGitHub:

- `git pull`: Pulls changes from GitHub and merges them into local project.

---

### 5. Work with Branches

For experimenting or working on new features:

- `git branch <branch-name>`: Creates a new branch(e.g< feature-login>).
- `git checkout <branch-name>`: Switches to that branch to start working.
- `git merge <branch-name>`: Merges changes from another branch into current one.
- `git branch -d <branch-name>`: Deletes a branch that is no longer needed.

---

### 6. Undo Mistakes

If there's a mistake, here's how to fix:

- `git restore <file>`: Discard changes in the working directory.
- `git reset <file>`: Removes a file from staging the staging area but keeps the changes locally.
- `git revert <commit-hash>`: Creates a new commit that undoes changes from a specific commit(safer than reset).
