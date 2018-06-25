/**
 * _refreshPageData() will call automatically when page loaded
 *  Calling _refreshPageData() after every add & Remove of data
 */

var myWebservice=angular.module("myApp",[]);

myWebservice.controller("ServiceController", function($scope, $http) {
	_refreshPageData();
	//Check url according to your Application name & PORT
	function _refreshPageData(){
$http({
	method: 'GET',
	url: 'http://localhost:8081/SpringAngularHiber/rest/countries.json'
		}).success(function(data)
			{
				
			$scope.posts = data; // response data 
			
			});
	}
$scope.form = {
		countryId : 1,
		countryName : "",
		population : ""
	
	};

$scope.add=function(){
	//Check url according to your Application name & PORT
	
	$http({
		method:'POST',
		url:'http://localhost:8081/SpringAngularHiber/rest/countries/create/'+$scope.form.countryId+'/'+$scope.form.countryName+'/'+$scope.form.population
	}).success(function(data)
			{
			alert("DATA ADDED");	
			_refreshPageData();
			
			});
	
}
$scope.remove=function(data){
	
	//Check url according to your Application name & PORT	
	$http({
		method:'DELETE',
		url:'http://localhost:8081/SpringAngularHiber/rest//countries/delete/'+data
	}).success(function(data)
			{
			alert('Data Deleted')	
			 _refreshPageData();
			
			});
	
}

$scope.getCountryMap=function(data){
	
	//Check url according to your Application name & PORT	
	$http({
		method:'GET',
		url:'http://localhost:8081/SpringWithAngular/rest//countries/map/'+data
	}).success(function(data)
			{
			$scope.map = "http://localhost:8081/SpringAngularHiber/images/"+data; // response data 
			});
	
}

	
		
	
	
});

