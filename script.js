function maj(){
  var p1 = document.getElementById('premier_nombre').value;
      p1 = parseInt(p1);
      p2 = document.getElementById('deuxieme_nombre').value;
      p2 = parseInt(p2);
    result = p1 / p2;
  alert('Total: '+result);
}
