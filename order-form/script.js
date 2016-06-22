function OrderFormController($scope){

	// Define the model properties. The view will loop
	// through the services array and genreate a li
	// element for every one of its items.
  $scope.Qty = 0;

	$scope.services = [
		{
			name: 'Web Development',
			price: 300,
			qty: 1,
			active:true
		},{
			name: 'Design        ',
			price: 400,
			qty:2,
			active:false
		},{
			name: 'Integration',
			price: 250,
			qty: 1,
			active:false
		},{
			name: 'Training      ',
			price: 220,
			qty:3,
			active:false
		}
	];


	$scope.toggleActive = function(s){
		s.active = !s.active;
	};

	// Helper method for calculating the line price
	$scope.lineTotal = function(s){
			var lineTotal=0;
			if (s.active){
						lineTotal+= (s.price * s.qty);
			}
		  return lineTotal;
	};

	// Helper method for calculating the total price
	$scope.getTotal = function(){

		var total = 0;
    var lineTotal=0;
		// Use the angular forEach helper method to
		// loop through the services array:

		angular.forEach($scope.services, function(s){
			if (s.active){
			    	total += (s.price * s.qty);
			}
		});


		return total;
	};
}
