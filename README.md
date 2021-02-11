# scssstarter
A SCSS starter library

This is a lightweight, scss starter library.
* responsive layout based on grid
* fluid-typography

I wanted to learn how to really use SCSS so I studied Twitter Bootstrap, took the ideas I liked and modified as I needed. I have been adding things as they make sense to me. It is not a perfect library, but it works for me ;-).

## Layout

Layout uses css grid in 12 columns, with the following breakpoints:
* `xs`:   0
* `sm`:   480px,
* `smd`:  640px,
* `md`:   768px,
* `mdlg`: 960px,
* `lg`:   1024px,
* `xl`:   1170px,
* `xxl`:  1200px

To use the grid breakpoints, you put a block level element with a class name like `col-<break label>-<colsize>` inside of a parent element with the class _container_, where _break label_ is one of the break point labels (e.g., 'sm') and _colsize_ is an integer from 1 to 12.

Example:
```html
<div class="container">
  <div class="row">
    <div class="col-md-8">
      <p>Hello world</p>
    </div>
  </div>  
</div>
```

## Fluid-Typography

The fluid type sets the default font size based upon the display width. The formula for the fluid type is taken from [this CSS Tricks article](https://css-tricks.com/snippets/css/fluid-typography/). Subsequent font-sizes (e.g., for headers) should be derived from that using `rem`.

TODO:
* document how to use :-)

## Components

### Navigation

A mobile-first, top navigatation (requires the `js` file and menu button images)

```html
<header>
  <div>...brand...</div>
  <nav class="nav-top">
    <button class="nav-top-menu-button"></button>
    <ul class="nav-top-menu">
      <li>Link 1</li>
      <li>Link 2</li>
    </ul>
  </nav>
</header>

```

### Alerts

```html
<div class="ss-alert ss-alert-info" role="alert">
  <p class="ss-alert-heading">Here is an alert heading</p>
  <p>Bibendum dolor volutpat sit aptent nostra ligula curae. Elementum velit vehicula habitasse rutrum blandit eros curabitur porttitor dictum.</p>
</div>
```

An alerts can be of four different color schemes: `ss-alert-info`, `ss-alert-success`, `ss-alert-warning`, `ss-alert-danger`.

## Utilities

### Spacing

Just like Bootstrap:

1. Choose the part of the box

* use `p` classes to modify `padding`
* use `m` classes to modify `margins`

2. Add a modifier to the padding or margin to affect the aspects:

* use `t` to modify `top`
* use `b` to modify `bottom`
* use `l` to modify `left`
* use `r` to modify `right`
* use `x` to modify `left` and `right`
* use `y` to modify `top` and `bottom`

3. Add a multiplier (0 - 5) to set the spacing.

0 = `0`  
1 = `.25rem`  
2 = `.5rem`  
3 = `1rem`  
4 = `1.5rem`  
5 = `3rem`  

example:
```html
<!-- set the margin top to the 1st multiplier -->
<div class="mt-1"></div>

<!-- set the horizontal padding to the 3rd multiplier -->
<div class="px-3"></div>
```

**Negative Margins**

Prefix an `n` to the muliplier to get negative margins:
```html
<div class="mx-n4"></div>
```

TODO
* document how to use
