"use strict";

function getInput() {
  var url = document.getElementById('url').value;
  /*
  Because getElementsByClassName return's an object so in order to get
  each class i created a for loop that will loop from 1 to 5 as there are 5
  devices and each run of the loop will grab an iframe with the class name of website
  and give it the url provided by the user
  */
  for(var i = 0; i < 5; i++) {
    document.getElementsByClassName('website')[i].src=url;
  }
}
