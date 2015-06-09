---
layout: default
title: Site Categories
slug: categories
lead: "Available site categories"
fullwidth: true
---


<h1>Posts by category</h1>

{% for data_category in site.data.categories %}
<h2>{{ data_category.name }}</h2>
{% if site.categories[data_category] %}
    {% for post in site.categories[data_category] %}
        <a href="{{ post.url }}/">{{ post.title }}</a>
    {% endfor %}
{% else %}
    <p>There are no posts for this tag.</p>
{% endif %}
{% endfor %}
