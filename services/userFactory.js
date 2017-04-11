var baseAddress = 'http://localhost:53623/api/Students/';
var url = "";

app.factory('userFactory', function ($http, $q) {
    var def = $q.defer();
    return {
        getUsersList: function () {
            url = baseAddress;

            

            $http.get(url)
                .success(function (data) {
                    //service.albums = data;
                    def.resolve(data);
                })
                .error(function () {
                    def.reject("Failed to get albums");
                });
            return def.promise;

            //return $http.get(url);
        },
        getUser: function (user) {
            url = baseAddress + "GetUser/" + user.UserId;
            return $http.get(url);
        },
        addUser: function (user) {
            url = baseAddress + "AddUser";

            $http.post(url,user)
                .success(function (data) {
                    //service.albums = data;
                    def.resolve(data);
                })
                .error(function () {
                    def.reject("Failed to get albums");
                });
            return def.promise;
        },
        deleteUser: function (user) {
            url = baseAddress + "DeleteUser/?id=" + user.UserId;
            return $http.delete(url);
        },
        updateUser: function (user) {
            url = baseAddress + "PutStudent/";
            return $http.put(url, user);
        }
    };
});