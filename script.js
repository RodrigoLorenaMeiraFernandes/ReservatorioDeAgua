var contador = 1;
const vazao = document.getElementById('value');

function valvula() { 
  if (vazao.value >= 2) {
    while (contador <= 20) {
      console.log("Enchendo Reservatório");
      document.getElementById("answer__text").innerHTML = "Enchendo" + ' ' + vazao.value + " mL por minuto."; 
      contador++;
      
    }
  } else {
    console.log("Válvula fechada");
    document.getElementById("answer__text").innerHTML = "Válvula Fechada, vazão igual a 0 mL por minuto"; 
 }
}

document.querySelector('#container__button').addEventListener('click', valvula);
