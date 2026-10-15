---
layout: default
title: "Prompts | AutoPrompt Shop"
description: "Browse AI prompts for education, ecommerce, coding, and more."
permalink: /prompts/
---

<style>
  .prompts-wrap{
    width:min(1200px, calc(100% - 36px));
    margin:36px auto 56px;
  }

  .prompts-hero{
    background:
      radial-gradient(circle at top left, rgba(255,133,58,0.14), transparent 50%),
      radial-gradient(circle at top right, rgba(99,102,241,0.12), transparent 50%),
      linear-gradient(180deg, rgba(20,26,50,0.78) 0%, rgba(12,16,34,0.75) 100%);
    backdrop-filter:blur(20px) saturate(180%);
    -webkit-backdrop-filter:blur(20px) saturate(180%);
    border:1px solid rgba(255,255,255,0.08);
    border-radius:24px;
    padding:40px;
    box-shadow:0 12px 35px -5px rgba(0,0,0,0.5), inset 0 1px 0 rgba(255,255,255,0.1);
  }

  .prompts-eyebrow{
    display:inline-flex;
    align-items:center;
    gap:8px;
    margin:0 0 16px;
    font-size:12.5px;
    font-weight:800;
    letter-spacing:.1em;
    text-transform:uppercase;
    color:#ffa466;
    padding:6px 14px;
    border-radius:999px;
    background:rgba(255,133,58,0.1);
    border:1px solid rgba(255,133,58,0.28);
    box-shadow:0 0 16px rgba(255,133,58,0.12);
  }

  .prompts-eyebrow::before{
    content:"";
    display:inline-block;
    width:7px;
    height:7px;
    border-radius:50%;
    background:#ff853a;
    box-shadow:0 0 8px #ff853a;
  }

  .prompts-title{
    margin:0;
    font-size:clamp(2rem, 3.2vw, 3.1rem);
    line-height:1.1;
    letter-spacing:-0.04em;
    background:linear-gradient(135deg, #ffffff 30%, #e2e8f0 70%, #94a3b8 100%);
    -webkit-background-clip:text;
    -webkit-text-fill-color:transparent;
    max-width:14ch;
  }

  .prompts-lead{
    margin:18px 0 0;
    max-width:64ch;
    font-size:1.05rem;
    line-height:1.75;
    color:rgba(231,236,255,0.88);
  }

  .prompts-filters{
    display:flex;
    flex-wrap:wrap;
    gap:12px;
    margin:26px 0 0;
  }

  .prompts-filter{
    border:1px solid rgba(255,255,255,0.1);
    background:rgba(255,255,255,0.04);
    backdrop-filter:blur(10px);
    color:#dfe6ff;
    border-radius:999px;
    padding:10px 18px;
    font-weight:700;
    font-size:14px;
    cursor:pointer;
    transition:all 0.25s cubic-bezier(0.16, 1, 0.3, 1);
  }

  .prompts-filter:hover{
    border-color:rgba(255,133,58,0.5);
    background:rgba(255,133,58,0.1);
    color:#fff;
    box-shadow:0 0 16px rgba(255,133,58,0.18);
  }

  .prompts-filter.is-active{
    background:linear-gradient(135deg, #ff944d 0%, #ff5e36 100%);
    color:#0b0f1a;
    border-color:transparent;
    box-shadow:0 4px 18px rgba(255,110,50,0.45);
  }

  .prompts-grid{
    display:grid;
    grid-template-columns:repeat(3, minmax(0,1fr));
    gap:26px;
    margin-top:30px;
  }

  .prompt-card{
    overflow:hidden;
    background:rgba(18, 24, 46, 0.65);
    backdrop-filter:blur(20px) saturate(180%);
    -webkit-backdrop-filter:blur(20px) saturate(180%);
    border:1px solid rgba(255,255,255,0.08);
    border-radius:24px;
    box-shadow:0 12px 35px -5px rgba(0,0,0,0.5), inset 0 1px 0 rgba(255,255,255,0.1);
    position:relative;
    transition:transform 0.35s cubic-bezier(0.16, 1, 0.3, 1),
                box-shadow 0.35s cubic-bezier(0.16, 1, 0.3, 1),
                border-color 0.35s cubic-bezier(0.16, 1, 0.3, 1),
                background 0.35s cubic-bezier(0.16, 1, 0.3, 1);
  }

  .prompt-card:hover{
    transform:translateY(-6px) scale(1.006);
    background:rgba(26, 35, 66, 0.82);
    border-color:rgba(255,140,66,0.45);
    box-shadow:0 25px 50px -10px rgba(0,0,0,0.7), 0 0 30px rgba(255,133,58,0.2), inset 0 1px 0 rgba(255,255,255,0.2);
  }

  .prompt-card-media{
    display:block;
    aspect-ratio:16/10;
    background:rgba(255,255,255,0.03);
    overflow:hidden;
    position:relative;
  }

  .prompt-card-media img{
    width:100%;
    height:100%;
    object-fit:cover;
    display:block;
    transition:transform 0.5s cubic-bezier(0.16, 1, 0.3, 1);
  }

  .prompt-card:hover .prompt-card-media img{
    transform:scale(1.06);
  }

  .prompt-card-placeholder{
    display:flex;
    align-items:flex-end;
    aspect-ratio:16/10;
    padding:20px;
    background:linear-gradient(135deg, rgba(255,133,58,0.2) 0%, rgba(99,102,241,0.2) 100%);
  }

  .prompt-card-placeholder span{
    display:inline-flex;
    align-items:center;
    padding:8px 14px;
    border-radius:999px;
    background:rgba(9,12,21,0.85);
    border:1px solid rgba(255,255,255,0.15);
    color:#fff;
    font-size:.92rem;
    font-weight:800;
    backdrop-filter:blur(8px);
  }

  .prompt-card-body{
    padding:24px;
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
    padding:6px 12px;
    border-radius:999px;
    border:1px solid rgba(255,255,255,0.1);
    background:rgba(255,255,255,0.04);
    color:#cfd8ff;
    font-size:.86rem;
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
    transition:color 0.2s ease;
  }

  .prompt-card-title a:hover{
    color:#ff9e64;
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
    margin-top:18px;
    color:rgba(231,236,255,0.78);
    font-size:.95rem;
  }

  .prompt-card-meta strong{
    background:linear-gradient(135deg, #ff944d 0%, #ff5e36 100%);
    -webkit-background-clip:text;
    -webkit-text-fill-color:transparent;
    font-size:1.2rem;
    font-weight:800;
  }

  .prompt-card-actions{
    display:flex;
    flex-wrap:wrap;
    gap:12px;
    margin-top:20px;
  }

  .prompt-empty{
    display:none;
    margin-top:24px;
    padding:22px 26px;
    border:1px dashed rgba(255,255,255,0.15);
    border-radius:20px;
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
      width:min(100% - 24px, 1200px);
    }

    .prompts-hero{
      padding:26px;
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
