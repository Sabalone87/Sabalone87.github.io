// navbar
// item
$(".nav-line").on("click", function () {
  $(".navbar-nav").find("a.active").removeClass("active");
  $(this).parent("a").addClass("active");
});

// home
// icon
$(".fa-facebook-f").on("click", function () {
  window.open("https://www.facebook.com/profile.php?id=100002155525509");
});
$(".fa-instagram").on("click", function () {
  window.open("https://www.instagram.com/charlie871105/");
});
$(".fa-line").on("click", function () {
  window.open("https://line.me/ti/p/beF6mRHNPB");
});

//project
$("#htmlcss").on("click", function () {
  $("#nav-tag").text("HTML / CSS / JAVASCRIPT");
  console.log("hi");
});
$("#react").on("click", function () {
  $("#nav-tag").text("REACT.JS");
});
$("#node").on("click", function () {
  $("#nav-tag").text("NODE.JS");
});
