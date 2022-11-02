function prime(number){
	let factor=0;
for(let i=0; i<=number; i++){
	if(number%i){
	fac++;
	}
	}
if(factor == 2){
return true;
}else{
return false;
}
}

let answer = prime(13);
if(answer==true){
console.log("Is a Prime Number");
}else{
console.log("Is Not a Prime Number");
}