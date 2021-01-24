var titulo = document.querySelector(".titulo");

titulo.textContent = "Aparecida Nutricionista";

var trPaciente = document.querySelector(".paciente");

var tdPeso = trPaciente.querySelector(".info-peso");
var tdAltura = trPaciente.querySelector(".info-altura");

var peso = tdPeso.textContent;
var altura = tdAltura.textContent;

var tdImc = trPaciente.querySelector(".info-imc");

if (peso <= 0 || peso >= 1000) {
  tdImc.textContent = "Peso inválido!";

  return;
}

if (altura <= 0 || altura >= 3.0) {
  tdImc.textContent = "Altura inválida!";

  return;
}

var imc = peso / (altura * altura);

tdImc.textContent = imc;
