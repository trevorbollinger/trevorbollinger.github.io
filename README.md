# boli.dev - Jekyll Site

This is a Jekyll-based website for Trevor Bollinger's personal site, hosted on GitHub Pages.

## Structure

- `_config.yml` - Jekyll configuration
- `_data/navigation.yml` - Site navigation links
- `_includes/navbar.html` - Reusable navbar component
- `_layouts/default.html` - Default page layout
- `style/index.css` - Main stylesheet
- `images/` - Site images

## Adding New Pages

1. Create a new HTML file with Jekyll front matter:
```html
---
layout: default
title: Your Page Title
---

Your content here...
```

2. Add the page to navigation in `_data/navigation.yml`:
```yaml
- text: Your Page
  link: /your-page.html
  icon: icon-name
```

## Features

- ✅ Automatic navbar on all pages
- ✅ Active page highlighting
- ✅ Easy navigation management
- ✅ Clean, maintainable code
- ✅ GitHub Pages compatible
- ✅ No build process needed

## Local Development

1. Install Jekyll: `gem install jekyll bundler`
2. Install dependencies: `bundle install`
3. Run locally: `bundle exec jekyll serve`
4. Visit: `http://localhost:4000`

## Deployment

Simply push to GitHub! GitHub Pages will automatically build and deploy your Jekyll site. 