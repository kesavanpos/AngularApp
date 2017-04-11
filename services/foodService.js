

myApp.factory("foodService", function ($q, $http) {
    return {
        getListOfAllCategories: function (plat,plon) {
            var def = $q.defer();
            $http.get('https://developers.zomato.com/api/v2.1/geocode', { params: { "lat":"13.0604","lon":"80.2496" }, headers: { "Content-Type": 'application/x-www-form-urlencoded', "user-key": "10ac234b0a70412b6fb0e981b7f02e3a" } })
            .success(function (data) {
                def.resolve(data);
            })
            .error(function (data, status) {
                console.error('Repos error', status, data);
                def.reject(data);
            })
            .finally(function () {
                console.log("finally finished repos");
            });
            return def.promise;
        }
    }
})