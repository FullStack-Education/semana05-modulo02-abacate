function obterDadosAluno() {
    let nome = window.prompt("Qual o seu nome?")
    let idade = window.prompt("Qual a sua idade?")
    let serie = window.prompt("Qual a sua série?")
    let escola = window.prompt("Qual o nome da sua escola?")
    let materia = window.prompt("Qual a sua matéria favorita?")

    let confirmação = window.confirm("Vocé confirma os dados informados?")

    if (confirmação) {
        let nomeAluno = document.getElementById("nome-aluno")
        let idadeAluno = document.getElementById("idade-aluno")
        let serieAluno = document.getElementById("serie-aluno")
        let escolaAluno = document.getElementById("escola-aluno")
        let materiaAluno = document.getElementById("materia-aluno")

        nomeAluno.innerHTML = nome
        idadeAluno.innerHTML = idade
        serieAluno.innerHTML = serie
        escolaAluno.innerHTML = escola
        materiaAluno.innerHTML = materia
    } else {
        window.alert("Os dados não foram confirmados.")
    }
}

obterDadosAluno()