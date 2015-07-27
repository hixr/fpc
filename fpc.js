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
        var plotFrame = $('#fooplot-frame');
        var plotStyle = {
            width: "1800px"
            , height: "700px"
        }
        var funcStyle = {
            width: ""
            , display: "block"
        }
        var leftStyle = {
            display: "inline-block"
            , float: "left"
            , marginTop: ""
            , padding: ""
        }
        var rightStyle = {
            display: "inline-block"
            , paddingLeft: ""
            , width: ""
        }
        var slide = 'table:first'
            + ', #plots_add ~ div'
            + ', #dialog-permalink + div'
            + ', tr:nth-child(3):last'
            + ', tr:nth-child(4) td:has(table:only-child)'
            + ', td:first-child>b:only-child'
            + ', td[valign!="top"]:contains("... link to this page:")'
            + ', table:nth-of-type(2) tr:last'
            + ', div:has(table[cellspacing="0"])';
        $(slide).slideUp();
        $('td>button:has(span:contains("Permalink"))')
            .closest('td')
            .appendTo('table[width="100%"]>tbody>tr:first-child');
        $('input.data-eq.equation').css("width", "97%");
        $('li.plot.ui-widget-content').css("width", "300%");
        $('#plots_add_type-button').css(funcStyle)
            .closest('table').css("width", "100%");
        plotFrame.css(plotStyle);
        plotFrame.siblings().last().css(leftStyle);
        plotFrame.parent().next().appendTo(plotFrame.parent()).css(rightStyle);
    }
    $('body').click(runMe);
}());

