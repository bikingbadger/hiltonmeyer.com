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

As I use the `src` directory for all my development I place my assets folder in there and create my css.

```
mkdir -p src/assets/css
touch src/assets/css/tailwind.pcss
```

For tailwind you need to create a basic css file and during the build it converts this into the final css. This file is also used for the global changes that you can make. In `src/assets/css/tailwind.pcss` add the following:

```
@tailwind base;

@tailwind components;

@tailwind utilities;
```

Tailwind also has a config file which can be created using the `init` command. To enable building the eventual css I post css can be used which is how I set it up. Parcel also picks this up automatically.

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

Parcel is my build tool of choice. Lik e11ty there's no complex setup required and you can be up and running quickly. I like that it has some pre-configured things like postcss that helps me use it to build tailwind.

```
npm install -D parcel cross-env npm-run-all rimraf
```

I make a few changes to eleventy config just to so I use the default setup of parcel that builds into the dist directory. My setup for `.eleventy.js`:

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

Now just need to bring it all together with the npm scripts. I add the following to the package.json. I have a local development script so that I can continue developing and then build for when I build in Netlify.

```json
"scripts": {
    "serve": "npm-run-all --parallel bundle:*",
    "bundle:eleventy": "eleventy --serve --quiet",
    "bundle:tailwind": "parcel src/assets/css/* --out-dir dist/assets/css",    
    "build": "npm-run-all --parallel prod:*",
    "prod:eleventy": "eleventy",
    "prod:tailwind": "parcel build src/assets/css/* --out-dir dist/assets/css"
  },
```

My netlify.toml file looks like this: 

```toml
[build]
  publish = "dist"
  command = "npm run build"
```