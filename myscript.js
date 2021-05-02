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
});

$("#project1").hover(
  function () {
    $("#project1-text").animate({ opacity: 1 }, 500);
    $("#project1-btn").animate({ opacity: 1 }, 500);
    $("#project1-cover").animate({ opacity: 0.3 }, 500);
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
    $("#project2-cover").animate({ opacity: 0.3 }, 100);
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
    $("#project3-cover").animate({ opacity: 0.3 }, 500);
  },
  function () {
    $("#project3-text").animate({ opacity: 0 }, 100);
    $("#project3-btn").animate({ opacity: 0 }, 100);
    $("#project3-cover").animate({ opacity: 0 }, 100);
  }
);

//contact

let form = $("#form"),
  name = $("#username"),
  email = $("#useremail"),
  subject = $("#usersubject"),
  msg = $("#usermsg"),
  submit = $("#submit");
