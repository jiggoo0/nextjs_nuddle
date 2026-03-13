# 📦 Project Summary: nextjs_nuddle

> Generated on: 2025-12-18 03:52:48

## 🗂 โครงสร้างโปรเจกต์

```text
.
├── Note.md
├── PROJECT_SUMMARY.md
├── README.md
├── about.html
├── assets
│   ├── css
│   │   ├── main.css
│   │   ├── responsive.css
│   │   └── theme.css
│   ├── img
│   │   ├── banner.jpg
│   │   ├── hero-bg.png
│   │   ├── logo.png
│   │   ├── menu1.jpg
│   │   ├── menu10.jpg
│   │   ├── menu12.jpg
│   │   ├── menu13.jpg
│   │   ├── menu2.jpg
│   │   ├── menu3.jpg
│   │   ├── menu4.jpg
│   │   ├── menu5.jpg
│   │   ├── menu6.jpg
│   │   ├── menu7.jpg
│   │   ├── menu8.jpg
│   │   ├── menu9.jpg
│   │   ├── team1.jpg
│   │   └── team2.jpg
│   └── js
│       ├── app.js
│       └── render.js
├── components
│   ├── footer.html
│   ├── header.html
│   ├── hero.html
│   ├── navbar.html
│   └── review.html
├── contact.html
├── data
│   ├── fammiry.json
│   ├── reviews.json
│   ├── services.json
│   └── site.json
├── index.html
├── scripts
│   └── project-summary.sh
└── services.html

8 directories, 39 files
```

## 📄 File Scan (แสดง 60 บรรทัดแรกของทุกไฟล์)

### 📄 `.git/COMMIT_EDITMSG`

```
first commit
```

### 📄 `.git/HEAD`

```
ref: refs/heads/main
```

### 📄 `.git/MERGE_RR`

_[binary file – ไม่แสดงเนื้อหา]_

### 📄 `.git/config`

```
[core]
	repositoryformatversion = 0
	filemode = true
	bare = false
	logallrefupdates = true
[remote "origin"]
	url = https://github.com/jiggoo0/nextjs_nuddle.git
	fetch = +refs/heads/*:refs/remotes/origin/*
[branch "main"]
	remote = origin
	merge = refs/heads/main
```

### 📄 `.git/description`

```
Unnamed repository; edit this file 'description' to name the repository.
```

### 📄 `.git/hooks/applypatch-msg.sample`

```
#!/data/data/com.termux/files/usr/bin/sh
#
# An example hook script to check the commit log message taken by
# applypatch from an e-mail message.
#
# The hook should exit with non-zero status after issuing an
# appropriate message if it wants to stop the commit.  The hook is
# allowed to edit the commit message file.
#
# To enable this hook, rename this file to "applypatch-msg".

. git-sh-setup
commitmsg="$(git rev-parse --git-path hooks/commit-msg)"
test -x "$commitmsg" && exec "$commitmsg" ${1+"$@"}
:
```

### 📄 `.git/hooks/commit-msg.sample`

```
#!/data/data/com.termux/files/usr/bin/sh
#
# An example hook script to check the commit log message.
# Called by "git commit" with one argument, the name of the file
# that has the commit message.  The hook should exit with non-zero
# status after issuing an appropriate message if it wants to stop the
# commit.  The hook is allowed to edit the commit message file.
#
# To enable this hook, rename this file to "commit-msg".

# Uncomment the below to add a Signed-off-by line to the message.
# Doing this in a hook is a bad idea in general, but the prepare-commit-msg
# hook is more suited to it.
#
# SOB=$(git var GIT_AUTHOR_IDENT | sed -n 's/^\(.*>\).*$/Signed-off-by: \1/p')
# grep -qs "^$SOB" "$1" || echo "$SOB" >> "$1"

# This example catches duplicate Signed-off-by lines.

test "" = "$(grep '^Signed-off-by: ' "$1" |
	 sort | uniq -c | sed -e '/^[ 	]*1[ 	]/d')" || {
	echo >&2 Duplicate Signed-off-by lines.
	exit 1
}
```

### 📄 `.git/hooks/fsmonitor-watchman.sample`

```
#!/data/data/com.termux/files/usr/bin/perl

use strict;
use warnings;
use IPC::Open2;

# An example hook script to integrate Watchman
# (https://facebook.github.io/watchman/) with git to speed up detecting
# new and modified files.
#
# The hook is passed a version (currently 2) and last update token
# formatted as a string and outputs to stdout a new update token and
# all files that have been modified since the update token. Paths must
# be relative to the root of the working tree and separated by a single NUL.
#
# To enable this hook, rename this file to "query-watchman" and set
# 'git config core.fsmonitor .git/hooks/query-watchman'
#
my ($version, $last_update_token) = @ARGV;

# Uncomment for debugging
# print STDERR "$0 $version $last_update_token\n";

# Check the hook interface version
if ($version ne 2) {
	die "Unsupported query-fsmonitor hook version '$version'.\n" .
	    "Falling back to scanning...\n";
}

my $git_work_tree = get_working_dir();

my $retry = 1;

my $json_pkg;
eval {
	require JSON::XS;
	$json_pkg = "JSON::XS";
	1;
} or do {
	require JSON::PP;
	$json_pkg = "JSON::PP";
};

launch_watchman();

sub launch_watchman {
	my $o = watchman_query();
	if (is_work_tree_watched($o)) {
		output_result($o->{clock}, @{$o->{files}});
	}
}

sub output_result {
	my ($clockid, @files) = @_;

	# Uncomment for debugging watchman output
	# open (my $fh, ">", ".git/watchman-output.out");
	# binmode $fh, ":utf8";
	# print $fh "$clockid\n@files\n";
	# close $fh;
```

### 📄 `.git/hooks/post-update.sample`

```
#!/data/data/com.termux/files/usr/bin/sh
#
# An example hook script to prepare a packed repository for use over
# dumb transports.
#
# To enable this hook, rename this file to "post-update".

exec git update-server-info
```

### 📄 `.git/hooks/pre-applypatch.sample`

```
#!/data/data/com.termux/files/usr/bin/sh
#
# An example hook script to verify what is about to be committed
# by applypatch from an e-mail message.
#
# The hook should exit with non-zero status after issuing an
# appropriate message if it wants to stop the commit.
#
# To enable this hook, rename this file to "pre-applypatch".

. git-sh-setup
precommit="$(git rev-parse --git-path hooks/pre-commit)"
test -x "$precommit" && exec "$precommit" ${1+"$@"}
:
```

### 📄 `.git/hooks/pre-commit.sample`

```
#!/data/data/com.termux/files/usr/bin/sh
#
# An example hook script to verify what is about to be committed.
# Called by "git commit" with no arguments.  The hook should
# exit with non-zero status after issuing an appropriate message if
# it wants to stop the commit.
#
# To enable this hook, rename this file to "pre-commit".

if git rev-parse --verify HEAD >/dev/null 2>&1
then
	against=HEAD
else
	# Initial commit: diff against an empty tree object
	against=$(git hash-object -t tree /dev/null)
fi

# If you want to allow non-ASCII filenames set this variable to true.
allownonascii=$(git config --type=bool hooks.allownonascii)

# Redirect output to stderr.
exec 1>&2

# Cross platform projects tend to avoid non-ASCII filenames; prevent
# them from being added to the repository. We exploit the fact that the
# printable range starts at the space character and ends with tilde.
if [ "$allownonascii" != "true" ] &&
	# Note that the use of brackets around a tr range is ok here, (it's
	# even required, for portability to Solaris 10's /usr/bin/tr), since
	# the square bracket bytes happen to fall in the designated range.
	test $(git diff-index --cached --name-only --diff-filter=A -z $against |
	  LC_ALL=C tr -d '[ -~]\0' | wc -c) != 0
then
	cat <<\EOF
Error: Attempt to add a non-ASCII file name.

This can cause problems if you want to work with people on other platforms.

To be portable it is advisable to rename the file.

If you know what you are doing you can disable this check using:

  git config hooks.allownonascii true
EOF
	exit 1
fi

# If there are whitespace errors, print the offending file names and fail.
exec git diff-index --check --cached $against --
```

### 📄 `.git/hooks/pre-merge-commit.sample`

```
#!/data/data/com.termux/files/usr/bin/sh
#
# An example hook script to verify what is about to be committed.
# Called by "git merge" with no arguments.  The hook should
# exit with non-zero status after issuing an appropriate message to
# stderr if it wants to stop the merge commit.
#
# To enable this hook, rename this file to "pre-merge-commit".

. git-sh-setup
test -x "$GIT_DIR/hooks/pre-commit" &&
        exec "$GIT_DIR/hooks/pre-commit"
:
```

### 📄 `.git/hooks/pre-push.sample`

```
#!/data/data/com.termux/files/usr/bin/sh

# An example hook script to verify what is about to be pushed.  Called by "git
# push" after it has checked the remote status, but before anything has been
# pushed.  If this script exits with a non-zero status nothing will be pushed.
#
# This hook is called with the following parameters:
#
# $1 -- Name of the remote to which the push is being done
# $2 -- URL to which the push is being done
#
# If pushing without using a named remote those arguments will be equal.
#
# Information about the commits which are being pushed is supplied as lines to
# the standard input in the form:
#
#   <local ref> <local oid> <remote ref> <remote oid>
#
# This sample shows how to prevent push of commits where the log message starts
# with "WIP" (work in progress).

remote="$1"
url="$2"

zero=$(git hash-object --stdin </dev/null | tr '[0-9a-f]' '0')

while read local_ref local_oid remote_ref remote_oid
do
	if test "$local_oid" = "$zero"
	then
		# Handle delete
		:
	else
		if test "$remote_oid" = "$zero"
		then
			# New branch, examine all commits
			range="$local_oid"
		else
			# Update to existing branch, examine new commits
			range="$remote_oid..$local_oid"
		fi

		# Check for WIP commit
		commit=$(git rev-list -n 1 --grep '^WIP' "$range")
		if test -n "$commit"
		then
			echo >&2 "Found WIP commit in $local_ref, not pushing"
			exit 1
		fi
	fi
done

exit 0
```

