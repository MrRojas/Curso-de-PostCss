# Es otro plugin de PostCSS

## Comando para Instalarlo 

npm install --save-dev nested

## Sintaxis del lado de desarrollo 

.InvieHero{

	padding: 20px; 
	height: 500px; 

	&-header{
		display: flex;
		flex-direction: row;
		justify-content: space-between;
		background: red;
	}
} 

y en el gulp se agrega 


var nested = require('postcss-nested')

var plugins = [ autoprefixer() , nested() ]