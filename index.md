---
layout: default
title: AutoPrompt Shop
description: Premium AI prompts, PromptBase-ready product pages, SEO blog content, and custom prompt systems for education and ecommerce.
seo_title: AutoPrompt Shop | AI Prompts for PromptBase, Education, and Ecommerce
image: /assets/img/og-cover.svg
---

<section class="hero">
  <div class="container hero-grid">
    <div class="hero-copy">
      <p class="eyebrow">{{ site.data.site.hero_kicker }}</p>
      <h1>{{ site.data.site.hero_title }}</h1>
      <p class="lead">{{ site.data.site.hero_subtitle }}</p>
      <div class="hero-actions">
        <a class="button" href="{{ '/prompts/' | relative_url }}">Browse prompt catalog</a>
        <a class="button button-outline" href="{{ site.data.site.promptbase_url }}" target="_blank" rel="noopener">Open PromptBase store</a>
      </div>
      <div class="proof-list">
        {% for item in site.data.site.proof %}
        <div class="mini-card">
          <h3>{{ item.title }}</h3>
          <p>{{ item.text }}</p>
        </div>
        {% endfor %}
      </div>
    </div>
    <aside class="hero-panel card">
      <div>
        <p class="eyebrow">Why this rebuild works</p>
        <h2>From one long HTML file to a site that can actually grow.</h2>
        <p class="lead">This version is built for GitHub Pages using Jekyll collections and posts. That means real URLs, real article pages, and much cleaner SEO than a single-page toggle setup.</p>
      </div>
      <div class="metric-row">
        <div class="metric"><strong>{{ site.prompts | size }}</strong><span>Sample prompt pages</span></div>
        <div class="metric"><strong>{{ site.posts | size }}</strong><span>Sample blog posts</span></div>
        <div class="metric"><strong>1 file</strong><span>to add each new prompt or post</span></div>
      </div>
    </aside>
  </div>
</section>

<section class="section">
  <div class="container">
    <div class="section-heading">
      <div>
        <p class="eyebrow">Featured prompts</p>
        <h2>Prompts that deserve their own landing pages.</h2>
      </div>
      <p>Each prompt gets a dedicated URL, product-style structure, clear CTA, and schema markup so the page can pull search traffic instead of hiding inside one homepage.</p>
    </div>
    <div class="grid-3">
      {% assign featured_prompts = site.prompts | where: 'featured', true | sort: 'weight' %}
      {% for prompt in featured_prompts limit: 3 %}
      <article class="prompt-card card">
        <div class="thumb"><span>{{ prompt.model }}</span></div>
        <div class="prompt-card-body">
          <div class="badge-row">
            <span class="badge">{{ prompt.category }}</span>
            <span class="badge">{{ prompt.best_for }}</span>
          </div>
          <h3><a href="{{ prompt.url | relative_url }}">{{ prompt.title }}</a></h3>
          <p>{{ prompt.description }}</p>
          <div class="card-meta">
            <span class="price">${{ prompt.price }}</span>
            <a href="{{ prompt.url | relative_url }}">View details →</a>
          </div>
        </div>
      </article>
      {% endfor %}
    </div>
  </div>
</section>

<section class="section-tight">
  <div class="container">
    <div class="split-panel card">
      <div>
        <p class="eyebrow">SEO strategy</p>
        <h2>Use the blog to pre-sell the prompt, not just decorate the site.</h2>
        <p class="lead">The cleanest traffic loop is simple: write helpful articles around buyer problems, link them to a focused prompt page, then send the most motivated visitors to PromptBase.</p>
        <ul class="check-list">
          <li>One post = one searchable problem or workflow.</li>
          <li>One prompt page = one conversion target.</li>
          <li>One CTA = no confused visitor, no scattered click path.</li>
        </ul>
      </div>
      <div class="notice">
        Current site issue: the live version exposes all article content in one document and swaps sections with JavaScript, so the structure is harder to scale and weaker for page-level SEO than separate URLs. citeturn997668view0turn2file0
      </div>
    </div>
  </div>
</section>

<section class="section">
  <div class="container">
    <div class="section-heading">
      <div>
        <p class="eyebrow">Latest articles</p>
        <h2>Posts that attract search traffic and warm up buyers.</h2>
      </div>
      <p>Daily publishing becomes sane when every article is just one Markdown file in <code>_posts</code>.</p>
    </div>
    <div class="grid-2">
      {% for post in site.posts limit: 4 %}
      <article class="post-card card">
        <div class="thumb"><span>{{ post.category | default: 'Prompt Strategy' }}</span></div>
        <div class="post-card-body">
          <p class="page-meta">{{ post.date | date: '%B %d, %Y' }}</p>
          <h3><a href="{{ post.url | relative_url }}">{{ post.title }}</a></h3>
          <p>{{ post.description }}</p>
          <a href="{{ post.url | relative_url }}">Read article →</a>
        </div>
      </article>
      {% endfor %}
    </div>
  </div>
</section>

<section class="section-tight">
  <div class="container">
    <div class="cta-banner card">
      <div>
        <p class="eyebrow">Custom work</p>
        <h2>Need a prompt system built around your niche?</h2>
        <p class="lead">I also build PromptBase-ready prompt templates, education prompt packs, and niche conversion prompts for real businesses.</p>
      </div>
      <div class="hero-actions">
        <a class="button" href="{{ '/services/' | relative_url }}">View services</a>
        <a class="button button-outline" href="{{ site.data.site.promptbase_url }}" target="_blank" rel="noopener">Hire via PromptBase</a>
      </div>
    </div>
  </div>
</section>

<section class="section">
  <div class="container">
    <div class="section-heading">
      <div>
        <p class="eyebrow">FAQ</p>
        <h2>Quick answers before you ship this live.</h2>
      </div>
      <p>Keep the site simple, focused, and English-first for commercial SEO. Vietnamese can still live in your workflow, but buyers should land on clean sales pages.</p>
    </div>
    <div class="faq-list">
      {% for item in site.data.site.faq %}
      <div class="faq-item card">
        <h3>{{ item.q }}</h3>
        <p>{{ item.a }}</p>
      </div>
      {% endfor %}
    </div>
  </div>
</section>
