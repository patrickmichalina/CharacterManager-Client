/// <reference path="../../typings/tsd.d.ts" />

function LocationProviderConfig($locationProvider: ng.ILocationProvider) {
    $locationProvider.html5Mode(true);
}

LocationProviderConfig.$inject = ['$locationProvider'];

export {LocationProviderConfig};