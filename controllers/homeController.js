

myApp.controller("homeController", ['$scope', 'foodService', function ($scope, foodService) {

    //function showResult(result) {
    //    debugger;
    //    document.getElementById('latitude').value = result.geometry.location.lat();
    //    document.getElementById('longitude').value = result.geometry.location.lng();
    //}


    //function getLatitudeLongitude(callback, address) {
    //    // If adress is not supplied, use default value 'Ferrol, Galicia, Spain'
    //    address = address || 'Ferrol, Galicia, Spain';
    //    // Initialize the Geocoder
    //    var geocoder = new google.maps.Geocoder();
    //    if (geocoder) {
    //        geocoder.geocode({
    //            'address': address
    //        }, function (results, status) {
    //            if (status == google.maps.GeocoderStatus.OK) {
    //                callback(results[0]);
    //            }
    //        });
    //    }
    //}

    $scope.init = function () {
        debugger;
        $scope.orderList = "Search";        
        //getLatitudeLongitude(showResult, "Chennai");
        var object = foodService.getListOfAllCategories(13.0604, 80.2496);

        object.then(function (data) {            
            debugger;
            var restaurantList = [];
            for (var i = 0; i < data.nearby_restaurants.length; i++) {
                restaurantList.push({ restaurantname: data.nearby_restaurants[i].restaurant.name, restaurantrating: data.nearby_restaurants[i].restaurant.user_rating.aggregate_rating, restaurantaddress: data.nearby_restaurants[i].restaurant.location.address, restuarnthumburl: data.nearby_restaurants[i].restaurant.thumb })
            }
            $scope.restaurantLists = restaurantList;
        })
        .catch(function (data, status) {
            console.error('Gists error');
        })
        .finally(function () {
          console.log("finally finished gists");
        });
    }
}]);