console.log("routes linked!")

angular.module("theMovieApp")
  .config(function($routeProvider, $locationProvider){
    $routeProvider
       .when('/', {
         // template: 'Home!'
         templateUrl: '/templates/movies_index.html',
         controller: 'MovieIndexController'
       })
       .when('/movies/:imdbID', {
           templateUrl: '/templates/movie_show.html',
           controller: 'MovieShowController'
       });

       $locationProvider.html5Mode({
         enabled: true,
         requireBase: false
       });
    });