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
      <p class="eyebrow">
        <span class="lang-en">{{ site.data.site.hero_kicker }}</span>
        <span class="lang-vi">Người bán trên PromptBase • Giảng viên AI • Kiến trúc sư prompt</span>
      </p>
      <h1>
        <span class="lang-en">{{ site.data.site.hero_title }}</span>
        <span class="lang-vi">Bán prompt thông minh hơn với nội dung chỉn chu và sẵn sàng chuyển đổi.</span>
      </h1>
      <p class="lead">
        <span class="lang-en">{{ site.data.site.hero_subtitle }}</span>
        <span class="lang-vi">Tôi xây dựng prompt sẵn sàng bán trên PromptBase, workflow cho giáo dục và hệ thống prompt cho thương mại điện tử để giúp bạn tiết kiệm thời gian và ra kết quả đẹp hơn.</span>
      </p>
      <div class="hero-actions">
        <a class="button" href="{{ '/prompts/' | relative_url }}"><span class="lang-en">Browse prompt catalog</span><span class="lang-vi">Xem danh mục prompt</span></a>
        <a class="button button-outline" href="{{ site.data.site.promptbase_url }}" target="_blank" rel="noopener"><span class="lang-en">Open PromptBase store</span><span class="lang-vi">Mở gian hàng PromptBase</span></a>
      </div>
      <div class="proof-list">
        <div class="mini-card">
          <h3><span class="lang-en">PromptBase Store</span><span class="lang-vi">Gian hàng PromptBase</span></h3>
          <p><span class="lang-en">Send buyers directly to your storefront with focused CTAs.</span><span class="lang-vi">Điều hướng khách hàng thẳng đến gian hàng bằng CTA rõ ràng, không lan man.</span></p>
        </div>
        <div class="mini-card">
          <h3><span class="lang-en">SEO-friendly blog</span><span class="lang-vi">Blog chuẩn SEO</span></h3>
          <p><span class="lang-en">Publish articles that rank, educate, and pre-sell your prompt offers.</span><span class="lang-vi">Đăng bài viết vừa lên top tìm kiếm, vừa làm nóng khách trước khi chốt prompt.</span></p>
        </div>
        <div class="mini-card">
          <h3><span class="lang-en">Easy daily updates</span><span class="lang-vi">Cập nhật hằng ngày</span></h3>
          <p><span class="lang-en">Add a new prompt or article by dropping one Markdown file into the repo.</span><span class="lang-vi">Chỉ cần thêm một file Markdown là có thể đăng prompt hoặc bài viết mới.</span></p>
        </div>
      </div>
    </div>
    <aside class="hero-panel card">
      <div>
        <p class="eyebrow"><span class="lang-en">Why this rebuild works</span><span class="lang-vi">Vì sao bản dựng này ổn hơn</span></p>
        <h2><span class="lang-en">From one long HTML file to a site that can actually grow.</span><span class="lang-vi">Từ một file HTML dài ngoằng sang một website có thể lớn lên tử tế.</span></h2>
        <p class="lead"><span class="lang-en">This version is built for GitHub Pages using Jekyll collections and posts. That means real URLs, real article pages, and much cleaner SEO than a single-page toggle setup.</span><span class="lang-vi">Bản này chạy trên GitHub Pages bằng Jekyll collections và posts. Nghĩa là có URL riêng cho từng trang, từng bài viết và SEO sạch hơn rất nhiều so với kiểu nhét mọi thứ vào một trang.</span></p>
      </div>
      <div class="metric-row">
        <div class="metric"><strong>{{ site.prompts | size }}</strong><span><span class="lang-en">Sample prompt pages</span><span class="lang-vi">Trang prompt mẫu</span></span></div>
        <div class="metric"><strong>{{ site.posts | size }}</strong><span><span class="lang-en">Sample blog posts</span><span class="lang-vi">Bài blog mẫu</span></span></div>
        <div class="metric"><strong>1 file</strong><span><span class="lang-en">to add each new prompt or post</span><span class="lang-vi">để thêm một prompt hoặc bài mới</span></span></div>
      </div>
    </aside>
  </div>
