---
title: Adding Tailwind CSS to 11ty
description: Add CSS to a 11ty project using TailwindCSS
date: 2020-04-26
updated: 2020-04-27
layout: layouts/article.njk
tags:
  - content
  - articles
  - 11ty
  - tailwind
navtitle: Adding Tailwind CSS to 11ty
permalink: articles/add-tailwind-11ty.html
---

## Layout

In a [previous post](basic-11ty-setup.html) I setup the skeleton of a 11ty project. This is my basic setup that I use to get this up and running quickly. I would say that within about 1 hour you can have a site live and ready to start adding content. Most of my time though is normally spent messing around with layout. Getting this setup in just the right way and I am no UI specialist so my sites don't come across as flash, very much the opposite. But this is more about adding Tailwind than harping on about my lack of design skills.

```
npm install -D tailwindcss postcss autoprefixer
```

```
mkdir -p src/assets/css
touch src/assets/css/tailwind.pcss
```

In `src/assets/css/tailwind.pcss` add the following

```
@tailwind base;

@tailwind components;

@tailwind utilities;
```

```
npx tailwindcss init
touch postcss.config.js
```

In file `postcss.config.js`:

```
module.exports = {
  plugins: [require('tailwindcss'), require('autoprefixer')],
};
```

## Build

```
npm install -D parcel cross-env npm-run-all rimraf
```

`.eleventy.js`

```
module.exports = function (eleventyConfig) {
  return {
    passthroughFileCopy: true,
    dir: {
      input: 'src',
      includes: '_includes',
      data: '_data',
      output: 'dist',
    },
  };
};
```

Need to add the css to the layout previously created `src/_includes/layouts/base.njk`:

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="utf-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>
      {% raw %}{{ renderData.title or title or metadata.title}}{% endraw %}
    </title>
    <meta
      name="Description"
      content="{{ renderData.description or description or metadata.description }}"
    />
    <link rel="stylesheet" href="/assets/tailwind.css" />
  </head>

  <body>
    <header>
      <h1>{% raw %}{{ metadata.title }}{% endraw %}</h1>
      <div>
        {% raw %}{%- for nav in collections.nav -%}{% endraw %}
        <a href="{% raw %}{{ nav.url | url }}{% endraw %}"
          >{% raw %}{{ nav.data.navtitle }}{% endraw %}</a
        ><br />
        {% raw %}{%- endfor -%}{% endraw %}
      </div>
    </header>
    <main>
      {% raw %}{{ content | safe }}{% endraw %}
    </main>
  </body>
</html>
```
