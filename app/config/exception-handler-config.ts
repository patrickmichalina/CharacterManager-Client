/// <reference path="../../typings/tsd.d.ts" />

function ExceptionHandlerConfig($provide: ng.IModule) {
    $provide.decorator('$exceptionHandler', ['$delegate', function ($delegate: any) {
        return function (exception: Error, cause: string) {
            setTimeout(function () {
                throw exception;
            });
            $delegate(exception, cause);
        };
    }]);
}

ExceptionHandlerConfig.$inject = ['$provide'];

export {ExceptionHandlerConfig};