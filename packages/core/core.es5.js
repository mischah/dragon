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
/******/ 	// identity function for calling harmony imports with the correct context
/******/ 	__webpack_require__.i = function(value) { return value; };
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
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
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 5);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
function middle(e, t) {
  var _ = function t() {
    var n = Array.prototype.slice.call(arguments);return void 0 === _._m_ctx && (_._m_ctx = this), _._m_stack.length === _._m_index ? (_._m_index = 0, e.apply(_._m_ctx, n)) : (n.unshift(t), _._m_stack[_._m_index++].apply(_._m_ctx, n));
  };return _._m_stack = [], _._m_index = 0, _._m_ctx = t, _.use = function (e, t) {
    _._m_stack.push(e.bind(t));
  }, _;
}function decorator(e, t, _) {
  if (e) {
    var n = _.writable,
        i = _.enumerable;return { get: function get() {
        var e = middle(_.value, this);return Object.defineProperty(this, t, { value: e, writable: n, enumerable: i }), e;
      } };
  }
}exports.decorator = decorator;
exports.default = middle;
//# sourceMappingURL=middle.es.js.map

/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});
exports.default = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _desc, _value, _class;

var _middle = __webpack_require__(0);

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) {
	var desc = {};
	Object['ke' + 'ys'](descriptor).forEach(function (key) {
		desc[key] = descriptor[key];
	});
	desc.enumerable = !!desc.enumerable;
	desc.configurable = !!desc.configurable;

	if ('value' in desc || desc.initializer) {
		desc.writable = true;
	}

	desc = decorators.slice().reverse().reduce(function (desc, decorator) {
		return decorator(target, property, desc) || desc;
	}, desc);

	if (context && desc.initializer !== void 0) {
		desc.value = desc.initializer ? desc.initializer.call(context) : void 0;
		desc.initializer = undefined;
	}

	if (desc.initializer === void 0) {
		Object['define' + 'Property'](target, property, desc);
		desc = null;
	}

	return desc;
}

var docElm = document.documentElement;

