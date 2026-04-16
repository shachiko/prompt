---
layout: default
title: "Autoprompt Shop | AI Prompts for Education, Content & E-commerce"
description: "High-converting AI prompts and custom prompt systems for teachers, creators, researchers, and online sellers."
permalink: /
---

<section class="hero">
  <div class="hero-copy">
    <p class="eyebrow">
      <span class="lang-en">AI prompts built to do real work</span>
      <span class="lang-vi">Prompt AI được xây để làm việc thật</span>
    </p>

    <h1>
      <span class="lang-en">Sell smarter, teach faster, and create better with practical prompt systems.</span>
      <span class="lang-vi">Bán hàng thông minh hơn, dạy học nhanh hơn và tạo nội dung tốt hơn bằng các hệ thống prompt thực chiến.</span>
    </h1>

    <p class="lead">
      <span class="lang-en">
        I build AI prompts for education, content creation, research, and e-commerce. 
        These are not vague templates. They are structured systems designed to save time, improve output quality, and help you get results faster.
      </span>
      <span class="lang-vi">
        Tôi xây dựng các prompt AI cho giáo dục, sáng tạo nội dung, nghiên cứu và thương mại điện tử.
        Đây không phải mấy mẫu prompt chung chung. Chúng là các hệ thống được cấu trúc rõ ràng để tiết kiệm thời gian,
        nâng chất lượng đầu ra và giúp bạn ra kết quả nhanh hơn.
      </span>
    </p>

    <div class="hero-actions">
      <a class="button" href="https://promptbase.com/profile/phungfetti?via=phungteacher" target="_blank" rel="noopener noreferrer">
        <span class="lang-en">Visit PromptBase Store</span>
        <span class="lang-vi">Xem cửa hàng PromptBase</span>
      </a>

      <a class="button button-outline" href="/services/">
        <span class="lang-en">Hire Me for Custom Prompts</span>
        <span class="lang-vi">Thuê tôi làm prompt theo yêu cầu</span>
      </a>
    </div>

    <div class="trust-row">
      <span>
        <strong>EN / VI</strong>
        <span class="lang-en">Bilingual support</span>
        <span class="lang-vi">Hỗ trợ song ngữ</span>
      </span>
      <span>
        <strong>Edu + Ecom</strong>
        <span class="lang-en">Real use cases</span>
        <span class="lang-vi">Ứng dụng thực tế</span>
      </span>
      <span>
        <strong>$25/hr</strong>
        <span class="lang-en">Custom consulting</span>
        <span class="lang-vi">Tư vấn theo giờ</span>
      </span>
    </div>
  </div>

  <aside class="hero-panel card">
    <p class="eyebrow">
      <span class="lang-en">What you can get here</span>
      <span class="lang-vi">Những gì thầy có thể nhận được ở đây</span>
    </p>

    <h2>
      <span class="lang-en">Prompt systems that are clear, reusable, and built for conversion.</span>
      <span class="lang-vi">Các hệ thống prompt rõ ràng, tái sử dụng được và được xây để tạo chuyển đổi.</span>
    </h2>

    <ul class="check-list">
      <li>
        <span class="lang-en">Prompt packs for teachers, creators, and online sellers</span>
        <span class="lang-vi">Bộ prompt cho giáo viên, người làm nội dung và người bán hàng online</span>
      </li>
      <li>
        <span class="lang-en">Custom prompts for your workflow, niche, or business</span>
        <span class="lang-vi">Prompt thiết kế riêng theo quy trình, ngách hoặc mô hình kinh doanh của bạn</span>
      </li>
      <li>
        <span class="lang-en">Landing pages and blog content that warm up buyers before they click</span>
        <span class="lang-vi">Landing page và blog giúp làm nóng khách hàng trước khi họ bấm mua</span>
      </li>
      <li>
        <span class="lang-en">Fast support in English and Vietnamese</span>
        <span class="lang-vi">Hỗ trợ nhanh bằng tiếng Anh và tiếng Việt</span>
      </li>
    </ul>

    <div class="panel-cta">
      <a class="button" href="mailto:{{ site.data.site.email }}?subject=Custom%20Prompt%20Inquiry&body=Hello%20Mr.%20Dinh%2C%0A%0AI%20want%20to%20ask%20about%20your%20custom%20prompt%20service.%0A">
        <span class="lang-en">Email Me</span>
        <span class="lang-vi">Gửi email cho tôi</span>
      </a>
    </div>
  </aside>
