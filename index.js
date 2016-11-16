exports.numberFactors = function(number){
	var hasil = [];
	if(Number.isInteger(number)){
		for(var i = 1 ; i <= number ; i++){
			if(number % i == 0){
				hasil.push(i);
			}
		}
		console.log(hasil);
		return hasil;
	}else{
		console.log("Input Must Integer !");
	}
}
