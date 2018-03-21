angular.module('myApp').controller('productsCtrl', function($scope, $stateParams, productsSrvc){

    productsSrvc.getProduct($stateParams.id).then(response => {
console.log(response)
        ($scope.product = response)
    }); 
        
});
