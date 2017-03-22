---
layout: page_blank
title: Site Categories
slug: categories
summary: "Available site categories"
---
<div class="row">
    <div class="col-md-3">
        <div class="box">
            <div class="box-header">
                <i class="fa fa-list-alt"></i>
                <h3 class="box-title">Category List</h3>
            </div>
            <div class="box-body">
                <div class="list-group">
                {% for category in site.data.categories %}
                    <a href="/category/{{ category.slug }}/"  class="list-group-item">
                        {{ category.name }}
                    </a>
                {% endfor %}
                </div>
            </div>
        </div>
    </div>
    <div class="col-md-9">
        <div class="box">
            <div class="box-header with-border">
                <i class="fa fa-cloud"></i>
                <h3 class="box-title">Category Cloud</h3>
            </div>
            <div class="box-body">
                <ul class="tagcloud">
                {% for category in site.categories %}
                    <li style="font-size: {{ category | last | size | times: 1800 | divided_by: site.categories.size }}%">
                        <a href="/category/{{ category | first | slugize }}/">
                            {{ category | first }}
                        </a>
                    </li>
                {% endfor %}
                </ul>
            </div>
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