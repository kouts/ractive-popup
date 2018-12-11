(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory(require("Ractive"));
	else if(typeof define === 'function' && define.amd)
		define(["Ractive"], factory);
	else if(typeof exports === 'object')
		exports["RactiveModal"] = factory(require("Ractive"));
	else
		root["RactiveModal"] = factory(root["Ractive"]);
})(window, function(__WEBPACK_EXTERNAL_MODULE_ractive__) {
return /******/ (function(modules) { // webpackBootstrap
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
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./ractive-modal.ractive.html");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./ractive-modal.ractive.html":
/*!************************************!*\
  !*** ./ractive-modal.ractive.html ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var ractive__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ractive */ \"ractive\");\n/* harmony import */ var ractive__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(ractive__WEBPACK_IMPORTED_MODULE_0__);\n\n\n\nractive__WEBPACK_IMPORTED_MODULE_0___default.a.sharedSet({'rm.animating': undefined, 'rm.delay': 0});\n/* harmony default export */ __webpack_exports__[\"default\"] = (ractive__WEBPACK_IMPORTED_MODULE_0___default.a.extend({\n    template: {v:4,t:[{t:4,f:[{t:7,e:\"div\",m:[{n:\"class\",f:[\"rm-backdrop \",{t:2,r:\"bg_class\"},\" \",{t:2,r:\"base_anim_class\"},\" \",{t:2,r:\"bg_anim_class\"},\" backdrop-\",{t:2,r:\"modal_id\"}],t:13},{n:\"style\",f:[\"z-index: \",{t:2,x:{r:[\"zindex\"],s:\"_0-1\"}},\";\"],t:13}]}],n:50,r:\"showbackdrop\"},{t:4,f:[{t:7,e:\"div\",m:[{n:\"class\",f:[\"rm-wrapper \",{t:2,r:\"base_anim_class\"},\" \",{t:2,r:\"anim_class\"},\" \",{t:2,r:\"modal_id\"}],t:13},{n:\"role\",f:\"dialog\",t:13,g:1},{n:\"aria-label\",f:[{t:2,r:\"title\"}],t:13},{n:\"tabindex\",f:\"0\",t:13,g:1},{n:\"style\",f:[\"opacity: \",{t:2,r:\"opacity\"},\"; display: \",{t:2,r:\"display\"},\"; z-index: \",{t:2,r:\"zindex\"},\"; cursor: \",{t:2,x:{r:[\"enableclose\"],s:\"_0?\\\"pointer\\\":\\\"default\\\"\"}}],t:13},{n:[\"click\"],t:70,f:\"clickoutside\"},{n:[\"keydown\"],t:70,f:\"keydown\"}],f:[{t:7,e:\"div\",m:[{n:\"class\",f:[\"rm \",{t:2,r:\"class\"}],t:13},{n:\"style\",f:[{t:2,r:\"style\"}],t:13}],f:[{t:4,f:[{t:7,e:\"div\",m:[{t:13,n:\"class\",f:\"rm-titlebar\",g:1}],f:[{t:7,e:\"h3\",m:[{t:13,n:\"class\",f:\"rm-title\",g:1}],f:[{t:2,r:\"title\"}]},\" \",{t:4,f:[{t:7,e:\"button\",m:[{t:13,n:\"class\",f:\"rm-btn-close\",g:1},{n:\"type\",f:\"button\",t:13,g:1},{n:[\"click\"],t:70,f:\"close\"}],f:[\"×\"]}],n:50,r:\"enableclose\"}]}],n:50,x:{r:[\"title\",\"enableclose\"],s:\"_0||_1\"}},\" \",{t:7,e:\"div\",m:[{t:13,n:\"class\",f:\"rm-content\",g:1}],f:[{t:16}]}]}]}],n:50,r:\"showmodal\"}],e:{\"_0-1\":function (_0){return(_0-1);},\"_0?\\\"pointer\\\":\\\"default\\\"\":function (_0){return(_0?\"pointer\":\"default\");},\"_0||_1\":function (_0,_1){return(_0||_1);}}},\n    css: \" .rm-backdrop {position: fixed; top: 0; right: 0; bottom: 0; left: 0; background-color: rgba(0, 0, 0, 0.5);} .rm-wrapper {position: fixed; text-align: center; top: 0; right: 0; bottom: 0; left: 0; overflow-x: hidden; overflow-y: auto; display: none; outline: 0;} .rm {position: relative; display: inline-block; width:100%; text-align: left; color: #333333; background-color: #fff; top:30px; cursor: default; min-width: 110px; max-width: 500px; box-shadow: 0 5px 15px rgba(0, 0, 0, 0.5);} .rm-titlebar {padding:15px; color: #333; overflow: auto; border-bottom: 1px solid #e5e5e5;} .rm-title {margin-top:2px; margin-bottom: 0px; display: inline-block; font-size:1.25rem;} .rm-btn-close {padding: 0px 4px 0px 4px; cursor: pointer; background: 0 0; border: 0; font-weight:700; float: right; font-size: 1.5rem; line-height: 1; margin-right: -5px; color:#ccc;} .rm-btn-close:hover, .rm-btn-close:focus:hover{color:#6f6f6f; border-color: transparent; background-color: transparent;} .rm-btn-close:focus {color:#939393; border-color: transparent; background-color: transparent;} .rm-content {padding:15px 15px 15px 15px;} .rm-content .full-hr {width: auto; border: 0; border-top: 1px solid #e0e0e0; margin-top:15px; margin-bottom:15px; margin-left:-14px; margin-right:-14px;} .rm-fadeIn {-webkit-animation-name: rm-fadeIn; animation-name: rm-fadeIn;} @-webkit-keyframes rm-fadeIn {0% {opacity: 0} 100% {opacity: 1}} @keyframes rm-fadeIn {0% {opacity: 0} 100% {opacity: 1}} .rm-fadeOut {-webkit-animation-name: rm-fadeOut; animation-name: rm-fadeOut;} @-webkit-keyframes rm-fadeOut {0% {opacity: 1} 100% {opacity: 0}} @keyframes rm-fadeOut {0% {opacity: 1} 100% {opacity: 0}} .rm-fadeIn, .rm-fadeOut {-webkit-animation-duration: .25s; animation-duration: .25s; -webkit-animation-fill-mode: both; animation-fill-mode: both;}\",\n    data: function() {\n        return {\n            showmodal: false,\n            showbackdrop: false,\n            basedon: false,\n            live: false,\n            appendto: '',\n            class: '',\n            bg_class: '',\n            base_anim_class: '',\n            anim_class: '',\n            bg_anim_class: '',\n            bg_in_class: 'rm-fadeIn',\n            bg_out_class: 'rm-fadeOut',\n            in_class: 'rm-fadeIn',\n            out_class: 'rm-fadeOut',\n            style: '',\n            title: '',\n            modal_id: this._guid + '_rm',\n            enableclose: true,\n            base_zindex: 1051,\n            opacity: 0,\n            display: 'none',\n            zindex: 0\n        }\n    },\n    delegate: false,\n    elToFocus: null,\n    on: {\n        close: function(ctx){\n            ctx.original.preventDefault();\n            if(this.get('enableclose')){\n                this.set('basedon', false);\n            }\n        },\n        clickoutside: function(ctx){\n            if(ctx.original.target === ctx.node){\n                this.fire('close', ctx);\n            }\n        },\n        keydown: function(ctx){\n            var e = ctx.original;\n            if(e.which === 27){\n                this.fire('close', ctx);\n            }\n            if(e.which === 9){\n                // Get only visible elements\n                var all = this.findAll('input, select, textarea, button, a').filter(function(el){\n                    return !!( el.offsetWidth || el.offsetHeight || el.getClientRects().length );\n                });\n                if(e.shiftKey){\n                    if(e.target === all[0] || e.target === this.find('.rm-wrapper')){\n                        e.preventDefault();\n                        all[all.length-1].focus();\n                    }\n                }else{\n                    if(e.target === all[all.length-1]){\n                        e.preventDefault();\n                        all[0].focus();\n                    }\n                }\n            }\n        }\n    },\n    onconfig: function(){\n        if(this.get('live')){\n            this.set('showmodal', true);\n        }\n    },\n    onrender: function(){\n        var modal_id = this.get('modal_id');\n        this.observe_basedon = this.observe('basedon', function(newValue, oldValue, keypath){\n            var live = this.get('live');\n            if(newValue === true){\n                if(document.querySelector('.'+modal_id) && document.querySelector('.'+modal_id).style.display === 'block'){\n                    return;\n                }\n                this.elToFocus = document.activeElement;\n                this.fire('beforeOpen');\n                var lastZindex = this.getTopZindex();\n                var zindex = (lastZindex === 0) ? this.get('base_zindex') : lastZindex+2;\n                if(!live){\n                    this.set('showmodal', true);\n                }\n                this.insert(this.get('appendto') ? document.querySelector(this.get('appendto')) : this.root.el);\n                this.set({'display': 'block', 'zindex': zindex});\n                this.fire('opening');\n                this.animateModal('in').then(function(){\n                    this.find('[autofocus]') ? this.find('[autofocus]').focus() : this.find('.rm-wrapper').focus();\n                    this.fire('afterOpen');\n                }.bind(this));\n            }else{\n                if(!document.querySelector('.'+modal_id) || document.querySelector('.'+modal_id).style.display !== 'block'){\n                    return;\n                }\n                this.fire('beforeClose');\n                this.animateModal('out').then(function(){\n                    this.set({'display': 'none', 'zindex': 0});\n                    if(!live){\n                        this.set('showmodal', false);\n                    }\n                    this.fire('afterClose');\n                    var lastZindex = this.getTopZindex();\n                    if(lastZindex > 0){\n                        var all = document.querySelectorAll('.rm-wrapper');\n                        for (var i = 0; i < all.length; i++) {\n                            if(all[i].style.zIndex == lastZindex){\n                                var r = ractive__WEBPACK_IMPORTED_MODULE_0___default.a.getContext(all[i]).ractive;\n                                if(r.find('.rm-wrapper').contains(this.elToFocus)){\n                                    this.elToFocus.focus();\n                                }else{\n                                    r.find('[autofocus]') ? r.find('[autofocus]').focus() : r.find('.rm-wrapper').focus();\n                                }\n                                break;\n                            }\n                        };\n                    }else{\n                        if(document.body.contains(this.elToFocus)){\n                            this.elToFocus.focus();\n                        }\n                    }\n                }.bind(this));\n            }\n        }, {\n            defer: true\n        });\n    },\n    onunrender: function(){\n        this.observe_basedon.cancel();\n    },\n    animateModal: function(dir){\n        return new Promise(function(resolve, reject){\n            var handler = function(e) {\n                this.find('.rm-wrapper').removeEventListener('animationend', handler);\n                this.set({\n                    'anim_class': '',\n                    'bg_anim_class': '',\n                    '@shared.rm.animating': undefined,\n                    '@shared.rm.delay': 0\n                });\n                if(dir == 'out'){\n                    this.set({showbackdrop: false, opacity: 0});\n                }\n                resolve();\n            }.bind(this);\n            this.find('.rm-wrapper').addEventListener('animationend', handler);\n            if(typeof this.get('@shared.rm.animating') === 'object'){\n                this.set('@shared.rm.delay', this.get('@shared.rm.delay') + this.getAnimationDuration(this.get('@shared.rm.animating').find('.rm-wrapper')) + 100);\n            }\n            this.set('@shared.rm.animating', this);\n            setTimeout(function(){\n                if(dir == 'in'){\n                    this.set({showbackdrop: true, opacity: 1});\n                }\n                this.set({'anim_class': this.get(dir+'_class'), 'bg_anim_class': this.get('bg_'+dir+'_class')});\n            }.bind(this), this.get('@shared.rm.delay'));\n        }.bind(this));\n    },\n    getTopZindex: function(){\n        var toret = 0;\n        var all = document.querySelectorAll('.rm-wrapper');\n        for (var i = 0; i < all.length; i++) {\n            toret = parseInt(all[i].style.zIndex) > toret ? parseInt(all[i].style.zIndex) : toret;\n        };\n        return toret;\n    },\n    getAnimationDuration: function(el){\n        var duration = window.getComputedStyle(el, null)['animation-duration'];\n        return (duration.indexOf('ms') !== -1) ? parseFloat(duration.replace('ms', '')) : parseFloat(duration.replace('s', '')) * 1000;\n    }\n}));\n\n//# sourceURL=webpack://RactiveModal/./ractive-modal.ractive.html?");

/***/ }),

/***/ "ractive":
/*!**********************************************************************************************!*\
  !*** external {"commonjs":"Ractive","commonjs2":"Ractive","amd":"Ractive","root":"Ractive"} ***!
  \**********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = __WEBPACK_EXTERNAL_MODULE_ractive__;\n\n//# sourceURL=webpack://RactiveModal/external_%7B%22commonjs%22:%22Ractive%22,%22commonjs2%22:%22Ractive%22,%22amd%22:%22Ractive%22,%22root%22:%22Ractive%22%7D?");

/***/ })

/******/ });
});