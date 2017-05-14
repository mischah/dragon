function useNative(){try{var e=new NativeCustomEvent("cat",{detail:{foo:"bar"}});return"cat"===e.type&&"bar"===e.detail.foo}catch(e){}return!1}function addEventEasy(e,t,r,o){return e.addEventListener(t,r,o)}function addEventHard(e,t,r){return e.attachEvent("on"+t,wrap(e,t,r))}function removeEventEasy(e,t,r,o){return e.removeEventListener(t,r,o)}function removeEventHard(e,t,r){var o=unwrap(e,t,r);if(o)return e.detachEvent("on"+t,o)}function fabricateEvent(e,t,r){var o=-1===eventmap_1.indexOf(t)?function(){return new index(t,{detail:r})}():function(){var e;return doc$1.createEvent?(e=doc$1.createEvent("Event")).initEvent(t,!0,!0):doc$1.createEventObject&&(e=doc$1.createEventObject()),e}();e.dispatchEvent?e.dispatchEvent(o):e.fireEvent("on"+t,o)}function wrapperFactory(e,t,r){return function(t){var o=t||commonjsGlobal.event;o.target=o.target||o.srcElement,o.preventDefault=o.preventDefault||function(){o.returnValue=!1},o.stopPropagation=o.stopPropagation||function(){o.cancelBubble=!0},o.which=o.which||o.keyCode,r.call(e,o)}}function wrap(e,t,r){var o=unwrap(e,t,r)||wrapperFactory(e,t,r);return hardCache.push({wrapper:o,element:e,type:t,fn:r}),o}function unwrap(e,t,r){var o=find(e,t,r);if(o){var n=hardCache[o].wrapper;return hardCache.splice(o,1),n}}function find(e,t,r){var o,n;for(o=0;o<hardCache.length;o++)if((n=hardCache[o]).element===e&&n.type===t&&n.fn===r)return o}function getImmediateChild(e,t){for(var r=t;r!==e&&getParent(r)!==e;)r=getParent(r);return r===docElm?null:r}function getReference(e,t,r,o,n){function i(e){return e?nextEl(t):t}var a="horizontal"===n;return t!==e?function(){var e=t.getBoundingClientRect();return i(a?r>e.left+getRectWidth(e)/2:o>e.top+getRectHeight(e)/2)}():function(){var t=e.children.length,n=void 0,i=void 0,s=void 0;for(n=0;n<t;n++){if(i=e.children[n],s=i.getBoundingClientRect(),a&&s.left+s.width/2>r)return i;if(!a&&s.top+s.height/2>o)return i}return null}()}function getCoord(e,t){var r=getEventHost(t),o={pageX:"clientX",pageY:"clientY"};return e in o&&!(e in r)&&o[e]in r&&(e=o[e]),r[e]}function getEventHost(e){return e.targetTouches&&e.targetTouches.length?e.targetTouches[0]:e.changedTouches&&e.changedTouches.length?e.changedTouches[0]:e}function getOffset(e){var t=e.getBoundingClientRect();return{left:t.left+getScroll("scrollLeft","pageXOffset"),top:t.top+getScroll("scrollTop","pageYOffset")}}function getScroll(e,t){return void 0!==global[t]?global[t]:docElm.clientHeight?docElm[e]:doc$2.body[e]}function getElementBehindPoint(e,t,r){var o=e.className,n=void 0;return e.className+=" gu-hide",n=doc$2.elementFromPoint(t,r),e.className=o,n}function getRectWidth(e){return e.width||e.right-e.left}function getRectHeight(e){return e.height||e.bottom-e.top}function getParent(e){return e.parentNode===doc$2?null:e.parentNode}function nextEl(e){return e.nextElementSibling||function(){var t=e;do{t=t.nextSibling}while(t&&1!==t.nodeType);return t}()}function toArray(e){return[].slice.call(e)}function bind(e,t){var r="binded"+t;return e[r]||(e[r]=function(){e[t].apply(e,arguments)}),e[r]}function domIndexOf(e,t){return Array.prototype.indexOf.call(e.children,t)}function isInput(e){return"INPUT"===e.tagName||"TEXTAREA"===e.tagName||"SELECT"===e.tagName||isEditable(e)}function isEditable(e){return!!e&&("false"!==e.contentEditable&&("true"===e.contentEditable||isEditable(getParent(e))))}function lookUpByElm(e,t){for(var r=e.length,o=0;o<r;o++)if(e[o].elm==t)return o;return-1}function lookupClass(e){var t=cache[e];return t?t.lastIndex=0:cache[e]=t=new RegExp(start+e+end,"g"),t}function addClass(e,t){var r=e.className;r.length?lookupClass(t).test(r)||(e.className+=" "+t):e.className=t}function rmClass(e,t){e.className=e.className.replace(lookupClass(t)," ").trim()}function middle(e,t){var r=function t(){var o=Array.prototype.slice.call(arguments);return void 0===r._m_ctx&&(r._m_ctx=this),r._m_stack.length===r._m_index?(r._m_index=0,e.apply(r._m_ctx,o)):(o.unshift(t),r._m_stack[r._m_index++].apply(r._m_ctx,o))};return r._m_stack=[],r._m_index=0,r._m_ctx=t,r.use=function(e,t){r._m_stack.push(e.bind(t))},r}function decorator(e,t,r){if(e){var o=r.writable,n=r.enumerable;return{get:function(){var e=middle(r.value,this);return Object.defineProperty(this,t,{value:e,writable:o,enumerable:n}),e}}}}function _applyDecoratedDescriptor$3(e,t,r,o,n){var i={};return Object.keys(o).forEach(function(e){i[e]=o[e]}),i.enumerable=!!i.enumerable,i.configurable=!!i.configurable,("value"in i||i.initializer)&&(i.writable=!0),i=r.slice().reverse().reduce(function(r,o){return o(e,t,r)||r},i),n&&void 0!==i.initializer&&(i.value=i.initializer?i.initializer.call(n):void 0,i.initializer=void 0),void 0===i.initializer&&(Object.defineProperty(e,t,i),i=null),i}function _applyDecoratedDescriptor$2(e,t,r,o,n){var i={};return Object.keys(o).forEach(function(e){i[e]=o[e]}),i.enumerable=!!i.enumerable,i.configurable=!!i.configurable,("value"in i||i.initializer)&&(i.writable=!0),i=r.slice().reverse().reduce(function(r,o){return o(e,t,r)||r},i),n&&void 0!==i.initializer&&(i.value=i.initializer?i.initializer.call(n):void 0,i.initializer=void 0),void 0===i.initializer&&(Object.defineProperty(e,t,i),i=null),i}function _applyDecoratedDescriptor$1(e,t,r,o,n){var i={};return Object.keys(o).forEach(function(e){i[e]=o[e]}),i.enumerable=!!i.enumerable,i.configurable=!!i.configurable,("value"in i||i.initializer)&&(i.writable=!0),i=r.slice().reverse().reduce(function(r,o){return o(e,t,r)||r},i),n&&void 0!==i.initializer&&(i.value=i.initializer?i.initializer.call(n):void 0,i.initializer=void 0),void 0===i.initializer&&(Object.defineProperty(e,t,i),i=null),i}function _applyDecoratedDescriptor(e,t,r,o,n){var i={};return Object.keys(o).forEach(function(e){i[e]=o[e]}),i.enumerable=!!i.enumerable,i.configurable=!!i.configurable,("value"in i||i.initializer)&&(i.writable=!0),i=r.slice().reverse().reduce(function(r,o){return o(e,t,r)||r},i),n&&void 0!==i.initializer&&(i.value=i.initializer?i.initializer.call(n):void 0,i.initializer=void 0),void 0===i.initializer&&(Object.defineProperty(e,t,i),i=null),i}!function(){function e(e){this.el=e;for(var t=e.className.replace(/^\s+|\s+$/g,"").split(/\s+/),o=0;o<t.length;o++)r.call(this,t[o])}if(!(void 0===window.Element||"classList"in document.documentElement)){var t=Array.prototype,r=t.push,o=t.splice,n=t.join;e.prototype={add:function(e){this.contains(e)||(r.call(this,e),this.el.className=this.toString())},contains:function(e){return-1!=this.el.className.indexOf(e)},item:function(e){return this[e]||null},remove:function(e){if(this.contains(e)){var t=void 0;for(t=0;t<this.length&&this[t]!=e;t++);o.call(this,t,1),this.el.className=this.toString()}},toString:function(){return n.call(this," ")},toggle:function(e){return this.contains(e)?this.remove(e):this.add(e),this.contains(e)}},window.DOMTokenList=e,function(e,t,r){Object.defineProperty?Object.defineProperty(e,t,{get:r}):e.__defineGetter__(t,r)}(Element.prototype,"classList",function(){return new e(this)})}}(),Date.now||(Date.now=function(){return(new Date).getTime()}),Function.prototype.bind||(Function.prototype.bind=function(e){if("function"!=typeof this)throw new TypeError("Function.prototype.bind - what is trying to be bound is not callable");var t=Array.prototype.slice.call(arguments,1),r=this,o=function(){},n=function(){return r.apply(this instanceof o?this:e,t.concat(Array.prototype.slice.call(arguments)))};return this.prototype&&(o.prototype=this.prototype),n.prototype=new o,n});var commonjsGlobal="undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self?self:{},NativeCustomEvent=commonjsGlobal.CustomEvent,index=useNative()?NativeCustomEvent:"function"==typeof document.createEvent?function(e,t){var r=document.createEvent("CustomEvent");return t?r.initCustomEvent(e,t.bubbles,t.cancelable,t.detail):r.initCustomEvent(e,!1,!1,void 0),r}:function(e,t){var r=document.createEventObject();return r.type=e,t?(r.bubbles=Boolean(t.bubbles),r.cancelable=Boolean(t.cancelable),r.detail=t.detail):(r.bubbles=!1,r.cancelable=!1,r.detail=void 0),r},eventmap=[],eventname="",ron=/^on/;for(eventname in commonjsGlobal)ron.test(eventname)&&eventmap.push(eventname.slice(2));var eventmap_1=eventmap,doc$1=commonjsGlobal.document,addEvent=addEventEasy,removeEvent=removeEventEasy,hardCache=[];commonjsGlobal.addEventListener||(addEvent=addEventHard,removeEvent=removeEventHard);var crossvent={add:addEvent,remove:removeEvent,fabricate:fabricateEvent},touchy=function(e,t,r,o){var n={mouseup:"touchend",mousedown:"touchstart",mousemove:"touchmove"},i={mouseup:"pointerup",mousedown:"pointerdown",mousemove:"pointermove"},a={mouseup:"MSPointerUp",mousedown:"MSPointerDown",mousemove:"MSPointerMove"};commonjsGlobal.navigator.pointerEnabled?crossvent[t](e,i[r]||r,o):commonjsGlobal.navigator.msPointerEnabled?crossvent[t](e,a[r]||r,o):(crossvent[t](e,n[r]||r,o),crossvent[t](e,r,o))},doc$2=document,docElm=doc$2.documentElement,cache={},start="(?:^|\\s)",end="(?:\\s|$)",classes={add:addClass,rm:rmClass},classCallCheck=function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")},createClass=function(){function e(e,t){for(var r=0;r<t.length;r++){var o=t[r];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}return function(t,r,o){return r&&e(t.prototype,r),o&&e(t,o),t}}(),_class$3,docElm$1=document.documentElement,Drag=(_class$3=function(){function e(t,r,o){classCallCheck(this,e),this.x=t,this.y=r,this.state="grabbed",this.item=o,this.itemElm=o.elm,this.sourceContainer=o.container,this.source=o.container.elm,this.dragon=this.sourceContainer.dragon,this.findDropTarget=this.dragon.findDropTarget.bind(this.dragon),window.requestAnimationFrame?(this._mousemove=this._mousemoveAF,this.move_e=!1):this._mousemove=this.mousemove,this.events()}return createClass(e,[{key:"destroy",value:function(){this.release(this.x,this.y)}},{key:"events",value:function(e){var t=e?"remove":"add";touchy(docElm$1,t,"mouseup",bind(this,"mouseup")),touchy(docElm$1,t,"mousemove",bind(this,"_mousemove")),touchy(docElm$1,t,"selectstart",bind(this,"protectGrab")),touchy(docElm$1,t,"click",bind(this,"protectGrab"))}},{key:"protectGrab",value:function(e){"grabbed"==this.state&&e.preventDefault()}},{key:"mousemove",value:function(e){return e.target||(e=this.move_e,this.move_e=!1),"grabbed"==this.state?void this.startByMouseMove(e):"dragging"!=this.state?void this.cancel():(e.preventDefault(),void this.drag(getCoord("clientX",e),getCoord("clientY",e)))}},{key:"_mousemoveAF",value:function(e){this.move_e||(this.actualFrame=window.requestAnimationFrame(this.mousemove)),this.move_e=e}},{key:"drag",value:function(e,t){if("dragging"==this.state){var r=e-this.itemOffsetX,o=t-this.itemOffsetY,n=this.mirror;n.style.left=r+"px",n.style.top=o+"px";var i=getElementBehindPoint(n,e,t),a=this.findDropTarget(i),s=void 0,c=a&&getImmediateChild(a,i);c&&(null===(s=getReference(a,c,e,t))||s!==this.itemElm&&s!==nextEl(this.itemElm))&&(this.currentSibling=s,a.insertBefore(this.itemElm,s))}}},{key:"startByMouseMove",value:function(e){void 0!==e.clientX&&e.clientX===this.x&&void 0!==e.clientY&&e.clientY===this.y||this.start(getCoord("pageX",e),getCoord("pageY",e))}},{key:"start",value:function(e,t){if("grabbed"==this.state){this.initialSibling=this.currentSibling=nextEl(this.itemElm);var r=getOffset(this.itemElm);this.itemOffsetX=e-r.left,this.itemOffsetY=t-r.top,classes.add(this.itemElm,"gu-transit"),this.mirror=this.renderMirrorImage(this.itemElm,this.getConfig("mirrorContainer")),this.state="dragging"}}},{key:"renderMirrorImage",value:function(e,t){var r=e.getBoundingClientRect(),o=e.cloneNode(!0);return o.style.width=getRectWidth(r)+"px",o.style.height=getRectHeight(r)+"px",classes.rm(o,"gu-transit"),classes.add(o,"gu-mirror"),t.appendChild(o),classes.add(t,"gu-unselectable"),o}},{key:"removeMirrorImage",value:function(e){var t=getParent(e);classes.rm(t,"gu-unselectable"),t.removeChild(e)}},{key:"mouseup",value:function(e){this.release(getCoord("clientX",e),getCoord("clientY",e))}},{key:"release",value:function(e,t){if("dragging"!=this.state)return this.cancel();this.actualFrame&&(window.cancelAnimationFrame(this.actualFrame),this.actualFrame=!1);var r=getElementBehindPoint(this.mirror,e,t),o=this.findDropTarget(r);o&&o!==this.source?this.drop(o):this.cancel()}},{key:"drop",value:function(e){"dragging"==this.state&&(this.dragon.getContainer(e).addItem(this.item,domIndexOf(e,this.itemElm)),this.state="dropped",this.cleanup())}},{key:"remove",value:function(){if("dragging"==this.state){var e=getParent(this.itemElm);e&&e.removeChild(this.itemElm),this.state="removed",this.cleanup()}}},{key:"cancel",value:function(e){if("dragging"==this.state){var t=getParent(this.itemElm);!1===this.isInitialPlacement(t)&&e&&this.source.insertBefore(this.itemElm,this.initialSibling)}this.state="cancelled",this.cleanup()}},{key:"cleanup",value:function(){this.events("remove"),this.mirror&&this.removeMirrorImage(this.mirror),this.itemElm&&classes.rm(this.itemElm,"gu-transit")}},{key:"isInitialPlacement",value:function(e,t){var r=void 0;return r=void 0!==t?t:this.mirror?this.currentSibling:nextEl(this.itemElm),e===this.source&&r===this.initialSibling}},{key:"getConfig",value:function(e){return this.item.getConfig(e)}}]),e}(),_applyDecoratedDescriptor$3(_class$3.prototype,"destroy",[decorator],Object.getOwnPropertyDescriptor(_class$3.prototype,"destroy"),_class$3.prototype),_applyDecoratedDescriptor$3(_class$3.prototype,"events",[decorator],Object.getOwnPropertyDescriptor(_class$3.prototype,"events"),_class$3.prototype),_applyDecoratedDescriptor$3(_class$3.prototype,"protectGrab",[decorator],Object.getOwnPropertyDescriptor(_class$3.prototype,"protectGrab"),_class$3.prototype),_applyDecoratedDescriptor$3(_class$3.prototype,"mousemove",[decorator],Object.getOwnPropertyDescriptor(_class$3.prototype,"mousemove"),_class$3.prototype),_applyDecoratedDescriptor$3(_class$3.prototype,"drag",[decorator],Object.getOwnPropertyDescriptor(_class$3.prototype,"drag"),_class$3.prototype),_applyDecoratedDescriptor$3(_class$3.prototype,"startByMouseMove",[decorator],Object.getOwnPropertyDescriptor(_class$3.prototype,"startByMouseMove"),_class$3.prototype),_applyDecoratedDescriptor$3(_class$3.prototype,"start",[decorator],Object.getOwnPropertyDescriptor(_class$3.prototype,"start"),_class$3.prototype),_applyDecoratedDescriptor$3(_class$3.prototype,"renderMirrorImage",[decorator],Object.getOwnPropertyDescriptor(_class$3.prototype,"renderMirrorImage"),_class$3.prototype),_applyDecoratedDescriptor$3(_class$3.prototype,"removeMirrorImage",[decorator],Object.getOwnPropertyDescriptor(_class$3.prototype,"removeMirrorImage"),_class$3.prototype),_applyDecoratedDescriptor$3(_class$3.prototype,"mouseup",[decorator],Object.getOwnPropertyDescriptor(_class$3.prototype,"mouseup"),_class$3.prototype),_applyDecoratedDescriptor$3(_class$3.prototype,"release",[decorator],Object.getOwnPropertyDescriptor(_class$3.prototype,"release"),_class$3.prototype),_applyDecoratedDescriptor$3(_class$3.prototype,"drop",[decorator],Object.getOwnPropertyDescriptor(_class$3.prototype,"drop"),_class$3.prototype),_applyDecoratedDescriptor$3(_class$3.prototype,"remove",[decorator],Object.getOwnPropertyDescriptor(_class$3.prototype,"remove"),_class$3.prototype),_applyDecoratedDescriptor$3(_class$3.prototype,"cancel",[decorator],Object.getOwnPropertyDescriptor(_class$3.prototype,"cancel"),_class$3.prototype),_applyDecoratedDescriptor$3(_class$3.prototype,"cleanup",[decorator],Object.getOwnPropertyDescriptor(_class$3.prototype,"cleanup"),_class$3.prototype),_applyDecoratedDescriptor$3(_class$3.prototype,"isInitialPlacement",[decorator],Object.getOwnPropertyDescriptor(_class$3.prototype,"isInitialPlacement"),_class$3.prototype),_applyDecoratedDescriptor$3(_class$3.prototype,"getConfig",[decorator],Object.getOwnPropertyDescriptor(_class$3.prototype,"getConfig"),_class$3.prototype),_class$3),_class$2,Item=(_class$2=function(){function e(t,r,o){classCallCheck(this,e),o||(o={}),this.config=o,this.id=o.id||"itemID_"+Date.now(),this.container=t,this.elm=r}return createClass(e,[{key:"grab",value:function(e,t){return this.drag=new Drag(e,t,this),this.drag}},{key:"getConfig",value:function(e){return e=this.config.hasOwnProperty(e)?this.config[e]:this.container.getConfig(e),"function"==typeof e?e():e}}]),e}(),_applyDecoratedDescriptor$2(_class$2.prototype,"grab",[decorator],Object.getOwnPropertyDescriptor(_class$2.prototype,"grab"),_class$2.prototype),_applyDecoratedDescriptor$2(_class$2.prototype,"getConfig",[decorator],Object.getOwnPropertyDescriptor(_class$2.prototype,"getConfig"),_class$2.prototype),_class$2),_class$1,Container=(_class$1=function(){function e(t,r,o){classCallCheck(this,e),o||(o={}),this.config=o,this.id=o.id||"containerID_"+Date.now(),this.dragon=t,this.items=[],this.elm=r,this.initItems()}return createClass(e,[{key:"grab",value:function(e,t,r){return this.items[lookUpByElm(this.items,r)].grab(e,t)}},{key:"addItem",value:function(e,t,r){t=t||0;var o=void 0;return e instanceof Item?(e.container=this,o=e):o=new Item(this,e,r),this.items.splice(t,0,o),this}},{key:"removeItem",value:function(e){var t=void 0;return e instanceof Item?(e.container=null,t=this.items.indexOf(e)):t=lookUpByElm(this.items,e),this.items.splice(t,1),this}},{key:"initItems",value:function(){for(var e=toArray(this.elm.children),t=e.length,r=0;r<t;r++)this.addItem(e[r])}},{key:"getConfig",value:function(e){return e=this.config.hasOwnProperty(e)?this.config[e]:this.dragon.getConfig(e),"function"==typeof e?e():e}}]),e}(),_applyDecoratedDescriptor$1(_class$1.prototype,"grab",[decorator],Object.getOwnPropertyDescriptor(_class$1.prototype,"grab"),_class$1.prototype),_applyDecoratedDescriptor$1(_class$1.prototype,"addItem",[decorator],Object.getOwnPropertyDescriptor(_class$1.prototype,"addItem"),_class$1.prototype),_applyDecoratedDescriptor$1(_class$1.prototype,"removeItem",[decorator],Object.getOwnPropertyDescriptor(_class$1.prototype,"removeItem"),_class$1.prototype),_applyDecoratedDescriptor$1(_class$1.prototype,"initItems",[decorator],Object.getOwnPropertyDescriptor(_class$1.prototype,"initItems"),_class$1.prototype),_applyDecoratedDescriptor$1(_class$1.prototype,"getConfig",[decorator],Object.getOwnPropertyDescriptor(_class$1.prototype,"getConfig"),_class$1.prototype),_class$1),_class,doc=document;window.dragonSpace||(window.dragonSpace={});var space=window.dragonSpace,Dragon=(_class=function(){function e(t){classCallCheck(this,e),void 0!==(t=t||{}).length&&(t={containers:toArray(t)}),this.initSpace(t.space),this.space=space,space.dragons.push(this),this.config=t,this.defaults={mirrorContainer:doc.body},this.id=t.id||"dragonID_"+Date.now(),this.containers=[],this.addContainers()}return createClass(e,[{key:"initSpace",value:function(t){var r=this;t&&(space=t),space.dragons||(space.dragons=[],touchy(document.documentElement,"add","mousedown",function(e){if(e.preventDefault(),isInput(e.target))return void e.target.focus();r.grab(e.target,e.clientX,e.clientY)})),space.Dragon||(space.Dragon=e)}},{key:"addContainers",value:function(e,t){if(e=e||this.config.containers)for(var r,o=e.length,n=0;n<o;n++)r=e[n],this.getContainer(r)?console.warn("container already registered",r):this.containers.push(new Container(this,r,t))}},{key:"getContainer",value:function(e,t){if(t)return this.containers[lookUpByElm(this.containers,e)];for(var r,o=space.dragons,n=o.length,i=0;i<n;i++)if((r=lookUpByElm(o[i].containers,e))>-1)return o[i].containers[r];return null}},{key:"grab",value:function(e,t,r){var o=e,n=e,i=void 0;do{n=getParent(o=n)}while(n&&!this.getContainer(n));if(n)return i=lookUpByElm(this.containers,n),this.containers[i].grab(t,r,o)}},{key:"findDropTarget",value:function(e){for(var t=e;t&&!this.getContainer(t);)t=getParent(t);return t}},{key:"getConfig",value:function(e){return e=this.config.hasOwnProperty(e)?this.config[e]:this.defaults[e],"function"==typeof e?e():e}}]),e}(),_applyDecoratedDescriptor(_class.prototype,"initSpace",[decorator],Object.getOwnPropertyDescriptor(_class.prototype,"initSpace"),_class.prototype),_applyDecoratedDescriptor(_class.prototype,"addContainers",[decorator],Object.getOwnPropertyDescriptor(_class.prototype,"addContainers"),_class.prototype),_applyDecoratedDescriptor(_class.prototype,"getContainer",[decorator],Object.getOwnPropertyDescriptor(_class.prototype,"getContainer"),_class.prototype),_applyDecoratedDescriptor(_class.prototype,"grab",[decorator],Object.getOwnPropertyDescriptor(_class.prototype,"grab"),_class.prototype),_applyDecoratedDescriptor(_class.prototype,"findDropTarget",[decorator],Object.getOwnPropertyDescriptor(_class.prototype,"findDropTarget"),_class.prototype),_applyDecoratedDescriptor(_class.prototype,"getConfig",[decorator],Object.getOwnPropertyDescriptor(_class.prototype,"getConfig"),_class.prototype),_class);export default Dragon;
//# sourceMappingURL=dragon.es.js.map
