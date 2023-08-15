function sim(){
    // alert("Você aceitou namorar comigo :)")
}
function desviar(t){
    var btn = t;
    btn.style.position = 'absolute';
    btn.style.bottom = gerarPosicao(10, 90);
    btn.style.left = gerarPosicao(10, 90);
    console.log("Ufahh, desviou...")
}
function gerarPosicao(min, max){
    return (Math.random() * (max - min) + min) + "%";
}