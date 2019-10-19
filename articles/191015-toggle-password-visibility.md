---
title: Toggle Password Visibility
description: Password toggle feature for a login page
date: 2019-10-15
updated: 2019-10-17
layout: layouts/article.njk
tags: 
 - content
 - articles
 - vanillajs
 - vanillajsacademy
navtitle: Toggle Password Visibility
permalink: articles/toggle-password-visibility.html
---
I've joined the [Vanilla JS Academy](https://vanillajsacademy.com) taught by [Chris Ferdinandi](https://gomakethings.com/). The awesome thing about the course so far has been that the lessons are pretty short and you produce something in the end of the day. The major bonus is also that the is an amazing Slack channel that is actually where I have been learning even more. Our first project was to create a Show Password checkbox that would toggle showing the password in plain text. This is a handy little feature to have and is sprinkled throughout the web.

```html
<!DOCTYPE html>
<html>
  <head>
    <title>Password Visibility</title>
    <link rel="stylesheet" href="/css/style.css" />
  </head>
  <body>
    <p><a href="/"> < Home</a></p>
    <h1>Password Visibility</h1>

    <p>Enter your username and password to login.</p>

    <form>
      <div>
        <label for="username" style="white-space:nowrap"
          >Username <input type="text" name="username" id="username"
        /></label>
      </div>

      <div style="white-space:nowrap">
        <label for="password"
          >Password <input type="password" name="password" id="password"
        /></label>
      </div>

      <div>
        <label for="show-password">
          <input type="checkbox" name="show-passwords" id="show-password" />
          Show password
        </label>
      </div>

      <p>
        <button type="submit">Log In</button>
      </p>
    </form>    

    <script src="script.js"></script>
  </body>
</html>
```

My thoughts for tackling this was firstly to make it super complicated trying to look at ways to catch the event with some checkbox listener that I found my way wandering down in the MSDN docs. Luckily I took a step back and decided to get back to something Chris mentioned in a post a while back, that is [planning it out on paper](https://gomakethings.com/how-to-plan-out-your-javascript-project/). By simplyfying it I foudn that the solution required me to

1. Select the elements of the password and the checkbox
2. Check when the checkbox was clicked 
3. Toggle the password field

```js
// Elements
const showPassword = document.querySelector("#show-password");
const password = document.querySelector("#password");

// Toggle Password Field
const togglePassword = () => {
  password.type = showPassword.checked ? "text" : "password";
};

// Listen for checkbox click
showPassword.addEventListener("click", togglePassword, false);
```

I must say that each of us took a different view of the problem and found various solutions. I actually incorporated one of them as I had used password. On my solution I had used `password.setAttribute('type','text')` which also works but I was not aware of the `.type` for setting the attribute directory without jumping through loops. It's going to be an interests few weeks of intense learning. 