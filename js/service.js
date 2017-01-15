angular.module('UserService', [])
//services r used to make calls to APIs
    .factory('UserAPIService', function($http) {
 		// create a new object called UserAPIService
        UserAPIService = {
            callAPI: function(url, data) {
                return $http.post(url, data);
            }
        };
        return UserAPIService;
    });

angular.module('TodoService', [])
    .factory('TodoAPIService', function($http) {
        TodoAPIService = {
            getTodos: function(url, data, token) {
                header = "Authorization: JWT " + token;
                return $http.get(url, {params:{"username": data}}, header);
            },
             createTodo: function(url, data, token) {
                header = "Authorization: JWT " + token;
                return $http.post(url, data, header);
            },
             editTodo: function(url, data, token) {
                header = "Authorization: JWT " + token;
                return $http.put(url, data, header);
            },
            deleteTodo: function(url, token) {
                header = "Authorization: JWT " + token;
                return $http.delete(url, token);
            }
        };
        return TodoAPIService;
    });