### 📄 `.git/hooks/pre-rebase.sample`

```
#!/data/data/com.termux/files/usr/bin/sh
#
# Copyright (c) 2006, 2008 Junio C Hamano
#
# The "pre-rebase" hook is run just before "git rebase" starts doing
# its job, and can prevent the command from running by exiting with
# non-zero status.
#
# The hook is called with the following parameters:
#
# $1 -- the upstream the series was forked from.
# $2 -- the branch being rebased (or empty when rebasing the current branch).
#
# This sample shows how to prevent topic branches that are already
# merged to 'next' branch from getting rebased, because allowing it
# would result in rebasing already published history.

publish=next
basebranch="$1"
if test "$#" = 2
then
	topic="refs/heads/$2"
else
	topic=`git symbolic-ref HEAD` ||
	exit 0 ;# we do not interrupt rebasing detached HEAD
fi

case "$topic" in
refs/heads/??/*)
	;;
*)
	exit 0 ;# we do not interrupt others.
	;;
esac

# Now we are dealing with a topic branch being rebased
# on top of master.  Is it OK to rebase it?

# Does the topic really exist?
git show-ref -q "$topic" || {
	echo >&2 "No such branch $topic"
	exit 1
}

# Is topic fully merged to master?
not_in_master=`git rev-list --pretty=oneline ^master "$topic"`
if test -z "$not_in_master"
then
	echo >&2 "$topic is fully merged to master; better remove it."
	exit 1 ;# we could allow it, but there is no point.
fi

# Is topic ever merged to next?  If so you should not be rebasing it.
only_next_1=`git rev-list ^master "^$topic" ${publish} | sort`
only_next_2=`git rev-list ^master           ${publish} | sort`
if test "$only_next_1" = "$only_next_2"
then
	not_in_topic=`git rev-list "^$topic" master`
	if test -z "$not_in_topic"
	then
```

### 📄 `.git/hooks/pre-receive.sample`

```
#!/data/data/com.termux/files/usr/bin/sh
#
# An example hook script to make use of push options.
# The example simply echoes all push options that start with 'echoback='
# and rejects all pushes when the "reject" push option is used.
#
# To enable this hook, rename this file to "pre-receive".

if test -n "$GIT_PUSH_OPTION_COUNT"
then
	i=0
	while test "$i" -lt "$GIT_PUSH_OPTION_COUNT"
	do
		eval "value=\$GIT_PUSH_OPTION_$i"
		case "$value" in
		echoback=*)
			echo "echo from the pre-receive-hook: ${value#*=}" >&2
			;;
		reject)
			exit 1
		esac
		i=$((i + 1))
	done
fi
```

### 📄 `.git/hooks/prepare-commit-msg.sample`

```
#!/data/data/com.termux/files/usr/bin/sh
#
# An example hook script to prepare the commit log message.
# Called by "git commit" with the name of the file that has the
# commit message, followed by the description of the commit
# message's source.  The hook's purpose is to edit the commit
# message file.  If the hook fails with a non-zero status,
# the commit is aborted.
#
# To enable this hook, rename this file to "prepare-commit-msg".

# This hook includes three examples. The first one removes the
# "# Please enter the commit message..." help message.
#
# The second includes the output of "git diff --name-status -r"
# into the message, just before the "git status" output.  It is
# commented because it doesn't cope with --amend or with squashed
# commits.
#
# The third example adds a Signed-off-by line to the message, that can
# still be edited.  This is rarely a good idea.

COMMIT_MSG_FILE=$1
COMMIT_SOURCE=$2
SHA1=$3

/data/data/com.termux/files/usr/bin/perl -i.bak -ne 'print unless(m/^. Please enter the commit message/..m/^#$/)' "$COMMIT_MSG_FILE"

# case "$COMMIT_SOURCE,$SHA1" in
#  ,|template,)
#    /data/data/com.termux/files/usr/bin/perl -i.bak -pe '
#       print "\n" . `git diff --cached --name-status -r`
# 	 if /^#/ && $first++ == 0' "$COMMIT_MSG_FILE" ;;
#  *) ;;
# esac

# SOB=$(git var GIT_COMMITTER_IDENT | sed -n 's/^\(.*>\).*$/Signed-off-by: \1/p')
# git interpret-trailers --in-place --trailer "$SOB" "$COMMIT_MSG_FILE"
# if test -z "$COMMIT_SOURCE"
# then
#   /data/data/com.termux/files/usr/bin/perl -i.bak -pe 'print "\n" if !$first_line++' "$COMMIT_MSG_FILE"
# fi
```

### 📄 `.git/hooks/push-to-checkout.sample`

```
#!/data/data/com.termux/files/usr/bin/sh

# An example hook script to update a checked-out tree on a git push.
#
# This hook is invoked by git-receive-pack(1) when it reacts to git
# push and updates reference(s) in its repository, and when the push
# tries to update the branch that is currently checked out and the
# receive.denyCurrentBranch configuration variable is set to
# updateInstead.
#
# By default, such a push is refused if the working tree and the index
# of the remote repository has any difference from the currently
# checked out commit; when both the working tree and the index match
# the current commit, they are updated to match the newly pushed tip
# of the branch. This hook is to be used to override the default
# behaviour; however the code below reimplements the default behaviour
# as a starting point for convenient modification.
#
# The hook receives the commit with which the tip of the current
# branch is going to be updated:
commit=$1

# It can exit with a non-zero status to refuse the push (when it does
# so, it must not modify the index or the working tree).
die () {
	echo >&2 "$*"
	exit 1
}

# Or it can make any necessary changes to the working tree and to the
# index to bring them to the desired state when the tip of the current
# branch is updated to the new commit, and exit with a zero status.
#
# For example, the hook can simply run git read-tree -u -m HEAD "$1"
# in order to emulate git fetch that is run in the reverse direction
# with git push, as the two-tree form of git read-tree -u -m is
# essentially the same as git switch or git checkout that switches
# branches while keeping the local changes in the working tree that do
# not interfere with the difference between the branches.

# The below is a more-or-less exact translation to shell of the C code
# for the default behaviour for git's push-to-checkout hook defined in
# the push_to_deploy() function in builtin/receive-pack.c.
#
# Note that the hook will be executed from the repository directory,
# not from the working tree, so if you want to perform operations on
# the working tree, you will have to adapt your code accordingly, e.g.
# by adding "cd .." or using relative paths.

if ! git update-index -q --ignore-submodules --refresh
then
	die "Up-to-date check failed"
fi

if ! git diff-files --quiet --ignore-submodules --
then
	die "Working directory has unstaged changes"
fi

# This is a rough translation of:
```

### 📄 `.git/hooks/sendemail-validate.sample`

```
#!/data/data/com.termux/files/usr/bin/sh

# An example hook script to validate a patch (and/or patch series) before
# sending it via email.
#
# The hook should exit with non-zero status after issuing an appropriate
# message if it wants to prevent the email(s) from being sent.
#
# To enable this hook, rename this file to "sendemail-validate".
#
# By default, it will only check that the patch(es) can be applied on top of
# the default upstream branch without conflicts in a secondary worktree. After
# validation (successful or not) of the last patch of a series, the worktree
# will be deleted.
#
# The following config variables can be set to change the default remote and
# remote ref that are used to apply the patches against:
#
#   sendemail.validateRemote (default: origin)
#   sendemail.validateRemoteRef (default: HEAD)
#
# Replace the TODO placeholders with appropriate checks according to your
# needs.

validate_cover_letter () {
	file="$1"
	# TODO: Replace with appropriate checks (e.g. spell checking).
	true
}

validate_patch () {
	file="$1"
	# Ensure that the patch applies without conflicts.
	git am -3 "$file" || return
	# TODO: Replace with appropriate checks for this patch
	# (e.g. checkpatch.pl).
	true
}

validate_series () {
	# TODO: Replace with appropriate checks for the whole series
	# (e.g. quick build, coding style checks, etc.).
	true
}

# main -------------------------------------------------------------------------

if test "$GIT_SENDEMAIL_FILE_COUNTER" = 1
then
	remote=$(git config --default origin --get sendemail.validateRemote) &&
	ref=$(git config --default HEAD --get sendemail.validateRemoteRef) &&
	worktree=$(mktemp --tmpdir -d sendemail-validate.XXXXXXX) &&
	git worktree add -fd --checkout "$worktree" "refs/remotes/$remote/$ref" &&
	git config --replace-all sendemail.validateWorktree "$worktree"
else
	worktree=$(git config --get sendemail.validateWorktree)
fi || {
	echo "sendemail-validate: error: failed to prepare worktree" >&2
	exit 1
}
```

### 📄 `.git/hooks/update.sample`

