var main = function() {
    var state;

//The PLAY button
$('#play').click(function(){
    $('#message').text("Playing track");
    $('#player').trigger("play");
});

//The PAUSE button
$('#pause').click(function(){
    $('#message').text("Track paused");
    $('#player').trigger("pause");
});

//The MUTE button
$('#mute').click(function(){
    $('#message').text("Track muted");
    $('#player').prop('muted', true);
});

//The UNMUTE button    
$('#unmute').click(function(){
    $('#message').text("Track unmuted");
    $('#player').prop('muted', false);
});

//The STOP button
$('#stop').click(function(){
    $('#message').text("Track stopped");
    $('#player').trigger("pause");
    $('#player').prop('currentTime', 0);
});

//The VOLUMEup button 
volume = 0
$('#volumeup').click(function(){
  $('#message').text("Volume increasing");
var volume = $('#player').prop('volume')+0.1;
if (volume > 1){
  volume = 1;
}
$('#player').prop('volume',volume);
});

//The VOLUMEdown button 
$('#volumedown').click(function(){
  $('#message').text("Volume decreasing");
var volume = $('#player').prop('volume')-0.1;
if (volume < 0){
  volume = 0;
}
$('#player').prop('volume',volume);
});
}

$(document).ready(main);
