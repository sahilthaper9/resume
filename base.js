
var resume=( function() {

    function init(){
    	$('.button-collapse').sideNav({
      menuWidth: 300, // Default is 240
      edge: 'right', // Choose the horizontal origin
      closeOnClick: true // Closes side-nav on <a> clicks, useful for Angular/Meteor
    }
  );
	 // Show sideNav
  $('.button-collapse').sideNav('show');
  // Hide sideNav
  $('.button-collapse').sideNav('hide');

      $('.slider').slider({full_width: true});

      var options = [
    {selector: '.card1', offset: 200, callback: function() {
      Materialize.showStaggeredList(".card1"); } },
    {selector: '.other-class', offset: 200, callback: function() {
      customCallbackFunc();
    } },
  ];
  Materialize.scrollFire(options);
  
 
}

    
return {
    init:init
};
  })();