---
title: Uninstalling Software
id: uninstall-software
---

### Usage
```
chob remove <pkg> <pkg2> <pkg3> [Options]
```
you may use like this if you want
```
chob -R <pkg> <pkg2> <pkg3> [Options]
```
### Examples
```
chob -R yarn git firefox
```
Option to skip agreements (You can also use [config](/config/skip-agreements) to skip agreements.)
```
chob -R yarn git firefox -y
```