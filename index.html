---
layout: default
title: Home
---

{% assign index = true %}
<div itemscope itemtype="http://schema.org/Blog">
{% for post in paginator.posts %}
    {% unless post.redirect %}
    {% assign content = post.content %}
        {% if post.categories.size > 0 %}
            {% capture categories_content %} {% endcapture %}
            {% for post_category in post.categories %}
                {% for data_category in site.data.categories %}
                    {% if data_category.slug == post_category %}
                        {% assign category = data_category %}
                    {% endif %}
                {% endfor %}
                {% if category %}
                    {% capture categories_content_temp %}{{ categories_content }}<a class="label label-default" href="/category/{{ category.slug }}/">{{ category.name }}</a>{% if forloop.last == false %} &nbsp; {% endif %}{% endcapture %}
                    {% assign categories_content = categories_content_temp %}
                {% endif %}
            {% endfor %}
        {% else %}
            {% assign categories_content = '' %}
        {% endif %}
        <article class="post" itemprop="blogPost" itemscope itemtype="http://schema.org/BlogPosting">
            {% include article.html %}
        </article>
    {% endunless %}
{% endfor %}
</div>

<nav>
	<ul class="pager">
		{% if paginator.next_page %}
		<li>
			<a href="{{site.baseurl}}/page/{{ paginator.next_page }}">&laquo; Older Posts</a>
		</li>
		{% endif %}
		{% if paginator.previous_page %}
		<li>
      {% if paginator.previous_page == 1 %}
				<a href="{{site.baseurl}}/">Newer Posts &raquo; </a>
      {% else %}
				<a href="{{site.baseurl}}/page/{{paginator.previous_page}}">Newer Posts &raquo; </a>
      {% endif %}
		</li>
    {% endif %}
	</ul>
</nav>
