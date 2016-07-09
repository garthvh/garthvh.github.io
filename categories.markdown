---
layout: default
title: Site Categories
slug: categories
lead: "Available site categories"
fullwidth: true
---

<div class="container">
  <div class="row">
   <div class="col-md-12">
   <article>
		  <h1>Category Cloud</h1>

      <ul class="tagcloud">
      {% for category in site.categories %}
          <li style="font-size: {{ category | last | size | times: 2200 | divided_by: site.categories.size }}%">
              <a href="/category/{{ category | first | slugize }}/">
                  {{ category | first }}
              </a>
          </li>
      {% endfor %}
      </ul>
      </article>
    </div>
  </div>
</div>
<style type="text/css">
ul.tagcloud, ul.tagcloud li
{
	font-size: 1em;
	list-style-type: none;
	padding: 0;
	margin: 0;
}

ul.tagcloud li
{
	display: inline;
}

ul.tagcloud a
{
	text-decoration: none;
	padding: 3px 4px;
}
</style>