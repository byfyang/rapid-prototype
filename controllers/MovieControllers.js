console.log("controllers linked!");

angular.module("theMovieApp")
  .controller("MovieController", MovieController);


MovieController.$inject = ['$scope', '$http'];
function MovieController ($scope, $http) {
  var self = this;
  self.all = [];
  $scope.searchTitles = searchTitles;

  function searchTitles (word) {
    $http
      .get('http://www.omdbapi.com/?s=' + word +'&y=&plot=full&r=json&type=movie')
      .then(function(response){
        self.all = response.data.Search;
        $scope.results = response.data.totalResults;
      });
  }

  function showMovie($scope, MovieService, $routeParams){
    $scope.movie = MovieService.get($routeParams.imdbID); 
  }
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

