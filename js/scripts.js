function menuToggle() {
  var x = document.getElementById('myNavtoggle');
  if (x.className === 'navtoggle') {
    x.className += ' responsive';
     $(".navtoggle.responsive nav").fadeIn(1000);
  } else {
    x.className = 'navtoggle';
     $(".navtoggle nav").attr({style: ''});
  }
}