var Drag = (_class = function () {
	function Drag(item, config) {
		_classCallCheck(this, Drag);

		// this.mirror // mirror image
		// this.originContElm // source container element
		// this.originContainer // source Container object
		// this.itemElm // item element being dragged
		// this.itemOffsetX // reference x offset event from itemElement corner
		// this.itemOffsetY // reference y
		// this.x // reference move x - by default clientX + mirrorContainer.scrollX of first event occurrence starting the drag
		// this.y // reference move y
		// this.initialSibling // reference sibling when grabbed
		// this.currentSibling // reference sibling now
		// this.state // holds Drag state (grabbed, dragging, dropped...)

		this.id = 'dragID_' + Date.now();
		this.state = 'grabbed';
		this.item = item;
		this.itemElm = item.elm;
		this.originContainer = item.container;
		this.originContElm = item.container.elm;
		this.dragon = this.originContainer.dragon;
		this.utils = this.dragon.utils;
		this.domEventManager = this.dragon.domEventManager;
		this.domClassManager = this.dragon.domClassManager;
		this.findDropTarget = this.dragon.findDropTarget.bind(this.dragon);
		this.utils = item.utils;
		this.setConfig = this.utils.setConfig.bind(this, item);
		this.setConfig(config);
		this.getConfig = this.utils.getConfig.bind(this);

		if (this.getConfig('mouseEvents')) this.mouseEvents();
	}

	_createClass(Drag, [{
		key: 'destroy',
		value: function destroy() {

			this.release(this.x, this.y);
		}
	}, {
		key: 'mouseEvents',
		value: function mouseEvents(remove) {

			if (!this._mousemove) // if not initialised yet
				// use requestAnimationFrame while dragging if available
				if (window.requestAnimationFrame) {

					this.move_e = null;
					this._mousemove = this._mousemoveAF;
				} else this._mousemove = this.mousemove;

			var op = remove ? 'remove' : 'add';
			this.domEventManager(docElm, op, 'mouseup', this.utils.bind(this, 'mouseup'));
			this.domEventManager(docElm, op, 'mousemove', this.utils.bind(this, '_mousemove'));
			this.domEventManager(docElm, op, 'selectstart', this.utils.bind(this, 'protectGrab')); // IE8
			this.domEventManager(docElm, op, 'click', this.utils.bind(this, 'protectGrab'));
		}
	}, {
		key: 'protectGrab',
		value: function protectGrab(e) {

			if (this.state == 'grabbed') {
				e.preventDefault();
			}
		}
	}, {
		key: 'mousemove',
		value: function mousemove(e) {

			if (!e.target) {

				e = this.move_e;
				this.move_e = false;
			}

			if (this.state == 'grabbed') {

				this.startByMouseMove(e);
				return;
			}

			if (this.state != 'dragging') {

				this.cancel();
				return;
			}

			e.preventDefault();

			this.drag(this.utils.getCoord('clientX', e), this.utils.getCoord('clientY', e));
		}
	}, {
		key: '_mousemoveAF',
		value: function _mousemoveAF(e) {

			if (!this.move_e) this.actualFrame = window.requestAnimationFrame(this.mousemove);

			this.move_e = e;
		}
	}, {
		key: 'startByMouseMove',
		value: function startByMouseMove(e) {

			// if (whichMouseButton(e) === 0) {
			//   release({})
			//   return // when text is selected on an input and then dragged, mouseup doesn't fire. this is our only hope
			// }

			if (this.x == undefined) {

				this.x = this.utils.getCoord('clientX', e), this.y = this.utils.getCoord('clientY', e);
				return;
			}

			// truthy check fixes github.com/bevacqua/dragula/issues/239, equality fixes github.com/bevacqua/dragula/issues/207
			if (e.clientX !== void 0 && e.clientX === this.x && e.clientY !== void 0 && e.clientY === this.y) return;

			var offset = this.utils.getOffset(this.itemElm);

			this.start(this.utils.getCoord('pageX', e) - offset.left, this.utils.getCoord('pageY', e) - offset.top);
		}
	}, {
		key: 'start',
		value: function start(x, y) {

			if (this.state != 'grabbed') return;

			x = x || 0;
			y = y || 0;

			this._cachedAbs = this.getConfig('mirrorAbsolute');
			this._cachedDir = this.getConfig('direction');

			var itemPosition = this._cachedAbs ? this.utils.getOffset(this.itemElm) : this.itemElm.getBoundingClientRect();

			if (this.x == undefined) this.x = itemPosition.left + x;

			if (this.y == undefined) this.y = itemPosition.top + y;

			// offset of mouse event from top left corner of the itemElm
			this.itemOffsetX = x;
			this.itemOffsetY = y;

			this.initialSibling = this.currentSibling = this.utils.nextEl(this.itemElm);
			this.domClassManager.add(this.itemElm, 'dragon-transit');
			this.mirror = this.renderMirrorImage(this.itemElm, this.getConfig('mirrorContainer'));

			this.state = 'dragging';
		}
	}, {
		key: 'drag',
		value: function drag(x, y) {
			var _this = this;

			if (this.state != 'dragging') return;

			var mirrorX = x - this.itemOffsetX;
			var mirrorY = y - this.itemOffsetY;
			var mirror = this.mirror;

			this.x = x;
			this.y = y;

			mirror.style.left = mirrorX + 'px';
			mirror.style.top = mirrorY + 'px';

			var elementBehindPoint = this.utils.getElementBehindPoint(mirror, x, y, this._cachedAbs);
			var dropTarget = this.findDropTarget(elementBehindPoint);
			var reference = void 0;
			var immediate = dropTarget && this.utils.getImmediateChild(dropTarget, elementBehindPoint);

			if (immediate) {
				reference = this.utils.getReference(dropTarget, immediate, x, y, this._cachedDir, this._cachedAbs);
			} else {
				return;
			}

			if (reference === null || reference !== this.itemElm && reference !== this.currentSibling) {

				this.utils.hierarchySafe(
				// dom edit fn to protect
				function () {
					return dropTarget.insertBefore(_this.itemElm, reference);
				},
				// success callback
				function () {
					return _this.currentSibling = reference;
				});
			}
		}
	}, {
		key: 'renderMirrorImage',
		value: function renderMirrorImage(itemElm, mirrorContainer) {

			var rect = itemElm.getBoundingClientRect();
			var mirrorWithParent = this.getConfig('mirrorWithParent');
			var mirror = mirrorWithParent ? this.utils.getParent(itemElm).cloneNode(false) : itemElm.cloneNode(true);

			if (mirrorWithParent) mirror.appendChild(itemElm.cloneNode(true));

			mirror.style.width = this.utils.getRectWidth(rect) + 'px';
			mirror.style.height = this.utils.getRectHeight(rect) + 'px';
			this.domClassManager.rm(mirror, 'dragon-transit');

			if (this.getConfig('mirrorAbsolute')) this.domClassManager.add(mirror, 'dragon-mirror-abs');else this.domClassManager.add(mirror, 'dragon-mirror');

			if (!mirrorContainer) mirrorContainer = (mirrorWithParent ? this.utils.getParent(this.utils.getParent(itemElm)) : this.utils.getParent(itemElm)) || document.body;

			mirrorContainer.appendChild(mirror);
			this.domClassManager.add(mirrorContainer, 'dragon-unselectable');

			return mirror;
		}
	}, {
		key: 'removeMirrorImage',
		value: function removeMirrorImage() {

			var mirrorContainer = this.utils.getParent(this.mirror);
			this.domClassManager.rm(mirrorContainer, 'dragon-unselectable');
			mirrorContainer.removeChild(this.mirror);
			this.mirror = null;
		}
	}, {
		key: 'mouseup',
		value: function mouseup(e) {

			this.release(this.utils.getCoord('clientX', e), this.utils.getCoord('clientY', e));
		}
	}, {
		key: 'release',
		value: function release(x, y) {

			if (x == undefined) x = this.x;

			if (y == undefined) y = this.y;

			if (this.state != 'dragging') return this.cancel();

			this.state = 'released';

			// if requestAnimationFrame mode is used, cancel latest request
			if (this.actualFrame) {
				window.cancelAnimationFrame(this.actualFrame);
				this.actualFrame = null;
			}

			var elementBehindPoint = this.utils.getElementBehindPoint(this.mirror, x, y, this._cachedAbs);
			var dropTarget = this.findDropTarget(elementBehindPoint);

			if (dropTarget && dropTarget !== this.originContElm) {

				this.drop(dropTarget);
			} else {

				this.cancel();
			}
		}
	}, {
		key: 'drop',
		value: function drop(dropTarget) {

			if (this.state != 'dragging' && this.state != 'released') return;

			var container = this.dragon.getContainer(dropTarget);
			container.addItem(this.item, this.utils.domIndexOf(dropTarget, this.itemElm));
			this.state = 'dropped';

			this.cleanup();
		}
	}, {
		key: 'remove',
		value: function remove() {

			if (this.state != 'dragging') return;

			var parent = this.utils.getParent(this.itemElm);
			if (parent) {
				parent.removeChild(this.itemElm);
			}

			this.state = 'removed';

			this.cleanup();
		}
	}, {
		key: 'cancel',
		value: function cancel(reverts) {

			if (this.state == 'dragging') {

				var parent = this.utils.getParent(this.itemElm);
				var initial = this.isInitialPlacement(parent);
				if (initial === false && reverts) {
					this.originContElm.insertBefore(this.itemElm, this.initialSibling);
				}
			}

			this.state = 'cancelled';

			this.cleanup();
		}
	}, {
		key: 'cleanup',
		value: function cleanup() {

			this.mouseEvents('remove');

			if (this.mirror) this.removeMirrorImage();

			if (this.itemElm) {
				this.domClassManager.rm(this.itemElm, 'dragon-transit');
			}
		}
	}, {
		key: 'isInitialPlacement',
		value: function isInitialPlacement(target, s) {

			var sibling = void 0;

			if (s !== void 0) {

				sibling = s;
			} else if (this.mirror) {

				sibling = this.currentSibling;
			} else {

				sibling = this.utils.nextEl(this.itemElm);
			}

			return target === this.originContElm && sibling === this.initialSibling;
		}
	}]);

	return Drag;
}(), (_applyDecoratedDescriptor(_class.prototype, 'destroy', [_middle.decorator], Object.getOwnPropertyDescriptor(_class.prototype, 'destroy'), _class.prototype), _applyDecoratedDescriptor(_class.prototype, 'mouseEvents', [_middle.decorator], Object.getOwnPropertyDescriptor(_class.prototype, 'mouseEvents'), _class.prototype), _applyDecoratedDescriptor(_class.prototype, 'protectGrab', [_middle.decorator], Object.getOwnPropertyDescriptor(_class.prototype, 'protectGrab'), _class.prototype), _applyDecoratedDescriptor(_class.prototype, 'mousemove', [_middle.decorator], Object.getOwnPropertyDescriptor(_class.prototype, 'mousemove'), _class.prototype), _applyDecoratedDescriptor(_class.prototype, 'startByMouseMove', [_middle.decorator], Object.getOwnPropertyDescriptor(_class.prototype, 'startByMouseMove'), _class.prototype), _applyDecoratedDescriptor(_class.prototype, 'start', [_middle.decorator], Object.getOwnPropertyDescriptor(_class.prototype, 'start'), _class.prototype), _applyDecoratedDescriptor(_class.prototype, 'drag', [_middle.decorator], Object.getOwnPropertyDescriptor(_class.prototype, 'drag'), _class.prototype), _applyDecoratedDescriptor(_class.prototype, 'renderMirrorImage', [_middle.decorator], Object.getOwnPropertyDescriptor(_class.prototype, 'renderMirrorImage'), _class.prototype), _applyDecoratedDescriptor(_class.prototype, 'removeMirrorImage', [_middle.decorator], Object.getOwnPropertyDescriptor(_class.prototype, 'removeMirrorImage'), _class.prototype), _applyDecoratedDescriptor(_class.prototype, 'mouseup', [_middle.decorator], Object.getOwnPropertyDescriptor(_class.prototype, 'mouseup'), _class.prototype), _applyDecoratedDescriptor(_class.prototype, 'release', [_middle.decorator], Object.getOwnPropertyDescriptor(_class.prototype, 'release'), _class.prototype), _applyDecoratedDescriptor(_class.prototype, 'drop', [_middle.decorator], Object.getOwnPropertyDescriptor(_class.prototype, 'drop'), _class.prototype), _applyDecoratedDescriptor(_class.prototype, 'remove', [_middle.decorator], Object.getOwnPropertyDescriptor(_class.prototype, 'remove'), _class.prototype), _applyDecoratedDescriptor(_class.prototype, 'cancel', [_middle.decorator], Object.getOwnPropertyDescriptor(_class.prototype, 'cancel'), _class.prototype), _applyDecoratedDescriptor(_class.prototype, 'cleanup', [_middle.decorator], Object.getOwnPropertyDescriptor(_class.prototype, 'cleanup'), _class.prototype), _applyDecoratedDescriptor(_class.prototype, 'isInitialPlacement', [_middle.decorator], Object.getOwnPropertyDescriptor(_class.prototype, 'isInitialPlacement'), _class.prototype)), _class);
exports.default = Drag;

