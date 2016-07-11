console.log("linked!");

angular.module("theOfficeApp")
  .controller("OfficeController", OfficeController);


OfficeController.$inject = ['$scope', '$http'];
function OfficeController ($scope, $http) {
  $scope.searchTitles = searchTitles;

  // function getCharacters(){
  //   $http
  //     .get('http://www.omdbapi.com/?t=the+office&y=&plot=full&r=json')
  //     .then(function(response){
  //       $scope.actors = response.data.Actors;
  //       console.log($scope.actors);
  //     });
  // }
  // getCharacters();


  function searchTitles (word) {
    console.log(word);
    $http
      .get('http://www.omdbapi.com/?s=' + word +'&y=&plot=full&r=json&type=movie')
      .then(function(response){
        console.log(response.Search);
        console.log(response.data);
        console.log(response);
        $scope.movies = response.data.Search;
        $scope.results = response.data.totalResults;
        console.log($scope.movies);
      });
  }


}