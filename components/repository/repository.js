require('./repository.scss');

export default password;

function password() {
    'ngInject';

    return {
        restrict: 'E',
        template: require('./repository.html'),
        controller: repositoryController
    };

    function repositoryController($scope,$http) {
        'ngInject';
        var vm = this;
       $scope.image = ['/asset/images/container1.svg',
            '/assets/images/container2.svg',
            '/assets/images/container3.svg',
            '/assets/images/container4.svg',
            '/assets/images/container5.svg',
            '/assets/images/container6.svg',
            '/assets/images/container7.svg',
            '/assets/images/container7.svg',
            '/assets/images/container7.svg',
            '/assets/images/container7.svg',
            '/assets/images/container7.svg',
            '/assets/images/container7.svg',
            '/assets/images/container7.svg',
            '/assets/images/container7.svg',
            '/assets/images/container7.svg',
            '/assets/images/container7.svg',
            '/assets/images/container7.svg',
            '/assets/images/container7.svg',
            '/assets/images/container7.svg',
            '/assets/images/container7.svg'
        ];
        $('.thumbnail').click(function(){

        });
    }
}
