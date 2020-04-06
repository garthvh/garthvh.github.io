---
layout: default
title: Categorized Link List
summary: A list of important links.
---
<!-- Content Header (Page header) -->
<div class="content-header">
  <div class="container-fluid">
    <div class="row mb-2">
      <div class="col-sm-12">
        <h1 class="m-0 text-dark">
          {{ page.title }}
        </h1>
      </div><!-- /.col -->
    </div><!-- /.row -->
  </div><!-- /.container-fluid -->
</div>
<!-- /.content-header -->
<div class="content">
    <div class="container-fluid">
        <div class="row">
            {% for category in site.data.links %}
            <div class="col-lg-4 col-md-6">
                <div class="card">
                    <div class="card-header">
                    {% for data_category in site.data.categories %}
                        {% if data_category.slug == category.category %}
                            <span class="badge badge-secondary float-right">{{ category.links.size }}</span>
                            <h3 class="card-title">{{ data_category.name }} </h3>
                        {% endif %}
                    {% endfor%}
                    </div>
                    <div class="card-body p-0">
                        <ul class="nav nav-pills flex-column">
                        {% for link in category.links %}
                            <li class="nav-item">
                                <a href="{{ link.url }}" class="nav-link">{{ link.text }}</a>
                            </li>
                        {% endfor %}
                        </ul>
                    </div>
                </div>
            </div>
            {% endfor %}
        </div>
    </div>
</div>