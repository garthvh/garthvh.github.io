---
layout: default
title: Projects
permalink: /projects/
redirect_from: /project/
---
<!-- Content Header (Page header) -->
<div class="content-header">
  <div class="container-fluid">
    <div class="row mb-2">
      <div class="col-12">
        <h1 class="m-0 text-dark">{{ page.title }}</h1>
      </div><!-- /.col -->
    </div><!-- /.row -->
  </div><!-- /.container-fluid -->
</div>
<!-- /.content-header -->
<div class="content">
    <div class="container-fluid">
        <div class="row">
        {% assign projects = site.projects | sort: 'order' | reverse %}
        {% for page in projects %}
            <div class="col-lg-4 col-md-6 col-sm-12">
                <div class="card">
                    {% if page.project_status != 'Complete' %}
                    <div class="ribbon-wrapper ribbon-lg">
                      <div class="ribbon bg-warning text-sm">
                        {{ page.project_status }}
                      </div>
                    </div>
                    {% endif %}
                    {% if page.project_status == 'Complete' %}
                    <div class="ribbon-wrapper ribbon-lg">
                      <div class="ribbon bg-success text-lg">
                        {{ page.project_status }}
                      </div>
                    </div>
                    {% endif %}
                    <div class="card-header">
                        <h3 class="card-title"><a href="{{ page.url }}">{{ page.title }}</a></h3>
                    </div>
                    <div class="card-body">
                        <img src="{{ page.featured_image | relative_url }}" class="product-image" alt="{{ page.title }}">
                        <br/><br/>
                        <p>{{ page.summary }}</p>                    
                    </div>
                </div>
            </div>
        {% endfor %}
        </div>
    </div>
</div>