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

// Passing through the iframe ID as a
function rotate(a) {
  // Switch statement to see what iframe ID was passed through
  switch(a) {
    /*
    If a is iPhone then add the class that will change the width and height
    and set it to toggle so therefore when the user clicks the button again
    it will set back to default. The rotate mobile function is called passing through
    the iframe ID.
    */
    case 'iPhone':
        iPhone.classList.toggle('iphone');
        swap();
        break;

    case 'google':
        google.classList.toggle('google');
        swap();
        break;

    case 'iPad':
        iPad.classList.toggle('ipad');
        swap();
        break;
  }
}

function swap() {
  for(var i = 0; i < 3; i++) {
      var one = document.getElementsByClassName('width')[i];
      one.classList.toggle('swap-width');
  }
}

// When user presses enter to run the getInput function
function enter(e) {
  if(e.keyCode === 13) {
    getInput();
  }
}
