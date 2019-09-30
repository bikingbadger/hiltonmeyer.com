---
title: Find deleted file in Git
description: Finding a file that went MIA from a git repository
date: 2019-10-03
updated: 2019-10-03
layout: layouts/article.njk
tags: 
 - articles
 - git
navtitle: Find deleted file in Git
---
I found myself looking for a [recipe](/offtopic/recipes) I'm sure I had written down and put up on the site. I am using git to keep things in order so that led me down the path of wondering whether I could serach the git repo history and see if there is a file in there I was looking for and then retrieve it.

```
git log --all --full-history -- **ginger.*
```

This spat out the history of the ginger beer recipe I was trying to find
```
commit 495eb42be1500fc54e892b1d6adffa132a0bab18
Author: Hilton Meyer <development@hiltonmeyer.com>
Date:   Fri Sep 13 06:28:07 2019 +0300

    Created drafts for work in process recipes

commit f9e910dc5b81052ea682e8d1f56449b53e37f647
Author: Hilton Meyer <development@hiltonmeyer.com>
Date:   Thu Sep 12 21:35:46 2019 +0300

    A few more adjustments to ginger beer recipe

commit 6fc00977acb65546f18b818facd501f70d038181
Author: Hilton Meyer <development@hiltonmeyer.com>
Date:   Thu Sep 12 21:28:17 2019 +0300

    Adjustments to ginger beer

commit fb41f763759d1b6d8e568596fbeb4b7cd6e3bbff
Author: Hilton Meyer <development@hiltonmeyer.com>
Date:   Fri Sep 6 16:29:27 2019 +0300

    Added ginger beer recipe
```    

Dope!! What I found was that I had forgotten about my drafts folder where I was keeping work in progress recipes. Well at least I found it but it go me wondering how would I have restore the file if I wanted it.

Lets take a look at the commit:

```
git show 495eb42be1500fc54e892b1d6adffa132a0bab18
```

The result was showed me where the file was:
```
diff --git a/recipes/ginger-beer.md b/recipes/ginger-beer.md
deleted file mode 100644
index d75edf9..0000000
--- a/recipes/ginger-beer.md
+++ /dev/null
@@ -1,49 +0,0 @@
----
-title: Ginger Beer
-layout: layouts/recipe.njk
-tags:
-    - recipe
-    - drink
-    - fermentation
-    - ginger
-    - lemon
-    - sugar
-navtitle: Ginger Beer
-date: 2019-09-06
...
```

So I can check it out with this:

```
git checkout fb41f763759d1b6d8e568596fbeb4b7cd6e3bbff -- recipes/ginger-beer.md
```

Bam!! file restored. Well I'll keep that for another day then.