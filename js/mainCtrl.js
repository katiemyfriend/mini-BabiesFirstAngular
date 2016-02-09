var app = angular.module('friendsList', []);
app.controller('mainCtrl', function($scope) {

  $scope.friends=['Jared', 'Morgan', 'KJ', 'Karoline', 'Brianna', 'Lorna'];

  $scope.addFriend = function() {
    $scope.friends.push($scope.friendName);
  }

});
