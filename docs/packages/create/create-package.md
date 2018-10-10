---
title: Create package
id: create-package
---

The wizard will provide basic of package creation script,  you may need edit the script for your needs.
You can refer to [Creating ZIP package](creating-zip-file) to see some examples

1. Create an empty directory and type

```
chob create package-name
```
This will bring wizard to create package with some questions.

2. After the wizard directory will be created on your parent directory with your package name. Example: brave-browser

3. Find an image for your package, put that image file on same directory you have your package script. If 'server' -> 'icon' section does not exists, Choban will search for image file in directory your on.

4. Finally you can push your package.
```
chob --push
```

