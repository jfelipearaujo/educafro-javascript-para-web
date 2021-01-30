var pacientes = document.querySelectorAll(".paciente");

var tblPacientes = document.querySelector("#tabela-pacientes");

tblPacientes.addEventListener("dblclick", (event) => {
  if (!confirm("Deseja realmente deletar este paciente?")) return;

  event.target.parentNode.classList.add("fade-out");

  setTimeout(() => {
    event.target.parentNode.remove();
  }, 500);
});

// pacientes.forEach((paciente) => {
//   paciente.addEventListener("dblclick", () => {
//     if (!confirm("Deseja realmente deletar este paciente?")) return;

//     paciente.remove();
//   });

//   paciente.addEventListener("dblclick", function () {
//     if (!confirm("Deseja realmente deletar este paciente?")) return;

//     this.remove();
//   });
// });
