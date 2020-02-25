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
        rotateMobile(iPhone);
        break;

    case 'google':
        google.classList.toggle('google');
        rotateMobile(google);
        break;

    case 'iPad':
        iPad.classList.toggle('ipad');
        rotateMobile(iPad);
        break;
  }
}

// Passing through the iframe ID from the rotate function
function rotateMobile(a) {
  // Media queires in javascript, if the screen is less than 450px run the statement
   var mq = window.matchMedia( "(max-width: 450px)" );
   // If the screen size matches
    if (mq.matches) {
      /*
       Rotate the mobile 270 degrees when the user is viewing the site on a mobile
       as roating the device on mobile version is not efficent so therefore to rotate
       the screen instead
       */
       a.classList.toggle('rotatemobile');
    }
}
