let amigos = [];

function adicionar() {
    let amigoInput = document.getElementById('nome-amigo');
    let amigoNome = amigoInput.value.trim();

    if (amigoNome === '') {
        alert('Por favor, insira um nome válido.');
        return;
    }

    let amigoNormalizado = amigoNome.toLowerCase();

    if (amigos.some(nome => nome.toLowerCase() === amigoNormalizado)) {
        alert('Esse nome já foi adicionado!');
        amigoInput.value = '';
        return;
    }

    amigos.push(amigoNome);

    let lista = document.getElementById('lista-amigos');
    lista.textContent = amigos.join(', ');

    amigoInput.value = '';
}

function sortear() {
    if (amigos.length < 2) {
        alert('É necessário pelo menos 2 amigos para realizar o sorteio.');
        return;
    }

    embaralhar(amigos);

    let sorteio = document.getElementById('lista-sorteio');
    sorteio.innerHTML = '';

    for (let i = 0; i < amigos.length; i++) {
        let amigoAtual = amigos[i];
        let amigoProximo = amigos[(i + 1) % amigos.length];
        sorteio.innerHTML += `${amigoAtual} --> ${amigoProximo} <br/>`;
    }
}

function embaralhar(lista) {
    for (let i = lista.length - 1; i > 0; i--) {
        const indiceAleatorio = Math.floor(Math.random() * (i + 1));
        [lista[i], lista[indiceAleatorio]] = [lista[indiceAleatorio], lista[i]];
    }
}

function reiniciar() {
    amigos = [];
    document.getElementById('lista-amigos').textContent = '';
    document.getElementById('lista-sorteio').innerHTML = '';
}
