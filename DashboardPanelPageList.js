parcelRequire=function(e,r,t,n){var i,o="function"==typeof parcelRequire&&parcelRequire,u="function"==typeof require&&require;function f(t,n){if(!r[t]){if(!e[t]){var i="function"==typeof parcelRequire&&parcelRequire;if(!n&&i)return i(t,!0);if(o)return o(t,!0);if(u&&"string"==typeof t)return u(t);var c=new Error("Cannot find module '"+t+"'");throw c.code="MODULE_NOT_FOUND",c}p.resolve=function(r){return e[t][1][r]||r},p.cache={};var l=r[t]=new f.Module(t);e[t][0].call(l.exports,p,l,l.exports,this)}return r[t].exports;function p(e){return f(p.resolve(e))}}f.isParcelRequire=!0,f.Module=function(e){this.id=e,this.bundle=f,this.exports={}},f.modules=e,f.cache=r,f.parent=o,f.register=function(r,t){e[r]=[function(e,r){r.exports=t},{}]};for(var c=0;c<t.length;c++)try{f(t[c])}catch(e){i||(i=e)}if(t.length){var l=f(t[t.length-1]);"object"==typeof exports&&"undefined"!=typeof module?module.exports=l:"function"==typeof define&&define.amd?define(function(){return l}):n&&(this[n]=l)}if(parcelRequire=f,i)throw i;return f}({"zOU9":[function(require,module,exports) {
var i={pageList:".PageListContainerPage",editLink:".PageListActionEdit a, .PageListActionNew a",viewLink:".PageListActionView a",isEditModeBlank:".edit-mode--blank",isEditModeModal:".edit-mode--modal",isViewModeBlank:".view-mode--blank",isViewModeModal:".view-mode--modal"};function e(i,e){i.on("mouseenter",e,function(i){$(i.target).attr("target","_blank")})}function n(i,e){i.on("click",".pw-modal-longclick",function(i){$(this).is(e)&&($(this).trigger("longclick"),i.preventDefault(),i.stopPropagation())})}function o(o,t){var a=o.find(i.pageList);o.is(i.isEditModeBlank)&&e(a,i.editLink),o.is(i.isEditModeModal)&&n(a,i.editLink),o.is(i.isViewModeBlank)&&e(a,i.viewLink),o.is(i.isViewModeModal)&&n(a,i.viewLink),a.on("pw-modal-closed",i.editLink,function(){t(!0)})}$(document).on("dashboard:panel",function(i,e){var n=e.panel,t=e.$element,a=e.reload;"page-list"===n&&o(t,a)});
},{}]},{},["zOU9"], null)