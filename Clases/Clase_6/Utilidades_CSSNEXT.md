# Uso de variables 

Dentro de CSS se define 

:root{ }

Y dentro de ella se escribe la variable con 2 guiones y el valor ejemplo:

:root{
	
	--rojito : red; 
}

#### Para usar la variable:

body{
	
	background: var(--rojito);
}