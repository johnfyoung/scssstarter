# scssstarter
A SCSS starter library 

This is a lightweight, scss starter library.
* responsive layout based on grid
* fluid-typography

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
  <div class="col-md-8">
    <p>Hello world</p>
  </div>  
</div>
```

## Fluid-Typography

The fluid type sets the default font size based upon the display width. The formula for the fluid type is taken from [this CSS Tricks article](https://css-tricks.com/snippets/css/fluid-typography/). Subsequent font-sizes (e.g., for headers) should be derived from that using `rem`.

TODO:
* document how to use :-)