</section>

<section class="section">
  <div class="container">
    <div class="section-heading">
      <div>
        <p class="eyebrow"><span class="lang-en">Featured prompts</span><span class="lang-vi">Prompt nổi bật</span></p>
        <h2><span class="lang-en">Prompts that deserve their own landing pages.</span><span class="lang-vi">Những prompt xứng đáng có landing page riêng.</span></h2>
      </div>
      <p><span class="lang-en">Each prompt gets a dedicated URL, product-style structure, clear CTA, and schema markup so the page can pull search traffic instead of hiding inside one homepage.</span><span class="lang-vi">Mỗi prompt có URL riêng, cấu trúc kiểu trang sản phẩm, CTA rõ ràng và schema markup để kéo traffic tìm kiếm thay vì chôn trong một trang chủ duy nhất.</span></p>
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
            <a href="{{ prompt.url | relative_url }}"><span class="lang-en">View details →</span><span class="lang-vi">Xem chi tiết →</span></a>
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
        <p class="eyebrow"><span class="lang-en">SEO strategy</span><span class="lang-vi">Chiến lược SEO</span></p>
        <h2><span class="lang-en">Use the blog to pre-sell the prompt, not just decorate the site.</span><span class="lang-vi">Dùng blog để bán trước ý tưởng của prompt, không phải chỉ để làm cảnh.</span></h2>
        <p class="lead"><span class="lang-en">The cleanest traffic loop is simple: write helpful articles around buyer problems, link them to a focused prompt page, then send the most motivated visitors to PromptBase.</span><span class="lang-vi">Vòng lặp traffic gọn nhất là: viết bài giải đúng nỗi đau của khách, dẫn sang trang prompt phù hợp, rồi đẩy nhóm khách nóng nhất sang PromptBase.</span></p>
        <ul class="check-list">
          <li><span class="lang-en">One post = one searchable problem or workflow.</span><span class="lang-vi">Một bài viết = một vấn đề hoặc workflow có thể được tìm kiếm.</span></li>
          <li><span class="lang-en">One prompt page = one conversion target.</span><span class="lang-vi">Một trang prompt = một mục tiêu chuyển đổi rõ ràng.</span></li>
          <li><span class="lang-en">One CTA = no confused visitor, no scattered click path.</span><span class="lang-vi">Một CTA chính = khách không bị rối, hành trình click không bị loạn.</span></li>
        </ul>
      </div>
      <div class="notice">
        <span class="lang-en">Current site issue: the live version exposes all article content in one document and swaps sections with JavaScript, so the structure is harder to scale and weaker for page-level SEO than separate URLs.</span>
        <span class="lang-vi">Vấn đề của site cũ: toàn bộ bài viết bị dồn trong một tài liệu và đổi phần bằng JavaScript, nên rất khó mở rộng và SEO theo từng trang kém hơn nhiều so với việc dùng URL riêng.</span>
      </div>
    </div>
  </div>
</section>

