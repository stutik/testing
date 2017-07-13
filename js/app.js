var app = angular.module('app', ['ngRoute']);

app.config(function($routeProvider){
    $routeProvider
        .when('/', {
            templateUrl : "template/home.html"
        })
        .when('/about', {
            templateUrl : "template/about.html"
        })
        .when('/work', {
            templateUrl : "template/work.html"
        })
        .when('/blog', {
            templateUrl : "template/blog.html"
        })
        .when('/contact', {
            templateUrl : "template/contact.html"
        })
        .otherwise('/');
});