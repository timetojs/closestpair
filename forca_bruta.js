var calcDist = function(par){
	var dX = Math.abs((par[0].x - par[1].x));
	var dY = Math.abs((par[0].y - par[1].y));
	return Math.sqrt( dX*dX + dY*dY );
};

var bruteForce = function(pares){

	var melhorPar = [ pares[0], pares[1] ]
	, melhorDist = calcDist(melhorPar)
	, dist;

	for(var i=1; i < pares.length; i++)
		for(var j = i+1; j< pares.length; j++){
			dist = calcDist([ pares[i], pares[j] ]);
			if( dist < melhorDist ){
				mehorDist = dist;
				melhorPar = [ pares[i], pares[j] ];
			}
		}

	return melhorPar;
};

// A = (4,3), B = (5,1), C = 1,4), D = (1,1), E = (4,0)
var pares = [
	{
		x: 4,
		y: 3
	},
	{
		x: 5,
		y: 1
	},
	{
		x: 1,
		y: 4
	},
	{
		x: 1,
		y: 1
	},
	{
		x: 4,
		y: 0
	}
];

console.log(bruteForce(pares));
