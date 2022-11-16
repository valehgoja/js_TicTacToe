//Refresh
let btnRefresh = document.querySelector(".btn");
function ref(){  location.reload();}
btnRefresh.addEventListener("click", function () {
    ref();
  
});

//Cell
let click = 0;
let cells = document.querySelectorAll(".cell");
cells.forEach(function (cell, index) {
  cell.addEventListener("click", function (e) {       
    tester();
    if(cell.textContent == ""){
    if (click == 0) {
        cell.textContent = "X";
        click++;
      } else {
        cell.textContent = "O";
        click--;
      }
    }
  });

});
function tester(){
    if (cells[0].textContent == "X" && cells[1].textContent == "X" && cells[2].textContent == "X"){
        ref();
        alert("Winner : X");
        
    }  else if (cells[3].textContent == "X" && cells[4].textContent == "X" && cells[5].textContent == "X"){
        ref();
        alert("Winner : X");
    }  else  if (cells[6].textContent == "X" && cells[7].textContent == "X" && cells[8].textContent == "X"){
        ref();
        alert("Winner : X");
    }else  if (cells[0].textContent == "X" && cells[3].textContent == "X" && cells[6].textContent == "X"){
        ref();
        alert("Winner : X");
    }
    else  if (cells[1].textContent == "X" && cells[4].textContent == "X" && cells[7].textContent == "X"){
        ref();
        alert("Winner : X");
    }else  if (cells[2].textContent == "X" && cells[5].textContent == "X" && cells[8].textContent == "X"){
        ref();
        alert("Winner : X");
    }else  if (cells[0].textContent == "X" && cells[4].textContent == "X" && cells[8].textContent == "X"){
        ref();
        alert("Winner : X");
    }else  if (cells[2].textContent == "X" && cells[4].textContent == "X" && cells[6].textContent == "X"){
        ref();
        alert("Winner : X");
    }
    //O
    else if (cells[0].textContent == "O" && cells[1].textContent == "O" && cells[2].textContent == "O"){
        ref();
        alert("Winner : O");
    }  else if (cells[3].textContent == "O" && cells[4].textContent == "O" && cells[5].textContent == "O"){
        ref();
        alert("Winner : O");
    }  else  if (cells[6].textContent == "O" && cells[7].textContent == "O" && cells[8].textContent == "O"){
        ref();
        alert("Winner : O");
    }else  if (cells[0].textContent == "O" && cells[3].textContent == "O" && cells[6].textContent == "O"){
        ref();
        alert("Winner : O");
    }
    else  if (cells[1].textContent == "O" && cells[4].textContent == "O" && cells[7].textContent == "O"){
        ref(); 
        alert("Winner : O");
    }else  if (cells[2].textContent == "O" && cells[5].textContent == "O" && cells[8].textContent == "O"){
        ref();
        alert("Winner : O");
    }else  if (cells[0].textContent == "O" && cells[4].textContent == "O" && cells[8].textContent == "O"){
        ref();
        alert("Winner : O");
    }else  if (cells[2].textContent == "O" && cells[4].textContent == "O" && cells[6].textContent == "O"){
        ref();
        alert("Winner : O");
    }
}
