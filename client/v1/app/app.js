"use strict";


angular.module('myApp', ['ngRoute', 'ngMessages'])
    .factory('logoffService', function () {
        return {
            logoff: function () {

                console.log("Started logoff service ..")
                $scope.token = sessionStorage.getItem('token');
                $scope.userId = sessionStorage.getItem('userId');
                $http.post("api/Brokers/logout?access_token=" + $scope.token)
                    /* TO UNCOMMENT ONCE HTTP IS USED TO AUTHENTICATE */
                    // $http({
                    //     method: 'DELETE',
                    //     headers: { 'Content-Type': 'application/x-www-form-urlencoded'},
                    //     url: '/api/Brokers/' + $scope.userId + '/accessTokens?access_token=' + $scope.token
                    // })
                    .then(function (response) {
                        // POST 200 success

                        //Clear scope vars
                        $scope.userId = null;
                        $scope.token = null;

                        // Clear sessions
                        sessionStorage.removeItem('userId');
                        sessionStorage.removeItem('token');

                        //Success path -> Redirect to Home
                        $location.path("/public");
                    },
                        function errorCallback(response) {
                            // Called asynchronously if an error occurs
                            // console.log(response);
                            M.toast({ html: "Please try again: " + response.statusText });

                        });

                return true; //Should return  
            }

        }
    })
    // .factory('loginService', function(){
    //     return {
    //         login: function(app){

    //             return true; //Should return  
    //         }
    //     }
    // })
    .config(['$routeProvider', '$locationProvider', function ($routeProvider, $locationProvider) {
        var isLoggedin = function (verify) {
            var userId = sessionStorage.getItem('userId');
            var token = sessionStorage.getItem('token');

            if (token != null && userId != null) {
                console.log('About to go in verify service');
                console.log(verify);
                return true;
            }
            else {
                return false;
            }
        }

        $routeProvider
            .when("/public", {
                templateUrl: '../views/publicPage.html',
                controller: 'LandingCtrl'
            })
            .when("/login", {
                templateUrl: '../views/login.html',
                controller: 'LoginCtrl',
                resolve: {
                    "Validate": function ($location) {
                        var loggedin = isLoggedin();
                        if (loggedin) {
                            $location.path('/home');
                        }
                    }
                }
            })
            .when("/newuser", {
                templateUrl: '../views/newUser.html',
                controller: 'NewUserCtrl',
                resolve: {
                    "Validate": function ($location) {
                        var loggedin = isLoggedin();
                        if (!loggedin) {
                            $location.path('/public');
                        }
                    }
                }
            })
            .when("/feedback", {
                templateUrl: '../views/feedback.html',
                controller: 'FeedbackCtrl',
                resolve: {
                    "Validate": function ($location) {
                        var loggedin = isLoggedin();
                        if (!loggedin) {
                            $location.path('/public');
                        }
                    }
                }
            })
            .when("/chat", {
                templateUrl: 'views/chat.html',
                controller: 'ChatCtrl',
                resolve: {
                    "Validate": function ($location) {
                        var loggedin = isLoggedin();
                        if (!loggedin) {
                            $location.path('/public');
                        }

                    }
                }
            })
            .when("/home", {
                templateUrl: 'views/home.html',
                controller: 'HomeCtrl',
                resolve: {
                    "Validate": function ($location) {
                        var loggedin = isLoggedin();
                        if (!loggedin) {
                            $location.path('/public');
                        }
                    }
                }
            })
            .when("/profile", {
                templateUrl: 'views/profile.html',
                controller: 'ProfileCtrl',
                resolve: {
                    "Validate": function ($location) {
                        var loggedin = isLoggedin();
                        if (!loggedin) {
                            $location.path('/public');
                        }
                    }
                }
            })
            .otherwise({
                redirectTo: "/public"
            })


    }])
    .provider("verify", function () {
        this.$get = function ($http) {
            console.log('In verify provider');
            var userId = sessionStorage.getItem('userId');
            var token = sessionStorage.getItem('token');
            $http({
                method: 'GET',
                headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
                url: '/api/Brokers/' + userId + '/accessTokens/' + token + '?access_token=' + token
            })
                .then(function (response) {
                    console.log('VERIFIED');
                    return true;
                },
                    function errorCallback(response) {
                        // Called asynchronously if an error occurs     
                        console.log('Verify says INVALID');
                        console.log(token);
                        console.log(userId);
                        return false;

                    });
        }
    })

    //All Controllers start from here
    .controller('LandingCtrl', function ($scope, $http, $location) {
        $scope.tile = "Landing Page";


    })
    .controller('LoginCtrl', function ($scope, $http, $location) {

        var app = {
            title: "Ask Sage",
            version: "V0.1",
        };

        $scope.app = app;
        $scope.tile = "Sign in";
        $scope.appName = $scope.app.title; //APP NAME from appCtrl    


        //Logoff Function
        //post to brokers logoff with ($scope.token) 
        $scope.logoff = function (app) {
            console.log('In Logoff function');
            $scope.token = sessionStorage.getItem('token');
            $scope.userId = sessionStorage.getItem('userId');
            $http.post("api/Brokers/logout?access_token=" + $scope.token)
                /* TO UNCOMMENT ONCE HTTP IS USED TO AUTHENTICATE */
                // $http({
                //     method: 'DELETE',
                //     headers: { 'Content-Type': 'application/x-www-form-urlencoded'},
                //     url: '/api/Brokers/' + $scope.userId + '/accessTokens?access_token=' + $scope.token
                // })
                .then(function (response) {
                    // POST 200 success



                    //     $scope.token = sessionStorage.getItem('token');   
                    //     $scope.userId = sessionStorage.getItem('userId');   
                    //     $http.post("api/Brokers/logout?access_token=" + $scope.token)            
                    //     /* TO UNCOMMENT ONCE HTTP IS USED TO AUTHENTICATE */
                    //     // $http({
                    //     //     method: 'DELETE',
                    //     //     headers: { 'Content-Type': 'application/x-www-form-urlencoded'},
                    //     //     url: '/api/Brokers/' + $scope.userId + '/accessTokens?access_token=' + $scope.token
                    //     // })
                    //     .then(function (response) {
                    //         // POST 200 success

                    //         //Clear scope vars
                    //         $scope.userId = null;
                    //         $scope.token = null;

                    //         // Clear sessions
                    //         sessionStorage.removeItem('userId');
                    //         sessionStorage.removeItem('token');

                    //         //Success path -> Redirect to Home
                    //         $location.path("/landing");
                    //     },
                    //     function errorCallback(response) {
                    //         // Called asynchronously if an error occurs
                    //         // console.log(response);
                    //         M.toast({ html: "Please try again: " + response.statusText });

                    //     });
                    // }

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


                    // //Call Intellizence - News Agregator
                    // $http({
                    //     method: 'GET',
                    //     headers: { 
                    //         // 'Content-Type': 'application/x-www-form-urlencoded',
                    //         'Access-Control-Allow-Origin': '*',
                    //         'x-api-key':'gQywpIf8cE7hrzTAouTNV1rcDAp97ADC20S1lAGi' 
                    //     },
                    //     url: 'https://api.intellizence.com/api/v1/companies'
                    // })
                    //     .then(function (response) {
                    //         // POST 200 sucess
                    //         $scope.data = response.data;
                    //         $scope.myData = response.data.records;
                    //     },
                    //         function errorCallback(response) {
                    //             // called asynchronously if an error occurs
                    //             M.toast({ html: "Error call back" + response });
                    //             console.log( response )
                    //         });

                })

                .controller('ProfileCtrl', function ($scope, $http) {
                    $scope.title = "Profile Page";

                    //sessionStorage.userId && sessionStorage.token

                    $scope.token = sessionStorage.token;
                    $scope.userId = sessionStorage.userId;

                    // http://localhost:3000/api/Users/?access_token=PqosmmPCdQgwerDYwQcVCxMakGQV0BSUwG4iGVLvD3XUYZRQky1cmG8ocmzsVpEE.

                    $scope.getinfo = function () {
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
                            data: $.param({
                                bdr: { name: $scope.bdrname, phone: $scope.bdrphone, address: $scope.bdraddress },
                                fname: $scope.fname, lname: $scope.lname
                            }),
                            headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
                            url: '/api/Brokers/' + $scope.userId + '/?access_token=' + $scope.token
                        })
                            .then(function (response) {
                                // POST 200 sucess
                                M.toast({ html: "Saved changes" });
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

                    // var app = {
                    //     title: "Ask Sage",
                    //     version: "V0.1",
                    // };
                    // $scope.app = app;



                    // //Logoff Function
                    // //post to brokers logoff with ($scope.token) 
                    // $scope.logoff = function (app) {   
                    //     $http.post("api/Brokers/logout?access_token=" + $scope.token)
                    //         .then(function (response) {
                    //             // POST 200 success
                    //             $rootScope.loggedin = false;

                    //             //Clear scope vars
                    //             $scope.userId = null;
                    //             $scope.token = null;

                    //             // Clear sessions
                    //             sessionStorage.removeItem('userId');
                    //             sessionStorage.removeItem('token');

                    //             //Success path -> Redirect to Home
                    //             $location.path("/landing");
                    //         },
                    //             function errorCallback(response) {
                    //                 // Called asynchronously if an error occurs
                    //                 // console.log(response);
                    //                 M.toast({ html: "Please try again: " + response.statusText });
                    //                 $rootScope.loggedin = true;

                    //             });
                    //         }



                });
            }
        })
