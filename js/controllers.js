var pexesoApp = angular.module('pexesoApp', []);

pexesoApp.shuffle = function (array) {
	var currentIndex = array.length
			, temporaryValue
			, randomIndex
			;

	while (0 !== currentIndex) {
		randomIndex = Math.floor(Math.random() * currentIndex);
		currentIndex -= 1;

		temporaryValue = array[currentIndex];
		array[currentIndex] = array[randomIndex];
		array[randomIndex] = temporaryValue;
	}

	return array;
}

pexesoApp.controller('pexesoCtrl', function pexesoCtrl($scope) {	
	
	function Tile(x,y,type) {
		this.x = x;
		this.y = y;
		this.type = type;
	}
	
	var size = 4;
	
	if((size % 2) != 0) {
		console.log('size must be even');
		return false;
	}
	
	var numTypes = (size * size) / 2;
	var typesKey = [];
	
	for(var x = 1; x <= numTypes; ++x) {
		for(var y = 1; y <= 2; ++y){
			typesKey.push(x);
		}
	}
	
	typesKey = pexesoApp.shuffle(typesKey);
	
	$scope.board = [];
	
	for(var y = 1; y <= size; ++y) {
		var r = [];
		for(var x = 1; x <= size; ++x) {
			var t = new Tile(x,y,typesKey.pop());
			r.push(t);
		}
		$scope.board.push(r);
	}

	$scope.tileClick = function(x,y,type) {
		console.log(x,y,type);
	}
});