```
#!/data/data/com.termux/files/usr/bin/sh
#
# An example hook script to block unannotated tags from entering.
# Called by "git receive-pack" with arguments: refname sha1-old sha1-new
#
# To enable this hook, rename this file to "update".
#
# Config
# ------
# hooks.allowunannotated
#   This boolean sets whether unannotated tags will be allowed into the
#   repository.  By default they won't be.
# hooks.allowdeletetag
#   This boolean sets whether deleting tags will be allowed in the
#   repository.  By default they won't be.
# hooks.allowmodifytag
#   This boolean sets whether a tag may be modified after creation. By default
#   it won't be.
# hooks.allowdeletebranch
#   This boolean sets whether deleting branches will be allowed in the
#   repository.  By default they won't be.
# hooks.denycreatebranch
#   This boolean sets whether remotely creating branches will be denied
#   in the repository.  By default this is allowed.
#

# --- Command line
refname="$1"
oldrev="$2"
newrev="$3"

# --- Safety check
if [ -z "$GIT_DIR" ]; then
	echo "Don't run this script from the command line." >&2
	echo " (if you want, you could supply GIT_DIR then run" >&2
	echo "  $0 <ref> <oldrev> <newrev>)" >&2
	exit 1
fi

if [ -z "$refname" -o -z "$oldrev" -o -z "$newrev" ]; then
	echo "usage: $0 <ref> <oldrev> <newrev>" >&2
	exit 1
fi

# --- Config
allowunannotated=$(git config --type=bool hooks.allowunannotated)
allowdeletebranch=$(git config --type=bool hooks.allowdeletebranch)
denycreatebranch=$(git config --type=bool hooks.denycreatebranch)
allowdeletetag=$(git config --type=bool hooks.allowdeletetag)
allowmodifytag=$(git config --type=bool hooks.allowmodifytag)

# check for no description
projectdesc=$(sed -e '1q' "$GIT_DIR/description")
case "$projectdesc" in
"Unnamed repository"* | "")
	echo "*** Project description file hasn't been set" >&2
	exit 1
	;;
esac

```

### 📄 `.git/index`

_[binary file – ไม่แสดงเนื้อหา]_

### 📄 `.git/info/exclude`

```
# git ls-files --others --exclude-from=.git/info/exclude
# Lines that start with '#' are comments.
# For a project mostly in C, the following would be a good set of
# exclude patterns (uncomment them if you want to use them):
# *.[oa]
# *~
```

### 📄 `.git/logs/HEAD`

```
0000000000000000000000000000000000000000 2ab9b311b01f22a70e40a683450a178a1e371a33 jiggoo0 <jiggo0@outlook.co.th> 1766003067 +0700	commit (initial): first commit
2ab9b311b01f22a70e40a683450a178a1e371a33 0000000000000000000000000000000000000000 jiggoo0 <jiggo0@outlook.co.th> 1766003068 +0700	Branch: renamed refs/heads/main to refs/heads/main
2ab9b311b01f22a70e40a683450a178a1e371a33 2ab9b311b01f22a70e40a683450a178a1e371a33 jiggoo0 <jiggo0@outlook.co.th> 1766003068 +0700	Branch: renamed refs/heads/main to refs/heads/main
2ab9b311b01f22a70e40a683450a178a1e371a33 98512a5d1a548b8616f1e4c455a6d4f48e506c57 jiggoo0 <jiggo0@outlook.co.th> 1766003190 +0700	commit: first commit
98512a5d1a548b8616f1e4c455a6d4f48e506c57 c50cd14d42e039779e6c34f0ce9f97df0acd8a19 jiggoo0 <jiggo0@outlook.co.th> 1766004436 +0700	commit: first commit
```

### 📄 `.git/logs/refs/heads/main`

```
0000000000000000000000000000000000000000 2ab9b311b01f22a70e40a683450a178a1e371a33 jiggoo0 <jiggo0@outlook.co.th> 1766003067 +0700	commit (initial): first commit
2ab9b311b01f22a70e40a683450a178a1e371a33 2ab9b311b01f22a70e40a683450a178a1e371a33 jiggoo0 <jiggo0@outlook.co.th> 1766003068 +0700	Branch: renamed refs/heads/main to refs/heads/main
2ab9b311b01f22a70e40a683450a178a1e371a33 98512a5d1a548b8616f1e4c455a6d4f48e506c57 jiggoo0 <jiggo0@outlook.co.th> 1766003190 +0700	commit: first commit
98512a5d1a548b8616f1e4c455a6d4f48e506c57 c50cd14d42e039779e6c34f0ce9f97df0acd8a19 jiggoo0 <jiggo0@outlook.co.th> 1766004436 +0700	commit: first commit
```

### 📄 `.git/logs/refs/remotes/origin/main`

```
0000000000000000000000000000000000000000 2ab9b311b01f22a70e40a683450a178a1e371a33 jiggoo0 <jiggo0@outlook.co.th> 1766003074 +0700	update by push
2ab9b311b01f22a70e40a683450a178a1e371a33 98512a5d1a548b8616f1e4c455a6d4f48e506c57 jiggoo0 <jiggo0@outlook.co.th> 1766003199 +0700	update by push
98512a5d1a548b8616f1e4c455a6d4f48e506c57 c50cd14d42e039779e6c34f0ce9f97df0acd8a19 jiggoo0 <jiggo0@outlook.co.th> 1766004446 +0700	update by push
```

### 📄 `.git/objects/0a/e88d07b9e70831dfa632f563b96b78a8653f07`

_[binary file – ไม่แสดงเนื้อหา]_

### 📄 `.git/objects/17/9394ce9fca164ee725091fb7fd8b63a9d6cb65`

_[binary file – ไม่แสดงเนื้อหา]_

### 📄 `.git/objects/18/a0caaa149045fc90654cbeea9e4d2ff4a8953c`

_[binary file – ไม่แสดงเนื้อหา]_

### 📄 `.git/objects/19/ae307ecffdf01a501c9483502ce057662698e7`

_[binary file – ไม่แสดงเนื้อหา]_

### 📄 `.git/objects/2a/b9b311b01f22a70e40a683450a178a1e371a33`

_[binary file – ไม่แสดงเนื้อหา]_

### 📄 `.git/objects/2d/88b177e8e915668730dd3460ed9a2032515c1b`

_[binary file – ไม่แสดงเนื้อหา]_

### 📄 `.git/objects/2f/a9a4b307777c32bec0e72f7a5c2c5055050e66`

_[binary file – ไม่แสดงเนื้อหา]_

### 📄 `.git/objects/31/78f0cfe833218c5ce98a99b9981eb97244594b`

_[binary file – ไม่แสดงเนื้อหา]_

### 📄 `.git/objects/38/a1eb32909f96e43f414362d7f2e2df6659b7ba`

_[binary file – ไม่แสดงเนื้อหา]_

### 📄 `.git/objects/3d/32c5f707fbd9de6601beb419fde6ac27112e60`

_[binary file – ไม่แสดงเนื้อหา]_

### 📄 `.git/objects/3f/ccd001326903b8ac461dec45e2b339c1af1c28`

_[binary file – ไม่แสดงเนื้อหา]_

### 📄 `.git/objects/4a/e8b2ecf969e7b0c5a899de7545c22744496dfc`

_[binary file – ไม่แสดงเนื้อหา]_

### 📄 `.git/objects/4b/26ccf95935b4b8da7a073768b1496f70e1a003`

_[binary file – ไม่แสดงเนื้อหา]_

### 📄 `.git/objects/4b/920efe8d7dc3ddecbdf95d7ff8083bd6fad10e`

_[binary file – ไม่แสดงเนื้อหา]_

### 📄 `.git/objects/57/0c4bd0ae64661b8d5f6720386bedaf5101ee86`

_[binary file – ไม่แสดงเนื้อหา]_

### 📄 `.git/objects/5a/49b91bb3819938638087ef17976c113efe4adc`

_[binary file – ไม่แสดงเนื้อหา]_

### 📄 `.git/objects/5a/57927241ccfe5b9fbfe3d115da19ac590f2f33`

_[binary file – ไม่แสดงเนื้อหา]_

### 📄 `.git/objects/5c/b82eb4a266e4e58db5682a8aadf8aac15866f0`

_[binary file – ไม่แสดงเนื้อหา]_

### 📄 `.git/objects/65/23d394976907513770528afda842a274f749e1`

_[binary file – ไม่แสดงเนื้อหา]_

### 📄 `.git/objects/6b/cfcbc8df16874135c22c989ac9480b4fc3572f`

_[binary file – ไม่แสดงเนื้อหา]_

### 📄 `.git/objects/6c/a1c2b1a70a6cd3db7f5e9f2c02639a74bf3e08`

_[binary file – ไม่แสดงเนื้อหา]_

### 📄 `.git/objects/71/44693c8da8aef24e3349a4ec862567b7c98a29`

_[binary file – ไม่แสดงเนื้อหา]_

### 📄 `.git/objects/73/6c043b584a5df493fe7cadf2232869375fd937`

_[binary file – ไม่แสดงเนื้อหา]_

### 📄 `.git/objects/85/7dedadfcaf98a76ecdc85df26c1c6b26e2c649`

_[binary file – ไม่แสดงเนื้อหา]_

### 📄 `.git/objects/88/09ef932c1b090cb2a1eedda047e1f093bff846`

_[binary file – ไม่แสดงเนื้อหา]_

### 📄 `.git/objects/8b/6e0a3619a36a343ca199dccb8866d99063223c`

_[binary file – ไม่แสดงเนื้อหา]_

### 📄 `.git/objects/8b/723e29e88bde5b35ff6bc3ede49702798e24fd`

