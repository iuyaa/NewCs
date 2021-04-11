// ==UserScript==
// @name              新客服系统_工单查询_导出
// @namespace         iuya
// @icon              https://raw.githubusercontent.com/iuyaa/NewCs/master/NewCs/NewCsLogo.ico
// @icon64            https://raw.githubusercontent.com/iuyaa/NewCs/master/NewCs/NewCsLogo.ico
// @updateURL         https://raw.githubusercontent.com/iuyaa/NewCs/master/NewCs/NewCs_Sheet_DisplayExportButton.js
// @downloadURL       https://raw.githubusercontent.com/iuyaa/NewCs/master/NewCs/NewCs_Sheet_DisplayExportButton.js
// @version           1.3.0
// @author            iuya
// @description       显示工单查询中的导出按钮。
// @match             *://10.238.1.245/*
// ==/UserScript==

(function () {
    'use strict';

    var $$ = function(func){  
            if (document.addEventListener) {  
                window.addEventListener("load", func, false);  
            }  
            else if (document.attachEvent) {  
                window.attachEvent("onload", func);  
            }  
        }  
          
        $$(function(){  
           //需要执行的内容 
             document.getElementById('exportId').style = "padding-left: 3px; "

        }) 

})();
