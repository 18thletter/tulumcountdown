if (Meteor.isClient) {
  var Countdown = function() {
    var now = new Date();
    var leaveSFO = new Date("July 3, 2014 13:25:00");
    var millisTilTakeoff = leaveSFO - now;
    this.daysTilTakeoff = Math.floor(millisTilTakeoff / (24 * 60 * 60 * 1000));
    this.hoursTilTakeoff = Math.floor(
      (millisTilTakeoff - (this.daysTilTakeoff * 24 * 60 * 60 * 1000)) /
      (60 * 60 * 1000)
    );
    this.minutesTilTakeoff = Math.floor(
      (millisTilTakeoff - (this.daysTilTakeoff * 24 * 60 * 60 * 1000) -
      (this.hoursTilTakeoff * 60 * 60 * 1000)) /
      (60 * 1000)
    );
    this.secondsTilTakeoff = Math.floor(
      (millisTilTakeoff - (this.daysTilTakeoff * 24 * 60 * 60 * 1000) -
      (this.hoursTilTakeoff * 60 * 60 * 1000) -
      (this.minutesTilTakeoff * 60 * 1000)) /
      1000
    );
  }
  var clockDisplay = function() {
    var countdown = new Countdown();
    $('#clock').html(
      countdown.daysTilTakeoff + " days " +
      countdown.hoursTilTakeoff + " hours " +
      countdown.minutesTilTakeoff + " minutes " +
      countdown.secondsTilTakeoff + " seconds "
    );
  }
  Meteor.startup(function () {
    clockDisplay();
    Meteor.setInterval(function() {
      clockDisplay();
    }, 1000);
    $('#clock').click(function() {
      $(this).addClass('spin');
      Meteor.setTimeout(function() {
        $('#clock').removeClass('spin');
      }, 600);
    })
  });
}

