---
title: "Vim Indentation"
description: "All .vimrc configurations relating to indentation"
publicationDate: "2023-01-28"
updatedDate: "2023-01-28"
heroImage: ""
---

> https://vimdoc.sourceforge.net/htmldoc/options.html

# tabstop ['ts'](https://vimdoc.sourceforge.net/htmldoc/options.html#'tabstop')

[Number](https://vimdoc.sourceforge.net/htmldoc/eval.html#Number) of spaces that a [\<Tab\>](https://vimdoc.sourceforge.net/htmldoc/motion.html#%3CTab%3E) in the file counts for.

Also see |[:retab](https://vimdoc.sourceforge.net/htmldoc/change.html#:retab)| command, and ['softtabstop'](https://vimdoc.sourceforge.net/htmldoc/options.html#'softtabstop') option.

Note: Setting ['tabstop'](https://vimdoc.sourceforge.net/htmldoc/options.html#'tabstop') to any other value than 8 can make your file appear wrong in many places (e.g., when [printing](https://vimdoc.sourceforge.net/htmldoc/print.html#printing) it).

```vim
set tabstop=8
```

# shiftwidth ['sw'](https://vimdoc.sourceforge.net/htmldoc/options.html#'shiftwidth')

[Number](https://vimdoc.sourceforge.net/htmldoc/eval.html#Number) of spaces to use for each step of (auto)indent.

Used for |['cindent'](https://vimdoc.sourceforge.net/htmldoc/options.html#'cindent')|, |[>>](https://vimdoc.sourceforge.net/htmldoc/change.html#%3E%3E)|, |[<<](https://vimdoc.sourceforge.net/htmldoc/change.html#%3C%3C)|, etc.

```vim
set shiftwidth=8
```

# softtabstop ['sts'](https://vimdoc.sourceforge.net/htmldoc/options.html#'softtabstop')

[Number](https://vimdoc.sourceforge.net/htmldoc/eval.html#Number) of spaces that a [\<Tab\>](https://vimdoc.sourceforge.net/htmldoc/motion.html#%3CTab%3E) counts for while performing editing operations, like [inserting](https://vimdoc.sourceforge.net/htmldoc/insert.html#inserting) a [\<Tab\>](https://vimdoc.sourceforge.net/htmldoc/motion.html#%3CTab%3E) or using [\<BS\>](https://vimdoc.sourceforge.net/htmldoc/motion.html#%3CBS%3E).

It "feels" like <Tab>s are being inserted, while in fact a mix of spaces and <Tab>s is used.

This is useful to keep the ['ts'](https://vimdoc.sourceforge.net/htmldoc/options.html#'ts') setting at its standard value of 8, while being able to edit like it is set to ['sts'](https://vimdoc.sourceforge.net/htmldoc/options.html#'sts').

However, commands like "[x](https://vimdoc.sourceforge.net/htmldoc/change.html#x)" still work on the actual characters.

When ['sts'](https://vimdoc.sourceforge.net/htmldoc/options.html#'sts') is zero, this feature is off.

['softtabstop'](https://vimdoc.sourceforge.net/htmldoc/options.html#'softtabstop') is set to 0 when the ['paste'](https://vimdoc.sourceforge.net/htmldoc/options.html#'paste') option is set.

See also |[ins-expandtab](https://vimdoc.sourceforge.net/htmldoc/insert.html#ins-expandtab)|.

When ['expandtab'](https://vimdoc.sourceforge.net/htmldoc/options.html#'expandtab') is not set, the number of spaces is minimized by using <Tab>s.

The ['L'](https://vimdoc.sourceforge.net/htmldoc/motion.html#L) flag in ['cpoptions'](https://vimdoc.sourceforge.net/htmldoc/options.html#'cpoptions') changes how tabs are used when ['list'](https://vimdoc.sourceforge.net/htmldoc/options.html#'list') is set.

NOTE: This option is set to 0 when ['compatible'](https://vimdoc.sourceforge.net/htmldoc/options.html#'compatible') is set.

```vim
set softtabstop=0
```

# expandtab ['et'](https://vimdoc.sourceforge.net/htmldoc/options.html#'expandtab')

In [Insert](https://vimdoc.sourceforge.net/htmldoc/insert.html#Insert) mode: Use the appropriate number of spaces to insert a [\<Tab\>](https://vimdoc.sourceforge.net/htmldoc/motion.html#%3CTab%3E).

Spaces are used in indents with the '[\>](https://vimdoc.sourceforge.net/htmldoc/change.html#%3E)' and '[\<](https://vimdoc.sourceforge.net/htmldoc/change.html#%3C)' commands and when ['autoindent'](https://vimdoc.sourceforge.net/htmldoc/options.html#'autoindent') is on.

To insert a real [tab](https://vimdoc.sourceforge.net/htmldoc/intro.html#tab) when ['expandtab'](https://vimdoc.sourceforge.net/htmldoc/options.html#'expandtab') is on, use `CTRL-V<Tab>`.

See also |[:retab](https://vimdoc.sourceforge.net/htmldoc/change.html#:retab)| and |[ins-expandtab](https://vimdoc.sourceforge.net/htmldoc/insert.html#ins-expandtab)|.

NOTE: This option is reset when ['compatible'](https://vimdoc.sourceforge.net/htmldoc/options.html#'compatible') is set.

```vim
set expandtab
```
