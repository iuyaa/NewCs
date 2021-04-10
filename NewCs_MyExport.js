// ==UserScript==
// @name              新客服系统_我的导出
// @namespace         iuya
// @icon              https://raw.githubusercontent.com/iuyaa/NewCs/master/NewCsLogo.ico
// @icon64            https://raw.githubusercontent.com/iuyaa/NewCs/master/NewCsLogo.ico
// @updateURL         https://raw.githubusercontent.com/iuyaa/NewCs/master/NewCs_MyExport.js
// @downloadURL       https://raw.githubusercontent.com/iuyaa/NewCs/master/NewCs_MyExport.js
// @version           1.0.0
// @author            iuya
// @description       为新客服系统添加我的导出元素。
// @match             *://10.238.1.245/*
// ==/UserScript==

(function () {
    'use strict';
    //    var menu = document.getElementById("menu") 123456
    //    menu.onlick
    //  if(document.getElementById("9904030300").parentElement.parentElement){
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
    //  }

    document.getElementById("bba73de9c9f94fb4868be4cf9fb7aba5").addEventListener("click", document.getElementById('exportId').style = "padding-left: 3px; ");

    //  function myexport(){


    //  }



})();
