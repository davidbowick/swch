/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "/";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./node_modules/laravel-echo/dist/echo.js":
/*!************************************************!*\
  !*** ./node_modules/laravel-echo/dist/echo.js ***!
  \************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
var classCallCheck = function (instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
};

var createClass = function () {
  function defineProperties(target, props) {
    for (var i = 0; i < props.length; i++) {
      var descriptor = props[i];
      descriptor.enumerable = descriptor.enumerable || false;
      descriptor.configurable = true;
      if ("value" in descriptor) descriptor.writable = true;
      Object.defineProperty(target, descriptor.key, descriptor);
    }
  }

  return function (Constructor, protoProps, staticProps) {
    if (protoProps) defineProperties(Constructor.prototype, protoProps);
    if (staticProps) defineProperties(Constructor, staticProps);
    return Constructor;
  };
}();

var _extends = Object.assign || function (target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = arguments[i];

    for (var key in source) {
      if (Object.prototype.hasOwnProperty.call(source, key)) {
        target[key] = source[key];
      }
    }
  }

  return target;
};

var inherits = function (subClass, superClass) {
  if (typeof superClass !== "function" && superClass !== null) {
    throw new TypeError("Super expression must either be null or a function, not " + typeof superClass);
  }

  subClass.prototype = Object.create(superClass && superClass.prototype, {
    constructor: {
      value: subClass,
      enumerable: false,
      writable: true,
      configurable: true
    }
  });
  if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;
};

var possibleConstructorReturn = function (self, call) {
  if (!self) {
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  }

  return call && (typeof call === "object" || typeof call === "function") ? call : self;
};

var Connector = function () {
    /**
     * Create a new class instance.
     */
    function Connector(options) {
        classCallCheck(this, Connector);

        /**
         * Default connector options.
         */
        this._defaultOptions = {
            auth: {
                headers: {}
            },
            authEndpoint: '/broadcasting/auth',
            broadcaster: 'pusher',
            csrfToken: null,
            host: null,
            key: null,
            namespace: 'App.Events'
        };
        this.setOptions(options);
        this.connect();
    }
    /**
     * Merge the custom options with the defaults.
     */


    createClass(Connector, [{
        key: 'setOptions',
        value: function setOptions(options) {
            this.options = _extends(this._defaultOptions, options);
            if (this.csrfToken()) {
                this.options.auth.headers['X-CSRF-TOKEN'] = this.csrfToken();
            }
            return options;
        }
        /**
         * Extract the CSRF token from the page.
         */

    }, {
        key: 'csrfToken',
        value: function csrfToken() {
            var selector = void 0;
            if (typeof window !== 'undefined' && window['Laravel'] && window['Laravel'].csrfToken) {
                return window['Laravel'].csrfToken;
            } else if (this.options.csrfToken) {
                return this.options.csrfToken;
            } else if (typeof document !== 'undefined' && (selector = document.querySelector('meta[name="csrf-token"]'))) {
                return selector.getAttribute('content');
            }
            return null;
        }
    }]);
    return Connector;
}();

/**
 * This class represents a basic channel.
 */
var Channel = function () {
  function Channel() {
    classCallCheck(this, Channel);
  }

  createClass(Channel, [{
    key: 'listenForWhisper',

    /**
     * Listen for a whisper event on the channel instance.
     */
    value: function listenForWhisper(event, callback) {
      return this.listen('.client-' + event, callback);
    }
    /**
     * Listen for an event on the channel instance.
     */

  }, {
    key: 'notification',
    value: function notification(callback) {
      return this.listen('.Illuminate\\Notifications\\Events\\BroadcastNotificationCreated', callback);
    }
  }]);
  return Channel;
}();

/**
 * Event name formatter
 */
var EventFormatter = function () {
    /**
     * Create a new class instance.
     */
    function EventFormatter(namespace) {
        classCallCheck(this, EventFormatter);

        this.setNamespace(namespace);
    }
    /**
     * Format the given event name.
     */


    createClass(EventFormatter, [{
        key: 'format',
        value: function format(event) {
            if (event.charAt(0) === '.' || event.charAt(0) === '\\') {
                return event.substr(1);
            } else if (this.namespace) {
                event = this.namespace + '.' + event;
            }
            return event.replace(/\./g, '\\');
        }
        /**
         * Set the event namespace.
         */

    }, {
        key: 'setNamespace',
        value: function setNamespace(value) {
            this.namespace = value;
        }
    }]);
    return EventFormatter;
}();

/**
 * This class represents a Pusher channel.
 */
var PusherChannel = function (_Channel) {
    inherits(PusherChannel, _Channel);

    /**
     * Create a new class instance.
     */
    function PusherChannel(pusher, name, options) {
        classCallCheck(this, PusherChannel);

        var _this = possibleConstructorReturn(this, (PusherChannel.__proto__ || Object.getPrototypeOf(PusherChannel)).call(this));

        _this.name = name;
        _this.pusher = pusher;
        _this.options = options;
        _this.eventFormatter = new EventFormatter(_this.options.namespace);
        _this.subscribe();
        return _this;
    }
    /**
     * Subscribe to a Pusher channel.
     */


    createClass(PusherChannel, [{
        key: 'subscribe',
        value: function subscribe() {
            this.subscription = this.pusher.subscribe(this.name);
        }
        /**
         * Unsubscribe from a Pusher channel.
         */

    }, {
        key: 'unsubscribe',
        value: function unsubscribe() {
            this.pusher.unsubscribe(this.name);
        }
        /**
         * Listen for an event on the channel instance.
         */

    }, {
        key: 'listen',
        value: function listen(event, callback) {
            this.on(this.eventFormatter.format(event), callback);
            return this;
        }
        /**
         * Stop listening for an event on the channel instance.
         */

    }, {
        key: 'stopListening',
        value: function stopListening(event) {
            this.subscription.unbind(this.eventFormatter.format(event));
            return this;
        }
        /**
         * Bind a channel to an event.
         */

    }, {
        key: 'on',
        value: function on(event, callback) {
            this.subscription.bind(event, callback);
            return this;
        }
    }]);
    return PusherChannel;
}(Channel);

/**
 * This class represents a Pusher private channel.
 */
var PusherPrivateChannel = function (_PusherChannel) {
  inherits(PusherPrivateChannel, _PusherChannel);

  function PusherPrivateChannel() {
    classCallCheck(this, PusherPrivateChannel);
    return possibleConstructorReturn(this, (PusherPrivateChannel.__proto__ || Object.getPrototypeOf(PusherPrivateChannel)).apply(this, arguments));
  }

  createClass(PusherPrivateChannel, [{
    key: 'whisper',

    /**
     * Trigger client event on the channel.
     */
    value: function whisper(eventName, data) {
      this.pusher.channels.channels[this.name].trigger('client-' + eventName, data);
      return this;
    }
  }]);
  return PusherPrivateChannel;
}(PusherChannel);

/**
 * This class represents a Pusher presence channel.
 */
var PusherPresenceChannel = function (_PusherChannel) {
    inherits(PusherPresenceChannel, _PusherChannel);

    function PusherPresenceChannel() {
        classCallCheck(this, PusherPresenceChannel);
        return possibleConstructorReturn(this, (PusherPresenceChannel.__proto__ || Object.getPrototypeOf(PusherPresenceChannel)).apply(this, arguments));
    }

    createClass(PusherPresenceChannel, [{
        key: 'here',

        /**
         * Register a callback to be called anytime the member list changes.
         */
        value: function here(callback) {
            this.on('pusher:subscription_succeeded', function (data) {
                callback(Object.keys(data.members).map(function (k) {
                    return data.members[k];
                }));
            });
            return this;
        }
        /**
         * Listen for someone joining the channel.
         */

    }, {
        key: 'joining',
        value: function joining(callback) {
            this.on('pusher:member_added', function (member) {
                callback(member.info);
            });
            return this;
        }
        /**
         * Listen for someone leaving the channel.
         */

    }, {
        key: 'leaving',
        value: function leaving(callback) {
            this.on('pusher:member_removed', function (member) {
                callback(member.info);
            });
            return this;
        }
        /**
         * Trigger client event on the channel.
         */

    }, {
        key: 'whisper',
        value: function whisper(eventName, data) {
            this.pusher.channels.channels[this.name].trigger('client-' + eventName, data);
            return this;
        }
    }]);
    return PusherPresenceChannel;
}(PusherChannel);

/**
 * This class represents a Socket.io channel.
 */
var SocketIoChannel = function (_Channel) {
    inherits(SocketIoChannel, _Channel);

    /**
     * Create a new class instance.
     */
    function SocketIoChannel(socket, name, options) {
        classCallCheck(this, SocketIoChannel);

        /**
         * The event callbacks applied to the channel.
         */
        var _this = possibleConstructorReturn(this, (SocketIoChannel.__proto__ || Object.getPrototypeOf(SocketIoChannel)).call(this));

        _this.events = {};
        _this.name = name;
        _this.socket = socket;
        _this.options = options;
        _this.eventFormatter = new EventFormatter(_this.options.namespace);
        _this.subscribe();
        _this.configureReconnector();
        return _this;
    }
    /**
     * Subscribe to a Socket.io channel.
     */


    createClass(SocketIoChannel, [{
        key: 'subscribe',
        value: function subscribe() {
            this.socket.emit('subscribe', {
                channel: this.name,
                auth: this.options.auth || {}
            });
        }
        /**
         * Unsubscribe from channel and ubind event callbacks.
         */

    }, {
        key: 'unsubscribe',
        value: function unsubscribe() {
            this.unbind();
            this.socket.emit('unsubscribe', {
                channel: this.name,
                auth: this.options.auth || {}
            });
        }
        /**
         * Listen for an event on the channel instance.
         */

    }, {
        key: 'listen',
        value: function listen(event, callback) {
            this.on(this.eventFormatter.format(event), callback);
            return this;
        }
        /**
         * Stop listening for an event on the channel instance.
         */

    }, {
        key: 'stopListening',
        value: function stopListening(event) {
            var name = this.eventFormatter.format(event);
            this.socket.removeListener(name);
            delete this.events[name];
            return this;
        }
        /**
         * Bind the channel's socket to an event and store the callback.
         */

    }, {
        key: 'on',
        value: function on(event, callback) {
            var _this2 = this;

            var listener = function listener(channel, data) {
                if (_this2.name == channel) {
                    callback(data);
                }
            };
            this.socket.on(event, listener);
            this.bind(event, listener);
        }
        /**
         * Attach a 'reconnect' listener and bind the event.
         */

    }, {
        key: 'configureReconnector',
        value: function configureReconnector() {
            var _this3 = this;

            var listener = function listener() {
                _this3.subscribe();
            };
            this.socket.on('reconnect', listener);
            this.bind('reconnect', listener);
        }
        /**
         * Bind the channel's socket to an event and store the callback.
         */

    }, {
        key: 'bind',
        value: function bind(event, callback) {
            this.events[event] = this.events[event] || [];
            this.events[event].push(callback);
        }
        /**
         * Unbind the channel's socket from all stored event callbacks.
         */

    }, {
        key: 'unbind',
        value: function unbind() {
            var _this4 = this;

            Object.keys(this.events).forEach(function (event) {
                _this4.events[event].forEach(function (callback) {
                    _this4.socket.removeListener(event, callback);
                });
                delete _this4.events[event];
            });
        }
    }]);
    return SocketIoChannel;
}(Channel);

/**
 * This class represents a Socket.io presence channel.
 */
var SocketIoPrivateChannel = function (_SocketIoChannel) {
    inherits(SocketIoPrivateChannel, _SocketIoChannel);

    function SocketIoPrivateChannel() {
        classCallCheck(this, SocketIoPrivateChannel);
        return possibleConstructorReturn(this, (SocketIoPrivateChannel.__proto__ || Object.getPrototypeOf(SocketIoPrivateChannel)).apply(this, arguments));
    }

    createClass(SocketIoPrivateChannel, [{
        key: 'whisper',

        /**
         * Trigger client event on the channel.
         */
        value: function whisper(eventName, data) {
            this.socket.emit('client event', {
                channel: this.name,
                event: 'client-' + eventName,
                data: data
            });
            return this;
        }
    }]);
    return SocketIoPrivateChannel;
}(SocketIoChannel);

/**
 * This class represents a Socket.io presence channel.
 */
var SocketIoPresenceChannel = function (_SocketIoPrivateChann) {
    inherits(SocketIoPresenceChannel, _SocketIoPrivateChann);

    function SocketIoPresenceChannel() {
        classCallCheck(this, SocketIoPresenceChannel);
        return possibleConstructorReturn(this, (SocketIoPresenceChannel.__proto__ || Object.getPrototypeOf(SocketIoPresenceChannel)).apply(this, arguments));
    }

    createClass(SocketIoPresenceChannel, [{
        key: 'here',

        /**
         * Register a callback to be called anytime the member list changes.
         */
        value: function here(callback) {
            this.on('presence:subscribed', function (members) {
                callback(members.map(function (m) {
                    return m.user_info;
                }));
            });
            return this;
        }
        /**
         * Listen for someone joining the channel.
         */

    }, {
        key: 'joining',
        value: function joining(callback) {
            this.on('presence:joining', function (member) {
                return callback(member.user_info);
            });
            return this;
        }
        /**
         * Listen for someone leaving the channel.
         */

    }, {
        key: 'leaving',
        value: function leaving(callback) {
            this.on('presence:leaving', function (member) {
                return callback(member.user_info);
            });
            return this;
        }
    }]);
    return SocketIoPresenceChannel;
}(SocketIoPrivateChannel);

/**
 * This class represents a null channel.
 */
var NullChannel = function (_Channel) {
  inherits(NullChannel, _Channel);

  function NullChannel() {
    classCallCheck(this, NullChannel);
    return possibleConstructorReturn(this, (NullChannel.__proto__ || Object.getPrototypeOf(NullChannel)).apply(this, arguments));
  }

  createClass(NullChannel, [{
    key: 'subscribe',

    /**
     * Subscribe to a channel.
     */
    value: function subscribe() {}
    //

    /**
     * Unsubscribe from a channel.
     */

  }, {
    key: 'unsubscribe',
    value: function unsubscribe() {}
    //

    /**
     * Listen for an event on the channel instance.
     */

  }, {
    key: 'listen',
    value: function listen(event, callback) {
      return this;
    }
    /**
     * Stop listening for an event on the channel instance.
     */

  }, {
    key: 'stopListening',
    value: function stopListening(event) {
      return this;
    }
    /**
     * Bind a channel to an event.
     */

  }, {
    key: 'on',
    value: function on(event, callback) {
      return this;
    }
  }]);
  return NullChannel;
}(Channel);

/**
 * This class represents a null private channel.
 */
var NullPrivateChannel = function (_NullChannel) {
  inherits(NullPrivateChannel, _NullChannel);

  function NullPrivateChannel() {
    classCallCheck(this, NullPrivateChannel);
    return possibleConstructorReturn(this, (NullPrivateChannel.__proto__ || Object.getPrototypeOf(NullPrivateChannel)).apply(this, arguments));
  }

  createClass(NullPrivateChannel, [{
    key: 'whisper',

    /**
     * Trigger client event on the channel.
     */
    value: function whisper(eventName, data) {
      return this;
    }
  }]);
  return NullPrivateChannel;
}(NullChannel);

/**
 * This class represents a null presence channel.
 */
var NullPresenceChannel = function (_NullChannel) {
  inherits(NullPresenceChannel, _NullChannel);

  function NullPresenceChannel() {
    classCallCheck(this, NullPresenceChannel);
    return possibleConstructorReturn(this, (NullPresenceChannel.__proto__ || Object.getPrototypeOf(NullPresenceChannel)).apply(this, arguments));
  }

  createClass(NullPresenceChannel, [{
    key: 'here',

    /**
     * Register a callback to be called anytime the member list changes.
     */
    value: function here(callback) {
      return this;
    }
    /**
     * Listen for someone joining the channel.
     */

  }, {
    key: 'joining',
    value: function joining(callback) {
      return this;
    }
    /**
     * Listen for someone leaving the channel.
     */

  }, {
    key: 'leaving',
    value: function leaving(callback) {
      return this;
    }
    /**
     * Trigger client event on the channel.
     */

  }, {
    key: 'whisper',
    value: function whisper(eventName, data) {
      return this;
    }
  }]);
  return NullPresenceChannel;
}(NullChannel);

/**
 * This class creates a connector to Pusher.
 */
var PusherConnector = function (_Connector) {
    inherits(PusherConnector, _Connector);

    function PusherConnector() {
        classCallCheck(this, PusherConnector);

        /**
         * All of the subscribed channel names.
         */
        var _this = possibleConstructorReturn(this, (PusherConnector.__proto__ || Object.getPrototypeOf(PusherConnector)).apply(this, arguments));

        _this.channels = {};
        return _this;
    }
    /**
     * Create a fresh Pusher connection.
     */


    createClass(PusherConnector, [{
        key: 'connect',
        value: function connect() {
            if (typeof this.options.client !== 'undefined') {
                this.pusher = this.options.client;
            } else {
                this.pusher = new Pusher(this.options.key, this.options);
            }
        }
        /**
         * Listen for an event on a channel instance.
         */

    }, {
        key: 'listen',
        value: function listen(name, event, callback) {
            return this.channel(name).listen(event, callback);
        }
        /**
         * Get a channel instance by name.
         */

    }, {
        key: 'channel',
        value: function channel(name) {
            if (!this.channels[name]) {
                this.channels[name] = new PusherChannel(this.pusher, name, this.options);
            }
            return this.channels[name];
        }
        /**
         * Get a private channel instance by name.
         */

    }, {
        key: 'privateChannel',
        value: function privateChannel(name) {
            if (!this.channels['private-' + name]) {
                this.channels['private-' + name] = new PusherPrivateChannel(this.pusher, 'private-' + name, this.options);
            }
            return this.channels['private-' + name];
        }
        /**
         * Get a presence channel instance by name.
         */

    }, {
        key: 'presenceChannel',
        value: function presenceChannel(name) {
            if (!this.channels['presence-' + name]) {
                this.channels['presence-' + name] = new PusherPresenceChannel(this.pusher, 'presence-' + name, this.options);
            }
            return this.channels['presence-' + name];
        }
        /**
         * Leave the given channel, as well as its private and presence variants.
         */

    }, {
        key: 'leave',
        value: function leave(name) {
            var _this2 = this;

            var channels = [name, 'private-' + name, 'presence-' + name];
            channels.forEach(function (name, index) {
                _this2.leaveChannel(name);
            });
        }
        /**
         * Leave the given channel.
         */

    }, {
        key: 'leaveChannel',
        value: function leaveChannel(name) {
            if (this.channels[name]) {
                this.channels[name].unsubscribe();
                delete this.channels[name];
            }
        }
        /**
         * Get the socket ID for the connection.
         */

    }, {
        key: 'socketId',
        value: function socketId() {
            return this.pusher.connection.socket_id;
        }
        /**
         * Disconnect Pusher connection.
         */

    }, {
        key: 'disconnect',
        value: function disconnect() {
            this.pusher.disconnect();
        }
    }]);
    return PusherConnector;
}(Connector);

/**
 * This class creates a connnector to a Socket.io server.
 */
var SocketIoConnector = function (_Connector) {
    inherits(SocketIoConnector, _Connector);

    function SocketIoConnector() {
        classCallCheck(this, SocketIoConnector);

        /**
         * All of the subscribed channel names.
         */
        var _this = possibleConstructorReturn(this, (SocketIoConnector.__proto__ || Object.getPrototypeOf(SocketIoConnector)).apply(this, arguments));

        _this.channels = {};
        return _this;
    }
    /**
     * Create a fresh Socket.io connection.
     */


    createClass(SocketIoConnector, [{
        key: 'connect',
        value: function connect() {
            var io = this.getSocketIO();
            this.socket = io(this.options.host, this.options);
            return this.socket;
        }
        /**
         * Get socket.io module from global scope or options.
         */

    }, {
        key: 'getSocketIO',
        value: function getSocketIO() {
            if (typeof this.options.client !== 'undefined') {
                return this.options.client;
            }
            if (typeof io !== 'undefined') {
                return io;
            }
            throw new Error('Socket.io client not found. Should be globally available or passed via options.client');
        }
        /**
         * Listen for an event on a channel instance.
         */

    }, {
        key: 'listen',
        value: function listen(name, event, callback) {
            return this.channel(name).listen(event, callback);
        }
        /**
         * Get a channel instance by name.
         */

    }, {
        key: 'channel',
        value: function channel(name) {
            if (!this.channels[name]) {
                this.channels[name] = new SocketIoChannel(this.socket, name, this.options);
            }
            return this.channels[name];
        }
        /**
         * Get a private channel instance by name.
         */

    }, {
        key: 'privateChannel',
        value: function privateChannel(name) {
            if (!this.channels['private-' + name]) {
                this.channels['private-' + name] = new SocketIoPrivateChannel(this.socket, 'private-' + name, this.options);
            }
            return this.channels['private-' + name];
        }
        /**
         * Get a presence channel instance by name.
         */

    }, {
        key: 'presenceChannel',
        value: function presenceChannel(name) {
            if (!this.channels['presence-' + name]) {
                this.channels['presence-' + name] = new SocketIoPresenceChannel(this.socket, 'presence-' + name, this.options);
            }
            return this.channels['presence-' + name];
        }
        /**
         * Leave the given channel, as well as its private and presence variants.
         */

    }, {
        key: 'leave',
        value: function leave(name) {
            var _this2 = this;

            var channels = [name, 'private-' + name, 'presence-' + name];
            channels.forEach(function (name) {
                _this2.leaveChannel(name);
            });
        }
        /**
         * Leave the given channel.
         */

    }, {
        key: 'leaveChannel',
        value: function leaveChannel(name) {
            if (this.channels[name]) {
                this.channels[name].unsubscribe();
                delete this.channels[name];
            }
        }
        /**
         * Get the socket ID for the connection.
         */

    }, {
        key: 'socketId',
        value: function socketId() {
            return this.socket.id;
        }
        /**
         * Disconnect Socketio connection.
         */

    }, {
        key: 'disconnect',
        value: function disconnect() {
            this.socket.disconnect();
        }
    }]);
    return SocketIoConnector;
}(Connector);

/**
 * This class creates a null connector.
 */
var NullConnector = function (_Connector) {
  inherits(NullConnector, _Connector);

  function NullConnector() {
    classCallCheck(this, NullConnector);

    /**
     * All of the subscribed channel names.
     */
    var _this = possibleConstructorReturn(this, (NullConnector.__proto__ || Object.getPrototypeOf(NullConnector)).apply(this, arguments));

    _this.channels = {};
    return _this;
  }
  /**
   * Create a fresh connection.
   */


  createClass(NullConnector, [{
    key: 'connect',
    value: function connect() {}
    //

    /**
     * Listen for an event on a channel instance.
     */

  }, {
    key: 'listen',
    value: function listen(name, event, callback) {
      return new NullChannel();
    }
    /**
     * Get a channel instance by name.
     */

  }, {
    key: 'channel',
    value: function channel(name) {
      return new NullChannel();
    }
    /**
     * Get a private channel instance by name.
     */

  }, {
    key: 'privateChannel',
    value: function privateChannel(name) {
      return new NullPrivateChannel();
    }
    /**
     * Get a presence channel instance by name.
     */

  }, {
    key: 'presenceChannel',
    value: function presenceChannel(name) {
      return new NullPresenceChannel();
    }
    /**
     * Leave the given channel, as well as its private and presence variants.
     */

  }, {
    key: 'leave',
    value: function leave(name) {}
    //

    /**
     * Leave the given channel.
     */

  }, {
    key: 'leaveChannel',
    value: function leaveChannel(name) {}
    //

    /**
     * Get the socket ID for the connection.
     */

  }, {
    key: 'socketId',
    value: function socketId() {
      return 'fake-socket-id';
    }
    /**
     * Disconnect the connection.
     */

  }, {
    key: 'disconnect',
    value: function disconnect() {
      //
    }
  }]);
  return NullConnector;
}(Connector);

/**
 * This class is the primary API for interacting with broadcasting.
 */

var Echo = function () {
    /**
     * Create a new class instance.
     */
    function Echo(options) {
        classCallCheck(this, Echo);

        this.options = options;
        this.connect();
        this.registerInterceptors();
    }
    /**
     * Get a channel instance by name.
     */


    createClass(Echo, [{
        key: 'channel',
        value: function channel(_channel) {
            return this.connector.channel(_channel);
        }
        /**
         * Create a new connection.
         */

    }, {
        key: 'connect',
        value: function connect() {
            if (this.options.broadcaster == 'pusher') {
                this.connector = new PusherConnector(this.options);
            } else if (this.options.broadcaster == 'socket.io') {
                this.connector = new SocketIoConnector(this.options);
            } else if (this.options.broadcaster == 'null') {
                this.connector = new NullConnector(this.options);
            }
        }
        /**
         * Disconnect from the Echo server.
         */

    }, {
        key: 'disconnect',
        value: function disconnect() {
            this.connector.disconnect();
        }
        /**
         * Get a presence channel instance by name.
         */

    }, {
        key: 'join',
        value: function join(channel) {
            return this.connector.presenceChannel(channel);
        }
        /**
         * Leave the given channel, as well as its private and presence variants.
         */

    }, {
        key: 'leave',
        value: function leave(channel) {
            this.connector.leave(channel);
        }
        /**
         * Leave the given channel.
         */

    }, {
        key: 'leaveChannel',
        value: function leaveChannel(channel) {
            this.connector.leaveChannel(channel);
        }
        /**
         * Listen for an event on a channel instance.
         */

    }, {
        key: 'listen',
        value: function listen(channel, event, callback) {
            return this.connector.listen(channel, event, callback);
        }
        /**
         * Get a private channel instance by name.
         */

    }, {
        key: 'private',
        value: function _private(channel) {
            return this.connector.privateChannel(channel);
        }
        /**
         * Get the Socket ID for the connection.
         */

    }, {
        key: 'socketId',
        value: function socketId() {
            return this.connector.socketId();
        }
        /**
         * Register 3rd party request interceptiors. These are used to automatically
         * send a connections socket id to a Laravel app with a X-Socket-Id header.
         */

    }, {
        key: 'registerInterceptors',
        value: function registerInterceptors() {
            if (typeof Vue === 'function' && Vue.http) {
                this.registerVueRequestInterceptor();
            }
            if (typeof axios === 'function') {
                this.registerAxiosRequestInterceptor();
            }
            if (typeof jQuery === 'function') {
                this.registerjQueryAjaxSetup();
            }
        }
        /**
         * Register a Vue HTTP interceptor to add the X-Socket-ID header.
         */

    }, {
        key: 'registerVueRequestInterceptor',
        value: function registerVueRequestInterceptor() {
            var _this = this;

            Vue.http.interceptors.push(function (request, next) {
                if (_this.socketId()) {
                    request.headers.set('X-Socket-ID', _this.socketId());
                }
                next();
            });
        }
        /**
         * Register an Axios HTTP interceptor to add the X-Socket-ID header.
         */

    }, {
        key: 'registerAxiosRequestInterceptor',
        value: function registerAxiosRequestInterceptor() {
            var _this2 = this;

            axios.interceptors.request.use(function (config) {
                if (_this2.socketId()) {
                    config.headers['X-Socket-Id'] = _this2.socketId();
                }
                return config;
            });
        }
        /**
         * Register jQuery AjaxSetup to add the X-Socket-ID header.
         */

    }, {
        key: 'registerjQueryAjaxSetup',
        value: function registerjQueryAjaxSetup() {
            var _this3 = this;

            if (typeof jQuery.ajax != 'undefined') {
                jQuery.ajaxSetup({
                    beforeSend: function beforeSend(xhr) {
                        if (_this3.socketId()) {
                            xhr.setRequestHeader('X-Socket-Id', _this3.socketId());
                        }
                    }
                });
            }
        }
    }]);
    return Echo;
}();

/* harmony default export */ __webpack_exports__["default"] = (Echo);


/***/ }),

/***/ "./node_modules/webpack/buildin/global.js":
/*!***********************************!*\
  !*** (webpack)/buildin/global.js ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

var g;

// This works in non-strict mode
g = (function() {
	return this;
})();

try {
	// This works if eval is allowed (see CSP)
	g = g || new Function("return this")();
} catch (e) {
	// This works if the window reference is available
	if (typeof window === "object") g = window;
}

// g can still be undefined, but nothing to do about it...
// We return undefined, instead of nothing here, so it's
// easier to handle this case. if(!global) { ...}

module.exports = g;


/***/ }),

/***/ "./node_modules/webpack/buildin/module.js":
/*!***********************************!*\
  !*** (webpack)/buildin/module.js ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = function(module) {
	if (!module.webpackPolyfill) {
		module.deprecate = function() {};
		module.paths = [];
		// module.parent = undefined by default
		if (!module.children) module.children = [];
		Object.defineProperty(module, "loaded", {
			enumerable: true,
			get: function() {
				return module.l;
			}
		});
		Object.defineProperty(module, "id", {
			enumerable: true,
			get: function() {
				return module.i;
			}
		});
		module.webpackPolyfill = 1;
	}
	return module;
};


/***/ }),

/***/ "./resources/js/app.js":
/*!*****************************!*\
  !*** ./resources/js/app.js ***!
  \*****************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var laravel_echo__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! laravel-echo */ "./node_modules/laravel-echo/dist/echo.js");
/*
 * First we will load all of this project's JavaScript dependencies which
 * includes Vue and other libraries. It is a great starting point when
 * building robust, powerful web applications using Vue and Laravel.
 */
// require('./jquery.form.min.js');
__webpack_require__(/*! ./sticky-sidebar.min.js */ "./resources/js/sticky-sidebar.min.js");

__webpack_require__(/*! ./cookies.min.js */ "./resources/js/cookies.min.js");

__webpack_require__(/*! ./pusher.min.js */ "./resources/js/pusher.min.js"); // require('./bootstrap.js');


function isMobile() {
  var win = window.matchMedia("(max-width: 768px)");

  if (win.matches) {
    return true;
  } else {
    return false;
  }
}

$.easing.custom = function (x, t, b, c, d) {
  if ((t /= d / 2) < 1) return c / 2 * t * t + b;
  return -c / 2 * (--t * (t - 2) - 1) + b;
};

$.fn.highlight = function (what, spanClass) {
  return this.each(function () {
    var container = this,
        content = container.innerHTML,
        pattern = new RegExp('(>[^<.]*)(' + what + ')([^<.]*)', 'g'),
        replaceWith = '$1<span ' + (spanClass ? 'class="' + spanClass + '"' : '') + '">$2</span>$3',
        highlighted = content.replace(pattern, replaceWith);
    container.innerHTML = highlighted;
  });
};
/* Slide in on Appear */


$.fn.visible = function (partial) {
  var $t = $(this),
      $w = $(window),
      viewTop = $w.scrollTop(),
      viewBottom = viewTop + $w.height(),
      _top = $t.offset().top,
      _bottom = _top + $t.height(),
      compareTop = partial === true ? _bottom : _top,
      compareBottom = partial === true ? _top : _bottom;

  return compareBottom <= viewBottom && compareTop >= viewTop;
};

function debounce(func, wait, immediate) {
  var timeout;
  return function () {
    var context = this,
        args = arguments;

    var later = function later() {
      timeout = null;
      if (!immediate) func.apply(context, args);
    };

    var callNow = immediate && !timeout;
    clearTimeout(timeout);
    timeout = setTimeout(later, wait);
    if (callNow) func.apply(context, args);
  };
}

;
var NowPlaying = {
  isPlaying: false,
  currentPostId: false,
  currentUserId: false,
  currentUserName: false,
  currentUserImage: false
};
var AUDIO_PLAYING = false,
    CURRENT_SONG = false,
    SOMETHING = true,
    USE_PLAYLIST = false,
    MAIN_CONTENT = '#main-content';