</section>

<section class="section">
  <div class="section-head">
    <div>
      <p class="eyebrow">
        <span class="lang-en">Featured prompts</span>
        <span class="lang-vi">Prompt nổi bật</span>
      </p>
      <h2>
        <span class="lang-en">Ready-to-use prompts designed for real outcomes.</span>
        <span class="lang-vi">Các prompt sẵn sàng sử dụng, được thiết kế để tạo ra kết quả thực tế.</span>
      </h2>
    </div>

    <a class="text-link" href="/prompts/">
      <span class="lang-en">Browse all prompts</span>
      <span class="lang-vi">Xem toàn bộ prompt</span>
    </a>
  </div>

  <div class="card-grid">
    {% assign featured_prompts = site.prompts | slice: 0, 6 %}
    {% for prompt in featured_prompts %}
      <article class="card prompt-card">
        {% if prompt.image %}
          <a class="card-media" href="{{ prompt.url }}">
            <img src="{{ prompt.image | relative_url }}" alt="{{ prompt.title }}">
          </a>
        {% endif %}

        <div class="card-body">
          {% if prompt.model %}
            <p class="card-kicker">{{ prompt.model }}</p>
          {% endif %}

          <h3><a href="{{ prompt.url }}">{{ prompt.title }}</a></h3>

          {% if prompt.description %}
            <p>{{ prompt.description }}</p>
          {% endif %}

          <div class="meta-row">
            {% if prompt.category %}
              <span>{{ prompt.category }}</span>
            {% endif %}
            {% if prompt.price %}
              <strong>${{ prompt.price }}</strong>
            {% endif %}
          </div>

          <div class="card-actions">
            <a class="button button-small button-outline" href="{{ prompt.url }}">
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

<section class="section">
  <div class="section-head">
    <div>
      <p class="eyebrow">
        <span class="lang-en">Why clients buy</span>
        <span class="lang-vi">Vì sao khách hàng chọn mua</span>
      </p>
      <h2>
        <span class="lang-en">Because good prompts are not just words. They are systems.</span>
        <span class="lang-vi">Vì prompt tốt không chỉ là câu chữ. Nó là một hệ thống.</span>
      </h2>
    </div>
  </div>

  <div class="feature-grid">
    <article class="card feature-card">
      <h3>
        <span class="lang-en">Clear structure</span>
        <span class="lang-vi">Cấu trúc rõ ràng</span>
      </h3>
      <p>
        <span class="lang-en">
          Each prompt is designed with reusable logic, variables, and a clean workflow so the output stays more stable.
        </span>
        <span class="lang-vi">
          Mỗi prompt đều được thiết kế với logic tái sử dụng, biến số rõ ràng và quy trình sạch để đầu ra ổn định hơn.
        </span>
      </p>
    </article>

    <article class="card feature-card">
      <h3>
        <span class="lang-en">Practical use cases</span>
        <span class="lang-vi">Ứng dụng thực chiến</span>
      </h3>
      <p>
        <span class="lang-en">
          Built for people who need real outputs: lesson plans, product listings, content systems, research support, and sales assets.
        </span>
        <span class="lang-vi">
          Được xây cho những người cần đầu ra thực sự: giáo án, listing sản phẩm, hệ thống nội dung, hỗ trợ nghiên cứu và tài sản bán hàng.
        </span>
      </p>
    </article>

    <article class="card feature-card">
      <h3>
        <span class="lang-en">Saves trial-and-error</span>
        <span class="lang-vi">Giảm thử sai</span>
      </h3>
      <p>
        <span class="lang-en">
          Instead of spending hours testing weak prompts, you start from a sharper foundation that gets you closer to the result faster.
        </span>
        <span class="lang-vi">
          Thay vì mất hàng giờ thử các prompt yếu, bạn bắt đầu từ một nền tảng sắc hơn để tiến gần kết quả nhanh hơn.
        </span>
      </p>
    </article>
  </div>
