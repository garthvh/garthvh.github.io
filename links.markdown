---
layout: page_blank
title: Categorized Link List
summary: A list of important links.
fullwidth: true
---
<div class="row">
{% for category in site.data.links %}
    <div class="col-lg-3 col-sm-6">
        <div class="box">
            <div class="box-header">
                <h3 class="box-title">{{ category.category }}</h3>
            </div>
            <div class="box-body">
                <div class="list-group">
                {% for link in category.links %}
                    <a href="{{ link.url }}" class="list-group-item">{{ link.text }}</a>
                {% endfor %}
                </div>
            </div>
        </div>
    </div>
{% endfor %}
</div>
