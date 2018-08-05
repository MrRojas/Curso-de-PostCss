var gulp = require('gulp')
var postcss = require('gulp-postcss')

// Plugins de PostCSS 
var autoprefixer = require('autoprefixer')

var browserSync = require('browser-sync')

gulp.task( 'serve' , () => {


	browserSync.init({ 
		server: {
			baseDir : './dist'
		}
	})

})


gulp.task('css' , () =>{

	// array con los plugins de postcss que debemos instalar con anterioridad 
	var plugins = [
		// prefijos para los navegadores que tengan mas del 5%
		autoprefixer({ browsers: ['>5%'] })
	]

	return gulp.src('./src/*.css')
	.pipe(postcss(plugins))
	.pipe(gulp.dest('./dist/css'))
	.pipe(browserSync.stream())

})

// tarea para vigilar los cambios 

gulp.task('watch' , () => {
	gulp.watch('./src/*.css' , ['css'] )
	gulp.watch('./dist/*.html').on('change' , browserSync.reload )
})


gulp.task('default' , ['css' , 'serve'] )