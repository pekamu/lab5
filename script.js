let numeroSecreto = Math.floor(Math.random() * 100) + 1;

    function verificar() {
      let palpite = Number(document.getElementById("palpite").value);
      let resultado = document.getElementById("resultado");

      if (palpite > numeroSecreto) {
        resultado.textContent = "Errou! O número secreto é menor.";
        document.getElementById("caixa").style.setProperty("background-color", "red");
      } else if (palpite < numeroSecreto) {
        resultado.textContent = "Errou! O número secreto é maior.";
        document.getElementById("caixa").style.setProperty("background-color", "red");
      } else {
        resultado.textContent = "Acertou! Era o " + numeroSecreto + ". Um novo número foi sorteado.";
        document.getElementById("caixa").style.setProperty("background-color", "white");
        numeroSecreto = Math.floor(Math.random() * 100) + 1;}}