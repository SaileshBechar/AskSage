"use strict";


angular.module('myApp', ['ngRoute', 'ngMessages'])
    .run(function ($rootScope) {
        // $rootScope.loggedin = false; //Defaults to logged out




    })
    .config(['$routeProvider', function ($routeProvider, $locationProvider) {
        $routeProvider
            .when("/login", {
                templateUrl: '../views/login.html',
                controller: 'LoginCtrl'
            })
            .when("/newuser", {
                templateUrl: '../views/newUser.html',
                controller: 'NewUserCtrl',
                resolve: {
                    "Validate": function ($location, $rootScope) {
                        if (!$rootScope.loggedin) {
                            
                            $location.path('/login');
                            M.toast({ html: "Please log in" });
                        }
                        else{
                            //do noithing
                        }
                    }
                }
            })
            .when("/feedback", {
                templateUrl: '../views/feedback.html',
                controller: 'FeedbackCtrl',
                resolve: {
                    "Validate": function ($location, $rootScope) {
                        if (!$rootScope.loggedin) {
                            $location.path('/login');
                            M.toast({ html: "Please log in" });
                        }
                    }
                }
            })
            .when("/chat", {
                templateUrl: 'views/chat.html',
                controller: 'ChatCtrl',
                resolve: {
                    "Validate": function ($location, $rootScope) {
                        console.log($rootScope.loggedin);
                        if (!$rootScope.loggedin) {
                            $location.path('/login');
                            M.toast({ html: "Please log in" });
                        }
                    }
                }
            })
            .when("/home", {
                templateUrl: 'views/home.html',
                controller: 'HomeCtrl',
                resolve: {
                    "Validate": function ($location, $rootScope) {
                        console.log($rootScope.loggedin);
                        if (!$rootScope.loggedin) {
                            $location.path('/login');
                            M.toast({ html: "Please log in" });
                        }
                    }
                }
            })
            .when("/profile", {
                templateUrl: 'views/profile.html',
                controller: 'ProfileCtrl',
                resolve: {
                    "Validate": function ($location, $rootScope) {
                        console.log($rootScope.loggedin);
                        if (!$rootScope.loggedin) {
                            $location.path('/login');
                            M.toast({ html: "Please log in" });
                        }
                    }
                }
            })
            .otherwise({
                redirectTo: "/login"
            })
    }])

    //All Controllers start from here
    .controller('LoginCtrl', function ($scope, $http, $location, $rootScope) {

        $scope.tile = "Sign in";
        $scope.appName = $scope.app.title; //APP NAME from appCtrl


        // If session found RETRIEVE VALUE
        // else set the session during login 
        var initSession = function (app) {      
            if (sessionStorage.userId && sessionStorage.token) {
                
                $scope.userId = sessionStorage.userId;
                $rootScope.token = sessionStorage.token
                

                $rootScope.loggedin = true;
                
                //For display at Header
                $rootScope.profileMsg = "Profile";
                $rootScope.loggedinMsg = "Logoff";

                //Success path -> Redirect to Home if found session
                $location.path("/home");


            } else {
                //Loggedin = false;
                $rootScope.loggedin = false;
                // console.log("Please login to continue"); //TODO remove me later

                //For display at Header
                $rootScope.loggedinMsg = "Login";
                $rootScope.profileMsg = null;

                //Redirect to login page
                $location.path("/login");

            }
        }();

       


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
                    $scope.token = response.data.id;
                    $scope.userId = response.data.userId;
                    $rootScope.loggedin = true;


                    //Add Session Storage
                    sessionStorage.userId = $scope.userId;
                    sessionStorage.token = $scope.token;

                    //Success path -> Redirect to Home
                    $location.path("/home");
                },
                    function errorCallback(response) {
                        // Called asynchronously if an error occurs
                        // console.log(response);
                        M.toast({ html: "Please try again: " + response.statusText });
                        $rootScope.loggedin = false;

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

        $http({
            method: 'GET',
            headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
            url: '/api/Brokers/' + $scope.userId + '?access_token=' + $scope.token
        })
            .then(function (response) {
                // POST 200 sucess
                $scope.email = response.data.email;
                $scope.fname = response.data.fname;
                $scope.lname = response.data.lname;
            },
                function errorCallback(response) {
                    // called asynchronously if an error occurs
                    M.toast({ html: "User not found" });
                });
    })

    .controller('appController', function ($scope, $http, $location, $rootScope) {
        // Application related properties goes here
        // Example name, version, major / minor version, etc..
        var app = {
            title: "Ask Sage",
            version: "V0.1",
        };
        $scope.app = app;

        

        //Logoff Function
        //post to brokers logoff with ($scope.token) 
        $scope.logoff = function (app) {   
            $http.post("api/Brokers/logout?access_token=" + $scope.token)
                .then(function (response) {
                    // POST 200 success
                    $rootScope.loggedin = false;

                    //Clear scope vars
                    $scope.userId = null;
                    $scope.token = null;

                    // Clear sessions
                    sessionStorage.removeItem('userId');
                    sessionStorage.removeItem('token');

                    //Success path -> Redirect to Home
                    $location.path("/login");
                },
                    function errorCallback(response) {
                        // Called asynchronously if an error occurs
                        // console.log(response);
                        M.toast({ html: "Please try again: " + response.statusText });
                        $rootScope.loggedin = true;

                    });
                }



    });
