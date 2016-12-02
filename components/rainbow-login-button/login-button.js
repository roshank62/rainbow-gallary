require('./login-button.scss');

export default loginButton;

function loginButton() {
    'ngInject';

    return {
        restrict: 'E',
        template: require('./login-button.html'),
        controller: loginButtonController
    };

    function loginButtonController($scope, $http, auth, store, $location) {
        'ngInject';
        var vm = this;
        $scope.click = function () {



        };


    }

}