</section>

<section class="section section-highlight">
  <div class="split-copy">
    <div>
      <p class="eyebrow">
        <span class="lang-en">Custom prompt service</span>
        <span class="lang-vi">Dịch vụ prompt theo yêu cầu</span>
      </p>

      <h2>
        <span class="lang-en">Need a prompt built specifically for your workflow or niche?</span>
        <span class="lang-vi">Cần một prompt được thiết kế riêng cho quy trình hoặc ngách của bạn?</span>
      </h2>

      <p class="lead">
        <span class="lang-en">
          I also take one-off prompt projects, audits, and structured prompt builds for education, business operations, content production, and online selling.
        </span>
        <span class="lang-vi">
          Tôi cũng nhận các dự án prompt riêng lẻ, audit prompt và xây hệ thống prompt có cấu trúc cho giáo dục, vận hành công việc, sản xuất nội dung và bán hàng online.
        </span>
      </p>
    </div>

    <div class="card service-box">
      <p class="eyebrow">
        <span class="lang-en">Rate</span>
        <span class="lang-vi">Mức phí</span>
      </p>

      <h3>$25/hr</h3>

      <p>
        <span class="lang-en">
          Best for one-off builds, niche prompt systems, workflow audits, and bilingual prompt assets.
        </span>
        <span class="lang-vi">
          Phù hợp cho các job làm prompt riêng, hệ thống prompt theo ngách, audit workflow và tài sản prompt song ngữ.
        </span>
      </p>

      <div class="card-actions">
        <a class="button" href="/services/">
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

<section class="section">
  <div class="section-head">
    <div>
      <p class="eyebrow">
        <span class="lang-en">Latest articles</span>
        <span class="lang-vi">Bài viết mới</span>
      </p>
      <h2>
        <span class="lang-en">Useful content that educates, warms up buyers, and supports SEO.</span>
        <span class="lang-vi">Nội dung hữu ích để giáo dục khách hàng, làm nóng người mua và hỗ trợ SEO.</span>
      </h2>
    </div>

    <a class="text-link" href="/blog/">
      <span class="lang-en">Visit the blog</span>
      <span class="lang-vi">Xem blog</span>
    </a>
  </div>

  <div class="card-grid">
    {% for post in site.posts limit:3 %}
      <article class="card blog-card">
        <div class="card-body">
          <p class="card-kicker">{{ post.date | date: "%d/%m/%Y" }}</p>
          <h3><a href="{{ post.url }}">{{ post.title }}</a></h3>

          {% if post.description %}
            <p>{{ post.description }}</p>
          {% elsif post.excerpt %}
            <p>{{ post.excerpt | strip_html | truncate: 140 }}</p>
          {% endif %}

          <a class="text-link" href="{{ post.url }}">
            <span class="lang-en">Read article</span>
            <span class="lang-vi">Đọc bài viết</span>
          </a>
        </div>
      </article>
    {% endfor %}
  </div>
</section>

<section class="section final-cta">
  <div class="card cta-box">
    <p class="eyebrow">
      <span class="lang-en">Ready to move faster?</span>
      <span class="lang-vi">Sẵn sàng làm nhanh hơn chưa?</span>
    </p>

    <h2>
      <span class="lang-en">Start with a prompt, or email me for a custom build.</span>
      <span class="lang-vi">Bắt đầu với một prompt có sẵn, hoặc email cho tôi để đặt một bản thiết kế riêng.</span>
    </h2>

    <p class="lead">
      <span class="lang-en">
        Whether you are a teacher, creator, researcher, or seller, a stronger prompt system can save you hours and improve your output immediately.
      </span>
      <span class="lang-vi">
        Dù bạn là giáo viên, người làm nội dung, nhà nghiên cứu hay người bán hàng, một hệ thống prompt tốt hơn có thể giúp bạn tiết kiệm hàng giờ và nâng chất lượng đầu ra ngay lập tức.
      </span>
    </p>

    <div class="hero-actions">
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
