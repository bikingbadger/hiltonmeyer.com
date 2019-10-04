---
title: 11ty curly braces and nunjucks
description: How to escape curly braces in eleventy using the Nunjucks templating engine
date: 2019-10-04
updated: 2019-10-04
layout: layouts/article.njk
tags: 
 - articles
 - git
navtitle: 11ty curly braces and nunjucks
---
In trying to share posts about using Nunjucks templating engine in 11ty I came unstuck when creating posts with the curly brackets that are used by Nunjucks. I'd either get and error or it would do the substitute.
I thought using backticks might work but that didn't help. A bit of searching and I found an issue on the Nunjucks repo about the curly brackets. This seems to be the only way to do it and I also found that it was [documented](https://mozilla.github.io/nunjucks/templating.html#raw) as such.

```
{% raw %}
{{ text to escape}}
{% endraw %}
```