console.log(Math.trunc(1000000000/3) + 1000000000/5 - Math.trunc(1000000000/15));

count = 0;

for(i=1; i<= 1000000000; i++){
	if(i % 3 === 0 || i % 5 === 0) {
		count++;
	}
}

console.log(count);