$(function () {
  fadeInElements();
  stickySidebar();
  honeypotForms();
  /* Show lyrics on click */

  $(document).on('click', '.show-lyrics', function (e) {
    e.preventDefault();
    var lyricsDiv = $(this).closest('.post').find('.post__lyrics');
    /*var prompt = $(this).closest('.post').data('prompt-title');
    var lyricsString = lyricsDiv.text();
    var reg = new RegExp(prompt,'ig');
    lyricsString.replace(reg,"<b>$1</b>");*/

    lyricsDiv.slideToggle();
  });
  /* Show comments on click */

  $(document).on('click', '.post__comment-link', function (e) {
    e.preventDefault();
    var $this = $(this);
    $this.closest('.post').find('.post__comments').slideToggle('fast', function () {
      if ($(this).is(':visible')) {
        $(this).find('input[name="comment"]').focus();
      }
    });
  });
  $(document).on('click', '.play-all', function (e) {
    e.preventDefault();
    USE_PLAYLIST = true;
    $('.post').eq(0).find('.play-pause-btn').eq(0).trigger('click');
  });
  $(document).on('click', '.post .play-pause-btn', function (e) {
    e.preventDefault();
    var $this = $(this);
    var $item = $this.closest('.post'),
        $mainPlayer = $('.main-player'),
        $songId = $item.data('song-id'),
        $btn = $item.find('.play-pause-btn i'),
        $mainBtn = $mainPlayer.find('.play-pause-btn i'),
        $thebtn = $btn.parent(),
        $loadingIndicator = $mainPlayer.find('.main-player__playbar--loading'),
        $progress = $mainPlayer.find('.main-player__playbar--progress'),
        $seek = $item.find('.seek'),
        $mainProgress = '.main-player__playbar--progress',
        mainTitle = '.main-player__title',
        sID = $item.parent().parent().data('song-id'),
        prompt = $item.data('prompt-title'),
        promptSlug = $item.data('prompt-slug'),
        userLink = $item.find('.post_artist').html(),
        postLink = $item.find('.share').attr('href'),
        liked = $item.find('.like').hasClass('liked');
    $mainPlayer.attr('data-song-id', $songId); // Nothing is Playing

    if (NowPlaying.currentPostId != $songId) {
      if ($('.post.is-playing').length) {
        $('.post.is-playing').eq(0).find('.play-pause-btn').eq(0).trigger('click');
        $('.post[data-song-id="' + NowPlaying.currentPostId + '"').removeClass('is-playing');
        $('.post[data-song-id="' + $songId + '"').addClass('is-playing').find('.play-pause-btn i').removeClass('fa-play').addClass('fa-pause');
      } // $this.find('.play-pau')


      $('.main-player__image').empty();
      var mainTitles = '<b><a href="' + postLink + '">"' + $item.data('title') + '"</a></b>' + '<br/>' + userLink;
      $(mainTitle).html(mainTitles);
      var $userImage = $item.find('.post__cover img').clone().appendTo('.main-player__image');
      $mainPlayer.fadeIn();
      $('.main-player__audio').attr('src', $item.data('audio')); // $('.main-player__audio').get(0)
      // CURRENT_SONG = $songId;

      NowPlaying.currentPostId = $songId;
      NowPlaying.currentPrompt = prompt;
      $('.main-player__prompt-name').text(prompt);
      $('.main-player__prompt ').attr('href', '/prompts/' + promptSlug);
      liked ? $('.main-player__like').addClass('liked') : $('.main-player__like').removeClass('liked');
    }

    setTimeout(function () {
      $('.main-player .play-pause-btn').trigger('click');
    }, 250);
    $btn.attr('class', $item.hasClass('is-playing') ? 'fa fa-pause' : 'fa fa-play');
    $mainBtn.attr('class', $item.hasClass('is-playing') ? 'fa fa-pause' : 'fa fa-play');
  });
  var mainAudio = '.main-player__audio',
      loadingIndicator = '.main-player__playbar--loading',
      progressIndicator = '.main-player__playbar--progress',
      mainAudioPlayer = $(mainAudio).get(0);

  if ($(mainAudio).buffered != undefined && $(mainAudio).buffered.length != 0) {
    mainAudioPlayer.bind('progress', function () {
      var loaded = parseInt($(mainAudio).buffered.end(0) / $(mainAudio).duration * 100, 10);
      $(loadingIndicator).css({
        width: loaded + '%'
      });
    });
  } else {
    $(loadingIndicator).css({
      width: '100%'
    });
  }

  var pos = 0;
  var countedMe = false;
  $(mainAudioPlayer).on("loadeddata", function () {
    audioFunctions();
  });

  function audioFunctions() {
    $(mainAudioPlayer).bind('timeupdate', function () {
      var rem = parseInt(mainAudioPlayer.duration - mainAudioPlayer.currentTime, 10),
          mins = Math.floor(rem / 60, 10),
          secs = rem - mins * 60;
      pos = mainAudioPlayer.currentTime / mainAudioPlayer.duration * 100;
      $(progressIndicator).css({
        width: pos + '%'
      });
      var minutesElapsed = parseInt(mainAudioPlayer.currentTime / 60, 10);
      minutesElapsed = (minutesElapsed < 10 ? "0" : "") + minutesElapsed;
      var secondsElapsed = parseInt(mainAudioPlayer.currentTime % 60, 10);
      secondsElapsed = (secondsElapsed < 10 ? "0" : "") + secondsElapsed;
      var minutesTotal = parseInt(mainAudioPlayer.duration / 60, 10);
      minutesTotal = (minutesTotal < 10 ? "0" : "") + minutesTotal;
      var secondsTotal = parseInt(mainAudioPlayer.duration % 60, 10);
      secondsTotal = (secondsTotal < 10 ? "0" : "") + secondsTotal;

      if ($.isNumeric(mainAudioPlayer.duration)) {
        $('.main-player__current-time').text(minutesElapsed + ':' + secondsElapsed);
        $('.main-player__total-time').text(minutesTotal + ':' + secondsTotal);
      }

      $(progressIndicator).css({
        width: pos + '%'
      });

      if (!countedMe && pos >= 50) {
        countedMe = true;
        var myHref = '/play/' + NowPlaying.currentPostId;
        $.get(myHref, function (n) {
          $('.post[data-song-id="' + NowPlaying.currentPostId + '"').find('.play-count').text(n);
        });
      }
    }); // Update for all iterations on page

    $(mainAudioPlayer).bind('ended', function () {
      mainAudioPlayer.currentTime = 0;
      $('.post[data-song-id="' + NowPlaying.currentPostId + '"').removeClass('is-playing');
      $('.play-pause-btn i').removeClass('fa-pause').addClass('fa-play');
      countedMe = false;
      NowPlaying.isPlaying = false;

      if (USE_PLAYLIST) {
        var myIndex = playlist.songs.findIndex(function (x) {
          return x.id === NowPlaying.currentPostId;
        }); // console.log(playlist.songs.length,(myIndex+1));

        if (playlist.songs.length > myIndex + 1 && USE_PLAYLIST) {
          var nextIndex = playlist.songs[myIndex + 1].id;

          if (nextIndex) {
            $.get('/next/' + nextIndex, function (data) {
              nextSong(data);
            });
          }
        } else {
          //hidePlayer();
          USE_PLAYLIST = false;
          $('.post .bars').fadeOut();
        }
      }
    });
  }

  function hidePlayer() {
    $('.main-player').fadeOut();
  }

  function nextSong(s) {
    var mainAudio = '.main-player__audio';
    $(mainAudio).attr('src', '//songwritingchallenge.s3.amazonaws.com/mp3s/' + s.filename);
    $(mainAudio).get(0).load();
    var promise = $(mainAudio).get(0).play();

    if (promise !== undefined) {
      promise.then(function () {
        $('.post[data-song-id="' + NowPlaying.currentPostId + '"').find('.bars').fadeOut();
        NowPlaying.isPlaying = true;
        $('.main-player__title').html('<b><a href="/' + s.user.username + '">' + s.user.name + '</b><br/><a href="/' + s.user.username + '/' + s.slug + '">' + s.title + '</a>');
        $('.main-player__image img').attr('src', '//songwritingchallenge.s3.amazonaws.com/avatars/small/' + s.user.avatar);
        $('.main-player__prompt').attr('href', '/prompts/' + s.prompt.slug);
        $('.main-player__prompt-name').text(s.prompt.title);
        $('.play-pause-btn i').removeClass('fa-pause').addClass('fa-play');
        $('.main-player__transport .play-pause-btn i').removeClass('fa-play').addClass('fa-pause');
        NowPlaying.currentPostId = s.id;
        $('.main-player').attr('data-song-id', s.id); // console.log(NowPlaying.currentPostId);

        var iLike = s.likes.findIndex(function (x) {
          return x.id === currentUser;
        });
        iLike > -1 ? $('.main-player__like').addClass('liked') : $('.main-player__like').removeClass('liked');
        $('.post[data-song-id="' + NowPlaying.currentPostId + '"').find('.play-pause-btn i').removeClass('.fa-play').addClass('fa-pause');
        $('.post[data-song-id="' + NowPlaying.currentPostId + '"').find('.bars').fadeIn();
      })["catch"](function (error) {// console.error(error); 
      });
    }
  }

  function togglePlayPause(songId) {
    var el = $('.post[data-song-id="' + songId + '"] .play-pause-btn i');

    if (el.hasClass('fa-play')) {
      el.removeClass('fa-play').addClass('fa-pause');
    } else {
      el.removeClass('fa-pause').addClass('fa-play');
    }

    if (el.closest('.post').length) {
      el.closest('.post').find('.bars').fadeOut();
    }
  }

  $(document).on('click', '.main-player .play-pause-btn', function (e) {
    e.preventDefault();
    var $this = $(this),
        btn = $this.find('i'),
        songId = $('.main-player').attr('data-song-id');

    if (NowPlaying.isPlaying) {
      $('.main-player__audio').get(0).pause();
      btn.removeClass('fa-pause').addClass('fa-play');
      NowPlaying.isPlaying = false;
      pausePlayAllInstances(songId); // $().removeClass('fa-pause').addClass('fa-play');
    } else {
      var promise = $('.main-player__audio').get(0).play(); // var promise = $(mainAudio).get(0).play();

      if (promise !== undefined) {
        promise.then(function () {
          // console.error(error); 
          btn.removeClass('fa-play').addClass('fa-pause');
          NowPlaying.isPlaying = true;
          pausePlayAllInstances(songId);
        })["catch"](function (error) {
          console.log(error);
        });
      }
    } // console.log(NowPlaying.isPlaying);

  });
  $(document).on('click', '.main-player__like', function (e) {
    e.preventDefault();
    var $this = $(this),
        n = NowPlaying.currentPostId,
        posts = $('.post[data-song-id="' + n + '"]');
    $(this).attr('href', '/post/like/' + n);
    getLike(n);
  });

  function pausePlayAllInstances(n) {
    // console.log(n);
    var posts = $('.post[data-song-id="' + n + '"]'); // console.log(posts.length, NowPlaying.isPlaying, NowPlaying.currentPostId);

    if (NowPlaying.isPlaying && NowPlaying.currentPostId == n) {
      posts.addClass('is-playing').find('.play-pause-btn i').removeClass('fa-play').addClass('fa-pause');
      posts.find('.bars').fadeIn();
    } else {
      posts.removeClass('is-playing').find('.play-pause-btn i').removeClass('fa-pause').addClass('fa-play');
      posts.find('.bars').fadeOut();
    }
  }

  function getLike(l) {
    $.get('/post/like/' + l, function (r) {
      var posts = $('.post[data-song-id="' + l + '"]');

      if (r.success == true) {
        posts.find('.like').addClass('liked');

        if (NowPlaying.currentPostId == l) {
          $('.main-player__like').addClass('liked');
        }
      } else {
        posts.find('.like').removeClass('liked');

        if (NowPlaying.currentPostId == l) {
          $('.main-player__like').removeClass('liked');
        }
      } // r.success ?  : 


      posts.find('.like-count').text(r.total_likes);
    });
  }

  $(document).on('click', '.post .like', function (e) {
    e.preventDefault();
    var $this = $(this),
        postID = $(this).data('song-id');
    getLike(postID);
  });
  $(document).on('change', '.ajax-active input', function (e) {
    e.preventDefault();
    var $this = $(this),
        form = $this.closest('form'); // $(this).closest('form').submit();

    $.ajax({
      url: form.attr('action'),
      type: 'post',
      data: form.serialize(),
      dataType: 'json',
      success: function success(r) {// console.log('success!');
      },
      error: function error(e) {// console.log('boo hissss!');
      }
    });
  });
  $(document).on('submit', '.suggestion-form', function (e) {
    e.preventDefault();
    var $this = $(this);
    $this.find('.btn .spinner').fadeIn();
    $this.find('.btn').attr('disabled', true);
    $.ajax({
      url: $this.attr('action'),
      type: 'post',
      data: $this.serialize(),
      success: function success(r) {
        $.get('/suggestions', function () {
          $('#main-content').html($(r).find('#main-content').html());
        });
      },
      error: function error(e) {// console.log(e);
      }
    });
  });

  function showPick(n, all, picks) {
    var time = 50;
    var div = n === 1 ? '.results-1' : '.results-2';
    var pick = picks[0].title;
    var secondPick = picks[1].title;
    $.each(all, function (i, v) {
      setTimeout(function () {
        $(div).text(v.title);
      }, time * i);
    });
    setTimeout(function () {
      $(div).text(pick);
    }, time * all.length);
    /*
    if(n===1) {
    	setTimeout(function() {
    		$(div).text(firstPick);
    		//showPick(2,all,picks);
    	}, time*all.length);
    } else {
    	setTimeout(function() {
    		$(div).text(secondPick);
    			// showPick(2,all,picks);
    		}, time*all.length);
    }
    */
  }

  $(document).on('click', '.hat-draw', function (e) {
    e.preventDefault();
    var $this = $(this);
    var n = parseInt($this.attr('data-pick-number'));
    console.log(n);
    $.get('/suggestions/pick', function (data) {
      var all = data.all,
          picks = data.picks;
      var newAll = $.merge(all, all);
      showPick(n, newAll, picks);
      $this.attr('data-pick-number', '2');
    });
  });
  $(document).on('submit', '.comment-form', function (e) {
    e.preventDefault(); // $('.comment-form').submit(function(e) {

    var $this = $(this);
    var myComments = $this.closest('.post__comments').find('.post__comments--inner');
    $.ajax({
      url: $this.attr('action'),
      type: 'post',
      data: $this.serialize(),
      dataType: 'json',
      success: function success(r) {
        // console.log(r);
        var newComment = '<div class="post__comment anim-in come-in flex flex--align-center"><div class="post__comment--user"><a href="' + r.user.username + '"><img src="/storage/uploads/avatars/' + r.user.avatar + '" width="20" /></a></div><div class="post__comment--text">' + r.comment + '</div></div>';
        $(newComment).appendTo(myComments);
        $this.find('input[name="comment"]').val('');
        var commentCount = parseInt($this.closest('.post_player').find('.comment-count').text()) + 1;
        $this.closest('.post_player').find('.comment-count').text(commentCount); // $('.post__comments').append(newComment);
      }
    });
    return false;
  });
  $(document).on('click', '.im-going', function (e) {
    e.preventDefault();
    var $this = $(this),
        showcaseID = $(this).data('event-id');
    $.get('/showcase/like/' + showcaseID, function (r) {
      // console.log(r);
      if (r.success) {
        $this.addClass('liked');
        $this.find('.icon i').attr('class', 'fa fa-thumbs-up');
        $this.find('.button-text').text('I\'ll Be There!');
      } else {
        $this.removeClass('liked');
        $this.find('.icon i').attr('class', 'fa fa-question');
        $this.find('.button-text').text('Be There?');
      }

      var totalText = r.total_likes === 1 ? ' user attending' : ' users attending';
      $('.total-attendees').text(r.total_likes + totalText);
    });
  });
  $(document).on('click', '.follow-btn', function (e) {
    e.preventDefault();
    var $this = $(this),
        request = $this.attr('href'),
        el = $this[0];
    $.get(request, function (r) {
      if (r.success) {
        $this.addClass('liked').find('.like-text').text('Following'); // $this.find('i').addClass('star-spin');

        setTimeout(function () {
          $this.find('i').toggleClass('star-spin');
        }, 1000);
      } else {
        $this.removeClass('liked').find('.like-text').text('Follow');
        $this.find('i').removeClass('star-spin');
      } // void el.offsetWidth;
      // r.success ?  : ;


      $this.next().text('Followers: ' + r.total_likes);
    });
  });
  $(document).on('change keyup keydown paste cut', 'textarea', function () {
    $(this).height(0).height(this.scrollHeight);
  });

  function stickySidebar() {
    if ($('.sidebar__inner').data('sticky') === true && isMobile() == false) {
      // console.log('sticky sidebar');
      var sidebar = new StickySidebar('.sidebar', {
        containerSelector: '#page-content',
        innerWrapperSelector: '.sidebar__inner',
        topSpacing: 50,
        bottomSpacing: 50
      });
    }
  }

  var resizeTimer;
  $(window).on('resize', function (e) {
    clearTimeout(resizeTimer);
    resizeTimer = setTimeout(function () {
      stickySidebar();
    }, 250);
  });
  var MIN_LENGTH = 3;
  var CURRENT_QUERY = '';
  $("#ts").keyup(debounce(function () {
    var keyword = $("#ts").val(),
        tsr = '#top-search-results__inner';

    if (keyword.length >= MIN_LENGTH && CURRENT_QUERY != keyword) {
      CURRENT_QUERY = keyword;
      $.get("/search", {
        q: keyword
      }).done(function (data) {
        // console.log(data);
        $(tsr).empty();

        if (data.users.length) {
          $(tsr).append('<h4>Users</h4>');
          var users = '.tsr__users';
          $(tsr).append('<ul class="tsr__users"></ul>');
          $(data.users).each(function (i, v) {
            if (i < 5) {
              var userItem = '<li class="tsr__user"><a href="/' + v.username + '"><img src="/storage/uploads/avatars/' + v.avatar + '" width="20">' + v.name + '</a></li>';
              $(users).append(userItem);
            }

            if (i == 5) {
              $(users).append('<li class="tsr__more"><a href="/search?q=' + keyword + '</a></li>');
            }
          });
        }

        $(tsr).parent().fadeIn();
      });
    }
  }, 500));
  $('.main-nav__user-links').mouseleave(function () {
    var $this = $(this),
        tsr = '#top-search-results__inner';
    $(tsr).parent().fadeOut('fast', function () {// $(tsr).empty();
    });
    $('.main-nav__notifications').removeClass('hover');
  });
  $('#main-header').mouseleave(function () {
    $('#top-search').removeClass('show');
    $('#ts').val('');
    $('.main-nav__search-link').fadeIn();
  });
  $(document).on('click', '.main-nav__search-link', function (e) {
    e.preventDefault();

    if (isMobile()) {
      $('.top-search-wrapper').slideToggle('fast');
    } else {
      $(this).hide();
      $('#top-search').addClass('show');
    }

    $('#ts').focus();
  });
  $("#registration-form #name").keyup(debounce(function () {
    var keyword = $(this).val(),
        usernameInput = '#username';

    if (keyword.length >= 3) {
      var generateUsername = keyword.replace(/[^a-z0-9\s]/gi, '').replace(/[_\s]/g, '').toLowerCase();
      $(usernameInput).val(generateUsername);
    }
  }, 250));
  /*
  $("#registration-form #email").keyup(debounce(function(){
  	var keyword = $(this).val(),
  	usernameInput = '#username';
  	if (keyword.length >= 3) {
  		var generateUsername = keyword.replace(/[^a-z0-9\s]/gi, '').replace(/[_\s]/g, '').toLowerCase();
  		$(usernameInput).val(generateUsername);
  	}
  },250));
  */

  $('#registration-form').submit(function () {
    var email = $('#email').val();
    $('#mce-email').val(email);
    $('#mc-embedded-subscribe-form').submit();
  });
  var siteURL = "http://" + top.location.host.toString();
  var $internalLinks = $("a[href^='" + siteURL + "'], a[href^='/'], a[href^='./'], a[href^='../']");
  $(document).on('click', 'a:not(.no-link)', function (e) {
    var $this = $(this),
        myHref = $this.attr('href'),
        mainContent = '#main-content';

    if (isMobile() && $this.hasClass('main-nav__user-link')) {
      return false;
    }

    if (myHref == window.location.pathname) {
      return false;
    }

    if (myHref != '#') {
      e.preventDefault();
      var time = 0;
      var timer = setInterval(function () {
        if (time == 250) {
          $('.main-preloader').fadeIn('fast');
        } else {
          time++;
        }
      });
      $(mainContent).fadeTo('fast', 0, function () {
        $.get(myHref, function (data) {
          // $(mainContent).empty();
          var newHtml = $(data).find(mainContent).html();
          $('.main-nav__notifications').html($(data).find('.main-nav__notifications').html());
          $(mainContent).html(newHtml); // $('body').removeClass('template--welcome');
          // $('body').attr('class',$(data).find('body').attr('class'));

          $("body").attr("class", /body([^>]*)class=(["']+)([^"']*)(["']+)/gi.exec(data.substring(data.indexOf("<body"), data.indexOf("</body>") + 7))[3]);
          window.history.pushState({
            "html": newHtml,
            "pageTitle": ''
          }, "", myHref);
          document.title = $(data).filter('title').text(); // newPage.filter('title').text();

          window.scrollTo(0, 0);
          clearInterval(timer);
          $('.main-preloader').stop().fadeOut('fast');
          fadeInElements();
          $('img').one('load', function () {
            stickySidebar();
            $(window).resize();
          }).each(function () {
            if (this.complete) {
              $(this).trigger('load');
            }
          });
          $(mainContent).fadeTo('fast', 1);

          if (NowPlaying.isPlaying) {
            pausePlayAllInstances(NowPlaying.currentPostId);
          }
        });
      });
    }
  });

  function toggleAria(el) {
    var x = $(el).attr("aria-expanded") == "true" ? "false" : "true";
    $(el).attr("aria-expanded", x);
  } // Toggle Hidden Attribute


  $.fn.toggleAttr = function (attr) {
    return this.each(function () {
      var self = $(this);

      if (self.is('[' + attr + ']')) {
        self.removeAttr(attr);
      } else {
        self.attr(attr, 1);
      }
    });
  };

  function honeypotForms() {
    var honeypotForm = $('[honey-form]');
    honeypotForm.submit(function (e) {
      var $this = $(this);

      if ($this.find('[honey-input]').val() != '') {
        // alert('no way jose!');
        return false;
      }
    });
  }

  if (isMobile()) {
    var userDropWrap = '.user-drop-wrap';
    var searchContainer = '.top-search-wrapper';
    $(document).on('click touchend', '.main-nav__user-link', function (e) {
      toggleAria($(this)); // $(userDropWrap).toggle

      $(userDropWrap).toggleClass('show');
      return false;
    });
    $(document).on('click', '.user-drop a', function (e) {
      $(userDropWrap).toggleClass('show');
    });
    $(document).on('touchend', function (e) {
      if ($(e.target).closest(userDropWrap).length === 0) {
        $(userDropWrap).removeClass('show');
      }

      if (!$(e.target).closest(searchContainer).length && $(searchContainer).is(":visible")) {
        $(searchContainer).fadeOut();
      }
    });
  }

  $('.footer-signup').submit(function (e) {
    e.preventDefault();
    var $this = $(this);
    $this.find('.btn').text('Sending...');
    $.ajax({
      type: $this.attr('method'),
      url: $this.attr('action'),
      data: $this.serialize(),
      cache: false,
      dataType: 'json',
      contentType: 'application/json; charset=utf-8',
      error: function error(err) {
        alert('Could not connect to the registration server. Please try again later.');
      },
      success: function success(data) {
        $this.find('.btn').text('submit');

        if (data.result === 'success') {
          // console.log(data.msg)
          $('#mce-EMAIL').removeClass('error');
          $('#mce-responses').text('Thank you for subscribing. We have sent you a confirmation email.').addClass('alert-success');
          $('#mce-EMAIL').val('');
        } else {
          // console.log(data.msg)
          // $('#mce-EMAIL').css('borderColor', '#721c24')
          $('#mce-EMAIL').addClass('error');
          $('#mce-responses').text(data.msg.substring(4)).addClass('alert-danger');
        }
      }
    });
  });
  /* Volume Slider */

  var dragItem = $('.volume__sliderHandle');
  var dragContainer = $('.volume__sliderInner');
  var e = document.querySelector('.volume-slider-con');
  var eInner = document.querySelector('.volume-slider');
  var audio = $('.main-player__audio').get(0);
  var drag = false;
  dragItem.on('mousedown', function (ev) {
    drag = true;
    updateBar(ev.clientY);
  });
  dragItem.on('mousemove', function (ev) {
    if (drag) {
      updateBar(ev.clientY);
    }
  });
  dragItem.on('mouseup', function (ev) {
    drag = false;
  });

  var updateBar = function updateBar(y, vol) {
    var volume = dragItem;
    var percentage; //if only volume have specificed
    //then direct update volume

    if (vol) {
      percentage = vol * 100;
    } else {
      var position = y + volume.offset().top;
      percentage = 100 * position / volume.height();
    }

    if (percentage > 100) {
      percentage = 100;
    }

    if (percentage < 0) {
      percentage = 0;
    }

    $('.volume__sliderProgress').css('height', percentage + '%');
  };
});

function fadeInElements() {
  var win = $(window);
  var allMods = $(".anim-in");
  allMods.each(function (i, el) {
    var el = $(el);

    if (el.visible(true)) {
      var dly = i / 10;
      el.delay(dly).addClass("already-visible");
    }
  });
  win.scroll(function (event) {
    allMods.each(function (i, el) {
      var el = $(el);

      if (el.visible(true)) {
        var dly = i / 10;
        el.delay(dly).addClass("come-in");
      }
    });
  });
}

window.onpopstate = function (e) {
  if (e.state) {
    document.getElementById("main-content").innerHTML = e.state.html;
    document.title = e.state.pageTitle;
    fadeInElements();
  }
};

var progressText = '.progress-text',
    progressBar = '.progress-bar',
    successText = '#success';
$(function () {
  console.log('on load');
  $('#post-form').submit(function (e) {
    console.log('#post-form.submit');
    var val = $("#filename").val();

    if (val != '') {
      e.preventDefault();
      $('#post-form').ajaxForm({
        beforeSend: function beforeSend() {
          $(successText).empty();
        },
        uploadProgress: function uploadProgress(event, position, total, percentComplete) {
          $(progressText).text(percentComplete + '%');
          $(progressBar).css('width', percentComplete + '%');
        },
        success: function success(data) {
          if (data.errors) {
            $(progressText).text('0%');
            $(progressBar).css('width', '0%');
            $(successText).html('<div class="alert alert-danger">' + data.errors + '</div>');
          }

          if (data.success) {
            $(successText).html('<div class="alert alert-success">Great success!</div>');
            window.location.href = $(this).closest('form').data('return-url');
          }
        }
      });
    }
  });
});
$(document).on('click', '#main-content .mark-as-read', function (e) {
  e.preventDefault();
  $('#main-content').fadeTo('fast', 0);
  $.get('/notifications/all-read', function () {
    $.get('/notifications', function (data) {
      var newHtml = $(data).find('#main-content').html();
      $('.main-nav__notifications').html($(data).find('.main-nav__notifications').html());
      $('.main-nav__notifications').removeClass('hoverable');
      $('#main-content').html(newHtml).fadeTo('fast', 1);
      ;
    });
  });
});
$(document).on('click', '.main-nav__notifications .mark-as-read', function (e) {
  e.preventDefault();
  $.get('/notifications/all-read', function () {
    $('.main-nav__notifications').removeClass('hoverable').find('.has-notifications').removeClass('show').text(0);
    $('.main-nav__notification-list').empty();
  });
});
$(document).on('click', '.mark-single--as-read', function (e) {
  e.preventDefault();
  var $this = $(this);
  $.get($this.attr('href'), function (data) {
    if (window.location.href.indexOf("/notifications") > -1) {
      $(MAIN_CONTENT).html($(data).find(MAIN_CONTENT).html());
    }

    $('.main-nav__notifications--wrapper').html($(data).find('.main-nav__notifications--wrapper').html());
    var n = parseInt($('.has-notifications').text());

    if ($this.parent().hasClass('main-nav__notification') && n > 0) {
      $('.main-nav__notifications').addClass('hover');
    }
  });
});
$(document).on('click', '.delete-suggestion', function (e) {
  e.preventDefault();
  var path = $(this).attr('href');
  $.get(path, function (d) {
    $.get('/suggestions', function (data) {
      $('#main-content').html($(data).find('#main-content').html());
    });
  });
  return false;
}); // Enable pusher logging - don't include this in production

 // window.Pusher = require('pusher-js');

window.Echo = new laravel_echo__WEBPACK_IMPORTED_MODULE_0__["default"]({
  broadcaster: 'pusher',
  key: '55b25b761e2e34f0d87f',
  cluster: 'us3',
  forceTLS: true
});
var channel = window.Echo.channel('notifications');
channel.listen('post-liked', function (data) {// alert(JSON.stringify(data));
  // console.log(data);
});
Pusher.logToConsole = false;
var pusher = new Pusher('55b25b761e2e34f0d87f', {
  cluster: 'us3',
  forceTLS: true
});
var channel = pusher.subscribe('notifications.' + currentUser);
channel.bind('post-liked', function (data) {
  var notificationsCount = '.main-nav__notifications .has-notifications',
      notificationsList = '.main-nav__notification-list',
      bell = '.main-nav__notifications-link .fa-bell',
      bellRingTime = 4000;
  $(bell).addClass('ring');
  $('.has-notifications').addClass('show');
  $('.main-nav__notifications').addClass('hoverable');
  setTimeout(function () {
    $(bell).removeClass('ring');
  }, bellRingTime);
  $(notificationsCount).text(parseInt($(notificationsCount).text()) + 1);
  var newNotification = $('<div class="main-nav__notification">' + data.message + '</div>').prependTo($(notificationsList));
});
var adminChannel = pusher.subscribe('admin');
adminChannel.bind('admin', function (data) {
  var adminNotificationsCount = '.main-nav__admin-link .has-notifications',
      adminNotificationList = 'main-nav__admin-link .main-nav__notifications-list';
  $(adminNotificationsCount).text(parseInt($(adminNotificationsCount).text()) + 1);
});

if ('serviceWorker' in navigator) {
  navigator.serviceWorker.register('/js/sw.js');
}

/***/ }),

/***/ "./resources/js/cookies.min.js":
/*!*************************************!*\
  !*** ./resources/js/cookies.min.js ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_RESULT__;function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

(function (d, f) {
  "use strict";

  var h = function h(d) {
    if ("object" !== _typeof(d.document)) throw Error("Cookies.js requires a `window` with a `document` object");

    var b = function b(a, e, c) {
      return 1 === arguments.length ? b.get(a) : b.set(a, e, c);
    };

    b._document = d.document;
    b._cacheKeyPrefix = "cookey.";
    b._maxExpireDate = new Date("Fri, 31 Dec 9999 23:59:59 UTC");
    b.defaults = {
      path: "/",
      secure: !1
    };

    b.get = function (a) {
      b._cachedDocumentCookie !== b._document.cookie && b._renewCache();
      a = b._cache[b._cacheKeyPrefix + a];
      return a === f ? f : decodeURIComponent(a);
    };

    b.set = function (a, e, c) {
      c = b._getExtendedOptions(c);
      c.expires = b._getExpiresDate(e === f ? -1 : c.expires);
      b._document.cookie = b._generateCookieString(a, e, c);
      return b;
    };

    b.expire = function (a, e) {
      return b.set(a, f, e);
    };

    b._getExtendedOptions = function (a) {
      return {
        path: a && a.path || b.defaults.path,
        domain: a && a.domain || b.defaults.domain,
        expires: a && a.expires || b.defaults.expires,
        secure: a && a.secure !== f ? a.secure : b.defaults.secure
      };
    };

    b._isValidDate = function (a) {
      return "[object Date]" === Object.prototype.toString.call(a) && !isNaN(a.getTime());
    };

    b._getExpiresDate = function (a, e) {
      e = e || new Date();
      "number" === typeof a ? a = Infinity === a ? b._maxExpireDate : new Date(e.getTime() + 1E3 * a) : "string" === typeof a && (a = new Date(a));
      if (a && !b._isValidDate(a)) throw Error("`expires` parameter cannot be converted to a valid Date instance");
      return a;
    };

    b._generateCookieString = function (a, b, c) {
      a = a.replace(/[^#$&+\^`|]/g, encodeURIComponent);
      a = a.replace(/\(/g, "%28").replace(/\)/g, "%29");
      b = (b + "").replace(/[^!#$&-+\--:<-\[\]-~]/g, encodeURIComponent);
      c = c || {};
      a = a + "=" + b + (c.path ? ";path=" + c.path : "");
      a += c.domain ? ";domain=" + c.domain : "";
      a += c.expires ? ";expires=" + c.expires.toUTCString() : "";
      return a += c.secure ? ";secure" : "";
    };

    b._getCacheFromString = function (a) {
      var e = {};
      a = a ? a.split("; ") : [];

      for (var c = 0; c < a.length; c++) {
        var d = b._getKeyValuePairFromCookieString(a[c]);

        e[b._cacheKeyPrefix + d.key] === f && (e[b._cacheKeyPrefix + d.key] = d.value);
      }

      return e;
    };

    b._getKeyValuePairFromCookieString = function (a) {
      var b = a.indexOf("="),
          b = 0 > b ? a.length : b,
          c = a.substr(0, b),
          d;

      try {
        d = decodeURIComponent(c);
      } catch (k) {
        console && "function" === typeof console.error && console.error('Could not decode cookie with key "' + c + '"', k);
      }

      return {
        key: d,
        value: a.substr(b + 1)
      };
    };

    b._renewCache = function () {
      b._cache = b._getCacheFromString(b._document.cookie);
      b._cachedDocumentCookie = b._document.cookie;
    };

    b._areEnabled = function () {
      var a = "1" === b.set("cookies.js", 1).get("cookies.js");
      b.expire("cookies.js");
      return a;
    };

    b.enabled = b._areEnabled();
    return b;
  },
      g = d && "object" === _typeof(d.document) ? h(d) : h;

   true ? !(__WEBPACK_AMD_DEFINE_RESULT__ = (function () {
    return g;
  }).call(exports, __webpack_require__, exports, module),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__)) : undefined;
})("undefined" === typeof window ? this : window);

/***/ }),

/***/ "./resources/js/pusher.min.js":
/*!************************************!*\
  !*** ./resources/js/pusher.min.js ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(module) {var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

/*!
 * Pusher JavaScript Library v5.0.0
 * https://pusher.com/
 *
 * Copyright 2017, Pusher
 * Released under the MIT licence.
 */
