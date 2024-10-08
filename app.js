function pesquisar() {
  // Obtém a seção onde os resultados serão exibidos
  let section = document.getElementById("resultados-pesquisa");

  let campoPesquisa = document.getElementById('campo-pesquisa').value



  campoPesquisa = campoPesquisa.toLocaleLowerCase()

  // Inicializa uma string vazia para armazenar os resultados
  let resultados = '';
  let nome = '';
  let esporte = '';

  // Itera sobre cada item de dados (assumindo que 'dados' é um array)
  for (let dado of dados) {

    nome = dado.nome.toLocaleLowerCase()
    esporte = dado.esporte.toLocaleLowerCase()

    if (campoPesquisa == '') {
      section.innerHTML = "<p>Nada foi encontrado, digite o nome de um esporte ou atleta</p>"
      return
    }
    else if (nome.includes(campoPesquisa) || (esporte.includes(campoPesquisa))) {
      // Constrói o HTML para cada resultado, formatando os dados do objeto 'dado'
      resultados += `
      <div class="item-resultado">
        <h2>
          <a href="#" target="_blank">${dado.nome}</a>
        </h2>
        <h3>
          <p>${dado.esporte}</p>
        </h3>
        <p class="descricao-meta">${dado.descricao}</p>
        <a href=${dado.link} target="_blank">Clique para saber mais</a>
      </div>
    `;
    } 
    else {
      
    }

    

    }

  // Insere o HTML gerado na seção de resultados
  section.innerHTML = resultados;
}
