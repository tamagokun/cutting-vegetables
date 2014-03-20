(function($) {

  window.scrollReveal = new scrollReveal();

  $(document).ready(function() {

    // responsive videos
    $(document).fitVids();

    var overlay = $('#overlay');
    var sword = $('.sword');

    // cards
    $(document).on('click', '.card a', function(e) {

      e.preventDefault();
      var card = $(this).parents('.card');
      var color = card.attr('class').replace('card', '').trim();
      sword.addClass(['in', color].join(' '));
      overlay.html( card.find('.content').html() );
      setTimeout(function() {
        overlay.addClass('in');
      }, 650);

    });

    $(document).on('click', '.close', function(e) {

      e.preventDefault();
      sword.attr('class', 'sword');
      overlay.attr('class', 'out');
      setTimeout(function() {
        overlay.empty();
      }, 500);

    });

  });

})(jQuery);
