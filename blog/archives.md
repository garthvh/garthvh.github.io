---
layout: default
title: Blog Archives
redirect_from: /archives/
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
<section class="content">
  <div class="container-fluid">
    <!-- Timelime -->
    <div class="row">
      <div class="col-md-12">
        <div class="timeline" itemscope itemtype="http://schema.org/Blog">
          {% for post in site.posts reversed %}
            {% if post.layout == 'post' %}
              {% include post/archive_post.html %}
            {% endif %}
          {% endfor %}
          <div>
            <i class="fas fa-clock bg-gray"></i>
          </div>
        </div>
    </div>
  </div>
</section>