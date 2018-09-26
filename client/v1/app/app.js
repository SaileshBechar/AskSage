"use strict";


angular.module('myApp', ['ngRoute', 'ngMessages'])
    .run(function($rootScope) {
        $rootScope.loggedin = false; //Defaults to logged out
     
        


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
                            M.toast({ html: "Please log in"});
                        }
                    }
                } 
            })
            .when("/feedback", {
                templateUrl: 'views/feedback.html',
                controller: 'FeedbackCtrl',
                resolve: { 
                    "Validate": function ($location, $rootScope) { 
                        if (!$rootScope.loggedin) { 
                            $location.path('/login'); 
                            M.toast({ html: "Please log in"});
                        }
                    } 
                } 
            })
            .when("/chat", {
                templateUrl: 'views/chat.html',
                controller: 'ChatCtrl',
                resolve: { 
                    "Validate": function ($location, $rootScope) { 
                        if (!$rootScope.loggedin) { 
                            $location.path('/login'); 
                            M.toast({ html: "Please log in"});
                        }
                    } 
                } 
            })
            .when("/home", {
                templateUrl: 'views/home.html',
                controller: 'HomeCtrl',
                resolve: { 
                    "Validate": function ($location, $rootScope) { 
                        if (!$rootScope.loggedin) { 
                            $location.path('/login'); 
                            M.toast({ html: "Please log in"});
                        }
                    } 
                } 
            })
            .when("/profile", {
                templateUrl: 'views/profile.html',
                controller: 'ProfileCtrl',
                resolve: { 
                    "Validate": function ($location, $rootScope) { 
                        if (!$rootScope.loggedin) { 
                            $location.path('/login'); 
                            M.toast({ html: "Please log in"});
                        }
                    } 
                } 
            })
            .otherwise({
                redirectTo: "/login"
                
            })
    }])

    //Controllers start here
    .controller('LoginCtrl', function ($scope, $http, $location, $rootScope) {
        $scope.tile = "Sign in";
        $scope.appName = "Ask Sage"; //APP NAME change as required

        

        $scope.login = function (app) {
            //Read session for token if available 


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
                        console.log(response);
                        M.toast({ html: "Please try again: " + response.statusText });
                        $rootScope.loggedin = false;
    
                    });
        };

        $scope.logoff = function (app) {
            //Logoff Function
            //post to users logoff with ($scope.auth) 
            $http.post("api/Brokers/logout?access_token=" + $scope.auth)
                .then((response) => {
                    $scope.auth = null;
                    $scope.userId = null;
                    
                    $rootScope.loggedin = false;
                    localStorage.clear();
                    sessionStorage.clear();
                },
                    (res) => {
                        $rootScope.loggedin = true;
                    });

        }



    })

    .controller('FeedbackCtrl', function ($scope, $http) {
        
        //Get feedback
        //Post to feedback api
        //Store analytics

    })

    .controller('NewUserCtrl', function ($scope, $http, $location) {
        $scope.title = "Broker Registration";
        
        $scope.register = function (app) {
        //     //Add client validations
        //     // $scope.validate(app);

        //     // POST http://localhost:3000/api/Users
        //     // parameters sent as form data
            $http({
                method: 'POST',
                data: $.param({ email: $scope.email, password: $scope.password, fname: $scope.fname, lname: $scope.lname}),
                headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
                url: '/api/Brokers'
            })
                .then(function (response) {
                    // POST 200 sucess
                    $scope.auth = response.data.id;
                    

                    //Save to local storage
                    // localStorage.setItem("id", $scope.auth);
             
                    
                    //Redirect to Login
                    $location.path("/login");
                },
                    function errorCallback(response) {
                        // called asynchronously if an error occurs
                        M.toast({ html: "Failed to create a Broker"  });

                        $scope.loggedin = false;
                    });
        }

    })

    .controller('ChatCtrl', function ($scope, $http) {
     //Call ProNav apis
     $scope.title = "Ask Sage";  //App name at login page
     $scope.id = localStorage.getItem("id"); 
     $scope.userId = localStorage.getItem("userId"); 


     $http({
        method: 'GET',
       // data: $.param({ id: $scope.userId}),
        headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
        url: '/api/Brokers/' + $scope.userId + '?access_token='+ $scope.id
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
        

        $scope.id = localStorage.getItem("id"); 
        $scope.userId = localStorage.getItem("userId"); 

        // http://localhost:3000/api/Users/?access_token=PqosmmPCdQgwerDYwQcVCxMakGQV0BSUwG4iGVLvD3XUYZRQky1cmG8ocmzsVpEE.
    
        $http({
            method: 'GET',
           // data: $.param({ id: $scope.userId}),
            headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
            url: '/api/Brokers/' + $scope.userId + '?access_token='+ $scope.id
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

        $scope.save = function (app) {
            console.log($scope.bdrname);
            console.log($scope.bdrphone);
            console.log($scope.bdraddress);

        }

       
    })



    .controller('appController', function ($scope, $http, $location) {
        var app = {
            title: "Ask Sage",
            version: "V0.1",
        };
        $scope.app = app;

     
       // If seesion found RETRIEVE VALUE
       //else set the session 

        if (sessionStorage.userId) {
            $scope.userId = sessionStorage.userId;
            $scope.token = sessionStorage.token

            //Loggedin = true;
            $scope.loggedin = true;

            //For display at Header
            $scope.profileMsg = "Profile";
            $scope.loggedinMsg = "Logoff"; 

        } else {
            //Loggedin = false;
            $scope.loggedin = false;
            $scope.loggedinMsg = "Login"; //For display at Header
            $scope.profileMsg = null; 

        }

   

    });
