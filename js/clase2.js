function definirEstructura(){
	arreglos = new Array();
	arreglos.push({
		"cedula": "123456987",
		"nombre": "marco",
		"apellido": "maldonado",
		"correo": "maldonmarco@gmail.com"
	});
		arreglos.push({
		"cedula": "98756423658",
		"nombre": "isaura",
		"apellido": "hernandez",
		"correo": "hernandez@gmail.com"
	});

	return arreglos;

} 

var a = definirEstructura();
console.log(a);


function info() {
	document.getElementById("tabla").innerHTML = a[0]["nombre"];
  }
  
for (var i in a){ 
  for(key in a[0]){
      console.log(a[0][key]);
  }
}

for (var i in a){ 
  for(key in a[0]){
      document.write(key, a[0][key]);
  }
}

