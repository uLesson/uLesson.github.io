menu.onclick = function myFunction() {
  var x = document.getElementById("mynavmenu");
  if(x.className === "navmenu"){
    x.className += " responsive";
  }else {
    x.className = "navmenu";
  }
}
