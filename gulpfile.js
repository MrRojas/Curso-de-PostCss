// Invocar Gulp
var gulp = require('gulp')
// Invocar Postcss con gulp 
var postcss = require('gulp-postcss')

// Plugins de PostCSS 
var nested = require('postcss-nested')

var mixin = require('postcss-mixins')
var importe = require('postcss-import')

var cssw = require('csswring')

var ruck = require('css-mqpacker')

var cssnext = require('postcss-cssnext')

//Invocar browserSync
var browserSync = require('browser-sync')

// servidor de Desarrollo con Gulp
// task son las tareas a ejecutar en la cual se pasa un nombre y una funcion 
gulp.task( 'serve' , () => {

	// llamar a browserSync
	// se pasa un objeto de configuracion 
	browserSync.init({
		// configurar donde arranca el server 
		server: {
			baseDir : './dist'
		}
	})

})

// tarea para procesar CSS 

gulp.task('css' , () =>{

	// array con los plugins de postcss que debemos instalar con anterioridad 
	var plugins = [  importe()  , mixin(),  nested()  , cssnext() , ruck() , cssw()  ]
	

	// primero lee todo los que se pasa en src, en este caso todo lo que sea .css  
	return gulp.src('./src/main.css')
	// luego asignamos pipe (tuberias) para que se mueve en el directorio con la ayuda de node_js 
	// al cual al primero le asignamos postcss pasando el array de plugins
	.pipe(postcss( plugins ))
	// una segunda tuberia en el cual le decimos a gulp donde dejar los archivos procesados 
	.pipe(gulp.dest('./dist/css/'))
	// y asignamos un ultimo pipe donde le decimos a browserSync que recargue 
	.pipe(browserSync.stream())

})

// tarea para vigilar los cambios 

gulp.task('watch' , () => {
	// vigilar los cambios en css
	// 1er parametro es la ruta del archivo a vigilar 
	// 2do parametro un array con las tareas a ejecutar 
	gulp.watch('./src/*.css' , ['css'] )
	// vigila cuando surja un cambio en el html 
	// browserSync.reload es para recargar el navegador 
	gulp.watch('./dist/*.html').on('change' , browserSync.reload )
})

// Por ultimo 

// Una tarea que llama al arreglo de tareas a ejecutar 

gulp.task('default' , ['watch' , 'serve'] )