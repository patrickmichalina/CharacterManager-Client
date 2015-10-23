let ModalController = ($scope, $mdDialog, DataAccessService, $mdToast) => {
  $scope.hide = function() {
    $mdDialog.hide();
  };
  $scope.cancel = function() {
    $mdDialog.cancel();
  };
  $scope.create = function(character) {
    return DataAccessService.getCharacterResource().create(character).$promise.then(
      (response) => {
        $mdDialog.hide(response);
      },
      (err) => { error(err) });
  }

  var error = (error) => {
    $mdToast.show($mdToast.simple().content(error.data.Message));
  }
}

export default ModalController