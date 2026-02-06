// ==UserScript==
// @name         FigmaCN 官方汉化脚本
// @namespace   Violentmonkey Scripts
// @match        *://*.figma.com/*
// @version      1.3.0
// @homepageURL  https://github.com/Figma-Cool/figmaCN
// @grant        GM_xmlhttpRequest
// @author      figma.cool,Yancy Min,Coiven,YorKun,Pluwen,Neko,诺墨 and ts8zs
// @description from figma.cool
// @license    GPL-3.0 license
// @downloadURL https://update.greasyfork.org/scripts/526503/FigmaCN%20%E5%AE%98%E6%96%B9%E6%B1%89%E5%8C%96%E8%84%9A%E6%9C%AC.user.js
// @updateURL https://update.greasyfork.org/scripts/526503/FigmaCN%20%E5%AE%98%E6%96%B9%E6%B1%89%E5%8C%96%E8%84%9A%E6%9C%AC.meta.js
// ==/UserScript==

(function() {
    'use strict';

    GM_xmlhttpRequest({
        method: 'GET',
        url: 'https://raw.githubusercontent.com/Figma-Cool/figmaCN/refs/heads/master/js/content.js',
        onload: function(response) {
            if (response.status === 200) {
                eval(response.responseText);
            } else {
                console.error('Failed to load script:', response.status);
            }
        }
    });
})();