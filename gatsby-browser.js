/**
 * Implement Gatsby's Browser APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/browser-apis/
 */

// Make scroll behavior of internal links smooth
exports.onClientEntry = () => {
  const SmoothScroll = require('smooth-scroll');
  new SmoothScroll('a[href*="#"]', {
    offset() {
      return document.querySelector('#header').offsetHeight;
    },
  });
};

 // You can delete this file if you're not using it
