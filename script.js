
document.addEventListener('DOMContentLoaded', function() {
    const elemento = document.getElementById('sobre-mim');
    const texto = elemento.innerHTML;
    elemento.innerHTML = '';

    let i = 0;
    const speed = 100;

    function animacaoEscreve() {
        if (i < texto.length) {
            elemento.innerHTML += texto.charAt(i);
            
            i++;
            setTimeout(animacaoEscreve, speed);
        }
    }


    animacaoEscreve();
});