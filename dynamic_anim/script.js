$(function() {
  var $canvas = $('#canvas');

  $('form').on('submit', function(e) {
    e.preventDefault();
    var $f = $(this),
       data = getFormObject($f);
    $canvas.append(createElement(data));
  });

  $('#animate').on('click', function(e) {
    e.preventDefault();

    $canvas.find('div').each(animateElement);
  });

  $('#stop').on('click', function() {
    $canvas.find('div').stop();
  });

  function animateElement() {
    var $e = $(this);
    var data = $e.data();
    resetElement($e);

    $e.animate({
      left: +data.end_x,
      top: +data.end_y
    }, 1000);
  }

  function createElement(data) {
    var $d = $("<div />", {
      "class": data.shape_type,
      data: data
    });

    resetElement($d);

    return $d;
  }

  function getFormObject($f) {
    var o = {};
    $f.serializeArray().forEach(function(elem) {
      o[elem.name] = elem.value;
    });
    return o;
  }

  function resetElement($e) {
    data = $e.data();
    $e.css({
      left: +data.start_x,
      top: +data.start_y
    });
  }

});