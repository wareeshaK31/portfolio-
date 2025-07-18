// components.js
function loadComponent(selector, url) {
  fetch(url)
    .then(response => response.text())
    .then(data => {
      document.querySelector(selector).innerHTML = data;
    });
} 