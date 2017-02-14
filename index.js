'use strict';


var ReactNative = require('react-native');
var {
    NativeModules
} = ReactNative;

var RCTToast= NativeModules.Toast;
var Toast = {};

var optionsBuilder = function () {

  // defaults
  var styling = {
    backgroundColor:'#ff1744',
    textColor:'#ffffff',
    textSize: -1,
    opacity:0.8,
    cornerRadius: 100,
    horizontalPadding: 50,
    verticalPadding: 30
  };
  var message = null;
  var duration = "short";
  var position = "center";
  var addPixelsY = 0;

  return {
    withMessage: function(m) {
      message = m;
      return this;
    },

    withDuration: function(d) {
      duration = d;
      return this;
    },

    withPosition: function(p) {
      position = p;
      return this;
    },

    withAddPixelsY: function(y) {
      addPixelsY = y;
      return this;
    },

    withStyling: function(_styling){
      styling = _styling
      return this;
    },

    build: function() {
      return {
        styling: styling,
        message: message,
        duration: duration,
        position: position,
        addPixelsY: addPixelsY
      }
    }
  }
};


var showWithOptions = function (options) {
    RCTToast.show(options);
};

var showToast = function (message, duration, position, styling) {
  showWithOptions(
      optionsBuilder()
          .withMessage(message||'未知数据')
          .withDuration(duration)
          .withPosition(position)
          .withStyling(styling)
          .build()
      );
};

Toast.showShortTop = function (message, styling) {
  showToast(message, "short", "top", styling);
};

Toast.showShortCenter = function (message, styling) {
  showToast(message, "short", "center", styling);
};

Toast.showShortBottom = function (message, styling) {
  showToast(message, "short", "bottom", styling);
};

Toast.showLongTop = function (message, styling) {
  showToast(message, "long", "top", styling);
};

Toast.showLongCenter = function (message, styling) {
  showToast(message, "long", "center", styling);
};

Toast.showLongBottom = function (message, styling) {
  showToast(message, "long", "bottom", styling);
};

Toast.show = function (message, styling) {
  showToast(message, "short", "bottom", styling);
};

Toast.hide = function () {
  RCTToast.hide();
};

module.exports = Toast;
