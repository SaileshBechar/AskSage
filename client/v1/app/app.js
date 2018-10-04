"use strict";


angular.module('myApp', ['ngRoute', 'ngMessages'])
    .config(['$routeProvider', '$locationProvider', function ($routeProvider, $locationProvider) {          
        var isLoggedin = function($http){
            var userId = sessionStorage.getItem('userId');
            var token = sessionStorage.getItem('token');

            if (token != null && userId != null){
                /*TO UNCOMMENT ONCE HTTP IS USED FOR AUTH*/
                // $http.get('/api/Brokers/' + userId + '/accessTokens/' + token + '?access_token=' + token)
                // .then(function (response) {
                //     console.log('Authenticate says its logged in');
                //     return true;
                
                // $http({
                //     method: 'GET',
                //     // headers: { 'Content-Type': 'application/x-www-form-urlencoded'},
                //     url: '/api/Brokers/' + userId + '/accessTokens/' + token + '?access_token=' + token
                // })
                // .then(function (response) {
                    return true;
                // },
                // function errorCallback(response) {
                //     // Called asynchronously if an error occurs     
                //     console.log('Authenticate says its NOT logged in');                   
                //     console.log(token);
                //     console.log(userId);
                //     return false;

                // });                
            }
            else{ 
                return false;
            }
        }
        
        $routeProvider
            .when("/login", {
                templateUrl: '../views/login.html',
                controller: 'LoginCtrl',
                resolve: {                      
                    "Validate" : function($location){
                        var loggedin = isLoggedin();
                        if (loggedin){
                            $location.path('/home'); 
                        }             
                    }
                }
            })
            .when("/newuser", {
                templateUrl: '../views/newUser.html',
                controller: 'NewUserCtrl',
                resolve: {
                    "Validate" : function($location){
                        var loggedin = isLoggedin();
                        if (!loggedin){
                            $location.path('/login'); 
                        }             
                    }
                }
            })
            .when("/feedback", {
                templateUrl: '../views/feedback.html',
                controller: 'FeedbackCtrl',
                resolve: {
                    "Validate" : function($location){
                        var loggedin = isLoggedin();
                        if (!loggedin){
                            $location.path('/login'); 
                        }             
                    }
                }
            })
            .when("/chat", {
                templateUrl: 'views/chat.html',
                controller: 'ChatCtrl',
                resolve: {
                    "Validate" : function($location){
                        var loggedin = isLoggedin();
                        if (!loggedin){
                            $location.path('/login'); 
                        }             
                    }
                }
            })
            .when("/home", {
                templateUrl: 'views/home.html',
                controller: 'HomeCtrl',
                resolve: {                   
                    "Validate" : function($location){
                        var loggedin = isLoggedin();
                        if (!loggedin){
                            $location.path('/login'); 
                        }             
                    }
                }
            })
            .when("/profile", {
                templateUrl: 'views/profile.html',
                controller: 'ProfileCtrl',
                resolve: {
                    "Validate" : function($location){
                        var loggedin = isLoggedin();
                        if (!loggedin){
                            $location.path('/login'); 
                        }             
                    }
                }
            })
            .otherwise({
                redirectTo: "/login"
            })
    }])

    
    //All Controllers start from here
    .controller('LoginCtrl', function ($scope, $http, $location) {

        $scope.tile = "Sign in";
        $scope.appName = $scope.app.title; //APP NAME from appCtrl      


        //Login function
        $scope.login = function (app) {
            // POST http://localhost:3000/api/Users/login
            // parameter: Email, password
            // parameters are sent as form-urlencoded data
            $http({
                method: 'POST',
                data: $.param({ email: $scope.email, password: $scope.password }),
                headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
                url: '/api/Brokers/login'
            })
            .then(function (response) {
                // POST 200 success
                //Add to Session Storage
                sessionStorage.userId = response.data.userId;
                sessionStorage.token = response.data.id;

                //Success path -> Redirect to Home
                 $location.path("/home");
               
            },
            function errorCallback(response) {
                // Called asynchronously if an error occurs
                console.log(response);
                M.toast({ html: "Please try again: " + response.statusText });
            });
        };
    })

    .controller('FeedbackCtrl', function ($scope, $http) {

        //Get feedback
        //Post to feedback api
        //Store analytics

    })

    .controller('NewUserCtrl', function ($scope, $http, $location) {
        $scope.title = "Broker Registration";

        $scope.register = function (app) {

            // POST http://localhost:3000/api/Users
            // parameters sent as form data
            $http({
                method: 'POST',
                data: $.param({ email: $scope.email, password: $scope.password, fname: $scope.fname, lname: $scope.lname }),
                headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
                url: '/api/Brokers'
            })
                .then(function (response) {
                    // POST 200 sucess
                    $scope.auth = response.data.id;

                    //Redirect to Login
                    $location.path("/login");
                },
                    function errorCallback(response) {
                        // called asynchronously if an error occurs
                        M.toast({ html: "Failed to create a Broker" });

                        $scope.loggedin = false;
                    });
        }

    })

    .controller('ChatCtrl', function ($scope, $http) {
        //Call ProNav apis
        $scope.title = $scope.app.title;


        $scope.token = sessionStorage.token;
        $scope.userId = sessionStorage.userId;

        $http({
            method: 'GET',
            headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
            url: '/api/Brokers/' + $scope.userId + '?access_token=' + $scope.token
        })
            .then(function (response) {
                // POST 200 sucess
                $scope.fname = response.data.fname;
            },
                function errorCallback(response) {
                    // called asynchronously if an error occurs
                    M.toast({ html: "User not found" });
                });
    })
    .controller('HomeCtrl', function ($scope, $http) {
        //Display Home Page mostly Static content  
        //Include news feeds from Intellizence??
        $scope.page = "Home Page";

    })

    .controller('ProfileCtrl', function ($scope, $http) {
        $scope.title = "Profile Page";

        //sessionStorage.userId && sessionStorage.token

        $scope.token = sessionStorage.token;
        $scope.userId = sessionStorage.userId;

        // http://localhost:3000/api/Users/?access_token=PqosmmPCdQgwerDYwQcVCxMakGQV0BSUwG4iGVLvD3XUYZRQky1cmG8ocmzsVpEE.

        $scope.getinfo = function(){
            $http({
                method: 'GET',
                headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
                url: '/api/Brokers/' + $scope.userId + '?access_token='+ $scope.token
            })
                .then(function (response) {
                    // POST 200 sucess
                    $scope.email = response.data.email;
                    $scope.fname = response.data.fname;
                    $scope.lname = response.data.lname;
                    $scope.bdrname = response.data.bdr.name;
                    $scope.bdrphone = response.data.bdr.phone;
                    $scope.bdraddress = response.data.bdr.address;
                },
            function errorCallback(response) {
                // called asynchronously if an error occurs
                M.toast({ html: "User not found" });
            });
    
        }
       
        $scope.getinfo(); //Retrieve info initially to display on page

        $scope.save = function () {
            $http({
                method: 'PATCH',
                data: $.param({bdr: { name: $scope.bdrname, phone: $scope.bdrphone, address: $scope.bdraddress},
                fname: $scope.fname, lname: $scope.lname}),
                headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
                url: '/api/Brokers/' + $scope.userId + '/?access_token='+ $scope.token
            })
                .then(function (response) {
                    // POST 200 sucess
                   console.log('successful post!');
                },
            function errorCallback(response) {
                // called asynchronously if an error occurs
                M.toast({ html: "User not found" });
            });
        }

        $scope.cancel = function () {
            $scope.getinfo(); //Revert text boxes to original content
        }
    })

    .controller('appController', function ($scope, $http, $location) {
        // Application related properties goes here
        // Example name, version, major / minor version, etc..

        var app = {
            title: "Ask Sage",
            version: "V0.1",
        };
        $scope.app = app;
        
        $scope.logoff = function (app) {
            $scope.userId = sessionStorage.getItem('userId');
            $scope.token = sessionStorage.getItem('token');

            /* TO UNCOMMENT ONCE HTTP IS USED TO AUTHENTICATE */
            // $http({
            //     method: 'DELETE',
            //     headers: { 'Content-Type': 'application/x-www-form-urlencoded'},
            //     url: '/api/Brokers/' + $scope.userId + '/accessTokens?access_token=' + $scope.token
            // })
            // .then(function (response) {
                // POST 200 success
                // Clear sessions
                sessionStorage.removeItem('userId');
                sessionStorage.removeItem('token');

                //Success path -> Redirect to Home
                
                $location.path("/login");
            // },
            //     function errorCallback(response) {
            //         // Called asynchronously if an error occurs
            //         console.log(response);
            //         M.toast({ html: "Please try again: " + response.statusText });
            //     });
            }



    });

    
  