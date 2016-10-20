var app = angular.module('broadcastTest', []);
// app.config(['$routeProvider',
//   function($routeProvider) {
//     $routeProvider.
//       when('/uday', {
//         templateUrl: 'templates/roman_converter.html',
//         controller: 'romanCntl'
//       }).
//       otherwise({
//         redirectTo: '/'
//       });
//   }]);

app.controller('myController', function($scope, $rootScope) {
        $scope.name = "First";
        // Calling Child Controller function
        $rootScope.$broadcast('myObj', false);
        $rootScope.$broadcast('myObj', false);

        //calling from child
        $scope.$on("pCall", function(event, status) {
            // console.log('called');
        })
    })



    .controller("secondController", function($scope, $rootScope, $http) {
        $scope.name = "Second";
        $scope.$on("myObj", function(event, status) {
            console.log(status);
            // console.log("Hello");
        });
        $rootScope.$emit("pCall", false);

    })

    // .controller("romanCntl", ['$scope', function($scope){
    //     $scope.name = "Ng-Controller";
    // }])


app.factory("myService", ['$http', function($http) {
    return {
        getResponders: (function(response) {    
            return $http.get('http://localhost/test_cases/app/js/example.json')
                .then(function(response, status) {
                    console.log("coming from servicejs", response.data);
                    //return data when promise resolved
                    //that would help you to continue promise chain.
                    console.log("Res =" + response.status);
                    return response;
                });
        })()
    };
    //return myService;
}]);



app.controller('MovieController', function movieController($scope, $http, myService) {
    /*------------------------------------Simple HTTP Request-------------------------------------*/
    var getMovieData = function () {
        $http.get('http://localhost/test_cases/app/js/example.json').success(function(data, status, headers, config) {
            $scope.status = status;
            $scope.movies = data.Search;
        }).error(function(data, status, headers, config) {
            $scope.movies = [];
        });
    };
    getMovieData();


    /*----------------------------------- Calling from Factory services-------------------------*/
    myService.getResponders.then(function(data) {
        $scope.gotData = data.data.Search;
        $scope.res = data;
    });
});
