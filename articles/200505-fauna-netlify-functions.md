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

To be able to develop fauna we need the sdk library that you can then use FQL (Fauna Query Language) to interact with the database, this is the SQL for Fauna basically. There is an option of using graphQL which I want to explore and might come back and edit this post. The `encoding` package is used by netlify and causes an error at the time of writing if not installed. It might be a peer dependency and fixed in future versions but at the moment this is the work around I have found to be working.

```
npm init -y
npm install faunadb encoding
```

Now we want to be able to connect to the fauna db so there is a key that should be used. You create is in Fauna Console in the Security tab with the `NEW KEY`

![Fauna Key](https://res.cloudinary.com/hiltonmeyer-com/image/upload/f_auto,q_auto,c_scale,w_1024,dpr_auto/v1589787828/FaunaKey-01_uzloif.jpg)

The important thing is to save the given secret, this will be your connection to the DB and I store this in a `.env` file and make sure that this is in the `.gitignore` so that the key is not uploaded in my repo. As this is used in Netlify you should create a key there too. I've actually used this little feature to setup a test db for local development and a production db and just generate a key for each and save that. 

![Fauna Key](https://res.cloudinary.com/hiltonmeyer-com/image/upload/f_auto,q_auto,c_scale,w_1024,dpr_auto/v1589787828/FaunaKey-02_wor9ic.jpg)

 The cool thing about having a test db is that you can set the collection to clean itself up with the History and TTL setting. I set this to 1 and that should in theory keep the testing data clean. One thing to keep in mind is that there are limits to the free account so this might be something to check when you are doing heavy testing. But again you could have a personal account where you create the DB and develop against the API like that.

![Fauna Collection Settings](https://res.cloudinary.com/hiltonmeyer-com/image/upload/f_auto,q_auto,c_scale,w_1024,dpr_auto/v1589788363/FaunaCollectionSettings_awqvax.jpg)

This is how I setup the local environment

```bash
touch .env

## Add the following to the .env file
FAUNADB_SECRET=fnADldk43FDdfdsffxlw08N2dh73d
```

My `.gitignore` has the following added to it so that the build directories are not saved to the repo. They are built on the fly so not required to be in the git repo.

```
# Netlify Functions
/dist
/functions
```

In development netlify has provided a cool way of being able to test and run the functions locally. There is also Netlify Dev which gives more features but for basic function testing an nothing else this lightweight package is just the thing you need.

```
npm install -D netlify-lambda 
```

To be able to use the functions in Netlify you can either do this through the web interface but I prefer to have it in a file in the repo so that I know exactly what is being used without having to open the console. We need a `netlify.toml` file with some basic config inside:

```
[build]
  # This will be your default build command.
  command = "npm run build"
  # This is where Netlify will look for your lambda functions.
  functions = "functions"
  # This is the directory that you are publishing from.
  publish = "dist"
```

In the file setup the following in the `package.json` file. The `build` command is what Netlify will use and the `functions` command is what I use locally to develop the functions and see the output in my console.

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

In Fauna create a collection called test_connections

![New Collection](https://res.cloudinary.com/hiltonmeyer-com/image/upload/f_auto,q_auto,c_scale,w_1024,dpr_auto/v1589788960/FaunaNewCollection_j3dvhy.jpg)

And you can add a document for some basic testing.

![New Document](https://res.cloudinary.com/hiltonmeyer-com/image/upload/f_auto,q_auto,c_scale,w_1024,dpr_auto/v1589788960/FaunaNewDocument_xwqpyo.jpg)

The function itself will use the secret you previously created to connection to the DB and fetch this document

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
    .query(q.Paginate(q.Match(q.Ref('classes/test_connections'))))
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

Now you can run the function with `npm run functions` and go to `http://localhost:9000/.netlify/functions/test-connection` to see the result. I prefer using Postman for this type of testing but you can also use curl.