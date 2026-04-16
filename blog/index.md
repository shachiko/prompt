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
    <h1><span class="lang-en">Useful articles that educate buyers and support conversion.</span><span class="lang-vi">Các bài viết hữu ích giúp giáo dục khách hàng và hỗ trợ chuyển đổi.</span></h1>
    <p class="lead"><span class="lang-en">Read practical content about prompt design, AI workflows, education use cases, and selling prompts more effectively.</span><span class="lang-vi">Đọc các nội dung thực tế về thiết kế prompt, workflow AI, ứng dụng trong giáo dục và cách bán prompt hiệu quả hơn.</span></p>
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
