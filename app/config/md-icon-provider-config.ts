/// <reference path="../../typings/tsd.d.ts" />

function IconProviderConfig($mdIconProvider: ng.material.IIconProvider) {
    $mdIconProvider
       .defaultFontSet('material-design-iconic-font');
}

IconProviderConfig.$inject = ['$mdIconProvider'];

export {IconProviderConfig};