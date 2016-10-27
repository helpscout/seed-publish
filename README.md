# seed-publish [![npm version](https://badge.fury.io/js/seed-publish.svg)](https://badge.fury.io/js/seed-publish)

Mixins that manage rendered CSS from modular importing

## Install
```
npm install seed-publish --save
```


## Basic Usage

### SCSS
This seed pack needs to be imported into your sass pipeline. Below is an example using Gulp:


```javascript
var gulp = require('gulp');
var sass = require('gulp-sass');
var pack = require('seed-publish');

gulp.task('sass', function () {
  return gulp.src('./sass/**/*.scss')
    .pipe(sass({
      includePaths: pack
    }))
    .pipe(gulp.dest('./css'));
});
```

Once that is setup, simply `@import` *seed-publish* as needed in your `.scss` file:

```scss
// Packs
@import "pack/seed-publish/_index";
```

## Options

The following variables can be found in `_config.scss`

```scss
seed-publish config options
```
