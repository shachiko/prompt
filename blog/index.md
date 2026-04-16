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
    <h1><span class="lang-en">Write useful articles. Pre-sell the prompt. Repeat.</span><span class="lang-vi">Viết bài hữu ích. Bán trước ý tưởng của prompt. Lặp lại đều.</span></h1>
    <p class="lead"><span class="lang-en">This archive is built from Jekyll posts, so every article gets its own URL, metadata, and archive listing automatically.</span><span class="lang-vi">Trang lưu trữ này được dựng từ Jekyll posts, nên mỗi bài viết sẽ tự có URL, metadata và xuất hiện trong archive.</span></p>
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
        <a href="{{ post.url | relative_url }}"><span class="lang-en">Read article →</span><span class="lang-vi">Đọc bài →</span></a>
      </div>
    </article>
    {% endfor %}
  </div>
</section>
