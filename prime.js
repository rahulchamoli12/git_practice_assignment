function prime(num){
	let fac=0;
for(let i=0; i<=num; i++){
	if(num%i==0){
	fac++
	}
	}
if(fac==2){
return true;
}
return false;
}

let ans = prime(13);

if(ans==true){
console.log("Prime");
}else{
console.log("Not Prime");
}