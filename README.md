## select-branch
A handy CLI tool for quickly selecting a local git branch to checkout.

This exists so you don't have to keep copying & pasting the name of the branch you'd like to checkout when running $`git branch`.

### Installation
* First install this module globally: $`npm install -g select-branch`
* Then add the following line to your `.bash_profile` or `.bashrc` dotfile:
```
# Utilize select-branch npm module, a local Git branch selection CLI tool
alias checkout='node /usr/local/lib/node_modules/select-branch/index.js `git branch` `git rev-parse --abbrev-ref *`'
```
_If you're using a *NIX platform besides MacOS, please update the global node modules path in the provided bash alias._
## 
##### License: [MIT](https://opensource.org/licenses/MIT)
