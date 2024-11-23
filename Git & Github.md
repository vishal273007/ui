## Git commands to update repository:

1. git status --> this will show the modified files.
2. git add . --> this will stage the changes.
3. git commit -m "updated tables in html" --> provide meaningful message describing what you changed.
4. git push / git push origin main - send the updates to the remote repository by pushing the changes to GitHub.

---

## Git Push differences:

1. git push -u origin main --> recommende for first time.
2. git push --> for subsequent pushes after tracking branch is already set up.
3. git push origin <branch(i.e. main)> --> push explicitely without setting up tracking.

---

## Git Pull:

1. Keep local branch up-to-date with remote repository.
2. Fetch remote changes: download updates from remote branch and merge into local branch.
3. git pull --> download and merge updates only when local branch is already tracking a remote branch.
4. git pull origin main --> same as git pull but uses explicite branch name to merge.

### Using Two Devices to Work on The Same Repository:

1. On Laptop:

Make changes, add, commit, and push. (git add . --> git commit -m "message" --> git push)

2. On Tablet:

Pull changes from GitHub before making new edits. (Go to working directory --> git pull)

Then Make changes, add, commit, and push. (git add . --> git commit -m "message" --> git push)

3. Back to Device A:

Pull the latest changes before starting work again. (git pull)
