---
title: 11ty curly braces and nunjucks
description: How to escape curly braces in eleventy using the Nunjucks templating engine
date: 2019-10-04
updated: 2019-10-04
layout: layouts/article.njk
tags:
  - content
  - articles
  - git
navtitle: 11ty curly braces and nunjucks
permalink: articles/11ty-curly-braces.html
---

In trying to share posts about using Nunjucks templating engine in 11ty I came unstuck when creating posts with the curly brackets that are used by Nunjucks. I'd either get and error or it would do the substitute.
I thought using backticks might work but that didn't help. A bit of searching and I found an issue on the Nunjucks repo about the curly brackets. This seems to be the only way to do it and I also found that it was [documented](https://mozilla.github.io/nunjucks/templating.html#raw) as such.

```
{% raw %}{% raw %}{% endraw %}
{% raw %}{{ text to escape}}{% endraw %}
{% raw %}{{% endraw %}% endraw %}
```

This is a bit meta but I had to use the above example to escape the code I was trying to show about how to escape the code I wanted to post about. Read that 3 times to try and understand what I am talking about as I still don't
