let sala = [
    [0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0]
];
//0 = livre
//1 = ocupado
function reservar(linha, coluna, cadeira){
        // verifica se a cadeira livre
    if(sala[linha][coluna]==0){
        //muda a matriz para ocupado
        sala[linha][coluna]=1
        //mudar a cor da cadeira para vermelhor
        cadeira.style.backgroundColor="red"

        document.getElementById("mensagem").innerText=
        "Cadeira agendada"
    }else{

        sala[linha][coluna]=0

        cadeira.style.backgroundColor="rgba(3, 19, 112, 0.932)"

        document.getElementById("mensagem").innerText=
        //mudar a cor da cadeira para vermelhor
        "cadeira liberada";
       
    }
}
