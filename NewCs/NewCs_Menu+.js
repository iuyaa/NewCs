// ==UserScript==
// @name              ?????_Menu+
// @namespace         iuya
// @icon              https://cdn.jsdelivr.net/gh/iuyaa/NewCs@master/NewCs/NewCsLogo.ico
// @icon64            https://cdn.jsdelivr.net/gh/iuyaa/NewCs@master/NewCs/NewCsLogo.ico
// @version           1.0.0
// @author            iuya
// @description       ?????????iframe???“????”“????”???
// @match             http://10.238.1.245/cs/workbench/page/menu.html
// @match             http://10.188.34.1/cs/workbench/page/menu.html
// ==/UserScript==

(function () {
    'use strict';

    if($("span#9904030600").text() != " ????"){
      var li = document.createElement('li');
        var el = document.getElementById("9904030200").parentElement.parentElement;
        el.appendChild(li);
        li.innerHTML = '<span style="color:#fff;cursor: pointer;" id="9904030600" title="????" lang="/cs/ccc/portal/web/statistics/page/statisticsmanage.html" isnewwin="0" onclick="addTab(\'9904030600\',\'????\',\'/cs/ccc/portal/web/statistics/page/statisticsmanage.html\')"> ????</span>';
        li.style = "float: left;margin-right: 10px;width:120px;";
        li.class = "item_all"
    }
    if($("span#9904020400").text() != " ????"){
        var li = document.createElement('li');
        var el = document.getElementById("9904030200").parentElement.parentElement;
        el.appendChild(li);
        li.innerHTML = '<span style="color:#fff;cursor: pointer;" id="9904020400" title="????" lang="/cs/gcc/web/system/media/page/media-manger.html" isnewwin="0" onclick="addTab(\'9904020400\',\'????\',\'/cs/gcc/web/system/media/page/media-manger.html\')"> ????</span>';
        li.style = "float: left;margin-right: 10px;width:120px;";
        li.class = "item_all"
    }
})();
