let ModalController = function($scope, $mdDialog, DataAccessService, $mdToast) {

  $scope.races = [];
  $scope.classes = [];
  $scope.factions = [];

  function init() {
    getFactions();
    getRaces();
    getClasses();
  }

  function getFactions() {
    return DataAccessService.getFactionResource().getAll().$promise.then(
      (response) => {
        $scope.factions = response;
      },
      (err) => { this.error(err) });
  }
  function getRaces() {
    return DataAccessService.getRaceResource().getAll().$promise.then(
      (response) => {
        $scope.races = response;
      },
      (err) => { this.error(err) });
  }
  function getClasses() {
    return DataAccessService.getClassResource().getAll().$promise.then(
      (response) => {
        $scope.classes = response;
      },
      (err) => { this.error(err) });
  }

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

  init();
}

ModalController.$inject = ['$scope', '$mdDialog', 'DataAccessService', '$mdToast']

export default ModalController