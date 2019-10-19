---
title: Toggle Multiple Fields
description: Showing or hiding the passwords of multiple fields on a form
date: 2019-10-19
updated: 2019-10-19
layout: layouts/article.njk
tags: 
 - content
 - articles
 - vanillajs
 - vanillajsacademy
navtitle: Toggle Multiple Fields
permalink: articles/toggle-multiple-fields.html
---
Today's project for the [Vanilla JS Academy](https://vanillajsacademy.com) was creating a checkbox that would either show the text of the password or hide it behind a password type input. This was very similar to [yesterdays](/articles/toggle-password-visibility.html) in that we were given two password fields and had to toggle between seeing the password or not. In this case there were two password fields like you might have on a change password field. 

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <title>Multi Field Toggle</title>
  </head>
  <body>
    <h2>Password Toggle Visibility</h2>

    <form>
      <div>
        <label for="current-password">Current Password <input type="password" name="current-password" id="current-password" /></label>        
      </div>

      <div>
        <label for="new-password">New Password <input type="password" name="new-password" id="new-password" /></label>        
      </div>

      <div>
        <label for="show-passwords">
          <input type="checkbox" name="show-passwords" id="show-passwords" />
          Show passwords
        </label>
      </div>

      <p>
        <button type="submit">Change Password</button>
      </p>
    </form>

    <script src="script.js"></script>
  </body>
</html>
```

The solution is very much based on what I did yesterday and tried to re-use the same functions. 

1. Select the elements of the checkbox
2. Get an array of the password fields
3. Check when the checkbox was clicked 
4. Toggle the password fields using a loop

```js
// Elements
const showPasswords = document.querySelector("#show-passwords");
const passwordFields = Array.prototype.slice.call(document.querySelectorAll("[type='password']"));

// Toggle Password Field
const togglePasswordFields = () => {
  passwordFields.forEach((password) => {
    password.type = showPasswords.checked ? "text" : "password";
  });  
};

// If page is refreshed and the checkbox is already refreshed
// change the fields to text in anyway
if (showPasswords.checked) {
  passwordFields.forEach((password) => {
    password.type = "text";
  });
}

// Listen for checkbox click
showPasswords.addEventListener("click", togglePasswordFields, false);
```

I ran into a sticky situation that actually came up in the thread on Slack where someone mentions that when refreshing the page it would still keep the checkbox checked but the passwords would disappear but also loose the functionality of changing the input type. The solution was to add a check to make sure that if on load the checkbox was checked then to change the fields to text on the first run.