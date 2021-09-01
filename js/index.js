var button = document.querySelector('button');
var container = document.querySelector('.container');
var checkmark = document.querySelector('svg');
var className = "animate";

button.addEventListener('click', function(){
  if (!checkmark.classList.contains(className)) {
    checkmark.classList.add(className);
    
    setTimeout(function(){      
        checkmark.classList.remove(className);
    }, 1700);  
  } 
  var paramsString = document.location.search; // ?payurl=1
  var searchParams = new URLSearchParams(paramsString);
  var newurl = document.location.search.slice(8);
  if (newurl != "" && newurl != undefined) {
    document.location.href = newurl;
  }
  else {
    document.location.href = "https://discord.gg/fa";
  }
});