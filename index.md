---
layout: default
title: "Autoprompt Shop | Practical AI Prompts for Education, Content and E-commerce"
description: "Practical AI prompt systems for teachers, creators, researchers, and online sellers."
permalink: /
---

{% assign featured_prompts = site.prompts | slice: 0, 6 %}

<section class="home-shell home-hero">
  <div class="home-hero__main home-surface">
    <p class="home-eyebrow">
      <span class="lang-en">Practical AI prompt systems</span>
      <span class="lang-vi">Hệ thống prompt AI thực chiến</span>
    </p>

    <h1 class="home-title">
      <span class="lang-en">AI prompts for educators, creators, researchers, and online sellers.</span>
      <span class="lang-vi">Prompt AI cho giáo viên, người làm nội dung, nhà nghiên cứu và người bán hàng online.</span>
    </h1>

    <p class="home-lead">
      <span class="lang-en">
        I build prompt systems that are clear, reusable, and designed for real outcomes — from lesson planning and content production to research support and e-commerce workflows.
      </span>
      <span class="lang-vi">
        Tôi xây dựng các hệ thống prompt rõ ràng, tái sử dụng được và hướng tới kết quả thực tế — từ soạn bài giảng, sản xuất nội dung cho tới hỗ trợ nghiên cứu và quy trình bán hàng online.
      </span>
    </p>

    <div class="home-actions">
      <a class="button" href="https://promptbase.com/profile/phungfetti?via=phungteacher" target="_blank" rel="noopener noreferrer">
        <span class="lang-en">Visit PromptBase Store</span>
        <span class="lang-vi">Xem cửa hàng PromptBase</span>
      </a>

      <a class="button button-outline" href="{{ '/services/' | relative_url }}">
        <span class="lang-en">Hire Me for Custom Prompts</span>
        <span class="lang-vi">Thuê tôi làm prompt theo yêu cầu</span>
      </a>
    </div>

    <div class="home-badges">
      <span class="home-badge">
        <strong>EN / VI</strong>
        <span class="lang-en">Bilingual support</span>
        <span class="lang-vi">Hỗ trợ song ngữ</span>
      </span>
      <span class="home-badge">
        <strong>Edu + Ecom</strong>
        <span class="lang-en">Real use cases</span>
        <span class="lang-vi">Ứng dụng thực tế</span>
      </span>
      <span class="home-badge">
        <strong>$25/hr</strong>
        <span class="lang-en">Custom consulting</span>
        <span class="lang-vi">Tư vấn theo giờ</span>
      </span>
    </div>
  </div>

  <aside class="home-hero__side home-surface home-surface--accent">
    <p class="home-eyebrow">
      <span class="lang-en">What you get here</span>
      <span class="lang-vi">Những gì thầy nhận được ở đây</span>
    </p>

    <h2 class="home-side-title">
      <span class="lang-en">Structured prompts that help you move faster.</span>
      <span class="lang-vi">Các prompt có cấu trúc giúp thầy làm việc nhanh hơn.</span>
    </h2>

    <ul class="home-checklist">
      <li>
        <span class="lang-en">Ready-to-use prompt packs for teaching, content, and sales workflows</span>
        <span class="lang-vi">Bộ prompt sẵn dùng cho dạy học, làm nội dung và quy trình bán hàng</span>
      </li>
      <li>
        <span class="lang-en">Custom prompt systems built for your niche or business</span>
        <span class="lang-vi">Hệ thống prompt thiết kế riêng theo ngách hoặc mô hình kinh doanh</span>
      </li>
      <li>
        <span class="lang-en">Clear landing pages that support conversion instead of just looking fancy</span>
        <span class="lang-vi">Landing page rõ ràng để hỗ trợ chuyển đổi chứ không chỉ đẹp cho có</span>
      </li>
      <li>
        <span class="lang-en">Fast support in both English and Vietnamese</span>
        <span class="lang-vi">Hỗ trợ nhanh bằng cả tiếng Anh và tiếng Việt</span>
      </li>
    </ul>

    <div class="home-side-cta">
      <a class="button" href="mailto:{{ site.data.site.email }}?subject=Custom%20Prompt%20Inquiry&body=Hello%20Mr.%20Dinh%2C%0A%0AI%20want%20to%20ask%20about%20your%20custom%20prompt%20service.%0A">
        <span class="lang-en">Email Me</span>
        <span class="lang-vi">Gửi email cho tôi</span>
      </a>
    </div>
  </aside>
