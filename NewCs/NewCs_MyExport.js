// ==UserScript==
// @name              新客服系统_我的导出
// @namespace         iuya
// @icon              https://cdn.jsdelivr.net/gh/iuyaa/NewCs@master/NewCs/NewCsLogo.ico
// @icon64            https://cdn.jsdelivr.net/gh/iuyaa/NewCs@master/NewCs/NewCsLogo.ico
// @updateURL         https://cdn.jsdelivr.net/gh/iuyaa/NewCs@master/NewCs/NewCs_MyExport.js
// @downloadURL       https://cdn.jsdelivr.net/gh/iuyaa/NewCCs@master/NewCs/NewCs_MyExport.js
// @version           1.6.0
// @author            iuya
// @description       为新客服系统添加我的导出元素。
// @match             http://10.238.1.245/cs/workbench/page/menu.html
// @match             http://10.188.34.1/cs/workbench/page/menu.html
// ==/UserScript==

(function () {
    'use strict';

    var $$ = function (func) {
        if (document.addEventListener) {
            window.addEventListener("load", func, false);
        } else if (document.attachEvent) {
            window.attachEvent("onload", func);
        }
    }

    $$(function () {
        //需要执行的内容 
        var li = document.createElement('li');
        var el = document.getElementById("9904030300").parentElement.parentElement;
        el.appendChild(li);
        li.innerHTML = '<span style="color:#fff;cursor: pointer;" id="9904020400" title="我的导出" lang="/cs/gcc/web/system/media/page/media-manger.html" isnewwin="0" onclick="addTab(\'9904020400\',\'我的导出\',\'/cs/gcc/web/system/media/page/media-manger.html\')"> 我的导出</span>';
        li.style = "float: left;margin-right: 10px;width:120px;";
        li.class = "item_all"
    })

})();
