---
title: Add certificate to AWS Certificate Manager with Netlify hosted domain
navtitle: Add certificate to AWS Certificate Manager with Netlify hosted domain
description: Add certificate to AWS Certificate Manager with Netlify hosted domain
date: 2022-07-05
updated: 2022-07-05
layout: layouts/article.njk
tags:
  - content
  - articles
  - aws
permalink: articles/add_certificate_to_aws_certificate_manager_with_netlify_hosted_domain.html
---
# Add certificate to AWS Certificate Manager with Netlify hosted domain

## Request certificate in AWS

Open [ACM](https://console.aws.amazon.com/acm/home?region=us-east-1) and request a new certificate

![Request new certificate](https://res.cloudinary.com/hiltonmeyer-com/image/upload/f_auto,q_auto,c_scale,w_1024,dpr_auto/v1657015467/hiltonmeyer.com/Pasted_image_20220705124722_cy8sat.png)

Select *Request a public certificate* as the domain is hosted on Netlify

![Public certificate](https://res.cloudinary.com/hiltonmeyer-com/image/upload/v1657015467/hiltonmeyer.com/Pasted_image_20220705124749_cljcdj.png)

Add the sub-domain that you want to use for your API or backend application

![Settings](https://res.cloudinary.com/hiltonmeyer-com/image/upload/v1657015466/hiltonmeyer.com/Pasted_image_20220705124928_gfvekw.png)

There will be a popup bar where you can view the certificate or select it from the list

![Certificate list](https://res.cloudinary.com/hiltonmeyer-com/image/upload/v1657015466/hiltonmeyer.com/Pasted_image_20220705125059_y3c8gq.png)

Copy the values that will be required for the CNAME

![Values](https://res.cloudinary.com/hiltonmeyer-com/image/upload/v1657015467/hiltonmeyer.com/Pasted_image_20220705125257_k6e8ax.png)

## Create record in Netlify

In your domain settings in Netlify create a new CNAME record. **The most important thing is to remove the domain name** Netlify automatically adds the domain so you should remove that if you copied it from AWS.

![CNAME](https://res.cloudinary.com/hiltonmeyer-com/image/upload/v1657015466/hiltonmeyer.com/Pasted_image_20220705125501_tdzqi9.png)

It may take a while for the updates of the DNS to take hold and this will automatically change the certificate to *Issued*

![Issued](https://res.cloudinary.com/hiltonmeyer-com/image/upload/v1657015466/hiltonmeyer.com/Pasted_image_20220705125753_sptyxf.png)