/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});
exports.default = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _desc, _value, _class;

var _drag = __webpack_require__(1);

var _drag2 = _interopRequireDefault(_drag);

var _middle = __webpack_require__(0);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) {
	var desc = {};
	Object['ke' + 'ys'](descriptor).forEach(function (key) {
		desc[key] = descriptor[key];
	});
	desc.enumerable = !!desc.enumerable;
	desc.configurable = !!desc.configurable;

	if ('value' in desc || desc.initializer) {
		desc.writable = true;
	}

	desc = decorators.slice().reverse().reduce(function (desc, decorator) {
		return decorator(target, property, desc) || desc;
	}, desc);

	if (context && desc.initializer !== void 0) {
		desc.value = desc.initializer ? desc.initializer.call(context) : void 0;
		desc.initializer = undefined;
	}

	if (desc.initializer === void 0) {
		Object['define' + 'Property'](target, property, desc);
		desc = null;
	}

	return desc;
}

var Item = (_class = function () {
	function Item(container, elm, config) {
		_classCallCheck(this, Item);

		if (!config) config = {};

		this.Drag = _drag2.default;
		this.id = config.id || 'itemID_' + Date.now();
		this.container = container;
		this.utils = container.utils;
		this.setConfig = this.utils.setConfig.bind(this, container);
		this.setConfig(config);
		this.getConfig = this.utils.getConfig.bind(this);
		this.elm = elm;
	}

	_createClass(Item, [{
		key: 'grab',
		value: function grab() {

			this.drag = new this.Drag(this);
			return this.drag;
		}
	}]);

	return Item;
}(), (_applyDecoratedDescriptor(_class.prototype, 'grab', [_middle.decorator], Object.getOwnPropertyDescriptor(_class.prototype, 'grab'), _class.prototype)), _class);
exports.default = Item;

