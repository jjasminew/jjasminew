function openNav() {
  document.getElementById("mySideNav").style.width = "325px";
}

function closeNav() {
  document.getElementById("mySideNav").style.width = "0";
}

var quadimages = document.querySelectorAll("#quad figure");
for(i=0; i<quadimages.length; i++) {
  quadimages[i].addEventListener('click', function(){ this.classList.toggle("expanded"); quad.classList.toggle("full") }); 
}