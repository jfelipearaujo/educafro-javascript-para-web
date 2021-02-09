function validarPeso(peso) {
  if (peso >= 0 && peso <= 1000) {
    return true;
  }

  return false;
}

function validarAltura(altura) {
  if (altura >= 0 && altura <= 3.0) {
    return true;
  }

  return false;
}

function validarPercentualGordura(gordura) {
  if (gordura >= 0 && gordura <= 100) {
    return true;
  }

  return false;
}

function validarPaciente(paciente) {
  var erros = [];

  if (paciente.nome.length == 0) {
    erros.push("Nome inválido");
  }

  if (paciente.peso.length == 0 || !validarPeso(paciente.peso)) {
    erros.push("Peso inválido");
  }

  if (paciente.altura.length == 0 || !validarAltura(paciente.altura)) {
    erros.push("Altura inválida");
  }

  if (paciente.gordura.length == 0 || !validarPercentualGordura(paciente.gordura)) {
    erros.push("Percentual de gordura inválido");
  }

  return erros;
}

function exibirErros(erros) {
  var listaErros = document.querySelector("#mensagens-erro");

  listaErros.innerHTML = "";

  erros.forEach((erro) => {
    var itemErro = document.createElement("li");
    itemErro.textContent = erro;

    listaErros.appendChild(itemErro);
  });
}
