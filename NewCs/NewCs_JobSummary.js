// ==UserScript==
// @name              新客服系统_工作小结
// @namespace         iuya
// @icon              https://raw.githubusercontent.com/iuyaa/NewCs/master/NewCs/NewCsLogo.ico
// @icon64            https://raw.githubusercontent.com/iuyaa/NewCs/master/NewCs/NewCsLogo.ico
// @updateURL         https://raw.githubusercontent.com/iuyaa/NewCs/master/NewCs/NewCs_JobSummary.js
// @downloadURL       https://raw.githubusercontent.com/iuyaa/NewCs/master/NewCs/NewCs_JobSummary.js
// @version           1.0.0
// @author            iuya
// @description       为新客服系统添加工作小结元素。
// @match             *://10.238.1.245/*
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
        li.innerHTML = '<span style="color:#fff;cursor: pointer;" id="9904030600" title="工作小结" lang="/cs/ccc/portal/web/statistics/page/statisticsmanage.html" isnewwin="0" onclick="addTab(\'9904030600\',\'工作小结\',\'/cs/ccc/portal/web/statistics/page/statisticsmanage.html\')"> 工作小结</span>';
        li.style = "float: left;margin-right: 10px;width:120px;";
        li.class = "item_all"
    })

})();
