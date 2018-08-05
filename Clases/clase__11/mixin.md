# No es parte de cssnext

pero muy utilizado en los pre procesadores, el cual cumple la funcion de hacer un proceso que se repite varias veces 

## Instarlo

npm install --save-dev postcss-mixins 

#### Se debe agregar en el archivo gulpfile.js

## Ejemplo 


@define-mixin boton $color, $background, $degradadoI, $degradadoF {
	color: $(color);
	border-radius: 12px;
	border: none; 
	padding: 7px 12px; 
	cursor: pointer;
	font-size: var(--fontSize); 
	text-decoration: none; 
	background: $(background);
	background: linear-gradient(to left , $(degradadoI) , $(degradadoF)); 
}


.btn{

			@mixin boton var(--bg-body) , var(--btn-degradado) , var(--btn-degradado) , var(--btn-deg-inicio), var(--btn-deg-fin); 
	
		}