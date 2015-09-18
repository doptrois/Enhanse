# Enhanse
Replaces HTML comments with data

## Usage
Possible HTML comment:
```html
<!-- {example} -->
```

Javascript code
```js
// Initialize
Enhanse.init();

// Insert menu button
Enhanse.enhance("{example}", function () {
    return '<strong>foo</strong>';
});
```

Changes the HTML comment to:
```html
<strong>foo</strong>
```
