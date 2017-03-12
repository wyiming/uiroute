/**
 * Created by Administrator on 2017/2/11.
 */
angular.module("cartModule",[])
    .config(function($stateProvider,$urlRouterProvider){
        $stateProvider
            .state({
                name:'index.cart',
                url:'/cart',
                templateUrl:'pages/cart/cart.html'
            })
    })