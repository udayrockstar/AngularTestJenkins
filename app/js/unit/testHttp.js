    describe('mock http test', function() {

        var httpData = {
            Search: [{
                title: 'Terminator'
            }]
        };

        beforeEach(module('broadcastTest'));
        /*********************************** Test case for HTTP Request *******************************************************/
        beforeEach(inject(function(_$controller_, _$httpBackend_) {
            $controller = _$controller_;
            $scope = {};
            $httpBackend = _$httpBackend_;
            $httpBackend.whenGET('http://localhost/test_cases/app/js/example.json').respond({
                Search: httpData
            });
        }));

        it('should load default movies (with mock http request)', function() {
            var moviesController = $controller('MovieController', {
                $scope: $scope
            });
            $httpBackend.flush();
            expect($scope.movies).toEqual(httpData);
            // expect($scope.status).toEqual(200);
            // expect($scope.gotData).toEqual(httpData);
        });

        it('should load default movies (with mock http request)', function() {
            var moviesController = $controller('MovieController', {
                $scope: $scope
            });
            $httpBackend.flush();
            expect($scope.status).toEqual(200);
        });

        /*************************** Testing Services *************************************************************************/

        // it("testServices",inject(function(testServices){
        //     expect(testServices.getName()).toBe("Uday Hosamani");
        // }));

        /**************************** Services with HTTP Test cases*************************************************************/

        it('should load default movies (with mock http request)', function() {
            var moviesController = $controller('MovieController', {
                $scope: $scope
            });
            $httpBackend.flush();
            // expect($scope.gotData).toEqual(httpData);
            // expect($scope.service_status).toEqual(200);
            // console.log($scope.res.data.Search);
            // expect($scope.res.status).toBe(200);
            expect($scope.res.data.Search).toEqual(httpData);
        });

        it('should load default movies (with mock http request)', function() {
            var moviesController = $controller('MovieController', {
                $scope: $scope
            });
            $httpBackend.flush();
            expect($scope.res.status).toBe(200);
        });
    });
