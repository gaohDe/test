/**
 * Created by gaohuan on 2017/5/29.
 */
app.controller("loginCtrl",  function ($scope) {
    console.log("dfsfsdf");
    var contentHeight = $(window).height();
    $("#login").height(contentHeight);
    console.log(contentHeight);
    $scope.submit = function(){
        $state.go('app.ggg');
    };
});