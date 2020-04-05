---
layout: default
title: Projects
---
<!-- Content Header (Page header) -->
<div class="content-header">
  <div class="container-fluid">
    <div class="row mb-2">
      <div class="col-sm-12">
        <h1 class="m-0 text-dark">{{ page.title }}</h1>
      </div><!-- /.col -->
    </div><!-- /.row -->
  </div><!-- /.container-fluid -->
</div>
<!-- /.content-header -->
<div class="content">
    <div class="container-fluid">
        <div class="row">
        {% for page in site.pages %}
        {% if page.url contains '/project/' and page.url != '/project/' )  %}
            <div class="col-6">
                <div class="card">
                    <div class="card-header">
                        <h3 class="card-title"><a href="{{ page.url }}">{{ page.title }}</a></h3>
                    </div>
                    <div class="card-body">
                        <img src="{{ page.featured_image }}" class="product-image" alt="{{ page.title }}">
                        <br/><br/>
                        <p>{{ page.summary }}</p>                    
                    </div>
                </div>
            </div>
        {% endif %}
        {% endfor %}
        </div>
    </div>
</div>