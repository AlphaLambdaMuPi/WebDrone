'use strict';

document.addEventListener("DOMContentLoaded", function(event) { 
  var connectbtn = document.getElementById('connect');
  window.addEventListener('click', function(evt) {
    if (evt.target == connectbtn) {
      connect();
      evt.preventDefault();
    }
  });
});
