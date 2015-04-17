angular.module('angular-storage.localStorage', ['angular-storage.cookieStorage'])
  .service('localStorage', function ($window, $injector) {
    var localStorageAvailable = !!$window.localStorage;

    if (localStorageAvailable) {
      try {
        $window.localStorage.setItem('testKey', 'test');
        $window.localStorage.removeItem('testKey');
        localStorageAvailable = true;
      } catch(e) {
        localStorageAvailable = false;
      }
    }
    if (localStorageAvailable) {
      this.set = function (what, value) {
        return $window.localStorage.setItem(what, value);
      };

      this.get = function (what) {
        return $window.localStorage.getItem(what);
      };

      this.remove = function (what) {
        return $window.localStorage.removeItem(what);
      };
    } else {
      var cookieStorage = $injector.get('cookieStorage');

      this.set = cookieStorage.set;
      this.get = cookieStorage.get;
      this.remove = cookieStorage.remove;
    }
  });
