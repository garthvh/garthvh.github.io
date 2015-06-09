---
layout: default
title: Site Categories
slug: categories
lead: "Available site categories"
fullwidth: true
---

{% for data_category in site.data.categories %}
<a href="/category/{{ data_category.slug }}/">{{ data_category.name }}</a>
{% endfor %}
