 //describe("Hello", function() {
//
//     beforeEach(function() {
//         module("broadcastTest");
//     });
//     // it("Start Test", function() {
//     //
//     //     var scope = {},cntl;
//     //     inject(function($controller) {
//     //         cntl = $controller("ParentCtrl",{$scope: scope});
//     //     })
//     //     console.log(scope);
//     //     spyOn(scope, "$broadcast").andCallThrough();
//     //     // expect(scope.name).toBeDefined();
//     //     // expect(scope.name).toBe("Hello");
//     // });
//
//     var rootScope;
// beforeEach(inject(function($injector) {
//     rootScope = $injector.get('$rootScope');
//     spyOn(rootScope, '$emit');
// }));
//
// console.log(rootScope);
// describe("my tests", function() {
//     it("should broadcast something", function() {
//         // rootScope.click();
//         // rootScope.apply();
//         expect(rootScope.$broadcast).toHaveBeenCalledWith('going');
//     });
// });
// });

//-----------------------------------***********************------------------//
// 'use strict';
//
// describe('The notes controller', function() {
//
//   beforeEach(module('broadcastTest'));
//
//   var scope, rootScope, NotesCtrl;
//
//   beforeEach(inject(function($controller, $injector, $rootScope) {
//     rootScope = $rootScope;
//     scope = $rootScope.$new();
//     NotesCtrl = $controller('ParentCtrl', {$scope: scope});
//     spyOn(rootScope, '$emit').andCallThrough();
//   }));
//
// console.log(NotesCtrl);
//   it('should respond to the `resource-loaded` event', function() {
//     // var data = {
//     //   type: 'listing',
//     //   id: 1
//     // };
//     // rootScope.$broadcast('send');
//     //console.log(rootScope.$broadcast);
//     // rootScope.val = 4;
//     // rootScope.$apply();
//     //console.log(rootScope);
//     expect(rootScope.$broadcast).toHaveBeenCalledWith('send');
//     // expect(scope.parentType).toBe('listing');
//     // expect(scope.parentId).toBe(1);
//   });

//--------------------------***************-------------------------------//
    /*describe("Start", function(){
    var rootScope;
    beforeEach(inject(function($injector) {
        rootScope = $injector.get('$rootScope');
        // console.log(rootScope.$broadcast);
        // spyOn(rootScope, '$broadcast');
    }));

    spyOn(rootScope, '$broadcast').and.callThrough();
    expect($rootScope.$broadcast).toHaveBeenCalledWith('send')

});*/
