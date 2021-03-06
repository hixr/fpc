// ==UserScript==
// @version     0.1.0
// @name        Customizer fooplot
// @match       *://fooplot.com/*
// @grant       none
// @noframes
// ==/UserScript==
(function() {
    'use strict';
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
        $(slide).slideUp(1000);
        $('td>button:has(span:contains("Permalink"))')
            .closest('td')
            .appendTo('table[width="100%"]>tbody>tr:first-child');
        $('input.data-eq.equation').css("width", "97%")
            .attr("value", "x");
        $('li.plot.ui-widget-content').css("width", "300%");
        $('#plots_add_type-button').css(funcStyle)
            .closest('table').css("width", "100%");
        $('#options-xmin').attr("value", "0");
        $('#options-xmax').attr("value", "1");
        $('#options-ymin').attr("value", "0");
        $('#options-ymax').attr("value", "1");
        plotFrame.css(plotStyle);
        plotFrame.siblings().last().css(leftStyle);
        plotFrame.parent().next().appendTo(plotFrame.parent()).css(rightStyle);
        theplot.setSize();
        doPlot();
    }
    window.onload = function () { $('#plots').parent().click(runMe) };
}());

