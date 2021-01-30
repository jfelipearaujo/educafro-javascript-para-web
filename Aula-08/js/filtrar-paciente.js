var campofiltro = document.querySelector("#filtrar-tabela");

campofiltro.addEventListener("input", (event) => {
  var filtro = event.target.value;
  var pacientes = document.querySelectorAll(".paciente");

  if (filtro.length == 0) {
    pacientes.forEach((paciente) => {
      paciente.classList.remove("invisivel");
    });

    return;
  }

  pacientes.forEach((paciente) => {
    var nomePaciente = paciente.querySelector(".info-nome").textContent;

    var regex = new RegExp(filtro, "i");

    if (!regex.test(nomePaciente)) {
      paciente.classList.add("invisivel");
    } else {
      paciente.classList.remove("invisivel");
    }
  });
});
