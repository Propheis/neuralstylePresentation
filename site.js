  function grid(cols) {
    var x = 0;
    var y = 0;

    var steps = $('.step');
    console.log("There are " + steps.length + " steps in this presentation");

    var xStep = $($(steps)[0]).width() * 2;
    var yStep = $($(steps)[0]).height() * 2;


    steps.each(function(index, step) {
      $(step).attr('data-x', x);
      $(step).attr('data-y', y);
      x += xStep;
      if ( (index + 1) % cols === 0) {
        y += yStep;
        x = 0;
      }
    });
  }

  function wheel() {
    var xStep = 800;
    var yStep = 800;

    var x = 0;
    var y = 0;
    var steps = $('.step');

    steps.each(function(index, step) {
      $(step).attr('data-x', x);
      $(step).attr('data-y', y);
      $(step).attr('data-rotate', (360 / steps.length) * index );

      x += xStep;
      y += yStep;
    });
  }

  $(document).ready(function(){
    
    grid(4);
    // wheel();
    impress().init();
  });