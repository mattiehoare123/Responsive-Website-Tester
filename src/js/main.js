"use strict";

function getInput() {
  var url = document.getElementById('url').value;
  /*
  Get the url from input and get all the website classes and
  insert the website in each iframes src
  */
  for(var i = 0; i < 5; i++) {
    document.getElementsByClassName('website')[i].src=url;
  }
}

function hide(c) {
  //Add the hide class to the id password through
  c.classList.toggle('hide');
}
