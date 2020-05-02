---
title: Basic 11ty Setup
description: My step by step to get a site up and running using 11ty
date: 2020-04-26
updated: 2020-05-02
layout: layouts/article.njk
tags:
  - content
  - articles
  - 11ty
navtitle: Basic 11ty Setup
permalink: articles/basic-11ty-setup.html
---

I wanted to just share how I get my eleventy projects up and running instead of trying to reverse engineer my other projects and copy and pasting bits and pieces. I have been really taking a liking to tailwind so after that install and setup I can create a basic layout and from there every site starts to diverge into it's own monster. I am sure this will be a living document that I will come back to and change over time as I learn, so it will act as a reference for getting up and running.

## Install 11ty

First and foremost you want to setup a npm project so that you can start pulling in libraries and add-on for later use. After that get 11ty setup in the project.

```bash
npm init -y
npm install -D @11ty/eleventy
```

With eleventy installed now some basic setup is required to make everything start working together with my workflow. Again out of the box 11ty can actually be used as is out of the box and things will work just fine. I have just found a few things that I like to work with and ways of using certain addon and tools. 

## Basic Config

11ty has a great feature for development `eleventy --serve`. This allows you to develop and see the output at the same time. I add a script to `package.json` to allow some live programming. Just keep in mind that any changes to the config require a stop and start so in the beginning this might not be that useful but something I like to get out the way. Add the following to `package.json`:

```
...
"scripts": {
    "dev": "eleventy --serve",
    "build": "eleventy"
},
...
```

Add \_site to `.gitignore` so that it's not added to your repo once you start developing locally and commiting changes. It is created at build time so is not required to be added to the repo and you acutally want it to rebuild each time so that anyone new doesn't have some changes that might have been made as a one time customization. Add the following to `.gitignore`:

```
_site
```

Because I prefer putting all my source data in a specific directory there is a little bit of configuration required and there is a file called `.eleventy.js` that you will eventually create once you start customizing things and adding filters or plugins but more on this later. I create `.eleventy.js` as follows

```
module.exports = function (eleventyConfig) {
  return {
    passthroughFileCopy: true,
    dir: {
      input: 'src',
      includes: '_includes',
      data: '_data',
      output: '_site',
    },
  };
};
```

Firstly I prefer putting all my files in the `src` directory. The next thing is you need to create the `src` directory and also the `index.md` to get a basic skeleton for the site

```
mkdir src
touch src/index.md
echo '# Heading' > src/index.md
npm run dev
```

This should give you the basics of getting a very basic structure along with a landing page. Now it's time to let templating come to the fore and also add tailwind to make things look a bit better although this is completely at your discretion and you can use any layout system you want.

## Add some structure

The data directory is where you can store as the name suggests data used in 11ty. I'll just setup a basic setup for information that can be used to get up and running.

Create a file called `_data/metadata.json` under the src directory

```
mkdir src/_data
touch metadata.json
```

And then add the following:

```
{
  "title": "Hilton Meyer",
  "url": "https://hiltonmeyer.com",
  "description": "My little blog",
  "author": {
    "name": "Hilton Meyer",
    "email": "me@hiltonmeyer.com"
  }
}
```

To use the layouts you need to create a template, I prefer nunjucks but 11ty is very flexible and comes with quite a few out of the box that you can plug and play with.

```
mkdir -p src/_includes/layouts
touch base.njk
```

Add the following the following to `src/_includes/layouts/base.njk`:

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
      content="{{ renderData.description or description or metadata.description }}" />
  </head>

  <body>
    <header>
      <h1>{% raw %}{{ metadata.title }}{% endraw %}</h1>
      <div>
        {% raw %}{%- for nav in collections.nav -%}{% endraw %}
        <a href="{% raw %}{{ nav.url | url }}{% endraw %}">{% raw %}{{ nav.data.navtitle }}{% endraw %}</a><br />
        {% raw %}{%- endfor -%}{% endraw %}
      </div>
    </header>
    <main>
      {% raw %}{{ content | safe }}{% endraw %}
    </main>
  </body>
</html>
```

Now that there is a basic layout template, this is just the base, the base can now be used to create sub-templates but that is a deeper rabbit hole and I want to stick to just getting something up and running. So to use the layout I can update my `index.md` as follows:

```
---
title: Pantry
layout: layouts/base.njk
tags:
  - nav
navtitle: Home
date: 2000-01-01
---

## My basic layout

```

The main thing to pay attention to is the nav settings. In the `base.njk` I added to following `for nav in collections.nav`. This will loop through any page that has the tags in it and then add it to the collection if it has the tag of `nav`. You can call it anything and collections are really powerful in 11ty. By using this in my base template I have used it to create navigation on the fly which is what I usually use it for. So any subsequent navigation I want in the site I just add it to that pages meta as I did for the Home page. The `navtitle` is then shown as the title of the navigation but I still have the `title` for using on the page itself. The order is by `date` so this I use as a way to hack the order of the navigation items.

## Layout

So here you could use css and just add this as a passthrough file and this way you can manage your layout. I prefer tailwind so this is what I am going to continue with discussing.
