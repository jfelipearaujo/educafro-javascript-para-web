var btnAdicionar = document.querySelector("#adicionar-paciente");

btnAdicionar.addEventListener("click", function (event) {
  event.preventDefault();

  var form = document.querySelector("#frm-novo-paciente");

  var paciente = obtemDadosPaciente(form);

  var trNovoPaciente = obtemTrPaciente(paciente);

  var tblPacientes = document.querySelector("#tabela-pacientes");

  tblPacientes.appendChild(trNovoPaciente);

  form.reset();
});

function obtemDadosPaciente(form) {
  var paciente = {
    nome: form.nome.value,
    peso: form.peso.value,
    altura: form.altura.value,
    gordura: form.gordura.value,
    imc: calcularImc(form.peso.value, form.altura.value),
  };

  return paciente;
}

function obtemTrPaciente(paciente) {
  var trNovoPaciente = document.createElement("tr");
  trNovoPaciente.classList.add("paciente");

  var tdNome = criarTdComClasse("info-nome", paciente.nome);
  var tdPeso = criarTdComClasse("info-peso", paciente.peso);
  var tdAltura = criarTdComClasse("info-altura", paciente.altura);
  var tdGordura = criarTdComClasse("info-gordura", paciente.gordura);
  var tdImc = criarTdComClasse("info-imc", paciente.imc);

  trNovoPaciente.appendChild(tdNome);
  trNovoPaciente.appendChild(tdPeso);
  trNovoPaciente.appendChild(tdAltura);
  trNovoPaciente.appendChild(tdGordura);
  trNovoPaciente.appendChild(tdImc);

  return trNovoPaciente;
}

function criarTdComClasse(classe, valor) {
  var td = document.createElement("td");

  td.classList.add(classe);
  td.textContent = valor;

  return td;
}
