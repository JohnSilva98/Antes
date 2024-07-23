let computerNumber;
let useNumbers = [];
let attempts = 0;
let maxAttempts = 5;

function newGame() {
  window.location.reload();
}

function start() {
  // faz o computador escolher um numero aleatorio entre 1 e 100
  computerNumber = Math.floor(Math.random() * 100 + 1);
  //   console.log(computerNumber);
}

function compareNumbers() {
  const userNumber = Number(document.getElementById("inputBox").value);

  document.getElementById("guesses").innerHTML = useNumbers;

  if (userNumber > 100 || userNumber < 1) {
    alert("Digite um número entre 1 e 100.");
    document.getElementById("inputBox").value = "";
    return; // Sai da função sem fazer mais nada se o número for inválido
  }

  if (attempts < maxAttempts) {
    if (userNumber > computerNumber) {
      document.getElementById("textOutput").innerHTML =
        "Seu número é maior que o número escolhido!";
      document.getElementById("inputBox").value = "";
      attempts++;
      useNumbers.push(" " + userNumber);
      document.getElementById("guesses").innerHTML = useNumbers;
      document.getElementById("attempts").innerHTML = attempts;
    } else if (userNumber < computerNumber) {
      document.getElementById("textOutput").innerHTML =
        "Seu número é menor que o número escolhido!";
      document.getElementById("inputBox").value = "";
      attempts++;
      useNumbers.push(" " + userNumber);
      document.getElementById("guesses").innerHTML = useNumbers;
      document.getElementById("attempts").innerHTML = attempts;
    } else {
      document.getElementById("textOutput").innerHTML =
        "Você adivinhou o número!";
      attempts++;
      document.getElementById("guesses").innerHTML = useNumbers;
      document.getElementById("attempts").innerHTML = attempts;
      document.getElementById("inputBox").setAttribute("Readonly", "Readonly");
    }
  } else {
    document.getElementById("textOutput").innerHTML =
      "Você perdeu! O número escolhido era: " + computerNumber;

    document.getElementById("inputBox").setAttribute("Readonly", "Readonly");
  }
}
