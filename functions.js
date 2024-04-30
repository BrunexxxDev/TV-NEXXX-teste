function searchItems() {
    const searchTerm = document.getElementById('searchInput').value.toLowerCase();
    fetch('dados.json')
        .then(response => response.json())
        .then(data => {
            const filteredItems = data.filter(item => item.nome.toLowerCase().includes(searchTerm));
            
            const dadosContainer = document.getElementById('dados-container');
            dadosContainer.innerHTML = ''; // Limpar o conteúdo anterior
            
            filteredItems.forEach(item => {
                const itemDiv = document.createElement('div');
                itemDiv.classList.add('item');

                const imagem = document.createElement('img');
                imagem.src = item.imagem;
                imagem.alt = item.nome;

                itemDiv.appendChild(imagem);

                const infoDiv = document.createElement('div');
                infoDiv.classList.add('info');

                const nomeParagrafo = document.createElement('p');
                nomeParagrafo.textContent = item.nome;
                nomeParagrafo.classList.add('nome');

                const statusParagrafo = document.createElement('p');
                statusParagrafo.textContent = item.status;
                statusParagrafo.classList.add('status');

                infoDiv.appendChild(nomeParagrafo);
                infoDiv.appendChild(statusParagrafo);

                itemDiv.appendChild(infoDiv);

                dadosContainer.appendChild(itemDiv);

                itemDiv.addEventListener('click', function() {
                    window.open(item.link, '_blank');
                });
            });
        })
        .catch(error => console.error('Erro ao carregar os dados:', error));
}