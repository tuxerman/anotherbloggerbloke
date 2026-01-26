---
layout: page
title: Archive
icon: <i class="fa fa-suitcase"></i>
permalink: "{{ pathPrefix }}archive/"
include_in_header: true
---

<table style="border-collapse: collapse;">
    {% assign currentYear = "" %}
    {% for post in collections.posts %}
        {% assign postYear = post.data.date | year %}
        {% if postYear != currentYear %}
            <tr>
            <td class="archive-year">{{ postYear }}</td>
            </tr>
            {% assign currentYear = postYear %}
        {% endif %}
        <tr>
        <td width="20%" align="right">
        {{ post.data.date | archiveDate }}
        </td>
        <td width="10%" align="center">
        &nbsp; &nbsp; • &nbsp; &nbsp;
        </td>
        <td width="70%" align="left">
        <a href="{{ post.url }}">{{ post.data.title }}</a>
        </td>
        </tr>
    {% endfor %}
</table>
