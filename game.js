var reset= document.querySelector('#b');
var squares = document.querySelectorAll("td");

reset.addEventListener('click',clearB)



function clearB() {
  for (var i = 0; i < squares.length; i++) {
    squares[i].textContent= '';
  }

}


  function wrt() {
    if (this.textContent==='') {
      this.textContent='x';
    }
    else if (this.textContent==='x') {
      this.textContent='0';
    }
    else if(this.textContent==='0'){
      this.textContent= '';
    }

  }
  for (var i = 0; i < squares.length; i++) {
    squares[i].addEventListener('click',wrt)

  }
