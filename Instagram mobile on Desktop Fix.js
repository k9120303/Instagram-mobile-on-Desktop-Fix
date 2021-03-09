// ==UserScript==
// @name         Instagram mobile on Desktop Fix
// @namespace    none
// @version      1.0
// @description  Change the User Agent on Instagram to use mobile version on Desktop
// @icon         https://www.google.com/s2/favicons?domain=Instagram.com
// @author       Geven Ko
// @match        https://www.instagram.com/
// @include      https://www.Instagram.com/*
// @match        https://instagram.com/
// @include      https://Instagram.com/*
// @grant        none
// @run-at document-start
// ==/UserScript==

Object.defineProperty(navigator, 'userAgent', {
    value: 'Mozilla/5.0 (Linux; Android 11) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/89.0.4389.72 Mobile Safari/537.36'
});

Object.defineProperty(window, 'innerWidth', {
  writable: true,
  configurable: true,
  value: 640,
});

document.getElementById("react-root").style.maxWidth = "640px";
document.getElementById("react-root").style.margin = '0 auto';