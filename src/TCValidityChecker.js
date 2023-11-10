function checkTC(tcno) {
	if (tcno.length != 11)
		return false;
	for (let i = 0; i < tcno.length; i++)
		if (isNaN(tcno[i])) return false;
	//check last digit
	let lastDigit = parseInt(tcno[10]);
	if (lastDigit % 2 !== 0) return false;

	//check first sum of 10 digits equals to 11th digit 
	let totalOfFirstTen = 0;
	for (let i = 0; i < 10; i++) totalOfFirstTen += parseInt(tcno[i]);
	let totalOfFirstTenStr = totalOfFirstTen.toString()
	if (totalOfFirstTenStr[totalOfFirstTenStr.length - 1] !== tcno[10]) return false;

	//First digit of Multiply of sum of 1th, 3th, 5rh, 7th and 9th digits with 7 equals to  first digit of multiply of sum of 2th,4th,6th,8th digits with 9
	let firstCalculation = 7 * (parseInt(tcno[0]) + parseInt(tcno[2]) + parseInt(tcno[4]) + parseInt(tcno[6]) + parseInt(tcno[8]));
	let secondCalculation = 9 * (parseInt(tcno[1]) + parseInt(tcno[3]) + parseInt(tcno[5]) + parseInt(tcno[7]));
	let resultOfCalculation = (firstCalculation + secondCalculation).toString();
	let firstDigit = resultOfCalculation[resultOfCalculation.length - 1];
	if (firstDigit !== tcno[9]) return false;

	//first digit of multiply of sum of 1th, 3th, 5th, 7th and 9th with 8 equals to 11th digit
	let lastCalculation = (8 * (parseInt(tcno[0]) + parseInt(tcno[2]) + parseInt(tcno[4]) + parseInt(tcno[6]) + parseInt(tcno[8]))).toString();
	if (lastCalculation[lastCalculation.length - 1] !== tcno[10]) return false;
	
	return true;

}