```
x}��n�@�Y�)f	��fA�H�d���I3U�l`הJ	�;��]*	Ԫ-T\o�$W}�L<���XQ��=���I84���>��{���gA���ξ����24/�`P���a��"�����͉��Q�<mWc��`�$Syj�\����**nk<s�$+�t��`nӅ2IT쥛DC�k�4�$)�������C�����^��S�+�4X*��L%=Ko�}���ZFߘ
�Ͷ�(i��V3����Q(�:k̑V/}o
�2Z���d!�ՙ�9v5Ɋr�������.T��㉾�c���u?R#�W�ڋ���:;��3&�*(�����*��a:`:���}�3͘��~0�b:��-�ӄK��\N��:�;�C.��'&�R�`3�e�6:?3}q��L߭u9E�Q��qv�t�q�
@;8����D%Ӣ��U�M�>E�6F#�9,@dQ�;WP�e�l�������jc�"p���Y?ve	s�@
8tcI����<�l��X�����K@
@����@�qUͱ!��f@|��¥o;��z��C��g2|�76"k��%,�oB���qg�9 c�-4�w�4�6�$
```

### 📄 `.git/objects/8f/fdd7baf5961906db74ca2b52117a3473dba520`

_[binary file – ไม่แสดงเนื้อหา]_

### 📄 `.git/objects/98/512a5d1a548b8616f1e4c455a6d4f48e506c57`

_[binary file – ไม่แสดงเนื้อหา]_

### 📄 `.git/objects/99/8b42ae736b6adecc7f74a962432574d3200fb6`

_[binary file – ไม่แสดงเนื้อหา]_

### 📄 `.git/objects/a5/5f37796f21e4b5609c2ba6625c14326542dcb6`

_[binary file – ไม่แสดงเนื้อหา]_

### 📄 `.git/objects/a8/a647ba55e5028c7c5e34569b44d377ac9f4146`

_[binary file – ไม่แสดงเนื้อหา]_

### 📄 `.git/objects/ad/a081a41f090a98b728de4b74cfdf2df78dcd4a`

_[binary file – ไม่แสดงเนื้อหา]_

### 📄 `.git/objects/b1/087c95127e5130a84aa4a254be6dd59bbb8678`

_[binary file – ไม่แสดงเนื้อหา]_

### 📄 `.git/objects/c2/2668aee3b4173fb8fe69d9579e680e80896f97`

_[binary file – ไม่แสดงเนื้อหา]_

### 📄 `.git/objects/c5/0cd14d42e039779e6c34f0ce9f97df0acd8a19`

_[binary file – ไม่แสดงเนื้อหา]_

### 📄 `.git/objects/c7/17731a84903724b9c5165714c78327cc5377b3`

_[binary file – ไม่แสดงเนื้อหา]_

### 📄 `.git/objects/c7/6143a20fb52af0417c4938d082b3d4d3c97aba`

_[binary file – ไม่แสดงเนื้อหา]_

### 📄 `.git/objects/d1/ba600dfaa932bd353d2197b988048d5dd57a8f`

_[binary file – ไม่แสดงเนื้อหา]_

### 📄 `.git/objects/d6/c8758264390f2607235366d366538ace52574c`

_[binary file – ไม่แสดงเนื้อหา]_

### 📄 `.git/objects/db/465ae8f8a24b469fe6213f8c8ef6c6c8cfb902`

_[binary file – ไม่แสดงเนื้อหา]_

### 📄 `.git/objects/df/a0a94b897ca70cace31019ee7dc9d40210f97d`

_[binary file – ไม่แสดงเนื้อหา]_

### 📄 `.git/objects/e2/9b3a4fcec4b59684438809bf3031902a3ffd7b`

_[binary file – ไม่แสดงเนื้อหา]_

### 📄 `.git/objects/ea/a2d1abc8a044cd4ff7c3111ad056a9ff6e39cf`

_[binary file – ไม่แสดงเนื้อหา]_

### 📄 `.git/objects/ec/b8a56e3aab3f8351f3d62c5aee53bb4a67395c`

_[binary file – ไม่แสดงเนื้อหา]_

### 📄 `.git/objects/f4/bb2f78f75a1b8f2893b6d69f6d5ec860def69e`

_[binary file – ไม่แสดงเนื้อหา]_

### 📄 `.git/objects/f4/c1619297cca343f7c06bef4bdb48b8c7f4985a`

_[binary file – ไม่แสดงเนื้อหา]_

### 📄 `.git/objects/fe/2260b682213255a7717f6fcffa69d4a2c2534d`

_[binary file – ไม่แสดงเนื้อหา]_

### 📄 `.git/refs/heads/main`

```
c50cd14d42e039779e6c34f0ce9f97df0acd8a19
```

### 📄 `.git/refs/remotes/origin/main`

```
c50cd14d42e039779e6c34f0ce9f97df0acd8a19
```

### 📄 `Note.md`

````markdown
READM.md
├── about.html
├── assets
│   ├── css
│   │   ├── main.css
│   │   ├── responsive.css
│   │   └── theme.css
│   ├── fonts
│   ├── img
│   │   ├── banner.jpg
│   │   ├── logo.png
│   │   ├── team1.jpg
│   │   └── team2.jpg
│   └── js
│   ├── app.js
│   └── render.js
├── components
│   ├── footer.html
│   ├── header.html
│   ├── hero.html
│   ├── navbar.html
│   └── review.html
├── contact.html
├── data
│   ├── reviews.json
│   ├── services.json
│   ├── site.json
│   └── fammiry.json
├── index.html
└── services.html

8 directories, 23 files

ขอไอเดียสร้างเว็ปไซค์ ธุระกิจร้านบะหมี่ ช.สหชัย เกี๊ยวปูหมูแดง จ.ตาก โดย คุณชายบะหมี่ หรือ (เฮียเนก) และคุณ นัชรินทร์ (เจ๊ตั๊ก) เปิดทำการมาแล้ว 8 ปี เสริมรายละเอียดให้ดูอบอุ่นเป็นครอบครัว```

### 📄 `README.md`

```markdown
# nextjs_nuddle
```
````

### 📄 `about.html`

```html
<!DOCTYPE html>
<html lang="th">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta name="description" content="รู้จัก ช.สหชัย เกี๊ยวปูหมูแดง จ.ตาก เรื่องราวความตั้งใจของเฮียเนกและเจ๊ตั๊ก กับสูตรบะหมี่ที่ส่งต่อความสุขมากว่า 8 ปี">
    <title>รู้จักเฮียเนก-เจ๊ตั๊ก | ช.สหชัย เกี๊ยวปูหมูแดง จ.ตาก</title>

    <link rel="stylesheet" href="assets/css/main.css">
    <link rel="stylesheet" href="assets/css/theme.css">
    <link rel="stylesheet" href="assets/css/responsive.css">

    <link href="https://fonts.googleapis.com/css2?family=Sarabun:wght@300;400;700&display=swap" rel="stylesheet">
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0/dist/css/all.min.css">

    <style>
        /* About Hero Section */
        .about-hero {
            background: linear-gradient(rgba(178, 34, 34, 0.9), rgba(139, 0, 0, 0.9)), url('assets/img/hero-bg.png');
            background-size: cover;
            background-position: center;
            background-attachment: fixed; /* ล็อกพื้นหลังให้นิ่งแบบ Parallax */
            padding: 100px 0 160px;
            text-align: center;
            color: white;
            border-bottom: 8px solid var(--noodle-gold);
        }

        /* Story Content Area */
        .story-container {
            background: white;
            border-radius: 40px;
            margin-top: -100px; /* เกยขึ้นไปบน Hero */
            padding: 80px 50px;
            box-shadow: var(--shadow-md);
            position: relative;
            z-index: 5;
        }

        .story-header {
            text-align: center;
            margin-bottom: 50px;
        }

        .story-header h2 {
            font-size: clamp(2rem, 5vw, 2.8rem);
            color: var(--primary-red);
            margin-bottom: 20px;
            font-weight: 700;
        }

        .story-text {
            font-size: 1.2rem;
            line-height: 2.1;
            color: #444;
            max-width: 950px;
            margin: 0 auto 60px;
            text-indent: 2.5em; /* ย่อหน้าสวยๆ แบบไทย */
        }

```

### 📄 `assets/css/main.css`

```css
/**
 * assets/css/main.css
 * โครงสร้างหลัก (Core Layout) ของเว็บไซต์ ช.สหชัย เกี๊ยวปูหมูแดง
 * ปรับปรุง: ระบบล็อกความกว้าง Container และป้องกันหน้าเว็บขยับ (Stable Version)
 */

/* --- 1. Root Setup & Resets --- */
:root {
    --primary-red: #b22222;
    --primary-dark: #8b0000;
    --noodle-gold: #f1c40f;
    --dark-text: #333;
    --light-text: #666;
    --warm-cream: #fffdf5;
    --shadow-sm: 0 2px 8px rgba(0,0,0,0.06);
    --shadow-md: 0 4px 15px rgba(0,0,0,0.1);
    --transition: 0.3s cubic-bezier(0.4, 0, 0.2, 1);
}

* {
    margin: 0;
    padding: 0;
    box-sizing: border-box; /* สำคัญ: ป้องกันการเพิ่มขนาดจาก Padding/Border */
}

html {
    /* บังคับจองพื้นที่ Scrollbar เพื่อไม่ให้หน้าเว็บ "เขยิบ" เวลาเปลี่ยนหน้า */
    overflow-y: scroll;
    scroll-behavior: smooth;
    width: 100%;
}

body {
    font-family: 'Sarabun', sans-serif;
    line-height: 1.6;
    font-size: 16px;
    overflow-x: hidden;
    color: var(--dark-text);
    background-color: #ffffff;
    width: 100%;
    -webkit-font-smoothing: antialiased;
}

/* --- 2. Layout Container (The Master Control) --- */
/* ล็อกความกว้างให้เท่ากันทุกหน้า */
.container {
    width: 100%;
    max-width: 1200px;
    margin: 0 auto;    /* จัดกึ่งกลางเป๊ะ */
    padding: 0 20px;   /* ระยะกันชนขอบจอ */
}

/* --- 3. Navigation Bar (Stable & Fixed) --- */
.navbar {
    height: 85px; /* ล็อกความสูงคงที่ทุกหน้า */
    background-color: #ffffff;
    display: flex;
    align-items: center;
    width: 100%;
    position: sticky;
```

### 📄 `assets/css/responsive.css`

