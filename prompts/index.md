---
layout: default
title: Prompt Catalog
description: Browse premium AI prompts for PromptBase, education workflows, ecommerce content, and AI coding systems.
seo_title: Prompt Catalog | AutoPrompt Shop
permalink: /prompts/
---

<section class="page-hero">
  <div class="container">
    <p class="eyebrow">Prompt catalog</p>
    <h1>Every prompt gets a proper landing page.</h1>
    <p class="lead">Filter by category, click into the product page, then send hot buyers to PromptBase.</p>
  </div>
</section>

<section class="section">
  <div class="container">
    <div class="filter-bar">
      <button class="filter-chip active" data-filter-chip="all">All</button>
      <button class="filter-chip" data-filter-chip="education">Education</button>
      <button class="filter-chip" data-filter-chip="ecommerce">Ecommerce</button>
      <button class="filter-chip" data-filter-chip="coding">Coding</button>
    </div>

    <div class="grid-3">
      {% assign prompt_list = site.prompts | sort: 'weight' %}
      {% for prompt in prompt_list %}
      <article class="prompt-card card" data-filter-card="{{ prompt.filter }}">
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
