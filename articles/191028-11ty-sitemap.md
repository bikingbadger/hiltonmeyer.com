---
title: Creating a sitemap in 11ty
description: How to setup 11ty to create a sitemap for web crawlers and search engines
date: 2019-10-28
updated: 2019-10-28
layout: layouts/article.njk
tags: 
 - content
 - articles
 - 11ty
navtitle: Creating a sitemap in 11ty
permalink: articles/11ty-sitemap.html
---
In order to submit your site to search analytics you should have a sitemap of your content. Having this just makes it easier and quicker for the search engines to find and index your site content. So I went about find how to do this with 11ty. The base blog of 11ty has this built in so I made a few changes especially for the dates.
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