```css
/**
 * assets/css/responsive.css
 * จัดการการแสดงผลบนอุปกรณ์ต่างๆ (Mobile, Tablet, Desktop)
 * สำหรับเว็บไซต์ ช.สหชัย เกี๊ยวปูหมูแดง
 */

/* --- 1. Tablet & Small Desktop (ต่ำกว่า 1024px) --- */
@media (max-width: 1024px) {
    .container {
        width: 100%; /* ใช้ความกว้างเต็มแต่มี Padding จาก main.css คุมไว้ */
        padding: 0 30px;
    }

    .grid-3 {
        grid-template-columns: repeat(2, 1fr); /* 2 คอลัมน์สำหรับ Tablet */
        gap: 25px;
    }

    .story-container {
        padding: 50px 30px;
        margin-top: -80px;
    }

    .member-profile img {
        max-width: 280px;
    }
}

/* --- 2. Mobile Landscape & Large Phone (ต่ำกว่า 768px) --- */
@media (max-width: 768px) {
    /* Layout Reset */
    section {
        padding: 60px 0;
    }

    /* Navbar: ปรับให้นิ่งสนิทและจัดวางกึ่งกลาง */
    .navbar {
        height: auto;
        min-height: 80px;
        flex-direction: column;
        padding: 15px 0;
    }

    .navbar-inner {
        flex-direction: column;
        gap: 15px;
    }

    .navbar ul {
        display: flex; /* แสดงเมนูแบบเรียงแถวในมือถือ (กรณีไม่มี Hamburger Menu) */
        margin: 10px 0;
        gap: 12px;
        flex-wrap: wrap;
        justify-content: center;
    }

    .navbar ul li a {
        font-size: 0.9rem;
        padding: 5px 0;
    }
```

### 📄 `assets/css/theme.css`

```css
/**
 * assets/css/theme.css
 * กำหนดอัตลักษณ์ (Identity) สีสัน และอารมณ์ของเว็บไซต์
 * ธีม: ความอบอุ่น ความใส่ใจ และตำนานความอร่อย 8 ปี
 */

:root {
  /* ชุดสีหลัก: แดงหมูแดงและเหลืองบะหมี่ทอง */
  --primary-red: #b22222;
  --primary-dark: #8b0000;
  --noodle-gold: #ffcc00;
  --gold-light: #ffdb4d;
  --warm-cream: #fff5e6;
  --dark-text: #332211;
  --light-text: #665544;
  --white: #ffffff;

  /* การตั้งค่าเงาและขอบ */
  --shadow-sm: 0 2px 8px rgba(0, 0, 0, 0.05);
  --shadow-md: 0 10px 25px rgba(0, 0, 0, 0.08);
  --transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  --radius-lg: 30px;
  --radius-md: 15px;
}

/* --- 1. พื้นฐานการจัดรูปแบบ --- */
body {
  background-color: var(--warm-cream); /* พื้นหลังสีครีมอุ่น ช่วยให้อาหารดูน่าทาน */
  color: var(--dark-text);
  font-family: "Sarabun", sans-serif;
  -webkit-font-smoothing: antialiased;
}

/* --- 2. Section: Story & Family (ส่วนเนื้อหาที่เน้นความอบอุ่น) --- */
.family-warmth-section {
  text-align: center;
  padding: 80px 40px;
  background: var(--white);
  border-radius: var(--radius-lg);
  margin: 40px auto;
  max-width: 1100px;
  box-shadow: var(--shadow-md);
  border-bottom: 6px solid var(--noodle-gold);
  transition: var(--transition);
  position: relative;
  overflow: hidden;
}

/* เพิ่มลวดลายเบาๆ ที่พื้นหลัง section */
.family-warmth-section::before {
  content: "ช.สหชัย";
  position: absolute;
  top: -20px;
  right: -20px;
  font-size: 8rem;
  color: rgba(178, 34, 34, 0.03);
  font-weight: 800;
  pointer-events: none;
}
```

### 📄 `assets/img/banner.jpg`

_[binary file – ไม่แสดงเนื้อหา]_

### 📄 `assets/img/hero-bg.png`

_[binary file – ไม่แสดงเนื้อหา]_

### 📄 `assets/img/logo.png`

_[binary file – ไม่แสดงเนื้อหา]_

### 📄 `assets/img/menu1.jpg`

_[binary file – ไม่แสดงเนื้อหา]_

### 📄 `assets/img/menu10.jpg`

_[binary file – ไม่แสดงเนื้อหา]_

### 📄 `assets/img/menu12.jpg`

_[binary file – ไม่แสดงเนื้อหา]_

### 📄 `assets/img/menu13.jpg`

_[binary file – ไม่แสดงเนื้อหา]_

### 📄 `assets/img/menu2.jpg`

_[binary file – ไม่แสดงเนื้อหา]_

### 📄 `assets/img/menu3.jpg`

_[binary file – ไม่แสดงเนื้อหา]_

### 📄 `assets/img/menu4.jpg`

_[binary file – ไม่แสดงเนื้อหา]_

### 📄 `assets/img/menu5.jpg`

_[binary file – ไม่แสดงเนื้อหา]_

### 📄 `assets/img/menu6.jpg`

_[binary file – ไม่แสดงเนื้อหา]_

### 📄 `assets/img/menu7.jpg`

_[binary file – ไม่แสดงเนื้อหา]_

### 📄 `assets/img/menu8.jpg`

_[binary file – ไม่แสดงเนื้อหา]_

### 📄 `assets/img/menu9.jpg`

_[binary file – ไม่แสดงเนื้อหา]_

### 📄 `assets/img/team1.jpg`

_[binary file – ไม่แสดงเนื้อหา]_

### 📄 `assets/img/team2.jpg`

_[binary file – ไม่แสดงเนื้อหา]_

### 📄 `assets/js/app.js`

```javascript
/**
 * assets/js/app.js
 * จัดการข้อมูลแบบ Dynamic โดยการดึงข้อมูลจาก JSON มาฉีดลงใน HTML
 * รองรับการแสดงผลหน้า Index, About, Services และ Contact
 */

async function initDynamicContent() {
    console.log("📦 เริ่มต้นดึงข้อมูลจากไฟล์ JSON...");

    try {
        // 1. โหลดข้อมูลร้านพื้นฐาน (site.json) - ใช้ได้ทุกหน้า
        const siteRes = await fetch('./data/site.json');
        if (siteRes.ok) {
            const siteData = await siteRes.json();
            if (siteData) updateSiteInfo(siteData);
        } else {
            console.warn("⚠️ ไม่พบไฟล์ data/site.json");
        }

        // 2. จัดการข้อมูลครอบครัวและเรื่องราว (fammiry.json) - หน้า Index & About
        const familyContainer = document.getElementById('family-members');
        const storyTitleEl = document.getElementById('story-title');

        if (familyContainer || storyTitleEl) {
            const familyRes = await fetch('./data/fammiry.json');
            if (familyRes.ok) {
                const familyData = await familyRes.json();
                if (familyData) renderFamilyContent(familyData);
            } else {
                console.warn("⚠️ ไม่พบไฟล์ data/fammiry.json");
            }
        }

        // 3. จัดการข้อมูลรีวิวลูกค้า (reviews.json) - หน้า Index
        const reviewsContainer = document.getElementById('reviews-container');
        if (reviewsContainer) {
            const reviewRes = await fetch('./data/reviews.json');
            if (reviewRes.ok) {
                const reviewsData = await reviewRes.json();
                if (Array.isArray(reviewsData)) renderReviews(reviewsData);
            } else {
                console.warn("⚠️ ไม่พบไฟล์ data/reviews.json");
            }
        }

    } catch (err) {
        console.error("❌ Critical Error ใน app.js:", err.message);
    }
}

/**
 * อัปเดตข้อมูลเบอร์โทร ที่อยู่ และเวลาเปิด-ปิด (รองรับหลายจุดในหน้าเดียว)
 */
function updateSiteInfo(site) {
    if (!site) return;

    // เลือก Elements ทั้งหมดที่มี Class สำหรับอัปเดตข้อมูลซ้ำๆ
    const shopPhones = document.querySelectorAll('.display-phone');
    const shopAddress = document.querySelectorAll('#display-address, .display-address');
    const shopHours = document.querySelectorAll('.display-time');
```

### 📄 `assets/js/render.js`

```javascript
/**
 * assets/js/render.js
 * ระบบจัดการ Component และควบคุมลำดับการแสดงผล (Rendering Engine)
 * สำหรับเว็บไซต์ ช.สหชัย เกี๊ยวปูหมูแดง จ.ตาก
 */

/**
 * ฟังก์ชันโหลดไฟล์ HTML เข้าไปใน Placeholder
 * @param {string} id - ID ของ Element เป้าหมายใน index.html
 * @param {string} file - ชื่อไฟล์ .html ในโฟลเดอร์ components/
 */
async function loadComponent(id, file) {
    const targetElement = document.getElementById(id);
    if (!targetElement) return false;

    try {
        // เพิ่ม Cache Busting (?v=...) เพื่อให้ Browser โหลดไฟล์ใหม่เสมอเวลาเราแก้ไขโค้ด
        const response = await fetch(`./components/${file}?v=${new Date().getTime()}`);

        if (!response.ok) {
            throw new Error(`ไม่สามารถโหลดไฟล์: ${file} (Status: ${response.status})`);
        }

        const html = await response.text();
        targetElement.innerHTML = html;

        console.log(`✅ โหลด ${file} สำเร็จ`);

        // ส่งสัญญาณ Event แจ้งระบบว่าส่วนประกอบนี้โหลดเสร็จแล้ว
        window.dispatchEvent(new CustomEvent('componentLoaded', {
            detail: { fileName: file, elementId: id }
        }));

        return true;
    } catch (error) {
        console.error(`❌ Render Error [${file}]:`, error);
        targetElement.innerHTML = `<div style="color:red; font-size:12px; padding:10px;">⚠️ Missing: ${file}</div>`;
        return false;
    }
}

/**
 * ฟังก์ชันหลักในการเตรียมความพร้อมหน้าเว็บ
 */
const initApp = async () => {
    console.log("🚀 ระบบเว็บ ช.สหชัย กำลังประมวลผล...");

    // 1. โหลดส่วนประกอบพื้นฐาน (ต้องรอให้เสร็จก่อนเพื่อจัดลำดับ UI)
    await loadComponent('header-placeholder', 'header.html');
    await loadComponent('navbar-placeholder', 'navbar.html');

    // 2. โหลดส่วนเนื้อหาเสริม (โหลดขนานพร้อมกันเพื่อความเร็ว)
    const extraComponents = [];

    if (document.getElementById('hero-placeholder')) {
        extraComponents.push(loadComponent('hero-placeholder', 'hero.html'));
    }

    if (document.getElementById('review-placeholder')) {
        extraComponents.push(loadComponent('review-placeholder', 'review.html'));
```

