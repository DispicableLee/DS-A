const l = [3,153]



function armstrongNumber(arr) {
	const rArr = []
	for(const i of arr){
		let a = i
		let z = 0
		for(const j of a.toString().split("")){
			z = z + j*j*j
		}
		console.log(z)
		if(z===i){
			rArr.push("It is an ARMSTRONG number")
		}else{
			rArr.push("It is NOT an ARMSTRONG number")
		}
	}
	return rArr
}


console.log(armstrongNumber(l))