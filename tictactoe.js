var playerX = true;

var fill = function(cell) {
  var mark;
  if (playerX === true) {
    mark = 'X';
    playerX = false;
  } else {
    mark = 'O';
    playerX = true;
  }
  document.getElementById(cell).innerHTML = mark;
}

var clearBoard = function() {
  for (i = 1; i < 10; i++) {
    cell = 'c' + i;
    document.getElementById(cell).innerHTML = '';
  }
}