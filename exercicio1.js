// Faça o exercício dos parágrafos aqui
// Este arquivo ainda não está incluído no arquivo HTML

let botoes = document.getElementsByClassName('botao-expandir-retrair');
let paragrafos = document.getElementsByTagName('p');

for (let i = 0; i < botoes.length; i++) { 

	botoes[i].addEventListener('click', function(e){

		if(botoes[i].innerHTML == "+"){
           paragrafos[i].classList.add('expandido');
           botoes[i].innerHTML = "-";
		} else {
           paragrafos[i].classList.remove('expandido');
           botoes[i].innerHTML = "+";
		}
	});

}


