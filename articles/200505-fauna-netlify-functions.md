---
title: Fauna with netlify functions
description: Setup fauna using netlify functions
date: 2020-05-05
updated: 2020-05-05
layout: layouts/article.njk
tags:
  - content
  - articles
  - netlify
  - fauna
navtitle: Fauna with netlify functions
permalink: articles/setup-fauna-netlify-functions.html
---

To be able to develop fauna we need the library. The `encoding` package is used by netlify and causes an error at the time of writing if not installed. It might be a peer dependency and fixed in future versions but at the moment this is the work around I have found to be working.

```
npm init -y
npm install faunadb encoding
```

Now we want to be able to connect to the fauna db so there is a key that should be used. I store this in a `.env` file and make sure that this is in the `.gitignore` so that the key is not uploaded in my repo. Just make sure to also create and add a key to the netlify repo.

```bash
touch .env

## Add the following to the .env file
FAUNADB_SECRET=fnADldk43FDdfdsffxlw08N2dh73d
```

My `.gitignore` has the following added to it

```
# Netlify Functions
/dist
/functions
```

In development netlify has provided a cool way of being able to do this locally

```
npm install -D netlify-lambda 
```

To be able to use the functions we need a `netlify.toml` file with some basic config inside:

```
[build]
  # This will be your default build command.
  command = "npm run build"
  # This is where Netlify will look for your lambda functions.
  functions = "functions"
  # This is the directory that you are publishing from.
  publish = "dist"
```

In the file setup the following in the `package.json` file

```
"scripts": {
    "build": "netlify-lambda build src/functions",
    "functions": "netlify-lambda serve src/functions"
  },
```

Time to create our first function

```
mkdir -p src/functions
touch src/functions/test-connection.js
```

```js
require('dotenv').config();
import faunadb from 'faunadb';

const q = faunadb.query;
const client = new faunadb.Client({
  secret: process.env.FAUNADB_SECRET,
});

exports.handler = (event, context, callback) => {
  console.log(`${event.httpMethod}: ${event.path}`);
  return client
    .query(q.Paginate(q.Match(q.Ref('indexes/test_connections'))))
    .then((response) => {
      const references = response.data;
      console.log('references', references);
      const getAllDataQuery = references.map((ref) => {
        console.log(ref);
        return q.Get(ref);
      });
      // then query the refs
      return client.query(getAllDataQuery).then((ret) => {
        return callback(null, {
          statusCode: 200,
          body: JSON.stringify(ret),
        });
      });
    })
    .catch((error) => {
      console.log('error', error);
      return callback(null, {
        statusCode: 400,
        body: JSON.stringify(error),
      });
    });
};
```

`npm run serve` and go to `http://localhost:9000/.netlify/functions/test-connection`