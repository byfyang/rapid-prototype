console.log("controllers linked!");

angular.module("theMovieApp")
  .controller("MovieIndexController", MovieIndexController)
  .controller("MovieShowController", MovieShowController);


MovieIndexController.$inject = ['$scope', '$http'];
function MovieIndexController ($scope, $http) {
  var self = this;
  self.all = [];
  $scope.searchTitles = searchTitles;
  // $scope.showMovie = showMovie;

  function searchTitles (word) {
    $http
      .get('http://www.omdbapi.com/?s=' + word +'&y=&plot=full&r=json&type=movie')
      .then(function(response){
        $scope.movies = response.data.Search;
        $scope.results = response.data.totalResults;
      });
  } 
}

MovieShowController.$inject = ['$scope', '$http'];
function MovieShowController ($scope, $http, MovieService, $routeParams) {
  // var self = this;
  // self.all = [];
  // $scope.sj = searchTitles;

  // $scope.movie = MovieService.get($routeParams.imdbID); 
  // function showMovie(){
  //   window.location.href = '/movies';
  //   console.log("emilio")
  // }

}


angular.module('theMovieApp')
  .factory('MovieService', function(){

  var MovieService = {};

  MovieService.get = function(id){
    var id = parseInt(id);
    return self.all.find(function(movie){
      return movie.imdbID == id;
    });
  };
  return MovieService;

});

