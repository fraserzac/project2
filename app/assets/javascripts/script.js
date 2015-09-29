
  
  var allInputs = $( "Hours" );
  var formChildren = $( "form > *" );
  $( "light_field" ).text( "Found " + allInputs.length + " inputs and the form has " +
  formChildren.length + " children." );
 
  $( "form" ).submit(function( event ) {
  event.preventDefault();
  });

