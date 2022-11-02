function prime(number){
	let factor=0;
for(let i=0; i<=num; i++){

	if(number%i==0){
	factor++;
	}
	}
if(factor == 2){
return true;
}else{
return false;
}
}



let ans = prime(13);

let answer = prime(13);
if(ans==true){
console.log("Is a Prime Number");
}else{
console.log("Is Not a Prime Number");
}