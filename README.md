### Select Branch
A handy quick-select CLI tool for git branches

#### Add this line to your `.bash_profile` or `.bashrc` dotfile
```
# Utilize select-branch npm module, a local Git branch selection CLI tool
alias checkout='node /usr/local/lib/node_modules/select-branch/index.js `git branch` `git rev-parse --abbrev-ref *`'
```