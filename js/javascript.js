var date = new Date();
var divs = document.getElementsByClassName('date');
for (var i = 0; i < divs.length; i++) {
  divs[i].innerHTML = (date.getMonth()+1) + "/" + date.getDate() + "/" + date.getFullYear();
}

// ------------------jQuery Section
$(document).ready(function() {
  $(".leftColumn img").css({"margin-right":"10px"});
  $(".leftColumn_desc").css({"cursor": "pointer"});
  $(".leftColumn_desc .justify").css({"text-align": "justify"});
  $(".rightColumn").css({"padding-top" : "10px"});
  $(".rightColumn img").css({"margin-right" : "10px"});
  $(".rightColumn h1").css({"background-color":"#dee2e6", "font-size":"1.4rem", "padding":"8px" });
  $(".rightColumn .caption").css({"font-size":"0.76rem"});
  $("footer border").css({"backgrund-color":"#262f35"});
});
// ------------------jQuery Section
