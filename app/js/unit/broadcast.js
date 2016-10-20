describe("myController", function() {
    var scope, rootScope;

    beforeEach(module('broadcastTest'));

    beforeEach(inject(function($rootScope) {
        scope = $rootScope.$new();
        rootScope = $rootScope;
    }));

//----------------------------------------------Parent Controller to child Controller Communication ----------------------------------------//
    describe('myController', function() {

        it('rootScope broadcast called', inject(function($controller, $rootScope) {
            spyOn($rootScope, '$broadcast');
            // spyOn($rootScope, '$broadcast').and.callThrough();
            $controller('myController', {
                $scope: scope,
                $rootScope: rootScope
            });
            expect($rootScope.$broadcast).toHaveBeenCalled();
        }));

        it("Broadcast called with parameter", inject(function($rootScope, $controller){
            spyOn($rootScope, '$broadcast');
            $controller('myController', {
                $scope: scope,
                $rootScope: rootScope
            });
            expect($rootScope.$broadcast).toHaveBeenCalledWith('myObj',false);
        }));

        it("Broadcast called with count", inject(function($rootScope, $controller){
            spyOn($rootScope, '$broadcast');
            $controller('myController', {
                $scope: scope,
                $rootScope: rootScope
            });
            expect($rootScope.$broadcast.calls.count()).toBe(2);
        }));
    });

//--------------------------------------------------------From child Controller to Parent Controller Communication ------------------------------------//

    describe("From Child Controller", function() {

        it("Emit has been called", inject(function($controller, $rootScope) {
             spyOn($rootScope, '$emit');
            $controller('secondController', {
                $scope: scope,
                $rootScope: rootScope,
            });
            expect($rootScope.$emit).toHaveBeenCalled();
        }));

        it("Emit called with parameter", inject(function($controller, $rootScope) {
             spyOn($rootScope, '$emit');
            $controller('secondController', {
                $scope: scope,
                $rootScope: rootScope,
            });
            expect($rootScope.$emit).toHaveBeenCalledWith('pCall',false);
        }));

        it("Emit called with count", inject(function($controller, $rootScope) {
             spyOn($rootScope, '$emit');
            $controller('secondController', {
                $scope: scope,
                $rootScope: rootScope,
            });
            expect($rootScope.$emit.calls.count()).toBe(1);
        }));
    });
});
