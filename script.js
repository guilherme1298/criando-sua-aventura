document.querySelectorAll('.btn-proximo').forEach(button => {
    button.addEventListener('click', function() {
        const atual = document.querySelector('.ativo');
        const proximoPassoId = 'passo-' + this.getAttribute('data-proximo');
        const proximoPasso = document.getElementById(proximoPassoId);
        
        if (proximoPasso) {
            atual.classList.remove('ativo');
            proximoPasso.classList.add('ativo');
        } else {
            console.error(`O passo com o id ${proximoPassoId} não foi encontrado.`);
        }
    });
});
