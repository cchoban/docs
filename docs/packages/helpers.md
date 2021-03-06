---
title: Installation variables
id: helpers
---

Installation variables
====
```
(string) author - Software author
(string) lisence - Software lisence
(string) version - Software version. This will help Choban to determine if there is an update available.
(string) checksum - Checksum for file
(string) fileType - File type for file
(string) description - Short description for Software. This description will be used on Choban's software website.
(string) downloadUrl - Download url for file
(string) downloadUrl64 - Download url for file (64-bit)
(string) checksumType - Checksum type for software. (sha256, md5)
(string) checksumType64  - Checksum type for software. (64-bit) (sha256, md5)
(string) silentArgs - Silent args for software. It helps software to be installed silently.
(array) validExitCodes - Exit codes determines if application quit successfully.
(array) dependencies - Dependencies for software, this will help to install dependencies while installing software.
(boolean) unzip - This will also trigger the same thing.
(boolean) 64bitonly - Packages with this key can only be installed on 64-bit computers
(array) path_env - Paths to be added to PATH environment
(dict) environments - Environments to be added
(dict) createShortcut - Shortcuts for software, this will help to run software from command line.
(boolean) arches - Install software for both arches (x86 and x64)
(string) unzipPath - Path to be unzipped files
(dict) extractFolder - Folder to be extracted inside ZIP file. Check 'cURL' package as an example.
(array) notes - Notes to splash it for user.
```
