---
title: Skip checking of hash on the fly
id: skip-checking-of-hash
---

## Usage
```
chob install <pkg> <pkg2> <pkg3> --skip-hash
```
you may use like this if you want
```
chob -S <pkg> <pkg2> <pkg3> --skip-hash
```
## Examples
```
chob -S yarn git firefox --skip-hash
```
##  Option to skip checking hash of a file from config.
(You can also use [config](/config/skip-hash) to skip checking of hash.)