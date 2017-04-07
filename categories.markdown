---
layout: page_blank
title: Site Categories
slug: categories
summary: "Available site categories"
---
<div class="row">
    <div class="col-md-4">
        <div class="box">
            <div class="box-header">
                <i class="fa fa-list-alt"></i>
                <h3 class="box-title">Category List</h3>
            </div>
            <div class="box-body">
                <div class="list-group">
                {% for category in site.data.categories %}
                    <a href="/category/{{ category.slug }}/"  class="list-group-item">
                        {{ category.name }} {% if site.categories[category.slug].size > 0 %} <span class="pull-right label bg-blue"> {{ site.categories[category.slug].size }} </span> {%endif%}
                    </a>
                {% endfor %}
                </div>
            </div>
        </div>
    </div>
    <div class="col-md-8">
        <div class="box">
            <div class="box-header with-border">
                <i class="fa fa-cloud"></i>
                <h3 class="box-title">Category Cloud</h3>
            </div>
            <div class="box-body">
                <ul class="tagcloud">
                {% for category in site.data.categories %}
                    <li style="font-size: {{ site.categories[category.slug].size | times: 600 | divided_by: site.categories.size }}%">
                        <a href="/category/{{ category.slug }}/">
                            {{ category.name }}
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
	font-size: 2em;
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