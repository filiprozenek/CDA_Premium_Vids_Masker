// ==UserScript==
// @name         CDA Premium Vids Masker
// @namespace    http://tampermonkey.net/
// @version      0.36
// @description  It lowers the opacity of premium videos thumbnails on CDA, so You don't get disturbed if looking for free vids only.
// @author       filiprozenek
// @match        https://www.cda.pl/*
// @grant        none
// ==/UserScript==

(function() {
    'use strict';

    // Select all `row-video-clip-wrapper` elements
    const videoRows = document.querySelectorAll('.video-clip-wrapper');

    videoRows.forEach(row => {
        // Look for a `.flag-video-premium` span
        const premiumFlag = row.querySelector('div > div > span.flag-video-premium');

        // If such `.flag-video-premium` exists, apply the style
        if (premiumFlag) {
            row.style.opacity = '0.1';
        }
    });
})();