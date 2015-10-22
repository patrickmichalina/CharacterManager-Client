/// <reference path="../../typings/tsd.d.ts" />

function ThemingProviderConfig($mdThemingProvider: ng.material.IThemingProvider) {
    var background = $mdThemingProvider.extendPalette('grey', {'A100': 'f2f2f2'});
    
    $mdThemingProvider
      .definePalette('background', background)
      .theme('default')
      
      .primaryPalette('blue')
      .accentPalette('pink')
      .backgroundPalette('background');
      
      


  
      
      
      
      
      
}

ThemingProviderConfig.$inject = ['$mdThemingProvider'];

export {ThemingProviderConfig};
