function mdc(x, y){
	var resto;
	
	resto = x % y;
	if(resto != 0){
		
		x = y;
		y = resto;
		mdc(x, y);
		
	}
		return y;
	
	
}