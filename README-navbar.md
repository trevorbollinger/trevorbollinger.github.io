# Reusable Navbar Component

This project now uses a reusable navbar component that automatically applies to any page. No more need to recreate the navbar for each page!

## How to Use

### For Existing Pages
Simply add this line before the closing `</body>` tag:
```html
<script src="components/navbar.js"></script>
```

### For New Pages
1. Use the `template.html` file as a starting point
2. Make sure to include the navbar script:
```html
<script src="components/navbar.js"></script>
```

## Features

- **Automatic Injection**: The navbar is automatically injected at the top of the page
- **Active Page Highlighting**: The current page link is automatically highlighted
- **Consistent Styling**: Uses the existing CSS from `style/index.css`
- **Easy Customization**: Edit `components/navbar.js` to modify links or styling

## Current Navigation Links

The navbar includes these links by default:
- Home (`index.html`)
- Contact (`contact.html`) 
- Priorities (`priorities.html`)
- Privacy (`privacy.html`)

## Customization

To add or modify navigation links, edit the `links` array in `components/navbar.js`:

```javascript
links: [
    { text: 'Home', href: 'index.html' },
    { text: 'Contact', href: 'contact.html' },
    { text: 'Priorities', href: 'priorities.html' },
    { text: 'Privacy', href: 'privacy.html' },
    // Add new links here
    { text: 'New Page', href: 'newpage.html' }
]
```

## Benefits

- ✅ No more duplicate navbar code
- ✅ Consistent navigation across all pages
- ✅ Easy to maintain and update
- ✅ Automatic active page detection
- ✅ Clean, modern styling 