const { src, dest, parallel, series, watch } = require('gulp');

const extreplace = require('gulp-ext-replace');

const mustache = require('gulp-mustache');
const less = require('gulp-less');
const webpack = require('webpack-stream');
const babel = require('gulp-babel');

const htmlmin = require('gulp-htmlmin');
const cssmin = require('gulp-clean-css');
const jsmin = require('gulp-uglify');
const svgmin = require('gulp-svgmin');

const destDir = './dist';

function compileTemplates() {
    return src('./src/index.mustache')
        .pipe(mustache())
        .pipe(extreplace('.html'))
        .pipe(htmlmin({
            collapseWhitespace: true,
            collapseInlineTagWhitespace: true,
            removeAttributeQuotes: true,
            removeComments: true
        }))
        .pipe(dest('./'));
}

function compileCSS() {
    return src('./src/css/style.less')
        .pipe(less())
        .pipe(cssmin({ level: { 1: { specialComments: 0 } } }))
        .pipe(dest(destDir));
}

function compileJS() {
    return src('./src/main.js')
        .pipe(webpack({
            output: {
                filename: '[name].js',
            },
            stats: 'errors-only',
        }))
        .pipe(babel({
            presets: ['@babel/preset-env']
        }))
        .pipe(jsmin())
        .pipe(dest(destDir))
}

function minifySVG() {
    return src('src/assets/*.svg')
        .pipe(svgmin({
            plugins: [
                { removeViewBox: false },
                { removeDimensions: true }
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

function watchJS() {
    return watch(['./src/main.js'], { ignoreInitial: false }, compileJS);
}

exports.default = series(minifySVG, parallel(compileTemplates, compileCSS, compileJS));
exports.watch = parallel(watchTemplates, watchSCSS, watchJS);