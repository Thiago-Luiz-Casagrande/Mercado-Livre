//import { Produto } from "./index.js"
let corSelecionada
 
//<img id="minhaImagem" src="fotosCadeira/cadeiraVerde.webp" width="40" height="40" >
//COLUNA 1

var imagemExibida = document.getElementById("imagemG");

var imagem6 = document.getElementById("Imagem6");

imagem6.addEventListener("click", function() {
    apagaBordasG()
    imagem6.classList.toggle("borda-azul");
    imagemExibida.src = imagem6.src;
});

var imagem7 = document.getElementById("Imagem7");

imagem7.addEventListener("click", function() {
    apagaBordasG()
    imagem7.classList.toggle("borda-azul");
    imagemExibida.src = imagem7.src;
});

var imagem8 = document.getElementById("Imagem8");

imagem8.addEventListener("click", function() {
    apagaBordasG()
    imagem8.classList.toggle("borda-azul");
    imagemExibida.src = imagem8.src;
});

var imagem9 = document.getElementById("Imagem9");

imagem9.addEventListener("click", function() {
    apagaBordasG()
    imagem9.classList.toggle("borda-azul");
    imagemExibida.src = imagem9.src;
});

var imagem10 = document.getElementById("Imagem10");

imagem10.addEventListener("click", function() {
    apagaBordasG()
    imagem10.classList.toggle("borda-azul");
    imagemExibida.src = imagem10.src;
});

//COLUNA 2

    // Seleciona a imagem pelo ID
    var imagem = document.getElementById("Imagem");

    // Adiciona um evento de clique
    imagem.addEventListener("click", function() {
        // Alterna a classe 'borda-azul' quando a imagem é clicada
        apagaBordas()
        imagem.classList.toggle("borda-azul");
        document.getElementById("selectColor").innerHTML = "Cor: Preto/Verde";
        corSelecionada = "Preto/Verde"
    });

    
    var imagem2 = document.getElementById("Imagem2");

    imagem2.addEventListener("click", function() {
        // Alterna a classe 'borda-azul' quando a imagem é clicada
        apagaBordas()
        imagem2.classList.toggle("borda-azul");
        document.getElementById("selectColor").innerHTML = "Cor: Preto/Azul";
        corSelecionada = "Preto/Azul"
    });

    var imagem3 = document.getElementById("Imagem3");

    imagem3.addEventListener("click", function() {
        // Alterna a classe 'borda-azul' quando a imagem é clicada
        apagaBordas()
        imagem3.classList.toggle("borda-azul");
        document.getElementById("selectColor").innerHTML = "Cor: Preto/Branco";
        corSelecionada = "Preto/Branco"
    });

    var imagem4 = document.getElementById("Imagem4");

    imagem4.addEventListener("click", function() {
        // Alterna a classe 'borda-azul' quando a imagem é clicada
        
        apagaBordas()
        imagem4.classList.toggle("borda-azul");
        document.getElementById("selectColor").innerHTML = "Cor: Preto/Preto";
        corSelecionada = "Preto/Preto"
    });

    var imagem5 = document.getElementById("Imagem5");

    imagem5.addEventListener("click", function() {
        // Alterna a classe 'borda-azul' quando a imagem é clicada
        apagaBordas()
        imagem5.classList.toggle("borda-azul");
        document.getElementById("selectColor").innerHTML = "Cor: Branco/Rosa";
        corSelecionada = "Branco/Rosa"
    });
// COLUNA 3




var botao = document.getElementById("addCarrinho")

botao.addEventListener('click', (event)=>{
    event.preventDefault();

    var selecao = document.getElementById("quantidade");
    var quantidadeSelecionda = selecao.value;


    alert(" Quantidade: "+quantidadeSelecionda +"   Cor: "+ corSelecionada)
})


function apagaBordas(){
    
    imagem.classList.remove("borda-azul");
    imagem2.classList.remove("borda-azul");
    imagem3.classList.remove("borda-azul");
    imagem4.classList.remove("borda-azul");
    imagem5.classList.remove("borda-azul");
}
function apagaBordasG(){
    
    imagem6.classList.remove("borda-azul");
    imagem7.classList.remove("borda-azul");
    imagem8.classList.remove("borda-azul");
    imagem9.classList.remove("borda-azul");
    imagem10.classList.remove("borda-azul");
}