### 📄 `components/footer.html`

```html
<footer class="main-footer">
    <div class="container footer-container">

        <div class="footer-section about-shop">
            <h3 class="footer-title">ช.สหชัย เกี๊ยวปูหมูแดง</h3>
            <p class="shop-tagline">"อิ่มอร่อย อบอุ่น เหมือนทานที่บ้าน"</p>
            <p class="shop-history">ตำนานความอร่อยคู่เมืองตาก โดยเฮียเนกและเจ๊ตั๊ก มุ่งมั่นคัดสรรวัตถุดิบคุณภาพเพื่อส่งต่อความสุขผ่านมื้ออาหารมากว่า 8 ปี</p>
            <div class="footer-social">
                <a href="https://www.facebook.com/SahachaiNoodleTak" target="_blank"><i class="fab fa-facebook-f"></i></a>
                <a href="#"><i class="fab fa-line"></i></a>
                <a href="#"><i class="fas fa-envelope"></i></a>
            </div>
        </div>

        <div class="footer-section quick-links">
            <h3 class="footer-title">เมนูแนะนำ</h3>
            <ul>
                <li><a href="services.html"><i class="fas fa-chevron-right"></i> บะหมี่เกี๊ยวปูพิเศษ</a></li>
                <li><a href="services.html"><i class="fas fa-chevron-right"></i> หมูแดงย่างเตาถ่าน</a></li>
                <li><a href="services.html"><i class="fas fa-chevron-right"></i> บะหมี่แห้งต้มยำ</a></li>
                <li><a href="services.html"><i class="fas fa-chevron-right"></i> เกี๊ยวกุ้งคำโต</a></li>
            </ul>
        </div>

        <div class="footer-section contact-info">
            <h3 class="footer-title">ติดต่อเรา</h3>
            <div class="contact-item">
                <i class="fas fa-map-marker-alt"></i>
                <span id="display-address-footer" class="display-address">ตรงข้ามร้านทอง สินสุวรรณ 3 จ.ตาก</span>
            </div>
            <div class="contact-item">
                <i class="fas fa-phone-alt"></i>
                <a href="tel:0836301174" class="display-phone">083-630-1174</a>
            </div>
            <div class="contact-item">
                <i class="fas fa-clock"></i>
                <span class="display-time">เปิด จันทร์ - เสาร์ (11:00 - 20:00)</span>
            </div>
        </div>

    </div>

    <div class="footer-bottom">
        <div class="container">
            <p>&copy; 2025 ช.สหชัย เกี๊ยวปูหมูแดง จ.ตาก - All Rights Reserved.</p>
            <p style="font-size: 0.8rem; opacity: 0.6; margin-top: 5px;">ปรุงด้วยหัวใจโดย เฮียเนก & เจ๊ตั๊ก (เปิดให้บริการมาแล้ว 8 ปี)</p>
        </div>
    </div>
</footer>

<style>
    .main-footer {
        background-color: #1a1a1a;
        color: #e0e0e0;
        padding: 60px 0 0;
        margin-top: 80px;
    }

    .footer-container {
        display: grid;
```

### 📄 `components/header.html`

```html
<div
  class="top-bar"
  style="background-color: var(--primary-red); color: white; padding: 8px 0; font-size: 0.9rem;"
>
  <div
    class="container"
    style="display: flex; justify-content: space-between; align-items: center; flex-wrap: wrap;"
  >
    <div class="top-info-left" style="display: flex; gap: 20px; align-items: center;">
      <div class="info-item">
        <i class="fas fa-phone-alt" style="margin-right: 8px; color: var(--noodle-gold);"></i>
        <span>ติดต่อเฮียเนก/เจ๊ตั๊ก: </span>
        <a
          href="tel:0836301174"
          class="display-phone"
          style="color: white; text-decoration: none; font-weight: bold;"
        >
          083-630-1174
        </a>
      </div>
      <div class="info-item d-none-mobile">
        <i class="fas fa-clock" style="margin-right: 8px; color: var(--noodle-gold);"></i>
        <span class="display-time">เปิดให้บริการ: 11:00 - 20:00 น. (จันทร์ - เสาร์)</span>
      </div>
    </div>

    <div class="top-info-right" style="display: flex; gap: 15px; align-items: center;">
      <span class="d-none-mobile" style="font-style: italic; opacity: 0.9;"
        >"ตำนานความอร่อยคู่เมืองตาก"</span
      >
      <div
        class="social-links"
        style="display: flex; gap: 12px; border-left: 1px solid rgba(255,255,255,0.3); padding-left: 15px;"
      >
        <a
          href="https://www.facebook.com/SahachaiNoodleTak"
          target="_blank"
          title="Facebook"
          style="color: white; transition: 0.3s;"
        >
          <i class="fab fa-facebook-f"></i>
        </a>
        <a href="#" title="Line" style="color: white; transition: 0.3s;">
          <i class="fab fa-line"></i>
        </a>
      </div>
    </div>
  </div>
</div>

<style>
  /* สไตล์เพิ่มเติมเฉพาะจุดสำหรับ Header */
  .top-bar a:hover {
    color: var(--noodle-gold) !important;
  }

  .social-links a:hover {
    transform: translateY(-2px);
  }

  /* ซ่อนข้อมูลบางส่วนบนมือถือเพื่อความสะอาดตา */
  @media (max-width: 768px) {
    .d-none-mobile {
      display: none;
    }
    .top-bar .container {
      justify-content: center;
    }
    .top-info-left {
      gap: 0;
    }
  }
</style>
```

### 📄 `components/hero.html`

```html
<section class="hero-section">
    <div class="hero-overlay"></div>
    <div class="container hero-container">
        <div class="hero-badge">
            <i class="fas fa-award"></i> ตำนานความอร่อย 8 ปี เมืองตาก
        </div>
        <h1 class="hero-title">ช.สหชัย <span class="text-gold">เกี๊ยวปูหมูแดง</span></h1>
        <p class="hero-subtitle">"อิ่มอร่อย อบอุ่น เหมือนทานที่บ้าน โดยเฮียเนกและเจ๊ตั๊ก"</p>

        <div class="hero-actions">
            <a href="services.html" class="btn btn-hero-primary">
                <i class="fas fa-utensils"></i> ดูเมนูแนะนำ
            </a>
            <a href="contact.html" class="btn btn-hero-outline">
                <i class="fas fa-map-marker-alt"></i> เส้นทางมาร้าน
            </a>
        </div>
    </div>
</section>

<style>
    /* สไตล์เฉพาะสำหรับ Hero Section */
    .hero-section {
        height: 80vh;
        min-height: 550px;
        background: url('assets/img/banner.jpg') no-repeat center center;
        background-size: cover;
        background-attachment: fixed; /* Parallax effect */
        display: flex;
        align-items: center;
        position: relative;
        overflow: hidden;
    }

    .hero-overlay {
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background: linear-gradient(135deg, rgba(0,0,0,0.7) 0%, rgba(0,0,0,0.3) 100%);
        z-index: 1;
    }

    .hero-container {
        position: relative;
        z-index: 2;
        color: white;
        text-align: center;
    }

    .hero-badge {
        display: inline-block;
        background: var(--noodle-gold);
        color: var(--primary-dark);
        padding: 5px 20px;
        border-radius: 50px;
        font-weight: 700;
        font-size: 0.9rem;
        margin-bottom: 25px;
```

### 📄 `components/navbar.html`

```html
<nav class="navbar">
    <div class="container navbar-inner">

        <a href="index.html" class="logo">
            <img src="assets/img/logo.png"
                 alt="ช.สหชัย เกี๊ยวปูหมูแดง"
                 width="50" height="50"
                 onerror="this.src='https://via.placeholder.com/50?text=ช'">
            <div class="logo-text">
                <span class="brand-name">ช.สหชัย</span>
                <span class="brand-sub">เกี๊ยวปูหมูแดง</span>
            </div>
        </a>

        <ul class="nav-links">
            <li><a href="index.html" id="nav-home">หน้าแรก</a></li>
            <li><a href="services.html" id="nav-services">เมนูอร่อย</a></li>
            <li><a href="about.html" id="nav-about">รู้จักเรา</a></li>
            <li><a href="contact.html" id="nav-contact">ที่ตั้งร้าน</a></li>
        </ul>

        <div class="nav-cta">
            <a href="tel:0836301174" class="btn btn-primary display-phone">
                <i class="fas fa-phone-alt"></i> <span>083-630-1174</span>
            </a>
        </div>

    </div>
</nav>

<style>
    /* --- Navbar Styling (Locked & Stable) --- */
    .navbar {
        height: 85px; /* ล็อกความสูงคงที่ทุกหน้า */
        background-color: #ffffff;
        display: flex;
        align-items: center;
        width: 100%;
        position: sticky;
        top: 0;
        z-index: 1000;
        border-bottom: 1px solid rgba(0,0,0,0.06);
        box-shadow: 0 2px 15px rgba(0,0,0,0.03);
    }

    /* ใช้ Container ชุดเดียวกับ main.css เพื่อความกว้างที่เท่ากันทุกหน้า */
    .navbar-inner {
        display: flex;
        justify-content: space-between;
        align-items: center;
        width: 100%;
        height: 100%;
    }

    .navbar .logo {
        display: flex;
        align-items: center;
        gap: 12px;
        text-decoration: none;
        color: var(--primary-red);
```

