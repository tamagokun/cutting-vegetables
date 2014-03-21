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
      sword.attr('class', ['sword', 'in', color].join(' '));
      overlay.html( card.find('.content').html() );
      setTimeout(function() {
        overlay.addClass('in');
      }, 650);

    });

    // close video overlay
    $(document).on('click', '.close', function(e) {

      e.preventDefault();
      sword.removeClass('in');
      overlay.attr('class', 'out');
      setTimeout(function() {
        overlay.empty();
      }, 500);

    });

    // search
    $('input[name=query]').on('keyup', function(e) {
      var words = $(this).val().toLowerCase().split(/\s/);
      var tags = [];
      var match = false;

      // filter out tiny words
      $.each(words, function(i, word) {
        if (word.length < 3) words.splice(i, 1);
      });

      $('.card').each(function() {
        tags = $(this).attr('data-tags').toLowerCase().split(/\s/);
        match = false;

        if (words.length < 1) match = true;

        $.each(words, function(i, word) {
          $.each(tags, function(j, tag) {
            if (tag.indexOf(word) > -1) match = true;
          });
        });
        match ? $(this).removeClass('no-match') : $(this).addClass('no-match');
      });
    });

  });

})(jQuery);
