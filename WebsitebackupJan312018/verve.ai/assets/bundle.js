

$(document).ready( function() {
  jQuery.validator.setDefaults({
  success: "valid"
});
$( "#myform" ).validate({
  rules: {
    field: {
      required: true,
      step: 10
    }
  }
});

console.log('duck');

  $("#signUpForm").validate();

  particlesJS.load('particles-js', 'particles.json', function() {
    console.log('callback - particles.js config loaded');
  });

});
