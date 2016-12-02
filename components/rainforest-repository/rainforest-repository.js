/**
 * Created by M053 on 30-11-2016.
 */
require('./rainforest-repository.scss');

export default rainforestRepo;

function rainforestRepo() {
    'ngInject';

    return {
        restrict: 'E',
        template: require('./rainforest-repository.html'),
        controller: rainforestRepositoryController
    };

    function rainforestRepositoryController($scope, $http, auth, store, $location) {
        'ngInject';
        var vm = this;
        $http.get('/assets/json/ssss.json').success(function (data) {
            $scope.employees = data;
            $scope.level = data.rainbow;
            console.log(" $scope.employees ", $scope.employees, $scope.level);
        });


        $scope.click = function () {

        };


    }

}
