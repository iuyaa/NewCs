// ==UserScript==
// @name              新客服系统_我的导出
// @namespace         iuya
// @icon              https://public.bl.files.1drv.com/y4mZMXT_x1YaZ-Bw62dtIrpuGlVFtU6dzmbaaFRk-3RWFKL3lFuCRyjAR2kOTiLicUx-5zN4Q0wSvb32EJ9IigQ6flTEPnlMVl5p2Hfngfj4kOrWe4y-kaDqkQcuhOfzrlSH4vXVStAriwamO8fieTmp6Ng2OjQ0zTivf99tv6AdJw7pVpUB1RqFrn1bNJhF4qY710B-3MSKy-o-WZlcIzd-A0fEBtsaPOv0Zj6YBhIivs?access_token=EwAQA61DBAAUmcDj0azQ5tf1lkBfAvHLBzXl5ugAAUaWXqv4xxsXQJj7knL0vBB3EaF8PdT7wwt10LGmdc8azvZ5J5KIs4MuIhaRO6njcfGPlHKVy/H8WsrAjJpOrt7NGPWaOe89ngPDLkPl/%2bwKEzv8LbbnGP/YrQmdlfQBTGQ7rc4Xqk3YACPvGf9hzmUr2DcGknXNCP14mm8Pkq6hb/6j6u/HoFxP42wwimEVBDX098YrTlwg1sSsLFxqEfYZMYsnIGNtxnsnEiFWOrc%2bfKs9NYggnB%2b0KeIt57LWeaCpqLANf2c8xUnq44lQIxMT%2bE2nAXMvm7j9G8cJCzzCSqRlACPhspe9tqR3E7h7m/ZU88YwPbURFuLk8XnqaKADZgAACNMRsfEjioa64AEMi7t/6DQU0QfvnklPuAQVn4Eb%2bxc7rIwPvlH2YbiWyjMN6WHFM3um3QjWM4isEQaPhyi85obUdiqEVRLqfkUpV0e/l10cY1AfYYIiE7PhDnTaLfD1jckSvGU5Ki0YXNWiONMBKMEagIGveyBhRWrtV2Lxxq1nRIBY7R3joAg8CzjNDHWNXAxGMdGSlEZuQhVq1O%2bPSTBnM1clu%2blMEy7a2/RjRfdwNi8nMKk0y6SPY0QayJ1S2JH24U9mPr8otaQPCb/l3NQuVAKJnHz5gJ%2buDbjaLLc2e2EO9CYIbEMcNs2IF/txnMcJ55Cz2s9cXjG2p2AAvrIYIo6yKIbQbVl0n8ut9FDZyvKdAEYIxnuPXUN9UVUzujE3XM1CidzXMJr2uIwTi/8SlKs7e2Z3ymKJ/uMiR2Q1Cmsyu5IfgCJbdz9YFJ8eRpJOsiu0wA5kqw/fLfLh4wLmIdUIV5ibjn2soOf3xNMttlM3ALbz7OrAPa1jVwarEQL4fmnYsbPVHDay3uQH13wPwa8DUye2SuPOmdzKPdHr4Hhi8dMQZjQ2GfjKaiqPfhatHrGaUurXJk2DMXJ8LxfobRkDRorSEVrMEtXEYfZHDRCWqHAsxDLU8mnK437LXjuob4kZnCIrSI0KAg%3d%3d
// @icon64            https://public.bl.files.1drv.com/y4mZMXT_x1YaZ-Bw62dtIrpuGlVFtU6dzmbaaFRk-3RWFKL3lFuCRyjAR2kOTiLicUx-5zN4Q0wSvb32EJ9IigQ6flTEPnlMVl5p2Hfngfj4kOrWe4y-kaDqkQcuhOfzrlSH4vXVStAriwamO8fieTmp6Ng2OjQ0zTivf99tv6AdJw7pVpUB1RqFrn1bNJhF4qY710B-3MSKy-o-WZlcIzd-A0fEBtsaPOv0Zj6YBhIivs?access_token=EwAQA61DBAAUmcDj0azQ5tf1lkBfAvHLBzXl5ugAAUaWXqv4xxsXQJj7knL0vBB3EaF8PdT7wwt10LGmdc8azvZ5J5KIs4MuIhaRO6njcfGPlHKVy/H8WsrAjJpOrt7NGPWaOe89ngPDLkPl/%2bwKEzv8LbbnGP/YrQmdlfQBTGQ7rc4Xqk3YACPvGf9hzmUr2DcGknXNCP14mm8Pkq6hb/6j6u/HoFxP42wwimEVBDX098YrTlwg1sSsLFxqEfYZMYsnIGNtxnsnEiFWOrc%2bfKs9NYggnB%2b0KeIt57LWeaCpqLANf2c8xUnq44lQIxMT%2bE2nAXMvm7j9G8cJCzzCSqRlACPhspe9tqR3E7h7m/ZU88YwPbURFuLk8XnqaKADZgAACNMRsfEjioa64AEMi7t/6DQU0QfvnklPuAQVn4Eb%2bxc7rIwPvlH2YbiWyjMN6WHFM3um3QjWM4isEQaPhyi85obUdiqEVRLqfkUpV0e/l10cY1AfYYIiE7PhDnTaLfD1jckSvGU5Ki0YXNWiONMBKMEagIGveyBhRWrtV2Lxxq1nRIBY7R3joAg8CzjNDHWNXAxGMdGSlEZuQhVq1O%2bPSTBnM1clu%2blMEy7a2/RjRfdwNi8nMKk0y6SPY0QayJ1S2JH24U9mPr8otaQPCb/l3NQuVAKJnHz5gJ%2buDbjaLLc2e2EO9CYIbEMcNs2IF/txnMcJ55Cz2s9cXjG2p2AAvrIYIo6yKIbQbVl0n8ut9FDZyvKdAEYIxnuPXUN9UVUzujE3XM1CidzXMJr2uIwTi/8SlKs7e2Z3ymKJ/uMiR2Q1Cmsyu5IfgCJbdz9YFJ8eRpJOsiu0wA5kqw/fLfLh4wLmIdUIV5ibjn2soOf3xNMttlM3ALbz7OrAPa1jVwarEQL4fmnYsbPVHDay3uQH13wPwa8DUye2SuPOmdzKPdHr4Hhi8dMQZjQ2GfjKaiqPfhatHrGaUurXJk2DMXJ8LxfobRkDRorSEVrMEtXEYfZHDRCWqHAsxDLU8mnK437LXjuob4kZnCIrSI0KAg%3d%3d
// @updateURL         https://iurquq.bl.files.1drv.com/y4muvWfGhzMiHloHNqcLjzsAhJWbNg-H9y9yLkfZha9i6eahGqMHJ0LK9-UcmhenTTAtV0QP3Icgv0tHgplAAL6-8I7owFMtGG8LSFb3cjCU9t3pNaOZ6Z3m-UiiuqeBASqbyQqbhDHYE3XtHDWPkQiirkBMV0LM5y-OnHslmN3IQqbJR-DZ6zvvP7vRWZt3vLAlfO0vfnLhKjro1Z70nwAhw
// @downloadURL       https://iurquq.bl.files.1drv.com/y4muvWfGhzMiHloHNqcLjzsAhJWbNg-H9y9yLkfZha9i6eahGqMHJ0LK9-UcmhenTTAtV0QP3Icgv0tHgplAAL6-8I7owFMtGG8LSFb3cjCU9t3pNaOZ6Z3m-UiiuqeBASqbyQqbhDHYE3XtHDWPkQiirkBMV0LM5y-OnHslmN3IQqbJR-DZ6zvvP7vRWZt3vLAlfO0vfnLhKjro1Z70nwAhw
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
