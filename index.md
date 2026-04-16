---
layout: default
title: "Autoprompt Shop | AI Prompts for Education, Content & E-commerce"
description: "Structured AI prompts for education, content creation, research, and e-commerce."
seo_title: "Autoprompt Shop | Practical AI Prompts"
image: /assets/img/og-cover.svg
permalink: /
---

<style>
  .home-wrap{
    width:min(1180px, calc(100% - 32px));
    margin:28px auto 40px;
  }

  .home-grid{
    display:grid;
    grid-template-columns:minmax(0,1.35fr) minmax(320px,0.78fr);
    gap:24px;
    align-items:stretch;
  }

  .home-card,
  .home-panel,
  .home-feature,
  .home-post,
  .home-cta{
    background:linear-gradient(180deg, rgba(18,24,49,0.96) 0%, rgba(10,16,36,0.96) 100%);
    border:1px solid rgba(255,255,255,0.08);
    border-radius:24px;
    box-shadow:0 18px 50px rgba(0,0,0,0.18);
  }

  .home-hero{ padding:40px; }
  .home-panel{
    padding:30px;
    background:
      radial-gradient(circle at top right, rgba(255,161,93,0.12), transparent 36%),
      linear-gradient(180deg, rgba(18,24,49,0.96) 0%, rgba(10,16,36,0.96) 100%);
  }

  .home-eyebrow{
    margin:0 0 14px;
    font-size:13px;
    font-weight:800;
    letter-spacing:.08em;
    text-transform:uppercase;
    color:#ffa15d;
  }

  .home-title{
    margin:0;
    max-width:11.5ch;
    font-size:clamp(2rem, 3.5vw, 3.35rem);
    line-height:1.07;
    letter-spacing:-0.045em;
    color:#f7f8ff;
  }

  .home-subtitle{
    margin:18px 0 0;
    max-width:61ch;
    font-size:1.03rem;
    line-height:1.78;
    color:rgba(231,236,255,0.86);
  }

  .home-actions{
    display:flex;
    flex-wrap:wrap;
    gap:14px;
    margin-top:24px;
  }

  .home-meta{
    display:flex;
    flex-wrap:wrap;
    gap:12px;
    margin-top:22px;
  }

  .home-pill{
    display:inline-flex;
    align-items:center;
    gap:10px;
    padding:10px 14px;
    border-radius:999px;
    border:1px solid rgba(255,255,255,0.08);
    background:rgba(255,255,255,0.03);
    color:rgba(231,236,255,0.84);
    font-size:.95rem;
  }

  .home-pill strong{ color:#fff; }

  .home-side-title{
    margin:0;
    font-size:1.5rem;
    line-height:1.24;
    letter-spacing:-0.03em;
    color:#fff;
  }

  .home-check{
    list-style:none;
    padding:0;
    margin:20px 0 0;
    display:grid;
    gap:14px;
  }

  .home-check li{
    position:relative;
    padding-left:26px;
    line-height:1.7;
    color:rgba(231,236,255,0.88);
  }

  .home-check li::before{
    content:"✓";
    position:absolute;
    left:0;
    top:0;
    color:#7fe3a1;
    font-weight:800;
  }

  .home-section{ margin-top:30px; }

  .home-section-head{
    display:flex;
    justify-content:space-between;
    align-items:flex-end;
    gap:18px;
    margin-bottom:16px;
  }

  .home-section-title{
    margin:0;
    font-size:clamp(1.45rem, 2vw, 1.9rem);
    line-height:1.2;
    letter-spacing:-0.03em;
    color:#fff;
  }

  .home-link{
    color:#ffa15d;
    font-weight:700;
    text-decoration:none;
    white-space:nowrap;
  }
  .home-link:hover{ text-decoration:underline; }

  .home-cards{
    display:grid;
    grid-template-columns:repeat(3, minmax(0,1fr));
    gap:22px;
  }

  .home-product{ overflow:hidden; }

  .home-product__media{
    display:block;
    aspect-ratio:16/10;
    background:rgba(255,255,255,0.03);
  }

  .home-product__media img{
    width:100%;
    height:100%;
    object-fit:cover;
    display:block;
  }

  .home-product__body{ padding:22px; }

  .home-kicker{
    margin:0 0 10px;
    font-size:12px;
    font-weight:800;
    letter-spacing:.08em;
    text-transform:uppercase;
    color:#ffa15d;
  }

  .home-product__title{
    margin:0;
    font-size:1.16rem;
    line-height:1.35;
  }

  .home-product__title a{
    text-decoration:none;
    color:#fff;
  }
  .home-product__title a:hover{ color:#ffa15d; }

  .home-text{
    margin:12px 0 0;
    color:rgba(231,236,255,0.82);
    line-height:1.72;
    font-size:.98rem;
  }

  .home-meta-row{
    display:flex;
    justify-content:space-between;
    gap:12px;
    margin-top:16px;
    color:rgba(231,236,255,0.76);
    font-size:.94rem;
  }

  .home-meta-row strong{ color:#fff; }

  .home-card-actions{
    display:flex;
    flex-wrap:wrap;
    gap:12px;
    margin-top:18px;
  }

  .home-features{
    display:grid;
    grid-template-columns:repeat(3, minmax(0,1fr));
    gap:22px;
  }

  .home-feature{ padding:24px; }

  .home-feature h3{
    margin:0;
    font-size:1.14rem;
    color:#fff;
  }

  .home-feature p{
    margin:12px 0 0;
    line-height:1.72;
    color:rgba(231,236,255,0.84);
    font-size:.98rem;
  }

  .home-service{
    display:grid;
    grid-template-columns:minmax(0,1.15fr) minmax(280px,0.8fr);
    gap:22px;
    align-items:stretch;
  }

  .home-service-copy{ padding:8px 4px 0 0; }
  .home-service-box{ padding:28px; }

  .home-price{
    margin:10px 0 14px;
    font-size:2rem;
    font-weight:800;
    letter-spacing:-0.04em;
    color:#fff;
  }

  .home-post{ padding:22px; }
  .home-cta{ padding:36px; text-align:center; }

  @media (max-width: 1080px){
    .home-cards,
    .home-features{ grid-template-columns:repeat(2, minmax(0,1fr)); }
  }

  @media (max-width: 900px){
    .home-grid,
    .home-service{ grid-template-columns:1fr; }

    .home-hero{ padding:30px; }
    .home-panel{ padding:28px; }

    .home-title{
      max-width:100%;
      font-size:clamp(1.9rem, 7vw, 2.8rem);
    }

    .home-section-head{
      flex-direction:column;
      align-items:flex-start;
    }
  }

  @media (max-width: 680px){
    .home-wrap{ width:min(100% - 20px, 1180px); }

    .home-cards,
    .home-features{ grid-template-columns:1fr; }

    .home-hero,
    .home-panel,
    .home-service-box,
    .home-cta{ padding:22px; }

    .home-subtitle{ font-size:1rem; }

    .home-pill{
      width:100%;
      justify-content:flex-start;
    }
  }
</style>

{% assign featured_prompts = site.prompts | where: 'featured', true | sort: 'weight' %}

<div class="home-wrap">
  <section class="home-grid">
    <div class="home-card home-hero">
      <p class="home-eyebrow">
        <span class="lang-en">Structured AI prompt systems</span>
        <span class="lang-vi">Hệ thống prompt AI có cấu trúc</span>
      </p>

      <h1 class="home-title">
        <span class="lang-en">AI prompts for real work, not random text.</span>
        <span class="lang-vi">Prompt AI để làm việc thật, không phải vài câu chữ ngẫu nhiên.</span>
      </h1>

      <p class="home-subtitle">
        <span class="lang-en">I build practical prompt systems for education, content creation, research, and e-commerce. The goal is simple: save time, improve output quality, and help you move faster with AI.</span>
        <span class="lang-vi">Tôi xây dựng các hệ thống prompt thực chiến cho giáo dục, sáng tạo nội dung, nghiên cứu và thương mại điện tử. Mục tiêu rất rõ: tiết kiệm thời gian, nâng chất lượng đầu ra và giúp bạn đi nhanh hơn với AI.</span>
      </p>

      <div class="home-actions">
        <a class="button" href="{{ site.data.site.promptbase_url }}" target="_blank" rel="noopener noreferrer">
          <span class="lang-en">Visit PromptBase Store</span>
          <span class="lang-vi">Xem cửa hàng PromptBase</span>
        </a>

        <a class="button button-outline" href="{{ '/services/' | relative_url }}">
          <span class="lang-en">Hire Me for Custom Prompts</span>
          <span class="lang-vi">Thuê tôi làm prompt theo yêu cầu</span>
        </a>
      </div>

      <div class="home-meta">
        <span class="home-pill">
          <strong>EN / VI</strong>
          <span class="lang-en">Bilingual support</span>
          <span class="lang-vi">Hỗ trợ song ngữ</span>
        </span>

        <span class="home-pill">
          <strong>Edu + Ecom</strong>
          <span class="lang-en">Practical use cases</span>
          <span class="lang-vi">Ứng dụng thực tế</span>
        </span>

        <span class="home-pill">
          <strong>$25/hr</strong>
          <span class="lang-en">Custom consulting</span>
          <span class="lang-vi">Tư vấn theo giờ</span>
        </span>
      </div>
    </div>

    <aside class="home-panel">
      <p class="home-eyebrow">
        <span class="lang-en">What you get here</span>
        <span class="lang-vi">Những gì bạn nhận được ở đây</span>
      </p>

      <h2 class="home-side-title">
        <span class="lang-en">Cleaner prompts. Better output. Less trial-and-error.</span>
        <span class="lang-vi">Prompt sạch hơn. Đầu ra tốt hơn. Ít thử sai hơn.</span>
      </h2>

      <ul class="home-check">
        <li>
          <span class="lang-en">Ready-to-use prompt packs for teachers, creators, and online sellers</span>
          <span class="lang-vi">Bộ prompt sẵn dùng cho giáo viên, người làm nội dung và người bán hàng online</span>
        </li>
        <li>
          <span class="lang-en">Custom prompt systems tailored to your niche or workflow</span>
          <span class="lang-vi">Hệ thống prompt thiết kế riêng theo ngách hoặc quy trình công việc</span>
        </li>
        <li>
          <span class="lang-en">Bilingual support for English and Vietnamese users</span>
          <span class="lang-vi">Hỗ trợ song ngữ cho cả người dùng tiếng Anh và tiếng Việt</span>
        </li>
        <li>
          <span class="lang-en">Prompt pages designed to support conversion, not just fill space</span>
          <span class="lang-vi">Trang prompt được thiết kế để hỗ trợ chuyển đổi, không phải để lấp chỗ</span>
        </li>
      </ul>

      <div class="home-actions">
        <a class="button" href="mailto:{{ site.data.site.email }}?subject=Custom%20Prompt%20Inquiry&body=Hello%20Mr.%20Dinh%2C%0A%0AI%20want%20to%20ask%20about%20your%20custom%20prompt%20service.%0A">
          <span class="lang-en">Email Me</span>
          <span class="lang-vi">Gửi email cho tôi</span>
        </a>
      </div>
    </aside>
  </section>

  <section class="home-section">
    <div class="home-section-head">
      <div>
        <p class="home-eyebrow">
          <span class="lang-en">Featured prompts</span>
          <span class="lang-vi">Prompt nổi bật</span>
        </p>
        <h2 class="home-section-title">
          <span class="lang-en">Prompt products built for practical outcomes.</span>
          <span class="lang-vi">Sản phẩm prompt được xây để tạo ra kết quả thực tế.</span>
        </h2>
      </div>

      <a class="home-link" href="{{ '/prompts/' | relative_url }}">
        <span class="lang-en">Browse all prompts</span>
        <span class="lang-vi">Xem tất cả prompt</span>
      </a>
    </div>

    <div class="home-cards">
      {% for prompt in featured_prompts limit: 3 %}
        <article class="home-card home-product">
          {% if prompt.image %}
            <a class="home-product__media" href="{{ prompt.url | relative_url }}">
              <img src="{{ prompt.image | relative_url }}" alt="{{ prompt.title }}">
            </a>
          {% endif %}

          <div class="home-product__body">
            {% if prompt.model %}
              <p class="home-kicker">{{ prompt.model }}</p>
            {% endif %}

            <h3 class="home-product__title">
              <a href="{{ prompt.url | relative_url }}">{{ prompt.title }}</a>
            </h3>

            {% if prompt.description %}
              <p class="home-text">{{ prompt.description }}</p>
            {% endif %}

            <div class="home-meta-row">
              {% if prompt.category %}<span>{{ prompt.category }}</span>{% endif %}
              {% if prompt.price %}<strong>${{ prompt.price }}</strong>{% endif %}
            </div>

            <div class="home-card-actions">
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
  </section>

  <section class="home-section">
    <div class="home-section-head">
      <div>
        <p class="home-eyebrow">
          <span class="lang-en">Why work with me</span>
          <span class="lang-vi">Vì sao nên làm việc với tôi</span>
        </p>
        <h2 class="home-section-title">
          <span class="lang-en">Good prompts are systems, not lucky guesses.</span>
          <span class="lang-vi">Prompt tốt là một hệ thống, không phải vài cú đoán may rủi.</span>
        </h2>
      </div>
    </div>

    <div class="home-features">
      <article class="home-feature">
        <h3>
          <span class="lang-en">Clear structure</span>
          <span class="lang-vi">Cấu trúc rõ ràng</span>
        </h3>
        <p>
          <span class="lang-en">Each prompt is built with logic, variables, and reusable flow so the output stays more stable.</span>
          <span class="lang-vi">Mỗi prompt được xây bằng logic, biến số và luồng tái sử dụng để đầu ra ổn định hơn.</span>
        </p>
      </article>

      <article class="home-feature">
        <h3>
          <span class="lang-en">Real-world use</span>
          <span class="lang-vi">Ứng dụng thực tế</span>
        </h3>
        <p>
          <span class="lang-en">The focus is on actual work: teaching, writing, research, selling, and digital workflow support.</span>
          <span class="lang-vi">Trọng tâm là công việc thật: dạy học, viết lách, nghiên cứu, bán hàng và hỗ trợ workflow số.</span>
        </p>
      </article>

      <article class="home-feature">
        <h3>
          <span class="lang-en">Faster results</span>
          <span class="lang-vi">Ra kết quả nhanh hơn</span>
        </h3>
        <p>
          <span class="lang-en">You do not need to waste hours testing weak prompts from scratch every single time.</span>
          <span class="lang-vi">Bạn không cần mất hàng giờ test những prompt yếu từ đầu trong mỗi lần làm việc.</span>
        </p>
      </article>
    </div>
  </section>

  <section class="home-section">
    <div class="home-service">
      <div class="home-service-copy">
        <p class="home-eyebrow">
          <span class="lang-en">Custom prompt service</span>
          <span class="lang-vi">Dịch vụ prompt theo yêu cầu</span>
        </p>

        <h2 class="home-section-title">
          <span class="lang-en">Need a prompt system designed for your exact workflow or niche?</span>
          <span class="lang-vi">Cần một hệ thống prompt thiết kế riêng cho đúng workflow hoặc ngách của bạn?</span>
        </h2>

        <p class="home-subtitle" style="margin-top:14px;">
          <span class="lang-en">I also take one-off prompt builds, workflow audits, bilingual prompt assets, and niche prompt systems for education and online business.</span>
          <span class="lang-vi">Tôi cũng nhận làm prompt riêng lẻ, audit workflow, tài sản prompt song ngữ và hệ thống prompt theo ngách cho giáo dục và kinh doanh online.</span>
        </p>
      </div>

      <div class="home-card home-service-box">
        <p class="home-eyebrow">
          <span class="lang-en">Rate</span>
          <span class="lang-vi">Mức phí</span>
        </p>

        <div class="home-price">{{ site.data.site.hourly_rate }}</div>

        <p class="home-text" style="margin-top:0;">
          <span class="lang-en">Best for one-off builds, niche prompt systems, and structured consulting.</span>
          <span class="lang-vi">Phù hợp cho các job riêng lẻ, hệ thống prompt theo ngách và tư vấn có cấu trúc.</span>
        </p>

        <div class="home-card-actions">
          <a class="button" href="{{ '/services/' | relative_url }}">
            <span class="lang-en">View Service</span>
            <span class="lang-vi">Xem dịch vụ</span>
          </a>

          <a class="button button-outline" href="mailto:{{ site.data.site.email }}?subject=Prompt%20Service%20Inquiry&body=Hello%20Mr.%20Dinh%2C%0A%0AI%20want%20to%20ask%20about%20your%20prompt%20service.%0A">
            <span class="lang-en">Email Me</span>
            <span class="lang-vi">Email cho tôi</span>
          </a>
        </div>
      </div>
    </div>
  </section>

  <section class="home-section">
    <div class="home-section-head">
      <div>
        <p class="home-eyebrow">
          <span class="lang-en">Latest articles</span>
          <span class="lang-vi">Bài viết mới</span>
        </p>
        <h2 class="home-section-title">
          <span class="lang-en">Content that educates buyers and supports search traffic.</span>
          <span class="lang-vi">Nội dung giúp giáo dục khách hàng và hỗ trợ traffic tìm kiếm.</span>
        </h2>
      </div>

      <a class="home-link" href="{{ '/blog/' | relative_url }}">
        <span class="lang-en">Visit the blog</span>
        <span class="lang-vi">Xem blog</span>
      </a>
    </div>

    <div class="home-cards">
      {% for post in site.posts limit:3 %}
        <article class="home-post">
          <p class="home-kicker">{{ post.date | date: '%d/%m/%Y' }}</p>

          <h3 class="home-product__title">
            <a href="{{ post.url | relative_url }}">{{ post.title }}</a>
          </h3>

          {% if post.description %}
            <p class="home-text">{{ post.description }}</p>
          {% elsif post.excerpt %}
            <p class="home-text">{{ post.excerpt | strip_html | truncate: 150 }}</p>
          {% endif %}

          <div class="home-card-actions">
            <a class="button button-outline button-small" href="{{ post.url | relative_url }}">
              <span class="lang-en">Read article</span>
              <span class="lang-vi">Đọc bài viết</span>
            </a>
          </div>
        </article>
      {% endfor %}
    </div>
  </section>

  <section class="home-section">
    <div class="home-cta">
      <p class="home-eyebrow">
        <span class="lang-en">Ready to move faster?</span>
        <span class="lang-vi">Sẵn sàng làm nhanh hơn chưa?</span>
      </p>

      <h2 class="home-section-title" style="max-width:18ch; margin:0 auto;">
        <span class="lang-en">Start with a ready-made prompt, or email me for a custom build.</span>
        <span class="lang-vi">Bắt đầu với một prompt có sẵn, hoặc email cho tôi để đặt bản thiết kế riêng.</span>
      </h2>

      <p class="home-subtitle" style="max-width:62ch; margin:16px auto 0;">
        <span class="lang-en">A stronger prompt system can save hours, improve output quality, and help you get to the result faster.</span>
        <span class="lang-vi">Một hệ thống prompt tốt hơn có thể giúp tiết kiệm hàng giờ, nâng chất lượng đầu ra và đưa bạn tới kết quả nhanh hơn.</span>
      </p>

      <div class="home-actions" style="justify-content:center;">
        <a class="button" href="{{ site.data.site.promptbase_url }}" target="_blank" rel="noopener noreferrer">
          <span class="lang-en">Shop Prompts Now</span>
          <span class="lang-vi">Mua prompt ngay</span>
        </a>

        <a class="button button-outline" href="mailto:{{ site.data.site.email }}?subject=Custom%20Prompt%20Request&body=Hello%20Mr.%20Dinh%2C%0A%0AI%20want%20a%20custom%20prompt%20for%20my%20work.%0A">
          <span class="lang-en">Request Custom Prompt</span>
          <span class="lang-vi">Yêu cầu prompt riêng</span>
        </a>
      </div>
    </div>
  </section>
</div>
