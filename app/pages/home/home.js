/**
 * Created by Administrator on 2017/2/11.
 */
angular.module('homeModule',[])
    .config(function($stateProvider,$urlRouterProvider){
        $stateProvider
            .state({
                name:"index.home",
                url:"/home",
                templateUrl:"pages/home/home.html",
                controller:function(){

                }
            })
            .state({
                name:"index.home.part1",
                url:"/part1",
                views:{
                    "viewb":{
                        templateUrl:'pages/home/home.part1/home.part1.html',
                        controller:['$scope',function($scope){
                            $scope.name = 'davie'
                        }]
                    }
                }
            })
    })