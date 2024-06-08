function obterDadosAluno() {
    let nome, idade, serie, escola, materia;

    while (!nome) {
        nome = window.prompt("Qual o seu nome?");
        if (nome === null) return; 
    }
    do {
        idade = window.prompt("Qual a sua idade?");
        if (idade === null) return; 
        idade = Number(idade); 
    } while (isNaN(idade) || idade < 0 || idade > 140);

    while (!serie) {
        serie = window.prompt("Qual a sua série?");
        if (serie === null) return; 
    }
    while (!escola) {
        escola = window.prompt("Qual o nome da sua escola?");
        if (escola === null) return;
    }
    while (!materia) {
        materia = window.prompt("Qual a sua matéria favorita?");
        if (materia === null) return;
    }

    let confirmação = window.confirm("Você confirma os dados informados?");

    if (confirmação) {
        document.getElementById("nome-aluno").innerHTML = nome;
        document.getElementById("idade-aluno").innerHTML = idade;
        document.getElementById("serie-aluno").innerHTML = serie;
        document.getElementById("escola-aluno").innerHTML = escola;
        document.getElementById("materia-aluno").innerHTML = materia;
    } else {
        window.alert("Os dados não foram confirmados.");
    }
}

// calcular a media das notas
function calcularMedia(notas) {
    let soma = notas.reduce((acumulador, valorAtual) => acumulador + valorAtual, 0);
    return (soma / notas.length).toFixed(1);
}

// adicionar uma nova linha na tabela
function adicionarMateria(event) {
    event.preventDefault(); // Arruma o bug duplo ao executar a funcao

    let materia = prompt("qual o nome da materia deseja adicionar?")
    let notas = []
    let nota
    let i = 0

    while (i < 4) {
        nota = parseFloat(prompt(`digite a nota ${i + 1} da materia ${materia}:`))
        if (!isNaN(nota) && nota >= 0 && nota <= 10) {
            notas.push(nota)
            i++
        } else {
            alert("por favor, insira um valor valido entre 0 e 10.");
        }
    }

    let media = calcularMedia(notas)
    let tbody = document.getElementById("tbody-notas")
    tbody.innerHTML += 
    `
        <tr>
            <td>${materia}</td>
            <td>${notas[0]}</td>
            <td>${notas[1]}</td>
            <td>${notas[2]}</td>
            <td>${notas[3]}</td>
            <td>${media}</td>
        </tr>
    `

        // Atualiza a média geral
        atualizarMedias();

}

function atualizarMedias() {
    let todasNotas = [];
    let medias = document.querySelectorAll('#tbody-notas tr td:last-child');
    medias.forEach(td => todasNotas.push(parseFloat(td.textContent)));
    
    let mediaGeral = calcularMedia(todasNotas);
    document.getElementById('media-geral').textContent = mediaGeral;

    let maiorMedia = Math.max(...todasNotas);
    document.getElementById('maior-media').textContent = maiorMedia;
}


document.querySelector('.btn.btn-dark').addEventListener('click', adicionarMateria);

window.onload = obterDadosAluno; // executa as perguntas ao carregar a pagina
