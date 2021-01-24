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
