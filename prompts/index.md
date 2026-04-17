---
layout: default
title: "Prompts | AutoPrompt Shop"
description: "Browse AI prompts for education, ecommerce, coding, and more."
permalink: /prompts/
---

<style>
  .prompts-wrap{
    width:min(1180px, calc(100% - 32px));
    margin:28px auto 48px;
  }

  .prompts-hero{
    background:linear-gradient(180deg, rgba(18,24,49,0.96) 0%, rgba(10,16,36,0.96) 100%);
    border:1px solid rgba(255,255,255,0.08);
    border-radius:24px;
    padding:32px;
    box-shadow:0 18px 50px rgba(0,0,0,0.18);
  }

  .prompts-eyebrow{
    margin:0 0 12px;
    font-size:13px;
    font-weight:800;
    letter-spacing:.08em;
    text-transform:uppercase;
    color:#ffa15d;
  }

  .prompts-title{
    margin:0;
    font-size:clamp(1.9rem, 3vw, 3rem);
    line-height:1.1;
    letter-spacing:-0.04em;
    color:#fff;
    max-width:14ch;
  }

  .prompts-lead{
    margin:16px 0 0;
    max-width:64ch;
    font-size:1.04rem;
    line-height:1.75;
    color:rgba(231,236,255,0.86);
  }

  .prompts-filters{
    display:flex;
    flex-wrap:wrap;
    gap:12px;
    margin:22px 0 0;
  }

  .prompts-filter{
    border:1px solid rgba(255,255,255,0.1);
    background:rgba(255,255,255,0.02);
    color:#dfe6ff;
    border-radius:999px;
    padding:10px 16px;
    font-weight:700;
    cursor:pointer;
    transition:.2s ease;
  }

  .prompts-filter:hover{
    border-color:rgba(255,161,93,0.55);
    color:#fff;
  }

  .prompts-filter.is-active{
    background:#f59a5d;
    color:#10162d;
    border-color:#f59a5d;
  }

  .prompts-grid{
    display:grid;
    grid-template-columns:repeat(3, minmax(0,1fr));
    gap:22px;
    margin-top:26px;
  }

  .prompt-card{
    overflow:hidden;
    background:linear-gradient(180deg, rgba(18,24,49,0.96) 0%, rgba(10,16,36,0.96) 100%);
    border:1px solid rgba(255,255,255,0.08);
    border-radius:24px;
    box-shadow:0 18px 50px rgba(0,0,0,0.16);
  }

  .prompt-card-media{
    display:block;
    aspect-ratio:16/10;
    background:linear-gradient(135deg, rgba(245,154,93,0.16) 0%, rgba(105,139,255,0.16) 100%);
    overflow:hidden;
  }

  .prompt-card-media img{
    width:100%;
    height:100%;
    object-fit:cover;
    display:block;
  }

  .prompt-card-placeholder{
    display:flex;
    align-items:flex-end;
    aspect-ratio:16/10;
    padding:18px;
    background:linear-gradient(135deg, rgba(245,154,93,0.16) 0%, rgba(105,139,255,0.16) 100%);
  }

  .prompt-card-placeholder span{
    display:inline-flex;
    align-items:center;
    padding:10px 14px;
    border-radius:999px;
    background:#10162d;
    color:#fff;
    font-size:.92rem;
    font-weight:800;
  }

  .prompt-card-body{
    padding:22px;
  }

  .prompt-card-tags{
    display:flex;
    flex-wrap:wrap;
    gap:10px;
    margin-bottom:14px;
  }

  .prompt-card-tag{
    display:inline-flex;
    align-items:center;
    padding:8px 12px;
    border-radius:999px;
    border:1px solid rgba(255,255,255,0.08);
    background:rgba(255,255,255,0.03);
    color:#cfd8ff;
    font-size:.9rem;
    font-weight:700;
  }

  .prompt-card-title{
    margin:0;
    font-size:1.26rem;
    line-height:1.3;
    letter-spacing:-0.02em;
  }

  .prompt-card-title a{
    color:#fff;
    text-decoration:none;
  }

  .prompt-card-title a:hover{
    color:#ffa15d;
  }

  .prompt-card-text{
    margin:14px 0 0;
    color:rgba(231,236,255,0.84);
    line-height:1.72;
    font-size:1rem;
  }

  .prompt-card-meta{
    display:flex;
    justify-content:space-between;
    align-items:center;
    gap:12px;
    margin-top:16px;
    color:rgba(231,236,255,0.78);
    font-size:.95rem;
  }

  .prompt-card-meta strong{
    color:#fff;
    font-size:1rem;
  }

  .prompt-card-actions{
    display:flex;
    flex-wrap:wrap;
    gap:12px;
    margin-top:18px;
  }

  .prompt-empty{
    display:none;
    margin-top:20px;
    padding:18px 20px;
    border:1px solid rgba(255,255,255,0.08);
    border-radius:18px;
    background:rgba(255,255,255,0.03);
    color:rgba(231,236,255,0.82);
  }

  @media (max-width: 1080px){
    .prompts-grid{
      grid-template-columns:repeat(2, minmax(0,1fr));
    }
  }

  @media (max-width: 720px){
    .prompts-wrap{
      width:min(100% - 20px, 1180px);
    }

    .prompts-hero{
      padding:24px;
    }

    .prompts-grid{
      grid-template-columns:1fr;
    }

    .prompts-title{
      max-width:100%;
      font-size:clamp(1.7rem, 8vw, 2.4rem);
    }

    .prompts-lead{
      font-size:1rem;
    }
  }
