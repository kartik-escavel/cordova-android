cordova.define('cordova/plugin_list', function(require, exports, module) {
  module.exports = [
    {
      "id": "sevensky-cordova-plugin-intent.intentPlugin",
      "file": "plugins/sevensky-cordova-plugin-intent/www/intentPlugin.js",
      "pluginId": "sevensky-cordova-plugin-intent",
      "clobbers": [
        "intentPlugin"
      ]
    }
  ];
  module.exports.metadata = {
    "sevensky-cordova-plugin-intent": "1.0.6"
  };
});