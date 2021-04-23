const { src, dest, parallel, series, watch } = require('gulp');

const extreplace = require('gulp-ext-replace');

const mustache = require('gulp-mustache');
const less = require('gulp-less');

const htmlmin = require('gulp-htmlmin');
const cssmin = require('gulp-clean-css');
const purgecss = require('gulp-purgecss');
const svgmin = require('gulp-svgmin');

const destDir = './dist';

function compileTemplates() {
    return src('./src/index.mustache')
        .pipe(mustache())
        .pipe(extreplace('.html'))
        .pipe(htmlmin({
            collapseWhitespace: true,
            collapseInlineTagWhitespace: false,
            removeAttributeQuotes: true,
            removeComments: true
        }))
        .pipe(dest('./'));
}

function compileCSS() {
    return src('./src/css/style.less')
        .pipe(less())
        .pipe(cssmin({ level: { 1: { specialComments: 0 } } }))
        .pipe(purgecss({
            content: ['./index.html'],
        }))
        .pipe(dest(destDir));
}

function minifySVG() {
    return src('src/assets/*.svg')
        .pipe(svgmin({
            plugins: [
                { removeViewBox: false },
                { removeDimensions: false },
            ]
        }))
        .pipe(dest(function (file) { return file.base; }));
}

function watchTemplates() {
    return watch(['./src/index.mustache', './src/assets/*.svg'], { ignoreInitial: false }, compileTemplates);
}

function watchSCSS() {
    return watch(['./src/css/*.less'], { ignoreInitial: false }, compileCSS);
}

exports.default = series(minifySVG, parallel(compileTemplates, compileCSS));
exports.watch = parallel(watchTemplates, watchSCSS);