!function (t, e) {
  "object" == ( false ? undefined : _typeof(exports)) && "object" == ( false ? undefined : _typeof(module)) ? module.exports = e() :  true ? !(__WEBPACK_AMD_DEFINE_ARRAY__ = [], __WEBPACK_AMD_DEFINE_FACTORY__ = (e),
				__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
				(__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__)) : undefined;
}(window, function () {
  return function (t) {
    var e = {};

    function n(r) {
      if (e[r]) return e[r].exports;
      var i = e[r] = {
        i: r,
        l: !1,
        exports: {}
      };
      return t[r].call(i.exports, i, i.exports, n), i.l = !0, i.exports;
    }

    return n.m = t, n.c = e, n.d = function (t, e, r) {
      n.o(t, e) || Object.defineProperty(t, e, {
        enumerable: !0,
        get: r
      });
    }, n.r = function (t) {
      "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(t, Symbol.toStringTag, {
        value: "Module"
      }), Object.defineProperty(t, "__esModule", {
        value: !0
      });
    }, n.t = function (t, e) {
      if (1 & e && (t = n(t)), 8 & e) return t;
      if (4 & e && "object" == _typeof(t) && t && t.__esModule) return t;
      var r = Object.create(null);
      if (n.r(r), Object.defineProperty(r, "default", {
        enumerable: !0,
        value: t
      }), 2 & e && "string" != typeof t) for (var i in t) {
        n.d(r, i, function (e) {
          return t[e];
        }.bind(null, i));
      }
      return r;
    }, n.n = function (t) {
      var e = t && t.__esModule ? function () {
        return t["default"];
      } : function () {
        return t;
      };
      return n.d(e, "a", e), e;
    }, n.o = function (t, e) {
      return Object.prototype.hasOwnProperty.call(t, e);
    }, n.p = "", n(n.s = 20);
  }([function (t, e, n) {
    "use strict";

    e.__esModule = !0;
    var r = n(23),
        i = n(2);

    function o(t, e) {
      for (var n in t) {
        Object.prototype.hasOwnProperty.call(t, n) && e(t[n], n, t);
      }
    }

    function s(t, e) {
      for (var n = [], r = 0; r < t.length; r++) {
        n.push(e(t[r], r, t, n));
      }

      return n;
    }

    function a(t, e) {
      var n = {};
      return o(t, function (t, r) {
        n[r] = e(t);
      }), n;
    }

    function u(t, e) {
      var n = {};
      return o(t, function (r, i) {
        (e && e(r, i, t, n) || Boolean(r)) && (n[i] = r);
      }), n;
    }

    function c(t) {
      var e = [];
      return o(t, function (t, n) {
        e.push([n, t]);
      }), e;
    }

    function h(t) {
      return a(t, function (t) {
        return "object" == _typeof(t) && (t = l(t)), encodeURIComponent(r["default"](t.toString()));
      });
    }

    function f(t) {
      var e = [],
          n = [];
      return function t(r, i) {
        var o, s, a;

        switch (_typeof(r)) {
          case "object":
            if (!r) return null;

            for (o = 0; o < e.length; o += 1) {
              if (e[o] === r) return {
                $ref: n[o]
              };
            }

            if (e.push(r), n.push(i), "[object Array]" === Object.prototype.toString.apply(r)) for (a = [], o = 0; o < r.length; o += 1) {
              a[o] = t(r[o], i + "[" + o + "]");
            } else for (s in a = {}, r) {
              Object.prototype.hasOwnProperty.call(r, s) && (a[s] = t(r[s], i + "[" + JSON.stringify(s) + "]"));
            }
            return a;

          case "number":
          case "string":
          case "boolean":
            return r;
        }
      }(t, "$");
    }

    function l(t) {
      try {
        return JSON.stringify(t);
      } catch (e) {
        return JSON.stringify(f(t));
      }
    }

    e.extend = function t(e) {
      for (var n = [], r = 1; r < arguments.length; r++) {
        n[r - 1] = arguments[r];
      }

      for (var i = 0; i < n.length; i++) {
        var o = n[i];

        for (var s in o) {
          o[s] && o[s].constructor && o[s].constructor === Object ? e[s] = t(e[s] || {}, o[s]) : e[s] = o[s];
        }
      }

      return e;
    }, e.stringify = function () {
      for (var t = ["Pusher"], e = 0; e < arguments.length; e++) {
        "string" == typeof arguments[e] ? t.push(arguments[e]) : t.push(l(arguments[e]));
      }

      return t.join(" : ");
    }, e.arrayIndexOf = function (t, e) {
      var n = Array.prototype.indexOf;
      if (null === t) return -1;
      if (n && t.indexOf === n) return t.indexOf(e);

      for (var r = 0, i = t.length; r < i; r++) {
        if (t[r] === e) return r;
      }

      return -1;
    }, e.objectApply = o, e.keys = function (t) {
      var e = [];
      return o(t, function (t, n) {
        e.push(n);
      }), e;
    }, e.values = function (t) {
      var e = [];
      return o(t, function (t) {
        e.push(t);
      }), e;
    }, e.apply = function (t, e, n) {
      for (var r = 0; r < t.length; r++) {
        e.call(n || window, t[r], r, t);
      }
    }, e.map = s, e.mapObject = a, e.filter = function (t, e) {
      e = e || function (t) {
        return !!t;
      };

      for (var n = [], r = 0; r < t.length; r++) {
        e(t[r], r, t, n) && n.push(t[r]);
      }

      return n;
    }, e.filterObject = u, e.flatten = c, e.any = function (t, e) {
      for (var n = 0; n < t.length; n++) {
        if (e(t[n], n, t)) return !0;
      }

      return !1;
    }, e.all = function (t, e) {
      for (var n = 0; n < t.length; n++) {
        if (!e(t[n], n, t)) return !1;
      }

      return !0;
    }, e.encodeParamsObject = h, e.buildQueryString = function (t) {
      return s(c(h(u(t, function (t) {
        return void 0 !== t;
      }))), i["default"].method("join", "=")).join("&");
    }, e.decycleObject = f, e.safeJSONStringify = l;
  }, function (t, e, n) {
    "use strict";

    e.__esModule = !0;
    var r = n(11),
        i = n(22),
        o = n(25),
        s = n(26),
        a = n(27),
        u = n(8),
        c = n(28),
        h = n(29),
        f = n(33),
        l = n(34),
        p = n(58),
        d = n(59),
        y = {
      nextAuthCallbackID: 1,
      auth_callbacks: {},
      ScriptReceivers: u.ScriptReceivers,
      DependenciesReceivers: r.DependenciesReceivers,
      getDefaultStrategy: l["default"],
      Transports: h["default"],
      transportConnectionInitializer: p["default"],
      HTTPFactory: d["default"],
      TimelineTransport: c["default"],
      getXHRAPI: function getXHRAPI() {
        return window.XMLHttpRequest;
      },
      getWebSocketAPI: function getWebSocketAPI() {
        return window.WebSocket || window.MozWebSocket;
      },
      setup: function setup(t) {
        var e = this;
        window.Pusher = t;

        var n = function n() {
          e.onDocumentBody(t.ready);
        };

        window.JSON ? n() : r.Dependencies.load("json2", {}, n);
      },
      getDocument: function getDocument() {
        return document;
      },
      getProtocol: function getProtocol() {
        return this.getDocument().location.protocol;
      },
      getAuthorizers: function getAuthorizers() {
        return {
          ajax: i["default"],
          jsonp: o["default"]
        };
      },
      onDocumentBody: function onDocumentBody(t) {
        var e = this;
        document.body ? t() : setTimeout(function () {
          e.onDocumentBody(t);
        }, 0);
      },
      createJSONPRequest: function createJSONPRequest(t, e) {
        return new a["default"](t, e);
      },
      createScriptRequest: function createScriptRequest(t) {
        return new s["default"](t);
      },
      getLocalStorage: function getLocalStorage() {
        try {
          return window.localStorage;
        } catch (t) {
          return;
        }
      },
      createXHR: function createXHR() {
        return this.getXHRAPI() ? this.createXMLHttpRequest() : this.createMicrosoftXHR();
      },
      createXMLHttpRequest: function createXMLHttpRequest() {
        return new (this.getXHRAPI())();
      },
      createMicrosoftXHR: function createMicrosoftXHR() {
        return new ActiveXObject("Microsoft.XMLHTTP");
      },
      getNetwork: function getNetwork() {
        return f.Network;
      },
      createWebSocket: function createWebSocket(t) {
        return new (this.getWebSocketAPI())(t);
      },
      createSocketRequest: function createSocketRequest(t, e) {
        if (this.isXHRSupported()) return this.HTTPFactory.createXHR(t, e);
        if (this.isXDRSupported(0 === e.indexOf("https:"))) return this.HTTPFactory.createXDR(t, e);
        throw "Cross-origin HTTP requests are not supported";
      },
      isXHRSupported: function isXHRSupported() {
        var t = this.getXHRAPI();
        return Boolean(t) && void 0 !== new t().withCredentials;
      },
      isXDRSupported: function isXDRSupported(t) {
        var e = t ? "https:" : "http:",
            n = this.getProtocol();
        return Boolean(window.XDomainRequest) && n === e;
      },
      addUnloadListener: function addUnloadListener(t) {
        void 0 !== window.addEventListener ? window.addEventListener("unload", t, !1) : void 0 !== window.attachEvent && window.attachEvent("onunload", t);
      },
      removeUnloadListener: function removeUnloadListener(t) {
        void 0 !== window.addEventListener ? window.removeEventListener("unload", t, !1) : void 0 !== window.detachEvent && window.detachEvent("onunload", t);
      }
    };
    e["default"] = y;
  }, function (t, e, n) {
    "use strict";

    e.__esModule = !0;
    var r = n(6),
        i = {
      now: function now() {
        return Date.now ? Date.now() : new Date().valueOf();
      },
      defer: function defer(t) {
        return new r.OneOffTimer(0, t);
      },
      method: function method(t) {
        for (var e = [], n = 1; n < arguments.length; n++) {
          e[n - 1] = arguments[n];
        }

        var r = Array.prototype.slice.call(arguments, 1);
        return function (e) {
          return e[t].apply(e, r.concat(arguments));
        };
      }
    };
    e["default"] = i;
  }, function (t, e, n) {
    "use strict";

    e.__esModule = !0;
    var r = n(0),
        i = n(13),
        o = {
      debug: function debug() {
        for (var t = [], e = 0; e < arguments.length; e++) {
          t[e] = arguments[e];
        }

        i["default"].log && i["default"].log(r.stringify.apply(this, arguments));
      },
      warn: function warn() {
        for (var t = [], e = 0; e < arguments.length; e++) {
          t[e] = arguments[e];
        }

        var n = r.stringify.apply(this, arguments);
        i["default"].log ? i["default"].log(n) : window.console && (window.console.warn ? window.console.warn(n) : window.console.log && window.console.log(n));
      }
    };
    e["default"] = o;
  }, function (t, e, n) {
    "use strict";

    e.__esModule = !0;

    var r = n(0),
        i = n(32),
        o = function () {
      function t(t) {
        this.callbacks = new i["default"](), this.global_callbacks = [], this.failThrough = t;
      }

      return t.prototype.bind = function (t, e, n) {
        return this.callbacks.add(t, e, n), this;
      }, t.prototype.bind_global = function (t) {
        return this.global_callbacks.push(t), this;
      }, t.prototype.unbind = function (t, e, n) {
        return this.callbacks.remove(t, e, n), this;
      }, t.prototype.unbind_global = function (t) {
        return t ? (this.global_callbacks = r.filter(this.global_callbacks || [], function (e) {
          return e !== t;
        }), this) : (this.global_callbacks = [], this);
      }, t.prototype.unbind_all = function () {
        return this.unbind(), this.unbind_global(), this;
      }, t.prototype.emit = function (t, e, n) {
        for (var r = 0; r < this.global_callbacks.length; r++) {
          this.global_callbacks[r](t, e);
        }

        var i = this.callbacks.get(t),
            o = [];
        if (n ? o.push(e, n) : e && o.push(e), i && i.length > 0) for (r = 0; r < i.length; r++) {
          i[r].fn.apply(i[r].context || window, o);
        } else this.failThrough && this.failThrough(t, e);
        return this;
      }, t;
    }();

    e["default"] = o;
  }, function (t, e, n) {
    "use strict";

    var _r,
        i = this && this.__extends || (_r = function r(t, e) {
      return (_r = Object.setPrototypeOf || {
        __proto__: []
      } instanceof Array && function (t, e) {
        t.__proto__ = e;
      } || function (t, e) {
        for (var n in e) {
          e.hasOwnProperty(n) && (t[n] = e[n]);
        }
      })(t, e);
    }, function (t, e) {
      function n() {
        this.constructor = t;
      }

      _r(t, e), t.prototype = null === e ? Object.create(e) : (n.prototype = e.prototype, new n());
    });

    e.__esModule = !0;

    var o = function (t) {
      function e(e) {
        var n = this.constructor,
            r = t.call(this, e) || this;
        return Object.setPrototypeOf(r, n.prototype), r;
      }

      return i(e, t), e;
    }(Error);

    e.BadEventName = o;

    var s = function (t) {
      function e(e) {
        var n = this.constructor,
            r = t.call(this, e) || this;
        return Object.setPrototypeOf(r, n.prototype), r;
      }

      return i(e, t), e;
    }(Error);

    e.RequestTimedOut = s;

    var a = function (t) {
      function e(e) {
        var n = this.constructor,
            r = t.call(this, e) || this;
        return Object.setPrototypeOf(r, n.prototype), r;
      }

      return i(e, t), e;
    }(Error);

    e.TransportPriorityTooLow = a;

    var u = function (t) {
      function e(e) {
        var n = this.constructor,
            r = t.call(this, e) || this;
        return Object.setPrototypeOf(r, n.prototype), r;
      }

      return i(e, t), e;
    }(Error);

    e.TransportClosed = u;

    var c = function (t) {
      function e(e) {
        var n = this.constructor,
            r = t.call(this, e) || this;
        return Object.setPrototypeOf(r, n.prototype), r;
      }

      return i(e, t), e;
    }(Error);

    e.UnsupportedFeature = c;

    var h = function (t) {
      function e(e) {
        var n = this.constructor,
            r = t.call(this, e) || this;
        return Object.setPrototypeOf(r, n.prototype), r;
      }

      return i(e, t), e;
    }(Error);

    e.UnsupportedTransport = h;

    var f = function (t) {
      function e(e) {
        var n = this.constructor,
            r = t.call(this, e) || this;
        return Object.setPrototypeOf(r, n.prototype), r;
      }

      return i(e, t), e;
    }(Error);

    e.UnsupportedStrategy = f;
  }, function (t, e, n) {
    "use strict";

    var _r2,
        i = this && this.__extends || (_r2 = function r(t, e) {
      return (_r2 = Object.setPrototypeOf || {
        __proto__: []
      } instanceof Array && function (t, e) {
        t.__proto__ = e;
      } || function (t, e) {
        for (var n in e) {
          e.hasOwnProperty(n) && (t[n] = e[n]);
        }
      })(t, e);
    }, function (t, e) {
      function n() {
        this.constructor = t;
      }

      _r2(t, e), t.prototype = null === e ? Object.create(e) : (n.prototype = e.prototype, new n());
    });

    e.__esModule = !0;
    var o = n(24);

    function s(t) {
      window.clearTimeout(t);
    }

    function a(t) {
      window.clearInterval(t);
    }

    var u = function (t) {
      function e(e, n) {
        return t.call(this, setTimeout, s, e, function (t) {
          return n(), null;
        }) || this;
      }

      return i(e, t), e;
    }(o["default"]);

    e.OneOffTimer = u;

    var c = function (t) {
      function e(e, n) {
        return t.call(this, setInterval, a, e, function (t) {
          return n(), t;
        }) || this;
      }

      return i(e, t), e;
    }(o["default"]);

    e.PeriodicTimer = c;
  }, function (t, e, n) {
    "use strict";

    e.__esModule = !0;
    var r = n(36),
        i = n(37),
        o = n(39),
        s = n(40),
        a = n(41),
        u = n(12),
        c = n(43),
        h = n(17),
        f = n(51),
        l = n(52),
        p = {
      createChannels: function createChannels() {
        return new l["default"]();
      },
      createConnectionManager: function createConnectionManager(t, e) {
        return new f["default"](t, e);
      },
      createChannel: function createChannel(t, e) {
        return new h["default"](t, e);
      },
      createPrivateChannel: function createPrivateChannel(t, e) {
        return new u["default"](t, e);
      },
      createPresenceChannel: function createPresenceChannel(t, e) {
        return new a["default"](t, e);
      },
      createEncryptedChannel: function createEncryptedChannel(t, e) {
        return new c["default"](t, e);
      },
      createTimelineSender: function createTimelineSender(t, e) {
        return new s["default"](t, e);
      },
      createAuthorizer: function createAuthorizer(t, e) {
        return e.authorizer ? e.authorizer(t, e) : new o["default"](t, e);
      },
      createHandshake: function createHandshake(t, e) {
        return new i["default"](t, e);
      },
      createAssistantToTheTransportManager: function createAssistantToTheTransportManager(t, e, n) {
        return new r["default"](t, e, n);
      }
    };
    e["default"] = p;
  }, function (t, e, n) {
    "use strict";

    e.__esModule = !0;

    var r = function () {
      function t(t, e) {
        this.lastId = 0, this.prefix = t, this.name = e;
      }

      return t.prototype.create = function (t) {
        this.lastId++;

        var e = this.lastId,
            n = this.prefix + e,
            r = this.name + "[" + e + "]",
            i = !1,
            o = function o() {
          i || (t.apply(null, arguments), i = !0);
        };

        return this[e] = o, {
          number: e,
          id: n,
          name: r,
          callback: o
        };
      }, t.prototype.remove = function (t) {
        delete this[t.number];
      }, t;
    }();

    e.ScriptReceiverFactory = r, e.ScriptReceivers = new r("_pusher_script_", "Pusher.ScriptReceivers");
  }, function (t, e, n) {
    "use strict";

    e.__esModule = !0;
    e["default"] = {
      VERSION: "5.0.0",
      PROTOCOL: 7,
      host: "ws.pusherapp.com",
      ws_port: 80,
      wss_port: 443,
      ws_path: "",
      sockjs_host: "sockjs.pusher.com",
      sockjs_http_port: 80,
      sockjs_https_port: 443,
      sockjs_path: "/pusher",
      stats_host: "stats.pusher.com",
      channel_auth_endpoint: "/pusher/auth",
      channel_auth_transport: "ajax",
      activity_timeout: 12e4,
      pong_timeout: 3e4,
      unavailable_timeout: 1e4,
      cdn_http: "http://js.pusher.com",
      cdn_https: "https://js.pusher.com",
      dependency_suffix: ""
    };
  }, function (t, e, n) {
    "use strict";

    e.__esModule = !0;
    var r = {
      baseUrl: "https://pusher.com",
      urls: {
        authenticationEndpoint: {
          path: "/docs/authenticating_users"
        },
        javascriptQuickStart: {
          path: "/docs/javascript_quick_start"
        },
        triggeringClientEvents: {
          path: "/docs/client_api_guide/client_events#trigger-events"
        }
      }
    };
    e["default"] = {
      buildLogSuffix: function buildLogSuffix(t) {
        var e,
            n = r.urls[t];
        return n ? (n.fullUrl ? e = n.fullUrl : n.path && (e = r.baseUrl + n.path), e ? "See: " + e : "") : "";
      }
    };
  }, function (t, e, n) {
    "use strict";

    e.__esModule = !0;
    var r = n(8),
        i = n(9),
        o = n(21);
    e.DependenciesReceivers = new r.ScriptReceiverFactory("_pusher_dependencies", "Pusher.DependenciesReceivers"), e.Dependencies = new o["default"]({
      cdn_http: i["default"].cdn_http,
      cdn_https: i["default"].cdn_https,
      version: i["default"].VERSION,
      suffix: i["default"].dependency_suffix,
      receivers: e.DependenciesReceivers
    });
  }, function (t, e, n) {
    "use strict";

    var _r3,
        i = this && this.__extends || (_r3 = function r(t, e) {
      return (_r3 = Object.setPrototypeOf || {
        __proto__: []
      } instanceof Array && function (t, e) {
        t.__proto__ = e;
      } || function (t, e) {
        for (var n in e) {
          e.hasOwnProperty(n) && (t[n] = e[n]);
        }
      })(t, e);
    }, function (t, e) {
      function n() {
        this.constructor = t;
      }

      _r3(t, e), t.prototype = null === e ? Object.create(e) : (n.prototype = e.prototype, new n());
    });

    e.__esModule = !0;

    var o = n(7),
        s = function (t) {
      function e() {
        return null !== t && t.apply(this, arguments) || this;
      }

      return i(e, t), e.prototype.authorize = function (t, e) {
        return o["default"].createAuthorizer(this, this.pusher.config).authorize(t, e);
      }, e;
    }(n(17)["default"]);

    e["default"] = s;
  }, function (t, e, n) {
    "use strict";

    e.__esModule = !0;

    var r = n(1),
        i = n(0),
        o = n(4),
        s = n(68),
        a = n(19),
        u = n(69),
        c = n(6),
        h = n(9),
        f = n(71),
        l = n(3),
        p = n(7),
        d = n(10),
        y = function () {
      function t(e, n) {
        var c = this;

        if (function (t) {
          if (null == t) throw "You must pass your app key when you instantiate Pusher.";
        }(e), !(n = n || {}).cluster && !n.wsHost && !n.httpHost) {
          var y = d["default"].buildLogSuffix("javascriptQuickStart");
          l["default"].warn("You should always specify a cluster when connecting. " + y);
        }

        this.key = e, this.config = i.extend(f.getGlobalConfig(), n.cluster ? f.getClusterConfig(n.cluster) : {}, n), this.channels = p["default"].createChannels(), this.global_emitter = new o["default"](), this.sessionID = Math.floor(1e9 * Math.random()), this.timeline = new s["default"](this.key, this.sessionID, {
          cluster: this.config.cluster,
          features: t.getClientFeatures(),
          params: this.config.timelineParams || {},
          limit: 50,
          level: a["default"].INFO,
          version: h["default"].VERSION
        }), this.config.disableStats || (this.timelineSender = p["default"].createTimelineSender(this.timeline, {
          host: this.config.statsHost,
          path: "/timeline/v2/" + r["default"].TimelineTransport.name
        }));
        this.connection = p["default"].createConnectionManager(this.key, i.extend({
          getStrategy: function getStrategy(t) {
            var e = i.extend({}, c.config, t);
            return r["default"].getDefaultStrategy(e, u.defineTransport);
          },
          timeline: this.timeline,
          activityTimeout: this.config.activity_timeout,
          pongTimeout: this.config.pong_timeout,
          unavailableTimeout: this.config.unavailable_timeout
        }, this.config, {
          useTLS: this.shouldUseTLS()
        })), this.connection.bind("connected", function () {
          c.subscribeAll(), c.timelineSender && c.timelineSender.send(c.connection.isUsingTLS());
        }), this.connection.bind("message", function (t) {
          var e = 0 === t.event.indexOf("pusher_internal:");

          if (t.channel) {
            var n = c.channel(t.channel);
            n && n.handleEvent(t);
          }

          e || c.global_emitter.emit(t.event, t.data);
        }), this.connection.bind("connecting", function () {
          c.channels.disconnect();
        }), this.connection.bind("disconnected", function () {
          c.channels.disconnect();
        }), this.connection.bind("error", function (t) {
          l["default"].warn("Error", t);
        }), t.instances.push(this), this.timeline.info({
          instances: t.instances.length
        }), t.isReady && this.connect();
      }

      return t.ready = function () {
        t.isReady = !0;

        for (var e = 0, n = t.instances.length; e < n; e++) {
          t.instances[e].connect();
        }
      }, t.log = function (e) {
        t.logToConsole && window.console && window.console.log && window.console.log(e);
      }, t.getClientFeatures = function () {
        return i.keys(i.filterObject({
          ws: r["default"].Transports.ws
        }, function (t) {
          return t.isSupported({});
        }));
      }, t.prototype.channel = function (t) {
        return this.channels.find(t);
      }, t.prototype.allChannels = function () {
        return this.channels.all();
      }, t.prototype.connect = function () {
        if (this.connection.connect(), this.timelineSender && !this.timelineSenderTimer) {
          var t = this.connection.isUsingTLS(),
              e = this.timelineSender;
          this.timelineSenderTimer = new c.PeriodicTimer(6e4, function () {
            e.send(t);
          });
        }
      }, t.prototype.disconnect = function () {
        this.connection.disconnect(), this.timelineSenderTimer && (this.timelineSenderTimer.ensureAborted(), this.timelineSenderTimer = null);
      }, t.prototype.bind = function (t, e, n) {
        return this.global_emitter.bind(t, e, n), this;
      }, t.prototype.unbind = function (t, e, n) {
        return this.global_emitter.unbind(t, e, n), this;
      }, t.prototype.bind_global = function (t) {
        return this.global_emitter.bind_global(t), this;
      }, t.prototype.unbind_global = function (t) {
        return this.global_emitter.unbind_global(t), this;
      }, t.prototype.unbind_all = function (t) {
        return this.global_emitter.unbind_all(), this;
      }, t.prototype.subscribeAll = function () {
        var t;

        for (t in this.channels.channels) {
          this.channels.channels.hasOwnProperty(t) && this.subscribe(t);
        }
      }, t.prototype.subscribe = function (t) {
        var e = this.channels.add(t, this);
        return e.subscriptionPending && e.subscriptionCancelled ? e.reinstateSubscription() : e.subscriptionPending || "connected" !== this.connection.state || e.subscribe(), e;
      }, t.prototype.unsubscribe = function (t) {
        var e = this.channels.find(t);
        e && e.subscriptionPending ? e.cancelSubscription() : (e = this.channels.remove(t)) && "connected" === this.connection.state && e.unsubscribe();
      }, t.prototype.send_event = function (t, e, n) {
        return this.connection.send_event(t, e, n);
      }, t.prototype.shouldUseTLS = function () {
        return "https:" === r["default"].getProtocol() || !0 === this.config.forceTLS || Boolean(this.config.encrypted);
      }, t.instances = [], t.isReady = !1, t.logToConsole = !1, t.Runtime = r["default"], t.ScriptReceivers = r["default"].ScriptReceivers, t.DependenciesReceivers = r["default"].DependenciesReceivers, t.auth_callbacks = r["default"].auth_callbacks, t;
    }();

    e["default"] = y, r["default"].setup(y);
  }, function (t, e, n) {
    "use strict";

    e.__esModule = !0;
    var r = n(9);

    function i(t, e, n) {
      return t + (e.useTLS ? "s" : "") + "://" + (e.useTLS ? e.hostTLS : e.hostNonTLS) + n;
    }

    function o(t, e) {
      return "/app/" + t + ("?protocol=" + r["default"].PROTOCOL + "&client=js&version=" + r["default"].VERSION + (e ? "&" + e : ""));
    }

    e.ws = {
      getInitial: function getInitial(t, e) {
        return i("ws", e, (e.httpPath || "") + o(t, "flash=false"));
      }
    }, e.http = {
      getInitial: function getInitial(t, e) {
        return i("http", e, (e.httpPath || "/pusher") + o(t));
      }
    }, e.sockjs = {
      getInitial: function getInitial(t, e) {
        return i("http", e, e.httpPath || "/pusher");
      },
      getPath: function getPath(t, e) {
        return o(t);
      }
    };
  }, function (t, e, n) {
    "use strict";

    e.__esModule = !0;

    var r = n(31),
        i = function () {
      function t(t) {
        this.hooks = t;
      }

      return t.prototype.isSupported = function (t) {
        return this.hooks.isSupported(t);
      }, t.prototype.createConnection = function (t, e, n, i) {
        return new r["default"](this.hooks, t, e, n, i);
      }, t;
    }();

    e["default"] = i;
  }, function (t, e, n) {
    "use strict";

    e.__esModule = !0, e.decodeMessage = function (t) {
      try {
        var e = JSON.parse(t.data),
            n = e.data;
        if ("string" == typeof n) try {
          n = JSON.parse(e.data);
        } catch (t) {}
        var r = {
          event: e.event,
          channel: e.channel,
          data: n
        };
        return e.user_id && (r.user_id = e.user_id), r;
      } catch (e) {
        throw {
          type: "MessageParseError",
          error: e,
          data: t.data
        };
      }
    }, e.encodeMessage = function (t) {
      return JSON.stringify(t);
    }, e.processHandshake = function (t) {
      var n = e.decodeMessage(t);

      if ("pusher:connection_established" === n.event) {
        if (!n.data.activity_timeout) throw "No activity timeout specified in handshake";
        return {
          action: "connected",
          id: n.data.socket_id,
          activityTimeout: 1e3 * n.data.activity_timeout
        };
      }

      if ("pusher:error" === n.event) return {
        action: this.getCloseAction(n.data),
        error: this.getCloseError(n.data)
      };
      throw "Invalid handshake";
    }, e.getCloseAction = function (t) {
      return t.code < 4e3 ? t.code >= 1002 && t.code <= 1004 ? "backoff" : null : 4e3 === t.code ? "tls_only" : t.code < 4100 ? "refused" : t.code < 4200 ? "backoff" : t.code < 4300 ? "retry" : "refused";
    }, e.getCloseError = function (t) {
      return 1e3 !== t.code && 1001 !== t.code ? {
        type: "PusherError",
        data: {
          code: t.code,
          message: t.reason || t.message
        }
      } : null;
    };
  }, function (t, e, n) {
    "use strict";

    var _r4,
        i = this && this.__extends || (_r4 = function r(t, e) {
      return (_r4 = Object.setPrototypeOf || {
        __proto__: []
      } instanceof Array && function (t, e) {
        t.__proto__ = e;
      } || function (t, e) {
        for (var n in e) {
          e.hasOwnProperty(n) && (t[n] = e[n]);
        }
      })(t, e);
    }, function (t, e) {
      function n() {
        this.constructor = t;
      }

      _r4(t, e), t.prototype = null === e ? Object.create(e) : (n.prototype = e.prototype, new n());
    });

    e.__esModule = !0;

    var o = n(4),
        s = n(5),
        a = n(3),
        u = n(10),
        c = function (t) {
      function e(e, n) {
        var r = t.call(this, function (t, n) {
          a["default"].debug("No callbacks on " + e + " for " + t);
        }) || this;
        return r.name = e, r.pusher = n, r.subscribed = !1, r.subscriptionPending = !1, r.subscriptionCancelled = !1, r;
      }

      return i(e, t), e.prototype.authorize = function (t, e) {
        return e(!1, {});
      }, e.prototype.trigger = function (t, e) {
        if (0 !== t.indexOf("client-")) throw new s.BadEventName("Event '" + t + "' does not start with 'client-'");

        if (!this.subscribed) {
          var n = u["default"].buildLogSuffix("triggeringClientEvents");
          a["default"].warn("Client event triggered before channel 'subscription_succeeded' event . " + n);
        }

        return this.pusher.send_event(t, e, this.name);
      }, e.prototype.disconnect = function () {
        this.subscribed = !1, this.subscriptionPending = !1;
      }, e.prototype.handleEvent = function (t) {
        var e = t.event,
            n = t.data;
        if ("pusher_internal:subscription_succeeded" === e) this.handleSubscriptionSucceededEvent(t);else if (0 !== e.indexOf("pusher_internal:")) {
          this.emit(e, n, {});
        }
      }, e.prototype.handleSubscriptionSucceededEvent = function (t) {
        this.subscriptionPending = !1, this.subscribed = !0, this.subscriptionCancelled ? this.pusher.unsubscribe(this.name) : this.emit("pusher:subscription_succeeded", t.data);
      }, e.prototype.subscribe = function () {
        var t = this;
        this.subscribed || (this.subscriptionPending = !0, this.subscriptionCancelled = !1, this.authorize(this.pusher.connection.socket_id, function (e, n) {
          e ? t.emit("pusher:subscription_error", n) : t.pusher.send_event("pusher:subscribe", {
            auth: n.auth,
            channel_data: n.channel_data,
            channel: t.name
          });
        }));
      }, e.prototype.unsubscribe = function () {
        this.subscribed = !1, this.pusher.send_event("pusher:unsubscribe", {
          channel: this.name
        });
      }, e.prototype.cancelSubscription = function () {
        this.subscriptionCancelled = !0;
      }, e.prototype.reinstateSubscription = function () {
        this.subscriptionCancelled = !1;
      }, e;
    }(o["default"]);

    e["default"] = c;
  }, function (t, e, n) {
    "use strict";

    e.__esModule = !0;

    var r = n(0),
        i = n(2),
        o = n(6),
        s = function () {
      function t(t, e) {
        this.strategies = t, this.loop = Boolean(e.loop), this.failFast = Boolean(e.failFast), this.timeout = e.timeout, this.timeoutLimit = e.timeoutLimit;
      }

      return t.prototype.isSupported = function () {
        return r.any(this.strategies, i["default"].method("isSupported"));
      }, t.prototype.connect = function (t, e) {
        var n = this,
            r = this.strategies,
            i = 0,
            o = this.timeout,
            s = null,
            a = function a(u, c) {
          c ? e(null, c) : (i += 1, n.loop && (i %= r.length), i < r.length ? (o && (o *= 2, n.timeoutLimit && (o = Math.min(o, n.timeoutLimit))), s = n.tryStrategy(r[i], t, {
            timeout: o,
            failFast: n.failFast
          }, a)) : e(!0));
        };

        return s = this.tryStrategy(r[i], t, {
          timeout: o,
          failFast: this.failFast
        }, a), {
          abort: function abort() {
            s.abort();
          },
          forceMinPriority: function forceMinPriority(e) {
            t = e, s && s.forceMinPriority(e);
          }
        };
      }, t.prototype.tryStrategy = function (t, e, n, r) {
        var i = null,
            s = null;
        return n.timeout > 0 && (i = new o.OneOffTimer(n.timeout, function () {
          s.abort(), r(!0);
        })), s = t.connect(e, function (t, e) {
          t && i && i.isRunning() && !n.failFast || (i && i.ensureAborted(), r(t, e));
        }), {
          abort: function abort() {
            i && i.ensureAborted(), s.abort();
          },
          forceMinPriority: function forceMinPriority(t) {
            s.forceMinPriority(t);
          }
        };
      }, t;
    }();

    e["default"] = s;
  }, function (t, e, n) {
    "use strict";

    var r;
    e.__esModule = !0, function (t) {
      t[t.ERROR = 3] = "ERROR", t[t.INFO = 6] = "INFO", t[t.DEBUG = 7] = "DEBUG";
    }(r || (r = {})), e["default"] = r;
  }, function (t, e, n) {
    "use strict";

    e.__esModule = !0;
    var r = n(13);
    t.exports = r["default"];
  }, function (t, e, n) {
    "use strict";

    e.__esModule = !0;

    var r = n(8),
        i = n(1),
        o = function () {
      function t(t) {
        this.options = t, this.receivers = t.receivers || r.ScriptReceivers, this.loading = {};
      }

      return t.prototype.load = function (t, e, n) {
        var r = this;
        if (r.loading[t] && r.loading[t].length > 0) r.loading[t].push(n);else {
          r.loading[t] = [n];
          var o = i["default"].createScriptRequest(r.getPath(t, e)),
              s = r.receivers.create(function (e) {
            if (r.receivers.remove(s), r.loading[t]) {
              var n = r.loading[t];
              delete r.loading[t];

              for (var i = function i(t) {
                t || o.cleanup();
              }, a = 0; a < n.length; a++) {
                n[a](e, i);
              }
            }
          });
          o.send(s);
        }
      }, t.prototype.getRoot = function (t) {
        var e = i["default"].getDocument().location.protocol;
        return (t && t.useTLS || "https:" === e ? this.options.cdn_https : this.options.cdn_http).replace(/\/*$/, "") + "/" + this.options.version;
      }, t.prototype.getPath = function (t, e) {
        return this.getRoot(e) + "/" + t + this.options.suffix + ".js";
      }, t;
    }();

    e["default"] = o;
  }, function (t, e, n) {
    "use strict";

    e.__esModule = !0;
    var r = n(3),
        i = n(1),
        o = n(10);

    e["default"] = function (t, e, n) {
      var s;

      for (var a in (s = i["default"].createXHR()).open("POST", this.options.authEndpoint, !0), s.setRequestHeader("Content-Type", "application/x-www-form-urlencoded"), this.authOptions.headers) {
        s.setRequestHeader(a, this.authOptions.headers[a]);
      }

      return s.onreadystatechange = function () {
        if (4 === s.readyState) if (200 === s.status) {
          var t,
              e = !1;

          try {
            t = JSON.parse(s.responseText), e = !0;
          } catch (t) {
            n(!0, "JSON returned from webapp was invalid, yet status code was 200. Data was: " + s.responseText);
          }

          e && n(!1, t);
        } else {
          var i = o["default"].buildLogSuffix("authenticationEndpoint");
          r["default"].warn("Couldn't retrieve authentication info. " + s.status + "Clients must be authenticated to join private or presence channels. " + i), n(!0, s.status);
        }
      }, s.send(this.composeQuery(e)), s;
    };
  }, function (t, e, n) {
    "use strict";

    e.__esModule = !0, e["default"] = function (t) {
      return f(c(t));
    };

    for (var r = String.fromCharCode, i = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/", o = {}, s = 0, a = i.length; s < a; s++) {
      o[i.charAt(s)] = s;
    }

    var u = function u(t) {
      var e = t.charCodeAt(0);
      return e < 128 ? t : e < 2048 ? r(192 | e >>> 6) + r(128 | 63 & e) : r(224 | e >>> 12 & 15) + r(128 | e >>> 6 & 63) + r(128 | 63 & e);
    },
        c = function c(t) {
      return t.replace(/[^\x00-\x7F]/g, u);
    },
        h = function h(t) {
      var e = [0, 2, 1][t.length % 3],
          n = t.charCodeAt(0) << 16 | (t.length > 1 ? t.charCodeAt(1) : 0) << 8 | (t.length > 2 ? t.charCodeAt(2) : 0);
      return [i.charAt(n >>> 18), i.charAt(n >>> 12 & 63), e >= 2 ? "=" : i.charAt(n >>> 6 & 63), e >= 1 ? "=" : i.charAt(63 & n)].join("");
    },
        f = window.btoa || function (t) {
      return t.replace(/[\s\S]{1,3}/g, h);
    };
  }, function (t, e, n) {
    "use strict";

    e.__esModule = !0;

    var r = function () {
      function t(t, e, n, r) {
        var i = this;
        this.clear = e, this.timer = t(function () {
          i.timer && (i.timer = r(i.timer));
        }, n);
      }

      return t.prototype.isRunning = function () {
        return null !== this.timer;
      }, t.prototype.ensureAborted = function () {
        this.timer && (this.clear(this.timer), this.timer = null);
      }, t;
    }();

    e["default"] = r;
  }, function (t, e, n) {
    "use strict";

    e.__esModule = !0;
    var r = n(3);

    e["default"] = function (t, e, n) {
      void 0 !== this.authOptions.headers && r["default"].warn("Warn", "To send headers with the auth request, you must use AJAX, rather than JSONP.");
      var i = t.nextAuthCallbackID.toString();
      t.nextAuthCallbackID++;
      var o = t.getDocument(),
          s = o.createElement("script");

      t.auth_callbacks[i] = function (t) {
        n(!1, t);
      };

      var a = "Pusher.auth_callbacks['" + i + "']";
      s.src = this.options.authEndpoint + "?callback=" + encodeURIComponent(a) + "&" + this.composeQuery(e);
      var u = o.getElementsByTagName("head")[0] || o.documentElement;
      u.insertBefore(s, u.firstChild);
    };
  }, function (t, e, n) {
    "use strict";

    e.__esModule = !0;

    var r = function () {
      function t(t) {
        this.src = t;
      }

      return t.prototype.send = function (t) {
        var e = this,
            n = "Error loading " + e.src;
        e.script = document.createElement("script"), e.script.id = t.id, e.script.src = e.src, e.script.type = "text/javascript", e.script.charset = "UTF-8", e.script.addEventListener ? (e.script.onerror = function () {
          t.callback(n);
        }, e.script.onload = function () {
          t.callback(null);
        }) : e.script.onreadystatechange = function () {
          "loaded" !== e.script.readyState && "complete" !== e.script.readyState || t.callback(null);
        }, void 0 === e.script.async && document.attachEvent && /opera/i.test(navigator.userAgent) ? (e.errorScript = document.createElement("script"), e.errorScript.id = t.id + "_error", e.errorScript.text = t.name + "('" + n + "');", e.script.async = e.errorScript.async = !1) : e.script.async = !0;
        var r = document.getElementsByTagName("head")[0];
        r.insertBefore(e.script, r.firstChild), e.errorScript && r.insertBefore(e.errorScript, e.script.nextSibling);
      }, t.prototype.cleanup = function () {
        this.script && (this.script.onload = this.script.onerror = null, this.script.onreadystatechange = null), this.script && this.script.parentNode && this.script.parentNode.removeChild(this.script), this.errorScript && this.errorScript.parentNode && this.errorScript.parentNode.removeChild(this.errorScript), this.script = null, this.errorScript = null;
      }, t;
    }();

    e["default"] = r;
  }, function (t, e, n) {
    "use strict";

    e.__esModule = !0;

    var r = n(0),
        i = n(1),
        o = function () {
      function t(t, e) {
        this.url = t, this.data = e;
      }

      return t.prototype.send = function (t) {
        if (!this.request) {
          var e = r.buildQueryString(this.data),
              n = this.url + "/" + t.number + "?" + e;
          this.request = i["default"].createScriptRequest(n), this.request.send(t);
        }
      }, t.prototype.cleanup = function () {
        this.request && this.request.cleanup();
      }, t;
    }();

    e["default"] = o;
  }, function (t, e, n) {
    "use strict";

    e.__esModule = !0;
    var r = n(1),
        i = n(8),
        o = {
      name: "jsonp",
      getAgent: function getAgent(t, e) {
        return function (n, o) {
          var s = "http" + (e ? "s" : "") + "://" + (t.host || t.options.host) + t.options.path,
              a = r["default"].createJSONPRequest(s, n),
              u = r["default"].ScriptReceivers.create(function (e, n) {
            i.ScriptReceivers.remove(u), a.cleanup(), n && n.host && (t.host = n.host), o && o(e, n);
          });
          a.send(u);
        };
      }
    };
    e["default"] = o;
  }, function (t, e, n) {
    "use strict";

    e.__esModule = !0;
    var r = n(30),
        i = n(15),
        o = n(14),
        s = n(1),
        a = n(11),
        u = n(0),
        c = new i["default"]({
      file: "sockjs",
      urls: o.sockjs,
      handlesActivityChecks: !0,
      supportsPing: !1,
      isSupported: function isSupported() {
        return !0;
      },
      isInitialized: function isInitialized() {
        return void 0 !== window.SockJS;
      },
      getSocket: function getSocket(t, e) {
        return new window.SockJS(t, null, {
          js_path: a.Dependencies.getPath("sockjs", {
            useTLS: e.useTLS
          }),
          ignore_null_origin: e.ignoreNullOrigin
        });
      },
      beforeOpen: function beforeOpen(t, e) {
        t.send(JSON.stringify({
          path: e
        }));
      }
    }),
        h = {
      isSupported: function isSupported(t) {
        return s["default"].isXDRSupported(t.useTLS);
      }
    },
        f = new i["default"](u.extend({}, r.streamingConfiguration, h)),
        l = new i["default"](u.extend({}, r.pollingConfiguration, h));
    r["default"].xdr_streaming = f, r["default"].xdr_polling = l, r["default"].sockjs = c, e["default"] = r["default"];
  }, function (t, e, n) {
    "use strict";

    e.__esModule = !0;
    var r = n(14),
        i = n(15),
        o = n(0),
        s = n(1),
        a = new i["default"]({
      urls: r.ws,
      handlesActivityChecks: !1,
      supportsPing: !1,
      isInitialized: function isInitialized() {
        return Boolean(s["default"].getWebSocketAPI());
      },
      isSupported: function isSupported() {
        return Boolean(s["default"].getWebSocketAPI());
      },
      getSocket: function getSocket(t) {
        return s["default"].createWebSocket(t);
      }
    }),
        u = {
      urls: r.http,
      handlesActivityChecks: !1,
      supportsPing: !0,
      isInitialized: function isInitialized() {
        return !0;
      }
    };
    e.streamingConfiguration = o.extend({
      getSocket: function getSocket(t) {
        return s["default"].HTTPFactory.createStreamingSocket(t);
      }
    }, u), e.pollingConfiguration = o.extend({
      getSocket: function getSocket(t) {
        return s["default"].HTTPFactory.createPollingSocket(t);
      }
    }, u);
    var c = {
      isSupported: function isSupported() {
        return s["default"].isXHRSupported();
      }
    },
        h = {
      ws: a,
      xhr_streaming: new i["default"](o.extend({}, e.streamingConfiguration, c)),
      xhr_polling: new i["default"](o.extend({}, e.pollingConfiguration, c))
    };
    e["default"] = h;
  }, function (t, e, n) {
    "use strict";

    var _r5,
        i = this && this.__extends || (_r5 = function r(t, e) {
      return (_r5 = Object.setPrototypeOf || {
        __proto__: []
      } instanceof Array && function (t, e) {
        t.__proto__ = e;
      } || function (t, e) {
        for (var n in e) {
          e.hasOwnProperty(n) && (t[n] = e[n]);
        }
      })(t, e);
    }, function (t, e) {
      function n() {
        this.constructor = t;
      }

      _r5(t, e), t.prototype = null === e ? Object.create(e) : (n.prototype = e.prototype, new n());
    });

    e.__esModule = !0;

    var o = n(2),
        s = n(0),
        a = n(4),
        u = n(3),
        c = n(1),
        h = function (t) {
      function e(e, n, r, i, o) {
        var s = t.call(this) || this;
        return s.initialize = c["default"].transportConnectionInitializer, s.hooks = e, s.name = n, s.priority = r, s.key = i, s.options = o, s.state = "new", s.timeline = o.timeline, s.activityTimeout = o.activityTimeout, s.id = s.timeline.generateUniqueID(), s;
      }

      return i(e, t), e.prototype.handlesActivityChecks = function () {
        return Boolean(this.hooks.handlesActivityChecks);
      }, e.prototype.supportsPing = function () {
        return Boolean(this.hooks.supportsPing);
      }, e.prototype.connect = function () {
        var t = this;
        if (this.socket || "initialized" !== this.state) return !1;
        var e = this.hooks.urls.getInitial(this.key, this.options);

        try {
          this.socket = this.hooks.getSocket(e, this.options);
        } catch (e) {
          return o["default"].defer(function () {
            t.onError(e), t.changeState("closed");
          }), !1;
        }

        return this.bindListeners(), u["default"].debug("Connecting", {
          transport: this.name,
          url: e
        }), this.changeState("connecting"), !0;
      }, e.prototype.close = function () {
        return !!this.socket && (this.socket.close(), !0);
      }, e.prototype.send = function (t) {
        var e = this;
        return "open" === this.state && (o["default"].defer(function () {
          e.socket && e.socket.send(t);
        }), !0);
      }, e.prototype.ping = function () {
        "open" === this.state && this.supportsPing() && this.socket.ping();
      }, e.prototype.onOpen = function () {
        this.hooks.beforeOpen && this.hooks.beforeOpen(this.socket, this.hooks.urls.getPath(this.key, this.options)), this.changeState("open"), this.socket.onopen = void 0;
      }, e.prototype.onError = function (t) {
        this.emit("error", {
          type: "WebSocketError",
          error: t
        }), this.timeline.error(this.buildTimelineMessage({
          error: t.toString()
        }));
      }, e.prototype.onClose = function (t) {
        t ? this.changeState("closed", {
          code: t.code,
          reason: t.reason,
          wasClean: t.wasClean
        }) : this.changeState("closed"), this.unbindListeners(), this.socket = void 0;
      }, e.prototype.onMessage = function (t) {
        this.emit("message", t);
      }, e.prototype.onActivity = function () {
        this.emit("activity");
      }, e.prototype.bindListeners = function () {
        var t = this;
        this.socket.onopen = function () {
          t.onOpen();
        }, this.socket.onerror = function (e) {
          t.onError(e);
        }, this.socket.onclose = function (e) {
          t.onClose(e);
        }, this.socket.onmessage = function (e) {
          t.onMessage(e);
        }, this.supportsPing() && (this.socket.onactivity = function () {
          t.onActivity();
        });
      }, e.prototype.unbindListeners = function () {
        this.socket && (this.socket.onopen = void 0, this.socket.onerror = void 0, this.socket.onclose = void 0, this.socket.onmessage = void 0, this.supportsPing() && (this.socket.onactivity = void 0));
      }, e.prototype.changeState = function (t, e) {
        this.state = t, this.timeline.info(this.buildTimelineMessage({
          state: t,
          params: e
        })), this.emit(t, e);
      }, e.prototype.buildTimelineMessage = function (t) {
        return s.extend({
          cid: this.id
        }, t);
      }, e;
    }(a["default"]);

    e["default"] = h;
  }, function (t, e, n) {
    "use strict";

    e.__esModule = !0;

    var r = n(0),
        i = function () {
      function t() {
        this._callbacks = {};
      }

      return t.prototype.get = function (t) {
        return this._callbacks[o(t)];
      }, t.prototype.add = function (t, e, n) {
        var r = o(t);
        this._callbacks[r] = this._callbacks[r] || [], this._callbacks[r].push({
          fn: e,
          context: n
        });
      }, t.prototype.remove = function (t, e, n) {
        if (t || e || n) {
          var i = t ? [o(t)] : r.keys(this._callbacks);
          e || n ? this.removeCallback(i, e, n) : this.removeAllCallbacks(i);
        } else this._callbacks = {};
      }, t.prototype.removeCallback = function (t, e, n) {
        r.apply(t, function (t) {
          this._callbacks[t] = r.filter(this._callbacks[t] || [], function (t) {
            return e && e !== t.fn || n && n !== t.context;
          }), 0 === this._callbacks[t].length && delete this._callbacks[t];
        }, this);
      }, t.prototype.removeAllCallbacks = function (t) {
        r.apply(t, function (t) {
          delete this._callbacks[t];
        }, this);
      }, t;
    }();

    function o(t) {
      return "_" + t;
    }

    e["default"] = i;
  }, function (t, e, n) {
    "use strict";

    var _r6,
        i = this && this.__extends || (_r6 = function r(t, e) {
      return (_r6 = Object.setPrototypeOf || {
        __proto__: []
      } instanceof Array && function (t, e) {
        t.__proto__ = e;
      } || function (t, e) {
        for (var n in e) {
          e.hasOwnProperty(n) && (t[n] = e[n]);
        }
      })(t, e);
    }, function (t, e) {
      function n() {
        this.constructor = t;
      }

      _r6(t, e), t.prototype = null === e ? Object.create(e) : (n.prototype = e.prototype, new n());
    });

    e.__esModule = !0;

    var o = function (t) {
      function e() {
        var e = t.call(this) || this,
            n = e;
        return void 0 !== window.addEventListener && (window.addEventListener("online", function () {
          n.emit("online");
        }, !1), window.addEventListener("offline", function () {
          n.emit("offline");
        }, !1)), e;
      }

      return i(e, t), e.prototype.isOnline = function () {
        return void 0 === window.navigator.onLine || window.navigator.onLine;
      }, e;
    }(n(4)["default"]);

    e.NetInfo = o, e.Network = new o();
  }, function (t, e, n) {
    "use strict";

    e.__esModule = !0;
    var r = n(0),
        i = n(35),
        o = n(18),
        s = n(53),
        a = n(54),
        u = n(55),
        c = n(56),
        h = n(57);

    function f(t) {
      return function () {
        return t.isSupported();
      };
    }

    e["default"] = function (t, e) {
      var n = {};

      function l(r, i, o, s, a) {
        var u = e(t, r, i, o, s, a);
        return n[r] = u, u;
      }

      var p,
          d = {
        hostNonTLS: t.wsHost + ":" + t.wsPort,
        hostTLS: t.wsHost + ":" + t.wssPort,
        httpPath: t.wsPath
      },
          y = r.extend({}, d, {
        useTLS: !0
      }),
          g = {
        hostNonTLS: t.httpHost + ":" + t.httpPort,
        hostTLS: t.httpHost + ":" + t.httpsPort,
        httpPath: t.httpPath
      },
          v = {
        loop: !0,
        timeout: 15e3,
        timeoutLimit: 6e4
      },
          b = new i["default"]({
        lives: 2,
        minPingDelay: 1e4,
        maxPingDelay: t.activity_timeout
      }),
          _ = new i["default"]({
        lives: 2,
        minPingDelay: 1e4,
        maxPingDelay: t.activity_timeout
      }),
          m = l("ws", "ws", 3, d, b),
          w = l("wss", "ws", 3, y, b),
          S = l("sockjs", "sockjs", 1, g),
          k = l("xhr_streaming", "xhr_streaming", 1, g, _),
          A = l("xdr_streaming", "xdr_streaming", 1, g, _),
          T = l("xhr_polling", "xhr_polling", 1, g),
          E = l("xdr_polling", "xdr_polling", 1, g),
          P = new o["default"]([m], v),
          O = new o["default"]([w], v),
          C = new o["default"]([S], v),
          x = new o["default"]([new c["default"](f(k), k, A)], v),
          R = new o["default"]([new c["default"](f(T), T, E)], v),
          M = new o["default"]([new c["default"](f(x), new s["default"]([x, new u["default"](R, {
        delay: 4e3
      })]), R)], v),
          U = new c["default"](f(M), M, C);

      return p = t.useTLS ? new s["default"]([P, new u["default"](U, {
        delay: 2e3
      })]) : new s["default"]([P, new u["default"](O, {
        delay: 2e3
      }), new u["default"](U, {
        delay: 5e3
      })]), new a["default"](new h["default"](new c["default"](f(m), p, U)), n, {
        ttl: 18e5,
        timeline: t.timeline,
        useTLS: t.useTLS
      });
    };
  }, function (t, e, n) {
    "use strict";

    e.__esModule = !0;

    var r = n(7),
        i = function () {
      function t(t) {
        this.options = t || {}, this.livesLeft = this.options.lives || 1 / 0;
      }

      return t.prototype.getAssistant = function (t) {
        return r["default"].createAssistantToTheTransportManager(this, t, {
          minPingDelay: this.options.minPingDelay,
          maxPingDelay: this.options.maxPingDelay
        });
      }, t.prototype.isAlive = function () {
        return this.livesLeft > 0;
      }, t.prototype.reportDeath = function () {
        this.livesLeft -= 1;
      }, t;
    }();

    e["default"] = i;
  }, function (t, e, n) {
    "use strict";

    e.__esModule = !0;

    var r = n(2),
        i = n(0),
        o = function () {
      function t(t, e, n) {
        this.manager = t, this.transport = e, this.minPingDelay = n.minPingDelay, this.maxPingDelay = n.maxPingDelay, this.pingDelay = void 0;
      }

      return t.prototype.createConnection = function (t, e, n, o) {
        var s = this;
        o = i.extend({}, o, {
          activityTimeout: this.pingDelay
        });

        var a = this.transport.createConnection(t, e, n, o),
            u = null,
            c = function c() {
          a.unbind("open", c), a.bind("closed", h), u = r["default"].now();
        },
            h = function h(t) {
          if (a.unbind("closed", h), 1002 === t.code || 1003 === t.code) s.manager.reportDeath();else if (!t.wasClean && u) {
            var e = r["default"].now() - u;
            e < 2 * s.maxPingDelay && (s.manager.reportDeath(), s.pingDelay = Math.max(e / 2, s.minPingDelay));
          }
        };

        return a.bind("open", c), a;
      }, t.prototype.isSupported = function (t) {
        return this.manager.isAlive() && this.transport.isSupported(t);
      }, t;
    }();

    e["default"] = o;
  }, function (t, e, n) {
    "use strict";

    e.__esModule = !0;

    var r = n(0),
        i = n(16),
        o = n(38),
        s = function () {
      function t(t, e) {
        this.transport = t, this.callback = e, this.bindListeners();
      }

      return t.prototype.close = function () {
        this.unbindListeners(), this.transport.close();
      }, t.prototype.bindListeners = function () {
        var t = this;
        this.onMessage = function (e) {
          var n;
          t.unbindListeners();

          try {
            n = i.processHandshake(e);
          } catch (e) {
            return t.finish("error", {
              error: e
            }), void t.transport.close();
          }

          "connected" === n.action ? t.finish("connected", {
            connection: new o["default"](n.id, t.transport),
            activityTimeout: n.activityTimeout
          }) : (t.finish(n.action, {
            error: n.error
          }), t.transport.close());
        }, this.onClosed = function (e) {
          t.unbindListeners();
          var n = i.getCloseAction(e) || "backoff",
              r = i.getCloseError(e);
          t.finish(n, {
            error: r
          });
        }, this.transport.bind("message", this.onMessage), this.transport.bind("closed", this.onClosed);
      }, t.prototype.unbindListeners = function () {
        this.transport.unbind("message", this.onMessage), this.transport.unbind("closed", this.onClosed);
      }, t.prototype.finish = function (t, e) {
        this.callback(r.extend({
          transport: this.transport,
          action: t
        }, e));
      }, t;
    }();

    e["default"] = s;
  }, function (t, e, n) {
    "use strict";

    var _r7,
        i = this && this.__extends || (_r7 = function r(t, e) {
      return (_r7 = Object.setPrototypeOf || {
        __proto__: []
      } instanceof Array && function (t, e) {
        t.__proto__ = e;
      } || function (t, e) {
        for (var n in e) {
          e.hasOwnProperty(n) && (t[n] = e[n]);
        }
      })(t, e);
    }, function (t, e) {
      function n() {
        this.constructor = t;
      }

      _r7(t, e), t.prototype = null === e ? Object.create(e) : (n.prototype = e.prototype, new n());
    });

    e.__esModule = !0;

    var o = n(0),
        s = n(4),
        a = n(16),
        u = n(3),
        c = function (t) {
      function e(e, n) {
        var r = t.call(this) || this;
        return r.id = e, r.transport = n, r.activityTimeout = n.activityTimeout, r.bindListeners(), r;
      }

      return i(e, t), e.prototype.handlesActivityChecks = function () {
        return this.transport.handlesActivityChecks();
      }, e.prototype.send = function (t) {
        return this.transport.send(t);
      }, e.prototype.send_event = function (t, e, n) {
        var r = {
          event: t,
          data: e
        };
        return n && (r.channel = n), u["default"].debug("Event sent", r), this.send(a.encodeMessage(r));
      }, e.prototype.ping = function () {
        this.transport.supportsPing() ? this.transport.ping() : this.send_event("pusher:ping", {});
      }, e.prototype.close = function () {
        this.transport.close();
      }, e.prototype.bindListeners = function () {
        var t = this,
            e = {
          message: function message(e) {
            var n;

            try {
              n = a.decodeMessage(e);
            } catch (n) {
              t.emit("error", {
                type: "MessageParseError",
                error: n,
                data: e.data
              });
            }

            if (void 0 !== n) {
              switch (u["default"].debug("Event recd", n), n.event) {
                case "pusher:error":
                  t.emit("error", {
                    type: "PusherError",
                    data: n.data
                  });
                  break;

                case "pusher:ping":
                  t.emit("ping");
                  break;

                case "pusher:pong":
                  t.emit("pong");
              }

              t.emit("message", n);
            }
          },
          activity: function activity() {
            t.emit("activity");
          },
          error: function error(e) {
            t.emit("error", {
              type: "WebSocketError",
              error: e
            });
          },
          closed: function closed(e) {
            n(), e && e.code && t.handleCloseEvent(e), t.transport = null, t.emit("closed");
          }
        },
            n = function n() {
          o.objectApply(e, function (e, n) {
            t.transport.unbind(n, e);
          });
        };

        o.objectApply(e, function (e, n) {
          t.transport.bind(n, e);
        });
      }, e.prototype.handleCloseEvent = function (t) {
        var e = a.getCloseAction(t),
            n = a.getCloseError(t);
        n && this.emit("error", n), e && this.emit(e, {
          action: e,
          error: n
        });
      }, e;
    }(s["default"]);

    e["default"] = c;
  }, function (t, e, n) {
    "use strict";

    e.__esModule = !0;

    var r = n(1),
        i = function () {
      function t(t, e) {
        this.channel = t;
        var n = e.authTransport;
        if (void 0 === r["default"].getAuthorizers()[n]) throw "'" + n + "' is not a recognized auth transport";
        this.type = n, this.options = e, this.authOptions = (e || {}).auth || {};
      }

      return t.prototype.composeQuery = function (t) {
        var e = "socket_id=" + encodeURIComponent(t) + "&channel_name=" + encodeURIComponent(this.channel.name);

        for (var n in this.authOptions.params) {
          e += "&" + encodeURIComponent(n) + "=" + encodeURIComponent(this.authOptions.params[n]);
        }

        return e;
      }, t.prototype.authorize = function (e, n) {
        return t.authorizers = t.authorizers || r["default"].getAuthorizers(), t.authorizers[this.type].call(this, r["default"], e, n);
      }, t;
    }();

    e["default"] = i;
  }, function (t, e, n) {
    "use strict";

    e.__esModule = !0;

    var r = n(1),
        i = function () {
      function t(t, e) {
        this.timeline = t, this.options = e || {};
      }

      return t.prototype.send = function (t, e) {
        this.timeline.isEmpty() || this.timeline.send(r["default"].TimelineTransport.getAgent(this, t), e);
      }, t;
    }();

    e["default"] = i;
  }, function (t, e, n) {
    "use strict";

    var _r8,
        i = this && this.__extends || (_r8 = function r(t, e) {
      return (_r8 = Object.setPrototypeOf || {
        __proto__: []
      } instanceof Array && function (t, e) {
        t.__proto__ = e;
      } || function (t, e) {
        for (var n in e) {
          e.hasOwnProperty(n) && (t[n] = e[n]);
        }
      })(t, e);
    }, function (t, e) {
      function n() {
        this.constructor = t;
      }

      _r8(t, e), t.prototype = null === e ? Object.create(e) : (n.prototype = e.prototype, new n());
    });

    e.__esModule = !0;

    var o = n(12),
        s = n(3),
        a = n(42),
        u = n(10),
        c = function (t) {
      function e(e, n) {
        var r = t.call(this, e, n) || this;
        return r.members = new a["default"](), r;
      }

      return i(e, t), e.prototype.authorize = function (e, n) {
        var r = this;
        t.prototype.authorize.call(this, e, function (t, e) {
          if (!t) {
            if (void 0 === e.channel_data) {
              var i = u["default"].buildLogSuffix("authenticationEndpoint");
              return s["default"].warn("Invalid auth response for channel '" + r.name + "',expected 'channel_data' field. " + i), void n("Invalid auth response");
            }

            var o = JSON.parse(e.channel_data);
            r.members.setMyID(o.user_id);
          }

          n(t, e);
        });
      }, e.prototype.handleEvent = function (t) {
        var e = t.event;
        if (0 === e.indexOf("pusher_internal:")) this.handleInternalEvent(t);else {
          var n = t.data,
              r = {};
          t.user_id && (r.user_id = t.user_id), this.emit(e, n, r);
        }
      }, e.prototype.handleInternalEvent = function (t) {
        var e = t.event,
            n = t.data;

        switch (e) {
          case "pusher_internal:subscription_succeeded":
            this.handleSubscriptionSucceededEvent(t);
            break;

          case "pusher_internal:member_added":
            var r = this.members.addMember(n);
            this.emit("pusher:member_added", r);
            break;

          case "pusher_internal:member_removed":
            var i = this.members.removeMember(n);
            i && this.emit("pusher:member_removed", i);
        }
      }, e.prototype.handleSubscriptionSucceededEvent = function (t) {
        this.subscriptionPending = !1, this.subscribed = !0, this.subscriptionCancelled ? this.pusher.unsubscribe(this.name) : (this.members.onSubscription(t.data), this.emit("pusher:subscription_succeeded", this.members));
      }, e.prototype.disconnect = function () {
        this.members.reset(), t.prototype.disconnect.call(this);
      }, e;
    }(o["default"]);

    e["default"] = c;
  }, function (t, e, n) {
    "use strict";

    e.__esModule = !0;

    var r = n(0),
        i = function () {
      function t() {
        this.reset();
      }

      return t.prototype.get = function (t) {
        return Object.prototype.hasOwnProperty.call(this.members, t) ? {
          id: t,
          info: this.members[t]
        } : null;
      }, t.prototype.each = function (t) {
        var e = this;
        r.objectApply(this.members, function (n, r) {
          t(e.get(r));
        });
      }, t.prototype.setMyID = function (t) {
        this.myID = t;
      }, t.prototype.onSubscription = function (t) {
        this.members = t.presence.hash, this.count = t.presence.count, this.me = this.get(this.myID);
      }, t.prototype.addMember = function (t) {
        return null === this.get(t.user_id) && this.count++, this.members[t.user_id] = t.user_info, this.get(t.user_id);
      }, t.prototype.removeMember = function (t) {
        var e = this.get(t.user_id);
        return e && (delete this.members[t.user_id], this.count--), e;
      }, t.prototype.reset = function () {
        this.members = {}, this.count = 0, this.myID = null, this.me = null;
      }, t;
    }();

    e["default"] = i;
  }, function (t, e, n) {
    "use strict";

    var _r9,
        i = this && this.__extends || (_r9 = function r(t, e) {
      return (_r9 = Object.setPrototypeOf || {
        __proto__: []
      } instanceof Array && function (t, e) {
        t.__proto__ = e;
      } || function (t, e) {
        for (var n in e) {
          e.hasOwnProperty(n) && (t[n] = e[n]);
        }
      })(t, e);
    }, function (t, e) {
      function n() {
        this.constructor = t;
      }

      _r9(t, e), t.prototype = null === e ? Object.create(e) : (n.prototype = e.prototype, new n());
    });

    e.__esModule = !0;

    var o = n(12),
        s = n(5),
        a = n(3),
        u = n(44),
        c = n(46),
        h = function (t) {
      function e() {
        var e = null !== t && t.apply(this, arguments) || this;
        return e.key = null, e;
      }

      return i(e, t), e.prototype.authorize = function (e, n) {
        var r = this;
        t.prototype.authorize.call(this, e, function (t, e) {
          if (t) n(!0, e);else {
            var i = e.shared_secret;

            if (!i) {
              var o = "No shared_secret key in auth payload for encrypted channel: " + r.name;
              return n(!0, o), void a["default"].warn("Error: " + o);
            }

            r.key = c.decodeBase64(i), delete e.shared_secret, n(!1, e);
          }
        });
      }, e.prototype.trigger = function (t, e) {
        throw new s.UnsupportedFeature("Client events are not currently supported for encrypted channels");
      }, e.prototype.handleEvent = function (e) {
        var n = e.event,
            r = e.data;
        0 !== n.indexOf("pusher_internal:") && 0 !== n.indexOf("pusher:") ? this.handleEncryptedEvent(n, r) : t.prototype.handleEvent.call(this, e);
      }, e.prototype.handleEncryptedEvent = function (t, e) {
        var n = this;
        if (this.key) {
          if (e.ciphertext && e.nonce) {
            var r = c.decodeBase64(e.ciphertext);
            if (r.length < u.secretbox.overheadLength) a["default"].warn("Expected encrypted event ciphertext length to be " + u.secretbox.overheadLength + ", got: " + r.length);else {
              var i = c.decodeBase64(e.nonce);
              if (i.length < u.secretbox.nonceLength) a["default"].warn("Expected encrypted event nonce length to be " + u.secretbox.nonceLength + ", got: " + i.length);else {
                var o = u.secretbox.open(r, i, this.key);
                if (null === o) return a["default"].debug("Failed to decrypt an event, probably because it was encrypted with a different key. Fetching a new key from the authEndpoint..."), void this.authorize(this.pusher.connection.socket_id, function (e, s) {
                  e ? a["default"].warn("Failed to make a request to the authEndpoint: " + s + ". Unable to fetch new key, so dropping encrypted event") : null !== (o = u.secretbox.open(r, i, n.key)) ? n.emitJSON(t, c.encodeUTF8(o)) : a["default"].warn("Failed to decrypt event with new key. Dropping encrypted event");
                });
                this.emitJSON(t, c.encodeUTF8(o));
              }
            }
          } else a["default"].warn("Unexpected format for encrypted event, expected object with `ciphertext` and `nonce` fields, got: " + e);
        } else a["default"].debug("Received encrypted event before key has been retrieved from the authEndpoint");
      }, e.prototype.emitJSON = function (t, e) {
        try {
          this.emit(t, JSON.parse(e));
        } catch (n) {
          this.emit(t, e);
        }

        return this;
      }, e;
    }(o["default"]);

    e["default"] = h;
  }, function (t, e, n) {
    !function (t) {
      "use strict";

      var e = function e(t) {
        var e,
            n = new Float64Array(16);
        if (t) for (e = 0; e < t.length; e++) {
          n[e] = t[e];
        }
        return n;
      },
          r = function r() {
        throw new Error("no PRNG");
      },
          i = new Uint8Array(16),
          o = new Uint8Array(32);

      o[0] = 9;
      var s = e(),
          a = e([1]),
          u = e([56129, 1]),
          c = e([30883, 4953, 19914, 30187, 55467, 16705, 2637, 112, 59544, 30585, 16505, 36039, 65139, 11119, 27886, 20995]),
          h = e([61785, 9906, 39828, 60374, 45398, 33411, 5274, 224, 53552, 61171, 33010, 6542, 64743, 22239, 55772, 9222]),
          f = e([54554, 36645, 11616, 51542, 42930, 38181, 51040, 26924, 56412, 64982, 57905, 49316, 21502, 52590, 14035, 8553]),
          l = e([26200, 26214, 26214, 26214, 26214, 26214, 26214, 26214, 26214, 26214, 26214, 26214, 26214, 26214, 26214, 26214]),
          p = e([41136, 18958, 6951, 50414, 58488, 44335, 6150, 12099, 55207, 15867, 153, 11085, 57099, 20417, 9344, 11139]);

      function d(t, e, n, r) {
        t[e] = n >> 24 & 255, t[e + 1] = n >> 16 & 255, t[e + 2] = n >> 8 & 255, t[e + 3] = 255 & n, t[e + 4] = r >> 24 & 255, t[e + 5] = r >> 16 & 255, t[e + 6] = r >> 8 & 255, t[e + 7] = 255 & r;
      }

      function y(t, e, n, r, i) {
        var o,
            s = 0;

        for (o = 0; o < i; o++) {
          s |= t[e + o] ^ n[r + o];
        }

        return (1 & s - 1 >>> 8) - 1;
      }

      function g(t, e, n, r) {
        return y(t, e, n, r, 16);
      }

      function v(t, e, n, r) {
        return y(t, e, n, r, 32);
      }

      function b(t, e, n, r) {
        !function (t, e, n, r) {
          for (var i, o = 255 & r[0] | (255 & r[1]) << 8 | (255 & r[2]) << 16 | (255 & r[3]) << 24, s = 255 & n[0] | (255 & n[1]) << 8 | (255 & n[2]) << 16 | (255 & n[3]) << 24, a = 255 & n[4] | (255 & n[5]) << 8 | (255 & n[6]) << 16 | (255 & n[7]) << 24, u = 255 & n[8] | (255 & n[9]) << 8 | (255 & n[10]) << 16 | (255 & n[11]) << 24, c = 255 & n[12] | (255 & n[13]) << 8 | (255 & n[14]) << 16 | (255 & n[15]) << 24, h = 255 & r[4] | (255 & r[5]) << 8 | (255 & r[6]) << 16 | (255 & r[7]) << 24, f = 255 & e[0] | (255 & e[1]) << 8 | (255 & e[2]) << 16 | (255 & e[3]) << 24, l = 255 & e[4] | (255 & e[5]) << 8 | (255 & e[6]) << 16 | (255 & e[7]) << 24, p = 255 & e[8] | (255 & e[9]) << 8 | (255 & e[10]) << 16 | (255 & e[11]) << 24, d = 255 & e[12] | (255 & e[13]) << 8 | (255 & e[14]) << 16 | (255 & e[15]) << 24, y = 255 & r[8] | (255 & r[9]) << 8 | (255 & r[10]) << 16 | (255 & r[11]) << 24, g = 255 & n[16] | (255 & n[17]) << 8 | (255 & n[18]) << 16 | (255 & n[19]) << 24, v = 255 & n[20] | (255 & n[21]) << 8 | (255 & n[22]) << 16 | (255 & n[23]) << 24, b = 255 & n[24] | (255 & n[25]) << 8 | (255 & n[26]) << 16 | (255 & n[27]) << 24, _ = 255 & n[28] | (255 & n[29]) << 8 | (255 & n[30]) << 16 | (255 & n[31]) << 24, m = 255 & r[12] | (255 & r[13]) << 8 | (255 & r[14]) << 16 | (255 & r[15]) << 24, w = o, S = s, k = a, A = u, T = c, E = h, P = f, O = l, C = p, x = d, R = y, M = g, U = v, L = b, B = _, I = m, j = 0; j < 20; j += 2) {
            w ^= (i = (U ^= (i = (C ^= (i = (T ^= (i = w + U | 0) << 7 | i >>> 25) + w | 0) << 9 | i >>> 23) + T | 0) << 13 | i >>> 19) + C | 0) << 18 | i >>> 14, E ^= (i = (S ^= (i = (L ^= (i = (x ^= (i = E + S | 0) << 7 | i >>> 25) + E | 0) << 9 | i >>> 23) + x | 0) << 13 | i >>> 19) + L | 0) << 18 | i >>> 14, R ^= (i = (P ^= (i = (k ^= (i = (B ^= (i = R + P | 0) << 7 | i >>> 25) + R | 0) << 9 | i >>> 23) + B | 0) << 13 | i >>> 19) + k | 0) << 18 | i >>> 14, I ^= (i = (M ^= (i = (O ^= (i = (A ^= (i = I + M | 0) << 7 | i >>> 25) + I | 0) << 9 | i >>> 23) + A | 0) << 13 | i >>> 19) + O | 0) << 18 | i >>> 14, w ^= (i = (A ^= (i = (k ^= (i = (S ^= (i = w + A | 0) << 7 | i >>> 25) + w | 0) << 9 | i >>> 23) + S | 0) << 13 | i >>> 19) + k | 0) << 18 | i >>> 14, E ^= (i = (T ^= (i = (O ^= (i = (P ^= (i = E + T | 0) << 7 | i >>> 25) + E | 0) << 9 | i >>> 23) + P | 0) << 13 | i >>> 19) + O | 0) << 18 | i >>> 14, R ^= (i = (x ^= (i = (C ^= (i = (M ^= (i = R + x | 0) << 7 | i >>> 25) + R | 0) << 9 | i >>> 23) + M | 0) << 13 | i >>> 19) + C | 0) << 18 | i >>> 14, I ^= (i = (B ^= (i = (L ^= (i = (U ^= (i = I + B | 0) << 7 | i >>> 25) + I | 0) << 9 | i >>> 23) + U | 0) << 13 | i >>> 19) + L | 0) << 18 | i >>> 14;
          }

          w = w + o | 0, S = S + s | 0, k = k + a | 0, A = A + u | 0, T = T + c | 0, E = E + h | 0, P = P + f | 0, O = O + l | 0, C = C + p | 0, x = x + d | 0, R = R + y | 0, M = M + g | 0, U = U + v | 0, L = L + b | 0, B = B + _ | 0, I = I + m | 0, t[0] = w >>> 0 & 255, t[1] = w >>> 8 & 255, t[2] = w >>> 16 & 255, t[3] = w >>> 24 & 255, t[4] = S >>> 0 & 255, t[5] = S >>> 8 & 255, t[6] = S >>> 16 & 255, t[7] = S >>> 24 & 255, t[8] = k >>> 0 & 255, t[9] = k >>> 8 & 255, t[10] = k >>> 16 & 255, t[11] = k >>> 24 & 255, t[12] = A >>> 0 & 255, t[13] = A >>> 8 & 255, t[14] = A >>> 16 & 255, t[15] = A >>> 24 & 255, t[16] = T >>> 0 & 255, t[17] = T >>> 8 & 255, t[18] = T >>> 16 & 255, t[19] = T >>> 24 & 255, t[20] = E >>> 0 & 255, t[21] = E >>> 8 & 255, t[22] = E >>> 16 & 255, t[23] = E >>> 24 & 255, t[24] = P >>> 0 & 255, t[25] = P >>> 8 & 255, t[26] = P >>> 16 & 255, t[27] = P >>> 24 & 255, t[28] = O >>> 0 & 255, t[29] = O >>> 8 & 255, t[30] = O >>> 16 & 255, t[31] = O >>> 24 & 255, t[32] = C >>> 0 & 255, t[33] = C >>> 8 & 255, t[34] = C >>> 16 & 255, t[35] = C >>> 24 & 255, t[36] = x >>> 0 & 255, t[37] = x >>> 8 & 255, t[38] = x >>> 16 & 255, t[39] = x >>> 24 & 255, t[40] = R >>> 0 & 255, t[41] = R >>> 8 & 255, t[42] = R >>> 16 & 255, t[43] = R >>> 24 & 255, t[44] = M >>> 0 & 255, t[45] = M >>> 8 & 255, t[46] = M >>> 16 & 255, t[47] = M >>> 24 & 255, t[48] = U >>> 0 & 255, t[49] = U >>> 8 & 255, t[50] = U >>> 16 & 255, t[51] = U >>> 24 & 255, t[52] = L >>> 0 & 255, t[53] = L >>> 8 & 255, t[54] = L >>> 16 & 255, t[55] = L >>> 24 & 255, t[56] = B >>> 0 & 255, t[57] = B >>> 8 & 255, t[58] = B >>> 16 & 255, t[59] = B >>> 24 & 255, t[60] = I >>> 0 & 255, t[61] = I >>> 8 & 255, t[62] = I >>> 16 & 255, t[63] = I >>> 24 & 255;
        }(t, e, n, r);
      }

      function _(t, e, n, r) {
        !function (t, e, n, r) {
          for (var i, o = 255 & r[0] | (255 & r[1]) << 8 | (255 & r[2]) << 16 | (255 & r[3]) << 24, s = 255 & n[0] | (255 & n[1]) << 8 | (255 & n[2]) << 16 | (255 & n[3]) << 24, a = 255 & n[4] | (255 & n[5]) << 8 | (255 & n[6]) << 16 | (255 & n[7]) << 24, u = 255 & n[8] | (255 & n[9]) << 8 | (255 & n[10]) << 16 | (255 & n[11]) << 24, c = 255 & n[12] | (255 & n[13]) << 8 | (255 & n[14]) << 16 | (255 & n[15]) << 24, h = 255 & r[4] | (255 & r[5]) << 8 | (255 & r[6]) << 16 | (255 & r[7]) << 24, f = 255 & e[0] | (255 & e[1]) << 8 | (255 & e[2]) << 16 | (255 & e[3]) << 24, l = 255 & e[4] | (255 & e[5]) << 8 | (255 & e[6]) << 16 | (255 & e[7]) << 24, p = 255 & e[8] | (255 & e[9]) << 8 | (255 & e[10]) << 16 | (255 & e[11]) << 24, d = 255 & e[12] | (255 & e[13]) << 8 | (255 & e[14]) << 16 | (255 & e[15]) << 24, y = 255 & r[8] | (255 & r[9]) << 8 | (255 & r[10]) << 16 | (255 & r[11]) << 24, g = 255 & n[16] | (255 & n[17]) << 8 | (255 & n[18]) << 16 | (255 & n[19]) << 24, v = 255 & n[20] | (255 & n[21]) << 8 | (255 & n[22]) << 16 | (255 & n[23]) << 24, b = 255 & n[24] | (255 & n[25]) << 8 | (255 & n[26]) << 16 | (255 & n[27]) << 24, _ = 255 & n[28] | (255 & n[29]) << 8 | (255 & n[30]) << 16 | (255 & n[31]) << 24, m = 255 & r[12] | (255 & r[13]) << 8 | (255 & r[14]) << 16 | (255 & r[15]) << 24, w = 0; w < 20; w += 2) {
            o ^= (i = (v ^= (i = (p ^= (i = (c ^= (i = o + v | 0) << 7 | i >>> 25) + o | 0) << 9 | i >>> 23) + c | 0) << 13 | i >>> 19) + p | 0) << 18 | i >>> 14, h ^= (i = (s ^= (i = (b ^= (i = (d ^= (i = h + s | 0) << 7 | i >>> 25) + h | 0) << 9 | i >>> 23) + d | 0) << 13 | i >>> 19) + b | 0) << 18 | i >>> 14, y ^= (i = (f ^= (i = (a ^= (i = (_ ^= (i = y + f | 0) << 7 | i >>> 25) + y | 0) << 9 | i >>> 23) + _ | 0) << 13 | i >>> 19) + a | 0) << 18 | i >>> 14, m ^= (i = (g ^= (i = (l ^= (i = (u ^= (i = m + g | 0) << 7 | i >>> 25) + m | 0) << 9 | i >>> 23) + u | 0) << 13 | i >>> 19) + l | 0) << 18 | i >>> 14, o ^= (i = (u ^= (i = (a ^= (i = (s ^= (i = o + u | 0) << 7 | i >>> 25) + o | 0) << 9 | i >>> 23) + s | 0) << 13 | i >>> 19) + a | 0) << 18 | i >>> 14, h ^= (i = (c ^= (i = (l ^= (i = (f ^= (i = h + c | 0) << 7 | i >>> 25) + h | 0) << 9 | i >>> 23) + f | 0) << 13 | i >>> 19) + l | 0) << 18 | i >>> 14, y ^= (i = (d ^= (i = (p ^= (i = (g ^= (i = y + d | 0) << 7 | i >>> 25) + y | 0) << 9 | i >>> 23) + g | 0) << 13 | i >>> 19) + p | 0) << 18 | i >>> 14, m ^= (i = (_ ^= (i = (b ^= (i = (v ^= (i = m + _ | 0) << 7 | i >>> 25) + m | 0) << 9 | i >>> 23) + v | 0) << 13 | i >>> 19) + b | 0) << 18 | i >>> 14;
          }

          t[0] = o >>> 0 & 255, t[1] = o >>> 8 & 255, t[2] = o >>> 16 & 255, t[3] = o >>> 24 & 255, t[4] = h >>> 0 & 255, t[5] = h >>> 8 & 255, t[6] = h >>> 16 & 255, t[7] = h >>> 24 & 255, t[8] = y >>> 0 & 255, t[9] = y >>> 8 & 255, t[10] = y >>> 16 & 255, t[11] = y >>> 24 & 255, t[12] = m >>> 0 & 255, t[13] = m >>> 8 & 255, t[14] = m >>> 16 & 255, t[15] = m >>> 24 & 255, t[16] = f >>> 0 & 255, t[17] = f >>> 8 & 255, t[18] = f >>> 16 & 255, t[19] = f >>> 24 & 255, t[20] = l >>> 0 & 255, t[21] = l >>> 8 & 255, t[22] = l >>> 16 & 255, t[23] = l >>> 24 & 255, t[24] = p >>> 0 & 255, t[25] = p >>> 8 & 255, t[26] = p >>> 16 & 255, t[27] = p >>> 24 & 255, t[28] = d >>> 0 & 255, t[29] = d >>> 8 & 255, t[30] = d >>> 16 & 255, t[31] = d >>> 24 & 255;
        }(t, e, n, r);
      }

      var m = new Uint8Array([101, 120, 112, 97, 110, 100, 32, 51, 50, 45, 98, 121, 116, 101, 32, 107]);

      function w(t, e, n, r, i, o, s) {
        var a,
            u,
            c = new Uint8Array(16),
            h = new Uint8Array(64);

        for (u = 0; u < 16; u++) {
          c[u] = 0;
        }

        for (u = 0; u < 8; u++) {
          c[u] = o[u];
        }

        for (; i >= 64;) {
          for (b(h, c, s, m), u = 0; u < 64; u++) {
            t[e + u] = n[r + u] ^ h[u];
          }

          for (a = 1, u = 8; u < 16; u++) {
            a = a + (255 & c[u]) | 0, c[u] = 255 & a, a >>>= 8;
          }

          i -= 64, e += 64, r += 64;
        }

        if (i > 0) for (b(h, c, s, m), u = 0; u < i; u++) {
          t[e + u] = n[r + u] ^ h[u];
        }
        return 0;
      }

      function S(t, e, n, r, i) {
        var o,
            s,
            a = new Uint8Array(16),
            u = new Uint8Array(64);

        for (s = 0; s < 16; s++) {
          a[s] = 0;
        }

        for (s = 0; s < 8; s++) {
          a[s] = r[s];
        }

        for (; n >= 64;) {
          for (b(u, a, i, m), s = 0; s < 64; s++) {
            t[e + s] = u[s];
          }

          for (o = 1, s = 8; s < 16; s++) {
            o = o + (255 & a[s]) | 0, a[s] = 255 & o, o >>>= 8;
          }

          n -= 64, e += 64;
        }

        if (n > 0) for (b(u, a, i, m), s = 0; s < n; s++) {
          t[e + s] = u[s];
        }
        return 0;
      }

      function k(t, e, n, r, i) {
        var o = new Uint8Array(32);

        _(o, r, i, m);

        for (var s = new Uint8Array(8), a = 0; a < 8; a++) {
          s[a] = r[a + 16];
        }

        return S(t, e, n, s, o);
      }

      function A(t, e, n, r, i, o, s) {
        var a = new Uint8Array(32);

        _(a, o, s, m);

        for (var u = new Uint8Array(8), c = 0; c < 8; c++) {
          u[c] = o[c + 16];
        }

        return w(t, e, n, r, i, u, a);
      }

      var T = function T(t) {
        var e, n, r, i, o, s, a, u;
        this.buffer = new Uint8Array(16), this.r = new Uint16Array(10), this.h = new Uint16Array(10), this.pad = new Uint16Array(8), this.leftover = 0, this.fin = 0, e = 255 & t[0] | (255 & t[1]) << 8, this.r[0] = 8191 & e, n = 255 & t[2] | (255 & t[3]) << 8, this.r[1] = 8191 & (e >>> 13 | n << 3), r = 255 & t[4] | (255 & t[5]) << 8, this.r[2] = 7939 & (n >>> 10 | r << 6), i = 255 & t[6] | (255 & t[7]) << 8, this.r[3] = 8191 & (r >>> 7 | i << 9), o = 255 & t[8] | (255 & t[9]) << 8, this.r[4] = 255 & (i >>> 4 | o << 12), this.r[5] = o >>> 1 & 8190, s = 255 & t[10] | (255 & t[11]) << 8, this.r[6] = 8191 & (o >>> 14 | s << 2), a = 255 & t[12] | (255 & t[13]) << 8, this.r[7] = 8065 & (s >>> 11 | a << 5), u = 255 & t[14] | (255 & t[15]) << 8, this.r[8] = 8191 & (a >>> 8 | u << 8), this.r[9] = u >>> 5 & 127, this.pad[0] = 255 & t[16] | (255 & t[17]) << 8, this.pad[1] = 255 & t[18] | (255 & t[19]) << 8, this.pad[2] = 255 & t[20] | (255 & t[21]) << 8, this.pad[3] = 255 & t[22] | (255 & t[23]) << 8, this.pad[4] = 255 & t[24] | (255 & t[25]) << 8, this.pad[5] = 255 & t[26] | (255 & t[27]) << 8, this.pad[6] = 255 & t[28] | (255 & t[29]) << 8, this.pad[7] = 255 & t[30] | (255 & t[31]) << 8;
      };

      function E(t, e, n, r, i, o) {
        var s = new T(o);
        return s.update(n, r, i), s.finish(t, e), 0;
      }

      function P(t, e, n, r, i, o) {
        var s = new Uint8Array(16);
        return E(s, 0, n, r, i, o), g(t, e, s, 0);
      }

      function O(t, e, n, r, i) {
        var o;
        if (n < 32) return -1;

        for (A(t, 0, e, 0, n, r, i), E(t, 16, t, 32, n - 32, t), o = 0; o < 16; o++) {
          t[o] = 0;
        }

        return 0;
      }

      function C(t, e, n, r, i) {
        var o,
            s = new Uint8Array(32);
        if (n < 32) return -1;
        if (k(s, 0, 32, r, i), 0 !== P(e, 16, e, 32, n - 32, s)) return -1;

        for (A(t, 0, e, 0, n, r, i), o = 0; o < 32; o++) {
          t[o] = 0;
        }

        return 0;
      }

      function x(t, e) {
        var n;

        for (n = 0; n < 16; n++) {
          t[n] = 0 | e[n];
        }
      }

      function R(t) {
        var e,
            n,
            r = 1;

        for (e = 0; e < 16; e++) {
          n = t[e] + r + 65535, r = Math.floor(n / 65536), t[e] = n - 65536 * r;
        }

        t[0] += r - 1 + 37 * (r - 1);
      }

      function M(t, e, n) {
        for (var r, i = ~(n - 1), o = 0; o < 16; o++) {
          r = i & (t[o] ^ e[o]), t[o] ^= r, e[o] ^= r;
        }
      }

      function U(t, n) {
        var r,
            i,
            o,
            s = e(),
            a = e();

        for (r = 0; r < 16; r++) {
          a[r] = n[r];
        }

        for (R(a), R(a), R(a), i = 0; i < 2; i++) {
          for (s[0] = a[0] - 65517, r = 1; r < 15; r++) {
            s[r] = a[r] - 65535 - (s[r - 1] >> 16 & 1), s[r - 1] &= 65535;
          }

          s[15] = a[15] - 32767 - (s[14] >> 16 & 1), o = s[15] >> 16 & 1, s[14] &= 65535, M(a, s, 1 - o);
        }

        for (r = 0; r < 16; r++) {
          t[2 * r] = 255 & a[r], t[2 * r + 1] = a[r] >> 8;
        }
      }

      function L(t, e) {
        var n = new Uint8Array(32),
            r = new Uint8Array(32);
        return U(n, t), U(r, e), v(n, 0, r, 0);
      }

      function B(t) {
        var e = new Uint8Array(32);
        return U(e, t), 1 & e[0];
      }

      function I(t, e) {
        var n;

        for (n = 0; n < 16; n++) {
          t[n] = e[2 * n] + (e[2 * n + 1] << 8);
        }

        t[15] &= 32767;
      }

      function j(t, e, n) {
        for (var r = 0; r < 16; r++) {
          t[r] = e[r] + n[r];
        }
      }

      function D(t, e, n) {
        for (var r = 0; r < 16; r++) {
          t[r] = e[r] - n[r];
        }
      }

      function N(t, e, n) {
        var r,
            i,
            o = 0,
            s = 0,
            a = 0,
            u = 0,
            c = 0,
            h = 0,
            f = 0,
            l = 0,
            p = 0,
            d = 0,
            y = 0,
            g = 0,
            v = 0,
            b = 0,
            _ = 0,
            m = 0,
            w = 0,
            S = 0,
            k = 0,
            A = 0,
            T = 0,
            E = 0,
            P = 0,
            O = 0,
            C = 0,
            x = 0,
            R = 0,
            M = 0,
            U = 0,
            L = 0,
            B = 0,
            I = n[0],
            j = n[1],
            D = n[2],
            N = n[3],
            Y = n[4],
            z = n[5],
            H = n[6],
            F = n[7],
            q = n[8],
            J = n[9],
            X = n[10],
            K = n[11],
            G = n[12],
            W = n[13],
            V = n[14],
            Z = n[15];
        o += (r = e[0]) * I, s += r * j, a += r * D, u += r * N, c += r * Y, h += r * z, f += r * H, l += r * F, p += r * q, d += r * J, y += r * X, g += r * K, v += r * G, b += r * W, _ += r * V, m += r * Z, s += (r = e[1]) * I, a += r * j, u += r * D, c += r * N, h += r * Y, f += r * z, l += r * H, p += r * F, d += r * q, y += r * J, g += r * X, v += r * K, b += r * G, _ += r * W, m += r * V, w += r * Z, a += (r = e[2]) * I, u += r * j, c += r * D, h += r * N, f += r * Y, l += r * z, p += r * H, d += r * F, y += r * q, g += r * J, v += r * X, b += r * K, _ += r * G, m += r * W, w += r * V, S += r * Z, u += (r = e[3]) * I, c += r * j, h += r * D, f += r * N, l += r * Y, p += r * z, d += r * H, y += r * F, g += r * q, v += r * J, b += r * X, _ += r * K, m += r * G, w += r * W, S += r * V, k += r * Z, c += (r = e[4]) * I, h += r * j, f += r * D, l += r * N, p += r * Y, d += r * z, y += r * H, g += r * F, v += r * q, b += r * J, _ += r * X, m += r * K, w += r * G, S += r * W, k += r * V, A += r * Z, h += (r = e[5]) * I, f += r * j, l += r * D, p += r * N, d += r * Y, y += r * z, g += r * H, v += r * F, b += r * q, _ += r * J, m += r * X, w += r * K, S += r * G, k += r * W, A += r * V, T += r * Z, f += (r = e[6]) * I, l += r * j, p += r * D, d += r * N, y += r * Y, g += r * z, v += r * H, b += r * F, _ += r * q, m += r * J, w += r * X, S += r * K, k += r * G, A += r * W, T += r * V, E += r * Z, l += (r = e[7]) * I, p += r * j, d += r * D, y += r * N, g += r * Y, v += r * z, b += r * H, _ += r * F, m += r * q, w += r * J, S += r * X, k += r * K, A += r * G, T += r * W, E += r * V, P += r * Z, p += (r = e[8]) * I, d += r * j, y += r * D, g += r * N, v += r * Y, b += r * z, _ += r * H, m += r * F, w += r * q, S += r * J, k += r * X, A += r * K, T += r * G, E += r * W, P += r * V, O += r * Z, d += (r = e[9]) * I, y += r * j, g += r * D, v += r * N, b += r * Y, _ += r * z, m += r * H, w += r * F, S += r * q, k += r * J, A += r * X, T += r * K, E += r * G, P += r * W, O += r * V, C += r * Z, y += (r = e[10]) * I, g += r * j, v += r * D, b += r * N, _ += r * Y, m += r * z, w += r * H, S += r * F, k += r * q, A += r * J, T += r * X, E += r * K, P += r * G, O += r * W, C += r * V, x += r * Z, g += (r = e[11]) * I, v += r * j, b += r * D, _ += r * N, m += r * Y, w += r * z, S += r * H, k += r * F, A += r * q, T += r * J, E += r * X, P += r * K, O += r * G, C += r * W, x += r * V, R += r * Z, v += (r = e[12]) * I, b += r * j, _ += r * D, m += r * N, w += r * Y, S += r * z, k += r * H, A += r * F, T += r * q, E += r * J, P += r * X, O += r * K, C += r * G, x += r * W, R += r * V, M += r * Z, b += (r = e[13]) * I, _ += r * j, m += r * D, w += r * N, S += r * Y, k += r * z, A += r * H, T += r * F, E += r * q, P += r * J, O += r * X, C += r * K, x += r * G, R += r * W, M += r * V, U += r * Z, _ += (r = e[14]) * I, m += r * j, w += r * D, S += r * N, k += r * Y, A += r * z, T += r * H, E += r * F, P += r * q, O += r * J, C += r * X, x += r * K, R += r * G, M += r * W, U += r * V, L += r * Z, m += (r = e[15]) * I, s += 38 * (S += r * D), a += 38 * (k += r * N), u += 38 * (A += r * Y), c += 38 * (T += r * z), h += 38 * (E += r * H), f += 38 * (P += r * F), l += 38 * (O += r * q), p += 38 * (C += r * J), d += 38 * (x += r * X), y += 38 * (R += r * K), g += 38 * (M += r * G), v += 38 * (U += r * W), b += 38 * (L += r * V), _ += 38 * (B += r * Z), o = (r = (o += 38 * (w += r * j)) + (i = 1) + 65535) - 65536 * (i = Math.floor(r / 65536)), s = (r = s + i + 65535) - 65536 * (i = Math.floor(r / 65536)), a = (r = a + i + 65535) - 65536 * (i = Math.floor(r / 65536)), u = (r = u + i + 65535) - 65536 * (i = Math.floor(r / 65536)), c = (r = c + i + 65535) - 65536 * (i = Math.floor(r / 65536)), h = (r = h + i + 65535) - 65536 * (i = Math.floor(r / 65536)), f = (r = f + i + 65535) - 65536 * (i = Math.floor(r / 65536)), l = (r = l + i + 65535) - 65536 * (i = Math.floor(r / 65536)), p = (r = p + i + 65535) - 65536 * (i = Math.floor(r / 65536)), d = (r = d + i + 65535) - 65536 * (i = Math.floor(r / 65536)), y = (r = y + i + 65535) - 65536 * (i = Math.floor(r / 65536)), g = (r = g + i + 65535) - 65536 * (i = Math.floor(r / 65536)), v = (r = v + i + 65535) - 65536 * (i = Math.floor(r / 65536)), b = (r = b + i + 65535) - 65536 * (i = Math.floor(r / 65536)), _ = (r = _ + i + 65535) - 65536 * (i = Math.floor(r / 65536)), m = (r = m + i + 65535) - 65536 * (i = Math.floor(r / 65536)), o = (r = (o += i - 1 + 37 * (i - 1)) + (i = 1) + 65535) - 65536 * (i = Math.floor(r / 65536)), s = (r = s + i + 65535) - 65536 * (i = Math.floor(r / 65536)), a = (r = a + i + 65535) - 65536 * (i = Math.floor(r / 65536)), u = (r = u + i + 65535) - 65536 * (i = Math.floor(r / 65536)), c = (r = c + i + 65535) - 65536 * (i = Math.floor(r / 65536)), h = (r = h + i + 65535) - 65536 * (i = Math.floor(r / 65536)), f = (r = f + i + 65535) - 65536 * (i = Math.floor(r / 65536)), l = (r = l + i + 65535) - 65536 * (i = Math.floor(r / 65536)), p = (r = p + i + 65535) - 65536 * (i = Math.floor(r / 65536)), d = (r = d + i + 65535) - 65536 * (i = Math.floor(r / 65536)), y = (r = y + i + 65535) - 65536 * (i = Math.floor(r / 65536)), g = (r = g + i + 65535) - 65536 * (i = Math.floor(r / 65536)), v = (r = v + i + 65535) - 65536 * (i = Math.floor(r / 65536)), b = (r = b + i + 65535) - 65536 * (i = Math.floor(r / 65536)), _ = (r = _ + i + 65535) - 65536 * (i = Math.floor(r / 65536)), m = (r = m + i + 65535) - 65536 * (i = Math.floor(r / 65536)), o += i - 1 + 37 * (i - 1), t[0] = o, t[1] = s, t[2] = a, t[3] = u, t[4] = c, t[5] = h, t[6] = f, t[7] = l, t[8] = p, t[9] = d, t[10] = y, t[11] = g, t[12] = v, t[13] = b, t[14] = _, t[15] = m;
      }

      function Y(t, e) {
        N(t, e, e);
      }

      function z(t, n) {
        var r,
            i = e();

        for (r = 0; r < 16; r++) {
          i[r] = n[r];
        }

        for (r = 253; r >= 0; r--) {
          Y(i, i), 2 !== r && 4 !== r && N(i, i, n);
        }

        for (r = 0; r < 16; r++) {
          t[r] = i[r];
        }
      }

      function H(t, n, r) {
        var i,
            o,
            s = new Uint8Array(32),
            a = new Float64Array(80),
            c = e(),
            h = e(),
            f = e(),
            l = e(),
            p = e(),
            d = e();

        for (o = 0; o < 31; o++) {
          s[o] = n[o];
        }

        for (s[31] = 127 & n[31] | 64, s[0] &= 248, I(a, r), o = 0; o < 16; o++) {
          h[o] = a[o], l[o] = c[o] = f[o] = 0;
        }

        for (c[0] = l[0] = 1, o = 254; o >= 0; --o) {
          M(c, h, i = s[o >>> 3] >>> (7 & o) & 1), M(f, l, i), j(p, c, f), D(c, c, f), j(f, h, l), D(h, h, l), Y(l, p), Y(d, c), N(c, f, c), N(f, h, p), j(p, c, f), D(c, c, f), Y(h, c), D(f, l, d), N(c, f, u), j(c, c, l), N(f, f, c), N(c, l, d), N(l, h, a), Y(h, p), M(c, h, i), M(f, l, i);
        }

        for (o = 0; o < 16; o++) {
          a[o + 16] = c[o], a[o + 32] = f[o], a[o + 48] = h[o], a[o + 64] = l[o];
        }

        var y = a.subarray(32),
            g = a.subarray(16);
        return z(y, y), N(g, g, y), U(t, g), 0;
      }

      function F(t, e) {
        return H(t, e, o);
      }

      function q(t, e) {
        return r(e, 32), F(t, e);
      }

      function J(t, e, n) {
        var r = new Uint8Array(32);
        return H(r, n, e), _(t, i, r, m);
      }

      T.prototype.blocks = function (t, e, n) {
        for (var r, i, o, s, a, u, c, h, f, l, p, d, y, g, v, b, _, m, w, S = this.fin ? 0 : 2048, k = this.h[0], A = this.h[1], T = this.h[2], E = this.h[3], P = this.h[4], O = this.h[5], C = this.h[6], x = this.h[7], R = this.h[8], M = this.h[9], U = this.r[0], L = this.r[1], B = this.r[2], I = this.r[3], j = this.r[4], D = this.r[5], N = this.r[6], Y = this.r[7], z = this.r[8], H = this.r[9]; n >= 16;) {
          l = f = 0, l += (k += 8191 & (r = 255 & t[e + 0] | (255 & t[e + 1]) << 8)) * U, l += (A += 8191 & (r >>> 13 | (i = 255 & t[e + 2] | (255 & t[e + 3]) << 8) << 3)) * (5 * H), l += (T += 8191 & (i >>> 10 | (o = 255 & t[e + 4] | (255 & t[e + 5]) << 8) << 6)) * (5 * z), l += (E += 8191 & (o >>> 7 | (s = 255 & t[e + 6] | (255 & t[e + 7]) << 8) << 9)) * (5 * Y), f = (l += (P += 8191 & (s >>> 4 | (a = 255 & t[e + 8] | (255 & t[e + 9]) << 8) << 12)) * (5 * N)) >>> 13, l &= 8191, l += (O += a >>> 1 & 8191) * (5 * D), l += (C += 8191 & (a >>> 14 | (u = 255 & t[e + 10] | (255 & t[e + 11]) << 8) << 2)) * (5 * j), l += (x += 8191 & (u >>> 11 | (c = 255 & t[e + 12] | (255 & t[e + 13]) << 8) << 5)) * (5 * I), l += (R += 8191 & (c >>> 8 | (h = 255 & t[e + 14] | (255 & t[e + 15]) << 8) << 8)) * (5 * B), p = f += (l += (M += h >>> 5 | S) * (5 * L)) >>> 13, p += k * L, p += A * U, p += T * (5 * H), p += E * (5 * z), f = (p += P * (5 * Y)) >>> 13, p &= 8191, p += O * (5 * N), p += C * (5 * D), p += x * (5 * j), p += R * (5 * I), f += (p += M * (5 * B)) >>> 13, p &= 8191, d = f, d += k * B, d += A * L, d += T * U, d += E * (5 * H), f = (d += P * (5 * z)) >>> 13, d &= 8191, d += O * (5 * Y), d += C * (5 * N), d += x * (5 * D), d += R * (5 * j), y = f += (d += M * (5 * I)) >>> 13, y += k * I, y += A * B, y += T * L, y += E * U, f = (y += P * (5 * H)) >>> 13, y &= 8191, y += O * (5 * z), y += C * (5 * Y), y += x * (5 * N), y += R * (5 * D), g = f += (y += M * (5 * j)) >>> 13, g += k * j, g += A * I, g += T * B, g += E * L, f = (g += P * U) >>> 13, g &= 8191, g += O * (5 * H), g += C * (5 * z), g += x * (5 * Y), g += R * (5 * N), v = f += (g += M * (5 * D)) >>> 13, v += k * D, v += A * j, v += T * I, v += E * B, f = (v += P * L) >>> 13, v &= 8191, v += O * U, v += C * (5 * H), v += x * (5 * z), v += R * (5 * Y), b = f += (v += M * (5 * N)) >>> 13, b += k * N, b += A * D, b += T * j, b += E * I, f = (b += P * B) >>> 13, b &= 8191, b += O * L, b += C * U, b += x * (5 * H), b += R * (5 * z), _ = f += (b += M * (5 * Y)) >>> 13, _ += k * Y, _ += A * N, _ += T * D, _ += E * j, f = (_ += P * I) >>> 13, _ &= 8191, _ += O * B, _ += C * L, _ += x * U, _ += R * (5 * H), m = f += (_ += M * (5 * z)) >>> 13, m += k * z, m += A * Y, m += T * N, m += E * D, f = (m += P * j) >>> 13, m &= 8191, m += O * I, m += C * B, m += x * L, m += R * U, w = f += (m += M * (5 * H)) >>> 13, w += k * H, w += A * z, w += T * Y, w += E * N, f = (w += P * D) >>> 13, w &= 8191, w += O * j, w += C * I, w += x * B, w += R * L, k = l = 8191 & (f = (f = ((f += (w += M * U) >>> 13) << 2) + f | 0) + (l &= 8191) | 0), A = p += f >>>= 13, T = d &= 8191, E = y &= 8191, P = g &= 8191, O = v &= 8191, C = b &= 8191, x = _ &= 8191, R = m &= 8191, M = w &= 8191, e += 16, n -= 16;
        }

        this.h[0] = k, this.h[1] = A, this.h[2] = T, this.h[3] = E, this.h[4] = P, this.h[5] = O, this.h[6] = C, this.h[7] = x, this.h[8] = R, this.h[9] = M;
      }, T.prototype.finish = function (t, e) {
        var n,
            r,
            i,
            o,
            s = new Uint16Array(10);

        if (this.leftover) {
          for (o = this.leftover, this.buffer[o++] = 1; o < 16; o++) {
            this.buffer[o] = 0;
          }

          this.fin = 1, this.blocks(this.buffer, 0, 16);
        }

        for (n = this.h[1] >>> 13, this.h[1] &= 8191, o = 2; o < 10; o++) {
          this.h[o] += n, n = this.h[o] >>> 13, this.h[o] &= 8191;
        }

        for (this.h[0] += 5 * n, n = this.h[0] >>> 13, this.h[0] &= 8191, this.h[1] += n, n = this.h[1] >>> 13, this.h[1] &= 8191, this.h[2] += n, s[0] = this.h[0] + 5, n = s[0] >>> 13, s[0] &= 8191, o = 1; o < 10; o++) {
          s[o] = this.h[o] + n, n = s[o] >>> 13, s[o] &= 8191;
        }

        for (s[9] -= 8192, r = (1 ^ n) - 1, o = 0; o < 10; o++) {
          s[o] &= r;
        }

        for (r = ~r, o = 0; o < 10; o++) {
          this.h[o] = this.h[o] & r | s[o];
        }

        for (this.h[0] = 65535 & (this.h[0] | this.h[1] << 13), this.h[1] = 65535 & (this.h[1] >>> 3 | this.h[2] << 10), this.h[2] = 65535 & (this.h[2] >>> 6 | this.h[3] << 7), this.h[3] = 65535 & (this.h[3] >>> 9 | this.h[4] << 4), this.h[4] = 65535 & (this.h[4] >>> 12 | this.h[5] << 1 | this.h[6] << 14), this.h[5] = 65535 & (this.h[6] >>> 2 | this.h[7] << 11), this.h[6] = 65535 & (this.h[7] >>> 5 | this.h[8] << 8), this.h[7] = 65535 & (this.h[8] >>> 8 | this.h[9] << 5), i = this.h[0] + this.pad[0], this.h[0] = 65535 & i, o = 1; o < 8; o++) {
          i = (this.h[o] + this.pad[o] | 0) + (i >>> 16) | 0, this.h[o] = 65535 & i;
        }

        t[e + 0] = this.h[0] >>> 0 & 255, t[e + 1] = this.h[0] >>> 8 & 255, t[e + 2] = this.h[1] >>> 0 & 255, t[e + 3] = this.h[1] >>> 8 & 255, t[e + 4] = this.h[2] >>> 0 & 255, t[e + 5] = this.h[2] >>> 8 & 255, t[e + 6] = this.h[3] >>> 0 & 255, t[e + 7] = this.h[3] >>> 8 & 255, t[e + 8] = this.h[4] >>> 0 & 255, t[e + 9] = this.h[4] >>> 8 & 255, t[e + 10] = this.h[5] >>> 0 & 255, t[e + 11] = this.h[5] >>> 8 & 255, t[e + 12] = this.h[6] >>> 0 & 255, t[e + 13] = this.h[6] >>> 8 & 255, t[e + 14] = this.h[7] >>> 0 & 255, t[e + 15] = this.h[7] >>> 8 & 255;
      }, T.prototype.update = function (t, e, n) {
        var r, i;

        if (this.leftover) {
          for ((i = 16 - this.leftover) > n && (i = n), r = 0; r < i; r++) {
            this.buffer[this.leftover + r] = t[e + r];
          }

          if (n -= i, e += i, this.leftover += i, this.leftover < 16) return;
          this.blocks(this.buffer, 0, 16), this.leftover = 0;
        }

        if (n >= 16 && (i = n - n % 16, this.blocks(t, e, i), e += i, n -= i), n) {
          for (r = 0; r < n; r++) {
            this.buffer[this.leftover + r] = t[e + r];
          }

          this.leftover += n;
        }
      };
      var X = O,
          K = C;
      var G = [1116352408, 3609767458, 1899447441, 602891725, 3049323471, 3964484399, 3921009573, 2173295548, 961987163, 4081628472, 1508970993, 3053834265, 2453635748, 2937671579, 2870763221, 3664609560, 3624381080, 2734883394, 310598401, 1164996542, 607225278, 1323610764, 1426881987, 3590304994, 1925078388, 4068182383, 2162078206, 991336113, 2614888103, 633803317, 3248222580, 3479774868, 3835390401, 2666613458, 4022224774, 944711139, 264347078, 2341262773, 604807628, 2007800933, 770255983, 1495990901, 1249150122, 1856431235, 1555081692, 3175218132, 1996064986, 2198950837, 2554220882, 3999719339, 2821834349, 766784016, 2952996808, 2566594879, 3210313671, 3203337956, 3336571891, 1034457026, 3584528711, 2466948901, 113926993, 3758326383, 338241895, 168717936, 666307205, 1188179964, 773529912, 1546045734, 1294757372, 1522805485, 1396182291, 2643833823, 1695183700, 2343527390, 1986661051, 1014477480, 2177026350, 1206759142, 2456956037, 344077627, 2730485921, 1290863460, 2820302411, 3158454273, 3259730800, 3505952657, 3345764771, 106217008, 3516065817, 3606008344, 3600352804, 1432725776, 4094571909, 1467031594, 275423344, 851169720, 430227734, 3100823752, 506948616, 1363258195, 659060556, 3750685593, 883997877, 3785050280, 958139571, 3318307427, 1322822218, 3812723403, 1537002063, 2003034995, 1747873779, 3602036899, 1955562222, 1575990012, 2024104815, 1125592928, 2227730452, 2716904306, 2361852424, 442776044, 2428436474, 593698344, 2756734187, 3733110249, 3204031479, 2999351573, 3329325298, 3815920427, 3391569614, 3928383900, 3515267271, 566280711, 3940187606, 3454069534, 4118630271, 4000239992, 116418474, 1914138554, 174292421, 2731055270, 289380356, 3203993006, 460393269, 320620315, 685471733, 587496836, 852142971, 1086792851, 1017036298, 365543100, 1126000580, 2618297676, 1288033470, 3409855158, 1501505948, 4234509866, 1607167915, 987167468, 1816402316, 1246189591];

      function W(t, e, n, r) {
        for (var i, o, s, a, u, c, h, f, l, p, d, y, g, v, b, _, m, w, S, k, A, T, E, P, O, C, x = new Int32Array(16), R = new Int32Array(16), M = t[0], U = t[1], L = t[2], B = t[3], I = t[4], j = t[5], D = t[6], N = t[7], Y = e[0], z = e[1], H = e[2], F = e[3], q = e[4], J = e[5], X = e[6], K = e[7], W = 0; r >= 128;) {
          for (S = 0; S < 16; S++) {
            k = 8 * S + W, x[S] = n[k + 0] << 24 | n[k + 1] << 16 | n[k + 2] << 8 | n[k + 3], R[S] = n[k + 4] << 24 | n[k + 5] << 16 | n[k + 6] << 8 | n[k + 7];
          }

          for (S = 0; S < 80; S++) {
            if (i = M, o = U, s = L, a = B, u = I, c = j, h = D, N, l = Y, p = z, d = H, y = F, g = q, v = J, b = X, K, E = 65535 & (T = K), P = T >>> 16, O = 65535 & (A = N), C = A >>> 16, E += 65535 & (T = (q >>> 14 | I << 18) ^ (q >>> 18 | I << 14) ^ (I >>> 9 | q << 23)), P += T >>> 16, O += 65535 & (A = (I >>> 14 | q << 18) ^ (I >>> 18 | q << 14) ^ (q >>> 9 | I << 23)), C += A >>> 16, E += 65535 & (T = q & J ^ ~q & X), P += T >>> 16, O += 65535 & (A = I & j ^ ~I & D), C += A >>> 16, A = G[2 * S], E += 65535 & (T = G[2 * S + 1]), P += T >>> 16, O += 65535 & A, C += A >>> 16, A = x[S % 16], P += (T = R[S % 16]) >>> 16, O += 65535 & A, C += A >>> 16, O += (P += (E += 65535 & T) >>> 16) >>> 16, E = 65535 & (T = w = 65535 & E | P << 16), P = T >>> 16, O = 65535 & (A = m = 65535 & O | (C += O >>> 16) << 16), C = A >>> 16, E += 65535 & (T = (Y >>> 28 | M << 4) ^ (M >>> 2 | Y << 30) ^ (M >>> 7 | Y << 25)), P += T >>> 16, O += 65535 & (A = (M >>> 28 | Y << 4) ^ (Y >>> 2 | M << 30) ^ (Y >>> 7 | M << 25)), C += A >>> 16, P += (T = Y & z ^ Y & H ^ z & H) >>> 16, O += 65535 & (A = M & U ^ M & L ^ U & L), C += A >>> 16, f = 65535 & (O += (P += (E += 65535 & T) >>> 16) >>> 16) | (C += O >>> 16) << 16, _ = 65535 & E | P << 16, E = 65535 & (T = y), P = T >>> 16, O = 65535 & (A = a), C = A >>> 16, P += (T = w) >>> 16, O += 65535 & (A = m), C += A >>> 16, U = i, L = o, B = s, I = a = 65535 & (O += (P += (E += 65535 & T) >>> 16) >>> 16) | (C += O >>> 16) << 16, j = u, D = c, N = h, M = f, z = l, H = p, F = d, q = y = 65535 & E | P << 16, J = g, X = v, K = b, Y = _, S % 16 == 15) for (k = 0; k < 16; k++) {
              A = x[k], E = 65535 & (T = R[k]), P = T >>> 16, O = 65535 & A, C = A >>> 16, A = x[(k + 9) % 16], E += 65535 & (T = R[(k + 9) % 16]), P += T >>> 16, O += 65535 & A, C += A >>> 16, m = x[(k + 1) % 16], E += 65535 & (T = ((w = R[(k + 1) % 16]) >>> 1 | m << 31) ^ (w >>> 8 | m << 24) ^ (w >>> 7 | m << 25)), P += T >>> 16, O += 65535 & (A = (m >>> 1 | w << 31) ^ (m >>> 8 | w << 24) ^ m >>> 7), C += A >>> 16, m = x[(k + 14) % 16], P += (T = ((w = R[(k + 14) % 16]) >>> 19 | m << 13) ^ (m >>> 29 | w << 3) ^ (w >>> 6 | m << 26)) >>> 16, O += 65535 & (A = (m >>> 19 | w << 13) ^ (w >>> 29 | m << 3) ^ m >>> 6), C += A >>> 16, C += (O += (P += (E += 65535 & T) >>> 16) >>> 16) >>> 16, x[k] = 65535 & O | C << 16, R[k] = 65535 & E | P << 16;
            }
          }

          E = 65535 & (T = Y), P = T >>> 16, O = 65535 & (A = M), C = A >>> 16, A = t[0], P += (T = e[0]) >>> 16, O += 65535 & A, C += A >>> 16, C += (O += (P += (E += 65535 & T) >>> 16) >>> 16) >>> 16, t[0] = M = 65535 & O | C << 16, e[0] = Y = 65535 & E | P << 16, E = 65535 & (T = z), P = T >>> 16, O = 65535 & (A = U), C = A >>> 16, A = t[1], P += (T = e[1]) >>> 16, O += 65535 & A, C += A >>> 16, C += (O += (P += (E += 65535 & T) >>> 16) >>> 16) >>> 16, t[1] = U = 65535 & O | C << 16, e[1] = z = 65535 & E | P << 16, E = 65535 & (T = H), P = T >>> 16, O = 65535 & (A = L), C = A >>> 16, A = t[2], P += (T = e[2]) >>> 16, O += 65535 & A, C += A >>> 16, C += (O += (P += (E += 65535 & T) >>> 16) >>> 16) >>> 16, t[2] = L = 65535 & O | C << 16, e[2] = H = 65535 & E | P << 16, E = 65535 & (T = F), P = T >>> 16, O = 65535 & (A = B), C = A >>> 16, A = t[3], P += (T = e[3]) >>> 16, O += 65535 & A, C += A >>> 16, C += (O += (P += (E += 65535 & T) >>> 16) >>> 16) >>> 16, t[3] = B = 65535 & O | C << 16, e[3] = F = 65535 & E | P << 16, E = 65535 & (T = q), P = T >>> 16, O = 65535 & (A = I), C = A >>> 16, A = t[4], P += (T = e[4]) >>> 16, O += 65535 & A, C += A >>> 16, C += (O += (P += (E += 65535 & T) >>> 16) >>> 16) >>> 16, t[4] = I = 65535 & O | C << 16, e[4] = q = 65535 & E | P << 16, E = 65535 & (T = J), P = T >>> 16, O = 65535 & (A = j), C = A >>> 16, A = t[5], P += (T = e[5]) >>> 16, O += 65535 & A, C += A >>> 16, C += (O += (P += (E += 65535 & T) >>> 16) >>> 16) >>> 16, t[5] = j = 65535 & O | C << 16, e[5] = J = 65535 & E | P << 16, E = 65535 & (T = X), P = T >>> 16, O = 65535 & (A = D), C = A >>> 16, A = t[6], P += (T = e[6]) >>> 16, O += 65535 & A, C += A >>> 16, C += (O += (P += (E += 65535 & T) >>> 16) >>> 16) >>> 16, t[6] = D = 65535 & O | C << 16, e[6] = X = 65535 & E | P << 16, E = 65535 & (T = K), P = T >>> 16, O = 65535 & (A = N), C = A >>> 16, A = t[7], P += (T = e[7]) >>> 16, O += 65535 & A, C += A >>> 16, C += (O += (P += (E += 65535 & T) >>> 16) >>> 16) >>> 16, t[7] = N = 65535 & O | C << 16, e[7] = K = 65535 & E | P << 16, W += 128, r -= 128;
        }

        return r;
      }

      function V(t, e, n) {
        var r,
            i = new Int32Array(8),
            o = new Int32Array(8),
            s = new Uint8Array(256),
            a = n;

        for (i[0] = 1779033703, i[1] = 3144134277, i[2] = 1013904242, i[3] = 2773480762, i[4] = 1359893119, i[5] = 2600822924, i[6] = 528734635, i[7] = 1541459225, o[0] = 4089235720, o[1] = 2227873595, o[2] = 4271175723, o[3] = 1595750129, o[4] = 2917565137, o[5] = 725511199, o[6] = 4215389547, o[7] = 327033209, W(i, o, e, n), n %= 128, r = 0; r < n; r++) {
          s[r] = e[a - n + r];
        }

        for (s[n] = 128, s[(n = 256 - 128 * (n < 112 ? 1 : 0)) - 9] = 0, d(s, n - 8, a / 536870912 | 0, a << 3), W(i, o, s, n), r = 0; r < 8; r++) {
          d(t, 8 * r, i[r], o[r]);
        }

        return 0;
      }

      function Z(t, n) {
        var r = e(),
            i = e(),
            o = e(),
            s = e(),
            a = e(),
            u = e(),
            c = e(),
            f = e(),
            l = e();
        D(r, t[1], t[0]), D(l, n[1], n[0]), N(r, r, l), j(i, t[0], t[1]), j(l, n[0], n[1]), N(i, i, l), N(o, t[3], n[3]), N(o, o, h), N(s, t[2], n[2]), j(s, s, s), D(a, i, r), D(u, s, o), j(c, s, o), j(f, i, r), N(t[0], a, u), N(t[1], f, c), N(t[2], c, u), N(t[3], a, f);
      }

      function Q(t, e, n) {
        var r;

        for (r = 0; r < 4; r++) {
          M(t[r], e[r], n);
        }
      }

      function $(t, n) {
        var r = e(),
            i = e(),
            o = e();
        z(o, n[2]), N(r, n[0], o), N(i, n[1], o), U(t, i), t[31] ^= B(r) << 7;
      }

      function tt(t, e, n) {
        var r, i;

        for (x(t[0], s), x(t[1], a), x(t[2], a), x(t[3], s), i = 255; i >= 0; --i) {
          Q(t, e, r = n[i / 8 | 0] >> (7 & i) & 1), Z(e, t), Z(t, t), Q(t, e, r);
        }
      }

      function et(t, n) {
        var r = [e(), e(), e(), e()];
        x(r[0], f), x(r[1], l), x(r[2], a), N(r[3], f, l), tt(t, r, n);
      }

      function nt(t, n, i) {
        var o,
            s = new Uint8Array(64),
            a = [e(), e(), e(), e()];

        for (i || r(n, 32), V(s, n, 32), s[0] &= 248, s[31] &= 127, s[31] |= 64, et(a, s), $(t, a), o = 0; o < 32; o++) {
          n[o + 32] = t[o];
        }

        return 0;
      }

      var rt = new Float64Array([237, 211, 245, 92, 26, 99, 18, 88, 214, 156, 247, 162, 222, 249, 222, 20, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 16]);

      function it(t, e) {
        var n, r, i, o;

        for (r = 63; r >= 32; --r) {
          for (n = 0, i = r - 32, o = r - 12; i < o; ++i) {
            e[i] += n - 16 * e[r] * rt[i - (r - 32)], n = e[i] + 128 >> 8, e[i] -= 256 * n;
          }

          e[i] += n, e[r] = 0;
        }

        for (n = 0, i = 0; i < 32; i++) {
          e[i] += n - (e[31] >> 4) * rt[i], n = e[i] >> 8, e[i] &= 255;
        }

        for (i = 0; i < 32; i++) {
          e[i] -= n * rt[i];
        }

        for (r = 0; r < 32; r++) {
          e[r + 1] += e[r] >> 8, t[r] = 255 & e[r];
        }
      }

      function ot(t) {
        var e,
            n = new Float64Array(64);

        for (e = 0; e < 64; e++) {
          n[e] = t[e];
        }

        for (e = 0; e < 64; e++) {
          t[e] = 0;
        }

        it(t, n);
      }

      function st(t, n, r, i) {
        var o,
            s,
            a = new Uint8Array(64),
            u = new Uint8Array(64),
            c = new Uint8Array(64),
            h = new Float64Array(64),
            f = [e(), e(), e(), e()];
        V(a, i, 32), a[0] &= 248, a[31] &= 127, a[31] |= 64;
        var l = r + 64;

        for (o = 0; o < r; o++) {
          t[64 + o] = n[o];
        }

        for (o = 0; o < 32; o++) {
          t[32 + o] = a[32 + o];
        }

        for (V(c, t.subarray(32), r + 32), ot(c), et(f, c), $(t, f), o = 32; o < 64; o++) {
          t[o] = i[o];
        }

        for (V(u, t, r + 64), ot(u), o = 0; o < 64; o++) {
          h[o] = 0;
        }

        for (o = 0; o < 32; o++) {
          h[o] = c[o];
        }

        for (o = 0; o < 32; o++) {
          for (s = 0; s < 32; s++) {
            h[o + s] += u[o] * a[s];
          }
        }

        return it(t.subarray(32), h), l;
      }

      function at(t, n) {
        var r = e(),
            i = e(),
            o = e(),
            u = e(),
            h = e(),
            f = e(),
            l = e();
        return x(t[2], a), I(t[1], n), Y(o, t[1]), N(u, o, c), D(o, o, t[2]), j(u, t[2], u), Y(h, u), Y(f, h), N(l, f, h), N(r, l, o), N(r, r, u), function (t, n) {
          var r,
              i = e();

          for (r = 0; r < 16; r++) {
            i[r] = n[r];
          }

          for (r = 250; r >= 0; r--) {
            Y(i, i), 1 !== r && N(i, i, n);
          }

          for (r = 0; r < 16; r++) {
            t[r] = i[r];
          }
        }(r, r), N(r, r, o), N(r, r, u), N(r, r, u), N(t[0], r, u), Y(i, t[0]), N(i, i, u), L(i, o) && N(t[0], t[0], p), Y(i, t[0]), N(i, i, u), L(i, o) ? -1 : (B(t[0]) === n[31] >> 7 && D(t[0], s, t[0]), N(t[3], t[0], t[1]), 0);
      }

      function ut(t, n, r, i) {
        var o,
            s = new Uint8Array(32),
            a = new Uint8Array(64),
            u = [e(), e(), e(), e()],
            c = [e(), e(), e(), e()];
        if (-1, r < 64) return -1;
        if (at(c, i)) return -1;

        for (o = 0; o < r; o++) {
          t[o] = n[o];
        }

        for (o = 0; o < 32; o++) {
          t[o + 32] = i[o];
        }

        if (V(a, t, r), ot(a), tt(u, c, a), et(c, n.subarray(32)), Z(u, c), $(s, u), r -= 64, v(n, 0, s, 0)) {
          for (o = 0; o < r; o++) {
            t[o] = 0;
          }

          return -1;
        }

        for (o = 0; o < r; o++) {
          t[o] = n[o + 64];
        }

        return r;
      }

      var ct = 32,
          ht = 24,
          ft = 32,
          lt = 32,
          pt = ht;

      function dt(t, e) {
        if (t.length !== ct) throw new Error("bad key size");
        if (e.length !== ht) throw new Error("bad nonce size");
      }

      function yt() {
        for (var t = 0; t < arguments.length; t++) {
          if (!(arguments[t] instanceof Uint8Array)) throw new TypeError("unexpected type, use Uint8Array");
        }
      }

      function gt(t) {
        for (var e = 0; e < t.length; e++) {
          t[e] = 0;
        }
      }

      t.lowlevel = {
        crypto_core_hsalsa20: _,
        crypto_stream_xor: A,
        crypto_stream: k,
        crypto_stream_salsa20_xor: w,
        crypto_stream_salsa20: S,
        crypto_onetimeauth: E,
        crypto_onetimeauth_verify: P,
        crypto_verify_16: g,
        crypto_verify_32: v,
        crypto_secretbox: O,
        crypto_secretbox_open: C,
        crypto_scalarmult: H,
        crypto_scalarmult_base: F,
        crypto_box_beforenm: J,
        crypto_box_afternm: X,
        crypto_box: function crypto_box(t, e, n, r, i, o) {
          var s = new Uint8Array(32);
          return J(s, i, o), X(t, e, n, r, s);
        },
        crypto_box_open: function crypto_box_open(t, e, n, r, i, o) {
          var s = new Uint8Array(32);
          return J(s, i, o), K(t, e, n, r, s);
        },
        crypto_box_keypair: q,
        crypto_hash: V,
        crypto_sign: st,
        crypto_sign_keypair: nt,
        crypto_sign_open: ut,
        crypto_secretbox_KEYBYTES: ct,
        crypto_secretbox_NONCEBYTES: ht,
        crypto_secretbox_ZEROBYTES: 32,
        crypto_secretbox_BOXZEROBYTES: 16,
        crypto_scalarmult_BYTES: 32,
        crypto_scalarmult_SCALARBYTES: 32,
        crypto_box_PUBLICKEYBYTES: ft,
        crypto_box_SECRETKEYBYTES: lt,
        crypto_box_BEFORENMBYTES: 32,
        crypto_box_NONCEBYTES: pt,
        crypto_box_ZEROBYTES: 32,
        crypto_box_BOXZEROBYTES: 16,
        crypto_sign_BYTES: 64,
        crypto_sign_PUBLICKEYBYTES: 32,
        crypto_sign_SECRETKEYBYTES: 64,
        crypto_sign_SEEDBYTES: 32,
        crypto_hash_BYTES: 64
      }, t.randomBytes = function (t) {
        var e = new Uint8Array(t);
        return r(e, t), e;
      }, t.secretbox = function (t, e, n) {
        yt(t, e, n), dt(n, e);

        for (var r = new Uint8Array(32 + t.length), i = new Uint8Array(r.length), o = 0; o < t.length; o++) {
          r[o + 32] = t[o];
        }

        return O(i, r, r.length, e, n), i.subarray(16);
      }, t.secretbox.open = function (t, e, n) {
        yt(t, e, n), dt(n, e);

        for (var r = new Uint8Array(16 + t.length), i = new Uint8Array(r.length), o = 0; o < t.length; o++) {
          r[o + 16] = t[o];
        }

        return r.length < 32 ? null : 0 !== C(i, r, r.length, e, n) ? null : i.subarray(32);
      }, t.secretbox.keyLength = ct, t.secretbox.nonceLength = ht, t.secretbox.overheadLength = 16, t.scalarMult = function (t, e) {
        if (yt(t, e), 32 !== t.length) throw new Error("bad n size");
        if (32 !== e.length) throw new Error("bad p size");
        var n = new Uint8Array(32);
        return H(n, t, e), n;
      }, t.scalarMult.base = function (t) {
        if (yt(t), 32 !== t.length) throw new Error("bad n size");
        var e = new Uint8Array(32);
        return F(e, t), e;
      }, t.scalarMult.scalarLength = 32, t.scalarMult.groupElementLength = 32, t.box = function (e, n, r, i) {
        var o = t.box.before(r, i);
        return t.secretbox(e, n, o);
      }, t.box.before = function (t, e) {
        yt(t, e), function (t, e) {
          if (t.length !== ft) throw new Error("bad public key size");
          if (e.length !== lt) throw new Error("bad secret key size");
        }(t, e);
        var n = new Uint8Array(32);
        return J(n, t, e), n;
      }, t.box.after = t.secretbox, t.box.open = function (e, n, r, i) {
        var o = t.box.before(r, i);
        return t.secretbox.open(e, n, o);
      }, t.box.open.after = t.secretbox.open, t.box.keyPair = function () {
        var t = new Uint8Array(ft),
            e = new Uint8Array(lt);
        return q(t, e), {
          publicKey: t,
          secretKey: e
        };
      }, t.box.keyPair.fromSecretKey = function (t) {
        if (yt(t), t.length !== lt) throw new Error("bad secret key size");
        var e = new Uint8Array(ft);
        return F(e, t), {
          publicKey: e,
          secretKey: new Uint8Array(t)
        };
      }, t.box.publicKeyLength = ft, t.box.secretKeyLength = lt, t.box.sharedKeyLength = 32, t.box.nonceLength = pt, t.box.overheadLength = t.secretbox.overheadLength, t.sign = function (t, e) {
        if (yt(t, e), 64 !== e.length) throw new Error("bad secret key size");
        var n = new Uint8Array(64 + t.length);
        return st(n, t, t.length, e), n;
      }, t.sign.open = function (t, e) {
        if (yt(t, e), 32 !== e.length) throw new Error("bad public key size");
        var n = new Uint8Array(t.length),
            r = ut(n, t, t.length, e);
        if (r < 0) return null;

        for (var i = new Uint8Array(r), o = 0; o < i.length; o++) {
          i[o] = n[o];
        }

        return i;
      }, t.sign.detached = function (e, n) {
        for (var r = t.sign(e, n), i = new Uint8Array(64), o = 0; o < i.length; o++) {
          i[o] = r[o];
        }

        return i;
      }, t.sign.detached.verify = function (t, e, n) {
        if (yt(t, e, n), 64 !== e.length) throw new Error("bad signature size");
        if (32 !== n.length) throw new Error("bad public key size");
        var r,
            i = new Uint8Array(64 + t.length),
            o = new Uint8Array(64 + t.length);

        for (r = 0; r < 64; r++) {
          i[r] = e[r];
        }

        for (r = 0; r < t.length; r++) {
          i[r + 64] = t[r];
        }

        return ut(o, i, i.length, n) >= 0;
      }, t.sign.keyPair = function () {
        var t = new Uint8Array(32),
            e = new Uint8Array(64);
        return nt(t, e), {
          publicKey: t,
          secretKey: e
        };
      }, t.sign.keyPair.fromSecretKey = function (t) {
        if (yt(t), 64 !== t.length) throw new Error("bad secret key size");

        for (var e = new Uint8Array(32), n = 0; n < e.length; n++) {
          e[n] = t[32 + n];
        }

        return {
          publicKey: e,
          secretKey: new Uint8Array(t)
        };
      }, t.sign.keyPair.fromSeed = function (t) {
        if (yt(t), 32 !== t.length) throw new Error("bad seed size");

        for (var e = new Uint8Array(32), n = new Uint8Array(64), r = 0; r < 32; r++) {
          n[r] = t[r];
        }

        return nt(e, n, !0), {
          publicKey: e,
          secretKey: n
        };
      }, t.sign.publicKeyLength = 32, t.sign.secretKeyLength = 64, t.sign.seedLength = 32, t.sign.signatureLength = 64, t.hash = function (t) {
        yt(t);
        var e = new Uint8Array(64);
        return V(e, t, t.length), e;
      }, t.hash.hashLength = 64, t.verify = function (t, e) {
        return yt(t, e), 0 !== t.length && 0 !== e.length && t.length === e.length && 0 === y(t, 0, e, 0, t.length);
      }, t.setPRNG = function (t) {
        r = t;
      }, function () {
        var e = "undefined" != typeof self ? self.crypto || self.msCrypto : null;

        if (e && e.getRandomValues) {
          t.setPRNG(function (t, n) {
            var r,
                i = new Uint8Array(n);

            for (r = 0; r < n; r += 65536) {
              e.getRandomValues(i.subarray(r, r + Math.min(n - r, 65536)));
            }

            for (r = 0; r < n; r++) {
              t[r] = i[r];
            }

            gt(i);
          });
        } else (e = n(45)) && e.randomBytes && t.setPRNG(function (t, n) {
          var r,
              i = e.randomBytes(n);

          for (r = 0; r < n; r++) {
            t[r] = i[r];
          }

          gt(i);
        });
      }();
    }(t.exports ? t.exports : self.nacl = self.nacl || {});
  }, function (t, e) {}, function (t, e, n) {
    (function (e) {
      !function (e, n) {
        "use strict";

        t.exports ? t.exports = n() : e.nacl ? e.nacl.util = n() : (e.nacl = {}, e.nacl.util = n());
      }(this, function () {
        "use strict";

        var t = {};

        function n(t) {
          if (!/^(?:[A-Za-z0-9+\/]{4})*(?:[A-Za-z0-9+\/]{2}==|[A-Za-z0-9+\/]{3}=)?$/.test(t)) throw new TypeError("invalid encoding");
        }

        return t.decodeUTF8 = function (t) {
          if ("string" != typeof t) throw new TypeError("expected string");
          var e,
              n = unescape(encodeURIComponent(t)),
              r = new Uint8Array(n.length);

          for (e = 0; e < n.length; e++) {
            r[e] = n.charCodeAt(e);
          }

          return r;
        }, t.encodeUTF8 = function (t) {
          var e,
              n = [];

          for (e = 0; e < t.length; e++) {
            n.push(String.fromCharCode(t[e]));
          }

          return decodeURIComponent(escape(n.join("")));
        }, "undefined" == typeof atob ? void 0 !== e.from ? (t.encodeBase64 = function (t) {
          return e.from(t).toString("base64");
        }, t.decodeBase64 = function (t) {
          return n(t), new Uint8Array(Array.prototype.slice.call(e.from(t, "base64"), 0));
        }) : (t.encodeBase64 = function (t) {
          return new e(t).toString("base64");
        }, t.decodeBase64 = function (t) {
          return n(t), new Uint8Array(Array.prototype.slice.call(new e(t, "base64"), 0));
        }) : (t.encodeBase64 = function (t) {
          var e,
              n = [],
              r = t.length;

          for (e = 0; e < r; e++) {
            n.push(String.fromCharCode(t[e]));
          }

          return btoa(n.join(""));
        }, t.decodeBase64 = function (t) {
          n(t);
          var e,
              r = atob(t),
              i = new Uint8Array(r.length);

          for (e = 0; e < r.length; e++) {
            i[e] = r.charCodeAt(e);
          }

          return i;
        }), t;
      });
    }).call(this, n(47).Buffer);
  }, function (t, e, n) {
    "use strict";
    /*!
     * The buffer module from node.js, for the browser.
     *
     * @author   Feross Aboukhadijeh <feross@feross.org> <http://feross.org>
     * @license  MIT
     */

    var r = n(48),
        i = n(49),
        o = n(50);

    function s() {
      return u.TYPED_ARRAY_SUPPORT ? 2147483647 : 1073741823;
    }

    function a(t, e) {
      if (s() < e) throw new RangeError("Invalid typed array length");
      return u.TYPED_ARRAY_SUPPORT ? (t = new Uint8Array(e)).__proto__ = u.prototype : (null === t && (t = new u(e)), t.length = e), t;
    }

    function u(t, e, n) {
      if (!(u.TYPED_ARRAY_SUPPORT || this instanceof u)) return new u(t, e, n);

      if ("number" == typeof t) {
        if ("string" == typeof e) throw new Error("If encoding is specified then the first argument must be a string");
        return f(this, t);
      }

      return c(this, t, e, n);
    }

    function c(t, e, n, r) {
      if ("number" == typeof e) throw new TypeError('"value" argument must not be a number');
      return "undefined" != typeof ArrayBuffer && e instanceof ArrayBuffer ? function (t, e, n, r) {
        if (e.byteLength, n < 0 || e.byteLength < n) throw new RangeError("'offset' is out of bounds");
        if (e.byteLength < n + (r || 0)) throw new RangeError("'length' is out of bounds");
        e = void 0 === n && void 0 === r ? new Uint8Array(e) : void 0 === r ? new Uint8Array(e, n) : new Uint8Array(e, n, r);
        u.TYPED_ARRAY_SUPPORT ? (t = e).__proto__ = u.prototype : t = l(t, e);
        return t;
      }(t, e, n, r) : "string" == typeof e ? function (t, e, n) {
        "string" == typeof n && "" !== n || (n = "utf8");
        if (!u.isEncoding(n)) throw new TypeError('"encoding" must be a valid string encoding');
        var r = 0 | d(e, n),
            i = (t = a(t, r)).write(e, n);
        i !== r && (t = t.slice(0, i));
        return t;
      }(t, e, n) : function (t, e) {
        if (u.isBuffer(e)) {
          var n = 0 | p(e.length);
          return 0 === (t = a(t, n)).length ? t : (e.copy(t, 0, 0, n), t);
        }

        if (e) {
          if ("undefined" != typeof ArrayBuffer && e.buffer instanceof ArrayBuffer || "length" in e) return "number" != typeof e.length || (r = e.length) != r ? a(t, 0) : l(t, e);
          if ("Buffer" === e.type && o(e.data)) return l(t, e.data);
        }

        var r;
        throw new TypeError("First argument must be a string, Buffer, ArrayBuffer, Array, or array-like object.");
      }(t, e);
    }

    function h(t) {
      if ("number" != typeof t) throw new TypeError('"size" argument must be a number');
      if (t < 0) throw new RangeError('"size" argument must not be negative');
    }

    function f(t, e) {
      if (h(e), t = a(t, e < 0 ? 0 : 0 | p(e)), !u.TYPED_ARRAY_SUPPORT) for (var n = 0; n < e; ++n) {
        t[n] = 0;
      }
      return t;
    }

    function l(t, e) {
      var n = e.length < 0 ? 0 : 0 | p(e.length);
      t = a(t, n);

      for (var r = 0; r < n; r += 1) {
        t[r] = 255 & e[r];
      }

      return t;
    }

    function p(t) {
      if (t >= s()) throw new RangeError("Attempt to allocate Buffer larger than maximum size: 0x" + s().toString(16) + " bytes");
      return 0 | t;
    }

    function d(t, e) {
      if (u.isBuffer(t)) return t.length;
      if ("undefined" != typeof ArrayBuffer && "function" == typeof ArrayBuffer.isView && (ArrayBuffer.isView(t) || t instanceof ArrayBuffer)) return t.byteLength;
      "string" != typeof t && (t = "" + t);
      var n = t.length;
      if (0 === n) return 0;

      for (var r = !1;;) {
        switch (e) {
          case "ascii":
          case "latin1":
          case "binary":
            return n;

          case "utf8":
          case "utf-8":
          case void 0:
            return z(t).length;

          case "ucs2":
          case "ucs-2":
          case "utf16le":
          case "utf-16le":
            return 2 * n;

          case "hex":
            return n >>> 1;

          case "base64":
            return H(t).length;

          default:
            if (r) return z(t).length;
            e = ("" + e).toLowerCase(), r = !0;
        }
      }
    }

    function y(t, e, n) {
      var r = !1;
      if ((void 0 === e || e < 0) && (e = 0), e > this.length) return "";
      if ((void 0 === n || n > this.length) && (n = this.length), n <= 0) return "";
      if ((n >>>= 0) <= (e >>>= 0)) return "";

      for (t || (t = "utf8");;) {
        switch (t) {
          case "hex":
            return x(this, e, n);

          case "utf8":
          case "utf-8":
            return E(this, e, n);

          case "ascii":
            return O(this, e, n);

          case "latin1":
          case "binary":
            return C(this, e, n);

          case "base64":
            return T(this, e, n);

          case "ucs2":
          case "ucs-2":
          case "utf16le":
          case "utf-16le":
            return R(this, e, n);

          default:
            if (r) throw new TypeError("Unknown encoding: " + t);
            t = (t + "").toLowerCase(), r = !0;
        }
      }
    }

    function g(t, e, n) {
      var r = t[e];
      t[e] = t[n], t[n] = r;
    }

    function v(t, e, n, r, i) {
      if (0 === t.length) return -1;

      if ("string" == typeof n ? (r = n, n = 0) : n > 2147483647 ? n = 2147483647 : n < -2147483648 && (n = -2147483648), n = +n, isNaN(n) && (n = i ? 0 : t.length - 1), n < 0 && (n = t.length + n), n >= t.length) {
        if (i) return -1;
        n = t.length - 1;
      } else if (n < 0) {
        if (!i) return -1;
        n = 0;
      }

      if ("string" == typeof e && (e = u.from(e, r)), u.isBuffer(e)) return 0 === e.length ? -1 : b(t, e, n, r, i);
      if ("number" == typeof e) return e &= 255, u.TYPED_ARRAY_SUPPORT && "function" == typeof Uint8Array.prototype.indexOf ? i ? Uint8Array.prototype.indexOf.call(t, e, n) : Uint8Array.prototype.lastIndexOf.call(t, e, n) : b(t, [e], n, r, i);
      throw new TypeError("val must be string, number or Buffer");
    }

    function b(t, e, n, r, i) {
      var o,
          s = 1,
          a = t.length,
          u = e.length;

      if (void 0 !== r && ("ucs2" === (r = String(r).toLowerCase()) || "ucs-2" === r || "utf16le" === r || "utf-16le" === r)) {
        if (t.length < 2 || e.length < 2) return -1;
        s = 2, a /= 2, u /= 2, n /= 2;
      }

      function c(t, e) {
        return 1 === s ? t[e] : t.readUInt16BE(e * s);
      }

      if (i) {
        var h = -1;

        for (o = n; o < a; o++) {
          if (c(t, o) === c(e, -1 === h ? 0 : o - h)) {
            if (-1 === h && (h = o), o - h + 1 === u) return h * s;
          } else -1 !== h && (o -= o - h), h = -1;
        }
      } else for (n + u > a && (n = a - u), o = n; o >= 0; o--) {
        for (var f = !0, l = 0; l < u; l++) {
          if (c(t, o + l) !== c(e, l)) {
            f = !1;
            break;
          }
        }

        if (f) return o;
      }

      return -1;
    }

    function _(t, e, n, r) {
      n = Number(n) || 0;
      var i = t.length - n;
      r ? (r = Number(r)) > i && (r = i) : r = i;
      var o = e.length;
      if (o % 2 != 0) throw new TypeError("Invalid hex string");
      r > o / 2 && (r = o / 2);

      for (var s = 0; s < r; ++s) {
        var a = parseInt(e.substr(2 * s, 2), 16);
        if (isNaN(a)) return s;
        t[n + s] = a;
      }

      return s;
    }

    function m(t, e, n, r) {
      return F(z(e, t.length - n), t, n, r);
    }

    function w(t, e, n, r) {
      return F(function (t) {
        for (var e = [], n = 0; n < t.length; ++n) {
          e.push(255 & t.charCodeAt(n));
        }

        return e;
      }(e), t, n, r);
    }

    function S(t, e, n, r) {
      return w(t, e, n, r);
    }

    function k(t, e, n, r) {
      return F(H(e), t, n, r);
    }

    function A(t, e, n, r) {
      return F(function (t, e) {
        for (var n, r, i, o = [], s = 0; s < t.length && !((e -= 2) < 0); ++s) {
          n = t.charCodeAt(s), r = n >> 8, i = n % 256, o.push(i), o.push(r);
        }

        return o;
      }(e, t.length - n), t, n, r);
    }

    function T(t, e, n) {
      return 0 === e && n === t.length ? r.fromByteArray(t) : r.fromByteArray(t.slice(e, n));
    }

    function E(t, e, n) {
      n = Math.min(t.length, n);

      for (var r = [], i = e; i < n;) {
        var o,
            s,
            a,
            u,
            c = t[i],
            h = null,
            f = c > 239 ? 4 : c > 223 ? 3 : c > 191 ? 2 : 1;
        if (i + f <= n) switch (f) {
          case 1:
            c < 128 && (h = c);
            break;

          case 2:
            128 == (192 & (o = t[i + 1])) && (u = (31 & c) << 6 | 63 & o) > 127 && (h = u);
            break;

          case 3:
            o = t[i + 1], s = t[i + 2], 128 == (192 & o) && 128 == (192 & s) && (u = (15 & c) << 12 | (63 & o) << 6 | 63 & s) > 2047 && (u < 55296 || u > 57343) && (h = u);
            break;

          case 4:
            o = t[i + 1], s = t[i + 2], a = t[i + 3], 128 == (192 & o) && 128 == (192 & s) && 128 == (192 & a) && (u = (15 & c) << 18 | (63 & o) << 12 | (63 & s) << 6 | 63 & a) > 65535 && u < 1114112 && (h = u);
        }
        null === h ? (h = 65533, f = 1) : h > 65535 && (h -= 65536, r.push(h >>> 10 & 1023 | 55296), h = 56320 | 1023 & h), r.push(h), i += f;
      }

      return function (t) {
        var e = t.length;
        if (e <= P) return String.fromCharCode.apply(String, t);
        var n = "",
            r = 0;

        for (; r < e;) {
          n += String.fromCharCode.apply(String, t.slice(r, r += P));
        }

        return n;
      }(r);
    }

    e.Buffer = u, e.SlowBuffer = function (t) {
      +t != t && (t = 0);
      return u.alloc(+t);
    }, e.INSPECT_MAX_BYTES = 50, u.TYPED_ARRAY_SUPPORT = void 0 !== window.TYPED_ARRAY_SUPPORT ? window.TYPED_ARRAY_SUPPORT : function () {
      try {
        var t = new Uint8Array(1);
        return t.__proto__ = {
          __proto__: Uint8Array.prototype,
          foo: function foo() {
            return 42;
          }
        }, 42 === t.foo() && "function" == typeof t.subarray && 0 === t.subarray(1, 1).byteLength;
      } catch (t) {
        return !1;
      }
    }(), e.kMaxLength = s(), u.poolSize = 8192, u._augment = function (t) {
      return t.__proto__ = u.prototype, t;
    }, u.from = function (t, e, n) {
      return c(null, t, e, n);
    }, u.TYPED_ARRAY_SUPPORT && (u.prototype.__proto__ = Uint8Array.prototype, u.__proto__ = Uint8Array, "undefined" != typeof Symbol && Symbol.species && u[Symbol.species] === u && Object.defineProperty(u, Symbol.species, {
      value: null,
      configurable: !0
    })), u.alloc = function (t, e, n) {
      return function (t, e, n, r) {
        return h(e), e <= 0 ? a(t, e) : void 0 !== n ? "string" == typeof r ? a(t, e).fill(n, r) : a(t, e).fill(n) : a(t, e);
      }(null, t, e, n);
    }, u.allocUnsafe = function (t) {
      return f(null, t);
    }, u.allocUnsafeSlow = function (t) {
      return f(null, t);
    }, u.isBuffer = function (t) {
      return !(null == t || !t._isBuffer);
    }, u.compare = function (t, e) {
      if (!u.isBuffer(t) || !u.isBuffer(e)) throw new TypeError("Arguments must be Buffers");
      if (t === e) return 0;

      for (var n = t.length, r = e.length, i = 0, o = Math.min(n, r); i < o; ++i) {
        if (t[i] !== e[i]) {
          n = t[i], r = e[i];
          break;
        }
      }

      return n < r ? -1 : r < n ? 1 : 0;
    }, u.isEncoding = function (t) {
      switch (String(t).toLowerCase()) {
        case "hex":
        case "utf8":
        case "utf-8":
        case "ascii":
        case "latin1":
        case "binary":
        case "base64":
        case "ucs2":
        case "ucs-2":
        case "utf16le":
        case "utf-16le":
          return !0;

        default:
          return !1;
      }
    }, u.concat = function (t, e) {
      if (!o(t)) throw new TypeError('"list" argument must be an Array of Buffers');
      if (0 === t.length) return u.alloc(0);
      var n;
      if (void 0 === e) for (e = 0, n = 0; n < t.length; ++n) {
        e += t[n].length;
      }
      var r = u.allocUnsafe(e),
          i = 0;

      for (n = 0; n < t.length; ++n) {
        var s = t[n];
        if (!u.isBuffer(s)) throw new TypeError('"list" argument must be an Array of Buffers');
        s.copy(r, i), i += s.length;
      }

      return r;
    }, u.byteLength = d, u.prototype._isBuffer = !0, u.prototype.swap16 = function () {
      var t = this.length;
      if (t % 2 != 0) throw new RangeError("Buffer size must be a multiple of 16-bits");

      for (var e = 0; e < t; e += 2) {
        g(this, e, e + 1);
      }

      return this;
    }, u.prototype.swap32 = function () {
      var t = this.length;
      if (t % 4 != 0) throw new RangeError("Buffer size must be a multiple of 32-bits");

      for (var e = 0; e < t; e += 4) {
        g(this, e, e + 3), g(this, e + 1, e + 2);
      }

      return this;
    }, u.prototype.swap64 = function () {
      var t = this.length;
      if (t % 8 != 0) throw new RangeError("Buffer size must be a multiple of 64-bits");

      for (var e = 0; e < t; e += 8) {
        g(this, e, e + 7), g(this, e + 1, e + 6), g(this, e + 2, e + 5), g(this, e + 3, e + 4);
      }

      return this;
    }, u.prototype.toString = function () {
      var t = 0 | this.length;
      return 0 === t ? "" : 0 === arguments.length ? E(this, 0, t) : y.apply(this, arguments);
    }, u.prototype.equals = function (t) {
      if (!u.isBuffer(t)) throw new TypeError("Argument must be a Buffer");
      return this === t || 0 === u.compare(this, t);
    }, u.prototype.inspect = function () {
      var t = "",
          n = e.INSPECT_MAX_BYTES;
      return this.length > 0 && (t = this.toString("hex", 0, n).match(/.{2}/g).join(" "), this.length > n && (t += " ... ")), "<Buffer " + t + ">";
    }, u.prototype.compare = function (t, e, n, r, i) {
      if (!u.isBuffer(t)) throw new TypeError("Argument must be a Buffer");
      if (void 0 === e && (e = 0), void 0 === n && (n = t ? t.length : 0), void 0 === r && (r = 0), void 0 === i && (i = this.length), e < 0 || n > t.length || r < 0 || i > this.length) throw new RangeError("out of range index");
      if (r >= i && e >= n) return 0;
      if (r >= i) return -1;
      if (e >= n) return 1;
      if (this === t) return 0;

      for (var o = (i >>>= 0) - (r >>>= 0), s = (n >>>= 0) - (e >>>= 0), a = Math.min(o, s), c = this.slice(r, i), h = t.slice(e, n), f = 0; f < a; ++f) {
        if (c[f] !== h[f]) {
          o = c[f], s = h[f];
          break;
        }
      }

      return o < s ? -1 : s < o ? 1 : 0;
    }, u.prototype.includes = function (t, e, n) {
      return -1 !== this.indexOf(t, e, n);
    }, u.prototype.indexOf = function (t, e, n) {
      return v(this, t, e, n, !0);
    }, u.prototype.lastIndexOf = function (t, e, n) {
      return v(this, t, e, n, !1);
    }, u.prototype.write = function (t, e, n, r) {
      if (void 0 === e) r = "utf8", n = this.length, e = 0;else if (void 0 === n && "string" == typeof e) r = e, n = this.length, e = 0;else {
        if (!isFinite(e)) throw new Error("Buffer.write(string, encoding, offset[, length]) is no longer supported");
        e |= 0, isFinite(n) ? (n |= 0, void 0 === r && (r = "utf8")) : (r = n, n = void 0);
      }
      var i = this.length - e;
      if ((void 0 === n || n > i) && (n = i), t.length > 0 && (n < 0 || e < 0) || e > this.length) throw new RangeError("Attempt to write outside buffer bounds");
      r || (r = "utf8");

      for (var o = !1;;) {
        switch (r) {
          case "hex":
            return _(this, t, e, n);

          case "utf8":
          case "utf-8":
            return m(this, t, e, n);

          case "ascii":
            return w(this, t, e, n);

          case "latin1":
          case "binary":
            return S(this, t, e, n);

          case "base64":
            return k(this, t, e, n);

          case "ucs2":
          case "ucs-2":
          case "utf16le":
          case "utf-16le":
            return A(this, t, e, n);

          default:
            if (o) throw new TypeError("Unknown encoding: " + r);
            r = ("" + r).toLowerCase(), o = !0;
        }
      }
    }, u.prototype.toJSON = function () {
      return {
        type: "Buffer",
        data: Array.prototype.slice.call(this._arr || this, 0)
      };
    };
    var P = 4096;

    function O(t, e, n) {
      var r = "";
      n = Math.min(t.length, n);

      for (var i = e; i < n; ++i) {
        r += String.fromCharCode(127 & t[i]);
      }

      return r;
    }

    function C(t, e, n) {
      var r = "";
      n = Math.min(t.length, n);

      for (var i = e; i < n; ++i) {
        r += String.fromCharCode(t[i]);
      }

      return r;
    }

    function x(t, e, n) {
      var r = t.length;
      (!e || e < 0) && (e = 0), (!n || n < 0 || n > r) && (n = r);

      for (var i = "", o = e; o < n; ++o) {
        i += Y(t[o]);
      }

      return i;
    }

    function R(t, e, n) {
      for (var r = t.slice(e, n), i = "", o = 0; o < r.length; o += 2) {
        i += String.fromCharCode(r[o] + 256 * r[o + 1]);
      }

      return i;
    }

    function M(t, e, n) {
      if (t % 1 != 0 || t < 0) throw new RangeError("offset is not uint");
      if (t + e > n) throw new RangeError("Trying to access beyond buffer length");
    }

    function U(t, e, n, r, i, o) {
      if (!u.isBuffer(t)) throw new TypeError('"buffer" argument must be a Buffer instance');
      if (e > i || e < o) throw new RangeError('"value" argument is out of bounds');
      if (n + r > t.length) throw new RangeError("Index out of range");
    }

    function L(t, e, n, r) {
      e < 0 && (e = 65535 + e + 1);

      for (var i = 0, o = Math.min(t.length - n, 2); i < o; ++i) {
        t[n + i] = (e & 255 << 8 * (r ? i : 1 - i)) >>> 8 * (r ? i : 1 - i);
      }
    }

    function B(t, e, n, r) {
      e < 0 && (e = 4294967295 + e + 1);

      for (var i = 0, o = Math.min(t.length - n, 4); i < o; ++i) {
        t[n + i] = e >>> 8 * (r ? i : 3 - i) & 255;
      }
    }

    function I(t, e, n, r, i, o) {
      if (n + r > t.length) throw new RangeError("Index out of range");
      if (n < 0) throw new RangeError("Index out of range");
    }

    function j(t, e, n, r, o) {
      return o || I(t, 0, n, 4), i.write(t, e, n, r, 23, 4), n + 4;
    }

    function D(t, e, n, r, o) {
      return o || I(t, 0, n, 8), i.write(t, e, n, r, 52, 8), n + 8;
    }

    u.prototype.slice = function (t, e) {
      var n,
          r = this.length;
      if ((t = ~~t) < 0 ? (t += r) < 0 && (t = 0) : t > r && (t = r), (e = void 0 === e ? r : ~~e) < 0 ? (e += r) < 0 && (e = 0) : e > r && (e = r), e < t && (e = t), u.TYPED_ARRAY_SUPPORT) (n = this.subarray(t, e)).__proto__ = u.prototype;else {
        var i = e - t;
        n = new u(i, void 0);

        for (var o = 0; o < i; ++o) {
          n[o] = this[o + t];
        }
      }
      return n;
    }, u.prototype.readUIntLE = function (t, e, n) {
      t |= 0, e |= 0, n || M(t, e, this.length);

      for (var r = this[t], i = 1, o = 0; ++o < e && (i *= 256);) {
        r += this[t + o] * i;
      }

      return r;
    }, u.prototype.readUIntBE = function (t, e, n) {
      t |= 0, e |= 0, n || M(t, e, this.length);

      for (var r = this[t + --e], i = 1; e > 0 && (i *= 256);) {
        r += this[t + --e] * i;
      }

      return r;
    }, u.prototype.readUInt8 = function (t, e) {
      return e || M(t, 1, this.length), this[t];
    }, u.prototype.readUInt16LE = function (t, e) {
      return e || M(t, 2, this.length), this[t] | this[t + 1] << 8;
    }, u.prototype.readUInt16BE = function (t, e) {
      return e || M(t, 2, this.length), this[t] << 8 | this[t + 1];
    }, u.prototype.readUInt32LE = function (t, e) {
      return e || M(t, 4, this.length), (this[t] | this[t + 1] << 8 | this[t + 2] << 16) + 16777216 * this[t + 3];
    }, u.prototype.readUInt32BE = function (t, e) {
      return e || M(t, 4, this.length), 16777216 * this[t] + (this[t + 1] << 16 | this[t + 2] << 8 | this[t + 3]);
    }, u.prototype.readIntLE = function (t, e, n) {
      t |= 0, e |= 0, n || M(t, e, this.length);

      for (var r = this[t], i = 1, o = 0; ++o < e && (i *= 256);) {
        r += this[t + o] * i;
      }

      return r >= (i *= 128) && (r -= Math.pow(2, 8 * e)), r;
    }, u.prototype.readIntBE = function (t, e, n) {
      t |= 0, e |= 0, n || M(t, e, this.length);

      for (var r = e, i = 1, o = this[t + --r]; r > 0 && (i *= 256);) {
        o += this[t + --r] * i;
      }

      return o >= (i *= 128) && (o -= Math.pow(2, 8 * e)), o;
    }, u.prototype.readInt8 = function (t, e) {
      return e || M(t, 1, this.length), 128 & this[t] ? -1 * (255 - this[t] + 1) : this[t];
    }, u.prototype.readInt16LE = function (t, e) {
      e || M(t, 2, this.length);
      var n = this[t] | this[t + 1] << 8;
      return 32768 & n ? 4294901760 | n : n;
    }, u.prototype.readInt16BE = function (t, e) {
      e || M(t, 2, this.length);
      var n = this[t + 1] | this[t] << 8;
      return 32768 & n ? 4294901760 | n : n;
    }, u.prototype.readInt32LE = function (t, e) {
      return e || M(t, 4, this.length), this[t] | this[t + 1] << 8 | this[t + 2] << 16 | this[t + 3] << 24;
    }, u.prototype.readInt32BE = function (t, e) {
      return e || M(t, 4, this.length), this[t] << 24 | this[t + 1] << 16 | this[t + 2] << 8 | this[t + 3];
    }, u.prototype.readFloatLE = function (t, e) {
      return e || M(t, 4, this.length), i.read(this, t, !0, 23, 4);
    }, u.prototype.readFloatBE = function (t, e) {
      return e || M(t, 4, this.length), i.read(this, t, !1, 23, 4);
    }, u.prototype.readDoubleLE = function (t, e) {
      return e || M(t, 8, this.length), i.read(this, t, !0, 52, 8);
    }, u.prototype.readDoubleBE = function (t, e) {
      return e || M(t, 8, this.length), i.read(this, t, !1, 52, 8);
    }, u.prototype.writeUIntLE = function (t, e, n, r) {
      (t = +t, e |= 0, n |= 0, r) || U(this, t, e, n, Math.pow(2, 8 * n) - 1, 0);
      var i = 1,
          o = 0;

      for (this[e] = 255 & t; ++o < n && (i *= 256);) {
        this[e + o] = t / i & 255;
      }

      return e + n;
    }, u.prototype.writeUIntBE = function (t, e, n, r) {
      (t = +t, e |= 0, n |= 0, r) || U(this, t, e, n, Math.pow(2, 8 * n) - 1, 0);
      var i = n - 1,
          o = 1;

      for (this[e + i] = 255 & t; --i >= 0 && (o *= 256);) {
        this[e + i] = t / o & 255;
      }

      return e + n;
    }, u.prototype.writeUInt8 = function (t, e, n) {
      return t = +t, e |= 0, n || U(this, t, e, 1, 255, 0), u.TYPED_ARRAY_SUPPORT || (t = Math.floor(t)), this[e] = 255 & t, e + 1;
    }, u.prototype.writeUInt16LE = function (t, e, n) {
      return t = +t, e |= 0, n || U(this, t, e, 2, 65535, 0), u.TYPED_ARRAY_SUPPORT ? (this[e] = 255 & t, this[e + 1] = t >>> 8) : L(this, t, e, !0), e + 2;
    }, u.prototype.writeUInt16BE = function (t, e, n) {
      return t = +t, e |= 0, n || U(this, t, e, 2, 65535, 0), u.TYPED_ARRAY_SUPPORT ? (this[e] = t >>> 8, this[e + 1] = 255 & t) : L(this, t, e, !1), e + 2;
    }, u.prototype.writeUInt32LE = function (t, e, n) {
      return t = +t, e |= 0, n || U(this, t, e, 4, 4294967295, 0), u.TYPED_ARRAY_SUPPORT ? (this[e + 3] = t >>> 24, this[e + 2] = t >>> 16, this[e + 1] = t >>> 8, this[e] = 255 & t) : B(this, t, e, !0), e + 4;
    }, u.prototype.writeUInt32BE = function (t, e, n) {
      return t = +t, e |= 0, n || U(this, t, e, 4, 4294967295, 0), u.TYPED_ARRAY_SUPPORT ? (this[e] = t >>> 24, this[e + 1] = t >>> 16, this[e + 2] = t >>> 8, this[e + 3] = 255 & t) : B(this, t, e, !1), e + 4;
    }, u.prototype.writeIntLE = function (t, e, n, r) {
      if (t = +t, e |= 0, !r) {
        var i = Math.pow(2, 8 * n - 1);
        U(this, t, e, n, i - 1, -i);
      }

      var o = 0,
          s = 1,
          a = 0;

      for (this[e] = 255 & t; ++o < n && (s *= 256);) {
        t < 0 && 0 === a && 0 !== this[e + o - 1] && (a = 1), this[e + o] = (t / s >> 0) - a & 255;
      }

      return e + n;
    }, u.prototype.writeIntBE = function (t, e, n, r) {
      if (t = +t, e |= 0, !r) {
        var i = Math.pow(2, 8 * n - 1);
        U(this, t, e, n, i - 1, -i);
      }

      var o = n - 1,
          s = 1,
          a = 0;

      for (this[e + o] = 255 & t; --o >= 0 && (s *= 256);) {
        t < 0 && 0 === a && 0 !== this[e + o + 1] && (a = 1), this[e + o] = (t / s >> 0) - a & 255;
      }

      return e + n;
    }, u.prototype.writeInt8 = function (t, e, n) {
      return t = +t, e |= 0, n || U(this, t, e, 1, 127, -128), u.TYPED_ARRAY_SUPPORT || (t = Math.floor(t)), t < 0 && (t = 255 + t + 1), this[e] = 255 & t, e + 1;
    }, u.prototype.writeInt16LE = function (t, e, n) {
      return t = +t, e |= 0, n || U(this, t, e, 2, 32767, -32768), u.TYPED_ARRAY_SUPPORT ? (this[e] = 255 & t, this[e + 1] = t >>> 8) : L(this, t, e, !0), e + 2;
    }, u.prototype.writeInt16BE = function (t, e, n) {
      return t = +t, e |= 0, n || U(this, t, e, 2, 32767, -32768), u.TYPED_ARRAY_SUPPORT ? (this[e] = t >>> 8, this[e + 1] = 255 & t) : L(this, t, e, !1), e + 2;
    }, u.prototype.writeInt32LE = function (t, e, n) {
      return t = +t, e |= 0, n || U(this, t, e, 4, 2147483647, -2147483648), u.TYPED_ARRAY_SUPPORT ? (this[e] = 255 & t, this[e + 1] = t >>> 8, this[e + 2] = t >>> 16, this[e + 3] = t >>> 24) : B(this, t, e, !0), e + 4;
    }, u.prototype.writeInt32BE = function (t, e, n) {
      return t = +t, e |= 0, n || U(this, t, e, 4, 2147483647, -2147483648), t < 0 && (t = 4294967295 + t + 1), u.TYPED_ARRAY_SUPPORT ? (this[e] = t >>> 24, this[e + 1] = t >>> 16, this[e + 2] = t >>> 8, this[e + 3] = 255 & t) : B(this, t, e, !1), e + 4;
    }, u.prototype.writeFloatLE = function (t, e, n) {
      return j(this, t, e, !0, n);
    }, u.prototype.writeFloatBE = function (t, e, n) {
      return j(this, t, e, !1, n);
    }, u.prototype.writeDoubleLE = function (t, e, n) {
      return D(this, t, e, !0, n);
    }, u.prototype.writeDoubleBE = function (t, e, n) {
      return D(this, t, e, !1, n);
    }, u.prototype.copy = function (t, e, n, r) {
      if (n || (n = 0), r || 0 === r || (r = this.length), e >= t.length && (e = t.length), e || (e = 0), r > 0 && r < n && (r = n), r === n) return 0;
      if (0 === t.length || 0 === this.length) return 0;
      if (e < 0) throw new RangeError("targetStart out of bounds");
      if (n < 0 || n >= this.length) throw new RangeError("sourceStart out of bounds");
      if (r < 0) throw new RangeError("sourceEnd out of bounds");
      r > this.length && (r = this.length), t.length - e < r - n && (r = t.length - e + n);
      var i,
          o = r - n;
      if (this === t && n < e && e < r) for (i = o - 1; i >= 0; --i) {
        t[i + e] = this[i + n];
      } else if (o < 1e3 || !u.TYPED_ARRAY_SUPPORT) for (i = 0; i < o; ++i) {
        t[i + e] = this[i + n];
      } else Uint8Array.prototype.set.call(t, this.subarray(n, n + o), e);
      return o;
    }, u.prototype.fill = function (t, e, n, r) {
      if ("string" == typeof t) {
        if ("string" == typeof e ? (r = e, e = 0, n = this.length) : "string" == typeof n && (r = n, n = this.length), 1 === t.length) {
          var i = t.charCodeAt(0);
          i < 256 && (t = i);
        }

        if (void 0 !== r && "string" != typeof r) throw new TypeError("encoding must be a string");
        if ("string" == typeof r && !u.isEncoding(r)) throw new TypeError("Unknown encoding: " + r);
      } else "number" == typeof t && (t &= 255);

      if (e < 0 || this.length < e || this.length < n) throw new RangeError("Out of range index");
      if (n <= e) return this;
      var o;
      if (e >>>= 0, n = void 0 === n ? this.length : n >>> 0, t || (t = 0), "number" == typeof t) for (o = e; o < n; ++o) {
        this[o] = t;
      } else {
        var s = u.isBuffer(t) ? t : z(new u(t, r).toString()),
            a = s.length;

        for (o = 0; o < n - e; ++o) {
          this[o + e] = s[o % a];
        }
      }
      return this;
    };
    var N = /[^+\/0-9A-Za-z-_]/g;

    function Y(t) {
      return t < 16 ? "0" + t.toString(16) : t.toString(16);
    }

    function z(t, e) {
      var n;
      e = e || 1 / 0;

      for (var r = t.length, i = null, o = [], s = 0; s < r; ++s) {
        if ((n = t.charCodeAt(s)) > 55295 && n < 57344) {
          if (!i) {
            if (n > 56319) {
              (e -= 3) > -1 && o.push(239, 191, 189);
              continue;
            }

            if (s + 1 === r) {
              (e -= 3) > -1 && o.push(239, 191, 189);
              continue;
            }

            i = n;
            continue;
          }

          if (n < 56320) {
            (e -= 3) > -1 && o.push(239, 191, 189), i = n;
            continue;
          }

          n = 65536 + (i - 55296 << 10 | n - 56320);
        } else i && (e -= 3) > -1 && o.push(239, 191, 189);

        if (i = null, n < 128) {
          if ((e -= 1) < 0) break;
          o.push(n);
        } else if (n < 2048) {
          if ((e -= 2) < 0) break;
          o.push(n >> 6 | 192, 63 & n | 128);
        } else if (n < 65536) {
          if ((e -= 3) < 0) break;
          o.push(n >> 12 | 224, n >> 6 & 63 | 128, 63 & n | 128);
        } else {
          if (!(n < 1114112)) throw new Error("Invalid code point");
          if ((e -= 4) < 0) break;
          o.push(n >> 18 | 240, n >> 12 & 63 | 128, n >> 6 & 63 | 128, 63 & n | 128);
        }
      }

      return o;
    }

    function H(t) {
      return r.toByteArray(function (t) {
        if ((t = function (t) {
          return t.trim ? t.trim() : t.replace(/^\s+|\s+$/g, "");
        }(t).replace(N, "")).length < 2) return "";

        for (; t.length % 4 != 0;) {
          t += "=";
        }

        return t;
      }(t));
    }

    function F(t, e, n, r) {
      for (var i = 0; i < r && !(i + n >= e.length || i >= t.length); ++i) {
        e[i + n] = t[i];
      }

      return i;
    }
  }, function (t, e, n) {
    "use strict";

    e.byteLength = function (t) {
      var e = c(t),
          n = e[0],
          r = e[1];
      return 3 * (n + r) / 4 - r;
    }, e.toByteArray = function (t) {
      for (var e, n = c(t), r = n[0], s = n[1], a = new o(function (t, e, n) {
        return 3 * (e + n) / 4 - n;
      }(0, r, s)), u = 0, h = s > 0 ? r - 4 : r, f = 0; f < h; f += 4) {
        e = i[t.charCodeAt(f)] << 18 | i[t.charCodeAt(f + 1)] << 12 | i[t.charCodeAt(f + 2)] << 6 | i[t.charCodeAt(f + 3)], a[u++] = e >> 16 & 255, a[u++] = e >> 8 & 255, a[u++] = 255 & e;
      }

      2 === s && (e = i[t.charCodeAt(f)] << 2 | i[t.charCodeAt(f + 1)] >> 4, a[u++] = 255 & e);
      1 === s && (e = i[t.charCodeAt(f)] << 10 | i[t.charCodeAt(f + 1)] << 4 | i[t.charCodeAt(f + 2)] >> 2, a[u++] = e >> 8 & 255, a[u++] = 255 & e);
      return a;
    }, e.fromByteArray = function (t) {
      for (var e, n = t.length, i = n % 3, o = [], s = 0, a = n - i; s < a; s += 16383) {
        o.push(h(t, s, s + 16383 > a ? a : s + 16383));
      }

      1 === i ? (e = t[n - 1], o.push(r[e >> 2] + r[e << 4 & 63] + "==")) : 2 === i && (e = (t[n - 2] << 8) + t[n - 1], o.push(r[e >> 10] + r[e >> 4 & 63] + r[e << 2 & 63] + "="));
      return o.join("");
    };

    for (var r = [], i = [], o = "undefined" != typeof Uint8Array ? Uint8Array : Array, s = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/", a = 0, u = s.length; a < u; ++a) {
      r[a] = s[a], i[s.charCodeAt(a)] = a;
    }

    function c(t) {
      var e = t.length;
      if (e % 4 > 0) throw new Error("Invalid string. Length must be a multiple of 4");
      var n = t.indexOf("=");
      return -1 === n && (n = e), [n, n === e ? 0 : 4 - n % 4];
    }

    function h(t, e, n) {
      for (var i, o, s = [], a = e; a < n; a += 3) {
        i = (t[a] << 16 & 16711680) + (t[a + 1] << 8 & 65280) + (255 & t[a + 2]), s.push(r[(o = i) >> 18 & 63] + r[o >> 12 & 63] + r[o >> 6 & 63] + r[63 & o]);
      }

      return s.join("");
    }

    i["-".charCodeAt(0)] = 62, i["_".charCodeAt(0)] = 63;
  }, function (t, e) {
    e.read = function (t, e, n, r, i) {
      var o,
          s,
          a = 8 * i - r - 1,
          u = (1 << a) - 1,
          c = u >> 1,
          h = -7,
          f = n ? i - 1 : 0,
          l = n ? -1 : 1,
          p = t[e + f];

      for (f += l, o = p & (1 << -h) - 1, p >>= -h, h += a; h > 0; o = 256 * o + t[e + f], f += l, h -= 8) {
        ;
      }

      for (s = o & (1 << -h) - 1, o >>= -h, h += r; h > 0; s = 256 * s + t[e + f], f += l, h -= 8) {
        ;
      }

      if (0 === o) o = 1 - c;else {
        if (o === u) return s ? NaN : 1 / 0 * (p ? -1 : 1);
        s += Math.pow(2, r), o -= c;
      }
      return (p ? -1 : 1) * s * Math.pow(2, o - r);
    }, e.write = function (t, e, n, r, i, o) {
      var s,
          a,
          u,
          c = 8 * o - i - 1,
          h = (1 << c) - 1,
          f = h >> 1,
          l = 23 === i ? Math.pow(2, -24) - Math.pow(2, -77) : 0,
          p = r ? 0 : o - 1,
          d = r ? 1 : -1,
          y = e < 0 || 0 === e && 1 / e < 0 ? 1 : 0;

      for (e = Math.abs(e), isNaN(e) || e === 1 / 0 ? (a = isNaN(e) ? 1 : 0, s = h) : (s = Math.floor(Math.log(e) / Math.LN2), e * (u = Math.pow(2, -s)) < 1 && (s--, u *= 2), (e += s + f >= 1 ? l / u : l * Math.pow(2, 1 - f)) * u >= 2 && (s++, u /= 2), s + f >= h ? (a = 0, s = h) : s + f >= 1 ? (a = (e * u - 1) * Math.pow(2, i), s += f) : (a = e * Math.pow(2, f - 1) * Math.pow(2, i), s = 0)); i >= 8; t[n + p] = 255 & a, p += d, a /= 256, i -= 8) {
        ;
      }

      for (s = s << i | a, c += i; c > 0; t[n + p] = 255 & s, p += d, s /= 256, c -= 8) {
        ;
      }

      t[n + p - d] |= 128 * y;
    };
  }, function (t, e) {
    var n = {}.toString;

    t.exports = Array.isArray || function (t) {
      return "[object Array]" == n.call(t);
    };
  }, function (t, e, n) {
    "use strict";

    var _r10,
        i = this && this.__extends || (_r10 = function r(t, e) {
      return (_r10 = Object.setPrototypeOf || {
        __proto__: []
      } instanceof Array && function (t, e) {
        t.__proto__ = e;
      } || function (t, e) {
        for (var n in e) {
          e.hasOwnProperty(n) && (t[n] = e[n]);
        }
      })(t, e);
    }, function (t, e) {
      function n() {
        this.constructor = t;
      }

      _r10(t, e), t.prototype = null === e ? Object.create(e) : (n.prototype = e.prototype, new n());
    });

    e.__esModule = !0;

    var o = n(4),
        s = n(6),
        a = n(3),
        u = n(0),
        c = n(1),
        h = function (t) {
      function e(e, n) {
        var r = t.call(this) || this;
        r.key = e, r.options = n || {}, r.state = "initialized", r.connection = null, r.usingTLS = !!n.useTLS, r.timeline = r.options.timeline, r.errorCallbacks = r.buildErrorCallbacks(), r.connectionCallbacks = r.buildConnectionCallbacks(r.errorCallbacks), r.handshakeCallbacks = r.buildHandshakeCallbacks(r.errorCallbacks);
        var i = c["default"].getNetwork();
        return i.bind("online", function () {
          r.timeline.info({
            netinfo: "online"
          }), "connecting" !== r.state && "unavailable" !== r.state || r.retryIn(0);
        }), i.bind("offline", function () {
          r.timeline.info({
            netinfo: "offline"
          }), r.connection && r.sendActivityCheck();
        }), r.updateStrategy(), r;
      }

      return i(e, t), e.prototype.connect = function () {
        this.connection || this.runner || (this.strategy.isSupported() ? (this.updateState("connecting"), this.startConnecting(), this.setUnavailableTimer()) : this.updateState("failed"));
      }, e.prototype.send = function (t) {
        return !!this.connection && this.connection.send(t);
      }, e.prototype.send_event = function (t, e, n) {
        return !!this.connection && this.connection.send_event(t, e, n);
      }, e.prototype.disconnect = function () {
        this.disconnectInternally(), this.updateState("disconnected");
      }, e.prototype.isUsingTLS = function () {
        return this.usingTLS;
      }, e.prototype.startConnecting = function () {
        var t = this,
            e = function e(n, r) {
          n ? t.runner = t.strategy.connect(0, e) : "error" === r.action ? (t.emit("error", {
            type: "HandshakeError",
            error: r.error
          }), t.timeline.error({
            handshakeError: r.error
          })) : (t.abortConnecting(), t.handshakeCallbacks[r.action](r));
        };

        this.runner = this.strategy.connect(0, e);
      }, e.prototype.abortConnecting = function () {
        this.runner && (this.runner.abort(), this.runner = null);
      }, e.prototype.disconnectInternally = function () {
        (this.abortConnecting(), this.clearRetryTimer(), this.clearUnavailableTimer(), this.connection) && this.abandonConnection().close();
      }, e.prototype.updateStrategy = function () {
        this.strategy = this.options.getStrategy({
          key: this.key,
          timeline: this.timeline,
          useTLS: this.usingTLS
        });
      }, e.prototype.retryIn = function (t) {
        var e = this;
        this.timeline.info({
          action: "retry",
          delay: t
        }), t > 0 && this.emit("connecting_in", Math.round(t / 1e3)), this.retryTimer = new s.OneOffTimer(t || 0, function () {
          e.disconnectInternally(), e.connect();
        });
      }, e.prototype.clearRetryTimer = function () {
        this.retryTimer && (this.retryTimer.ensureAborted(), this.retryTimer = null);
      }, e.prototype.setUnavailableTimer = function () {
        var t = this;
        this.unavailableTimer = new s.OneOffTimer(this.options.unavailableTimeout, function () {
          t.updateState("unavailable");
        });
      }, e.prototype.clearUnavailableTimer = function () {
        this.unavailableTimer && this.unavailableTimer.ensureAborted();
      }, e.prototype.sendActivityCheck = function () {
        var t = this;
        this.stopActivityCheck(), this.connection.ping(), this.activityTimer = new s.OneOffTimer(this.options.pongTimeout, function () {
          t.timeline.error({
            pong_timed_out: t.options.pongTimeout
          }), t.retryIn(0);
        });
      }, e.prototype.resetActivityCheck = function () {
        var t = this;
        this.stopActivityCheck(), this.connection && !this.connection.handlesActivityChecks() && (this.activityTimer = new s.OneOffTimer(this.activityTimeout, function () {
          t.sendActivityCheck();
        }));
      }, e.prototype.stopActivityCheck = function () {
        this.activityTimer && this.activityTimer.ensureAborted();
      }, e.prototype.buildConnectionCallbacks = function (t) {
        var e = this;
        return u.extend({}, t, {
          message: function message(t) {
            e.resetActivityCheck(), e.emit("message", t);
          },
          ping: function ping() {
            e.send_event("pusher:pong", {});
          },
          activity: function activity() {
            e.resetActivityCheck();
          },
          error: function error(t) {
            e.emit("error", {
              type: "WebSocketError",
              error: t
            });
          },
          closed: function closed() {
            e.abandonConnection(), e.shouldRetry() && e.retryIn(1e3);
          }
        });
      }, e.prototype.buildHandshakeCallbacks = function (t) {
        var e = this;
        return u.extend({}, t, {
          connected: function connected(t) {
            e.activityTimeout = Math.min(e.options.activityTimeout, t.activityTimeout, t.connection.activityTimeout || 1 / 0), e.clearUnavailableTimer(), e.setConnection(t.connection), e.socket_id = e.connection.id, e.updateState("connected", {
              socket_id: e.socket_id
            });
          }
        });
      }, e.prototype.buildErrorCallbacks = function () {
        var t = this,
            e = function e(_e) {
          return function (n) {
            n.error && t.emit("error", {
              type: "WebSocketError",
              error: n.error
            }), _e(n);
          };
        };

        return {
          tls_only: e(function () {
            t.usingTLS = !0, t.updateStrategy(), t.retryIn(0);
          }),
          refused: e(function () {
            t.disconnect();
          }),
          backoff: e(function () {
            t.retryIn(1e3);
          }),
          retry: e(function () {
            t.retryIn(0);
          })
        };
      }, e.prototype.setConnection = function (t) {
        for (var e in this.connection = t, this.connectionCallbacks) {
          this.connection.bind(e, this.connectionCallbacks[e]);
        }

        this.resetActivityCheck();
      }, e.prototype.abandonConnection = function () {
        if (this.connection) {
          for (var t in this.stopActivityCheck(), this.connectionCallbacks) {
            this.connection.unbind(t, this.connectionCallbacks[t]);
          }

          var e = this.connection;
          return this.connection = null, e;
        }
      }, e.prototype.updateState = function (t, e) {
        var n = this.state;

        if (this.state = t, n !== t) {
          var r = t;
          "connected" === r && (r += " with new socket ID " + e.socket_id), a["default"].debug("State changed", n + " -> " + r), this.timeline.info({
            state: t,
            params: e
          }), this.emit("state_change", {
            previous: n,
            current: t
          }), this.emit(t, e);
        }
      }, e.prototype.shouldRetry = function () {
        return "connecting" === this.state || "connected" === this.state;
      }, e;
    }(o["default"]);

    e["default"] = h;
  }, function (t, e, n) {
    "use strict";

    e.__esModule = !0;
    var r = n(0),
        i = n(7),
        o = (n(5), function () {
      function t() {
        this.channels = {};
      }

      return t.prototype.add = function (t, e) {
        return this.channels[t] || (this.channels[t] = function (t, e) {
          return 0 === t.indexOf("private-encrypted-") ? i["default"].createEncryptedChannel(t, e) : 0 === t.indexOf("private-") ? i["default"].createPrivateChannel(t, e) : 0 === t.indexOf("presence-") ? i["default"].createPresenceChannel(t, e) : i["default"].createChannel(t, e);
        }(t, e)), this.channels[t];
      }, t.prototype.all = function () {
        return r.values(this.channels);
      }, t.prototype.find = function (t) {
        return this.channels[t];
      }, t.prototype.remove = function (t) {
        var e = this.channels[t];
        return delete this.channels[t], e;
      }, t.prototype.disconnect = function () {
        r.objectApply(this.channels, function (t) {
          t.disconnect();
        });
      }, t;
    }());
    e["default"] = o;
  }, function (t, e, n) {
    "use strict";

    e.__esModule = !0;

    var r = n(0),
        i = n(2),
        o = function () {
      function t(t) {
        this.strategies = t;
      }

      return t.prototype.isSupported = function () {
        return r.any(this.strategies, i["default"].method("isSupported"));
      }, t.prototype.connect = function (t, e) {
        return function (t, e, n) {
          var i = r.map(t, function (t, r, i, o) {
            return t.connect(e, n(r, o));
          });
          return {
            abort: function abort() {
              r.apply(i, s);
            },
            forceMinPriority: function forceMinPriority(t) {
              r.apply(i, function (e) {
                e.forceMinPriority(t);
              });
            }
          };
        }(this.strategies, t, function (t, n) {
          return function (i, o) {
            n[t].error = i, i ? function (t) {
              return r.all(t, function (t) {
                return Boolean(t.error);
              });
            }(n) && e(!0) : (r.apply(n, function (t) {
              t.forceMinPriority(o.transport.priority);
            }), e(null, o));
          };
        });
      }, t;
    }();

    function s(t) {
      t.error || t.aborted || (t.abort(), t.aborted = !0);
    }

    e["default"] = o;
  }, function (t, e, n) {
    "use strict";

    e.__esModule = !0;

    var r = n(2),
        i = n(1),
        o = n(18),
        s = n(0),
        a = function () {
      function t(t, e, n) {
        this.strategy = t, this.transports = e, this.ttl = n.ttl || 18e5, this.usingTLS = n.useTLS, this.timeline = n.timeline;
      }

      return t.prototype.isSupported = function () {
        return this.strategy.isSupported();
      }, t.prototype.connect = function (t, e) {
        var n = this.usingTLS,
            a = function (t) {
          var e = i["default"].getLocalStorage();
          if (e) try {
            var n = e[u(t)];
            if (n) return JSON.parse(n);
          } catch (e) {
            c(t);
          }
          return null;
        }(n),
            h = [this.strategy];

        if (a && a.timestamp + this.ttl >= r["default"].now()) {
          var f = this.transports[a.transport];
          f && (this.timeline.info({
            cached: !0,
            transport: a.transport,
            latency: a.latency
          }), h.push(new o["default"]([f], {
            timeout: 2 * a.latency + 1e3,
            failFast: !0
          })));
        }

        var l = r["default"].now(),
            p = h.pop().connect(t, function o(a, f) {
          a ? (c(n), h.length > 0 ? (l = r["default"].now(), p = h.pop().connect(t, o)) : e(a)) : (!function (t, e, n) {
            var o = i["default"].getLocalStorage();
            if (o) try {
              o[u(t)] = s.safeJSONStringify({
                timestamp: r["default"].now(),
                transport: e,
                latency: n
              });
            } catch (t) {}
          }(n, f.transport.name, r["default"].now() - l), e(null, f));
        });
        return {
          abort: function abort() {
            p.abort();
          },
          forceMinPriority: function forceMinPriority(e) {
            t = e, p && p.forceMinPriority(e);
          }
        };
      }, t;
    }();

    function u(t) {
      return "pusherTransport" + (t ? "TLS" : "NonTLS");
    }

    function c(t) {
      var e = i["default"].getLocalStorage();
      if (e) try {
        delete e[u(t)];
      } catch (t) {}
    }

    e["default"] = a;
  }, function (t, e, n) {
    "use strict";

    e.__esModule = !0;

    var r = n(6),
        i = function () {
      function t(t, e) {
        var n = e.delay;
        this.strategy = t, this.options = {
          delay: n
        };
      }

      return t.prototype.isSupported = function () {
        return this.strategy.isSupported();
      }, t.prototype.connect = function (t, e) {
        var n,
            i = this.strategy,
            o = new r.OneOffTimer(this.options.delay, function () {
          n = i.connect(t, e);
        });
        return {
          abort: function abort() {
            o.ensureAborted(), n && n.abort();
          },
          forceMinPriority: function forceMinPriority(e) {
            t = e, n && n.forceMinPriority(e);
          }
        };
      }, t;
    }();

    e["default"] = i;
  }, function (t, e, n) {
    "use strict";

    e.__esModule = !0;

    var r = function () {
      function t(t, e, n) {
        this.test = t, this.trueBranch = e, this.falseBranch = n;
      }

      return t.prototype.isSupported = function () {
        return (this.test() ? this.trueBranch : this.falseBranch).isSupported();
      }, t.prototype.connect = function (t, e) {
        return (this.test() ? this.trueBranch : this.falseBranch).connect(t, e);
      }, t;
    }();

    e["default"] = r;
  }, function (t, e, n) {
    "use strict";

    e.__esModule = !0;

    var r = function () {
      function t(t) {
        this.strategy = t;
      }

      return t.prototype.isSupported = function () {
        return this.strategy.isSupported();
      }, t.prototype.connect = function (t, e) {
        var n = this.strategy.connect(t, function (t, r) {
          r && n.abort(), e(t, r);
        });
        return n;
      }, t;
    }();

    e["default"] = r;
  }, function (t, e, n) {
    "use strict";

    e.__esModule = !0;
    var r = n(11);

    e["default"] = function () {
      var t = this;
      t.timeline.info(t.buildTimelineMessage({
        transport: t.name + (t.options.useTLS ? "s" : "")
      })), t.hooks.isInitialized() ? t.changeState("initialized") : t.hooks.file ? (t.changeState("initializing"), r.Dependencies.load(t.hooks.file, {
        useTLS: t.options.useTLS
      }, function (e, n) {
        t.hooks.isInitialized() ? (t.changeState("initialized"), n(!0)) : (e && t.onError(e), t.onClose(), n(!1));
      })) : t.onClose();
    };
  }, function (t, e, n) {
    "use strict";

    e.__esModule = !0;
    var r = n(60),
        i = n(61);
    i["default"].createXDR = function (t, e) {
      return this.createRequest(r["default"], t, e);
    }, e["default"] = i["default"];
  }, function (t, e, n) {
    "use strict";

    e.__esModule = !0;
    var r = n(5),
        i = {
      getRequest: function getRequest(t) {
        var e = new window.XDomainRequest();
        return e.ontimeout = function () {
          t.emit("error", new r.RequestTimedOut()), t.close();
        }, e.onerror = function (e) {
          t.emit("error", e), t.close();
        }, e.onprogress = function () {
          e.responseText && e.responseText.length > 0 && t.onChunk(200, e.responseText);
        }, e.onload = function () {
          e.responseText && e.responseText.length > 0 && t.onChunk(200, e.responseText), t.emit("finished", 200), t.close();
        }, e;
      },
      abortRequest: function abortRequest(t) {
        t.ontimeout = t.onerror = t.onprogress = t.onload = null, t.abort();
      }
    };
    e["default"] = i;
  }, function (t, e, n) {
    "use strict";

    e.__esModule = !0;
    var r = n(62),
        i = n(63),
        o = n(65),
        s = n(66),
        a = n(67),
        u = {
      createStreamingSocket: function createStreamingSocket(t) {
        return this.createSocket(o["default"], t);
      },
      createPollingSocket: function createPollingSocket(t) {
        return this.createSocket(s["default"], t);
      },
      createSocket: function createSocket(t, e) {
        return new i["default"](t, e);
      },
      createXHR: function createXHR(t, e) {
        return this.createRequest(a["default"], t, e);
      },
      createRequest: function createRequest(t, e, n) {
        return new r["default"](t, e, n);
      }
    };
    e["default"] = u;
  }, function (t, e, n) {
    "use strict";

    var _r11,
        i = this && this.__extends || (_r11 = function r(t, e) {
      return (_r11 = Object.setPrototypeOf || {
        __proto__: []
      } instanceof Array && function (t, e) {
        t.__proto__ = e;
      } || function (t, e) {
        for (var n in e) {
          e.hasOwnProperty(n) && (t[n] = e[n]);
        }
      })(t, e);
    }, function (t, e) {
      function n() {
        this.constructor = t;
      }

      _r11(t, e), t.prototype = null === e ? Object.create(e) : (n.prototype = e.prototype, new n());
    });

    e.__esModule = !0;

    var o = n(1),
        s = n(4),
        a = function (t) {
      function e(e, n, r) {
        var i = t.call(this) || this;
        return i.hooks = e, i.method = n, i.url = r, i;
      }

      return i(e, t), e.prototype.start = function (t) {
        var e = this;
        this.position = 0, this.xhr = this.hooks.getRequest(this), this.unloader = function () {
          e.close();
        }, o["default"].addUnloadListener(this.unloader), this.xhr.open(this.method, this.url, !0), this.xhr.setRequestHeader && this.xhr.setRequestHeader("Content-Type", "application/json"), this.xhr.send(t);
      }, e.prototype.close = function () {
        this.unloader && (o["default"].removeUnloadListener(this.unloader), this.unloader = null), this.xhr && (this.hooks.abortRequest(this.xhr), this.xhr = null);
      }, e.prototype.onChunk = function (t, e) {
        for (;;) {
          var n = this.advanceBuffer(e);
          if (!n) break;
          this.emit("chunk", {
            status: t,
            data: n
          });
        }

        this.isBufferTooLong(e) && this.emit("buffer_too_long");
      }, e.prototype.advanceBuffer = function (t) {
        var e = t.slice(this.position),
            n = e.indexOf("\n");
        return -1 !== n ? (this.position += n + 1, e.slice(0, n)) : null;
      }, e.prototype.isBufferTooLong = function (t) {
        return this.position === t.length && t.length > 262144;
      }, e;
    }(s["default"]);

    e["default"] = a;
  }, function (t, e, n) {
    "use strict";

    e.__esModule = !0;

    var r = n(64),
        i = n(2),
        o = n(1),
        s = 1,
        a = function () {
      function t(t, e) {
        this.hooks = t, this.session = c(1e3) + "/" + function (t) {
          for (var e = [], n = 0; n < t; n++) {
            e.push(c(32).toString(32));
          }

          return e.join("");
        }(8), this.location = function (t) {
          var e = /([^\?]*)\/*(\??.*)/.exec(t);
          return {
            base: e[1],
            queryString: e[2]
          };
        }(e), this.readyState = r["default"].CONNECTING, this.openStream();
      }

      return t.prototype.send = function (t) {
        return this.sendRaw(JSON.stringify([t]));
      }, t.prototype.ping = function () {
        this.hooks.sendHeartbeat(this);
      }, t.prototype.close = function (t, e) {
        this.onClose(t, e, !0);
      }, t.prototype.sendRaw = function (t) {
        if (this.readyState !== r["default"].OPEN) return !1;

        try {
          return o["default"].createSocketRequest("POST", u((e = this.location, n = this.session, e.base + "/" + n + "/xhr_send"))).start(t), !0;
        } catch (t) {
          return !1;
        }

        var e, n;
      }, t.prototype.reconnect = function () {
        this.closeStream(), this.openStream();
      }, t.prototype.onClose = function (t, e, n) {
        this.closeStream(), this.readyState = r["default"].CLOSED, this.onclose && this.onclose({
          code: t,
          reason: e,
          wasClean: n
        });
      }, t.prototype.onChunk = function (t) {
        var e;
        if (200 === t.status) switch (this.readyState === r["default"].OPEN && this.onActivity(), t.data.slice(0, 1)) {
          case "o":
            e = JSON.parse(t.data.slice(1) || "{}"), this.onOpen(e);
            break;

          case "a":
            e = JSON.parse(t.data.slice(1) || "[]");

            for (var n = 0; n < e.length; n++) {
              this.onEvent(e[n]);
            }

            break;

          case "m":
            e = JSON.parse(t.data.slice(1) || "null"), this.onEvent(e);
            break;

          case "h":
            this.hooks.onHeartbeat(this);
            break;

          case "c":
            e = JSON.parse(t.data.slice(1) || "[]"), this.onClose(e[0], e[1], !0);
        }
      }, t.prototype.onOpen = function (t) {
        var e, n, i;
        this.readyState === r["default"].CONNECTING ? (t && t.hostname && (this.location.base = (e = this.location.base, n = t.hostname, (i = /(https?:\/\/)([^\/:]+)((\/|:)?.*)/.exec(e))[1] + n + i[3])), this.readyState = r["default"].OPEN, this.onopen && this.onopen()) : this.onClose(1006, "Server lost session", !0);
      }, t.prototype.onEvent = function (t) {
        this.readyState === r["default"].OPEN && this.onmessage && this.onmessage({
          data: t
        });
      }, t.prototype.onActivity = function () {
        this.onactivity && this.onactivity();
      }, t.prototype.onError = function (t) {
        this.onerror && this.onerror(t);
      }, t.prototype.openStream = function () {
        var t = this;
        this.stream = o["default"].createSocketRequest("POST", u(this.hooks.getReceiveURL(this.location, this.session))), this.stream.bind("chunk", function (e) {
          t.onChunk(e);
        }), this.stream.bind("finished", function (e) {
          t.hooks.onFinished(t, e);
        }), this.stream.bind("buffer_too_long", function () {
          t.reconnect();
        });

        try {
          this.stream.start();
        } catch (e) {
          i["default"].defer(function () {
            t.onError(e), t.onClose(1006, "Could not start streaming", !1);
          });
        }
      }, t.prototype.closeStream = function () {
        this.stream && (this.stream.unbind_all(), this.stream.close(), this.stream = null);
      }, t;
    }();

    function u(t) {
      var e = -1 === t.indexOf("?") ? "?" : "&";
      return t + e + "t=" + +new Date() + "&n=" + s++;
    }

    function c(t) {
      return Math.floor(Math.random() * t);
    }

    e["default"] = a;
  }, function (t, e, n) {
    "use strict";

    var r;
    e.__esModule = !0, function (t) {
      t[t.CONNECTING = 0] = "CONNECTING", t[t.OPEN = 1] = "OPEN", t[t.CLOSED = 3] = "CLOSED";
    }(r || (r = {})), e["default"] = r;
  }, function (t, e, n) {
    "use strict";

    e.__esModule = !0;
    e["default"] = {
      getReceiveURL: function getReceiveURL(t, e) {
        return t.base + "/" + e + "/xhr_streaming" + t.queryString;
      },
      onHeartbeat: function onHeartbeat(t) {
        t.sendRaw("[]");
      },
      sendHeartbeat: function sendHeartbeat(t) {
        t.sendRaw("[]");
      },
      onFinished: function onFinished(t, e) {
        t.onClose(1006, "Connection interrupted (" + e + ")", !1);
      }
    };
  }, function (t, e, n) {
    "use strict";

    e.__esModule = !0;
    e["default"] = {
      getReceiveURL: function getReceiveURL(t, e) {
        return t.base + "/" + e + "/xhr" + t.queryString;
      },
      onHeartbeat: function onHeartbeat() {},
      sendHeartbeat: function sendHeartbeat(t) {
        t.sendRaw("[]");
      },
      onFinished: function onFinished(t, e) {
        200 === e ? t.reconnect() : t.onClose(1006, "Connection interrupted (" + e + ")", !1);
      }
    };
  }, function (t, e, n) {
    "use strict";

    e.__esModule = !0;
    var r = n(1),
        i = {
      getRequest: function getRequest(t) {
        var e = new (r["default"].getXHRAPI())();
        return e.onreadystatechange = e.onprogress = function () {
          switch (e.readyState) {
            case 3:
              e.responseText && e.responseText.length > 0 && t.onChunk(e.status, e.responseText);
              break;

            case 4:
              e.responseText && e.responseText.length > 0 && t.onChunk(e.status, e.responseText), t.emit("finished", e.status), t.close();
          }
        }, e;
      },
      abortRequest: function abortRequest(t) {
        t.onreadystatechange = null, t.abort();
      }
    };
    e["default"] = i;
  }, function (t, e, n) {
    "use strict";

    e.__esModule = !0;

    var r = n(0),
        i = n(2),
        o = n(19),
        s = function () {
      function t(t, e, n) {
        this.key = t, this.session = e, this.events = [], this.options = n || {}, this.sent = 0, this.uniqueID = 0;
      }

      return t.prototype.log = function (t, e) {
        t <= this.options.level && (this.events.push(r.extend({}, e, {
          timestamp: i["default"].now()
        })), this.options.limit && this.events.length > this.options.limit && this.events.shift());
      }, t.prototype.error = function (t) {
        this.log(o["default"].ERROR, t);
      }, t.prototype.info = function (t) {
        this.log(o["default"].INFO, t);
      }, t.prototype.debug = function (t) {
        this.log(o["default"].DEBUG, t);
      }, t.prototype.isEmpty = function () {
        return 0 === this.events.length;
      }, t.prototype.send = function (t, e) {
        var n = this,
            i = r.extend({
          session: this.session,
          bundle: this.sent + 1,
          key: this.key,
          lib: "js",
          version: this.options.version,
          cluster: this.options.cluster,
          features: this.options.features,
          timeline: this.events
        }, this.options.params);
        return this.events = [], t(i, function (t, r) {
          t || n.sent++, e && e(t, r);
        }), !0;
      }, t.prototype.generateUniqueID = function () {
        return this.uniqueID++, this.uniqueID;
      }, t;
    }();

    e["default"] = s;
  }, function (t, e, n) {
    "use strict";

    e.__esModule = !0;
    var r = n(0),
        i = n(2),
        o = n(5),
        s = n(70),
        a = n(1)["default"].Transports;

    e.defineTransport = function (t, e, n, i, c, h) {
      var f = a[n];
      if (!f) throw new o.UnsupportedTransport(n);
      return !(t.enabledTransports && -1 === r.arrayIndexOf(t.enabledTransports, e) || t.disabledTransports && -1 !== r.arrayIndexOf(t.disabledTransports, e)) ? new s["default"](e, i, h ? h.getAssistant(f) : f, r.extend({
        key: t.key,
        useTLS: t.useTLS,
        timeline: t.timeline,
        ignoreNullOrigin: t.ignoreNullOrigin
      }, c)) : u;
    };

    var u = {
      isSupported: function isSupported() {
        return !1;
      },
      connect: function connect(t, e) {
        var n = i["default"].defer(function () {
          e(new o.UnsupportedStrategy());
        });
        return {
          abort: function abort() {
            n.ensureAborted();
          },
          forceMinPriority: function forceMinPriority() {}
        };
      }
    };
  }, function (t, e, n) {
    "use strict";

    e.__esModule = !0;

    var r = n(7),
        i = n(2),
        o = n(5),
        s = n(0),
        a = function () {
      function t(t, e, n, r) {
        this.name = t, this.priority = e, this.transport = n, this.options = r || {};
      }

      return t.prototype.isSupported = function () {
        return this.transport.isSupported({
          useTLS: this.options.useTLS
        });
      }, t.prototype.connect = function (t, e) {
        var n = this;
        if (!this.isSupported()) return u(new o.UnsupportedStrategy(), e);
        if (this.priority < t) return u(new o.TransportPriorityTooLow(), e);

        var i = !1,
            a = this.transport.createConnection(this.name, this.priority, this.options.key, this.options),
            c = null,
            h = function h() {
          a.unbind("initialized", h), a.connect();
        },
            f = function f() {
          c = r["default"].createHandshake(a, function (t) {
            i = !0, d(), e(null, t);
          });
        },
            l = function l(t) {
          d(), e(t);
        },
            p = function p() {
          var t;
          d(), t = s.safeJSONStringify(a), e(new o.TransportClosed(t));
        },
            d = function d() {
          a.unbind("initialized", h), a.unbind("open", f), a.unbind("error", l), a.unbind("closed", p);
        };

        return a.bind("initialized", h), a.bind("open", f), a.bind("error", l), a.bind("closed", p), a.initialize(), {
          abort: function abort() {
            i || (d(), c ? c.close() : a.close());
          },
          forceMinPriority: function forceMinPriority(t) {
            i || n.priority < t && (c ? c.close() : a.close());
          }
        };
      }, t;
    }();

    function u(t, e) {
      return i["default"].defer(function () {
        e(t);
      }), {
        abort: function abort() {},
        forceMinPriority: function forceMinPriority() {}
      };
    }

    e["default"] = a;
  }, function (t, e, n) {
    "use strict";

    e.__esModule = !0;
    var r = n(9);
    e.getGlobalConfig = function () {
      return {
        wsHost: r["default"].host,
        wsPort: r["default"].ws_port,
        wssPort: r["default"].wss_port,
        wsPath: r["default"].ws_path,
        httpHost: r["default"].sockjs_host,
        httpPort: r["default"].sockjs_http_port,
        httpsPort: r["default"].sockjs_https_port,
        httpPath: r["default"].sockjs_path,
        statsHost: r["default"].stats_host,
        authEndpoint: r["default"].channel_auth_endpoint,
        authTransport: r["default"].channel_auth_transport,
        activity_timeout: r["default"].activity_timeout,
        pong_timeout: r["default"].pong_timeout,
        unavailable_timeout: r["default"].unavailable_timeout
      };
    }, e.getClusterConfig = function (t) {
      return {
        wsHost: "ws-" + t + ".pusher.com",
        httpHost: "sockjs-" + t + ".pusher.com"
      };
    };
  }]);
});
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/webpack/buildin/module.js */ "./node_modules/webpack/buildin/module.js")(module)))

/***/ }),

/***/ "./resources/js/sticky-sidebar.min.js":
/*!********************************************!*\
  !*** ./resources/js/sticky-sidebar.min.js ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(global) {var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

/**
 * sticky-sidebar - A JavaScript plugin for making smart and high performance.
 * @version v3.3.1
 * @link https://github.com/abouolia/sticky-sidebar
 * @author Ahmed Bouhuolia
 * @license The MIT License (MIT)
**/
!function (t, e) {
  "object" == ( false ? undefined : _typeof(exports)) && "undefined" != typeof module ? e(exports) :  true ? !(__WEBPACK_AMD_DEFINE_ARRAY__ = [exports], __WEBPACK_AMD_DEFINE_FACTORY__ = (e),
				__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
				(__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__)) : undefined;
}(this, function (t) {
  "use strict";

  "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self && self;
  var e,
      i,
      n = (function (t, e) {
    (function (t) {
      Object.defineProperty(t, "__esModule", {
        value: !0
      });

      var l,
          n,
          e = function () {
        function n(t, e) {
          for (var i = 0; i < e.length; i++) {
            var n = e[i];
            n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(t, n.key, n);
          }
        }

        return function (t, e, i) {
          return e && n(t.prototype, e), i && n(t, i), t;
        };
      }(),
          i = (l = ".stickySidebar", n = {
        topSpacing: 0,
        bottomSpacing: 0,
        containerSelector: !1,
        innerWrapperSelector: ".inner-wrapper-sticky",
        stickyClass: "is-affixed",
        resizeSensor: !0,
        minWidth: !1
      }, function () {
        function c(t) {
          var e = this,
              i = 1 < arguments.length && void 0 !== arguments[1] ? arguments[1] : {};
          if (function (t, e) {
            if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function");
          }(this, c), this.options = c.extend(n, i), this.sidebar = "string" == typeof t ? document.querySelector(t) : t, void 0 === this.sidebar) throw new Error("There is no specific sidebar element.");
          this.sidebarInner = !1, this.container = this.sidebar.parentElement, this.affixedType = "STATIC", this.direction = "down", this.support = {
            transform: !1,
            transform3d: !1
          }, this._initialized = !1, this._reStyle = !1, this._breakpoint = !1, this.dimensions = {
            translateY: 0,
            maxTranslateY: 0,
            topSpacing: 0,
            lastTopSpacing: 0,
            bottomSpacing: 0,
            lastBottomSpacing: 0,
            sidebarHeight: 0,
            sidebarWidth: 0,
            containerTop: 0,
            containerHeight: 0,
            viewportHeight: 0,
            viewportTop: 0,
            lastViewportTop: 0
          }, ["handleEvent"].forEach(function (t) {
            e[t] = e[t].bind(e);
          }), this.initialize();
        }

        return e(c, [{
          key: "initialize",
          value: function value() {
            var i = this;

            if (this._setSupportFeatures(), this.options.innerWrapperSelector && (this.sidebarInner = this.sidebar.querySelector(this.options.innerWrapperSelector), null === this.sidebarInner && (this.sidebarInner = !1)), !this.sidebarInner) {
              var t = document.createElement("div");

              for (t.setAttribute("class", "inner-wrapper-sticky"), this.sidebar.appendChild(t); this.sidebar.firstChild != t;) {
                t.appendChild(this.sidebar.firstChild);
              }

              this.sidebarInner = this.sidebar.querySelector(".inner-wrapper-sticky");
            }

            if (this.options.containerSelector) {
              var e = document.querySelectorAll(this.options.containerSelector);
              if ((e = Array.prototype.slice.call(e)).forEach(function (t, e) {
                t.contains(i.sidebar) && (i.container = t);
              }), !e.length) throw new Error("The container does not contains on the sidebar.");
            }

            "function" != typeof this.options.topSpacing && (this.options.topSpacing = parseInt(this.options.topSpacing) || 0), "function" != typeof this.options.bottomSpacing && (this.options.bottomSpacing = parseInt(this.options.bottomSpacing) || 0), this._widthBreakpoint(), this.calcDimensions(), this.stickyPosition(), this.bindEvents(), this._initialized = !0;
          }
        }, {
          key: "bindEvents",
          value: function value() {
            window.addEventListener("resize", this, {
              passive: !0,
              capture: !1
            }), window.addEventListener("scroll", this, {
              passive: !0,
              capture: !1
            }), this.sidebar.addEventListener("update" + l, this), this.options.resizeSensor && "undefined" != typeof ResizeSensor && (new ResizeSensor(this.sidebarInner, this.handleEvent), new ResizeSensor(this.container, this.handleEvent));
          }
        }, {
          key: "handleEvent",
          value: function value(t) {
            this.updateSticky(t);
          }
        }, {
          key: "calcDimensions",
          value: function value() {
            if (!this._breakpoint) {
              var t = this.dimensions;
              t.containerTop = c.offsetRelative(this.container).top, t.containerHeight = this.container.clientHeight, t.containerBottom = t.containerTop + t.containerHeight, t.sidebarHeight = this.sidebarInner.offsetHeight, t.sidebarWidth = this.sidebarInner.offsetWidth, t.viewportHeight = window.innerHeight, t.maxTranslateY = t.containerHeight - t.sidebarHeight, this._calcDimensionsWithScroll();
            }
          }
        }, {
          key: "_calcDimensionsWithScroll",
          value: function value() {
            var t = this.dimensions;
            t.sidebarLeft = c.offsetRelative(this.sidebar).left, t.viewportTop = document.documentElement.scrollTop || document.body.scrollTop, t.viewportBottom = t.viewportTop + t.viewportHeight, t.viewportLeft = document.documentElement.scrollLeft || document.body.scrollLeft, t.topSpacing = this.options.topSpacing, t.bottomSpacing = this.options.bottomSpacing, "function" == typeof t.topSpacing && (t.topSpacing = parseInt(t.topSpacing(this.sidebar)) || 0), "function" == typeof t.bottomSpacing && (t.bottomSpacing = parseInt(t.bottomSpacing(this.sidebar)) || 0), "VIEWPORT-TOP" === this.affixedType ? t.topSpacing < t.lastTopSpacing && (t.translateY += t.lastTopSpacing - t.topSpacing, this._reStyle = !0) : "VIEWPORT-BOTTOM" === this.affixedType && t.bottomSpacing < t.lastBottomSpacing && (t.translateY += t.lastBottomSpacing - t.bottomSpacing, this._reStyle = !0), t.lastTopSpacing = t.topSpacing, t.lastBottomSpacing = t.bottomSpacing;
          }
        }, {
          key: "isSidebarFitsViewport",
          value: function value() {
            var t = this.dimensions,
                e = "down" === this.scrollDirection ? t.lastBottomSpacing : t.lastTopSpacing;
            return this.dimensions.sidebarHeight + e < this.dimensions.viewportHeight;
          }
        }, {
          key: "observeScrollDir",
          value: function value() {
            var t = this.dimensions;

            if (t.lastViewportTop !== t.viewportTop) {
              var e = "down" === this.direction ? Math.min : Math.max;
              t.viewportTop === e(t.viewportTop, t.lastViewportTop) && (this.direction = "down" === this.direction ? "up" : "down");
            }
          }
        }, {
          key: "getAffixType",
          value: function value() {
            this._calcDimensionsWithScroll();

            var t = this.dimensions,
                e = t.viewportTop + t.topSpacing,
                i = this.affixedType;
            return e <= t.containerTop || t.containerHeight <= t.sidebarHeight ? (t.translateY = 0, i = "STATIC") : i = "up" === this.direction ? this._getAffixTypeScrollingUp() : this._getAffixTypeScrollingDown(), t.translateY = Math.max(0, t.translateY), t.translateY = Math.min(t.containerHeight, t.translateY), t.translateY = Math.round(t.translateY), t.lastViewportTop = t.viewportTop, i;
          }
        }, {
          key: "_getAffixTypeScrollingDown",
          value: function value() {
            var t = this.dimensions,
                e = t.sidebarHeight + t.containerTop,
                i = t.viewportTop + t.topSpacing,
                n = t.viewportBottom - t.bottomSpacing,
                o = this.affixedType;
            return this.isSidebarFitsViewport() ? t.sidebarHeight + i >= t.containerBottom ? (t.translateY = t.containerBottom - e, o = "CONTAINER-BOTTOM") : i >= t.containerTop && (t.translateY = i - t.containerTop, o = "VIEWPORT-TOP") : t.containerBottom <= n ? (t.translateY = t.containerBottom - e, o = "CONTAINER-BOTTOM") : e + t.translateY <= n ? (t.translateY = n - e, o = "VIEWPORT-BOTTOM") : t.containerTop + t.translateY <= i && 0 !== t.translateY && t.maxTranslateY !== t.translateY && (o = "VIEWPORT-UNBOTTOM"), o;
          }
        }, {
          key: "_getAffixTypeScrollingUp",
          value: function value() {
            var t = this.dimensions,
                e = t.sidebarHeight + t.containerTop,
                i = t.viewportTop + t.topSpacing,
                n = t.viewportBottom - t.bottomSpacing,
                o = this.affixedType;
            return i <= t.translateY + t.containerTop ? (t.translateY = i - t.containerTop, o = "VIEWPORT-TOP") : t.containerBottom <= n ? (t.translateY = t.containerBottom - e, o = "CONTAINER-BOTTOM") : this.isSidebarFitsViewport() || t.containerTop <= i && 0 !== t.translateY && t.maxTranslateY !== t.translateY && (o = "VIEWPORT-UNBOTTOM"), o;
          }
        }, {
          key: "_getStyle",
          value: function value(t) {
            if (void 0 !== t) {
              var e = {
                inner: {},
                outer: {}
              },
                  i = this.dimensions;

              switch (t) {
                case "VIEWPORT-TOP":
                  e.inner = {
                    position: "fixed",
                    top: i.topSpacing,
                    left: i.sidebarLeft - i.viewportLeft,
                    width: i.sidebarWidth
                  };
                  break;

                case "VIEWPORT-BOTTOM":
                  e.inner = {
                    position: "fixed",
                    top: "auto",
                    left: i.sidebarLeft,
                    bottom: i.bottomSpacing,
                    width: i.sidebarWidth
                  };
                  break;

                case "CONTAINER-BOTTOM":
                case "VIEWPORT-UNBOTTOM":
                  var n = this._getTranslate(0, i.translateY + "px");

                  e.inner = n ? {
                    transform: n
                  } : {
                    position: "absolute",
                    top: i.translateY,
                    width: i.sidebarWidth
                  };
              }

              switch (t) {
                case "VIEWPORT-TOP":
                case "VIEWPORT-BOTTOM":
                case "VIEWPORT-UNBOTTOM":
                case "CONTAINER-BOTTOM":
                  e.outer = {
                    height: i.sidebarHeight,
                    position: "relative"
                  };
              }

              return e.outer = c.extend({
                height: "",
                position: ""
              }, e.outer), e.inner = c.extend({
                position: "relative",
                top: "",
                left: "",
                bottom: "",
                width: "",
                transform: ""
              }, e.inner), e;
            }
          }
        }, {
          key: "stickyPosition",
          value: function value(t) {
            if (!this._breakpoint) {
              t = this._reStyle || t || !1, this.options.topSpacing, this.options.bottomSpacing;

              var e = this.getAffixType(),
                  i = this._getStyle(e);

              if ((this.affixedType != e || t) && e) {
                var n = "affix." + e.toLowerCase().replace("viewport-", "") + l;

                for (var o in c.eventTrigger(this.sidebar, n), "STATIC" === e ? c.removeClass(this.sidebar, this.options.stickyClass) : c.addClass(this.sidebar, this.options.stickyClass), i.outer) {
                  var s = "number" == typeof i.outer[o] ? "px" : "";
                  this.sidebar.style[o] = i.outer[o] + s;
                }

                for (var r in i.inner) {
                  var a = "number" == typeof i.inner[r] ? "px" : "";
                  this.sidebarInner.style[r] = i.inner[r] + a;
                }

                var p = "affixed." + e.toLowerCase().replace("viewport-", "") + l;
                c.eventTrigger(this.sidebar, p);
              } else this._initialized && (this.sidebarInner.style.left = i.inner.left);

              this.affixedType = e;
            }
          }
        }, {
          key: "_widthBreakpoint",
          value: function value() {
            window.innerWidth <= this.options.minWidth ? (this._breakpoint = !0, this.affixedType = "STATIC", this.sidebar.removeAttribute("style"), c.removeClass(this.sidebar, this.options.stickyClass), this.sidebarInner.removeAttribute("style")) : this._breakpoint = !1;
          }
        }, {
          key: "updateSticky",
          value: function value() {
            var t,
                e = this,
                i = 0 < arguments.length && void 0 !== arguments[0] ? arguments[0] : {};
            this._running || (this._running = !0, t = i.type, requestAnimationFrame(function () {
              switch (t) {
                case "scroll":
                  e._calcDimensionsWithScroll(), e.observeScrollDir(), e.stickyPosition();
                  break;

                case "resize":
                default:
                  e._widthBreakpoint(), e.calcDimensions(), e.stickyPosition(!0);
              }

              e._running = !1;
            }));
          }
        }, {
          key: "_setSupportFeatures",
          value: function value() {
            var t = this.support;
            t.transform = c.supportTransform(), t.transform3d = c.supportTransform(!0);
          }
        }, {
          key: "_getTranslate",
          value: function value() {
            var t = 0 < arguments.length && void 0 !== arguments[0] ? arguments[0] : 0,
                e = 1 < arguments.length && void 0 !== arguments[1] ? arguments[1] : 0,
                i = 2 < arguments.length && void 0 !== arguments[2] ? arguments[2] : 0;
            return this.support.transform3d ? "translate3d(" + t + ", " + e + ", " + i + ")" : !!this.support.translate && "translate(" + t + ", " + e + ")";
          }
        }, {
          key: "destroy",
          value: function value() {
            window.removeEventListener("resize", this, {
              capture: !1
            }), window.removeEventListener("scroll", this, {
              capture: !1
            }), this.sidebar.classList.remove(this.options.stickyClass), this.sidebar.style.minHeight = "", this.sidebar.removeEventListener("update" + l, this);
            var t = {
              inner: {},
              outer: {}
            };

            for (var e in t.inner = {
              position: "",
              top: "",
              left: "",
              bottom: "",
              width: "",
              transform: ""
            }, t.outer = {
              height: "",
              position: ""
            }, t.outer) {
              this.sidebar.style[e] = t.outer[e];
            }

            for (var i in t.inner) {
              this.sidebarInner.style[i] = t.inner[i];
            }

            this.options.resizeSensor && "undefined" != typeof ResizeSensor && (ResizeSensor.detach(this.sidebarInner, this.handleEvent), ResizeSensor.detach(this.container, this.handleEvent));
          }
        }], [{
          key: "supportTransform",
          value: function value(t) {
            var i = !1,
                e = t ? "perspective" : "transform",
                n = e.charAt(0).toUpperCase() + e.slice(1),
                o = document.createElement("support").style;
            return (e + " " + ["Webkit", "Moz", "O", "ms"].join(n + " ") + n).split(" ").forEach(function (t, e) {
              if (void 0 !== o[t]) return i = t, !1;
            }), i;
          }
        }, {
          key: "eventTrigger",
          value: function value(t, e, i) {
            try {
              var n = new CustomEvent(e, {
                detail: i
              });
            } catch (t) {
              (n = document.createEvent("CustomEvent")).initCustomEvent(e, !0, !0, i);
            }

            t.dispatchEvent(n);
          }
        }, {
          key: "extend",
          value: function value(t, e) {
            var i = {};

            for (var n in t) {
              void 0 !== e[n] ? i[n] = e[n] : i[n] = t[n];
            }

            return i;
          }
        }, {
          key: "offsetRelative",
          value: function value(t) {
            var e = {
              left: 0,
              top: 0
            };

            do {
              var i = t.offsetTop,
                  n = t.offsetLeft;
              isNaN(i) || (e.top += i), isNaN(n) || (e.left += n), t = "BODY" === t.tagName ? t.parentElement : t.offsetParent;
            } while (t);

            return e;
          }
        }, {
          key: "addClass",
          value: function value(t, e) {
            c.hasClass(t, e) || (t.classList ? t.classList.add(e) : t.className += " " + e);
          }
        }, {
          key: "removeClass",
          value: function value(t, e) {
            c.hasClass(t, e) && (t.classList ? t.classList.remove(e) : t.className = t.className.replace(new RegExp("(^|\\b)" + e.split(" ").join("|") + "(\\b|$)", "gi"), " "));
          }
        }, {
          key: "hasClass",
          value: function value(t, e) {
            return t.classList ? t.classList.contains(e) : new RegExp("(^| )" + e + "( |$)", "gi").test(t.className);
          }
        }, {
          key: "defaults",
          get: function get() {
            return n;
          }
        }]), c;
      }());

      t["default"] = i, window.StickySidebar = i;
    })(e);
  }(e = {
    exports: {}
  }, e.exports), e.exports),
      o = (i = n) && i.__esModule && Object.prototype.hasOwnProperty.call(i, "default") ? i["default"] : i;
  t["default"] = o, t.__moduleExports = n, Object.defineProperty(t, "__esModule", {
    value: !0
  });
});
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/webpack/buildin/global.js */ "./node_modules/webpack/buildin/global.js")))

/***/ }),

/***/ "./resources/sass/app.scss":
/*!*********************************!*\
  !*** ./resources/sass/app.scss ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ 0:
/*!*************************************************************!*\
  !*** multi ./resources/js/app.js ./resources/sass/app.scss ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(/*! /Users/davidbowick/code/songwriting-challenge/resources/js/app.js */"./resources/js/app.js");
module.exports = __webpack_require__(/*! /Users/davidbowick/code/songwriting-challenge/resources/sass/app.scss */"./resources/sass/app.scss");


/***/ })

/******/ });