function leDados () {
    let strDados = localStorage.getItem('usuarios');
    let objDados = {};
    if (strDados) {
        objDados = JSON.parse (strDados);
    }
    else {
        objDados = { contatos: [ {nome:"Joao Carlos", descricao:"joao@joao.br", avaliacao:"5" },
                                 {nome:"Pedrin ui", descricao:"pedrin@gmail.uol", avaliacao:"4" },
                                 {nome:"Dani Ablueblue", descricao:"dani@coelhodoido.tv", avaliacao:"5"} ]
                   }
    }
     return objDados;
}

function salvaDados (dados) {
    localStorage.setItem ('usuarios',JSON.stringify (dados));
}

function incluirContato () {
      // ler os dados do localStorage
      let objDados = leDados();


      //Incluir um novo contato
      let strNome = document.getElementById ('campoNome').value;
      let strDescricao = document.getElementById ('campoDescricao').value;
      let strAvaliacao = document.getElementById ('campoAvaliacao').value;
      let novoContato = {
        nome: strNome,
        descricao: strDescricao,
        avaliacao: strAvaliacao
        };
        objDados.contatos.push (novoContato);
      //salvar os dados no localStorage novamente
      salvaDados (objDados);

      //atualiza os dados na tela
      imprimeDados();
}

function imprimeDados () {
    let tela = document.getElementById('tela');
    let strHtml = '';
    let objDados = leDados ();
    for (i=0; i<objDados.contatos.length; i++){
        strHtml = strHtml + `<p>${objDados.contatos[i].nome} - ${objDados.contatos[i].descricao} - ${objDados.contatos[i].avaliacao}</p>`
    }

    tela.innerHTML = strHtml;

}

// Configura os botões

document.getElementById ('btnCarregarDados').addEventListener ("click", imprimeDados);
document.getElementById ('btnIncluirContato').addEventListener ("click", incluirContato);