</section>

<section class="home-shell home-section">
  <div class="home-section__head">
    <div>
      <p class="home-eyebrow">
        <span class="lang-en">Featured prompts</span>
        <span class="lang-vi">Prompt nổi bật</span>
      </p>
      <h2 class="home-section__title">
        <span class="lang-en">Prompt products built for practical results.</span>
        <span class="lang-vi">Sản phẩm prompt được xây để tạo ra kết quả thực tế.</span>
      </h2>
    </div>

    <a class="home-link" href="{{ '/prompts/' | relative_url }}">
      <span class="lang-en">Browse all prompts</span>
      <span class="lang-vi">Xem tất cả prompt</span>
    </a>
  </div>

  <div class="home-card-grid">
    {% for prompt in featured_prompts %}
      <article class="home-card">
        {% if prompt.image %}
          <a class="home-card__media" href="{{ prompt.url | relative_url }}">
            <img src="{{ prompt.image | relative_url }}" alt="{{ prompt.title }}">
          </a>
        {% endif %}

        <div class="home-card__body">
          {% if prompt.model %}
            <p class="home-card__kicker">{{ prompt.model }}</p>
          {% endif %}

          <h3 class="home-card__title">
            <a href="{{ prompt.url | relative_url }}">{{ prompt.title }}</a>
          </h3>

          {% if prompt.description %}
            <p class="home-card__text">{{ prompt.description }}</p>
          {% endif %}

          <div class="home-card__meta">
            {% if prompt.category %}
              <span>{{ prompt.category }}</span>
            {% endif %}
            {% if prompt.price %}
              <strong>${{ prompt.price }}</strong>
            {% endif %}
          </div>

          <div class="home-card__actions">
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

<section class="home-shell home-section">
  <div class="home-section__head">
    <div>
      <p class="home-eyebrow">
        <span class="lang-en">Why work with me</span>
        <span class="lang-vi">Vì sao nên làm việc với tôi</span>
      </p>
      <h2 class="home-section__title">
        <span class="lang-en">Good prompts are not random text. They are systems.</span>
        <span class="lang-vi">Prompt tốt không phải vài câu chữ ngẫu nhiên. Nó là một hệ thống.</span>
      </h2>
    </div>
  </div>

  <div class="home-feature-grid">
    <article class="home-card home-feature">
      <h3>
        <span class="lang-en">Clear structure</span>
        <span class="lang-vi">Cấu trúc rõ ràng</span>
      </h3>
      <p>
        <span class="lang-en">Each prompt is built with logic, variables, and a clean flow so the output stays more stable and reusable.</span>
        <span class="lang-vi">Mỗi prompt được xây với logic, biến số và luồng rõ ràng để đầu ra ổn định hơn và tái sử dụng tốt hơn.</span>
      </p>
    </article>

    <article class="home-card home-feature">
      <h3>
        <span class="lang-en">Built for real work</span>
        <span class="lang-vi">Xây để làm việc thật</span>
      </h3>
      <p>
        <span class="lang-en">From lesson planning and research support to product pages and sales content, the focus is practical output.</span>
        <span class="lang-vi">Từ soạn bài, hỗ trợ nghiên cứu cho tới trang sản phẩm và nội dung bán hàng, trọng tâm luôn là đầu ra thực tế.</span>
      </p>
    </article>

    <article class="home-card home-feature">
      <h3>
        <span class="lang-en">Less trial-and-error</span>
        <span class="lang-vi">Giảm thử sai</span>
      </h3>
      <p>
        <span class="lang-en">You start with a stronger base instead of mất hàng giờ test những prompt yếu và chắp vá.</span>
        <span class="lang-vi">Thầy bắt đầu từ một nền tảng mạnh hơn thay vì mất hàng giờ test các prompt yếu và chắp vá.</span>
      </p>
    </article>
  </div>
</section>

