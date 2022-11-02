function prime(num){
	let fac=0;
for(let i=0; i<=num; i++){
	if(num%i){
	fac+=i
	}
	}
return fac;
}

prime(13);