<section class="section">
  <div class="container">
    <div class="section-heading">
      <div>
        <p class="eyebrow"><span class="lang-en">Latest articles</span><span class="lang-vi">Bài viết mới</span></p>
        <h2><span class="lang-en">Posts that attract search traffic and warm up buyers.</span><span class="lang-vi">Bài viết giúp kéo traffic và làm nóng khách hàng.</span></h2>
      </div>
      <p><span class="lang-en">Daily publishing becomes sane when every article is just one Markdown file in <code>_posts</code>.</span><span class="lang-vi">Viết bài mỗi ngày sẽ khỏe hơn nhiều khi mỗi bài chỉ là một file Markdown trong <code>_posts</code>.</span></p>
    </div>
    <div class="grid-2">
      {% for post in site.posts limit: 4 %}
      <article class="post-card card">
        <div class="thumb"><span>{{ post.category | default: 'Prompt Strategy' }}</span></div>
        <div class="post-card-body">
          <p class="page-meta">{{ post.date | date: '%B %d, %Y' }}</p>
          <h3><a href="{{ post.url | relative_url }}">{{ post.title }}</a></h3>
          <p>{{ post.description }}</p>
          <a href="{{ post.url | relative_url }}"><span class="lang-en">Read article →</span><span class="lang-vi">Đọc bài →</span></a>
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
        <p class="eyebrow"><span class="lang-en">Custom work</span><span class="lang-vi">Dịch vụ riêng</span></p>
        <h2><span class="lang-en">Need a prompt system built around your niche?</span><span class="lang-vi">Cần một hệ thống prompt may đo cho thị trường ngách của bạn?</span></h2>
        <p class="lead"><span class="lang-en">I also build PromptBase-ready prompt templates, education prompt packs, and niche conversion prompts for real businesses.</span><span class="lang-vi">Tôi cũng nhận xây prompt template sẵn sàng bán trên PromptBase, bộ prompt cho giáo dục và prompt chuyển đổi cho các ngành cụ thể.</span></p>
      </div>
      <div class="hero-actions">
        <a class="button" href="{{ '/services/' | relative_url }}"><span class="lang-en">View services</span><span class="lang-vi">Xem dịch vụ</span></a>
        <a class="button button-outline" href="{{ site.data.site.promptbase_url }}" target="_blank" rel="noopener"><span class="lang-en">Hire via PromptBase</span><span class="lang-vi">Thuê qua PromptBase</span></a>
      </div>
    </div>
  </div>
</section>

<section class="section">
  <div class="container">
    <div class="section-heading">
      <div>
        <p class="eyebrow">FAQ</p>
        <h2><span class="lang-en">Quick answers before you ship this live.</span><span class="lang-vi">Giải đáp nhanh trước khi đẩy site live.</span></h2>
      </div>
      <p><span class="lang-en">Keep the site simple, focused, and English-first for commercial SEO. Vietnamese can still live in your workflow, but buyers should land on clean sales pages.</span><span class="lang-vi">Giữ site gọn, tập trung và ưu tiên tiếng Anh cho SEO thương mại. Tiếng Việt vẫn có thể dùng trong vận hành, nhưng trang bán hàng nên sạch và rõ.</span></p>
    </div>
    <div class="faq-list">
      <div class="faq-item card">
        <h3><span class="lang-en">Why rebuild this as a Jekyll site?</span><span class="lang-vi">Vì sao nên dựng lại bằng Jekyll?</span></h3>
        <p><span class="lang-en">Because GitHub Pages supports Jekyll directly, which makes prompts, posts, and SEO metadata much easier to manage than one long HTML file.</span><span class="lang-vi">Vì GitHub Pages hỗ trợ Jekyll trực tiếp, giúp quản lý prompt, bài viết và metadata SEO dễ hơn nhiều so với một file HTML dài ngoằng.</span></p>
      </div>
      <div class="faq-item card">
        <h3><span class="lang-en">How do I add a new product?</span><span class="lang-vi">Làm sao để thêm sản phẩm mới?</span></h3>
        <p><span class="lang-en">Create a new file in the _prompts folder, fill in the front matter, add your PromptBase link, and the site updates automatically.</span><span class="lang-vi">Tạo một file mới trong thư mục _prompts, điền front matter, thêm link PromptBase là site sẽ tự cập nhật.</span></p>
      </div>
      <div class="faq-item card">
        <h3><span class="lang-en">How do I publish blog posts every day?</span><span class="lang-vi">Làm sao đăng blog hằng ngày?</span></h3>
        <p><span class="lang-en">Add a Markdown file to the _posts folder using the date-title format and GitHub Pages will build the article page and index automatically.</span><span class="lang-vi">Chỉ cần thêm file Markdown vào _posts theo dạng ngày-tháng-tên-bài là GitHub Pages sẽ tự build trang bài viết và trang lưu trữ.</span></p>
      </div>
    </div>
  </div>
</section>
