let votos = [0, 0, 0, 0, 0]; // Candidatos 12, 13, 14 e votos brancos e nulos

let iniciaVotacao = prompt(" Iniciar a votação? (sim)");

if (iniciaVotacao.toLowerCase() === "sim") {
  let encerrarVotacao = "não"; // Definimos a variável para entrar no loop

  while (encerrarVotacao.toLowerCase() !== "sim") {
    let voto = prompt("Qual candidato você deseja votar? (12, 13, 14 ou branco)");

    if (voto === "12" || voto === "13" || voto === "14") {
      votos[parseInt(voto) - 12]++;
    } else if (voto === "branco") {
      votos[3]++;
    } else {
      votos[4]++;
      console.log("Voto nulo registrado.");
    }

    encerrarVotacao = prompt("Deseja finalizar a votação? (sim)");
    if (encerrarVotacao.toLowerCase() === "sim") {
      break; // Encerra o loop se o usuário desejar finalizar a votação
    }
  }

  let maxVotos = Math.max(...votos);
  let vencedores = [];
  let votosCandidatos = {};

  for (let i = 0; i < votos.length; i++) {
    if (votos[i] === maxVotos) {
      vencedores.push(i + 12);
    }

    votosCandidatos[i + 12] = votos[i];
  }

  if (vencedores.length === 1) {
    console.log("O vencedor da eleição foi o candidato " + vencedores[0] + ", com " + maxVotos + " votos.");
  } else {
    console.log("Empate entre os candidatos: " + vencedores.join(", ") + " com " + maxVotos + " votos cada.");
  }

  console.log("O total de votos para cada candidato foi:");

  for (let candidato in votosCandidatos) {
    if (candidato < 12 || candidato > 14) {
      console.log("Votos " + (candidato === "3" ? "brancos" : "nulos") + ": " + votosCandidatos[candidato]);
    } else {
      console.log("Candidato " + candidato + ": " + votosCandidatos[candidato]);
    }
  }
} else {
  console.log("Votação não iniciada. Execute o programa novamente para iniciar a votação.");
}