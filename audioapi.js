$(
  function()
  {
    var audio=document.getElementById("audio1");
    audio.addEventListener('ended', function() { 
       alert('ended');
    }, false);
    audio.addEventListener('canplaythrough', function() { 
       audio.play();
    }, false);
  }
);
