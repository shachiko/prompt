# AutoPrompt Shop – GitHub Pages + Jekyll starter

This is a rebuild of the site as a Jekyll project so GitHub Pages can generate:

- a real homepage
- a prompt catalog
- dedicated prompt landing pages
- a blog archive
- separate article URLs
- sitemap and robots files

## How to add a new prompt

1. Create a new file in `_prompts/`
2. Copy one of the existing prompt files
3. Edit the front matter:
   - `title`
   - `description`
   - `price`
   - `model`
   - `category`
   - `filter`
   - `best_for`
   - `outcome`
   - `promptbase_url`
4. Commit and push

## How to add a new blog post

1. Create a new file in `_posts/`
2. Use this format: `YYYY-MM-DD-title.md`
3. Add front matter:
   - `title`
   - `description`
   - `category`
4. Write the article in Markdown
5. Commit and push

## Publishing on GitHub Pages

### Easiest route
Publish from the root of the `main` branch if your repository is dedicated to the site.

### Better long-term route
Use GitHub Pages with a Jekyll-compatible build, or switch to a GitHub Actions workflow later if you want more automation.

## Suggested next upgrades

- add local images for each prompt
- create a dedicated About page
- add article topic clusters
- add a `/vi/` section only if you want Vietnamese pages indexed separately
