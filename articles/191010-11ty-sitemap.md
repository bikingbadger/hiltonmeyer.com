---
title: Creating a sitemap in 11ty
description: How to setup 11ty to create a sitemap for web crawlers and search engines
date: 2019-10-06
updated: 2019-10-10
layout: layouts/article.njk
tags: 
 - content
 - articles
 - 11ty
navtitle: Creating a sitemap in 11ty
permalink: articles/11ty-sitemap.html
---

```
---
permalink: /sitemap.xml
eleventyExcludeFromCollections: true
---
<?xml version="1.0" encoding="utf-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
{% raw %}{%- for page in collections.all %}{% endraw %}
  {% raw %}{% set mappedUrl %}{{ metadata.url}}{{ page.url | url }}{% endset %}{% endraw %}
  <url>
    <loc>{% raw %}{{ mappedUrl }}{% endraw %}</loc>
    <lastmod>{% raw %}{{ page.date | htmlDateString }}{% endraw %}</lastmod>
  </url>
{% raw %}{%- endfor %}{% endraw %}
</urlset>
```