---
layout: layout/blog.njk
permalink: /blog/
---


<ul>
{% for post in collections.posts %}
  <li>
    <a target="blog-post" href="{{ post.url }}">{{ post.data.title }}</a> - {{post.date | niceDate}}<br/>
   
  </li>
{% endfor %}
</ul>


