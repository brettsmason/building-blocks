$(document).foundation();

$(function() {
  $('.search')
    .bind('click', function(event) {
      $(".search-field").toggleClass("expand-search");
    })
});
