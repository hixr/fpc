// ==UserScript==
// @version     0.0.1
// @name        Customizer
// @match       *://fooplot.com/*
// @run-at      document-start
// @grant       none
// @noframes
// ==/UserScript==
(function fpc() {
    'use strict';
    var injection;
    if (document.querySelector('[name="html5player/html5player"]')) {
        window.location.reload(false);
    } else if (!document.getElementById('fpc')) {
        injection = document.createElement('script');
        injection.id = 'fpc';
        injection.textContent = '(' + fpc + '())';
        document.documentElement.appendChild(injection);
        return;
    }
    function runMe() {
        alert('ok');
    }
    window.onload = runMe;
}());