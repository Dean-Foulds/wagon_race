$(document).ready(function(){


    function firstAcross(message, position) {
      if (position > 1000) {
        alert(message)
        location.reload();
      }
    };

    $(window).keyup(function (e) {
      var keyCode = e.keyCode;
      var arrow = {first_bus: 39, second_bus: 37};

      switch (keyCode) {
      case arrow.first_bus:
        $('#bus1').animate({"left": "+=80px"}, "fast");
        var position = $('#bus1').offset().left;
        firstAcross("Red Wagon Wins!", position)
        break;
      case arrow.second_bus:
        $('#bus2').animate({"left": "+=80px"}, "fast");
        var position = $('#bus2').offset().left;
        firstAcross("Yellow Wagon Wins", position)
        break;
      }
    });
});

// }
  // if bus1 || bus2 half width across finish line
  // put message to prompt which player has won
  // make sure key there is no more keys pressed
  // freeze game (remove class?)
  // reset game

