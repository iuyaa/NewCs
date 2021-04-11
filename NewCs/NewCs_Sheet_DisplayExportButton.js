// ==UserScript==
// @name              新客服系统_工单查询_导出
// @namespace         iuya
// @icon              https://raw.githubusercontent.com/iuyaa/NewCs/master/NewCsLogo.ico?token=AL2O23IHZCLEEQRPZPW74Y3AOFNSO
// @icon64            https://raw.githubusercontent.com/iuyaa/NewCs/master/NewCsLogo.ico?token=AL2O23IHZCLEEQRPZPW74Y3AOFNSO
// @updateURL         https://raw.githubusercontent.com/iuyaa/NewCs/master/NewCs_Sheet_DisplayExportButton.js?token=AL2O23LSX23NZS2B6FUZUG3AOFNZ6
// @downloadURL       https://raw.githubusercontent.com/iuyaa/NewCs/master/NewCs_Sheet_DisplayExportButton.js?token=AL2O23LSX23NZS2B6FUZUG3AOFNZ6
// @version           1.0.0
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
//  }
  
//  document.getElementById("menu").addEventListener("click", myexport);
  
//  function myexport(){

    
//  }
  


})();