/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});
exports.default = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _desc, _value, _class;

var _item = __webpack_require__(2);

var _item2 = _interopRequireDefault(_item);

var _middle = __webpack_require__(0);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) {
	var desc = {};
	Object['ke' + 'ys'](descriptor).forEach(function (key) {
		desc[key] = descriptor[key];
	});
	desc.enumerable = !!desc.enumerable;
	desc.configurable = !!desc.configurable;

	if ('value' in desc || desc.initializer) {
		desc.writable = true;
	}

	desc = decorators.slice().reverse().reduce(function (desc, decorator) {
		return decorator(target, property, desc) || desc;
	}, desc);

	if (context && desc.initializer !== void 0) {
		desc.value = desc.initializer ? desc.initializer.call(context) : void 0;
		desc.initializer = undefined;
	}

	if (desc.initializer === void 0) {
		Object['define' + 'Property'](target, property, desc);
		desc = null;
	}

	return desc;
}

var Container = (_class = function () {
	function Container(dragon, elm, config) {
		_classCallCheck(this, Container);

		if (!config) config = {};

		this.id = config.id || 'containerID_' + Date.now();
		this.utils = dragon.utils;
		this.setConfig = this.utils.setConfig.bind(this, dragon);
		this.setConfig(config);
		this.getConfig = this.utils.getConfig.bind(this);

		this.dragon = dragon;
		this.items = [];
		this.elm = elm;
		this.Item = _item2.default;

		this._initItems();
	}

	_createClass(Container, [{
		key: 'grab',
		value: function grab(itemElm) {

			var item = this.items[this.utils.getIndexByElm(this.items, itemElm)];
			return item ? item.grab() : null;
		}
	}, {
		key: '_initItem',
		value: function _initItem(itemOrElm) {

			this.addItem(itemOrElm, this.items.length, null, true);
		}
	}, {
		key: 'addItem',
		value: function addItem(itemOrElm, index, config, init) {

			index = index || 0;

			var item = void 0;

			if (itemOrElm instanceof _item2.default) {

				itemOrElm.container = this;
				item = itemOrElm;
			} else {

				item = new this.Item(this, itemOrElm, config);
			}

			this.items.splice(index, 0, item);

			if (!init && !this.elm.contains(item.elm)) {
				// sync DOM
				var reference = this.elm.children[index];

				if (reference) this.elm.insertBefore(item.elm, reference);else this.elm.appendChild(item.elm);
			}

			return item;
		}
	}, {
		key: 'removeItem',
		value: function removeItem(itemOrElm) {

			var index = void 0;
			var item = void 0;

			if (itemOrElm instanceof _item2.default) {

				itemOrElm.container = null;
				index = this.items.indexOf(itemOrElm);
			} else {

				index = this.utils.getIndexByElm(this.items, itemOrElm);
			}

			item = this.items.splice(index, 1)[0];

			if (this.elm.contains(item.elm)) {
				// sync DOM
				this.elm.removeChild(item.elm);
			}

			return item;
		}
	}, {
		key: '_initItems',
		value: function _initItems() {

			var arr = this.utils.toArray(this.elm.children);
			var len = arr.length;

			for (var i = 0; i < len; i++) {
				this._initItem(arr[i]);
			}
		}
	}]);

	return Container;
}(), (_applyDecoratedDescriptor(_class.prototype, 'grab', [_middle.decorator], Object.getOwnPropertyDescriptor(_class.prototype, 'grab'), _class.prototype), _applyDecoratedDescriptor(_class.prototype, 'addItem', [_middle.decorator], Object.getOwnPropertyDescriptor(_class.prototype, 'addItem'), _class.prototype), _applyDecoratedDescriptor(_class.prototype, 'removeItem', [_middle.decorator], Object.getOwnPropertyDescriptor(_class.prototype, 'removeItem'), _class.prototype)), _class);
exports.default = Container;

