let sala = [
    [0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0]
];


//0 = livre
//1 = ocupado
function reservar(linha, coluna, caldeira){
    //verifica se a caldeira esta livre
    if(sala[linha][coluna]==0){
        //mudar a matriz para ocupado
        sala[linha][coluna]==1
        // muda a cor da cadeira para vermelho
        caldeira.style.backgroundColor="red"

    document.getElementById("mensagem").innerText=
    "Caldeira reservada com sucesso"

    }
    else{
    document.getElementById("mensagem").innerText=
    "Caldeira Indisponivel"
    }
}
