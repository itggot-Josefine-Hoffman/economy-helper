function show(){
  var elements = document.querySelectorAll('.klick');
  elements.forEach(function(element) {
    element.classList.toggle('hiddenmenu');
  });
}

function add(){
  var elements = document.querySelectorAll('.adder');
  elements.forEach(function(element) {
    element.classList.toggle('hidden');
  });
}
function info(){
  var elements = document.querySelectorAll('.info');
  elements.forEach(function(element) {
    element.classList.toggle('hidden');
  });
}
