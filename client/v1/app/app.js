"use strict";

angular.module('myApp', ['ngRoute', 'ngMessages'])
    .config(['$routeProvider', function ($routeProvider, $locationProvider) {
        $routeProvider
            .when("/login", {
                templateUrl: '../views/login.html',
                controller: 'LoginCtrl'
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
            .otherwise({
                redirectTo: "/home"
            })
    }])
    .controller('LoginCtrl', function ($scope, $http, $location) {
        $scope.tile = "Sign in";
        $scope.appName = "ChatBot";

        $scope.login = function (app) {
            //Add client validations
            // $scope.validate(app);

            // POST http://localhost:3000/api/Users/login
            // parameters sent as form data
            $http({
                method: 'POST',
                data: $.param({ email: $scope.email, password: $scope.password }),
                headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
                url: '/api/Users/login'
            })
                .then(function (response) {
                    // POST 200 sucess
                    $scope.auth = response.data.id;
                    $scope.loggedin = true;

                    //Save to local storage
                    localStorage.setItem("id", $scope.auth);
                    
                    //Redirect to Buy Policy
                    $location.path("/buy");
                },
                    function errorCallback(response) {
                        // called asynchronously if an error occurs
                        $scope.loggedin = false;
                    });

                

        };

        $scope.logoff = function (app) {
            //Logoff Function
            //post to users logoff with ($scope.auth) 
            $http.post("api/Users/logout?access_token=" + $scope.auth)
                .then((response) => {
                    $scope.auth = null;
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

    })

    .controller('ChatCtrl', function ($scope, $http) {
     //Call ProNav apis
     $scope.title = "Chat Bot"; 

     

     $http.get("https://api.giphy.com/v1/gifs/search?q=happy&api_key=sYKZJHhXlE4V67xhJ1LZV8hghoWbNlIv&limit=5")
                .then((response) => {
                  //err
                },
                    (res) => {
                        console.log('res.data');
                    });


    })
    .controller('HomeCtrl', function ($scope, $http) { 
    //Display Home Page mostly Static content  
    $scope.page = "Home Page";  
    

        
    })
    .controller('appController', function ($scope, $http, $location) {
        var app = {
            title: "Broker Assistant",
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
        }
        else {
            //Loggedin = false;
            $scope.loggedin = false;
            $scope.loggedinMsg = "Login"; //For display at Header

        }


        $scope.addAction = function (app) {

            M.toast({ html: app.actionResult });
           // app.actionCount++;
        }


    });