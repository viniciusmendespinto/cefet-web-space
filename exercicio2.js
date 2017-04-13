// Faça o exercício da galeria de imagens aqui
// Este arquivo ainda não está incluído no arquivo 

const botaoProximo = document.getElementById('proximo');
const botaoAnterior = document.getElementById('anterior');

let fotoAtual = 0; //Imagem corrente
let todasAsImagens = new Array();

   for (let i = 0; i < 5; i++) {
      todasAsImagens[i] = new Image();
   }
   todasAsImagens[0].src = "https://fegemo.github.io/cefet-web/images/philae-parts.jpg";
   todasAsImagens[1].src = "https://fegemo.github.io/cefet-web/images/philae-rosetta.jpg";
   todasAsImagens[2].src = "https://fegemo.github.io/cefet-web/images/philae-separation.jpg";
   todasAsImagens[3].src = "https://fegemo.github.io/cefet-web/images/philae-67-picture.jpg";
   todasAsImagens[4].src = "https://fegemo.github.io/cefet-web/images/philae-collecting.jpg";

   botaoProximo.addEventListener('click', function(e) { 
      fotoAtual++;
      if (fotoAtual < todasAsImagens.length) {
         trocaFoto(fotoAtual);
      } else {
      	 trocaFoto(0);
      	 fotoAtual = 0;
      }

   });

   botaoAnterior.addEventListener('click', function(e) { 
      if (fotoAtual > 0) {
          fotoAtual--;
          trocaFoto(fotoAtual);
      } else {
      	  trocaFoto(4);
      	  fotoAtual = 4;
      }

   });
// Seleciona a Imagem 
function trocaFoto(foto) {
   document.images[1].src = todasAsImagens[foto].src;
}



