---
title: Update Date for 11ty file
description: Adding a field to show the last updated date of the article 
date: 2019-10-02
updated: 2019-10-02
layout: layouts/article.njk
tags: 
 - articles
 - vanilla js
 - eleventy
navtitle: Update Date for 11ty file
---
In 11ty you can place metadata into a file using the ```---``` at the top of an article. It took me a while to understand how to do this in 11ty because they call this [Front Matter Data](https://www.11ty.io/docs/data-frontmatter/). Anyway I was able to add some fields but the one I was interested in was adding an update date to my articles so I could latter either order my posts by the last updated date instead of just created as I will be updating content as I go along. Also I could for now just [show this in my articles](/articles/191002-dates-11ty-templates).

My other interest here is to be able to create posts but only show them in the lists based on this date and then the actual article will be "published" or go live on the date I had specified. So I have setup the Front Matter Data using the the YML setup described in the documentation:

```
---
title: Update Date for 11ty file
description: Adding a field to show the last updated date of the article 
date: 2019-10-02
updated: 2019-10-02
layout: layouts/article.njk
tags: 
 - articles
 - vanilla js
 - eleventy
navtitle: Update Date for 11ty file
---
```

I have added title, description, updated and navtitle for usage in other places when using nunjucks to create the static content. The title and description I basically use for creating the card in the list on the [articles landing page](/articles). I now have the update date which I just need to remember to change in the future when I update an article. This also allows me to not always use the files last changed as I might just be tweaking something or making a minor change so I don't want to have it calculated. there is an option to use [Javascript Front Matter](https://www.11ty.io/docs/data-frontmatter/#javascript-front-matter) so I might dig into this in a future post. One thing I'm really interested in doing is getting an [excerpt from my article](https://www.11ty.io/docs/data-frontmatter/#example%3A-parse-excerpts-from-content) to show on the card which I might be digging into also in the future. 


