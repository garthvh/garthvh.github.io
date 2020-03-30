---
layout: default
title: Site Search
summary: Full text search for site content
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
<!-- Main content -->
<div class="content">
  <div class="container-fluid">
    <div class="row">
      <div class="col-lg-12">
          <div id="search-results"></div>
        <!-- /.card -->
      </div>
      <!-- /.col-md-6 -->
    </div>
    <!-- /.row -->
  </div>
  <!-- /.container-fluid -->
</div>
<!-- /.content -->


<script type="">
  window.store = {
    {% for post in site.posts %}
      "{{ post.url | slugify }}": {
        "title": "{{ post.title | xml_escape }}",
        "author": "{{ post.author | xml_escape }}",
        "category": "{{ post.category | xml_escape }}",
        "content": {{ post.content | strip_html | strip_newlines | jsonify }},
        "url": "{{ post.url | xml_escape }}",
        "date": "{{ post.date | date: "%B %e, %Y" }}"
      },
    {% endfor %}
    {% for page in site.pages %}
    {% if page.path == 'redirect.html' %}
      {% assign showInSearch = false %}
    {% elsif page.path == 'atom.xml' %}
      {% assign showInSearch = false %}
    {% elsif page.path == 'archives/index.html' %}
      {% assign showInSearch = false %}
    {% elsif page.title == 'Home' %}
      {% assign showInSearch = false %}
    {% else %}
      {% assign showInSearch = true %}
    {% endif %}
    {% if showInSearch %}
      "{{ page.url | slugify }}": {
        "title": "{{ page.title | xml_escape }}",
        "author": "{{ '' }}",
        "category": "{{ 'Page' }}",
        "content": {{ page.content | strip_html | strip_newlines | jsonify }},
        "url": "{{ page.url | xml_escape }}",
        "date": "{{ page.date }}"
      }
      {% endif %}
      {% unless forloop.last %}
          {% if showInSearch %},
          {% endif %}
      {% endunless %}
    {% endfor %}
  };
</script>
<script src="{{ site.baseurl }}/assets/js/lunr.min.js"></script>
<script src="{{ site.baseurl }}/assets/js/search.js"></script>