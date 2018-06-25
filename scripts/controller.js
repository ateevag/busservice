var webmodule = angular.module("myModule", ['ngRoute']);

webmodule.config(

    function ($routeProvider) {
        $routeProvider

            .when('/home', {
                templateUrl: 'pages/home.html',
                controller: 'myCtrl'
            })

            .when('/about', {
                templateUrl: 'pages/about.html',
                controller: 'myCtrl'
            })

            .when('/service', {
                templateUrl: 'pages/service.html',
                controller: 'myCtrl'
            })

            .when('/faq', {
                templateUrl: 'pages/faq.html',
                controller: 'myCtrl'
            })

            .when('/tnc', {
                templateUrl: 'pages/tnc.html',
                controller: 'myCtrl'
            })

            .when('/view', {
                templateUrl: 'pages/viewticket.html',
                controller: 'myCtrl'
            })

            .when('/cancel', {
                templateUrl: 'pages/canceltiket.html',
                controller: 'myCtrl'
            })
          

            .otherwise({ redirectTo: 'home' });
    })

webmodule.controller("myCtrl", ['$scope', function ($scope) {
    $scope.message = 'Everyone come and see how good I look!';
    this.myDate = new Date();


}]);



webmodule.controller("ServiceController", function ($scope, $http) {
    // _refreshPageData();
    // // Check url according to your Application name & PORT
    // function _refreshPageData() {
    //     $http({
    //         method: 'GET',
    //         url: 'http://localhost:8081/SpringAngularHiber/rest/countries.json'
    //     }).success(function (data) {

    //         $scope.posts = data; // response data 

    //     });
    // }
    $scope.form1 = {
        source: "",
        destination: "",
        date: ""

    };
    console.log(form1.source);
    console.log(form1.destination);
    console.log(form1.date);

    // $scope.search = function () {
    //     //Check url according to your Application name & PORT
    //     console.log(form1.source,form1.destination,form1.date);
    //     $http({
    //         method: 'POST',
    //         url: 'http://localhost:8081/SpringAngularHiber/rest/countries/create/' + $scope.form1.source + '/' + $scope.form1.destination + '/' + $scope.form1.date
    //     }).success(function (data) {
    //         alert("DATA ADDED");
    //         _refreshPageData();

    //     });

    // }
    // // $scope.remove = function (data) {

    //     //Check url according to your Application name & PORT	
    //     $http({
    //         method: 'DELETE',
    //         url: 'http://localhost:8081/SpringAngularHiber/rest//countries/delete/' + data
    //     }).success(function (data) {
    //         alert('Data Deleted')
    //         _refreshPageData();

    //     });

    // }

    // $scope.getCountryMap = function (data) {

    //     //Check url according to your Application name & PORT	
    //     $http({
    //         method: 'GET',
    //         url: 'http://localhost:8081/SpringWithAngular/rest//countries/map/' + data
    //     }).success(function (data) {
    //         $scope.map = "http://localhost:8081/SpringAngularHiber/images/" + data; // response data 
    //     });

    // }



});
