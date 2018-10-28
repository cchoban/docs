---
title: Create package from template
id: create-package-from-existing-template
---

The wizard will provide basic of package creation script from an template,  you may need edit the script for your needs.
You can refer to [Creating ZIP package](creating-zip-file) to see some examples

1. Create an empty directory and type

```
chob create package-name --template <package-name-from-choban-website>
```
This will grab installation script and also icon to be ready.

2. After the wizard directory will be created on your parent directory with your package name. Example: brave-browser

4. Finally you can push your package after editing the script file.
```
chob push
```

