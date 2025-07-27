const { src, dest, parallel, watch } = require('gulp'),
	concat = require('gulp-concat'),
	sass = require('gulp-sass')(require('sass')),
	autoprefixer = require('gulp-autoprefixer'),
	cleancss = require('gulp-clean-css'),
	imagemin = require('gulp-imagemin'),
	svgmin = require('gulp-svgmin');

const srcDir = 'src', distDir = 'public', nodeDir = 'node_modules';

const path = {
	
    sass:{
        dist: `${distDir}/bundle/`,
		node: [],
        src: `${srcDir}/sass/styles.sass`,
        watch: `${srcDir}/sass/**/*.sass`
    },

	fonts:{
		dist: `${distDir}/bundle/fonts/`,
        src: `${srcDir}/fonts/**/*.{woff,woff2,eot,ttf}`,
	},

	img: {
		src: `${srcDir}/images/**/*.{jpg,jpeg,png}`,
		watch: `${srcDir}/images/**/*.{jpg,jpeg,png}`,
		dist: `${distDir}/images/`
	},

	svg: {
		src: `${srcDir}/images/*/*.svg`,
		watch: `${srcDir}/images/*/*.svg`,
		dist: `${distDir}/images/`
	}
}

function getPath(type){
	
	let temp = [];

	for(let item of path[type]['node']){
		temp.push(item);
	}

	temp.push(path[type].src);

	return temp

}

function styles() {

	return src(getPath('sass')) 
		.pipe(sass()) 
		.pipe(concat('bundle.min.css')) 
		.pipe(autoprefixer({ overrideBrowserslist: ['last 10 versions'], grid: true })) 
		.pipe(cleancss( { level: { 1: { specialComments: 0 } } } )) 
		.pipe(dest(path.sass.dist)) 

}

function img() {

	return src( path.img.src )
		.pipe(imagemin())
		.pipe(dest( path.img.dist ))

}

function svg() {

	return src( path.svg.src )
		.pipe(svgmin({
			js2svg:{
				pretty: true
			}
		}))
		.pipe(dest( path.svg.dist ))

}

function fonts(){

	return src(path.fonts.src)
    .pipe(dest(path.fonts.dist))

}

function startwatch() {
 
	watch(path.sass.watch, styles);
    watch(path.img.watch, img);
    watch(path.svg.watch, svg);

}

exports.fonts = fonts;
exports.styles = styles;
exports.img = img;
exports.svg = svg;
exports.default = parallel(fonts, svg, img, styles, startwatch);