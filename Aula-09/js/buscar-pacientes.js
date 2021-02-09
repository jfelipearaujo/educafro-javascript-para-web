var url = "https://api-pacientes.herokuapp.com/pacientes";

var spanErroAjax = document.querySelector("#erro-ajax");
var btnBuscarPacientes = document.querySelector("#buscar-pacientes");

btnBuscarPacientes.addEventListener("click", () => {
  console.log("Buscando pacientes...");

  // objeto resposável por fazer requisições Http
  var xhr = new XMLHttpRequest();

  xhr.open("GET", url);

  xhr.addEventListener("load", () => {
    console.log("Dados recebidos");

    if (xhr.status === 200) {
      spanErroAjax.classList.add("invisivel");

      var dados = xhr.responseText;

      var pacientes = JSON.parse(dados);

      console.log("Adicionando pacientes na tabela...");

      pacientes.forEach((paciente) => {
        adicionarPacienteNaTabela(paciente);
      });

      console.log("Pacientes adicionados");
    } else {
      console.log(xhr.status);
      console.log(xhr.responseText);

      spanErroAjax.classList.remove("invisivel");
    }
  });

  xhr.send();
});
