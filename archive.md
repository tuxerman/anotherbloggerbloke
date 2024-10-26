---
layout: page
title: archive
icon: <i class="fa fa-suitcase"></i>
permalink: /archive/
include_in_header: true
---

<table style="border-collapse: collapse;">
    {% for post in site.posts %}
    {% unless post.next %}
        <tr>
        <td class="archive-year">{{ post.date | date: '%Y' }}</td>
        </tr>
    {% else %}
    {% capture year %}{{ post.date | date: '%Y' }}{% endcapture %}
    {% capture nyear %}{{ post.next.date | date: '%Y' }}{% endcapture %}
    {% if year != nyear %}
        <tr style="padding-top: 3em;">
        <td class="archive-year">{{ post.date | date: '%Y' }}</td>
        </tr>
    {% endif %}
    {% endunless %}
        <tr>
        <td width="20%" align="right">
        {{ post.date  | date: '%b %d'}}
        </td>
        <td width="10%" align="center">
        &nbsp; &nbsp; • &nbsp; &nbsp;
        </td>
        <td width="70%" align="left">
        <a href="{{ post.url | prepend:site.baseurl }}">{{ post.title }}</a>
        </td>
        </tr>
    {% endfor %}
</table>