### 📄 `components/review.html`

```html
<section class="reviews-section" style="background-color: var(--warm-cream); padding: 100px 0;">
  <div class="container">
    <div class="section-header" style="text-align: center; margin-bottom: 60px;">
      <span
        style="color: var(--primary-red); font-weight: 700; letter-spacing: 2px; text-transform: uppercase; font-size: 0.9rem;"
        >คำยืนยันจากลูกค้า</span
      >
      <h2 style="font-size: 2.5rem; color: var(--dark-text); margin-top: 10px;">
        ความประทับใจ <span style="color: var(--primary-red);">จากผู้ใช้บริการจริง</span>
      </h2>
      <div
        style="width: 80px; height: 3px; background: var(--noodle-gold); margin: 20px auto;"
      ></div>
    </div>

    <div id="reviews-container" class="grid-3 grid">
      <div style="grid-column: 1 / -1; text-align: center; padding: 40px; color: #888;">
        <i
          class="fas fa-quote-right"
          style="font-size: 2rem; opacity: 0.2; margin-bottom: 15px;"
        ></i>
        <p>กำลังโหลดรีวิวจากลูกค้าผู้มีอุปการคุณ...</p>
      </div>
    </div>

    <div
      class="review-footer"
      style="text-align: center; margin-top: 60px; padding: 30px; background: white; border-radius: 20px; box-shadow: var(--shadow-sm);"
    >
      <p style="font-size: 1.1rem; color: var(--light-text);">
        ร่วมแบ่งปันความประทับใจ หรือแนะนำติชมเราได้ที่หน้า
        <a
          href="https://www.facebook.com/SahachaiNoodleTak"
          target="_blank"
          style="color: var(--primary-red); font-weight: 700; text-decoration: none; border-bottom: 2px solid var(--noodle-gold);"
          >Facebook Page</a
        >
      </p>
    </div>
  </div>
</section>

<style>
  /* สไตล์เฉพาะสำหรับ Review Section ที่เพิ่มความนุ่มนวล */
  .reviews-section {
    position: relative;
    overflow: hidden;
  }

  /* ตกแต่งพื้นหลังด้วยไอคอนจางๆ */
  .reviews-section::after {
    content: "\f10e"; /* fa-quote-right */
    font-family: "Font Awesome 5 Free";
    font-weight: 900;
    position: absolute;
    bottom: -50px;
    right: 20px;
    font-size: 15rem;
    color: rgba(0, 0, 0, 0.03);
    z-index: 0;
  }

  /* ข้อมูลรีวิวจะใช้ Class .review-card ที่เราตั้งค่าไว้ใน main.css และ theme.css */
  #reviews-container {
    position: relative;
    z-index: 1;
  }

  @media (max-width: 768px) {
    .section-header h2 {
      font-size: 1.8rem;
    }
  }
</style>
```

### 📄 `contact.html`

```html
<!DOCTYPE html>
<html lang="th">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta name="description" content="ติดต่อ ช.สหชัย เกี๊ยวปูหมูแดง จ.ตาก สอบถามเส้นทาง สั่งอาหารล่วงหน้า โทร 083-630-1174">
    <title>ติดต่อเรา | ช.สหชัย เกี๊ยวปูหมูแดง จ.ตาก</title>

    <link rel="stylesheet" href="assets/css/main.css">
    <link rel="stylesheet" href="assets/css/theme.css">
    <link rel="stylesheet" href="assets/css/responsive.css">

    <link href="https://fonts.googleapis.com/css2?family=Sarabun:wght@300;400;700&display=swap" rel="stylesheet">
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0/dist/css/all.min.css">

    <style>
        .contact-hero {
            background: linear-gradient(rgba(0,0,0,0.6), rgba(0,0,0,0.6)), url('assets/img/banner.jpg');
            background-size: cover;
            background-position: center;
            padding: 100px 0;
            text-align: center;
            color: white;
            border-bottom: 8px solid var(--noodle-gold);
        }

        .contact-grid {
            display: grid;
            grid-template-columns: 1fr 1.5fr;
            gap: 40px;
            margin-top: -60px; /* ดึงการ์ดขึ้นไปทับ Hero นิดหน่อยให้ดูโมเดิร์น */
            position: relative;
            z-index: 10;
        }

        .contact-info-card {
            background: white;
            padding: 40px;
            border-radius: 30px;
            box-shadow: var(--shadow-md);
            border-bottom: 5px solid var(--primary-red);
        }

        .map-card {
            background: white;
            padding: 15px;
            border-radius: 30px;
            box-shadow: var(--shadow-md);
            overflow: hidden;
            height: 550px;
            border: 1px solid #eee;
        }

        .info-item {
            display: flex;
            align-items: flex-start;
            gap: 20px;
            margin-bottom: 30px;
            transition: var(--transition);
        }
```

### 📄 `data/fammiry.json`

```json
{
  "story_title": "8 ปี แห่งความภูมิใจ จากหัวใจเฮียเนกและเจ๊ตั๊ก",
  "description": "ร้าน ช.สหชัย เกี๊ยวปูหมูแดง เริ่มต้นจากความตั้งใจที่จะทำบะหมี่ที่อร่อยที่สุดให้คนในครอบครัวทาน เราคัดสรรแป้งหมี่คุณภาพดี นวดจนได้เส้นที่เหนียวนุ่มเป็นเอกลักษณ์ พร้อมหมูแดงย่างเตาถ่านที่หอมกรุ่น และเนื้อปูสดใหม่ส่งตรงทุกวัน ตลอด 8 ปีที่ผ่านมา เราไม่ได้ขายแค่บะหมี่ แต่เราส่งมอบความอิ่มอร่อยที่อบอุ่นเหมือนทานที่บ้านให้กับชาวเมืองตากทุกคน",
  "members": [
    {
      "id": 1,
      "name": "เฮียเนก",
      "role": "เจ้าสูตรบะหมี่และมือย่างหมูแดง",
      "img": "team1.jpg",
      "bio": "ผู้ดูแลมาตรฐานความอร่อยของเส้นบะหมี่และเทคนิคการย่างหมูแดงเตาถ่านสูตรโบราณ"
    },
    {
      "id": 2,
      "name": "เจ๊ตั๊ก",
      "role": "ผู้คัดสรรวัตถุดิบและหัวใจของการบริการ",
      "img": "team2.jpg",
      "bio": "ผู้ดูแลความสดใหม่ของเนื้อปูและรสชาติซุปร้อนๆ พร้อมต้อนรับลูกค้าด้วยรอยยิ้มเสมอ"
    }
  ],
  "milestones": [
    {
      "year": "2559",
      "event": "เริ่มต้นเปิดร้านวันแรกที่ จ.ตาก"
    },
    {
      "year": "2567",
      "event": "ครบรอบ 8 ปี แห่งความไว้วางใจจากลูกค้า"
    }
  ]
}
```

### 📄 `data/reviews.json`

```json
[
  {
    "user": "คุณกิตติศักดิ์",
    "rating": 5,
    "comment": "บะหมี่เส้นนุ่มมากครับ เกี๊ยวปูให้เนื้อมาเป็นก้อนๆ เลย หมูแดงก็หอมกลิ่นย่างเตาถ่านมาก แนะนำให้มาลองครับ",
    "date": "2024-11-15"
  },
  {
    "user": "เจ๊หมวย สายกิน",
    "rating": 5,
    "comment": "ร้านสะอาดมากค่ะ เฮียเนกกับเจ๊ตั๊กบริการเป็นกันเองสุดๆ ชอบบะหมี่ต้มยำแห้ง รสชาติจัดจ้านไม่ต้องปรุงเพิ่มเลย",
    "date": "2024-11-20"
  },
  {
    "user": "Tanakorn P.",
    "rating": 4,
    "comment": "เป็นร้านประจำเวลามาทำธุระที่จ.ตาก เลยครับ รสชาติคงที่มาก ทานมาหลายปีคุณภาพไม่เคยเปลี่ยน",
    "date": "2024-12-01"
  },
  {
    "user": "น้องแพร รีวิว",
    "rating": 5,
    "comment": "เกี๊ยวกุ้งคำโตสะใจมากค่ะ น้ำซุปเชงๆ ซดคล่องคอ อิ่มอร่อยคุ้มค่าราคามากค่ะ",
    "date": "2024-12-10"
  },
  {
    "user": "พี่อาร์ต คนรักเส้น",
    "rating": 5,
    "comment": "ทีเด็ดคือหมูแดงอบน้ำผึ้ง หวานกำลังดี นุ่ม ไม่เหนียว ใครมาเมืองตากต้องแวะร้าน ช.สหชัย ครับ",
    "date": "2024-12-12"
  }
]
```

### 📄 `data/services.json`

