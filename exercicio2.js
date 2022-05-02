const numero = Number(prompt("Digite um número:"));
const numeroTitulo = document.getElementById('numero-titulo');
const exercicio = document.getElementById('exercicio');

numeroTitulo.innerHTML = numero;

exercicio.innerHTML = ' ';
exercicio.innerHTML += `<p>Raiz quadrada: ${Math.sqrt(numero)}</p>`;
exercicio.innerHTML += `<p> ${numero} é inteiro: ${Number.isInterger(numero)}</p>`;
exercicio.innerHTML += `<p>É NaN: ${Number.isNaN(numero)}</p>`;
exercicio.innerHTML += `<p>Arredondando para baixo: ${Math.floor(numero)}</p>`;
exercicio.innerHTML += `<p>Arredondando para cima: ${Math.ceil(numero)}</p>`;
exercicio.innerHTML += `<p>Com duas casas decimais: ${numero.toFixed(2)}</p>`;