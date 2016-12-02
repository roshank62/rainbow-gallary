const MODULE_NAME = 'rainforestrepository.components';

export default MODULE_NAME;

angular.module(MODULE_NAME, [])
    .directive('rainforestRepo',
        require('../../components/rainforest-repository/rainforest-repository'));
