# GhostImage

A small script that adds ghost images to websites. They are hidden images waiting for trigger events, to eventually appear and hover above your contents. Written in plain JavaScript; no dependencies, small size, easy integration.

[GhostImage demo page](https://operat.github.io/ghostimage/)

## Getting Started

### 1. Download

[Download GhostImage](https://github.com/operat/ghostimage/archive/master.zip) -- Production code can be found in the `dist` directory, development code in the `src` directory.

### 2. Include on site

```html
<!-- HTML -->
<link rel="stylesheet" href="path/to/ghostimage.min.css">
<script src="path/to/ghostimage.min.js"></script>

```

### 3. Add the markup

Add the `ghostimage__trigger` class to an element, add a `data-image` attribute and set the path to your image as its value.

```html
<!-- HTML -->
<span class="ghostimage__trigger" data-image="path/to/image.xyz">My trigger</span>
```

### 4. Initialize

```javascript
// JavaScript
ghostimage.init();
```

## Options

### Change trigger styling

The `ghostimage__trigger` class defaults to the below styling. You can change this to anything you wish in your stylesheet, or use a custom trigger class altogether (see below).

```css
// CSS
.ghostimage__trigger {
   background-color: #fffcc9;
   border-bottom: 1px dashed #666;
}
```

### Custom trigger class

You can pass an optional trigger class into GhostImage through the `init()` function:

```javascript
// JavaScript
ghostimage.init({
   trigger: 'customTrigger'
});
```

## Known Issues

- When the GhostImage trigger is an inline element that breaks over multiple lines, the dynamically created ghost element covers the space of those lines and therefore may cover other trigger elements, which won't work properly, then.
- The ghost images don't appear on touch devices. This is by design, as the trigger listens to `mouseover` events. No mouse, no `mouseover`, no triggering. A check library like [is.js](http://is.js.org/) can be used to disable GhostImage on touch devices.

## License

The code is available under the [MIT License](LICENSE.md).

Images courtesy of [Death to Stock](https://deathtothestockphoto.com/).
