//Calculadora de gorjeta;
//Criando funçoes

//Criando funçao para arredondar os valores.
function formatMoney(value) {
  //Evitando centavos quebrados;
  value = Math.ceil(value * 100) / 100;
  //Ela fixa o valor em 2 casas decimais.
  value = value.toFixed(2);
  return "$" + value;
}

//Função que torna o programa mais inteligente
function formatSplit(value) {
  if (value == 1) return value + " pessoa";
  return value + " pessoas";
}

function update() {
  let bill = Number(document.getElementById("yourBill").value);
  let tipPercet = document.getElementById("tipInput").value;
  let split = Number(document.getElementById("splitInput").value);
  //Calculando:
  let tipValue = bill * (tipPercet / 100);
  let billTotal = bill + tipValue;
  let billEach = billTotal / split;
  //Inserindo valores no HTML:
  document.getElementById("tipPercent").innerHTML = tipPercet + " %";
  document.getElementById("tipValue").innerHTML = formatMoney(tipValue);
  document.getElementById("totalWithTip").innerHTMl = formatMoney(billTotal);
  document.getElementById("splitValue").innerHTML = formatSplit(split);
  //Coloquei um Round para arredondar para o valor mais proximo.
  document.getElementById("billEach").innerHTML = formatMoney(billEach);
  //console.log(billTotal);
}
