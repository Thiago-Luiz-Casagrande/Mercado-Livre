
export function buscarEstado() {
    const cep = document.getElementById("cep").value;
    buscaEstado(cep);
}

export function buscaEstado(cep) {
    const url = `https://viacep.com.br/ws/${cep}/json/`;
    
    fetch(url)
        .then(response => {
            if (!response.ok) {
                throw new Error('Erro ao buscar o CEP');
            }
            return response.json();
        })
        .then(dados => {
            const estadoElement = document.getElementById("estado");
            if (dados.erro) {
                estadoElement.textContent = "CEP inválido ou não encontrado.";
            } else {
                estadoElement.textContent = `Estado: ${dados.uf}`; // Exibe apenas o estado
            }
        })
        .catch(error => {
            console.error("Erro:", error.message);
            document.getElementById("estado").textContent = "Erro ao buscar o estado.";
        });
}