/***/ }),
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});
exports.default = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _desc, _value, _class;

var _container = __webpack_require__(3);

var _container2 = _interopRequireDefault(_container);

var _item = __webpack_require__(2);

var _item2 = _interopRequireDefault(_item);

var _drag = __webpack_require__(1);

var _drag2 = _interopRequireDefault(_drag);

var _middle = __webpack_require__(0);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) {
	var desc = {};
	Object['ke' + 'ys'](descriptor).forEach(function (key) {
		desc[key] = descriptor[key];
	});
	desc.enumerable = !!desc.enumerable;
	desc.configurable = !!desc.configurable;

	if ('value' in desc || desc.initializer) {
		desc.writable = true;
	}

	desc = decorators.slice().reverse().reduce(function (desc, decorator) {
		return decorator(target, property, desc) || desc;
	}, desc);

	if (context && desc.initializer !== void 0) {
		desc.value = desc.initializer ? desc.initializer.call(context) : void 0;
		desc.initializer = undefined;
	}

	if (desc.initializer === void 0) {
		Object['define' + 'Property'](target, property, desc);
		desc = null;
	}

	return desc;
}

var doc = document;

if (!window.dragonSpace) window.dragonSpace = {};
var space = window.dragonSpace;

// ==============================================================================================================================================================
// Dragon =====================================================================================================================================================
// =============================================================================================================================================================
/** is group of containers */
var Dragon = (_class = function () {
	function Dragon(config, utils, domEventManager, domClassManager) {
		_classCallCheck(this, Dragon);

		if (!utils || !domEventManager || !domClassManager) throw new Error('Dragon: dependencies not sattisfied!');

		config = config || {};

		if (config.nodeType == 1) // is DOM Element
			config = { containers: [config] };

		if (typeof config.length !== 'undefined') // is array-like
			config = { containers: utils.ensureArray(config) };

		this.domEventManager = domEventManager;
		this.domClassManager = domClassManager;
		this.using = []; // array of plugins using by this dragon
		this.defaults = {
			config: {
				mouseEvents: true,
				mirrorAbsolute: false,
				mirrorWithParent: true,
				mirrorContainer: null
			}
		};
		this.utils = utils;
		this.initSpace(config.space);
		this.setConfig = this.utils.setConfig.bind(this, space);
		this.setConfig(config);
		this.getConfig = utils.getConfig.bind(this);
		this.id = config.id || 'dragonID_' + Date.now();
		this.containers = [];
		this.space = space;
		this.Container = _container2.default;
		space.dragons.push(this);

		this.addContainers();
	}

	_createClass(Dragon, [{
		key: 'initSpace',
		value: function initSpace(newSpace) {
			var _this = this;

			if (newSpace) space = newSpace;

			if (!space.config) {
				// initialisation

				if (!space.dragons) space.dragons = [];
				if (!space.drags) space.drags = [];
				if (!space.utils) space.utils = this.utils;

				if (!space.Dragon) space.Dragon = Dragon;
				if (!space.Container) space.Container = _container2.default;
				if (!space.Item) space.Item = _item2.default;
				if (!space.Drag) space.Drag = _drag2.default;

				// space.setConfig = this.utils.setConfig.bind( space, space, this.defaults, space.config )
				space.getConfig = this.utils.getConfig.bind(space);
				space.setConfig = this.utils.setConfig.bind(space, this.defaults);
				space.setConfig({});

				this.domEventManager(document.documentElement, 'add', 'mousedown', function (e) {

					if (_this.utils.whichMouseButton(e) == 3) return; // prevent right click dragging

					e.preventDefault(); // fixes github.com/bevacqua/dragula/issues/155

					if (_this.utils.isInput(e.target)) {
						// see also: github.com/bevacqua/dragula/issues/208
						e.target.focus(); // fixes github.com/bevacqua/dragula/issues/176
						return;
					}

					_this.grab(_this.utils.getCoord('clientX', e), _this.utils.getCoord('clientY', e), e.target);
				});
			}
		}
	}, {
		key: 'addContainers',
		value: function addContainers(containerElms, config) {

			containerElms = containerElms || this.config.containers;

			if (!containerElms) return;

			containerElms = this.utils.ensureArray(containerElms);

			var len = containerElms.length;
			var addedContainers = [];

			for (var i = 0, elm, container; i < len; i++) {

				elm = containerElms[i];

				if (this.getContainer(elm)) {

					/* eslint-disable no-console */
					console.warn('container already registered', elm);
					/* eslint-enable no-console */
				} else {

					container = new this.Container(this, elm, config);
					this.containers.push(container);
					addedContainers.push(container);
				}
			}

			return addedContainers;
		}
	}, {
		key: 'getContainer',
		value: function getContainer(elm, own) {

			if (own) return this.containers[this.utils.getIndexByElm(this.containers, elm)];

			var dragons = space.dragons;
			var dragonsLen = dragons.length;

			for (var i = 0, ii; i < dragonsLen; i++) {

				ii = this.utils.getIndexByElm(dragons[i].containers, elm);

				if (ii > -1) return dragons[i].containers[ii];
			}

			return null;
		}
	}, {
		key: 'grab',
		value: function grab(xOrElm, y) {

			var itemElm = y == undefined ? xOrElm : doc.elementFromPoint(xOrElm, y);
			var parentElm = itemElm;
			var container = void 0;
			var index = void 0;
			var drag = void 0;

			do {
				itemElm = parentElm; // drag target should be a top element
				parentElm = this.utils.getParent(itemElm);
			} while (parentElm && !this.getContainer(parentElm));

			if (!parentElm) {
				// container not found, so don't grab
				return;
			}

			index = this.utils.getIndexByElm(this.containers, parentElm);
			container = this.containers[index];
			drag = container.grab(itemElm);
			space.drags.push(drag);
			return drag;
		}
	}, {
		key: 'findDropTarget',
		value: function findDropTarget(target) {

			while (target && !this.getContainer(target)) {
				target = this.utils.getParent(target);
			}

			return target;
		}
	}, {
		key: 'use',
		value: function use(plugins) {
			var _this2 = this;

			if (!Array.isArray(plugins)) plugins = [plugins];

			plugins.forEach(function (plugin) {
				return _this2.using.indexOf(plugin) > -1 ? 0 : plugin(_this2);
			});

			return this;
		}
	}]);

	return Dragon;
}(), (_applyDecoratedDescriptor(_class.prototype, 'initSpace', [_middle.decorator], Object.getOwnPropertyDescriptor(_class.prototype, 'initSpace'), _class.prototype), _applyDecoratedDescriptor(_class.prototype, 'addContainers', [_middle.decorator], Object.getOwnPropertyDescriptor(_class.prototype, 'addContainers'), _class.prototype), _applyDecoratedDescriptor(_class.prototype, 'getContainer', [_middle.decorator], Object.getOwnPropertyDescriptor(_class.prototype, 'getContainer'), _class.prototype), _applyDecoratedDescriptor(_class.prototype, 'grab', [_middle.decorator], Object.getOwnPropertyDescriptor(_class.prototype, 'grab'), _class.prototype), _applyDecoratedDescriptor(_class.prototype, 'findDropTarget', [_middle.decorator], Object.getOwnPropertyDescriptor(_class.prototype, 'findDropTarget'), _class.prototype), _applyDecoratedDescriptor(_class.prototype, 'use', [_middle.decorator], Object.getOwnPropertyDescriptor(_class.prototype, 'use'), _class.prototype)), _class);
exports.default = Dragon;

/***/ }),
/* 5 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _dragon = __webpack_require__(4);

Object.defineProperty(exports, 'Dragon', {
  enumerable: true,
  get: function get() {
    return _dragon.Dragon;
  }
});

var _container = __webpack_require__(3);

Object.defineProperty(exports, 'Container', {
  enumerable: true,
  get: function get() {
    return _container.Container;
  }
});

var _item = __webpack_require__(2);

Object.defineProperty(exports, 'Item', {
  enumerable: true,
  get: function get() {
    return _item.Item;
  }
});

var _drag = __webpack_require__(1);

Object.defineProperty(exports, 'Drag', {
  enumerable: true,
  get: function get() {
    return _drag.Drag;
  }
});

/***/ })
/******/ ]);