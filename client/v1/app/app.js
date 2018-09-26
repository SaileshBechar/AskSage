"use strict";


angular.module('myApp', ['ngRoute', 'ngMessages'])
    .config(['$routeProvider', function ($routeProvider, $locationProvider) {
        $routeProvider
            .when("/login", {
                templateUrl: '../views/login.html',
                controller: 'LoginCtrl'
            })
            .when("/newuser", {
                templateUrl: '../views/newUser.html',
                controller: 'NewUserCtrl'
            })
            .when("/feedback", {
                templateUrl: 'views/feedback.html',
                controller: 'FeedbackCtrl'
            })
            .when("/chat", {
                templateUrl: 'views/chat.html',
                controller: 'ChatCtrl'
            })
            .when("/home", {
                templateUrl: 'views/home.html',
                controller: 'HomeCtrl'
            })
            .when("/profile", {
                templateUrl: 'views/profile.html',
                controller: 'ProfileCtrl'
            })
            .otherwise({
                redirectTo: "/login"
            })
    }])
    .controller('LoginCtrl', function ($scope, $http, $location) {
        $scope.tile = "Sign in";
        $scope.appName = "Ask Sage"; //APP NAME change as required

        $scope.login = function (app) {
            //Add client validations
            // $scope.validate(app);

            // POST http://localhost:3000/api/Users/login
            // parameters sent as form data
            $http({
                method: 'POST',
                data: $.param({ email: $scope.email, password: $scope.password }),
                headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
                url: '/api/Brokers/login'
            })
                .then(function (response) {
                    // POST 200 sucess
                    $scope.auth = response.data.id;
                    $scope.userId = response.data.userId;
                    $scope.loggedin = true;

                    //Save to local storage

                    localStorage.setItem("userId", $scope.userId);
                    localStorage.setItem("id", $scope.auth);
                    
                    //Redirect to Buy Policy
                    $location.path("/home");
                },
                    function errorCallback(response) {
                        // called asynchronously if an error occurs
                        M.toast({ html: "Please check user name and Password" });
                        $scope.loggedin = false;
                    });

                

        };

        $scope.logoff = function (app) {
            //Logoff Function
            //post to users logoff with ($scope.auth) 
            $http.post("api/Brokers/logout?access_token=" + $scope.auth)
                .then((response) => {
                    $scope.auth = null;
                    // $scope.userId = null;
                    $scope.loggedin = false;
                    localStorage.clear();
                },
                    (res) => {
                        $scope.loggedin = true;
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
                    $scope.loggedin = true;

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

    //  $http.get("https://api.giphy.com/v1/gifs/search?q=happy&api_key=sYKZJHhXlE4V67xhJ1LZV8hghoWbNlIv&limit=5")
    //             .then((response) => {
    //               //err
    //             },
    //                 (res) => {
    //                     console.log('res.data');
    //                 });


    })
    .controller('HomeCtrl', function ($scope, $http) { 
    //Display Home Page mostly Static content  
    $scope.page = "Home Page";  
 
    })

    .controller('ProfileCtrl', function ($scope, $http) {
        $scope.title = "Profile Page";
        //$scope.appName = "Profile Page"; 
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

        document.addEventListener('DOMContentLoaded', function () {
        var elems = document.querySelectorAll('.sidenav');
        var instances = M.Sidenav.init(elems, options);
        });

        //RETRIEVE VALUE
        if (localStorage.getItem("id")) {
            //Loggedin = true;
            $scope.loggedin = true;
            $scope.loggedinMsg = "Logoff"; //For display at Header
            $scope.auth = localStorage.getItem("id");
            $scope.profileMsg = "Profile";

        }
        else {
            //Loggedin = false;
            $scope.loggedin = false;
            $scope.loggedinMsg = "Login"; //For display at Header
            $scope.profileMsg = null; 

        }


        // $scope.addAction = function (app) {

        //     M.toast({ html: app.actionResult });
        //    // app.actionCount++;
        // }


    });
