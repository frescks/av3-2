function mostrarPagina(paginaId) {
    const paginas = document.querySelectorAll('.pagina');
    paginas.forEach(pagina => pagina.classList.remove('ativo'));
    document.getElementById(paginaId).classList.add('ativo');
}

// Exibe a página "Sobre" como padrão ao carregar
document.addEventListener('DOMContentLoaded', () => {
    mostrarPagina('sobre');
});
