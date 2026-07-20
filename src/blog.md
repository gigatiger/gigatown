---
layout: layout/blog.njk
permalink: /blog/
---


<h1>Blog Posts</h1>

<ul>
{% for post in collections.posts %}
  <li>
    <a target="blog-post" href="{{ post.url }}">{{ post.data.title }}</a> - {{post.date | niceDate}}<br/>
   
  </li>
{% endfor %}
</ul>


