document.addEventListener('DOMContentLoaded', function() {
    // Fazendo uma solicitação ao arquivo JSON
    fetch('dados.json')
        .then(response => response.json())
        .then(data => {
            // Ordenando os dados em ordem alfabética pelo nome
            data.sort((a, b) => a.nome.localeCompare(b.nome));
            
            // Selecionando o contêiner onde os dados serão exibidos
            const dadosContainer = document.getElementById('dados-container');
            
            // Iterando sobre os dados ordenados e criando elementos HTML para cada item
            data.forEach(item => {
                // Criando uma div para cada item
                const itemDiv = document.createElement('div');
                itemDiv.classList.add('item');

                // Criando uma imagem para cada item
                const imagem = document.createElement('img');
                imagem.src = item.imagem;
                imagem.alt = item.nome; // Definindo o texto alternativo para acessibilidade
                
                // Adicionando a imagem à div do item
                itemDiv.appendChild(imagem);

                // Criando uma div para o nome e o status
                const infoDiv = document.createElement('div');
                infoDiv.classList.add('info');

                // Criando um parágrafo para exibir o nome do item
                const nomeParagrafo = document.createElement('p');
                nomeParagrafo.textContent = item.nome;
                nomeParagrafo.classList.add('nome'); // Adicionando uma classe para estilização
                
                // Criando um parágrafo para exibir o status do item
                const statusParagrafo = document.createElement('p');
                statusParagrafo.textContent = item.status;
                statusParagrafo.classList.add('status'); // Adicionando uma classe para estilização
                
                // Adicionando o nome e o status à div de informações
                infoDiv.appendChild(nomeParagrafo);
                infoDiv.appendChild(statusParagrafo);

                // Adicionando a div de informações à div do item
                itemDiv.appendChild(infoDiv);

                // Adicionando a div do item ao contêiner
                dadosContainer.appendChild(itemDiv);

                // Adicionando um evento de clique à div do item para abrir o link em uma nova guia
                itemDiv.addEventListener('click', function() {
                    window.open(item.link, '_blank');
                });
            });
        })
        .catch(error => console.log('Erro ao carregar os dados:', error));
});