```json
{
  "categories": [
    {
      "id": "cat-signature",
      "name": "เมนูเส้นระดับตำนาน",
      "items": [
        {
          "id": 8,
          "name": "บะหมี่เกี๊ยวปูหมูแดง",
          "price": "55 / 60",
          "description": "ที่สุดของความอร่อย เครื่องแน่นจัดเต็มครบสูตร",
          "img": "menu8.jpg",
          "recommended": true
        },
        {
          "id": 6,
          "name": "บะหมี่ปู หมูแดง",
          "price": "50 / 60",
          "description": "ความอร่อยคูณสอง ทั้งเนื้อปูและหมูแดงย่าง",
          "img": "menu6.jpg",
          "recommended": true
        },
        {
          "id": 4,
          "name": "บะหมี่เกี๊ยวหมูแดง",
          "price": "45 / 50",
          "description": "เมนูยอดฮิตที่รวมทั้งบะหมี่และเกี๊ยวไว้ในชามเดียว",
          "img": "menu4.jpg",
          "recommended": true
        },
        {
          "id": 5,
          "name": "บะหมี่ปู",
          "price": "50 / 60",
          "description": "บะหมี่ไข่คลุกเคล้าเนื้อปูแกะสดๆ หวานธรรมชาติ",
          "img": "menu5.jpg",
          "recommended": false
        },
        {
          "id": 1,
          "name": "บะหมี่หมูแดง",
          "price": "40 / 50",
          "description": "บะหมี่ไข่เส้นนุ่ม ท็อปด้วยหมูแดงย่างสูตรเฮียเนก",
          "img": "menu1.jpg",
          "recommended": false
        },
        {
          "id": 3,
          "name": "เกี๊ยวหมูแดง",
          "price": "40 / 50",
          "description": "เกี๊ยวหมูคำโต แผ่นบางนุ่ม พร้อมหมูแดงย่างหอมๆ",
          "img": "menu3.jpg",
          "recommended": false
        },
        {
          "id": 7,
          "name": "เกี๊ยวปู / เกี๊ยวปูหมูแดง",
          "price": "50 / 60",
          "description": "เกี๊ยวนุ่มๆ พร้อมเนื้อปูเน้นๆ สไตล์เจ๊ตั๊ก",
          "img": "menu7.jpg",
```

### 📄 `data/site.json`

```json
{
  "shop_name": "ช.สหชัย เกี๊ยวปูหมูแดง",
  "branch": "จ.ตาก (สะพานกิตติขจร)",
  "owner": "เฮียเนก & เจ๊ตั๊ก",
  "phone": "083-630-1174",
  "alt_phone": "083-XXX-XXXX",
  "email": "contact@sahachaitak.com",
  "address": "ตรงข้ามร้านทอง สินสุวรรณ 3 ต.ระแหง อ.เมือง จ.ตาก 63000",
  "opening_hours": "11:00 - 20:00 น. (จันทร์ - เสาร์)",
  "closed_on": "วันอาทิตย์",
  "social": {
    "facebook": "https://www.facebook.com/SahachaiNoodleTak",
    "line": "@sahachaitak",
    "messenger": "m.me/SahachaiNoodleTak"
  },
  "google_maps_embed": "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3810.123!2d99.123!3d16.883!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x30dd962df324c00b%3A0xc0688820f4f9f476!2z4LiKLuC4quC4q-C4reC4quC4seC4p-C5gOC4geC4teC5ieC4p-C4m-C4ueC4reC4reC4oeC4seC4p-C5geC4lOC4hw!5e0!3m2!1sth!2sth!4v1710000000000!5m2!1sth!2sth",
  "google_maps_link": "https://maps.app.goo.gl/r6m8uYf8HjD9pX8L6",
  "meta": {
    "description": "ช.สหชัย เกี๊ยวปูหมูแดง จ.ตาก บะหมี่ทำเองสูตรโบราณ หมูแดงอบน้ำผึ้ง และเกี๊ยวปูเนื้อแน่น เปิดมานานกว่า 8 ปี",
    "keywords": "บะหมี่เกี๊ยวปู, หมูแดง, ร้านอาหารตาก, ช.สหชัย, เฮียเนก เจ๊ตั๊ก"
  }
}
```

### 📄 `index.html`

```html
<!DOCTYPE html>
<html lang="th">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta name="description" content="ช.สหชัย เกี๊ยวปูหมูแดง จ.ตาก โดยเฮียเนกและเจ๊ตั๊ก เปิดมานานกว่า 8 ปี ความอร่อยที่อบอุ่นเหมือนทานที่บ้าน">
    <title>ช.สหชัย เกี๊ยวปูหมูแดง จ.ตาก | 8 ปีแห่งความอร่อย</title>

    <link rel="stylesheet" href="assets/css/main.css">
    <link rel="stylesheet" href="assets/css/theme.css">
    <link rel="stylesheet" href="assets/css/responsive.css">

    <link href="https://fonts.googleapis.com/css2?family=Sarabun:wght@300;400;700&display=swap" rel="stylesheet">
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0/dist/css/all.min.css">

    <style>
        /* Hero Section Styling */
        .hero {
            height: 85vh;
            min-height: 600px;
            background: linear-gradient(rgba(0,0,0,0.35), rgba(0,0,0,0.55)),
                        url('assets/img/banner.jpg') no-repeat center center;
            background-size: cover;
            background-attachment: fixed; /* Effect: Parallax */
            display: flex;
            align-items: center;
            justify-content: center;
            text-align: center;
            color: white;
            position: relative;
        }

        .hero-content {
            z-index: 2;
            animation: fadeInDown 1s ease-out;
        }

        .hero-content h1 {
            font-size: clamp(2.8rem, 8vw, 4.5rem);
            text-shadow: 2px 4px 20px rgba(0,0,0,0.7);
            margin-bottom: 20px;
            font-weight: 700;
        }

        .hero-content p {
            font-size: clamp(1.1rem, 2.5vw, 1.4rem);
            background: rgba(178, 34, 34, 0.95);
            display: inline-block;
            padding: 12px 35px;
            border-radius: 50px;
            box-shadow: 0 5px 15px rgba(0,0,0,0.2);
            backdrop-filter: blur(5px);
        }

        /* ส่วน Family Section ทับเกย Hero เพื่อมิติที่สวยงาม */
        .family-warmth-section {
            margin-top: -100px;
            position: relative;
            z-index: 10;
            background: white;
```

### 📄 `scripts/project-summary.sh`

```bash
#!/usr/bin/env bash
# scripts/project-summary.sh
# สร้างไฟล์ PROJECT_SUMMARY.md โดยตรง (ไม่แสดงผลบน terminal)
# สแกนทุกไฟล์ในโครงสร้าง และแสดง 60 บรรทัดแรกของแต่ละไฟล์
# รองรับไฟล์ text ทุกชนิด และข้าม binary อัตโนมัติ

set -e
shopt -s nullglob

PROJECT_NAME="$(basename "$(pwd)")"
DATE_GEN="$(date '+%Y-%m-%d %H:%M:%S')"
OUTPUT_FILE="PROJECT_SUMMARY.md"

# โฟลเดอร์ที่ไม่ต้องสแกน
IGNORE_DIRS="node_modules|.git|.next|dist|build"

# สร้างไฟล์ใหม่ (overwrite)
cat > "$OUTPUT_FILE" <<EOF
# 📦 Project Summary: ${PROJECT_NAME}

> Generated on: ${DATE_GEN}

## 🗂 โครงสร้างโปรเจกต์

\`\`\`text
$(tree -a -I "$IGNORE_DIRS")
\`\`\`

## 📄 File Scan (แสดง 60 บรรทัดแรกของทุกไฟล์)
EOF

echo >> "$OUTPUT_FILE"

# สแกนไฟล์ทั้งหมด (ยกเว้น ignore dirs)
find . \
  -type d -regex ".*/\($IGNORE_DIRS\)" -prune -o \
  -type f -print |
sort |
while read -r file; do
  # ข้ามไฟล์ summary เอง
  [ "$file" = "./$OUTPUT_FILE" ] && continue

  REL_PATH="${file#./}"
  EXT="${REL_PATH##*.}"

  echo "### 📄 \`${REL_PATH}\`" >> "$OUTPUT_FILE"
  echo >> "$OUTPUT_FILE"

  # ตรวจว่าเป็น text file หรือไม่
  if grep -Iq . "$file"; then
    # ระบุ language hint สำหรับ markdown
    case "$EXT" in
      html) LANG="html" ;;
      css)  LANG="css" ;;
      js)   LANG="javascript" ;;
      json) LANG="json" ;;
      md)   LANG="markdown" ;;
      sh)   LANG="bash" ;;
      *)    LANG="" ;;
    esac
```

### 📄 `services.html`

```html
<!DOCTYPE html>
<html lang="th">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta name="description" content="เมนูเด็ด ช.สหชัย เกี๊ยวปูหมูแดง จ.ตาก บะหมี่เกี๊ยวปู หมูแดงอบน้ำผึ้ง และเมนูต้มยำรสเด็ด">
    <title>เมนูอร่อย | ช.สหชัย เกี๊ยวปูหมูแดง จ.ตาก</title>

    <link rel="stylesheet" href="assets/css/main.css">
    <link rel="stylesheet" href="assets/css/theme.css">
    <link rel="stylesheet" href="assets/css/responsive.css">

    <link href="https://fonts.googleapis.com/css2?family=Sarabun:wght@300;400;700&display=swap" rel="stylesheet">
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0/dist/css/all.min.css">

    <style>
        .menu-hero {
            background: linear-gradient(rgba(0,0,0,0.5), rgba(0,0,0,0.7)), url('assets/img/menu1.jpg');
            background-size: cover;
            background-position: center;
            padding: 100px 0;
            text-align: center;
            color: white;
        }

        .menu-category-title {
            text-align: center;
            margin: 60px 0 40px;
            position: relative;
        }

        .menu-category-title h2 {
            display: inline-block;
            background: white;
            padding: 0 30px;
            color: var(--primary-red);
            font-size: 2.2rem;
            position: relative;
            z-index: 2;
        }

        .menu-category-title::after {
            content: '';
            position: absolute;
            left: 0;
            top: 50%;
            width: 100%;
            height: 2px;
            background: #eee;
            z-index: 1;
        }

        /* Menu Item Card */
        .menu-item {
            background: white;
            border-radius: 20px;
            overflow: hidden;
            box-shadow: 0 10px 25px rgba(0,0,0,0.05);
            transition: transform 0.3s ease;
            height: 100%;
```

---

_Generated automatically by project-summary.sh_
