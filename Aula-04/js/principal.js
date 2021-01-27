var titulo = document.querySelector(".titulo");

titulo.textContent = "Aparecida Nutricionista";

var trPacientes = document.querySelectorAll(".paciente");

for (var index = 0; index < trPacientes.length; index++) {
  var trPaciente = trPacientes[index];

  var tdPeso = trPaciente.querySelector(".info-peso");
  var tdAltura = trPaciente.querySelector(".info-altura");

  var peso = tdPeso.textContent;
  var altura = tdAltura.textContent;

  var tdImc = trPaciente.querySelector(".info-imc");

  var pesoValido = true;
  var alturaValida = true;

  if (peso <= 0 || peso >= 1000) {
    pesoValido = false;

    tdImc.textContent = "Peso inválido!";
    trPaciente.classList.add("paciente-invalido");
  }

  if (altura <= 0 || altura >= 3.0) {
    alturaValida = false;

    tdImc.textContent = "Altura inválida!";
    trPaciente.classList.add("paciente-invalido");
  }

  if (pesoValido && alturaValida) {
    var imc = peso / (altura * altura);

    tdImc.textContent = imc.toFixed(2);
  }
}

// -----

var btnAdicionar = document.querySelector("#adicionar-paciente");

btnAdicionar.addEventListener("click", function (event) {
  event.preventDefault();

  var form = document.querySelector("#frm-novo-paciente");

  var nome = form.nome.value;
  var peso = form.peso.value;
  var altura = form.altura.value;
  var gordura = form.gordura.value;

  var trNovoPaciente = document.createElement("tr");
  trNovoPaciente.classList.add("paciente");

  var tdNome = document.createElement("td");
  var tdPeso = document.createElement("td");
  var tdAltura = document.createElement("td");
  var tdGordura = document.createElement("td");
  var tdImc = document.createElement("td");

  tdNome.textContent = nome;
  tdPeso.textContent = peso;
  tdAltura.textContent = altura;
  tdGordura.textContent = gordura;

  trNovoPaciente.appendChild(tdNome);
  trNovoPaciente.appendChild(tdPeso);
  trNovoPaciente.appendChild(tdAltura);
  trNovoPaciente.appendChild(tdGordura);
  trNovoPaciente.appendChild(tdImc);

  var tblPacientes = document.querySelector("#tabela-pacientes");

  tblPacientes.appendChild(trNovoPaciente);
});
