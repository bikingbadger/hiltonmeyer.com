---
title: EBS Installed Applications
description: Scripts for find EBS Installed Applications
date: 2019-08-14
layout: layouts/article.njk
tags: 
 - posts
 - scripts
 - ebs
navtitle: EBS Installed Applications
---

Scripts for find EBS Installed Applications

```
SELECT
fa.application_short_name,
fa.application_name,
fpi.patch_level,
DECODE(fpi.status, 'I', 'Installed', 'S', 'Shared', 'N', 'Inactive', fpi.status) status,
fpi.db_status
FROM
fnd_product_installations fpi,
fnd_application_vl fa
WHERE
1 = 1
AND fa.application_id = fpi.application_id
ORDER BY
fa.application_short_name;
```