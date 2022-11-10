let play = document.getElementById("playmusic");

  function playMusic() {
    let audio = new Audio("sound.mp3");
    audio.play()
  }
play.addEventListener("click", playMusic);