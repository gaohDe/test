/**
 * Created by gaohuan on 2017/5/29.
 */
app.controller("loginCtrl", ["$state","$scope",function ($state,$scope) {
    var contentHeight = $(window).height();
    $("#login").height(contentHeight);
    $scope.submit = function(){
        $state.go('app.processAnalysis');
    };
}]);