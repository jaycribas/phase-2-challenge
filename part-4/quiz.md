- When you run a command in the terminal, where does BASH look for that command?
```
echo $PATH
/usr/local/bin:/usr/bin:/bin:/usr/sbin:/sbin
```

- On a UNIX computer, how do you stop a running process?
```
kill <process id>
```

- What packages do you have installed via homebrew?
```bash
brew list
bash		heroku		hub		openssl		python3		sqlite
gdbm		htop		libyaml		pandoc		readline	xz
git		httpie		mongodb		postgresql	ruby
```

- On a UNIX computer, how do you find the process id of a running process?
```
ps
```

- In a terminal, what does control-c do?
```
Kills the current process
```

- What would be the result of typing the following commands?
```sh
$ cd /Users/steve
$ mkdir foo
$ touch bar
$ cd foo
$ touch bar
$ pwd
```
```
/Users/steve/foo
```

- How do you set an environment variable in your shell?
```
VAR_NAME="Value goes here"
```

- What keyboard shortcut do you use to split the screen in your editor?
```
command-k arrow-key
```

- How do you create an alias in your shell?
```
alias example="cd ~/Desktop/example"
```

- When a terminal command completes, how can you tell if it was successful or not?
```
echo $?
(0 = success)
```

- What does your `~/.gitconfig` have in it? (paste the whole file here)
```
[user]
	name = Jay Cribas
	email = feverjay@gmail.com
[alias]
  co = checkout
  ci = commit
  st = status --short --branch
  l  = log --oneline --decorate --graph --relative-date --show-signature
  ls-untracked-files = !git-ls-files -o --exclude-standard
  ls-ignored-files = !git-ls-files --others -i --exclude-standard
  ls-modified-files = !git-ls-files -m
[color]
  status = auto
  diff = auto
  branch = auto
  interactive = auto
  ui = auto
  pager = true
[color "status"]
  added = green
  changed = yellow
  untracked = red
[core]
  excludesfile = ~/.gitignore
  autocrlf = false
  pager = less -F -X
  whitespace = fix,-indent-with-non-tab,trailing-space,cr-at-eol
[apply]
  whitespace = fix
[push]
  default = upstream
[branch]
  autosetuprebase = always
  autosetupmerge = true
[mergetool "diffmerge"]
  cmd = diffmerge --merge --result=$MERGED $LOCAL $BASE $REMOTE
  trustExitCode = false
[rebase]
  autosquash = true
[rerere]
  enabled = true
  autoupdate = true
[help]
  autocorrect = 50

```

- What is the difference between a relative and absolute path?
```
Absolute path specifies the location of a file or directory starting from the root directory. A relative path starts from the current work directory.
```

- Lets say you have the following file structure

  ```
  ~
  └── Projects
      ├── pinterest-for-dogs
      │   └── package.json
      └── linkedin-for-dancers
          ├── README.md
          └── package.json
  ```

  And you were in the `linkedin-for-dancers` folder. What command would you use to copy the `README.md` file to the `pinterest-for-dogs` folder?
  ```
  cp README.md ../pinterest-for-dogs/
  ```

- What keyboard shortcut do you use, in your editor, when you want to open a specific file?
```
command-O, then command-shift-G and enter file path
```

- What files or folders do you want all git repositories to ignore?
```
node_modules/
.env
*.log
.cache
.DS_Store
/tmp
```

- What is the main difference between `Array.map` and `Array.forEach` in JavaScript?
```
Map iterates through every item in an array, performs a function and returns a new array - forEach alters the original array.
```
