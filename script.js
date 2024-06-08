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

obterDadosAluno();