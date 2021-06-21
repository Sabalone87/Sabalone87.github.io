let sound = 0;
// 控制背景音 和更改圖片
$(window).bind("keydown", (e) => {
  if (e.keyCode == 86 && sound === 1) {
    $("#backgroundSound")[0].pause();
    sound = 0;
    $("#icon").removeClass("fa-volume-up");
    $("#icon").addClass("fa-volume-mute");
  } else if (e.keyCode == 86 && sound === 0) {
    $("#backgroundSound")[0].play();
    sound = 1;
    $("#icon").removeClass("fa-volume-mute");
    $("#icon").addClass("fa-volume-up");
  }
});
