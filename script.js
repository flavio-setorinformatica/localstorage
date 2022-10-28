let arr = [];

function add() {
  let nome = document.getElementById("nome").value;
  let sobrenome = document.getElementById("sobrenome").value;
  let cpf = document.getElementById("cpf").value;

  var pessoa = {
    nome: nome,
    sobrenome: sobrenome,
    cpf: cpf,
  };

  if (localStorage.Cadastros) {
    arr = JSON.parse(localStorage.getItem("Cadastros"));
  }
  arr.push(pessoa);
  localStorage.Cadastros = JSON.stringify(arr);
}

function clearItems() {
  arr = [];
  localStorage.Cadastros = JSON.stringify(arr);
}

function test() {
  let string = localStorage.Cadastros;

  result = JSON.parse(string);

  console.log(result);
}
