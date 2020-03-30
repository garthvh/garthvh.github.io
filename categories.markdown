---
layout: default
title: Site Categories
slug: categories
summary: "Available site categories"
---
<!-- Content Header (Page header) -->
<div class="content-header">
  <div class="container-fluid">
    <div class="row mb-2">
      <div class="col-sm-12">
        <h1 class="m-0 text-dark">
         Categories
        </h1>
      </div><!-- /.col -->
    </div><!-- /.row -->
  </div><!-- /.container-fluid -->
</div>
<!-- /.content-header -->
<div class="content">
  <div class="container-fluid">
        <div class="row">
            <div class="col-md-4">
                <div class="card">
                    <div class="card-header">
                    <h3 class="card-title"><i class="fas fa-list"></i> Category List</h3>
                    <div class="card-tools">
                        <button type="button" class="btn btn-tool" data-card-widget="collapse"><i class="fas fa-minus"></i>
                        </button>
                    </div>
                    </div>
                    <div class="card-body p-0">
                    <ul class="nav nav-pills flex-column">
                        {% for category in site.data.categories %}
                        <li class="nav-item active">
                        <a href="/category/{{ category.slug }}/" class="nav-link">
                            {{ category.name }} 
                            {% if site.categories[category.slug].size > 0 %} <span class="badge bg-primary float-right"> {{ site.categories[category.slug].size }} </span> {%endif%}
                        </a>
                        </li>
                        {% endfor %}
                    </ul>
                    </div>
                    <!-- /.card-body -->
                </div>
                <!-- /.card -->
            </div>
            <div class="col-md-8">
                <div class="card">
                    <div class="card-header">
                    <h3 class="card-title"><i class="fas fa-cloud"></i> Category Cloud</h3>
                    <div class="card-tools">
                        <button type="button" class="btn btn-tool" data-card-widget="collapse"><i class="fas fa-minus"></i>
                        </button>
                    </div>
                    </div>
                    <div class="card-body p-0">
                        <ul class="tagcloud">
                        {% for category in site.data.categories %}
                            <li style="font-size: {{ site.categories[category.slug].size | times: 650 | divided_by: site.categories.size }}%">
                                <a href="/category/{{ category.slug }}/">
                                    {{ category.name }}
                                </a>
                            </li>
                        {% endfor %}
                        </ul>
                    </div>
                    <!-- /.card-body -->
                </div>
                <!-- /.card -->
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