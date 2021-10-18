const foodsToCook = ["Escabeche de pollo","Pollo al sillao",
"Estofado de pollo","Ají de pollo","Lomo saltado","Carapulcra",
"Puré de papas","Arroz con pollo","Seco de carne","Arroz a la jardinera",
"Cau-cau","Arroz con lentejas","Tallarín verde","Tallarín rojo","Macarrones",
"Olluco con carne","Picante de carne","Arroz chaufa",
"Bistek con papa sancochada","Pollo a la olla","Pollo broaster",
"Pollo al horno","Causa","Chanfainita","Arroz con huevo",
"Papa a la huancaína","Ensalada rusa con milanesa","Arroz con atún",
"Arroz con huevo"];

function randNumber(){
	number = Math.floor(Math.random()*28);
	return number;
}

document.getElementById("botoncito").addEventListener("click",function(){

	let n1 = randNumber();

	let n2 = randNumber();
	while (n2==n1){
		n2 = randNumber();
	}

	let n3 = randNumber();
	while (n3==n1 || n3==n2){
		n3 = randNumber();
	}

	let n4 = randNumber();
	while (n4==n1 || n4==n2 || n4==n3){
		n4 = randNumber();
	}

	let n5 = randNumber();
	while (n5==n1 || n5==n2 || n5==n3 || n5==n4){
		n5 = randNumber();
	}
	
	let food1 = foodsToCook[n1];
	let food2 = foodsToCook[n2];
	let food3 = foodsToCook[n3];
	let food4 = foodsToCook[n4];
	let food5 = foodsToCook[n5];

	document.getElementById("food1").innerText = food1;
	document.getElementById("food2").innerText = food2;
	document.getElementById("food3").innerText = food3;
	document.getElementById("food4").innerText = food4;
	document.getElementById("food5").innerText = food5;

});
