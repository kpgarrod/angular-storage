/**
 * Add a module for use with commonjs(WebPack)
 * Add to your webpack.config.js with:
 * 
 module.exports = {
  resolve: {
    alias: {
      "angular-storage": 'angular-storage/dist/angular-storage'
    }
  }
 }
 */
if (typeof module !== "undefined" && typeof exports !== "undefined" && module.exports ===
  exports) {
  module.exports = 'angular-storage';
}
// Create all modules and define dependencies to make sure they exist
// and are loaded in the correct order to satisfy dependency injection
// before all nested files are concatenated by Grunt

angular.module('angular-storage',
    [
      'angular-storage.store'
    ]);
