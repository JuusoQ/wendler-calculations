
const countWeights = (week, repmax) => {
	switch(week) {
		case 1:
			return [0.65*repmax,0.75*repmax,0.85*repmax];
		case 2:
			return [0.70*repmax,0.80*repmax,0.9*repmax];
		case 3: 
			return [0.75*repmax,0.85*repmax,0.95*repmax];
		default:
			return [0.4*repmax,0.5*repmax,0.6*repmax];
	}
}

const countLoadings = (loadings = [], weight, barbell=20) => {	
	
	if ((weight-barbell)-50 > 0) {
		loadings = loadings.concat(25);
		return countLoadings(loadings,weight-50,barbell);
	} else if ((weight-barbell)-40>0) {
		loadings = loadings.concat(20);
		return countLoadings(loadings,weight-40,barbell);
	} else if ((weight-barbell)-30>0) {
		loadings = loadings.concat(15);
		return countLoadings(loadings,weight-30,barbell);
	} else if ((weight-barbell)-20>0){
		loadings = loadings.concat(10);
		return countLoadings(loadings,weight-20,barbell);
	} else if ((weight-barbell)-10>0)  {
		loadings = loadings.concat(5);
		return countLoadings(loadings,weight-10,barbell);
	} else if ((weight-barbell)-5>0)  {
		loadings = loadings.concat(2.5);
		return countLoadings(loadings,weight-5,barbell);
	} else if ((weight-barbell)-2.5>0)  {
		loadings = loadings.concat(1.25);
		return countLoadings(loadings,weight-2.5,barbell);
	}else {
		return loadings
	}
}

module.exports = {
	countLoadings,
	countWeights
}