</style>

<div class="prompts-wrap">
  <section class="prompts-hero">
    <p class="prompts-eyebrow">
      <span class="lang-en">Prompt catalog</span>
      <span class="lang-vi">Danh mục prompt</span>
    </p>

    <h1 class="prompts-title">
      <span class="lang-en">Browse practical prompt products.</span>
      <span class="lang-vi">Khám phá các sản phẩm prompt thực chiến.</span>
    </h1>

    <p class="prompts-lead">
      <span class="lang-en">
        Explore prompt products built for education, ecommerce, coding, and practical digital workflows. Click into any product to read details or go straight to PromptBase.
      </span>
      <span class="lang-vi">
        Khám phá các sản phẩm prompt dành cho giáo dục, thương mại điện tử, lập trình và các quy trình làm việc số thực tế. Bấm vào từng sản phẩm để xem chi tiết hoặc đi thẳng tới PromptBase.
      </span>
    </p>

    <div class="prompts-filters">
      <button class="prompts-filter is-active" type="button" data-filter="all">All</button>
      <button class="prompts-filter" type="button" data-filter="education">Education</button>
      <button class="prompts-filter" type="button" data-filter="ecommerce">Ecommerce</button>
      <button class="prompts-filter" type="button" data-filter="coding">Coding</button>
    </div>
  </section>

  <div class="prompts-grid" id="promptsGrid">
    {% assign sorted_prompts = site.prompts | sort: 'weight' %}
    {% for prompt in sorted_prompts %}
      <article class="prompt-card" data-filter-card="{{ prompt.filter | downcase }}">
        {% assign slug = prompt.slug %}
{% assign png_path = '/assets/img/' | append: slug | append: '.png' %}
{% assign jpg_path = '/assets/img/' | append: slug | append: '.jpg' %}
{% assign jpeg_path = '/assets/img/' | append: slug | append: '.jpeg' %}
{% assign webp_path = '/assets/img/' | append: slug | append: '.webp' %}

{% assign prompt_image = site.static_files | where: 'path', png_path | first %}
{% unless prompt_image %}
  {% assign prompt_image = site.static_files | where: 'path', jpg_path | first %}
{% endunless %}
{% unless prompt_image %}
  {% assign prompt_image = site.static_files | where: 'path', jpeg_path | first %}
{% endunless %}
{% unless prompt_image %}
  {% assign prompt_image = site.static_files | where: 'path', webp_path | first %}
{% endunless %}

{% if prompt_image %}
  <a class="prompt-card-media" href="{{ prompt.url | relative_url }}">
    <img src="{{ prompt_image.path | relative_url }}" alt="{{ prompt.title }}" loading="lazy">
  </a>
{% else %}
  <div class="prompt-card-placeholder">
    <span>{{ prompt.model }}</span>
  </div>
{% endif %}

        <div class="prompt-card-body">
          <div class="prompt-card-tags">
            {% if prompt.category %}
              <span class="prompt-card-tag">{{ prompt.category }}</span>
            {% endif %}
            {% if prompt.best_for %}
              <span class="prompt-card-tag">{{ prompt.best_for }}</span>
            {% endif %}
          </div>

          <h2 class="prompt-card-title">
            <a href="{{ prompt.url | relative_url }}">{{ prompt.title }}</a>
          </h2>

          {% if prompt.description %}
            <p class="prompt-card-text">{{ prompt.description }}</p>
          {% endif %}

          <div class="prompt-card-meta">
            {% if prompt.model %}
              <span>{{ prompt.model }}</span>
            {% else %}
              <span>AI Prompt</span>
            {% endif %}

            {% if prompt.price %}
              <strong>${{ prompt.price }}</strong>
            {% endif %}
          </div>

          <div class="prompt-card-actions">
            <a class="button button-outline button-small" href="{{ prompt.url | relative_url }}">
              <span class="lang-en">View details</span>
              <span class="lang-vi">Xem chi tiết</span>
            </a>

            {% if prompt.promptbase_url %}
              <a class="button button-small" href="{{ prompt.promptbase_url }}" target="_blank" rel="noopener noreferrer">
                <span class="lang-en">Buy on PromptBase</span>
                <span class="lang-vi">Mua trên PromptBase</span>
              </a>
            {% endif %}
          </div>
        </div>
      </article>
    {% endfor %}
  </div>

  <div class="prompt-empty" id="promptEmptyState">
    <span class="lang-en">No prompts found in this category yet.</span>
    <span class="lang-vi">Chưa có prompt nào trong nhóm này.</span>
  </div>
</div>

<script>
  (function () {
    const filterButtons = document.querySelectorAll("[data-filter]");
    const cards = document.querySelectorAll("[data-filter-card]");
    const emptyState = document.getElementById("promptEmptyState");

    function applyFilter(filter) {
      let visibleCount = 0;

      cards.forEach((card) => {
        const cardFilter = (card.getAttribute("data-filter-card") || "").toLowerCase();
        const show = filter === "all" || cardFilter === filter;

        card.style.display = show ? "" : "none";
        if (show) visibleCount += 1;
      });

      filterButtons.forEach((button) => {
        button.classList.toggle("is-active", button.getAttribute("data-filter") === filter);
      });

      if (emptyState) {
        emptyState.style.display = visibleCount === 0 ? "block" : "none";
      }
    }

    filterButtons.forEach((button) => {
      button.addEventListener("click", function () {
        applyFilter(this.getAttribute("data-filter"));
      });
    });

    applyFilter("all");
  })();
</script>
