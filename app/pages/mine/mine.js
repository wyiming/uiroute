/**
 * Created by Administrator on 2017/2/11.
 */
angular.module("mineModule",[])
    .config(function($stateProvider,$urlRouterProvider){
        $stateProvider
            .state({
                name:'index.mine',
                url:'/mine',
                templateUrl:'pages/mine/mine.html'
            })
    })