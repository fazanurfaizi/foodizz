const dateFormat = (date: string) => {
	const monthIndex: string = date.substring(5, 7).replace(/^0+/, '');
	const months: string[] = [
		'Jan',
		'Feb',
		'Mar',
		'Apr',
		'May',
		'Jun',
		'Jul',
		'Aug',
		'Sep',
		'Oct',
		'Nov',
		'Dec',
	];
	const monthName: string = months[+monthIndex - 1];
	const day: string = date.substring(8, 10).replace(/^0+/, '');
	const year: string = date.substring(0, 4);
	const hour: string = date.substring(11, 16);
	const formated: string =
	  monthName + ' ' + day + ',' + ' ' + year + ' ' + '-' + ' ' + hour;
  
	return formated;
};
  
export { dateFormat };
