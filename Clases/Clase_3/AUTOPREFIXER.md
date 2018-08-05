# Es un Plugin de PostCSS 

El cual nos permite escribir css siguiendo el estandar, pero al procesarlo agrega el prefixer a cada elementos 

## Comando para Instalarlo 

npm install --save-dev autoprefixer 

## Luego debemos Referencia el archivo en gulpfile.js 

var autoprefixer = require('autoprefixer')

## Y por ultimo asignar en el array de plugins de PostCSS 

// array con los plugins de postcss que debemos instalar con anterioridad 
	var plugins = [
		// prefijos para los navegadores que tengan mas del 5% y a InternetExplore apartir del 8
		autoprefixer({ browsers: ['>5%' , 'ie 8'] })
	]
