(function($) {

  window.scrollReveal = new scrollReveal();

  $(document).ready(function() {

    // responsive videos
    $(document).fitVids();


    // cards
    $(document).on('click', '.card a', function(e) {

      e.preventDefault();
      var card = $(this).parents('.card');
      var color = card.attr('class').replace('card', '').trim();
      $('.sword').addClass(['in', color].join(' '));
      $('#overlay').html(card.find('.content').html()).addClass('in');

    });

    $(document).on('click', '.close', function(e) {

      e.preventDefault();
      $('.sword').attr('class', 'sword');
      $('#overlay').removeClass('in').empty();

    });

  });

})(jQuery);
