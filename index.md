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
    width:min(1200px, calc(100% - 36px));
    margin:36px auto 56px;
  }

  .home-grid{
    display:grid;
    grid-template-columns:minmax(0,1.35fr) minmax(320px,0.78fr);
    gap:28px;
    align-items:stretch;
  }

  .home-card,
  .home-panel,
  .home-feature,
  .home-post,
  .home-cta{
    background:rgba(18, 24, 46, 0.65);
    backdrop-filter:blur(20px) saturate(180%);
    -webkit-backdrop-filter:blur(20px) saturate(180%);
    border:1px solid rgba(255,255,255,0.08);
    border-radius:24px;
    box-shadow:0 12px 35px -5px rgba(0,0,0,0.5), inset 0 1px 0 rgba(255,255,255,0.1);
    position:relative;
    overflow:hidden;
    transition:transform 0.35s cubic-bezier(0.16, 1, 0.3, 1),
                box-shadow 0.35s cubic-bezier(0.16, 1, 0.3, 1),
                border-color 0.35s cubic-bezier(0.16, 1, 0.3, 1),
                background 0.35s cubic-bezier(0.16, 1, 0.3, 1);
  }

  .home-card:hover,
  .home-panel:hover,
  .home-feature:hover,
  .home-post:hover,
  .home-cta:hover{
    transform:translateY(-6px) scale(1.006);
    background:rgba(26, 35, 66, 0.82);
    border-color:rgba(255,140,66,0.45);
    box-shadow:0 25px 50px -10px rgba(0,0,0,0.7), 0 0 30px rgba(255,133,58,0.2), inset 0 1px 0 rgba(255,255,255,0.2);
  }

  .home-hero{
    padding:44px;
    background:
      radial-gradient(circle at top left, rgba(255,133,58,0.14), transparent 50%),
      linear-gradient(180deg, rgba(20,26,50,0.78) 0%, rgba(12,16,34,0.75) 100%);
  }

  .home-panel{
    padding:36px;
    background:
      radial-gradient(circle at top right, rgba(99,102,241,0.16), transparent 50%),
      linear-gradient(180deg, rgba(20,26,50,0.78) 0%, rgba(12,16,34,0.75) 100%);
  }

  .home-eyebrow{
    display:inline-flex;
    align-items:center;
    gap:8px;
    margin:0 0 18px;
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

  .home-eyebrow::before{
    content:"";
    display:inline-block;
    width:7px;
    height:7px;
    border-radius:50%;
    background:#ff853a;
    box-shadow:0 0 8px #ff853a;
  }

  .home-title{
    margin:0;
    max-width:12ch;
    font-size:clamp(2.1rem, 3.8vw, 3.45rem);
    line-height:1.06;
    letter-spacing:-0.045em;
    background:linear-gradient(135deg, #ffffff 30%, #e2e8f0 70%, #94a3b8 100%);
    -webkit-background-clip:text;
    -webkit-text-fill-color:transparent;
  }

  .home-subtitle{
    margin:20px 0 0;
    max-width:62ch;
    font-size:1.05rem;
    line-height:1.78;
    color:rgba(231,236,255,0.88);
  }

  .home-actions{
    display:flex;
    flex-wrap:wrap;
    gap:16px;
    margin-top:28px;
  }

  .home-meta{
    display:flex;
    flex-wrap:wrap;
    gap:12px;
    margin-top:26px;
  }

  .home-pill{
    display:inline-flex;
    align-items:center;
    gap:10px;
    padding:10px 16px;
    border-radius:999px;
    border:1px solid rgba(255,255,255,0.1);
    background:rgba(255,255,255,0.04);
    backdrop-filter:blur(10px);
    color:rgba(231,236,255,0.88);
    font-size:.95rem;
    transition:all 0.25s ease;
  }

  .home-pill:hover{
    border-color:rgba(255,133,58,0.4);
    background:rgba(255,133,58,0.08);
  }

  .home-pill strong{ color:#ffaa75; }

  .home-side-title{
    margin:0;
    font-size:1.55rem;
    line-height:1.25;
    letter-spacing:-0.03em;
    color:#fff;
  }

  .home-check{
    list-style:none;
    padding:0;
    margin:22px 0 0;
    display:grid;
    gap:16px;
  }

  .home-check li{
    position:relative;
    padding-left:28px;
    line-height:1.7;
    color:rgba(231,236,255,0.88);
  }

  .home-check li::before{
    content:"✓";
    position:absolute;
    left:0;
    top:0;
    color:#34d399;
    font-weight:800;
    text-shadow:0 0 10px rgba(52,211,153,0.5);
  }

  .home-section{ margin-top:40px; }

  .home-section-head{
    display:flex;
    justify-content:space-between;
    align-items:flex-end;
    gap:18px;
    margin-bottom:20px;
  }

  .home-section-title{
    margin:0;
    font-size:clamp(1.5rem, 2.2vw, 2.1rem);
    line-height:1.2;
    letter-spacing:-0.03em;
    color:#fff;
  }

  .home-link{
    color:#ff9e64;
    font-weight:700;
    text-decoration:none;
    white-space:nowrap;
    transition:all 0.2s ease;
  }
  .home-link:hover{
    color:#ffbe98;
    text-shadow:0 0 12px rgba(255,158,100,0.5);
  }

  .home-cards{
    display:grid;
    grid-template-columns:repeat(3, minmax(0,1fr));
    gap:24px;
  }

  .home-product{ overflow:hidden; }

  .home-product__media{
    display:block;
    aspect-ratio:16/10;
    background:rgba(255,255,255,0.03);
    overflow:hidden;
    position:relative;
  }

  .home-product__media img{
    width:100%;
    height:100%;
    object-fit:cover;
    display:block;
    transition:transform 0.5s cubic-bezier(0.16, 1, 0.3, 1);
  }

  .home-product:hover .home-product__media img{
    transform:scale(1.06);
  }

  .home-product__body{ padding:24px; }

  .home-kicker{
    margin:0 0 10px;
    font-size:12px;
    font-weight:800;
    letter-spacing:.08em;
    text-transform:uppercase;
    color:#ff9e64;
  }

  .home-product__title{
    margin:0;
    font-size:1.2rem;
    line-height:1.35;
  }

  .home-product__title a{
    text-decoration:none;
    color:#fff;
    transition:color 0.2s ease;
  }
  .home-product__title a:hover{ color:#ff9e64; }

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
    margin-top:18px;
    color:rgba(231,236,255,0.76);
    font-size:.94rem;
  }

  .home-meta-row strong{
    background:linear-gradient(135deg, #ff944d 0%, #ff5e36 100%);
    -webkit-background-clip:text;
    -webkit-text-fill-color:transparent;
    font-size:1.2rem;
    font-weight:800;
  }

  .home-card-actions{
    display:flex;
    flex-wrap:wrap;
    gap:12px;
    margin-top:20px;
  }

  .home-features{
    display:grid;
    grid-template-columns:repeat(3, minmax(0,1fr));
    gap:24px;
  }

  .home-feature{ padding:28px; }

  .home-feature h3{
    margin:0;
    font-size:1.2rem;
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
    grid-template-columns:minmax(0,1.15fr) minmax(290px,0.8fr);
    gap:26px;
    align-items:stretch;
  }

  .home-service-copy{ padding:8px 4px 0 0; }
  .home-service-box{
    padding:32px;
    background:
      radial-gradient(circle at top right, rgba(255,133,58,0.15), transparent 45%),
      linear-gradient(180deg, rgba(20,26,50,0.78) 0%, rgba(12,16,34,0.75) 100%);
  }

  .home-price{
    margin:12px 0 16px;
    font-size:2.2rem;
    font-weight:800;
    letter-spacing:-0.04em;
    background:linear-gradient(135deg, #ff944d 0%, #ff5e36 100%);
    -webkit-background-clip:text;
    -webkit-text-fill-color:transparent;
  }

  .home-post{ padding:26px; }
  .home-cta{
    padding:44px;
    text-align:center;
    background:
      radial-gradient(circle at center, rgba(255,133,58,0.12), transparent 60%),
      linear-gradient(180deg, rgba(20,26,50,0.8) 0%, rgba(12,16,34,0.78) 100%);
  }

  @media (max-width: 1080px){
    .home-cards,
    .home-features{ grid-template-columns:repeat(2, minmax(0,1fr)); }
  }

  @media (max-width: 900px){
    .home-grid,
    .home-service{ grid-template-columns:1fr; }

    .home-hero{ padding:32px; }
    .home-panel{ padding:30px; }

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
    .home-wrap{ width:min(100% - 24px, 1200px); }

    .home-cards,
    .home-features{ grid-template-columns:1fr; }

    .home-hero,
    .home-panel,
    .home-service-box,
    .home-cta{ padding:24px; }

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
          {% include prompt-thumb.html item=prompt href=prompt.url media_class="home-product__media" placeholder_class="thumb" linked="true" %}

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
