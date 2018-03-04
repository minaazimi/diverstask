var date = new Date();
var divs = document.getElementsByClassName('date');
for (var i = 0; i < divs.length; i++) {
  divs[i].innerHTML = (date.getMonth()+1) + "/" + date.getDate() + "/" + date.getFullYear();
}
