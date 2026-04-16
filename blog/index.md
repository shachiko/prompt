---
layout: default
title: Blog
description: Articles about PromptBase selling, prompt design, SEO content, and AI workflows for educators and ecommerce sellers.
seo_title: Blog | AutoPrompt Shop
permalink: /blog/
---

<section class="page-hero">
  <div class="container">
    <p class="eyebrow">Blog</p>
    <h1>Write useful articles. Pre-sell the prompt. Repeat.</h1>
    <p class="lead">This archive is built from Jekyll posts, so every article gets its own URL, metadata, and archive listing automatically.</p>
  </div>
</section>

<section class="section">
  <div class="container list-grid">
    {% for post in site.posts %}
    <article class="post-card card">
      <div class="post-card-body">
        <p class="page-meta">{{ post.date | date: '%B %d, %Y' }} · {{ post.category | default: 'Prompt Strategy' }}</p>
        <h3><a href="{{ post.url | relative_url }}">{{ post.title }}</a></h3>
        <p>{{ post.description }}</p>
        <a href="{{ post.url | relative_url }}">Read article →</a>
      </div>
    </article>
    {% endfor %}
  </div>
</section>
