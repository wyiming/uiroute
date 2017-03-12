/**
 * Created by Administrator on 2017/2/11.
 */
angular.module("listModule",[])
    .config(function($stateProvider,$urlRouterProvider){
        $stateProvider
            .state({
                name:'index.list',
                url:'/list',
                templateUrl:'pages/list/list.html'
            })
    })