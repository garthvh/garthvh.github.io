---
layout: default
title: Site Tags
slug: tags
summary: "Available site tags"
redirect_from: /categories/
---
<!-- Content Header (Page header) -->
<div class="content-header">
  <div class="container-fluid">
    <div class="row mb-2">
      <div class="col-sm-12">
        <h1 class="m-0 text-dark">
         Tags
        </h1>
      </div><!-- /.col -->
    </div><!-- /.row -->
  </div><!-- /.container-fluid -->
</div>
<!-- /.content-header -->
<div class="content">
  <div class="container-fluid">
        <div class="row">
            <div class="col-4">
                <div class="card">
                    <div class="card-header">
                    <h3 class="card-title"><i class="fas fa-list"></i> Tag List</h3>
                    <div class="card-tools">
                        <button type="button" class="btn btn-tool" data-card-widget="collapse"><i class="fas fa-minus"></i>
                        </button>
                    </div>
                    </div>
                    <div class="card-body p-0">
                    <ul class="nav nav-pills flex-column">
                        {% for tag in site.tags %}
                        <li class="nav-item active">
                        <a href="/tag/{{ tag[0] | slugify }}/" class="nav-link">
                            {{ tag[0] }} 
                            {% if tag[1].size > 0 %} <span class="badge bg-primary float-right"> {{ tag[1].size }} </span> {%endif%}
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
                    <h3 class="card-title"><i class="fas fa-cloud"></i> Tag Cloud</h3>
                    <div class="card-tools">
                        <button type="button" class="btn btn-tool" data-card-widget="collapse"><i class="fas fa-minus"></i>
                        </button>
                    </div>
                    </div>
                    <div class="card-body">
                        <ul class="tagcloud">
                        {% for tag in site.tags %}
                            <li style="font-size:{{ tag | last | size | times: 15 | plus: 50 }}%;">
                                <a href="/tag/{{ tag | first | slugify }}">
                                    {{ tag[0] }}
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
	font-size: 3em;
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