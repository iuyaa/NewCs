// ==UserScript==
// @name              新客服系统_工单查询_导出
// @namespace         iuya
// @icon              https://public.bl.files.1drv.com/y4mZMXT_x1YaZ-Bw62dtIrpuGlVFtU6dzmbaaFRk-3RWFKL3lFuCRyjAR2kOTiLicUx-5zN4Q0wSvb32EJ9IigQ6flTEPnlMVl5p2Hfngfj4kOrWe4y-kaDqkQcuhOfzrlSH4vXVStAriwamO8fieTmp6Ng2OjQ0zTivf99tv6AdJw7pVpUB1RqFrn1bNJhF4qY710B-3MSKy-o-WZlcIzd-A0fEBtsaPOv0Zj6YBhIivs?access_token=EwAQA61DBAAUmcDj0azQ5tf1lkBfAvHLBzXl5ugAAUaWXqv4xxsXQJj7knL0vBB3EaF8PdT7wwt10LGmdc8azvZ5J5KIs4MuIhaRO6njcfGPlHKVy/H8WsrAjJpOrt7NGPWaOe89ngPDLkPl/%2bwKEzv8LbbnGP/YrQmdlfQBTGQ7rc4Xqk3YACPvGf9hzmUr2DcGknXNCP14mm8Pkq6hb/6j6u/HoFxP42wwimEVBDX098YrTlwg1sSsLFxqEfYZMYsnIGNtxnsnEiFWOrc%2bfKs9NYggnB%2b0KeIt57LWeaCpqLANf2c8xUnq44lQIxMT%2bE2nAXMvm7j9G8cJCzzCSqRlACPhspe9tqR3E7h7m/ZU88YwPbURFuLk8XnqaKADZgAACNMRsfEjioa64AEMi7t/6DQU0QfvnklPuAQVn4Eb%2bxc7rIwPvlH2YbiWyjMN6WHFM3um3QjWM4isEQaPhyi85obUdiqEVRLqfkUpV0e/l10cY1AfYYIiE7PhDnTaLfD1jckSvGU5Ki0YXNWiONMBKMEagIGveyBhRWrtV2Lxxq1nRIBY7R3joAg8CzjNDHWNXAxGMdGSlEZuQhVq1O%2bPSTBnM1clu%2blMEy7a2/RjRfdwNi8nMKk0y6SPY0QayJ1S2JH24U9mPr8otaQPCb/l3NQuVAKJnHz5gJ%2buDbjaLLc2e2EO9CYIbEMcNs2IF/txnMcJ55Cz2s9cXjG2p2AAvrIYIo6yKIbQbVl0n8ut9FDZyvKdAEYIxnuPXUN9UVUzujE3XM1CidzXMJr2uIwTi/8SlKs7e2Z3ymKJ/uMiR2Q1Cmsyu5IfgCJbdz9YFJ8eRpJOsiu0wA5kqw/fLfLh4wLmIdUIV5ibjn2soOf3xNMttlM3ALbz7OrAPa1jVwarEQL4fmnYsbPVHDay3uQH13wPwa8DUye2SuPOmdzKPdHr4Hhi8dMQZjQ2GfjKaiqPfhatHrGaUurXJk2DMXJ8LxfobRkDRorSEVrMEtXEYfZHDRCWqHAsxDLU8mnK437LXjuob4kZnCIrSI0KAg%3d%3d
// @icon64            https://public.bl.files.1drv.com/y4mZMXT_x1YaZ-Bw62dtIrpuGlVFtU6dzmbaaFRk-3RWFKL3lFuCRyjAR2kOTiLicUx-5zN4Q0wSvb32EJ9IigQ6flTEPnlMVl5p2Hfngfj4kOrWe4y-kaDqkQcuhOfzrlSH4vXVStAriwamO8fieTmp6Ng2OjQ0zTivf99tv6AdJw7pVpUB1RqFrn1bNJhF4qY710B-3MSKy-o-WZlcIzd-A0fEBtsaPOv0Zj6YBhIivs?access_token=EwAQA61DBAAUmcDj0azQ5tf1lkBfAvHLBzXl5ugAAUaWXqv4xxsXQJj7knL0vBB3EaF8PdT7wwt10LGmdc8azvZ5J5KIs4MuIhaRO6njcfGPlHKVy/H8WsrAjJpOrt7NGPWaOe89ngPDLkPl/%2bwKEzv8LbbnGP/YrQmdlfQBTGQ7rc4Xqk3YACPvGf9hzmUr2DcGknXNCP14mm8Pkq6hb/6j6u/HoFxP42wwimEVBDX098YrTlwg1sSsLFxqEfYZMYsnIGNtxnsnEiFWOrc%2bfKs9NYggnB%2b0KeIt57LWeaCpqLANf2c8xUnq44lQIxMT%2bE2nAXMvm7j9G8cJCzzCSqRlACPhspe9tqR3E7h7m/ZU88YwPbURFuLk8XnqaKADZgAACNMRsfEjioa64AEMi7t/6DQU0QfvnklPuAQVn4Eb%2bxc7rIwPvlH2YbiWyjMN6WHFM3um3QjWM4isEQaPhyi85obUdiqEVRLqfkUpV0e/l10cY1AfYYIiE7PhDnTaLfD1jckSvGU5Ki0YXNWiONMBKMEagIGveyBhRWrtV2Lxxq1nRIBY7R3joAg8CzjNDHWNXAxGMdGSlEZuQhVq1O%2bPSTBnM1clu%2blMEy7a2/RjRfdwNi8nMKk0y6SPY0QayJ1S2JH24U9mPr8otaQPCb/l3NQuVAKJnHz5gJ%2buDbjaLLc2e2EO9CYIbEMcNs2IF/txnMcJ55Cz2s9cXjG2p2AAvrIYIo6yKIbQbVl0n8ut9FDZyvKdAEYIxnuPXUN9UVUzujE3XM1CidzXMJr2uIwTi/8SlKs7e2Z3ymKJ/uMiR2Q1Cmsyu5IfgCJbdz9YFJ8eRpJOsiu0wA5kqw/fLfLh4wLmIdUIV5ibjn2soOf3xNMttlM3ALbz7OrAPa1jVwarEQL4fmnYsbPVHDay3uQH13wPwa8DUye2SuPOmdzKPdHr4Hhi8dMQZjQ2GfjKaiqPfhatHrGaUurXJk2DMXJ8LxfobRkDRorSEVrMEtXEYfZHDRCWqHAsxDLU8mnK437LXjuob4kZnCIrSI0KAg%3d%3d
// @updateURL         https://public.bl.files.1drv.com/y4mnWIHjlINdZiMIJQ6t7GBN75tR_fa2MS3vOUmK3td40UuaTQzwOTREVeTkBEjYWXOGzwdRmIxPdu8KOz7B3CvtGDX2j6uHRiTPoBfCuttzqbDAZ6YrnP96IOpZ5tRrQFkdhw_bW2BqUgpe1OU6S8Recc5H_lY34IF7nKC9B72XbCQBTrrGcSI3hpNIm-uZ9sjXOrRnESFJ2tJCx2H9G5TTRlSItndz0aTXoNbo_N-bEI?access_token=EwAQA61DBAAUmcDj0azQ5tf1lkBfAvHLBzXl5ugAAUaWXqv4xxsXQJj7knL0vBB3EaF8PdT7wwt10LGmdc8azvZ5J5KIs4MuIhaRO6njcfGPlHKVy/H8WsrAjJpOrt7NGPWaOe89ngPDLkPl/%2bwKEzv8LbbnGP/YrQmdlfQBTGQ7rc4Xqk3YACPvGf9hzmUr2DcGknXNCP14mm8Pkq6hb/6j6u/HoFxP42wwimEVBDX098YrTlwg1sSsLFxqEfYZMYsnIGNtxnsnEiFWOrc%2bfKs9NYggnB%2b0KeIt57LWeaCpqLANf2c8xUnq44lQIxMT%2bE2nAXMvm7j9G8cJCzzCSqRlACPhspe9tqR3E7h7m/ZU88YwPbURFuLk8XnqaKADZgAACNMRsfEjioa64AEMi7t/6DQU0QfvnklPuAQVn4Eb%2bxc7rIwPvlH2YbiWyjMN6WHFM3um3QjWM4isEQaPhyi85obUdiqEVRLqfkUpV0e/l10cY1AfYYIiE7PhDnTaLfD1jckSvGU5Ki0YXNWiONMBKMEagIGveyBhRWrtV2Lxxq1nRIBY7R3joAg8CzjNDHWNXAxGMdGSlEZuQhVq1O%2bPSTBnM1clu%2blMEy7a2/RjRfdwNi8nMKk0y6SPY0QayJ1S2JH24U9mPr8otaQPCb/l3NQuVAKJnHz5gJ%2buDbjaLLc2e2EO9CYIbEMcNs2IF/txnMcJ55Cz2s9cXjG2p2AAvrIYIo6yKIbQbVl0n8ut9FDZyvKdAEYIxnuPXUN9UVUzujE3XM1CidzXMJr2uIwTi/8SlKs7e2Z3ymKJ/uMiR2Q1Cmsyu5IfgCJbdz9YFJ8eRpJOsiu0wA5kqw/fLfLh4wLmIdUIV5ibjn2soOf3xNMttlM3ALbz7OrAPa1jVwarEQL4fmnYsbPVHDay3uQH13wPwa8DUye2SuPOmdzKPdHr4Hhi8dMQZjQ2GfjKaiqPfhatHrGaUurXJk2DMXJ8LxfobRkDRorSEVrMEtXEYfZHDRCWqHAsxDLU8mnK437LXjuob4kZnCIrSI0KAg%3d%3d
// @downloadURL       https://public.bl.files.1drv.com/y4mnWIHjlINdZiMIJQ6t7GBN75tR_fa2MS3vOUmK3td40UuaTQzwOTREVeTkBEjYWXOGzwdRmIxPdu8KOz7B3CvtGDX2j6uHRiTPoBfCuttzqbDAZ6YrnP96IOpZ5tRrQFkdhw_bW2BqUgpe1OU6S8Recc5H_lY34IF7nKC9B72XbCQBTrrGcSI3hpNIm-uZ9sjXOrRnESFJ2tJCx2H9G5TTRlSItndz0aTXoNbo_N-bEI?access_token=EwAQA61DBAAUmcDj0azQ5tf1lkBfAvHLBzXl5ugAAUaWXqv4xxsXQJj7knL0vBB3EaF8PdT7wwt10LGmdc8azvZ5J5KIs4MuIhaRO6njcfGPlHKVy/H8WsrAjJpOrt7NGPWaOe89ngPDLkPl/%2bwKEzv8LbbnGP/YrQmdlfQBTGQ7rc4Xqk3YACPvGf9hzmUr2DcGknXNCP14mm8Pkq6hb/6j6u/HoFxP42wwimEVBDX098YrTlwg1sSsLFxqEfYZMYsnIGNtxnsnEiFWOrc%2bfKs9NYggnB%2b0KeIt57LWeaCpqLANf2c8xUnq44lQIxMT%2bE2nAXMvm7j9G8cJCzzCSqRlACPhspe9tqR3E7h7m/ZU88YwPbURFuLk8XnqaKADZgAACNMRsfEjioa64AEMi7t/6DQU0QfvnklPuAQVn4Eb%2bxc7rIwPvlH2YbiWyjMN6WHFM3um3QjWM4isEQaPhyi85obUdiqEVRLqfkUpV0e/l10cY1AfYYIiE7PhDnTaLfD1jckSvGU5Ki0YXNWiONMBKMEagIGveyBhRWrtV2Lxxq1nRIBY7R3joAg8CzjNDHWNXAxGMdGSlEZuQhVq1O%2bPSTBnM1clu%2blMEy7a2/RjRfdwNi8nMKk0y6SPY0QayJ1S2JH24U9mPr8otaQPCb/l3NQuVAKJnHz5gJ%2buDbjaLLc2e2EO9CYIbEMcNs2IF/txnMcJ55Cz2s9cXjG2p2AAvrIYIo6yKIbQbVl0n8ut9FDZyvKdAEYIxnuPXUN9UVUzujE3XM1CidzXMJr2uIwTi/8SlKs7e2Z3ymKJ/uMiR2Q1Cmsyu5IfgCJbdz9YFJ8eRpJOsiu0wA5kqw/fLfLh4wLmIdUIV5ibjn2soOf3xNMttlM3ALbz7OrAPa1jVwarEQL4fmnYsbPVHDay3uQH13wPwa8DUye2SuPOmdzKPdHr4Hhi8dMQZjQ2GfjKaiqPfhatHrGaUurXJk2DMXJ8LxfobRkDRorSEVrMEtXEYfZHDRCWqHAsxDLU8mnK437LXjuob4kZnCIrSI0KAg%3d%3d
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
