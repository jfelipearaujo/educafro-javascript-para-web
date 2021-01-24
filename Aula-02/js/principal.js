var titulo = document.querySelector(".titulo");

titulo.textContent = "Aparecida Nutricionista";

var trPaciente = document.querySelector(".paciente");

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
}

if (altura <= 0 || altura >= 3.0) {
  alturaValida = false;
  tdImc.textContent = "Altura inválida!";
}

if (pesoValido && alturaValida) {
  var imc = peso / (altura * altura);

  tdImc.textContent = imc;
}
