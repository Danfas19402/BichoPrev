const bichos = [
  "Avestruz", "Águia", "Burro", "Borboleta", "Cachorro",
  "Cabra", "Carneiro", "Camelo", "Cobra", "Coelho",
  "Cavalo", "Elefante", "Galo", "Gato", "Jacaré",
  "Leão", "Macaco", "Porco", "Pavão", "Peru",
  "Touro", "Tigre", "Urso", "Veado", "Vaca"
];

// Mapeia os grupos para suas 4 dezenas
const dezenasPorGrupo = [
  [1, 2, 3, 4],    [5, 6, 7, 8],    [9, 10, 11, 12],   [13, 14, 15, 16],  [17, 18, 19, 20],
  [21, 22, 23, 24],[25, 26, 27, 28],[29, 30, 31, 32], [33, 34, 35, 36], [37, 38, 39, 40],
  [41, 42, 43, 44],[45, 46, 47, 48],[49, 50, 51, 52], [53, 54, 55, 56], [57, 58, 59, 60],
  [61, 62, 63, 64],[65, 66, 67, 68],[69, 70, 71, 72], [73, 74, 75, 76], [77, 78, 79, 80],
  [81, 82, 83, 84],[85, 86, 87, 88],[89, 90, 91, 92], [93, 94, 95, 96], [97, 98, 99, 0]
];

function preverBicho() {
  const r1 = document.getElementById("result1").value.trim();
  const r2 = document.getElementById("result2").value.trim();
  const r3 = document.getElementById("result3").value.trim();

  if (r1.length < 2 || r2.length < 2 || r3.length < 2) {
    alert("Digite 3 resultados válidos com pelo menos 2 dígitos cada.");
    return;
  }

  const dez1 = parseInt(r1.slice(-2));
  const dez2 = parseInt(r2.slice(-2));
  const dez3 = parseInt(r3.slice(-2));

  if (isNaN(dez1) || isNaN(dez2) || isNaN(dez3)) {
    alert("Os últimos dois dígitos de cada resultado devem ser numéricos.");
    return;
  }

  const soma = dez1 + dez2 + dez3;
  const grupo = soma % 25;
  const index = grupo === 0 ? 24 : grupo - 1;

  const nomeBicho = bichos[index];
  const dezenas = dezenasPorGrupo[index];
  const dezenaSorteada = dezenas[Math.floor(Math.random() * dezenas.length)];

  // Gera uma milhar aleatória terminando na dezena
  const milharAleatoria = Math.floor(Math.random() * 100) * 100 + dezenaSorteada;
  const milharFormatada = milharAleatoria.toString().padStart(4, '0');

  document.getElementById("resultado").innerText =
    `🔮 Previsão: ${nomeBicho} (Grupo ${index + 1})\n💯 Milhar sugerida: ${milharFormatada}`;
}

function limparCampos() {
  document.getElementById("result1").value = "";
  document.getElementById("result2").value = "";
  document.getElementById("result3").value = "";
  document.getElementById("resultado").innerText = "";
}