<section class="home-shell home-section">
  <div class="home-service">
    <div class="home-service__copy">
      <p class="home-eyebrow">
        <span class="lang-en">Custom prompt service</span>
        <span class="lang-vi">Dịch vụ prompt theo yêu cầu</span>
      </p>

      <h2 class="home-section__title">
        <span class="lang-en">Need a prompt system designed specifically for your workflow?</span>
        <span class="lang-vi">Cần một hệ thống prompt được thiết kế riêng cho quy trình của thầy?</span>
      </h2>

      <p class="home-lead home-lead--small">
        <span class="lang-en">I also take one-off prompt builds, workflow audits, bilingual prompt assets, and niche prompt systems for education and online business.</span>
        <span class="lang-vi">Tôi cũng nhận làm prompt riêng lẻ, audit workflow, tài sản prompt song ngữ và hệ thống prompt theo ngách cho giáo dục và kinh doanh online.</span>
      </p>
    </div>

    <div class="home-card home-service__box">
      <p class="home-eyebrow">
        <span class="lang-en">Rate</span>
        <span class="lang-vi">Mức phí</span>
      </p>

      <div class="home-price">$25/hr</div>

      <p class="home-card__text">
        <span class="lang-en">Best for niche builds, one-off custom prompts, and structured prompt consulting.</span>
        <span class="lang-vi">Phù hợp cho các job theo ngách, prompt đặt riêng và tư vấn prompt có cấu trúc.</span>
      </p>

      <div class="home-card__actions">
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

<section class="home-shell home-section">
  <div class="home-section__head">
    <div>
      <p class="home-eyebrow">
        <span class="lang-en">Latest articles</span>
        <span class="lang-vi">Bài viết mới</span>
      </p>
      <h2 class="home-section__title">
        <span class="lang-en">Content that educates buyers and supports search traffic.</span>
        <span class="lang-vi">Nội dung giúp giáo dục khách hàng và hỗ trợ traffic tìm kiếm.</span>
      </h2>
    </div>

    <a class="home-link" href="{{ '/blog/' | relative_url }}">
      <span class="lang-en">Visit the blog</span>
      <span class="lang-vi">Xem blog</span>
    </a>
  </div>

  <div class="home-card-grid">
    {% for post in site.posts limit:3 %}
      <article class="home-card">
        <div class="home-card__body">
          <p class="home-card__kicker">{{ post.date | date: "%d/%m/%Y" }}</p>

          <h3 class="home-card__title">
            <a href="{{ post.url | relative_url }}">{{ post.title }}</a>
          </h3>

          {% if post.description %}
            <p class="home-card__text">{{ post.description }}</p>
          {% elsif post.excerpt %}
            <p class="home-card__text">{{ post.excerpt | strip_html | truncate: 150 }}</p>
          {% endif %}

          <a class="home-link" href="{{ post.url | relative_url }}">
            <span class="lang-en">Read article</span>
            <span class="lang-vi">Đọc bài viết</span>
          </a>
        </div>
      </article>
    {% endfor %}
  </div>
</section>

<section class="home-shell home-section">
  <div class="home-final home-surface">
    <p class="home-eyebrow">
      <span class="lang-en">Ready to move faster?</span>
      <span class="lang-vi">Sẵn sàng làm nhanh hơn chưa?</span>
    </p>

    <h2 class="home-section__title">
      <span class="lang-en">Start with a ready-made prompt, or email me for a custom build.</span>
      <span class="lang-vi">Bắt đầu bằng một prompt có sẵn, hoặc email cho tôi để đặt bản thiết kế riêng.</span>
    </h2>

    <p class="home-lead home-lead--small">
      <span class="lang-en">A stronger prompt system can save hours, improve output quality, and help you get to the result faster.</span>
      <span class="lang-vi">Một hệ thống prompt tốt hơn có thể giúp tiết kiệm hàng giờ, nâng chất lượng đầu ra và đưa thầy tới kết quả nhanh hơn.</span>
    </p>

    <div class="home-actions home-actions--center">
      <a class="button" href="https://promptbase.com/profile/phungfetti?via=phungteacher" target="_blank" rel="noopener noreferrer">
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
