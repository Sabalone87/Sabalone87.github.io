// ** navbar **
// item
$(".nav-line").on("click", function () {
  $(".navbar-nav").find("a.active").removeClass("active");
  $(this).parent("a").addClass("active");
});
//scroll
$(window).scroll(function () {
  if ($(this).scrollTop() < $('section[data-anchor="home"]').offset().top) {
    $(".navbar-nav").find("a.active").removeClass("active");
  }

  if ($(this).scrollTop() >= $('section[data-anchor="home"]').offset().top) {
    $(".navbar-nav").find("a.active").removeClass("active");
    $("li a:eq(0)").addClass("active");
  }
  if ($(this).scrollTop() >= $('section[data-anchor="about"]').offset().top) {
    $(".navbar-nav").find("a.active").removeClass("active");
    $("li a:eq(1)").addClass("active");
  }
  if ($(this).scrollTop() >= $('section[data-anchor="project"]').offset().top) {
    $(".navbar-nav").find("a.active").removeClass("active");
    $("li a:eq(2)").addClass("active");
  }
  if ($(this).scrollTop() >= $('section[data-anchor="contact"]').offset().top) {
    $(".navbar-nav").find("a.active").removeClass("active");
    $("li a:eq(3)").addClass("active");
  }
});

// ** home **
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

// ** project **

// type select
$("#htmlcss").on("click", function () {
  $("#nav-tag").text("HTML / CSS / JAVASCRIPT");
  $("#project1").css("background-image", "url(./img/musicPlayer.png)");
  $("#project2").css("background-image", "url(./img/musicPlayer.png)");
  $("#project3").css("background-image", "url(./img/comming.jpg)");
  $("#project1-text").text("MusicPlayer");
  $("#project2-text").text("MyWeb");
  $("#project3-text").text("Comming soon");
  $("#project1-link").attr({
    href: "https://github.com/Sabalone87/musicPlayer",
    target: "_blank",
  });
  $("#project2-link").attr({ href: "./index.html", target: "_blank" });
  $("#project3-link").attr({ href: "#project", target: "_self" });
  $(".type-frame").find("div.active").removeClass("active");
  $(this).parent(".program-control").addClass("active");
});
$("#react").on("click", function () {
  $("#nav-tag").text("REACT.JS");
  $("#project1").css("background-image", "url(./img/todo.png)");
  $("#project2").css("background-image", "url(./img/comming.jpg)");
  $("#project3").css("background-image", "url(./img/comming.jpg)");
  $("#project1-text").text("TodoList");
  $("#project2-text").text("Comming soon");
  $("#project3-text").text("Comming soon");
  $("#project1-link").attr({
    href: "https://github.com/Sabalone87/TodoList",
    target: "_blank",
  });
  $("#project2-link").attr({ href: "#project", target: "_self" });
  $("#project3-link").attr({ href: "#project", target: "_self" });
  $(".type-frame").find("div.active").removeClass("active");
  $(this).parent(".program-control").addClass("active");
});
$("#node").on("click", function () {
  $("#nav-tag").text("NODE.JS");
  $("#project1").css("background-image", "url(./img/comming.jpg)");
  $("#project2").css("background-image", "url(./img/comming.jpg)");
  $("#project3").css("background-image", "url(./img/comming.jpg)");
  $("#project1-text").text("Comming soon");
  $("#project2-text").text("Comming soon");
  $("#project3-text").text("Comming soon");
  $("#project1-link").attr({ href: "#project", target: "_self" });
  $("#project2-link").attr({ href: "#project", target: "_self" });
  $("#project3-link").attr({ href: "#project", target: "_self" });
  $(".type-frame").find("div.active").removeClass("active");
  $(this).parent(".program-control").addClass("active");
});

// project event
$("#project1").hover(
  function () {
    $("#project1-text").animate({ opacity: 1 }, 500);
    $("#project1-btn").animate({ opacity: 1 }, 500);
    $("#project1-cover").animate({ opacity: 0.9 }, 500);
  },
  function () {
    $("#project1-text").animate({ opacity: 0 }, 100);
    $("#project1-btn").animate({ opacity: 0 }, 100);
    $("#project1-cover").animate({ opacity: 0 }, 100);
  }
);
$("#project2").hover(
  function () {
    $("#project2-text").animate({ opacity: 1 }, 100);
    $("#project2-btn").animate({ opacity: 1 }, 100);
    $("#project2-cover").animate({ opacity: 0.9 }, 100);
  },
  function () {
    $("#project2-text").animate({ opacity: 0 }, 100);
    $("#project2-btn").animate({ opacity: 0 }, 100);
    $("#project2-cover").animate({ opacity: 0 }, 100);
  }
);
$("#project3").hover(
  function () {
    $("#project3-text").animate({ opacity: 1 }, 500);
    $("#project3-btn").animate({ opacity: 1 }, 500);
    $("#project3-cover").animate({ opacity: 0.9 }, 500);
  },
  function () {
    $("#project3-text").animate({ opacity: 0 }, 100);
    $("#project3-btn").animate({ opacity: 0 }, 100);
    $("#project3-cover").animate({ opacity: 0 }, 100);
  }
);

// ** contact **

//form
function sendMail(e) {
  let username = $("#username").val(),
    email = $("#useremail").val(),
    usersubject = $("#usersubject").val(),
    msg = $("#usermsg").val(),
    userbody =
      `My name is: ` +
      username +
      "%0a%0d" +
      `My Email is: ` +
      email +
      "%0a%0d" +
      `Msg:` +
      "%0a%0d" +
      msg;
  window.open(
    "mailto:b06501012@gmail.com?subject=" + usersubject + "&body=" + userbody
  );
}
let submit = $("#submit");
submit.on("click", (e) => {
  sendMail(e);
});
